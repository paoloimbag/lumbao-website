function initNavigation() {
    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('#site-nav');
    if (!menuButton || !nav) return;

    const setMenuState = (isOpen, returnFocus = false) => {
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.textContent = isOpen ? 'Close' : 'Menu';
        nav.classList.toggle('is-open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);

        if (isOpen) {
            requestAnimationFrame(() => nav.querySelector('a')?.focus());
        } else if (returnFocus) {
            menuButton.focus();
        }
    };

    const desktop = window.matchMedia('(min-width: 1100px)');
    desktop.addEventListener('change', () => setMenuState(false));
    nav.querySelectorAll('a').forEach((link) => {
        if (link.pathname.replace(/\.html$/, '') === location.pathname.replace(/\.html$/, '')) {
            link.setAttribute('aria-current', 'page');
        }
    });

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
        setMenuState(false);
    }));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab' && nav.classList.contains('is-open')) {
            const links = Array.from(nav.querySelectorAll('a'));
            if (event.shiftKey && document.activeElement === menuButton) {
                event.preventDefault(); links.at(-1)?.focus();
            } else if (!event.shiftKey && document.activeElement === links.at(-1)) {
                event.preventDefault(); menuButton.focus();
            }
        }
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            setMenuState(false, true);
        }
    });
}

function initHero() {
    const hero = document.querySelector('.hero');
    const heroVideo = document.querySelector('.hero-video');
    const header = document.querySelector('.site-header');
    if (!hero || !heroVideo || !header) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let parallaxFrame;
    const connection = navigator.connection;
    const canAnimate = () => !reducedMotion.matches && !connection?.saveData;
    let heroVisible = true;
    const syncPlayback = () => {
        if (!canAnimate() || document.hidden || !heroVisible) {
            heroVideo.pause();
            return;
        }
        const source = heroVideo.querySelector('source[data-src]');
        if (source) {
            source.src = source.dataset.src;
            delete source.dataset.src;
            heroVideo.load();
        }
        heroVideo.play().catch(() => {});
    };
    reducedMotion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            heroVisible = entry.isIntersecting;
            syncPlayback();
        }).observe(hero);
    } else syncPlayback();

    const updateParallax = () => {
        parallaxFrame = null;
        header.classList.toggle('is-scrolled', hero.getBoundingClientRect().bottom <= header.offsetHeight);
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
    const innerMain = document.querySelector('.inner-page main');
    if (innerMain) {
        Array.from(innerMain.children).forEach((block) => {
            if (block.matches('figure')) {
                block.classList.add('reveal');
                return;
            }

            if (block.matches('section')) {
                Array.from(block.children).forEach((element) => element.classList.add('reveal'));
            }
        });

        const itemGroups = innerMain.querySelectorAll([
            '.values-grid',
            '.team-grid',
            '.portfolio-grid',
            '.service-directory-list',
            '.career-values',
            '.job-list',
            '.gallery-mosaic',
            '.detail-gallery-grid'
        ].join(','));

        itemGroups.forEach((group) => {
            group.classList.remove('reveal');
            Array.from(group.children).forEach((item) => item.classList.add('reveal'));
        });
    }

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

    // Auto-added reveal classes need one painted frame in their initial state
    // before visible elements transition in.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            elements.forEach((element) => observer.observe(element));
        });
    });
}

function initLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    document.querySelectorAll('[data-lightbox]').forEach((button) => button.addEventListener('click', () => {
        const source = button.querySelector('img');
        const target = lightbox.querySelector('img');
        if (!source || !target) return;
        target.src = source.dataset.originalSrc || source.currentSrc || source.src;
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
    // Opt in only during local development: ?liveReload=1.
    if (!['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) ||
        !new URLSearchParams(location.search).has('liveReload')) return;
    let serverWasOffline = false;
    const check = async () => {
        if (!document.hidden) {
            try {
                const response = await fetch('/health', { cache: 'no-store' });
                if (response.ok && serverWasOffline) window.location.reload();
                serverWasOffline = !response.ok;
            } catch { serverWasOffline = true; }
        }
        setTimeout(check, 2000);
    };
    setTimeout(check, 2000);
}

initNavigation();
initHero();
initRevealAnimations();
initLightbox();
initProjectFilters();
initContactForm();
initServerRecovery();


function initStatCounters() {
    const numbers = document.querySelectorAll('[data-count-to]');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    if (!numbers.length || reduced.matches || !('IntersectionObserver' in window)) return;
    const active = new Map();
    const finish = (node) => {
        const id = active.get(node);
        if (id !== undefined) cancelAnimationFrame(id);
        active.delete(node);
        node.textContent = node.dataset.countTo + node.dataset.countSuffix;
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(({target, isIntersecting}) => {
            if (!isIntersecting) return;
            observer.unobserve(target);
            if (reduced.matches) return;
            const goal = Number(target.dataset.countTo);
            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / 1600, 1);
                target.textContent = Math.floor(goal * (1 - Math.pow(1 - progress, 3))) + target.dataset.countSuffix;
                if (progress < 1) active.set(target, requestAnimationFrame(tick));
                else finish(target);
            };
            active.set(target, requestAnimationFrame(tick));
        });
    }, {threshold: .6});
    numbers.forEach(node => observer.observe(node));
    reduced.addEventListener('change', () => {
        if (reduced.matches) { observer.disconnect(); numbers.forEach(finish); }
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) [...active.keys()].forEach(finish);
    });
}
initStatCounters();

function initCareerAccordions() {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    document.querySelectorAll('.job-card').forEach(card => {
        const summary = card.querySelector('summary');
        const content = card.querySelector('.job-content');
        if (!summary || !content || !card.animate) return;
        let animation = null;
        let expanded = card.open;
        const settle = () => {
            if (animation) { animation.onfinish = null; animation.cancel(); animation = null; }
            card.open = expanded;
            card.style.removeProperty('height');
            card.style.removeProperty('overflow');
            content.inert = false;
            card.dataset.expanded = String(expanded);
            summary.querySelector('b').textContent = expanded ? 'Close role' : 'View role';
        };
        settle();
        summary.addEventListener('click', event => {
            event.preventDefault();
            const start = card.getBoundingClientRect().height;
            expanded = !expanded;
            if (reduced.matches) { settle(); return; }
            if (animation) { animation.onfinish = null; animation.cancel(); }
            card.open = true;
            card.dataset.expanded = String(expanded);
            summary.querySelector('b').textContent = expanded ? 'Close role' : 'View role';
            content.inert = !expanded;
            const borders = parseFloat(getComputedStyle(card).borderTopWidth) + parseFloat(getComputedStyle(card).borderBottomWidth);
            const end = expanded ? card.getBoundingClientRect().height : summary.getBoundingClientRect().height + borders;
            card.style.overflow = 'hidden';
            animation = card.animate([{height: start + 'px'}, {height: end + 'px'}], {
                duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)'
            });
            animation.onfinish = settle;
        });
        reduced.addEventListener('change', () => { if (reduced.matches) settle(); });
        window.addEventListener('resize', () => { if (animation) settle(); });
    });
}
initCareerAccordions();
