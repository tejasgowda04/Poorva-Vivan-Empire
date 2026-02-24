document.addEventListener('DOMContentLoaded', () => {

    /* --- Scroll Reveal Animations --- */
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });

        // Timeline Animation
        const timeline = document.querySelector('.timeline');
        if (timeline) {
            const timelineTop = timeline.getBoundingClientRect().top;
            if (timelineTop < windowHeight - elementVisible) {
                timeline.classList.add('animate-line');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load


    /* --- Animated Counters --- */
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps

            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    };

    // Trigger counter when about section starts coming into view
    const aboutSection = document.getElementById('about');
    window.addEventListener('scroll', () => {
        if (!hasCounted && aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                startCounters();
                hasCounted = true;
            }
        }
    });


    /* --- WhatsApp Form Integration --- */
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const serviceType = document.getElementById('serviceType').value;

            // Construct message
            const message = `Hello PVE Team,%0A%0AMy name is ${name}.%0A%0AI am looking for ${serviceType} services.%0A%0APlease contact me at ${phone}.`;

            // PVE WhatsApp Number (Placeholder, replace with actual)
            const whatsappNumber = "910000000000";

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

            // Redirect to WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }

    /* --- Navbar Scroll Effect --- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 28, 45, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        } else {
            navbar.style.background = 'rgba(11, 28, 45, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

});
