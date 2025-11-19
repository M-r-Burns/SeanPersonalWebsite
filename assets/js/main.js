/**
 * MAIN JAVASCRIPT FILE
 * Handles all interactive features and animations
 */

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeHeroAnimation();
    initializeSkillNetwork();
    initializeLazyLoading();
    initializeImagePreloading();
    initializeContactForm();
    initializeEasterEggs();
    initializeBusinessTermTooltips();
    initializeDynamicMetrics();
    initializeSpanishWidget();
    initializeScrollEffects();
    updateContactInfo();
});

// ==========================================
// NAVIGATION
// ==========================================
function initializeNavigation() {
    const nav = document.querySelector('.nav-bar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// ==========================================
// HERO SECTION ANIMATION (Network Graph)
// ==========================================
function initializeHeroAnimation() {
    if (!SITE_CONFIG.features.enableNetworkAnimation) return;

    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * SITE_CONFIG.animation.networkSpeed;
            this.vy = (Math.random() - 0.5) * SITE_CONFIG.animation.networkSpeed;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(57, 255, 20, 0.8)';
            ctx.fill();
        }
    }

    function init() {
        resizeCanvas();
        particles = [];
        for (let i = 0; i < SITE_CONFIG.animation.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(57, 255, 20, ${1 - distance / 150})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    init();
    animate();

    // Pause animation when not visible (performance optimization)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    });

    observer.observe(canvas);
}

// ==========================================
// SKILL NETWORK BACKGROUND
// ==========================================
function initializeSkillNetwork() {
    if (!SITE_CONFIG.features.enableSkillNetwork) return;

    const canvas = document.getElementById('skill-network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const section = document.querySelector('.about-section');
    let nodes = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }

    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 3 + 2;
            this.active = false;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.active ? 'rgba(57, 255, 20, 0.8)' : 'rgba(57, 255, 20, 0.3)';
            ctx.fill();
        }
    }

    function init() {
        resizeCanvas();
        nodes = [];
        for (let i = 0; i < 30; i++) {
            nodes.push(new Node());
        }
    }

    function connectNodes() {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(57, 255, 20, ${(1 - distance / 200) * 0.3})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        connectNodes();
        animationId = requestAnimationFrame(animate);
    }

    // Skill hover interaction
    const skillItems = document.querySelectorAll('.skill-item[data-skill]');
    skillItems.forEach((skill, index) => {
        skill.addEventListener('mouseenter', () => {
            skill.classList.add('active');
            if (nodes[index]) {
                nodes[index].active = true;
            }
        });

        skill.addEventListener('mouseleave', () => {
            skill.classList.remove('active');
            if (nodes[index]) {
                nodes[index].active = false;
            }
        });
    });

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    init();
    animate();

    // Pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    });

    observer.observe(canvas);
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function initializeLazyLoading() {
    if (!SITE_CONFIG.features.enableLazyLoading) return;

    const lazyImages = document.querySelectorAll('.lazy-load');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px'
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==========================================
// BACKGROUND IMAGE PRELOADING
// ==========================================
function initializeImagePreloading() {
    if (!SITE_CONFIG.features.enablePreloading) return;

    const imagesToPreload = [
        'assets/images/apex-thumbnail.jpg',
        'assets/images/truck-simulator-thumbnail.jpg',
        'assets/images/lidar-thumbnail.jpg',
        'assets/images/messenger-thumbnail.jpg',
        'assets/images/ebook-thumbnail.jpg',
        'assets/images/sand-silicon-thumbnail.jpg'
    ];

    // Preload images after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            imagesToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }, 2000); // Wait 2 seconds after page load
    });
}

// ==========================================
// CONTACT FORM (Formspree Integration)
// ==========================================
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.querySelector('.form-status');
    const submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Check if Formspree endpoint is configured
        if (SITE_CONFIG.formspree.endpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
            formStatus.textContent = 'Please configure your Formspree endpoint in config.js';
            formStatus.className = 'form-status error';
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';

        const formData = new FormData(form);

        try {
            const response = await fetch(SITE_CONFIG.formspree.endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem sending your message. Please try again.';
            formStatus.className = 'form-status error';
        } finally {
            submitBtn.classList.remove('loading');
        }
    });
}

// ==========================================
// EASTER EGGS
// ==========================================
function initializeEasterEggs() {
    if (!SITE_CONFIG.features.enableEasterEggs) return;

    // 1. Fitness Timer (clicking "constantly iterating")
    initializeFitnessTimer();

    // 2. AI Learning Quote (hover on "AI research initiative")
    initializeAIQuote();

    // 3. Purdue Boiler Up (Ctrl+Alt+P)
    initializePurdueEasterEgg();
}

function initializeFitnessTimer() {
    const trigger = document.querySelector('.constantly-iterating');
    const modal = document.getElementById('fitness-timer-modal');
    const closeBtn = document.getElementById('close-timer');
    const timerValue = document.getElementById('timer-value');

    if (!trigger || !modal) return;

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hidden');

        let timeLeft = SITE_CONFIG.animation.fitnessTimerDuration;
        timerValue.textContent = timeLeft;

        const countdown = setInterval(() => {
            timeLeft--;
            timerValue.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                timerValue.textContent = 'Done!';
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 1500);
            }
        }, 1000);
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

function initializeAIQuote() {
    const triggers = document.querySelectorAll('.business-term[data-definition*="AI research"]');
    const modal = document.getElementById('quote-modal');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    if (!modal) return;

    let hoverTimeout;

    triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            hoverTimeout = setTimeout(() => {
                const randomQuote = SITE_CONFIG.learningQuotes[
                    Math.floor(Math.random() * SITE_CONFIG.learningQuotes.length)
                ];

                quoteText.textContent = `"${randomQuote.text}"`;
                quoteAuthor.textContent = `— ${randomQuote.author}`;
                modal.classList.remove('hidden');

                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 5000);
            }, 2000);
        });

        trigger.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

function initializePurdueEasterEgg() {
    const overlay = document.getElementById('purdue-overlay');

    if (!overlay) return;

    document.addEventListener('keydown', (e) => {
        // Ctrl+Alt+P
        if (e.ctrlKey && e.altKey && e.key === 'p') {
            e.preventDefault();
            overlay.classList.remove('hidden');

            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 1000);
        }
    });
}

// ==========================================
// BUSINESS TERM TOOLTIPS
// ==========================================
function initializeBusinessTermTooltips() {
    const businessTerms = document.querySelectorAll('.business-term');
    const tooltip = document.getElementById('business-tooltip');

    if (!tooltip) return;

    businessTerms.forEach(term => {
        term.addEventListener('mouseenter', (e) => {
            const definition = term.getAttribute('data-definition') ||
                             SITE_CONFIG.businessTerms[term.textContent];

            if (definition) {
                tooltip.textContent = definition;
                tooltip.classList.remove('hidden');
                positionTooltip(e, tooltip);
            }
        });

        term.addEventListener('mousemove', (e) => {
            positionTooltip(e, tooltip);
        });

        term.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });
}

function positionTooltip(e, tooltip) {
    const x = e.clientX + 15;
    const y = e.clientY + 15;

    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}

// ==========================================
// DYNAMIC METRICS (LinkedIn Connections)
// ==========================================
function initializeDynamicMetrics() {
    const linkedinConnections = document.getElementById('linkedin-connections');

    if (!linkedinConnections) return;

    const baseValue = SITE_CONFIG.metrics.linkedinConnections;
    let count = 0;

    function animateValue() {
        const target = baseValue + Math.floor(Math.random() * 3) - 1; // ±1 variation

        const increment = target > count ? 1 : -1;
        const interval = setInterval(() => {
            count += increment;
            linkedinConnections.textContent = count + '+';

            if (count === target) {
                clearInterval(interval);
                setTimeout(() => {
                    animateValue();
                }, 3000 + Math.random() * 2000);
            }
        }, 50);
    }

    // Start with the base value
    count = baseValue;
    linkedinConnections.textContent = count + '+';

    // Observer to start animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => animateValue(), 1000);
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(linkedinConnections.closest('.about-section'));
}

// ==========================================
// SPANISH WORD WIDGET
// ==========================================
function initializeSpanishWidget() {
    if (!SITE_CONFIG.features.enableSpanishWidget) return;

    const wordElement = document.getElementById('spanish-word');
    const translationElement = document.getElementById('word-translation');

    if (!wordElement || !translationElement) return;

    const randomWord = SITE_CONFIG.spanishWords[
        Math.floor(Math.random() * SITE_CONFIG.spanishWords.length)
    ];

    wordElement.textContent = randomWord.word;
    translationElement.textContent = randomWord.translation;
}

// ==========================================
// SCROLL EFFECTS
// ==========================================
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elements = document.querySelectorAll(
        '.glass-card, .experience-card, .project-card, .award-card'
    );

    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ==========================================
// UPDATE CONTACT INFO FROM CONFIG
// ==========================================
function updateContactInfo() {
    // Update email link
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        const emailSpan = emailLink.querySelector('span:last-child');
        if (emailSpan) {
            emailSpan.textContent = SITE_CONFIG.personal.email;
        }
        emailLink.href = `mailto:${SITE_CONFIG.personal.email}`;
    }

    // Update ApeX link
    const apexLink = document.getElementById('apex-link');
    if (apexLink && SITE_CONFIG.links.apexHub) {
        apexLink.href = SITE_CONFIG.links.apexHub;
    }
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce function for scroll/resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners
const optimizedScroll = debounce(() => {
    // Any additional scroll handling can go here
}, 100);

window.addEventListener('scroll', optimizedScroll);
