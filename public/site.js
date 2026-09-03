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

const projectFilters = document.querySelectorAll('[data-project-filter]');
const portfolioItems = document.querySelectorAll('[data-project-category]');

projectFilters.forEach((filterButton) => filterButton.addEventListener('click', () => {
    const selectedCategory = filterButton.dataset.projectFilter;

    projectFilters.forEach((button) => {
        button.classList.toggle('is-active', button === filterButton);
        button.setAttribute('aria-pressed', String(button === filterButton));
    });

    portfolioItems.forEach((item) => {
        const categories = item.dataset.projectCategory.split(' ');
        item.hidden = selectedCategory !== 'all' && !categories.includes(selectedCategory);
    });
}));

document.querySelector('[data-contact-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const company = data.get('company') || 'Not provided';
    const projectType = data.get('projectType') || 'Not specified';
    const message = data.get('message');
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject type: ${projectType}\n\nProject details:\n${message}`);
    window.location.href = `mailto:architects@lumbao.com?subject=${subject}&body=${body}`;
});
