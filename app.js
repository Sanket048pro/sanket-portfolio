const IG_HANDLE='_sanku_048__';
const IG_URL='https://www.instagram.com/_sanku_048__?igsh=MWhhMW10NW02eml0cg==';
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.sidebar')?.classList.toggle('open'));
  const cur=(location.pathname.split('/').pop()||'home.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a=>{if((a.getAttribute('href')||'').toLowerCase()===cur)a.classList.add('active')});
  document.querySelectorAll('[data-instagram]').forEach(el=>{el.href=IG_URL;el.target='_blank'});
  document.querySelectorAll('[data-handle]').forEach(el=>el.textContent='@'+IG_HANDLE);
  document.querySelectorAll('.filter-btn').forEach(btn=>{btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(it=>{
      it.style.display=(f==='all'||it.dataset.category===f)?'':'none';
    });
  })});
});