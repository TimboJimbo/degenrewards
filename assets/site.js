(function(){
  // External link hygiene
  const isExternal = (href) => {
    try { const u = new URL(href, location.href); return u.origin !== location.origin; } catch(e){ return false; }
  };
  document.querySelectorAll('a[href]').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    if(isExternal(href)){
      a.setAttribute('target','_blank');
      let rel = (a.getAttribute('rel')||'').split(/\s+/);
      ['noopener','noreferrer'].forEach(x=>{ if(!rel.includes(x)) rel.push(x); });
      a.setAttribute('rel', rel.filter(Boolean).join(' '));
    }
  });
  // Cookie consent (UK-friendly neutral messaging)
  try{
    if(!localStorage.getItem('cookieconsent')){
      const bar = document.createElement('div');
      bar.className='cookiebar';
      bar.innerHTML = '<span>We use cookies for basic site functionality and analytics. <a href="/privacy.html">Learn more</a>.</span><button class="btn">OK</button>';
      bar.querySelector('.btn').onclick = ()=>{ localStorage.setItem('cookieconsent','1'); bar.remove(); };
      document.body.appendChild(bar);
    }
  }catch(e){}
  // Image fallback
  document.querySelectorAll('img').forEach(img=>{
    img.addEventListener('error', function(){
      if(this.dataset && this.dataset.fallback) {
        this.src = this.dataset.fallback;
      } else {
        this.src = '/assets/fallback-amazon-uk.png';
      }
    }, {once:true});
  });
})();
(function(){
  const isExternal = (href) => { try { const u = new URL(href, location.href); return u.origin !== location.origin; } catch(e){ return false; } };
  document.querySelectorAll('a[href]').forEach(a=>{
    const href = a.getAttribute('href'); if(!href) return;
    if(isExternal(href)){
      a.setAttribute('target','_blank');
      let rel = (a.getAttribute('rel')||'').split(/\s+/); ['noopener','noreferrer'].forEach(x=>{ if(!rel.includes(x)) rel.push(x); });
      a.setAttribute('rel', rel.filter(Boolean).join(' '));
    }
  });
  try{
    if(!localStorage.getItem('cookieconsent')){
      const bar = document.createElement('div'); bar.className='cookiebar';
      bar.innerHTML = '<span>We use cookies for basic site functionality and analytics. <a href="/privacy.html">Learn more</a>.</span><button class="btn">OK</button>';
      bar.querySelector('.btn').onclick = ()=>{ localStorage.setItem('cookieconsent','1'); bar.remove(); };
      document.body.appendChild(bar);
    }
  }catch(e){}
  document.querySelectorAll('img').forEach(img=>{
    img.addEventListener('error', function(){
      this.src = this.dataset && this.dataset.fallback ? this.dataset.fallback : "/assets/fallback-amazon-uk.png";
    }, {once:true});
  });
  // === GA4 + Consent Mode v2 + CTA/outbound events ===
  var GA_ID = 'G-G7SH0VSKH2';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
  gtag('consent','default',{
    ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied',
    analytics_storage:'denied', functionality_storage:'denied', security_storage:'granted'
  });
  function loadGA(){
    if(window.__gaLoaded) return; window.__gaLoaded = true;
    var s=document.createElement('script'); s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip:true });
  }
  try{
    if(localStorage.getItem('cookieconsent')==='1'){
      gtag('consent','update',{ analytics_storage:'granted' });
      loadGA();
    }else{
      document.addEventListener('click',function(e){
        var btn=e.target.closest('.cookiebar .btn');
        if(btn){
          try{localStorage.setItem('cookieconsent','1');}catch(_){}
          gtag('consent','update',{ analytics_storage:'granted' });
          loadGA();
        }
      });
    }
  }catch(_){}
  function brandFrom(h){ h=(h||'').toLowerCase();
    if(h.includes('roobet')) return 'roobet';
    if(h.includes('gamdom')) return 'gamdom';
    if(h.includes('duelbits')) return 'duelbits';
    return 'other';
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest('a'); if(!a) return;
    if(a.classList.contains('cta')){
      gtag('event','join_click',{ brand:brandFrom(a.href), location:a.closest('section')?.id||'unknown', page_path:location.pathname });
    }else{
      // outbound analytics for all external links
      try{ if(isExternal(a.href)) gtag('event','outbound_click',{ link_url:a.href, page_path:location.pathname }); }catch(_){}
    }
  });
  // === Smart sticky CTA (shows after 30% scroll, hides near footer) ===
  (function(){
    try{
      var bar=document.querySelector('.sticky-cta'); if(!bar) return;
      var shown=false;
      function atFooter(){
        var f=document.querySelector('footer'); if(!f) return false;
        var r=f.getBoundingClientRect();
        return r.top < (window.innerHeight - 80);
      }
      function onScroll(){
        var y=window.scrollY||document.documentElement.scrollTop||0;
        var doc=document.documentElement.scrollHeight - window.innerHeight;
        var pct = doc>0 ? (y/doc) : 0;
        var shouldShow = pct>0.3 && !atFooter();
        if(shouldShow && !shown){ bar.style.transform='translateY(0)'; shown=true; }
        if(!shouldShow && shown){ bar.style.transform='translateY(100%)'; shown=false; }
      }
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();
    }catch(e){}
  })();
})();