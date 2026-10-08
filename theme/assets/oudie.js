(() => {
  const menus = new WeakMap();
  function initializeMenus(scope = document) {
    scope.querySelectorAll('[data-menu]').forEach(menu => {
      if (menus.has(menu)) return;
      const summary = menu.querySelector('summary');
      const panel = menu.querySelector('[data-menu-panel]');
      const close = menu.querySelector('[data-menu-close]');
      const controller = new AbortController();
      const options = { signal: controller.signal };
      const desktop = window.matchMedia('(min-width: 1280px)');
      let blocked = [];
      let active = false;
      menu.dataset.enhanced = 'true';
      summary.setAttribute('aria-expanded', 'false');
      const focusable = () => [...panel.querySelectorAll('a[href],button,input,select,textarea,summary')].filter(el => !el.disabled && el.getClientRects().length);
      function restore() {
        blocked.forEach(([el, wasInert]) => { el.inert = wasInert; });
        blocked = [];
        document.body.classList.remove('drawer-open');
        panel.removeAttribute('role');
        panel.removeAttribute('aria-modal');
        summary.setAttribute('aria-expanded', 'false');
        if (active && menu.isConnected && !desktop.matches) summary.focus();
        active = false;
      }
      function sync() {
        if (!menu.open) { restore(); return; }
        if (active) return;
        active = true;
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        summary.setAttribute('aria-expanded', 'true');
        blocked = [...document.querySelectorAll('main,.footer,.announcement,.header-actions,.site-header > .header-inner > .wordmark,.desktop-nav')].map(el => [el, el.inert]);
        blocked.forEach(([el]) => { el.inert = true; });
        document.body.classList.add('drawer-open');
        close.focus();
      }
      function dismiss() { menu.open = false; restore(); }
      menu.addEventListener('toggle', sync, options);
      close.addEventListener('click', dismiss, options);
      menu.querySelector('[data-menu-overlay]').addEventListener('click', dismiss, options);
      document.addEventListener('keydown', event => {
        if (!menu.open) return;
        if (event.key === 'Escape') { event.preventDefault(); dismiss(); }
        if (event.key === 'Tab') {
          const items = focusable();
          const first = items[0];
          const last = items[items.length - 1];
          if (!items.length) return;
          if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && (document.activeElement === last || !panel.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
        }
      }, options);
      desktop.addEventListener('change', () => { if (desktop.matches) dismiss(); }, options);
      menus.set(menu, () => { restore(); controller.abort(); });
      sync();
    });
  }
  initializeMenus();
  document.addEventListener('shopify:section:load', event => initializeMenus(event.target));
  document.addEventListener('shopify:section:unload', event => event.target.querySelectorAll('[data-menu]').forEach(menu => menus.get(menu)?.()));


  const initialized = new WeakSet();
  function navigate(url, root) {
    if (root) {
      root.setAttribute('aria-busy', 'true');
      root.querySelector('[data-atc]')?.closest('form')?.setAttribute('inert', '');
      root.querySelectorAll('[data-atc], [data-format-select], [data-product-options] select').forEach(el => { el.disabled = true; });
    }
    window.location.assign(url);
  }
  function initializeProducts(scope = document) {
    scope.querySelectorAll('[data-product-root]').forEach(root => {
      if (initialized.has(root)) return;
      initialized.add(root);
      const format = root.querySelector('[data-format-select]');
      if (format && format.options.length) {
        root.classList.add('product-enhanced');
        root.querySelector('.format-mobile').hidden = false;
        format.addEventListener('change', () => navigate(format.value, root));
      }
      root.querySelectorAll('[data-gallery-image]').forEach(link => link.addEventListener('click', event => {
        const image = root.querySelector('[data-primary-media] img');
        if (!image) return;
        event.preventDefault();
        image.removeAttribute('srcset');
        image.src = link.dataset.src;
        image.alt = link.dataset.alt;
        root.querySelectorAll('[data-gallery-image]').forEach(el => el.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'true');
      }));
      const native = root.querySelector('[data-variant-select]');
      if (!native) return;
      const records = [...native.options].map(option => ({
        id: option.value, url: option.dataset.url, available: option.dataset.available === 'true',
        scent: option.dataset.scent, name: option.dataset.scentName, options: JSON.parse(option.dataset.options || '[]')
      }));
      const current = records.find(record => record.id === native.value);
      native.addEventListener('change', () => navigate(native.selectedOptions[0].dataset.url, root));
      if (!current || records.some(record => !record.scent || !record.options.length)) return;
      const scents = [...new Map(records.map(record => [record.scent, record.name])).entries()];
      const names = JSON.parse(native.dataset.optionNames || '[]').map(name => typeof name === 'string' ? name : name.name);
      // Identify the scent option from its one-to-one canonical relation, never from its title.
      const scentDimension = scents.length > 1 ? names.findIndex((_, index) => {
        const valuesToScents = new Map(), scentsToValues = new Map();
        records.forEach(record => {
          const value = record.options[index];
          if (!valuesToScents.has(value)) valuesToScents.set(value, new Set());
          if (!scentsToValues.has(record.scent)) scentsToValues.set(record.scent, new Set());
          valuesToScents.get(value).add(record.scent);
          scentsToValues.get(record.scent).add(value);
        });
        return [...valuesToScents.values(), ...scentsToValues.values()].every(values => values.size === 1);
      }) : -1;
      if (scents.length > 1 && scentDimension === -1) return;
      const enhanced = root.querySelector('[data-product-options]');
      function field(label, values, selected, onChange) {
        const wrapper = document.createElement('div'); wrapper.className = 'variant-field';
        const select = document.createElement('select'); select.className = 'select';
        select.id = `${native.id}-option-${enhanced.children.length}`;
        const title = document.createElement('label'); title.htmlFor = select.id; title.textContent = label;
        values.forEach(([value, text]) => select.add(new Option(text, value, false, value === selected)));
        select.addEventListener('change', () => onChange(select.value));
        wrapper.append(title, select); enhanced.append(wrapper);
      }
      function closest(candidates) {
        return candidates.map((record, order) => ({record, order, score: record.options.reduce((score, value, index) => score + (value === current.options[index] ? 2 : 0), record.available ? 1 : 0)}))
          .sort((a, b) => b.score - a.score || a.order - b.order)[0]?.record;
      }
      if (scents.length > 1) field('Scent', scents, current.scent, value => {
        const sameScent = records.filter(record => record.scent === value);
        const target = closest(sameScent.filter(record => record.available)) || closest(sameScent);
        if (target) navigate(target.url, root);
      });
      names.forEach((name, index) => {
        if (index === scentDimension) return;
        const withinScent = records.filter(record => record.scent === current.scent);
        const values = [...new Set(withinScent.map(record => record.options[index]))];
        if (values.length < 2 && (name === 'Title' || values[0] === 'Default Title')) return;
        field(name, values.map(value => [value, value + (withinScent.some(record => record.options[index] === value && record.available) ? '' : ' — Sold out')]), current.options[index], value => {
          const target = closest(withinScent.filter(record => record.options[index] === value));
          if (target) navigate(target.url, root);
        });
      });
      if (enhanced.children.length) root.querySelector('[data-native-options]').hidden = true;
    });
  }

  function initializeDiscovery(scope = document) {
    scope.querySelectorAll('[data-discovery]').forEach(root => {
      if (initialized.has(root)) return;
      initialized.add(root);
      const form = root.querySelector('[data-discovery-controls]');
      const search = root.querySelector('[data-discovery-search]');
      const format = root.querySelector('[data-discovery-format]');
      const classification = root.querySelector('[data-discovery-class]');
      const cards = [...root.querySelectorAll('[data-scent-result]')];
      const snapshots = new Map();
      const classes = new Set();
      cards.forEach(card => {
        card.dataset.classification.split('|').filter(Boolean).forEach(value => classes.add(value));
        const link = card.querySelector('.product-card-link'), price = card.querySelector('[data-card-price]'), image = card.querySelector('.product-card-media img'), article = card.querySelector('article');
        snapshots.set(card, {link, price, image, article, url: link.getAttribute('href'), priceText: price.textContent, src: image?.getAttribute('src'), srcset: image?.getAttribute('srcset'), badge: card.querySelector('.badge')?.cloneNode(true)});
      });
      [...classes].sort().forEach(value => classification.add(new Option(value.replace(/\b\w/g, letter => letter.toUpperCase()), value)));
      const params = new URLSearchParams(location.search);
      if ([...format.options].some(option => option.value === params.get('format'))) format.value = params.get('format');
      if ([...classification.options].some(option => option.value === params.get('classification'))) classification.value = params.get('classification');
      function sync() {
        const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
        let count = 0;
        cards.forEach(card => {
          const state = snapshots.get(card);
          const destination = format.value ? [...card.querySelectorAll('[data-format-destination]')].find(el => el.dataset.format === format.value && el.dataset.available === 'true') : null;
          const matches = terms.every(term => card.dataset.search.includes(term)) && (!classification.value || card.dataset.classification.split('|').includes(classification.value)) && (!format.value || !!destination);
          card.hidden = !matches;
          if (!matches) return;
          count++;
          state.link.href = destination ? destination.dataset.url : state.url;
          state.price.textContent = destination ? `${destination.dataset.label} · ${destination.dataset.price}` : state.priceText;
          card.querySelectorAll('.badge').forEach(el => el.remove());
          if (!destination && state.badge) card.querySelector('.product-card-media').append(state.badge.cloneNode(true));
          if (state.image) {
            if (destination?.dataset.image) { state.image.src = destination.dataset.image; state.image.removeAttribute('srcset'); }
            else { state.image.setAttribute('src', state.src); if (state.srcset) state.image.setAttribute('srcset', state.srcset); else state.image.removeAttribute('srcset'); }
          }
        });
        root.querySelector('[data-discovery-count]').textContent = `${count} ${count === 1 ? 'scent' : 'scents'}`;
        root.querySelector('[data-discovery-empty]').hidden = count !== 0;
      }
      function updateUrl() {
        const url = new URL(location.href);
        for (const [key, value] of [['format', format.value], ['classification', classification.value]]) {
          if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
        }
        history.replaceState(null, '', url);
      }
      form.hidden = false;
      form.addEventListener('submit', event => event.preventDefault());
      search.addEventListener('input', sync);
      [format, classification].forEach(control => control.addEventListener('change', () => { sync(); updateUrl(); }));
      function clear() { search.value = ''; format.value = ''; classification.value = ''; sync(); updateUrl(); search.focus(); }
      form.addEventListener('reset', event => { event.preventDefault(); clear(); });
      root.querySelector('[data-discovery-clear]').addEventListener('click', clear);
      sync();
    });
  }

  const cartRoot = () => document.querySelector('[data-cart-drawer]');
  const cartUrl = path => `${window.Shopify?.routes?.root || '/'}${path}`;
  let cartBusy = false;
  let cartTrigger = null;
  function message(text, error = false) {
    const drawer = cartRoot(); if (!drawer) return;
    const el = drawer.querySelector(error ? '[data-cart-error]' : '[data-cart-status]');
    el.textContent = text; el.hidden = !text;
  }
  function busy(value) {
    cartBusy = value;
    const drawer = cartRoot(); if (!drawer) return;
    drawer.setAttribute('aria-busy', String(value));
    drawer.querySelectorAll('[data-cart-quantity], [data-cart-remove], [name="checkout"]').forEach(el => {
      if ('disabled' in el) el.disabled = value;
      el.setAttribute('aria-disabled', String(value));
    });
  }
  async function request(url, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try { return await fetch(url, {...options, signal: controller.signal, headers: {...options.headers, Accept: 'application/json'}}); }
    finally { clearTimeout(timeout); }
  }
  function installCart(html) {
    if (!html) return false;
    const content = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-cart-content]');
    const drawer = cartRoot();
    if (!content || !drawer) return false;
    const active = drawer.contains(document.activeElement) ? document.activeElement : null;
    const key = active?.dataset.key;
    const wasQuantity = active?.hasAttribute('data-cart-quantity');
    drawer.querySelector('[data-cart-content]').replaceWith(content);
    document.querySelectorAll('[data-bag-count]').forEach(el => {
      el.textContent = `(${content.dataset.count})`; el.hidden = Number(content.dataset.count) === 0;
    });
    if (drawer.open && active) {
      const replacement = [...drawer.querySelectorAll(wasQuantity ? '[data-cart-quantity]' : '[data-cart-remove]')].find(el => key && el.dataset.key === key);
      (replacement || drawer.querySelector('[data-cart-close]')).focus();
    }
    return true;
  }
  async function refreshCart(sections) {
    if (installCart(sections?.['cart-drawer'])) return;
    const response = await request(`${cartUrl('')}?sections=cart-drawer`);
    if (!response.ok) throw new Error('Your bag could not refresh. Open the full bag to check its contents.');
    const data = await response.json();
    if (!installCart(data['cart-drawer'])) throw new Error('Your bag could not refresh. Open the full bag to check its contents.');
  }
  function openCart(trigger) {
    const drawer = cartRoot();
    if (!drawer || !drawer.showModal) return false;
    document.querySelectorAll('[data-menu][open]').forEach(menu => { menu.open = false; });
    if (trigger) cartTrigger = trigger;
    if (!drawer.open) drawer.showModal();
    drawer.querySelector('[data-cart-close]')?.focus();
    return true;
  }
  function closeCart() {
    const drawer = cartRoot(); if (!drawer?.open) return;
    drawer.close();
    if (cartTrigger?.isConnected) cartTrigger.focus();
  }
  async function changeCart(key, quantity) {
    if (cartBusy) return;
    const drawer = cartRoot();
    busy(true); message('', true); message('Updating bag…');
    try {
      const response = await request(cartUrl('cart/change.js'), {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: key, quantity, sections: ['cart-drawer'], sections_url: location.pathname})
      });
      const data = await response.json();
      if (!response.ok) throw new Error(typeof data.description === 'string' ? data.description : 'This quantity is unavailable.');
      await refreshCart(data.sections);
      message('Bag updated.');
    } catch (error) {
      try { await refreshCart(); } catch (_) { /* Keep the native full-bag link available. */ }
      message(error.message || 'Could not confirm the update. Open the full bag to check.', true);
      message('');
    } finally {
      busy(false);
      if (drawer?.open) {
        const quantityInput = [...drawer.querySelectorAll('[data-cart-quantity]')].find(el => el.dataset.key === key);
        if (quantity > 0 && quantityInput) quantityInput.focus();
        else if (!drawer.contains(document.activeElement)) drawer.querySelector('[data-cart-close]')?.focus();
      }
    }
  }
  document.addEventListener('click', async event => {
    const opener = event.target.closest('[data-cart-open]');
    if (opener && cartRoot()?.showModal) {
      event.preventDefault();
      if (!openCart(opener) || cartBusy) return;
      busy(true); message('', true);
      try { await refreshCart(); } catch (error) { message(error.message, true); } finally { busy(false); }
      return;
    }
    if (event.target.closest('[data-cart-close]')) { closeCart(); return; }
    const remove = event.target.closest('[data-cart-drawer] [data-cart-remove]');
    if (remove) { event.preventDefault(); if (!cartBusy) await changeCart(remove.dataset.key, 0); }
  });
  document.addEventListener('change', event => {
    const quantity = event.target.closest('[data-cart-drawer] [data-cart-quantity]');
    if (!quantity) return;
    if (!quantity.checkValidity() || !Number.isInteger(Number(quantity.value))) { quantity.reportValidity(); return; }
    changeCart(quantity.dataset.key, Number(quantity.value));
  });
  document.addEventListener('keydown', event => {
    const quantity = event.target.closest('[data-cart-drawer] [data-cart-quantity]');
    if (!quantity || event.key !== 'Enter') return;
    event.preventDefault();
    if (quantity.checkValidity() && Number.isInteger(Number(quantity.value))) changeCart(quantity.dataset.key, Number(quantity.value));
    else quantity.reportValidity();
  });
  document.addEventListener('submit', async event => {
    const form = event.target;
    const product = form.closest('[data-product-root]');
    // Only intercept Add to bag; Shopify's accelerated checkout remains native.
    if (!product || !event.submitter?.matches('[data-atc]') || !cartRoot()?.showModal) return;
    event.preventDefault();
    if (cartBusy) return;
    const button = event.submitter;
    const original = button.textContent;
    const errorEl = product.querySelector('[data-product-error]');
    errorEl.hidden = true;
    const payload = new FormData(form);
    payload.set('sections', 'cart-drawer'); payload.set('sections_url', location.pathname);
    button.disabled = true; button.textContent = 'Adding…'; busy(true);
    let accepted = false;
    try {
      const response = await request(cartUrl('cart/add.js'), {method: 'POST', body: payload});
      const data = await response.json();
      if (!response.ok) throw new Error(typeof data.description === 'string' ? data.description : 'This item could not be added.');
      accepted = true;
      await refreshCart(data.sections);
      openCart(button); message('', true); message('Added to your bag.');
    } catch (error) {
      // Never resubmit after an uncertain response: the server may already have added it.
      try { await refreshCart(); } catch (_) { /* Native cart remains the recovery path. */ }
      errorEl.textContent = accepted ? 'Added to your bag, but the drawer could not refresh. Use Bag to view it.' : `${error.message || 'Could not confirm the add.'} Check your bag before trying again.`;
      errorEl.hidden = false;
    } finally {
      button.disabled = false; button.textContent = original; busy(false);
    }
  });
  function initializeCart(scope = document) {
    scope.querySelectorAll('[data-cart-drawer]').forEach(drawer => {
      if (initialized.has(drawer)) return;
      initialized.add(drawer);
      drawer.addEventListener('click', event => { if (event.target === drawer) closeCart(); });
      drawer.addEventListener('cancel', event => { event.preventDefault(); closeCart(); });
      drawer.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const items = [...drawer.querySelectorAll('button,a[href],input,select,textarea')].filter(el => !el.disabled && el.getAttribute('aria-disabled') !== 'true' && el.getClientRects().length);
        if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      });
      drawer.addEventListener('close', () => { if (cartTrigger?.isConnected) cartTrigger.focus(); });
    });
    scope.querySelectorAll('[data-menu]').forEach(menu => {
      if (menu.dataset.cartAware) return;
      menu.dataset.cartAware = 'true';
      menu.addEventListener('toggle', () => { if (menu.open) closeCart(); });
    });
  }
  function initialize(scope = document) { initializeProducts(scope); initializeDiscovery(scope); initializeCart(scope); }
  initialize();
  document.addEventListener('shopify:section:load', event => initialize(event.target));
  document.addEventListener('pageshow', event => { if (event.persisted) location.reload(); });
})();
