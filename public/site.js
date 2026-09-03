const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('#site-nav a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
}));

const lightbox = document.querySelector('.lightbox');
document.querySelectorAll('[data-lightbox]').forEach((button) => button.addEventListener('click', () => {
    if (!lightbox) return;
    const source = button.querySelector('img');
    const target = lightbox.querySelector('img');
    target.src = source.src;
    target.alt = source.alt;
    lightbox.showModal();
}));

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
});
