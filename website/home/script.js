



document.addEventListener('DOMContentLoaded', (event) => {
   


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


   
});

