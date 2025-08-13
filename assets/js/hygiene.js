document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="http"]').forEach(a=>{
    if(/roobet\.com|gamdom\.com/i.test(a.href)){
      a.setAttribute('rel','nofollow sponsored noopener');
      a.setAttribute('target','_blank');
    }
  });
});