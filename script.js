const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    nav?.classList.remove('open');
  }
});

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
