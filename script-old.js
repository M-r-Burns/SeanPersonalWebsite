// ========================================
// CONFIGURATION & CONSTANTS
// ========================================

// This will be loaded from config.js
let CONFIG = window.CONFIG || {};

// ========================================
// THEME MANAGEMENT
// ========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.attachEventListeners();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggle() {
        this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
}

// ========================================
// LAZY LOADING & INTERSECTION OBSERVER
// ========================================

class LazyLoader {
    constructor() {
        this.imageObserver = null;
        this.elementObserver = null;
        this.init();
    }

    init() {
        // Observer for images and videos
        this.imageObserver = new IntersectionObserver(
            (entries) => this.handleImageIntersection(entries),
            {
                rootMargin: '50px 0px', // Start loading 50px before element enters viewport
                threshold: 0.01
            }
        );

        // Observer for animating elements
        this.elementObserver = new IntersectionObserver(
            (entries) => this.handleElementIntersection(entries),
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        this.observeElements();
    }

    observeElements() {
        // Lazy load images
        const lazyImages = document.querySelectorAll('.lazy-image');
        lazyImages.forEach(img => this.imageObserver.observe(img));

        // Lazy load videos
        const lazyVideos = document.querySelectorAll('.lazy-video');
        lazyVideos.forEach(video => this.imageObserver.observe(video));

        // Animate elements on scroll
        const lazyElements = document.querySelectorAll('[data-lazy]');
        lazyElements.forEach(el => this.elementObserver.observe(el));

        // Animate sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => this.elementObserver.observe(section));
    }

    handleImageIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element.tagName === 'IMG') {
                    const src = element.getAttribute('data-src');
                    if (src) {
                        element.src = src;
                        element.onload = () => element.classList.add('loaded');
                    }
                } else if (element.tagName === 'VIDEO') {
                    const src = element.getAttribute('data-src');
                    if (src) {
                        element.src = src;
                        element.onloadeddata = () => {
                            element.classList.add('loaded');
                            // Auto-play video on hover
                            element.parentElement.addEventListener('mouseenter', () => {
                                element.play();
                            });
                            element.parentElement.addEventListener('mouseleave', () => {
                                element.pause();
                                element.currentTime = 0;
                            });
                        };
                    }
                }

                this.imageObserver.unobserve(element);
            }
        });
    }

    handleElementIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                this.elementObserver.unobserve(entry.target);
            }
        });
    }
}

// ========================================
// PRELOADING SYSTEM
// ========================================

class Preloader {
    constructor() {
        this.preloadedImages = new Set();
        this.preloadedVideos = new Set();
    }

    preloadImages() {
        // Get all image sources from data attributes
        const imageSources = Array.from(document.querySelectorAll('[data-src]'))
            .filter(el => el.tagName === 'IMG')
            .map(el => el.getAttribute('data-src'))
            .filter(src => src);

        imageSources.forEach(src => {
            if (!this.preloadedImages.has(src)) {
                const img = new Image();
                img.src = src;
                this.preloadedImages.add(src);
            }
        });
    }

    preloadVideos() {
        // Preload video metadata
        const videoSources = Array.from(document.querySelectorAll('[data-src]'))
            .filter(el => el.tagName === 'VIDEO')
            .map(el => el.getAttribute('data-src'))
            .filter(src => src);

        videoSources.forEach(src => {
            if (!this.preloadedVideos.has(src)) {
                const video = document.createElement('video');
                video.src = src;
                video.preload = 'metadata';
                this.preloadedVideos.add(src);
            }
        });
    }

    preloadSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const images = section.querySelectorAll('.lazy-image');
        const videos = section.querySelectorAll('.lazy-video');

        images.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src && !this.preloadedImages.has(src)) {
                const preloadImg = new Image();
                preloadImg.src = src;
                this.preloadedImages.add(src);
            }
        });

        videos.forEach(video => {
            const src = video.getAttribute('data-src');
            if (src && !this.preloadedVideos.has(src)) {
                const preloadVideo = document.createElement('video');
                preloadVideo.src = src;
                preloadVideo.preload = 'metadata';
                this.preloadedVideos.add(src);
            }
        });
    }

    init() {
        // Preload critical images immediately
        setTimeout(() => this.preloadImages(), 1000);

        // Preload videos after a delay
        setTimeout(() => this.preloadVideos(), 2000);

        // Preload next section when user scrolls near it
        this.setupScrollPreloading();
    }

    setupScrollPreloading() {
        const sections = document.querySelectorAll('.section');
        const preloadObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const currentSection = entry.target;
                        const nextSection = currentSection.nextElementSibling;
                        if (nextSection && nextSection.classList.contains('section')) {
                            this.preloadSection(nextSection.id);
                        }
                    }
                });
            },
            {
                rootMargin: '200px 0px', // Preload when section is 200px away
                threshold: 0
            }
        );

        sections.forEach(section => preloadObserver.observe(section));
    }
}

// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================

class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active link highlighting
        this.setupActiveNavigation();
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );

        sections.forEach(section => observer.observe(section));
    }
}

// ========================================
// DATA VISUALIZATIONS
// ========================================

class DataVisualizations {
    constructor() {
        this.heroChart = null;
        this.networkChart = null;
        this.init();
    }

    init() {
        this.setupHeroChart();
        this.setupNetworkChart();
    }

    setupHeroChart() {
        const canvas = document.getElementById('hero-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Animated bar chart
        let animationFrame = 0;

        const drawBarChart = () => {
            ctx.clearRect(0, 0, width, height);

            // Get theme colors
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const accentColor = isDark ? '#00ff88' : '#0066ff';
            const textColor = isDark ? '#b0b0b0' : '#495057';
            const gridColor = isDark ? '#2a2a2a' : '#dee2e6';

            // Grid lines
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 1;
            for (let i = 0; i < 5; i++) {
                const y = (height / 5) * i;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Bars
            const bars = 8;
            const barWidth = (width / bars) * 0.7;
            const spacing = (width / bars) * 0.3;

            for (let i = 0; i < bars; i++) {
                const x = i * (barWidth + spacing) + spacing / 2;
                const baseHeight = Math.random() * 0.3 + 0.3;
                const wave = Math.sin((animationFrame * 0.02) + (i * 0.5)) * 0.2;
                const barHeight = (baseHeight + wave) * height;
                const y = height - barHeight;

                // Gradient
                const gradient = ctx.createLinearGradient(0, y, 0, height);
                gradient.addColorStop(0, accentColor);
                gradient.addColorStop(1, accentColor + '40');

                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, barWidth, barHeight);
            }

            // Labels
            ctx.fillStyle = textColor;
            ctx.font = '12px "Roboto Mono", monospace';
            ctx.fillText('Skills', 10, 20);
            ctx.fillText('Growth', width - 60, 20);

            animationFrame++;
            requestAnimationFrame(drawBarChart);
        };

        drawBarChart();
    }

    setupNetworkChart() {
        const canvas = document.getElementById('network-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Network graph
        const nodes = [];
        const numNodes = 12;

        // Create nodes
        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 2
            });
        }

        const drawNetwork = () => {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const accentColor = isDark ? '#00ff88' : '#0066ff';
            const lineColor = isDark ? '#2a2a2a' : '#dee2e6';

            // Update and draw nodes
            nodes.forEach((node, i) => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Keep in bounds
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));

                // Draw connections
                nodes.forEach((other, j) => {
                    if (i < j) {
                        const dx = other.x - node.x;
                        const dy = other.y - node.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 100) {
                            ctx.strokeStyle = lineColor;
                            ctx.lineWidth = 1;
                            ctx.globalAlpha = 1 - (distance / 100);
                            ctx.beginPath();
                            ctx.moveTo(node.x, node.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                        }
                    }
                });

                // Draw node
                ctx.globalAlpha = 1;
                ctx.fillStyle = accentColor;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(drawNetwork);
        };

        drawNetwork();
    }
}

// ========================================
// CONTACT FORM HANDLER
// ========================================

class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.status = document.getElementById('form-status');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Get Formspree endpoint from config
        const formspreeEndpoint = CONFIG.formspreeEndpoint || '';

        if (!formspreeEndpoint) {
            this.showStatus('error', 'Formspree API key not configured. Please add it to config.js');
            return;
        }

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                this.showStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
                this.form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            this.showStatus('error', 'Failed to send message. Please try again later or contact me via LinkedIn.');
        }
    }

    showStatus(type, message) {
        this.status.textContent = message;
        this.status.className = `form-status ${type}`;

        setTimeout(() => {
            this.status.className = 'form-status';
        }, 5000);
    }
}

// ========================================
// EXTERNAL LINKS MANAGER
// ========================================

class ExternalLinksManager {
    constructor() {
        this.init();
    }

    init() {
        // Apply external links from config
        this.applyCompanyLinks();
        this.applyProjectLinks();
    }

    applyCompanyLinks() {
        const companyLinks = document.querySelectorAll('[data-company-url]');
        companyLinks.forEach(link => {
            const company = link.getAttribute('data-company-url');
            const url = CONFIG.companyUrls?.[company];
            if (url) {
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
    }

    applyProjectLinks() {
        // Demo links
        const demoLinks = document.querySelectorAll('[data-project-demo]');
        demoLinks.forEach(link => {
            const project = link.getAttribute('data-project-demo');
            const url = CONFIG.projectDemoUrls?.[project];
            if (url) {
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });

        // Buy links
        const buyLinks = document.querySelectorAll('[data-project-buy]');
        buyLinks.forEach(link => {
            const project = link.getAttribute('data-project-buy');
            const url = CONFIG.projectBuyUrls?.[project];
            if (url) {
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });

        // Blog links (local)
        const blogLinks = document.querySelectorAll('[data-blog-link]');
        blogLinks.forEach(link => {
            link.target = '_blank';
        });
    }
}

// ========================================
// TYPING ANIMATION
// ========================================

class TypingAnimation {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.init();
    }

    init() {
        if (!this.element) return;

        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Defer non-critical resources
        this.deferResources();

        // Add loading states
        this.addLoadingStates();

        // Optimize images
        this.optimizeImages();
    }

    deferResources() {
        // Defer non-critical styles
        window.addEventListener('load', () => {
            // Load additional resources after page load
        });
    }

    addLoadingStates() {
        // Remove loading class when page is fully loaded
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }

    optimizeImages() {
        // Add loading="lazy" to images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const themeManager = new ThemeManager();
    const lazyLoader = new LazyLoader();
    const preloader = new Preloader();
    const navigationManager = new NavigationManager();
    const dataVisualizations = new DataVisualizations();
    const contactFormHandler = new ContactFormHandler();
    const externalLinksManager = new ExternalLinksManager();
    const performanceOptimizer = new PerformanceOptimizer();

    // Start preloading
    preloader.init();

    // Add typing animation to hero (optional - can be enabled/disabled)
    // const typingElement = document.querySelector('.typing-text');
    // if (typingElement) {
    //     const text = typingElement.textContent;
    //     new TypingAnimation(typingElement, text);
    // }

    console.log('🚀 Website initialized successfully!');
});

// ========================================
// SERVICE WORKER (for PWA capabilities)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
