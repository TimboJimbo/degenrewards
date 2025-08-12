
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
  // Cookie bar + GA consent + CTA/outbound tracking
  try{
    if(!localStorage.getItem('cookieconsent')){
      const bar = document.createElement('div'); bar.className='cookiebar';
      bar.innerHTML = '<span>We use cookies for basic site functionality and analytics. <a href="/privacy.html">Learn more</a>.</span><button class="btn">OK</button>';
      bar.querySelector('.btn').onclick = ()=>{ localStorage.setItem('cookieconsent','1'); bar.remove(); };
      document.body.appendChild(bar);
    }
  }catch(e){}
  // GA
  var GA_ID='G-G7SH0VSKH2'; window.dataLayer=window.dataLayer||[]; window.gtag=window.gtag||function(){dataLayer.push(arguments);};
  gtag('consent','default',{ ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied', analytics_storage:'denied', functionality_storage:'denied', security_storage:'granted' });
  function loadGA(){ if(window.__gaLoaded) return; window.__gaLoaded=true; var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID; document.head.appendChild(s); gtag('js', new Date()); gtag('config', GA_ID, { anonymize_ip:true }); }
  try{ if(localStorage.getItem('cookieconsent')==='1'){ gtag('consent','update',{analytics_storage:'granted'}); loadGA(); }
    else { document.addEventListener('click',function(e){ var btn=e.target.closest('.cookiebar .btn'); if(btn){ try{localStorage.setItem('cookieconsent','1');}catch(_){}
      gtag('consent','update',{analytics_storage:'granted'}); loadGA(); } }); } }catch(e){}
  document.addEventListener('click', function(e){ var a=e.target.closest('a'); if(!a) return;
    if(a.classList.contains('cta')){ gtag('event','join_click',{ brand:(/roobet|gamdom|duelbits/i.exec(a.href)||['other'])[0], location:a.closest('section')?.id||'unknown', page_path:location.pathname }); }
    else if(isExternal(a.href)){ gtag('event','outbound_click',{ link_url:a.href, page_path:location.pathname }); }
  });
  // CTA variant
  try{ var v=localStorage.getItem('ctaVariant'); if(!v){ v=(Math.random()>0.5?'A':'B'); localStorage.setItem('ctaVariant',v); }
    document.querySelectorAll('a.cta[data-cta-variant]').forEach(function(a){ var txt=a.textContent.trim();
      if(v==='A'){ a.textContent = txt.replace('Open ','').replace(' & check',''); }
      else { var m=a.textContent.match(/Roobet|Gamdom|Duelbits/i); var b=m?m[0]:'site'; if(/join/i.test(txt)) a.textContent='Open '+b+' & check rewards'; } });
    var old=window.gtag; window.gtag=function(){ try{ if(arguments[0]==='event'){ var p=arguments[2]||{}; p.cta_variant=v; arguments[2]=p; } }catch(e){} return old.apply(this, arguments); };
  }catch(e){}
})();