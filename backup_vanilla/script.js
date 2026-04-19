document.addEventListener('DOMContentLoaded', () => {
    /* --- Lenis Smooth Scroll Initialization --- */
    const lenis = new Lenis({
        autoRaf: true,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Synchronize Lenis with ScrollTrigger for perfect parallax timing
    lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        
        // Smart Navbar logic
        const navbar = document.querySelector('.navbar');
        const currentScroll = e.animatedScroll;
        
        // Hide/Show on scroll direction
        if (currentScroll > e.lastAnimatedScroll && currentScroll > 200) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        
        // Add background blur when scrolled away from top
        if (currentScroll > 100) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
        
        e.lastAnimatedScroll = currentScroll;
    });

    // Initialize last scroll for direction detection
    lenis.lastAnimatedScroll = 0;

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    /* --- AOS Initialization --- */
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    /* --- Slider Menu Logic --- */
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const sliderMenu = document.getElementById('slider-menu');
    const sliderLinks = document.querySelectorAll('.slider-nav-link');

    const openMenu = () => {
        sliderMenu.classList.add('active');
        lenis.stop();
    };

    const closeMenu = () => {
        sliderMenu.classList.remove('active');
        lenis.start();
    };

    menuBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);

    sliderLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    /* --- Scroll Animation for Story Section --- */
    gsap.registerPlugin(ScrollTrigger);

    /* --- Hero Description Fixed Animation --- */
    gsap.to('.hero-description', {
        opacity: 1,
        duration: 2,
        delay: 0.8,
        ease: 'power3.out'
    });

    /* --- Parallax Animation for Background --- */
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1101px)", () => {
        // Background Assets Parallax
        gsap.to('.bg-overlay', {
            yPercent: -20,
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    mm.add("(max-width: 1100px)", () => {
        // No bottle animation on mobile either
    });



    /* --- Secondary Showcase Synchronized Animation --- */
    const secondaryTL = gsap.timeline({
        scrollTrigger: {
            trigger: '#secondary-showcase',
            start: 'top top',
            end: '+=400%', // Significantly longer scroll for three distinct immersive stages
            scrub: 2,
            pin: true,
        }
    });

    secondaryTL
        /* STAGE 1: Logo & Text 1 Reveal */
        .to('.secondary-logo', {
            rotation: 60, // Total rotation until the rectangle is formed
            scale: 2,
            opacity: 0.4,
            filter: "drop-shadow(0 0 50px rgba(0, 0, 0, 0.5)) brightness(1.4)",
            duration: 3 // Ends exactly when the rectangle is fully formed
        }, 0)
        .to('.secondary-narrative', {
            opacity: 1,
            scale: 1.15,
            y: -20,
            duration: 1.5
        }, 0.5)

        /* STAGE 2: Rectangle Reveal & Logo Stop */
        .to('.secondary-narrative', {
            opacity: 0,
            scale: 1.2,
            duration: 1
        }, 2)
        .to('.reveal-image-container', {
            opacity: 1,
            width: "var(--reveal-width)",
            height: "var(--reveal-height)", // Responsive via CSS variables
            duration: 1.5
        }, 2)

        /* STAGE 3: Full Section Fill (Logo stops rotating) */
        .to('.reveal-image-container', {
            width: "100%",
            height: "100%",
            duration: 2.5
        }, 3.5); // Offset to start shortly after the logo begins moving

});
