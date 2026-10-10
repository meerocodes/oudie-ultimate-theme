(() => {
  const memory = new Map();
  let sessionAvailable = true;
  const controllers = new WeakMap();
  function storage(kind, key, value) {
    try { const target = kind === 'session' ? sessionStorage : localStorage; if (value !== undefined) target.setItem(key, String(value)); return target.getItem(key); }
    catch (_) { if (kind === 'session') sessionAvailable = false; if (value !== undefined) memory.set(`${kind}:${key}`, String(value)); return memory.get(`${kind}:${key}`) || null; }
  }
  const timeValid = value => /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
  function dateValid(value) { if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false; const date = new Date(`${value}T00:00:00Z`); return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0,10) === value; }
  function schedule(config, now = new Date()) {
    const timezone = config.timezone || 'America/Toronto';
    let parts;
    try { parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23',weekday:'short'}).formatToParts(now).map(p => [p.type,p.value])); }
    catch (_) { return {error:'Enter a valid IANA schedule timezone.'}; }
    const startDate = (config.start_date || '').trim(), endDate = (config.end_date || '').trim();
    const startTime = config.start_time || '00:00', endTime = config.end_time || '00:00';
    const dailyStart = (config.daily_start || '').trim(), dailyEnd = (config.daily_end || '').trim();
    if ((startDate && !dateValid(startDate)) || (endDate && !dateValid(endDate)) || !timeValid(startTime) || !timeValid(endTime)) return {error:'Use valid YYYY-MM-DD dates and HH:MM times.'};
    if ((dailyStart || dailyEnd) && (!timeValid(dailyStart) || !timeValid(dailyEnd) || dailyStart === dailyEnd)) return {error:'Enter two different valid daily opening/closing times, or leave both blank.'};
    const start = startDate ? `${startDate}T${startTime}` : '', end = endDate ? `${endDate}T${endTime}` : '';
    if (start && end && end <= start) return {error:'Campaign end must be after its start.'};
    const date = `${parts.year}-${parts.month}-${parts.day}`, clock = `${parts.hour}:${parts.minute}`, stamp = `${date}T${clock}`;
    let weekday = parts.weekday.toLowerCase();
    let daily = true;
    if (dailyStart) {
      daily = dailyStart < dailyEnd ? clock >= dailyStart && clock < dailyEnd : clock >= dailyStart || clock < dailyEnd;
      if (dailyStart > dailyEnd && clock < dailyEnd) { const days=['sun','mon','tue','wed','thu','fri','sat']; weekday = days[(days.indexOf(weekday)+6)%7]; }
    }
    return {active:(!start || stamp >= start) && (!end || stamp < end) && config[weekday] !== false && daily, date};
  }
  function matchesPath(patterns, path) {
    return String(patterns || '').split(/\r?\n/).map(p=>p.trim()).filter(Boolean).some(pattern => pattern.endsWith('*') ? path.startsWith(pattern.slice(0,-1)) : path === pattern);
  }
  function initialize(root) {
    if (controllers.has(root)) return;
    const abort = new AbortController(), options = {signal:abort.signal};
    const namespace = `oudie-popup:${window.Shopify?.theme?.id || root.dataset.theme}`;
    const sessionKey = `${namespace}:displayed`;
    let visits = Number(storage('session',`${namespace}:views`) || 0);
    if (!document.documentElement.dataset.popupPageCounted) { visits++; storage('session',`${namespace}:views`,visits); document.documentElement.dataset.popupPageCounted='true'; }
    let visitor = storage('session',`${namespace}:visitor`);
    if (!visitor) { visitor = storage('local',`${namespace}:visited`) ? 'returning' : 'new'; storage('session',`${namespace}:visitor`,visitor); storage('local',`${namespace}:visited`,Date.now()); }
    const campaigns = [...root.querySelectorAll('[data-popup-campaign]')].map(element => {
      let config; try { config=JSON.parse(element.querySelector('[data-popup-config]').textContent); } catch (_) { config={enabled:false}; }
      return {element,config,dialog:element.querySelector('[data-popup-dialog]'),key:`${namespace}:${element.dataset.campaign}:${config.revision || '1'}`,shown:false};
    });
    let active = null, activePreview = false, returnFocus = null, exitIntent = false;
    const started = performance.now();
    const modalBusy = () => !!document.querySelector('dialog[open]:not([data-popup-dialog]),[data-menu][open],.desktop-nav .nav-group[open]');
    function permitted(campaign, now) {
      const c=campaign.config, state=schedule(c,now);
      const warning=campaign.element.querySelector('[data-popup-warning]');
      if (root.dataset.editor==='true') { warning.textContent=state.error || ''; warning.hidden=!state.error; }
      if (!c.enabled || state.error || !state.active || root.dataset.editor==='true') return false;
      if (c.kind==='signup' && (root.dataset.subscriber==='true' || storage('local',`${namespace}:subscribed`))) return false;
      if ((c.audience==='new' && visitor!=='new') || (c.audience==='returning' && visitor!=='returning') || (c.audience==='guest' && root.dataset.customer==='true')) return false;
      const mobile=matchMedia('(max-width:759px)').matches;
      if ((c.devices==='mobile' && !mobile) || (c.devices==='desktop' && mobile) || (c.trigger==='exit' && mobile)) return false;
      if (c.include_paths && !matchesPath(c.include_paths,location.pathname)) return false;
      if (matchesPath(c.exclude_paths || '/cart\n/checkout*\n/challenge*',location.pathname)) return false;
      if (sessionAvailable && visits < Number(c.pageviews || 1)) return false;
      if (root.dataset.onePerSession==='true' && storage('session',sessionKey)) return false;
      if (campaign.shown || (c.frequency==='session' && storage('session',`${campaign.key}:shown`))) return false;
      const last=Number(storage('local',`${campaign.key}:shown`) || 0), dismissed=Number(storage('local',`${campaign.key}:dismissed`) || 0);
      if (c.frequency==='day' && last && schedule(c,new Date(last)).date===state.date) return false;
      if (dismissed && now.valueOf()-dismissed < Number(c.cooldown || 0)*86400000) return false;
      return true;
    }
    function close(dismissed = false) {
      if (!active) return;
      if (dismissed && !activePreview) storage('local',`${active.key}:dismissed`,Date.now());
      const campaign=active; active=null; activePreview=false; campaign.dialog.close();
    }
    function open(campaign, preview = false) {
      if (!campaign.dialog?.showModal || active || modalBusy()) return;
      returnFocus=document.activeElement; active=campaign; activePreview=preview;
      if (!preview) { campaign.shown=true; storage('session',sessionKey,'1'); storage('session',`${campaign.key}:shown`,'1'); storage('local',`${campaign.key}:shown`,Date.now()); }
      campaign.dialog.showModal(); campaign.dialog.querySelector('[data-popup-close]').focus();
    }
    function tick() {
      if (!root.isConnected) return;
      const now=new Date();
      if (active) { const state=schedule(active.config,now); if (state.error || !state.active || modalBusy()) close(); return; }
      if (document.visibilityState!=='visible' || modalBusy()) return;
      const elapsed=(performance.now()-started)/1000;
      const depth=(scrollY+innerHeight)/Math.max(document.documentElement.scrollHeight,innerHeight)*100;
      const candidates=campaigns.filter(c=>permitted(c,now)).sort((a,b)=>Number(a.config.priority || 1)-Number(b.config.priority || 1));
      const first=candidates[0]; if (!first || elapsed < Number(first.config.delay || 0)) return;
      const trigger=first.config.trigger || 'delay';
      if (trigger==='delay' || (trigger==='scroll' && depth>=Number(first.config.scroll || 50)) || (trigger==='exit' && exitIntent)) open(first);
    }
    campaigns.forEach(campaign => {
      const dialog=campaign.dialog;
      dialog.querySelector('[data-popup-close]').addEventListener('click',()=>close(true),options);
      dialog.addEventListener('cancel',event=>{event.preventDefault();close(true);},options);
      dialog.addEventListener('click',event=>{ if (event.target===dialog) { const rect=dialog.getBoundingClientRect(); if(event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) close(true); } },options);
      dialog.addEventListener('close',()=>{if(active===campaign)active=null;if(returnFocus?.isConnected)returnFocus.focus();},options);
      const copy=dialog.querySelector('[data-popup-copy-code]');
      if(copy && navigator.clipboard?.writeText){copy.hidden=false;copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(dialog.querySelector('[data-popup-code]').textContent);dialog.querySelector('[data-popup-code-status]').textContent='Copied';}catch(_){dialog.querySelector('[data-popup-code-status]').textContent='Select the code to copy it.';}},options);}
      if(dialog.querySelector('[data-popup-success]')) {storage('local',`${namespace}:subscribed`,'1');const hash=location.hash;if(!hash || hash.includes(dialog.id))open(campaign,true);}
      else if(dialog.querySelector('[data-popup-errors]') && (!location.hash || location.hash.includes(dialog.id)))open(campaign,true);
    });
    document.addEventListener('mouseout',event=>{if(event.clientY<=0 && !event.relatedTarget)exitIntent=true;},options);
    document.addEventListener('oudie:cart-rendered',()=>{if(active)close();},options);
    document.addEventListener('shopify:block:select',event=>{const campaign=campaigns.find(c=>c.element.dataset.campaign===event.detail.blockId);if(campaign){close();open(campaign,true);}},options);
    document.addEventListener('shopify:block:deselect',()=>close(),options);
    const previewId=new URLSearchParams(location.search).get('oudie_popup_preview');
    if(previewId && (root.dataset.editor==='true' || window.Shopify?.theme?.role==='unpublished')) {const campaign=campaigns.find(c=>c.element.dataset.campaign===previewId);if(campaign)open(campaign,true);}
    let observer;
    if(root.dataset.suppressLegacy==='true') {
      document.documentElement.classList.add('oudie-native-popups');
      const suppress=()=>{const legacy=document.getElementById('pop-convert-app');if(!legacy)return;legacy.hidden=true;legacy.inert=true;legacy.setAttribute('aria-hidden','true');if(!document.querySelector('dialog[open],[data-menu][open]')){if(document.body.style.overflow==='hidden')document.body.style.removeProperty('overflow');if(document.documentElement.style.overflow==='hidden')document.documentElement.style.removeProperty('overflow');}};
      suppress(); observer=new MutationObserver(suppress);observer.observe(document.body,{childList:true,subtree:false,attributes:true,attributeFilter:['style','class']});
      document.addEventListener('focusin',event=>{if(event.target.closest('#pop-convert-app')){suppress();if(active)active.dialog.querySelector('[data-popup-close]').focus();else if(returnFocus?.isConnected)returnFocus.focus();else document.querySelector('main')?.focus();}},options);
    }
    const timer=setInterval(tick,1000);tick();
    controllers.set(root,()=>{close();clearInterval(timer);observer?.disconnect();abort.abort();document.documentElement.classList.remove('oudie-native-popups');controllers.delete(root);});
  }
  function all(scope=document){scope.querySelectorAll('[data-popup-campaigns]').forEach(initialize);}
  all();
  document.addEventListener('shopify:section:load',event=>all(event.target));
  document.addEventListener('shopify:section:unload',event=>event.target.querySelectorAll('[data-popup-campaigns]').forEach(root=>controllers.get(root)?.()));
})();
