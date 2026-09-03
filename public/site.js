function initNavigation() {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#site-nav');
    if (!menuButton || !nav) return;

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
    }));
}

function initHero() {
    const hero = document.querySelector('.hero');
    const heroVideo = document.querySelector('.hero-video');
    const header = document.querySelector('.site-header');
    if (!hero || !heroVideo || !header) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let parallaxFrame;

    const updateParallax = () => {
        parallaxFrame = null;
        header.classList.toggle('is-scrolled', window.scrollY > 40);
        if (reducedMotion.matches) return;

        const progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
        heroVideo.style.setProperty('--parallax-y', `${progress * 72}px`);
    };

    window.addEventListener('scroll', () => {
        if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
    }, { passive: true });
    updateParallax();
}

function initRevealAnimations() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .12 });
    elements.forEach((element) => observer.observe(element));
}

function initLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    document.querySelectorAll('[data-lightbox]').forEach((button) => button.addEventListener('click', () => {
        const source = button.querySelector('img');
        const target = lightbox.querySelector('img');
        if (!source || !target) return;
        target.src = source.src;
        target.alt = source.alt;
        lightbox.showModal();
    }));

    lightbox.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) lightbox.close();
    });
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('[data-project-filter]');
    const portfolioItems = document.querySelectorAll('[data-project-category]');

    filterButtons.forEach((filterButton) => filterButton.addEventListener('click', () => {
        const selectedCategory = filterButton.dataset.projectFilter;
        filterButtons.forEach((button) => {
            const isSelected = button === filterButton;
            button.classList.toggle('is-active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });

        portfolioItems.forEach((item) => {
            const categories = item.dataset.projectCategory.split(' ');
            item.hidden = selectedCategory !== 'all' && !categories.includes(selectedCategory);
        });
    }));
}

function initContactForm() {
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
}

function initServerRecovery() {
    let serverWasOffline = false;
    setInterval(async () => {
        try {
            await fetch('/health', { cache: 'no-store' });
            if (serverWasOffline) window.location.reload();
        } catch {
            serverWasOffline = true;
        }
    }, 500);
}

initNavigation();
initHero();
initRevealAnimations();
initLightbox();
initProjectFilters();
initContactForm();
initServerRecovery();
