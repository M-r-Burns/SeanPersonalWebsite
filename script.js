// ========================================
// CONFIGURATION & CONSTANTS
// ========================================

let CONFIG = window.CONFIG || {};

// ========================================
// PARTICLE NETWORK BACKGROUND
// ========================================

class ParticleNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        this.mouse = { x: null, y: null };

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        this.particles = [];

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    }

    handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const particleColor = isDark ? 'rgba(0, 255, 136, 0.08)' : 'rgba(0, 102, 255, 0.15)';
        const lineColor = isDark ? 'rgba(0, 255, 136, 0.05)' : 'rgba(0, 102, 255, 0.08)';

        // Update and draw particles
        this.particles.forEach((particle, i) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Keep in bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

            // Draw connections
            this.particles.forEach((other, j) => {
                if (i < j) {
                    const dx = other.x - particle.x;
                    const dy = other.y - particle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        this.ctx.strokeStyle = lineColor;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.globalAlpha = 1 - (distance / 120);
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(other.x, other.y);
                        this.ctx.stroke();
                    }
                }
            });

            // Draw particle
            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = particleColor;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// ========================================
// SKILL CONSTELLATION (Interactive Background)
// ========================================

class SkillConstellation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.skills = [];
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.animationId = null;

        this.resize();
        this.initSkills();
        this.animate();
        this.attachEvents();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    initSkills() {
        const skillNames = ['Python', 'JavaScript', 'SQL', 'AI', 'Data', 'GTM', 'Strategy', 'UI/UX'];
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = Math.min(this.canvas.width, this.canvas.height) / 3;

        this.skills = skillNames.map((name, i) => {
            const angle = (i / skillNames.length) * Math.PI * 2;
            return {
                name,
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
                baseX: centerX + Math.cos(angle) * radius,
                baseY: centerY + Math.sin(angle) * radius,
                radius: 30,
                vx: 0,
                vy: 0
            };
        });
    }

    attachEvents() {
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.handleMouseUp());
    }

    handleMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        this.skills.forEach(skill => {
            const dx = mouseX - skill.x;
            const dy = mouseY - skill.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < skill.radius) {
                this.isDragging = true;
                this.draggedSkill = skill;
                this.dragOffset = { x: dx, y: dy };
            }
        });
    }

    handleMouseMove(e) {
        if (this.isDragging && this.draggedSkill) {
            const rect = this.canvas.getBoundingClientRect();
            this.draggedSkill.x = (e.clientX - rect.left) - this.dragOffset.x;
            this.draggedSkill.y = (e.clientY - rect.top) - this.dragOffset.y;
        }
    }

    handleMouseUp() {
        if (this.isDragging && this.draggedSkill) {
            // Spring back to base position
            const skill = this.draggedSkill;
            const dx = skill.baseX - skill.x;
            const dy = skill.baseY - skill.y;
            skill.vx = dx * 0.1;
            skill.vy = dy * 0.1;
        }
        this.isDragging = false;
        this.draggedSkill = null;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const accentColor = isDark ? '#00ff88' : '#0066ff';
        const lineColor = isDark ? 'rgba(0, 255, 136, 0.2)' : 'rgba(0, 102, 255, 0.2)';

        // Update positions with spring physics
        this.skills.forEach(skill => {
            if (skill !== this.draggedSkill) {
                skill.x += skill.vx;
                skill.y += skill.vy;

                // Apply spring force towards base position
                const dx = skill.baseX - skill.x;
                const dy = skill.baseY - skill.y;
                skill.vx += dx * 0.01;
                skill.vy += dy * 0.01;

                // Damping
                skill.vx *= 0.95;
                skill.vy *= 0.95;
            }
        });

        // Draw connections
        this.skills.forEach((skill1, i) => {
            this.skills.forEach((skill2, j) => {
                if (i < j) {
                    const dx = skill2.x - skill1.x;
                    const dy = skill2.y - skill1.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 300) {
                        this.ctx.strokeStyle = lineColor;
                        this.ctx.lineWidth = 1;
                        this.ctx.globalAlpha = 1 - (distance / 300);
                        this.ctx.beginPath();
                        this.ctx.moveTo(skill1.x, skill1.y);
                        this.ctx.lineTo(skill2.x, skill2.y);
                        this.ctx.stroke();
                    }
                }
            });
        });

        // Draw skill nodes
        this.skills.forEach(skill => {
            this.ctx.globalAlpha = 1;

            // Outer glow
            this.ctx.fillStyle = accentColor;
            this.ctx.globalAlpha = 0.2;
            this.ctx.beginPath();
            this.ctx.arc(skill.x, skill.y, skill.radius + 5, 0, Math.PI * 2);
            this.ctx.fill();

            // Main circle
            this.ctx.globalAlpha = 0.8;
            this.ctx.fillStyle = accentColor;
            this.ctx.beginPath();
            this.ctx.arc(skill.x, skill.y, skill.radius, 0, Math.PI * 2);
            this.ctx.fill();

            // Text
            this.ctx.globalAlpha = 1;
            this.ctx.fillStyle = isDark ? '#000' : '#fff';
            this.ctx.font = 'bold 12px "Roboto Mono", monospace';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(skill.name, skill.x, skill.y);
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// ========================================
// SYSTEM STATUS COMPONENT
// ========================================

class SystemStatus {
    constructor() {
        this.createDOM();
        this.startUpdates();
    }

    createDOM() {
        const statusHTML = `
            <div class="system-status">
                <div class="system-status-header">
                    <span class="status-indicator"></span>
                    <span>SYSTEM STATUS</span>
                </div>
                <div class="system-status-item">
                    <span class="system-status-label">Uptime:</span>
                    <span class="system-status-value" id="uptime">99.99%</span>
                </div>
                <div class="system-status-item">
                    <span class="system-status-label">Data Streams:</span>
                    <span class="system-status-value" id="streams">Active (3)</span>
                </div>
                <div class="system-status-item">
                    <span class="system-status-label">Network:</span>
                    <span class="system-status-value" id="latency">42ms</span>
                </div>
                <div class="system-status-expand">
                    <div class="system-status-item">
                        <span class="system-status-label">Tech Stack:</span>
                        <span class="system-status-value">Active</span>
                    </div>
                    <div class="system-status-item">
                        <span class="system-status-label">Projects:</span>
                        <span class="system-status-value">15+</span>
                    </div>
                    <div class="system-status-item">
                        <span class="system-status-label">API Status:</span>
                        <span class="system-status-value">Ready</span>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', statusHTML);
    }

    startUpdates() {
        setInterval(() => {
            // Update with random but realistic values
            const latency = Math.floor(Math.random() * 20) + 35;
            const latencyEl = document.getElementById('latency');
            if (latencyEl) latencyEl.textContent = `${latency}ms`;

            const uptime = (99.9 + Math.random() * 0.09).toFixed(2);
            const uptimeEl = document.getElementById('uptime');
            if (uptimeEl) uptimeEl.textContent = `${uptime}%`;
        }, 3000);
    }
}

// ========================================
// TERMINAL EASTER EGG
// ========================================

class TerminalEasterEgg {
    constructor() {
        this.commands = {
            help: 'Available commands: help, whoami, list_projects, skills, contact_me, clear',
            whoami: 'Elijah - Business Analytics & Software Developer\nI build things that bridge business needs and technical solutions.',
            list_projects: '1. ApeX Student Project Hub\n2. Class 8 Truck Trip Simulator\n3. MEBA LiDAR Backpack Commercialization\n4. Marketplace Messenger\n5. Beyond the Basics: Fantasy Football eBook',
            skills: 'Python | JavaScript | SQL | Data Visualization | AI Tooling\nAgile | Market Research | UI/UX | Final Cut Pro',
            contact_me: 'LinkedIn: linkedin.com/in/elijb\nFeel free to reach out!',
            clear: '[CLEAR]'
        };

        this.history = [];
        this.createDOM();
        this.attachEvents();
    }

    createDOM() {
        const terminalHTML = `
            <div class="terminal-overlay" id="terminal-overlay">
                <div class="terminal">
                    <div class="terminal-header">
                        <span class="terminal-title">terminal.exe</span>
                        <button class="terminal-close" id="terminal-close"></button>
                    </div>
                    <div class="terminal-body" id="terminal-body">
                        <div class="terminal-line">
                            <span class="terminal-prompt">$</span> Welcome to the terminal!
                        </div>
                        <div class="terminal-line">
                            <span class="terminal-prompt">$</span> Type 'help' for available commands
                        </div>
                        <div class="terminal-hint">
                            Hint: Press Ctrl+Shift+T (or Cmd+Shift+T on Mac) to toggle terminal
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', terminalHTML);
    }

    attachEvents() {
        // Keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggle();
            }
            if (e.key === 'Escape') {
                this.close();
            }
        });

        // Close button
        const closeBtn = document.getElementById('terminal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Click outside to close
        const overlay = document.getElementById('terminal-overlay');
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.close();
                }
            });
        }

        // Add input handling
        this.addInputLine();
    }

    addInputLine() {
        const terminalBody = document.getElementById('terminal-body');
        if (!terminalBody) return;

        const inputLineHTML = `
            <div class="terminal-line">
                <span class="terminal-prompt">$</span>
                <input type="text" class="terminal-input" id="terminal-input" placeholder="Enter command..." autocomplete="off">
            </div>
        `;

        terminalBody.insertAdjacentHTML('beforeend', inputLineHTML);

        const input = document.getElementById('terminal-input');
        if (input) {
            input.focus();
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.executeCommand(input.value.trim().toLowerCase());
                    input.value = '';
                }
            });
        }
    }

    executeCommand(cmd) {
        const terminalBody = document.getElementById('terminal-body');
        if (!terminalBody) return;

        // Remove current input line
        const currentInput = document.getElementById('terminal-input');
        if (currentInput && currentInput.parentElement) {
            currentInput.parentElement.remove();
        }

        // Show command
        const cmdLine = `<div class="terminal-line"><span class="terminal-prompt">$</span> ${cmd}</div>`;
        terminalBody.insertAdjacentHTML('beforeend', cmdLine);

        // Execute command
        if (cmd === 'clear') {
            terminalBody.innerHTML = '';
        } else if (this.commands[cmd]) {
            const output = this.commands[cmd];
            output.split('\n').forEach(line => {
                terminalBody.insertAdjacentHTML('beforeend', `<div class="terminal-line">${line}</div>`);
            });
        } else if (cmd) {
            terminalBody.insertAdjacentHTML('beforeend', `<div class="terminal-line">Command not found: ${cmd}. Type 'help' for available commands.</div>`);
        }

        // Add new input line
        this.addInputLine();

        // Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    toggle() {
        const overlay = document.getElementById('terminal-overlay');
        if (overlay) {
            overlay.classList.toggle('active');
            if (overlay.classList.contains('active')) {
                const input = document.getElementById('terminal-input');
                if (input) {
                    setTimeout(() => input.focus(), 100);
                }
            }
        }
    }

    close() {
        const overlay = document.getElementById('terminal-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
}

// ========================================
// STRATEGY FLOW PATH
// ========================================

class StrategyFlow {
    constructor() {
        this.nodes = [
            { id: 'hero', label: 'INIT' },
            { id: 'about', label: 'PROFILE' },
            { id: 'experience', label: 'HISTORY' },
            { id: 'projects', label: 'WORK' },
            { id: 'skills', label: 'STACK' },
            { id: 'contact', label: 'CONNECT' }
        ];

        this.createDOM();
        this.setupObserver();
    }

    createDOM() {
        const flowHTML = `
            <div class="strategy-flow">
                ${this.nodes.map(node => `
                    <div class="flow-node" data-section="${node.id}" data-label="${node.label}"></div>
                `).join('')}
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', flowHTML);
    }

    setupObserver() {
        const sections = document.querySelectorAll('.section');
        const flowNodes = document.querySelectorAll('.flow-node');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        flowNodes.forEach(node => {
                            if (node.dataset.section === sectionId) {
                                node.classList.add('active');
                            } else {
                                node.classList.remove('active');
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

        // Click to scroll
        flowNodes.forEach(node => {
            node.addEventListener('click', () => {
                const targetSection = document.getElementById(node.dataset.section);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

// ========================================
// THEME MANAGEMENT
// ========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || CONFIG.theme?.defaultTheme || 'dark';
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
                rootMargin: '50px 0px',
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
        setTimeout(() => this.preloadImages(), 1000);
        setTimeout(() => this.preloadVideos(), 2000);
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
                rootMargin: '200px 0px',
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

        let animationFrame = 0;

        const drawBarChart = () => {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const accentColor = isDark ? '#00ff88' : '#0066ff';
            const textColor = isDark ? '#b0b0b0' : '#495057';
            const gridColor = isDark ? '#3a3a3f' : '#dee2e6';

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

        const nodes = [];
        const numNodes = 12;

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
            const lineColor = isDark ? '#3a3a3f' : '#dee2e6';

            nodes.forEach((node, i) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));

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

        const formspreeEndpoint = CONFIG.formspreeEndpoint || '';

        if (!formspreeEndpoint || formspreeEndpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
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

        const blogLinks = document.querySelectorAll('[data-blog-link]');
        blogLinks.forEach(link => {
            link.target = '_blank';
        });
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
        this.deferResources();
        this.addLoadingStates();
        this.optimizeImages();
    }

    deferResources() {
        window.addEventListener('load', () => {
            // Resources loaded
        });
    }

    addLoadingStates() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }

    optimizeImages() {
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
    // Wrap content in main-content div for z-index layering
    const body = document.body;
    const wrapper = document.createElement('div');
    wrapper.className = 'main-content';

    // Move all existing children to wrapper (except scripts)
    const elementsToMove = Array.from(body.children).filter(child =>
        child.tagName !== 'SCRIPT' &&
        !child.id.includes('canvas') &&
        !child.classList.contains('system-status') &&
        !child.classList.contains('strategy-flow') &&
        !child.classList.contains('terminal-overlay')
    );

    elementsToMove.forEach(el => wrapper.appendChild(el));

    // Add canvases first (background layers)
    const canvasesHTML = `
        <canvas id="particle-canvas"></canvas>
        <canvas id="constellation-canvas"></canvas>
    `;
    body.insertAdjacentHTML('afterbegin', canvasesHTML);

    // Add wrapper after canvases (if there were elements to move)
    if (elementsToMove.length > 0) {
        body.appendChild(wrapper);
    }

    // Initialize all components
    const themeManager = new ThemeManager();

    // Background animations
    if (CONFIG.features?.enableDataVisualizations !== false) {
        const particleNetwork = new ParticleNetwork('particle-canvas');
        const skillConstellation = new SkillConstellation('constellation-canvas');
    }

    // Interactive components
    const systemStatus = new SystemStatus();
    const terminal = new TerminalEasterEgg();
    const strategyFlow = new StrategyFlow();

    // Core functionality
    const lazyLoader = new LazyLoader();
    const preloader = new Preloader();
    const navigationManager = new NavigationManager();
    const dataVisualizations = new DataVisualizations();
    const contactFormHandler = new ContactFormHandler();
    const externalLinksManager = new ExternalLinksManager();
    const performanceOptimizer = new PerformanceOptimizer();

    // Start preloading
    preloader.init();

    console.log('🚀 Enhanced website initialized!');
    console.log('💡 Tip: Press Ctrl+Shift+T (or Cmd+Shift+T) to open the terminal');
});
