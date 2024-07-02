document.addEventListener('DOMContentLoaded', (event) => {
    const headerBackgrounds = [
        'https://source.unsplash.com/random/1600x900/?minimalist',
        'https://source.unsplash.com/random/1600x900/?black-and-white',
        'https://source.unsplash.com/random/1600x900/?elegant',
        'https://source.unsplash.com/random/1600x900/?monochrome'
    ];

    const headerTitles = {
        'home': 'Welcome to My Portfolio',
        'projects': 'My Projects',
        'about': 'About Me',
        'contact': 'Get in Touch'
    };

    const headerSubtitles = {
        'home': 'Transforming ideas into digital realities',
        'projects': 'A showcase of my best work',
        'about': 'Learn more about my journey and skills',
        'contact': "Let's work together on your next project"
    };

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    let currentBackgroundIndex = 0;

    function changeHeaderBackground() {
        const header = document.getElementById('dynamic-header');
        header.style.backgroundImage = `url('${headerBackgrounds[currentBackgroundIndex]}')`;
        currentBackgroundIndex = (currentBackgroundIndex + 1) % headerBackgrounds.length;
    }

    setInterval(changeHeaderBackground, 5000);

    function updateHeader(section) {
        const headerTitle = document.getElementById('header-title');
        const headerSubtitle = document.getElementById('header-subtitle');

        headerTitle.style.opacity = 0;
        headerSubtitle.style.opacity = 0;

        setTimeout(() => {
            headerTitle.textContent = headerTitles[section];
            headerSubtitle.textContent = headerSubtitles[section];
            headerTitle.style.opacity = 1;
            headerSubtitle.style.opacity = 1;
        }, 500);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                updateHeader(this.getAttribute('data-section'));
            }
        });
    });

    // Add animation to elements on scroll
    const animatedElements = document.querySelectorAll('.project, .about-content, .contact-content');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Update header on page load
    updateHeader('home');

    // Update header and nav on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const nav = document.querySelector('nav');
        const sections = document.querySelectorAll('section');
        let currentSection = 'home';

        if (scrollPosition > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.id;
            }
        });

        updateHeader(currentSection);
    });
});