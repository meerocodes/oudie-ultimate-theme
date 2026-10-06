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

  document.querySelectorAll('[data-product-root]').forEach(root => {
    const select = root.querySelector('[data-variant-select]');
    const idInput = root.querySelector('[name="id"]');
    const price = root.querySelector('[data-product-price]');
    const button = root.querySelector('[data-atc]');
    if (!select || !idInput) return;
    select.addEventListener('change', () => {
      const opt = select.options[select.selectedIndex];
      idInput.value = opt.value;
      if (opt.dataset.url) {
        window.location.assign(opt.dataset.url);
        return;
      }
      if (price && opt.dataset.price) price.textContent = opt.dataset.price;
      if (button) {
        button.disabled = opt.dataset.available !== 'true';
        button.textContent = opt.dataset.available === 'true' ? 'Add to bag' : 'Sold out';
      }
    });
  });
})();
