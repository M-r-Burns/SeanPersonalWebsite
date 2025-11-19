/* ============================================
   PARTICLE BACKGROUND ANIMATION
   ============================================ */
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resizeCanvas());

        // Optional: Interactive particle dragging
        let isDragging = false;
        this.canvas.addEventListener('mousedown', () => isDragging = true);
        this.canvas.addEventListener('mouseup', () => isDragging = false);
        this.canvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            }
        });
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);

        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    drawParticles() {
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 200, 150, 0.5)';
            this.ctx.fill();
        });
    }

    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 200, 150, ${0.2 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    updateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Keep within bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawParticles();
        this.connectParticles();
        this.updateParticles();
        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   SYSTEM STATUS MOCK DATA
   ============================================ */
class SystemStatus {
    constructor() {
        this.uptimeEl = document.getElementById('uptime');
        this.computeEl = document.getElementById('compute');
        this.latencyEl = document.getElementById('latency');

        this.updateStatus();
        setInterval(() => this.updateStatus(), 3000);
    }

    updateStatus() {
        // Mock uptime
        const uptime = (99.95 + Math.random() * 0.04).toFixed(2);
        this.uptimeEl.textContent = `${uptime}%`;

        // Mock compute load
        const compute = (1.0 + Math.random() * 0.5).toFixed(2);
        this.computeEl.textContent = `${compute} GHz`;

        // Mock network latency
        const latency = Math.floor(35 + Math.random() * 20);
        this.latencyEl.textContent = `${latency}ms`;
    }
}

/* ============================================
   TERMINAL EASTER EGG
   ============================================ */
class Terminal {
    constructor() {
        this.terminal = document.getElementById('terminal');
        this.output = document.getElementById('terminal-output');
        this.input = document.getElementById('terminal-input');
        this.commands = {
            help: () => this.showHelp(),
            whoami: () => this.showWhoAmI(),
            list_projects: () => this.listProjects(),
            contact_me: () => this.showContact(),
            clear: () => this.clear(),
            skills: () => this.showSkills(),
            experience: () => this.showExperience()
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Keyboard shortcut: Ctrl+Shift+T
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.open();
            }
            if (e.key === 'Escape' && !this.terminal.classList.contains('hidden')) {
                this.close();
            }
        });

        // Enter to submit command
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.executeCommand(this.input.value.trim());
                this.input.value = '';
            }
        });
    }

    open() {
        this.terminal.classList.remove('hidden');
        this.input.focus();
    }

    close() {
        this.terminal.classList.add('hidden');
    }

    addLine(text, className = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.innerHTML = text;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    executeCommand(cmd) {
        this.addLine(`$ ${cmd}`, 'terminal-command');

        const commandName = cmd.toLowerCase();
        if (this.commands[commandName]) {
            this.commands[commandName]();
        } else if (cmd) {
            this.addLine(`Command not found: ${cmd}. Type 'help' for available commands.`);
        }
    }

    showHelp() {
        this.addLine('&nbsp;');
        this.addLine('<strong>Available Commands:</strong>');
        this.addLine('  help           - Show this help message');
        this.addLine('  whoami         - Display information about Elijah');
        this.addLine('  list_projects  - List all projects');
        this.addLine('  skills         - Show technical skills');
        this.addLine('  experience     - Show work experience');
        this.addLine('  contact_me     - Display contact information');
        this.addLine('  clear          - Clear terminal screen');
        this.addLine('&nbsp;');
    }

    showWhoAmI() {
        this.addLine('&nbsp;');
        this.addLine('<strong>Elijah Burns</strong>');
        this.addLine('Purdue University Student');
        this.addLine('BS in Business Analytics & Information Management');
        this.addLine('&nbsp;');
        this.addLine('A self-driven learner bridging business strategy and technical implementation.');
        this.addLine('Passionate about AI, data analytics, and building solutions that matter.');
        this.addLine('&nbsp;');
        this.addLine('Fun fact: I think about LeBron an infinite number of times.');
        this.addLine('&nbsp;');
    }

    listProjects() {
        this.addLine('&nbsp;');
        this.addLine('<strong>Featured Projects:</strong>');
        this.addLine('&nbsp;');
        this.addLine('1. <span style="color: var(--color-accent)">ApeX Student Project Hub</span>');
        this.addLine('   Platform for university students to share projects');
        this.addLine('   Tech: HTML, CSS, JS, Gemini API, Supabase');
        this.addLine('&nbsp;');
        this.addLine('2. <span style="color: var(--color-accent)">Class 8 Truck Trip Simulator</span>');
        this.addLine('   Diesel vs. Electric truck comparison tool');
        this.addLine('   Tech: JavaScript, Google Maps API, Cost Modeling');
        this.addLine('&nbsp;');
        this.addLine('3. <span style="color: var(--color-accent)">MEBA LiDAR Backpack</span>');
        this.addLine('   Commercialization strategy for forestry tech');
        this.addLine('   Tech: Python, Gemini API, NLP, Market Research');
        this.addLine('&nbsp;');
        this.addLine('4. <span style="color: var(--color-accent)">Marketplace Messenger</span>');
        this.addLine('   Concurrent messaging program with JavaFX GUI');
        this.addLine('   Tech: Java, JavaFX, Agile, Git');
        this.addLine('&nbsp;');
        this.addLine('5. <span style="color: var(--color-accent)">Fantasy Football eBook</span>');
        this.addLine('   30-page eBook with 30% conversion rate');
        this.addLine('   Tech: Digital Publishing, Facebook Ads, Final Cut Pro');
        this.addLine('&nbsp;');
    }

    showSkills() {
        this.addLine('&nbsp;');
        this.addLine('<strong>Technical Skills:</strong>');
        this.addLine('  Languages: Python, SQL, HTML, JavaScript');
        this.addLine('  APIs: Gemini API, ChatGPT API, Google Maps API');
        this.addLine('  Data: Tableau, Excel, Data Visualization');
        this.addLine('  Tools: Supabase, Git, Final Cut Pro');
        this.addLine('  Business: Agile, Market Research, Digital Marketing');
        this.addLine('&nbsp;');
    }

    showExperience() {
        this.addLine('&nbsp;');
        this.addLine('<strong>Professional Experience:</strong>');
        this.addLine('&nbsp;');
        this.addLine('• <span style="color: var(--color-accent)">Crowe LLP</span> - RCFC Consulting/Technology Intern');
        this.addLine('  June 2025 - Aug 2025');
        this.addLine('&nbsp;');
        this.addLine('• <span style="color: var(--color-accent)">DuCharme, McMillen & Associates</span> - Property Tax Intern');
        this.addLine('  May 2024 - Aug 2024');
        this.addLine('&nbsp;');
        this.addLine('• <span style="color: var(--color-accent)">Griswold Consulting</span> - Intern');
        this.addLine('  Jan 2024 – May 2025');
        this.addLine('&nbsp;');
        this.addLine('• <span style="color: var(--color-accent)">Larsen Leadership Academy</span> - VP of External Events');
        this.addLine('  Aug 2022 - Dec 2024');
        this.addLine('&nbsp;');
    }

    showContact() {
        this.addLine('&nbsp;');
        this.addLine('<strong>Contact Information:</strong>');
        this.addLine('  LinkedIn: linkedin.com/in/elijb');
        this.addLine('  Location: Indianapolis, IN');
        this.addLine('  Use the contact form on the website to send a message!');
        this.addLine('&nbsp;');
    }

    clear() {
        this.output.innerHTML = '';
        this.addLine('Terminal cleared. Type \'help\' for commands.');
        this.addLine('&nbsp;');
    }
}

// Make closeTerminal available globally for the close button
function closeTerminal() {
    document.getElementById('terminal').classList.add('hidden');
}

/* ============================================
   SCROLL ANIMATIONS & STRATEGY FLOW
   ============================================ */
class ScrollAnimations {
    constructor() {
        this.observeElements();
        this.updateStrategyFlow();
        window.addEventListener('scroll', () => this.updateStrategyFlow());
    }

    observeElements() {
        const fadeElements = document.querySelectorAll('.fade-in-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Trigger skill bar animations
                    if (entry.target.classList.contains('skill-category')) {
                        this.animateSkillBars(entry.target);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    }

    animateSkillBars(container) {
        const skillBars = container.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = `${progress}%`;
            }, 100);
        });
    }

    updateStrategyFlow() {
        const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
        const flowNodes = document.querySelectorAll('.flow-node');

        let activeIndex = 0;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeIndex = index;
                }
            }
        });

        flowNodes.forEach((node, index) => {
            if (index <= activeIndex) {
                node.classList.add('active');
            } else {
                node.classList.remove('active');
            }
        });
    }
}

/* ============================================
   NAVIGATION SCROLL EFFECT
   ============================================ */
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        });

        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offset = 80; // Account for fixed nav
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

/* ============================================
   LAZY LOADING FOR IMAGES
   ============================================ */
class LazyLoader {
    constructor() {
        this.init();
    }

    init() {
        // Create intersection observer for lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before entering viewport
            threshold: 0.01
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });

        // Preload images for next section
        this.preloadNextSection();
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        img.src = src;
        img.classList.add('loaded');
    }

    preloadNextSection() {
        // Preload images in sections that are about to come into view
        const sections = document.querySelectorAll('.section');

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const nextSection = entry.target.nextElementSibling;
                    if (nextSection) {
                        const images = nextSection.querySelectorAll('img[data-src]');
                        images.forEach(img => {
                            const src = img.getAttribute('data-src');
                            if (src) {
                                // Preload in background
                                const preloadImg = new Image();
                                preloadImg.src = src;
                            }
                        });
                    }
                }
            });
        }, {
            rootMargin: '200px 0px' // Start preloading 200px before section
        });

        sections.forEach(section => sectionObserver.observe(section));
    }
}

/* ============================================
   CONTACT FORM HANDLER
   ============================================ */
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.status = document.getElementById('form-status');
        this.submitBtn = this.form.querySelector('.btn-submit');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Show loading state
        this.submitBtn.classList.add('loading');
        this.status.textContent = '';
        this.status.className = 'form-status';

        try {
            // Check if Formspree endpoint is configured
            if (!window.FORMSPREE_ENDPOINT) {
                throw new Error('Formspree endpoint not configured');
            }

            // Submit to Formspree
            const response = await fetch(window.FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                this.showSuccess();
                this.form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.submitBtn.classList.remove('loading');
        }
    }

    showSuccess() {
        this.status.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        this.status.classList.add('success');
    }

    showError(message) {
        this.status.textContent = message === 'Formspree endpoint not configured'
            ? 'Please configure your Formspree endpoint in config.js'
            : 'Something went wrong. Please try again or reach out via LinkedIn.';
        this.status.classList.add('error');
    }
}

/* ============================================
   INTERACTIVE HOVER EFFECTS
   ============================================ */
class InteractiveEffects {
    constructor() {
        this.init();
    }

    init() {
        // Tech tag bracket effect
        document.querySelectorAll('.tech-tag').forEach(tag => {
            tag.addEventListener('mouseenter', (e) => {
                const text = tag.textContent;
                tag.setAttribute('data-original', text);
                tag.textContent = `[ ${text} ]`;
            });

            tag.addEventListener('mouseleave', (e) => {
                const original = tag.getAttribute('data-original');
                if (original) {
                    tag.textContent = original;
                }
            });
        });
    }
}

/* ============================================
   CURRENT YEAR FOR FOOTER
   ============================================ */
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Defer non-critical CSS
        this.loadDeferredStyles();

        // Optimize scroll events
        this.optimizeScrollHandlers();
    }

    loadDeferredStyles() {
        // Placeholder for any deferred styles
        // Currently all styles are critical, but this can be expanded
    }

    optimizeScrollHandlers() {
        // Debounce scroll events for better performance
        let scrollTimeout;
        const originalScrollHandlers = [];

        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }

            scrollTimeout = window.requestAnimationFrame(() => {
                // Scroll handlers are already optimized in individual classes
            });
        }, { passive: true });
    }
}

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ParticleBackground();
    new SystemStatus();
    new Terminal();
    new ScrollAnimations();
    new Navigation();
    new LazyLoader();
    new ContactForm();
    new InteractiveEffects();
    new PerformanceOptimizer();

    // Set current year
    setCurrentYear();

    // Log welcome message
    console.log('%c👋 Welcome to Elijah\'s Portfolio!', 'color: #00C896; font-size: 16px; font-weight: bold;');
    console.log('%cTry pressing Ctrl+Shift+T for a surprise...', 'color: #A1A1AA; font-size: 12px;');
});

/* ============================================
   SERVICE WORKER REGISTRATION (Optional)
   ============================================ */
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        // Service worker registration can be added here for PWA functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}

/* ============================================
   MOBILE NAVIGATION TOGGLE
   ============================================ */
class MobileNav {
    constructor() {
        this.toggle = document.getElementById('nav-toggle');
        this.navLinks = document.getElementById('nav-links');

        if (this.toggle && this.navLinks) {
            this.init();
        }
    }

    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking a link
        const links = this.navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMenu();
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.toggle.contains(e.target) && !this.navLinks.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.navLinks.classList.toggle('active');
    }

    closeMenu() {
        this.toggle.classList.remove('active');
        this.navLinks.classList.remove('active');
    }
}

/* ============================================
   EXPERIENCE EXPAND/COLLAPSE
   ============================================ */
class ExperienceAccordion {
    constructor() {
        this.items = document.querySelectorAll('.experience-item-compact');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const expandBtn = item.querySelector('.expand-btn');
            if (expandBtn) {
                expandBtn.addEventListener('click', () => this.toggle(item));
            }
        });

        // Auto-expand first item on desktop
        if (window.innerWidth > 768 && this.items.length > 0) {
            this.toggle(this.items[0]);
        }
    }

    toggle(item) {
        const isExpanded = item.classList.contains('expanded');

        if (!isExpanded) {
            item.classList.add('expanded');
        } else {
            item.classList.remove('expanded');
        }
    }
}

/* ============================================
   PROJECT FILTERS (for projects page)
   ============================================ */
class ProjectFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card[data-category]');

        if (this.filterBtns.length > 0) {
            this.init();
        }
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filter(filter);

                // Update active state
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    filter(category) {
        this.projectCards.forEach(card => {
            if (category === 'all') {
                card.style.display = '';
                card.classList.add('fade-in-section', 'visible');
            } else {
                if (card.getAttribute('data-category') === category) {
                    card.style.display = '';
                    card.classList.add('fade-in-section', 'visible');
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }
}

/* ============================================
   ENHANCED PARTICLE BACKGROUND
   Make it globally accessible for easter eggs
   ============================================ */
let particleBackgroundInstance = null;

// Override the original ParticleBackground initialization
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the original initialization
    setTimeout(() => {
        if (typeof ParticleBackground !== 'undefined' && !particleBackgroundInstance) {
            particleBackgroundInstance = new ParticleBackground();
            window.particleBackground = particleBackgroundInstance;
        }
    }, 100);

    // Initialize new features
    new MobileNav();
    new ExperienceAccordion();
    new ProjectFilter();
});

/* ============================================
   PROJECT PREVIEW CARD CLICKS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    const previewCards = document.querySelectorAll('.project-preview-card');
    previewCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = 'projects.html';
        });

        // Make it clear they're clickable
        card.style.cursor = 'pointer';
    });
});

/* ============================================
   SMOOTH SCROLL OFFSET FOR FIXED NAV
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Update smooth scroll to account for mobile nav height
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
