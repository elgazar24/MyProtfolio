document.addEventListener('DOMContentLoaded', (event) => {
    const headerBackgrounds = [
        'https://source.unsplash.com/random/1600x900/?technology',
        'https://source.unsplash.com/random/1600x900/?programming',
        'https://source.unsplash.com/random/1600x900/?webdesign',
        'https://source.unsplash.com/random/1600x900/?developer'
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

    // Add animation to projects on scroll
    const projects = document.querySelectorAll('.project');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    projects.forEach(project => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(project);
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Update header on page load
    updateHeader('home');

    // Update header on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
        let currentSection = 'home';

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


/* New styles */ 
let currentIndex = 0;

function showSlide(index) {
    
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Circular slide logic
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    
    // Reset and apply the animation for captions
    slides.forEach(slide => {
        const caption = slide.querySelector('.caption');
        const h2 = caption.querySelector('h2');
        const p = caption.querySelector('p');

        caption.style.animation = 'none';
        h2.style.animation = 'none';
        p.style.animation = 'none';

        caption.offsetHeight; // Trigger reflow
        h2.offsetHeight; // Trigger reflow
        p.offsetHeight; // Trigger reflow

        caption.style.animation = null;
        h2.style.animation = 'slideInLeft 1s forwards';
        h2.style.animationDelay = '0.5s';
        p.style.animation = 'slideInLeft 1s forwards';
        p.style.animationDelay = '1s';
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function setSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => setSlide(index));
        dotsContainer.appendChild(dot);
    });

    showSlide(currentIndex);
});

// Auto slide
setInterval(() => {
    moveSlide(1);
}, 7000);
