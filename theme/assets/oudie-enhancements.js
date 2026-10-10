(() => {
  const initialized = new WeakSet();
  const fills = new Map();
  function shipping() {
    document.querySelectorAll('[data-shipping-meter]').forEach(meter => {
      const currency = meter.dataset.currency;
      const base = meter.dataset.baseCurrency;
      const native = window.Shopify?.currency;
      const rate = currency === base ? 1 : native?.active === currency ? Number(native.rate) : 0;
      const threshold = Math.ceil(Number(meter.dataset.threshold) * rate);
      const total = Number(meter.dataset.subtotal);
      if (!['CAD', 'USD'].includes(currency) || !Number.isFinite(rate) || rate <= 0 || threshold <= 0) return;
      const remaining = Math.max(0, threshold - total);
      const percent = Math.min(100, Math.max(0, total / threshold * 100));
      const amount = new Intl.NumberFormat(document.documentElement.lang || 'en', {style: 'currency', currency, currencyDisplay: 'narrowSymbol'}).format(remaining / 100);
      meter.querySelector('[data-shipping-message]').textContent = remaining ? `You’re ${amount} ${currency} away from free standard shipping to ${meter.dataset.country}.` : `Free standard shipping unlocked for ${meter.dataset.country}.`;
      meter.classList.toggle('is-unlocked', !remaining);
      const track = meter.querySelector('[data-shipping-track]'); track.hidden = false; track.setAttribute('aria-valuenow', String(Math.round(percent)));
      track.setAttribute('aria-valuetext', remaining ? `${amount} ${currency} remaining` : 'Free shipping threshold reached');
      const key = `${meter.closest('[data-cart-drawer]') ? 'drawer' : 'page'}:${currency}:${meter.dataset.country}`;
      const fill = meter.querySelector('[data-shipping-fill]'); fill.style.width = `${fills.get(key) ?? percent}%`;
      requestAnimationFrame(() => { fill.style.width = `${percent}%`; }); fills.set(key, percent);
    });
  }
  function galleries(scope) {
    scope.querySelectorAll('[data-gallery]').forEach(root => {
      if (initialized.has(root)) return; initialized.add(root);
      const primary = root.querySelector('[data-primary-media] img');
      const dialog = root.querySelector('[data-gallery-dialog]');
      const opener = root.querySelector('[data-gallery-zoom]');
      if (!primary || !dialog?.showModal || !opener) return;
      const choices = [...root.querySelectorAll('[data-gallery-image]')];
      const images = choices.map(link => ({src:link.dataset.src,alt:link.dataset.alt,link}));
      let selected = images.findIndex(image => image.link.hasAttribute('aria-current'));
      if (selected < 0) { images.unshift({src:primary.src,alt:primary.alt}); selected = 0; }
      function show(index, updatePrimary = false) {
        selected = (index + images.length) % images.length;
        const image = images[selected];
        const full = dialog.querySelector('[data-gallery-full]'); full.src = image.src; full.alt = image.alt;
        dialog.querySelector('[data-gallery-count]').textContent = `${selected + 1} / ${images.length}`;
        if (updatePrimary) {
          primary.src = image.src; primary.removeAttribute('srcset'); primary.alt = image.alt;
          choices.forEach(link => { if (link === image.link) link.setAttribute('aria-current','true'); else link.removeAttribute('aria-current'); });
        }
      }
      choices.forEach(link => link.addEventListener('click', event => { if (event.ctrlKey || event.metaKey || event.shiftKey) return; event.preventDefault(); show(images.findIndex(image => image.link === link), true); }));
      opener.hidden = false;
      opener.addEventListener('click', () => { show(selected); dialog.showModal(); dialog.querySelector('[data-gallery-close]').focus(); });
      dialog.querySelector('[data-gallery-close]').addEventListener('click', () => dialog.close());
      dialog.querySelector('[data-gallery-previous]').addEventListener('click', () => show(selected - 1));
      dialog.querySelector('[data-gallery-next]').addEventListener('click', () => show(selected + 1));
      dialog.querySelectorAll('[data-gallery-previous],[data-gallery-next]').forEach(button => { button.hidden = images.length < 2; });
      dialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') { event.preventDefault(); show(selected - 1); } if (event.key === 'ArrowRight') { event.preventDefault(); show(selected + 1); } });
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => { show(selected, true); opener.focus(); });
    });
  }
  function menus(scope) {
    scope.querySelectorAll('.desktop-nav .nav-group').forEach(group => {
      if (initialized.has(group)) return; initialized.add(group);
      let timer;
      const summary = group.querySelector('summary');
      group.addEventListener('pointerenter', event => { if (event.pointerType !== 'mouse') return; clearTimeout(timer); timer = setTimeout(() => { document.querySelectorAll('.desktop-nav .nav-group[open]').forEach(other => { if (other !== group) other.open = false; }); group.open = true; }, 150); });
      group.addEventListener('pointerleave', () => { clearTimeout(timer); timer = setTimeout(() => { if (!group.contains(document.activeElement)) group.open = false; }, 180); });
      group.addEventListener('toggle', () => summary.setAttribute('aria-expanded', String(group.open)));
      group.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); group.open = false; summary.focus(); } });
      document.addEventListener('click', event => { if (!group.contains(event.target)) group.open = false; });
      group.addEventListener('focusout', () => setTimeout(() => { if (!group.contains(document.activeElement)) group.open = false; }, 0));
    });
  }
  function initialize(scope = document) { galleries(scope); menus(scope); shipping(); }
  initialize();
  document.addEventListener('shopify:section:load', event => initialize(event.target));
  document.addEventListener('oudie:cart-rendered', shipping);
})();
