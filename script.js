document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for section reveal animations
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Publication filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const pubItems = document.querySelectorAll('.pub-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            pubItems.forEach(item => {
                const types = item.dataset.type.split(' ');
                if (filter === 'all' || types.includes(filter)) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.4s ease both';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Spectrum line scroll indicator
    const spectrumLine = document.getElementById('spectrumLine');
    if (spectrumLine) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
                    const heightPercent = 15 + scrollPercent * 70;
                    spectrumLine.style.background = `linear-gradient(
                        to bottom,
                        transparent 0%,
                        #b8860b ${heightPercent - 15}%,
                        #d4a835 ${heightPercent}%,
                        #b8860b ${heightPercent + 5}%,
                        transparent 100%
                    )`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Hover effect on publication numbers - highlight accent
    pubItems.forEach(item => {
        const num = item.querySelector('.pub-number');
        if (num) {
            item.addEventListener('mouseenter', () => {
                num.style.color = '#b8860b';
            });
            item.addEventListener('mouseleave', () => {
                num.style.color = '';
            });
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});