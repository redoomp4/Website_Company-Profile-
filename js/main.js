const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');
const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

function closeMenu() {
  menuToggle.classList.remove('active'); navMenu.classList.remove('open'); menuOverlay.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open');
}
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open'); menuToggle.classList.toggle('active', isOpen); menuOverlay.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen)); document.body.classList.toggle('menu-open', isOpen);
});
menuOverlay.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 30), { passive: true });

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); } }), { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(section => sectionObserver.observe(section));

const stats = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; const stat = entry.target; const target = Number(stat.dataset.target); const duration = 1200; const start = performance.now(); function tick(now) { const progress = Math.min((now - start) / duration, 1); stat.textContent = Math.floor(progress * target).toLocaleString('id-ID') + stat.dataset.suffix; if (progress < 1) requestAnimationFrame(tick); } requestAnimationFrame(tick); statsObserver.unobserve(stat); }), { threshold: .7 });
stats.forEach(stat => statsObserver.observe(stat));

document.getElementById('contactForm').addEventListener('submit', event => { event.preventDefault(); const status = document.getElementById('formStatus'); status.textContent = 'Terima kasih! Pesan Anda telah kami terima.'; event.currentTarget.reset(); });
