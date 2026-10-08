(() => {
  const body = document.body;
  const menu = document.querySelector('[data-menu]');
  const links = document.querySelector('[data-nav-links]');
  const focus = document.querySelector('[data-focus]');
  const progress = document.querySelector('.progress');
  const top = document.querySelector('.back-top');
  try {
    if (localStorage.getItem('focus') === 'on') { body.classList.add('field-mode'); focus?.setAttribute('aria-pressed', 'true'); }
  } catch (_) {}
  focus?.addEventListener('click', () => { const on = body.classList.toggle('field-mode'); focus.setAttribute('aria-pressed', String(on)); try { localStorage.setItem('focus', on ? 'on' : 'off'); } catch (_) {} });
  menu?.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  const update = () => { const max = document.documentElement.scrollHeight - innerHeight; if (progress) progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`; top?.classList.toggle('show', scrollY > 500); };
  addEventListener('scroll', update, {passive:true}); update(); top?.addEventListener('click', () => scrollTo({top:0,behavior:'smooth'}));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const slider = document.querySelector('[data-aqi]'); const output = document.querySelector('[data-aqi-output]');
  if (slider && output) { const render = () => { const n = Number(slider.value); const [label,color] = n <= 50 ? ['Good','#2f9e62'] : n <= 100 ? ['Satisfactory','#a9a51d'] : n <= 200 ? ['Moderate','#df8a31'] : ['Poor','#c94b45']; output.textContent = `${n} · ${label}`; output.style.color = color; }; slider.addEventListener('input', render); render(); }
})();