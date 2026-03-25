const sections = document.querySelectorAll('section');
const linksNav = document.querySelectorAll('.navigation a');
const header = document.querySelector('header');
const btnHome = document.querySelector('.btn-home');
const menuIcon = document.querySelector('#menu-burger');
const nav = document.querySelector('.navigation');

/* Burger menu */
const burgerActive = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

/* Scroll actif : liens nav + bouton home + header sticky */
const scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            linksNav.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector('.navigation a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    /* Bouton retour en haut */
    if (window.scrollY > 300) {
        btnHome.classList.add('btnDisplay');
    } else {
        btnHome.classList.remove('btnDisplay');
    }

    /* Header sticky */
    if (window.scrollY > 80) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

/* ===== ANIMATION BARRES COMPÉTENCES ===== */
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute('data-width') + '%';
        }
    });
};

/* ScrollReveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .section-title', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-category, .softskills-badges', { origin: 'bottom' });

/* Typed.js */
const typed = new Typed('.multiple', {
    strings: [
        "Développeuse Full Stack Junior",
        "Web Designer",
        "Community Manager",
        "Future Business Intelligence Analyst"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

/* Événements */
menuIcon.addEventListener('click', burgerActive);
window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', animateSkills);
animateSkills();