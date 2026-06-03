document.documentElement.classList.add('js');

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 20);
};

window.addEventListener('scroll', setHeaderState, { passive: true });
window.addEventListener('load', setHeaderState);
setHeaderState();

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -70px 0px' }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
