/* ============================================
   INTERACTIVE COMPONENTS & NEW EASTER EGGS
   Creative, fun, and engaging interactions
   ============================================ */

/* ============================================
   EASTER EGG 1: SECRET COLOR SCHEMES
   Type "colors" anywhere to cycle themes
   ============================================ */
class ColorSchemeChanger {
    constructor() {
        this.schemes = [
            { name: 'Teal (Default)', accent: '#00C896', accentHover: '#00E0A8' },
            { name: 'Electric Blue', accent: '#007AFF', accentHover: '#0A84FF' },
            { name: 'Purple Dream', accent: '#BF40BF', accentHover: '#DA70D6' },
            { name: 'Sunset Orange', accent: '#FF6B35', accentHover: '#FF8C61' },
            { name: 'Mint Green', accent: '#3DDC97', accentHover: '#5FE3A7' },
            { name: 'Hot Pink', accent: '#FF1B8D', accentHover: '#FF4DA6' }
        ];
        this.currentIndex = 0;
        this.buffer = '';
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Build string from keypresses
            if (e.key.length === 1) {
                this.buffer += e.key.toLowerCase();

                // Keep only last 6 characters
                if (this.buffer.length > 6) {
                    this.buffer = this.buffer.slice(-6);
                }

                // Check if "colors" was typed
                if (this.buffer === 'colors') {
                    this.cycleScheme();
                    this.buffer = '';
                }
            }
        });
    }

    cycleScheme() {
        this.currentIndex = (this.currentIndex + 1) % this.schemes.length;
        const scheme = this.schemes[this.currentIndex];

        // Apply colors
        document.documentElement.style.setProperty('--color-accent', scheme.accent);
        document.documentElement.style.setProperty('--color-accent-hover', scheme.accentHover);

        // Show notification
        this.showNotification(scheme.name);

        // Unlock achievement
        if (window.achievementSystem) {
            window.achievementSystem.unlock('secret_finder');
        }
    }

    showNotification(schemeName) {
        const toast = document.getElementById('achievement-toast');
        if (toast) {
            const description = toast.querySelector('.achievement-description');
            description.textContent = `🎨 Color scheme: ${schemeName}`;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 2000);
        }
    }
}

/* ============================================
   EASTER EGG 2: GRAVITY MODE
   Press 'G' to make everything fall!
   ============================================ */
class GravityMode {
    constructor() {
        this.active = false;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'g' && !e.ctrlKey && !e.metaKey) {
                // Don't trigger if typing in input
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                    return;
                }
                this.toggle();
            }
        });
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.activate();
        } else {
            this.deactivate();
        }
    }

    activate() {
        const cards = document.querySelectorAll('.card, .stat-card, .project-card, .nav');

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'transform 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                card.style.transform = `translateY(${window.innerHeight + 200}px) rotate(${Math.random() * 360}deg)`;
            }, index * 50);
        });

        // Show message
        const toast = document.getElementById('achievement-toast');
        if (toast) {
            const description = toast.querySelector('.achievement-description');
            description.textContent = '🌍 Gravity Mode Activated! Press G again to restore.';
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        }
    }

    deactivate() {
        const cards = document.querySelectorAll('.card, .stat-card, .project-card, .nav');

        cards.forEach((card) => {
            card.style.transform = '';
            setTimeout(() => {
                card.style.transition = '';
            }, 1000);
        });
    }
}

/* ============================================
   EASTER EGG 3: RETRO MODE
   Click system status 5 times for 90s theme
   ============================================ */
class RetroMode {
    constructor() {
        this.clickCount = 0;
        this.active = false;
        this.init();
    }

    init() {
        const systemStatus = document.getElementById('system-status');
        if (systemStatus) {
            systemStatus.addEventListener('click', () => {
                this.clickCount++;
                if (this.clickCount >= 5) {
                    this.toggle();
                    this.clickCount = 0;
                }
            });
        }
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.activate();
        } else {
            this.deactivate();
        }
    }

    activate() {
        document.body.style.background = 'linear-gradient(45deg, #FF00FF, #00FFFF, #FFFF00)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 3s ease infinite';

        // Add retro font
        const style = document.createElement('style');
        style.id = 'retro-mode-style';
        style.textContent = `
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            * {
                font-family: 'Comic Sans MS', cursive !important;
            }
            .card {
                border: 3px solid #FF00FF !important;
                box-shadow: 5px 5px 0 #00FFFF !important;
            }
        `;
        document.head.appendChild(style);

        // Show message
        const toast = document.getElementById('achievement-toast');
        if (toast) {
            const description = toast.querySelector('.achievement-description');
            description.textContent = '🌈 Welcome to 1999! Click status again to return.';
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        }
    }

    deactivate() {
        document.body.style.background = '';
        document.body.style.backgroundSize = '';
        document.body.style.animation = '';

        const style = document.getElementById('retro-mode-style');
        if (style) style.remove();
    }
}

/* ============================================
   INTERACTIVE 1: FLOATING ACTION BUTTON
   Visible controls for interactive features
   ============================================ */
class FloatingActionButton {
    constructor() {
        this.createFAB();
    }

    createFAB() {
        const fab = document.createElement('div');
        fab.className = 'fab';
        fab.innerHTML = `
            <button class="fab-trigger" aria-label="Interactive controls">
                <span class="fab-icon">⚡</span>
            </button>
            <div class="fab-menu hidden">
                <button class="fab-item" data-action="darkMode">
                    <span class="fab-item-icon">🌙</span>
                    <span class="fab-item-label">Dark Mode</span>
                </button>
                <button class="fab-item" data-action="particleSpeed">
                    <span class="fab-item-icon">⚙️</span>
                    <span class="fab-item-label">Particle Speed</span>
                </button>
                <button class="fab-item" data-action="attractorMode">
                    <span class="fab-item-icon">🧲</span>
                    <span class="fab-item-label">Cursor Magnet</span>
                </button>
                <button class="fab-item" data-action="colorWave">
                    <span class="fab-item-icon">🌊</span>
                    <span class="fab-item-label">Color Wave</span>
                </button>
            </div>
        `;
        document.body.appendChild(fab);

        // Toggle menu
        const trigger = fab.querySelector('.fab-trigger');
        const menu = fab.querySelector('.fab-menu');

        trigger.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            trigger.classList.toggle('active');
        });

        // Handle actions
        fab.querySelectorAll('.fab-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const action = item.getAttribute('data-action');
                this.handleAction(action, item);
            });
        });
    }

    handleAction(action, item) {
        switch(action) {
            case 'darkMode':
                this.toggleDarkMode(item);
                break;
            case 'particleSpeed':
                this.cycleParticleSpeed(item);
                break;
            case 'attractorMode':
                if (window.particleAttractor) {
                    window.particleAttractor.toggle();
                    item.classList.toggle('active');
                }
                break;
            case 'colorWave':
                if (window.colorWave) {
                    window.colorWave.toggle();
                    item.classList.toggle('active');
                }
                break;
        }
    }

    toggleDarkMode(item) {
        document.body.classList.toggle('light-mode');
        item.classList.toggle('active');
    }

    cycleParticleSpeed(item) {
        if (window.particleBackground) {
            const speeds = [0.3, 0.5, 1.0, 2.0];
            const currentSpeed = window.particleBackground.speed || 0.5;
            const currentIndex = speeds.indexOf(currentSpeed);
            const nextIndex = (currentIndex + 1) % speeds.length;
            window.particleBackground.speed = speeds[nextIndex];

            // Update particle velocities
            window.particleBackground.particles.forEach(p => {
                p.vx *= speeds[nextIndex] / currentSpeed;
                p.vy *= speeds[nextIndex] / currentSpeed;
            });
        }
    }
}

/* ============================================
   INTERACTIVE 2: PARTICLE ATTRACTOR
   Particles follow your cursor
   ============================================ */
class ParticleAttractor {
    constructor() {
        this.active = false;
        this.mouseX = 0;
        this.mouseY = 0;
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            document.addEventListener('mousemove', this.handleMouseMove);
            this.startAttraction();
        } else {
            document.removeEventListener('mousemove', this.handleMouseMove);
        }
    }

    handleMouseMove = (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    startAttraction() {
        if (!this.active || !window.particleBackground) return;

        window.particleBackground.particles.forEach(particle => {
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 200) {
                const force = (200 - distance) / 200;
                particle.vx += (dx / distance) * force * 0.5;
                particle.vy += (dy / distance) * force * 0.5;
            }
        });

        requestAnimationFrame(() => this.startAttraction());
    }
}

/* ============================================
   INTERACTIVE 3: COLOR WAVE
   Cursor creates color wave in background
   ============================================ */
class ColorWave {
    constructor() {
        this.active = false;
        this.canvas = null;
        this.ctx = null;
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.createCanvas();
            document.addEventListener('mousemove', this.handleMouseMove);
        } else {
            if (this.canvas) {
                this.canvas.remove();
                this.canvas = null;
            }
            document.removeEventListener('mousemove', this.handleMouseMove);
        }
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'color-wave-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '0';
        this.canvas.style.mixBlendMode = 'screen';
        this.canvas.style.opacity = '0.3';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.ctx = this.canvas.getContext('2d');
    }

    handleMouseMove = (e) => {
        if (!this.ctx) return;

        const gradient = this.ctx.createRadialGradient(
            e.clientX, e.clientY, 0,
            e.clientX, e.clientY, 200
        );

        gradient.addColorStop(0, 'rgba(0, 200, 150, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 200, 150, 0)');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(e.clientX - 200, e.clientY - 200, 400, 400);

        // Fade out
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalCompositeOperation = 'source-over';
    }
}

/* ============================================
   INTERACTIVE 4: ANIMATED COUNTER
   Numbers count up when scrolled into view
   ============================================ */
class AnimatedCounter {
    constructor() {
        this.init();
    }

    init() {
        const statValues = document.querySelectorAll('.stat-value');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateValue(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        statValues.forEach(stat => observer.observe(stat));
    }

    animateValue(element) {
        const text = element.textContent;
        const number = parseInt(text.replace(/\D/g, ''));

        if (isNaN(number)) return;

        const suffix = text.replace(/[\d+]/g, '').trim();
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = text;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, duration / steps);
    }
}

/* ============================================
   INTERACTIVE 5: CARD FLIP
   Project cards flip to show more info
   ============================================ */
class CardFlip {
    constructor() {
        this.init();
    }

    init() {
        const projectCards = document.querySelectorAll('.project-preview-card');

        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    card.classList.toggle('flipped');
                }
            });

            // Add back content if it doesn't exist
            if (!card.querySelector('.card-back')) {
                const back = document.createElement('div');
                back.className = 'card-back';
                back.innerHTML = `
                    <p>Click to view full project details</p>
                    <a href="projects.html" class="btn btn-primary btn-sm">View All Projects</a>
                `;
                card.appendChild(back);
            }
        });
    }
}

/* ============================================
   INTERACTIVE 6: SKILL CONSTELLATION
   Draggable network visualization of skills
   ============================================ */
class SkillConstellation {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.nodes = [];
        this.dragging = null;
        this.active = false;
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.createCanvas();
            this.createNodes();
            this.animate();
        } else {
            if (this.canvas) {
                this.canvas.remove();
                this.canvas = null;
            }
        }
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'skill-constellation';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '50%';
        this.canvas.style.left = '50%';
        this.canvas.style.transform = 'translate(-50%, -50%)';
        this.canvas.style.zIndex = '3000';
        this.canvas.style.border = '1px solid var(--color-accent)';
        this.canvas.style.borderRadius = 'var(--radius-md)';
        this.canvas.style.background = 'var(--color-bg-card)';
        this.canvas.width = Math.min(600, window.innerWidth - 40);
        this.canvas.height = Math.min(400, window.innerHeight - 40);

        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.position = 'fixed';
        closeBtn.style.top = '50%';
        closeBtn.style.right = '50%';
        closeBtn.style.transform = 'translate(calc(300px - 20px), calc(-200px + 10px))';
        closeBtn.style.zIndex = '3001';
        closeBtn.className = 'terminal-close';
        closeBtn.onclick = () => this.toggle();
        document.body.appendChild(closeBtn);

        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseup', () => this.dragging = null);
    }

    createNodes() {
        const skills = ['Python', 'SQL', 'JavaScript', 'Tableau', 'AI', 'Data Viz', 'Agile', 'UI/UX'];

        this.nodes = skills.map((skill, i) => ({
            x: Math.random() * (this.canvas.width - 100) + 50,
            y: Math.random() * (this.canvas.height - 100) + 50,
            vx: 0,
            vy: 0,
            radius: 30,
            label: skill
        }));
    }

    handleMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.nodes.forEach(node => {
            const dist = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
            if (dist < node.radius) {
                this.dragging = node;
            }
        });
    }

    handleMouseMove(e) {
        if (this.dragging) {
            const rect = this.canvas.getBoundingClientRect();
            this.dragging.x = e.clientX - rect.left;
            this.dragging.y = e.clientY - rect.top;
        }
    }

    animate() {
        if (!this.active || !this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections
        this.ctx.strokeStyle = 'rgba(0, 200, 150, 0.2)';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dist = Math.sqrt(
                    (this.nodes[i].x - this.nodes[j].x) ** 2 +
                    (this.nodes[i].y - this.nodes[j].y) ** 2
                );
                if (dist < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw nodes
        this.nodes.forEach(node => {
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'var(--color-accent)';
            this.ctx.fill();

            this.ctx.fillStyle = 'var(--color-bg-primary)';
            this.ctx.font = '12px Inter';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(node.label, node.x, node.y);
        });

        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   INTERACTIVE 7: MINI SNAKE GAME
   Playable snake game widget
   ============================================ */
class MiniSnakeGame {
    constructor() {
        this.active = false;
        this.canvas = null;
        this.ctx = null;
        this.snake = [{x: 10, y: 10}];
        this.food = {x: 15, y: 15};
        this.direction = 'right';
        this.score = 0;
        this.gameLoop = null;
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.createGame();
            this.startGame();
        } else {
            if (this.canvas) {
                this.canvas.remove();
                this.canvas = null;
            }
            if (this.gameLoop) {
                clearInterval(this.gameLoop);
            }
        }
    }

    createGame() {
        const container = document.createElement('div');
        container.id = 'snake-game';
        container.style.position = 'fixed';
        container.style.bottom = '100px';
        container.style.right = '20px';
        container.style.zIndex = '2000';
        container.style.background = 'var(--color-bg-card)';
        container.style.border = '1px solid var(--color-accent)';
        container.style.borderRadius = 'var(--radius-md)';
        container.style.padding = '10px';

        const title = document.createElement('div');
        title.textContent = 'Snake Game';
        title.style.color = 'var(--color-accent)';
        title.style.fontWeight = '600';
        title.style.marginBottom = '5px';
        title.style.fontSize = '12px';
        container.appendChild(title);

        this.canvas = document.createElement('canvas');
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.canvas.style.background = 'var(--color-bg-primary)';
        container.appendChild(this.canvas);

        const score = document.createElement('div');
        score.id = 'snake-score';
        score.textContent = 'Score: 0';
        score.style.color = 'var(--color-text-secondary)';
        score.style.fontSize = '11px';
        score.style.marginTop = '5px';
        container.appendChild(score);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.className = 'terminal-close';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '5px';
        closeBtn.style.right = '5px';
        closeBtn.onclick = () => this.toggle();
        container.appendChild(closeBtn);

        document.body.appendChild(container);
        this.ctx = this.canvas.getContext('2d');

        // Controls
        document.addEventListener('keydown', (e) => {
            if (!this.active) return;
            const key = e.key.toLowerCase();
            if (key === 'arrowup' && this.direction !== 'down') this.direction = 'up';
            if (key === 'arrowdown' && this.direction !== 'up') this.direction = 'down';
            if (key === 'arrowleft' && this.direction !== 'right') this.direction = 'left';
            if (key === 'arrowright' && this.direction !== 'left') this.direction = 'right';
        });
    }

    startGame() {
        this.gameLoop = setInterval(() => {
            this.update();
            this.draw();
        }, 150);
    }

    update() {
        const head = {...this.snake[0]};

        switch(this.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }

        // Wrap around
        if (head.x < 0) head.x = 19;
        if (head.x > 19) head.x = 0;
        if (head.y < 0) head.y = 19;
        if (head.y > 19) head.y = 0;

        // Check collision with self
        if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            this.resetGame();
            return;
        }

        this.snake.unshift(head);

        // Check food
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score++;
            document.getElementById('snake-score').textContent = `Score: ${this.score}`;
            this.food = {
                x: Math.floor(Math.random() * 20),
                y: Math.floor(Math.random() * 20)
            };
        } else {
            this.snake.pop();
        }
    }

    draw() {
        if (!this.ctx) return;

        // Clear
        this.ctx.fillStyle = 'var(--color-bg-primary)';
        this.ctx.fillRect(0, 0, 200, 200);

        // Draw snake
        this.ctx.fillStyle = '#00C896';
        this.snake.forEach(segment => {
            this.ctx.fillRect(segment.x * 10, segment.y * 10, 9, 9);
        });

        // Draw food
        this.ctx.fillStyle = '#FF6B35';
        this.ctx.fillRect(this.food.x * 10, this.food.y * 10, 9, 9);
    }

    resetGame() {
        this.snake = [{x: 10, y: 10}];
        this.direction = 'right';
        this.score = 0;
        document.getElementById('snake-score').textContent = 'Score: 0';
    }
}

/* ============================================
   INTERACTIVE 8: MUSIC VISUALIZER
   Visualizes ambient background music
   ============================================ */
class MusicVisualizer {
    constructor() {
        this.active = false;
        this.canvas = null;
        this.ctx = null;
        this.bars = 32;
        this.barHeights = new Array(this.bars).fill(0);
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.createVisualizer();
            this.animate();
        } else {
            if (this.canvas) {
                this.canvas.remove();
                this.canvas = null;
            }
        }
    }

    createVisualizer() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'music-visualizer';
        this.canvas.style.position = 'fixed';
        this.canvas.style.bottom = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '60px';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        this.canvas.style.opacity = '0.5';
        this.canvas.width = window.innerWidth;
        this.canvas.height = 60;

        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }

    animate() {
        if (!this.active || !this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const barWidth = this.canvas.width / this.bars;

        for (let i = 0; i < this.bars; i++) {
            // Simulate audio data with random + smoothing
            const target = Math.random() * this.canvas.height;
            this.barHeights[i] += (target - this.barHeights[i]) * 0.1;

            const gradient = this.ctx.createLinearGradient(0, this.canvas.height, 0, 0);
            gradient.addColorStop(0, 'rgba(0, 200, 150, 0.5)');
            gradient.addColorStop(1, 'rgba(0, 200, 150, 0.1)');

            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(
                i * barWidth,
                this.canvas.height - this.barHeights[i],
                barWidth - 2,
                this.barHeights[i]
            );
        }

        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   INITIALIZE ALL COMPONENTS
   ============================================ */
let colorSchemeChanger, gravityMode, retroMode, floatingActionButton;
let particleAttractor, colorWave, animatedCounter, cardFlip;
let skillConstellation, miniSnakeGame, musicVisualizer;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize new easter eggs
    colorSchemeChanger = new ColorSchemeChanger();
    gravityMode = new GravityMode();
    retroMode = new RetroMode();

    // Initialize interactive components
    floatingActionButton = new FloatingActionButton();
    particleAttractor = new ParticleAttractor();
    colorWave = new ColorWave();
    animatedCounter = new AnimatedCounter();
    cardFlip = new CardFlip();
    skillConstellation = new SkillConstellation();
    miniSnakeGame = new MiniSnakeGame();
    musicVisualizer = new MusicVisualizer();

    // Make globally accessible
    window.particleAttractor = particleAttractor;
    window.colorWave = colorWave;
    window.skillConstellation = skillConstellation;
    window.miniSnakeGame = miniSnakeGame;
    window.musicVisualizer = musicVisualizer;

    // Add FAB actions for new components
    setTimeout(() => {
        const fabMenu = document.querySelector('.fab-menu');
        if (fabMenu) {
            const additionalItems = `
                <button class="fab-item" data-action="skillConstellation">
                    <span class="fab-item-icon">🌟</span>
                    <span class="fab-item-label">Skill Network</span>
                </button>
                <button class="fab-item" data-action="snakeGame">
                    <span class="fab-item-icon">🐍</span>
                    <span class="fab-item-label">Snake Game</span>
                </button>
                <button class="fab-item" data-action="musicViz">
                    <span class="fab-item-icon">🎵</span>
                    <span class="fab-item-label">Music Viz</span>
                </button>
            `;
            fabMenu.insertAdjacentHTML('beforeend', additionalItems);

            // Add handlers
            fabMenu.querySelector('[data-action="skillConstellation"]').addEventListener('click', () => {
                skillConstellation.toggle();
            });
            fabMenu.querySelector('[data-action="snakeGame"]').addEventListener('click', () => {
                miniSnakeGame.toggle();
            });
            fabMenu.querySelector('[data-action="musicViz"]').addEventListener('click', () => {
                musicVisualizer.toggle();
            });
        }
    }, 500);

    // Console hints
    console.log('%c🎮 New Easter Eggs Added!', 'color: #00C896; font-size: 16px; font-weight: bold;');
    console.log('%c1. Type "colors" to cycle color schemes', 'color: #A1A1AA; font-size: 12px;');
    console.log('%c2. Press G for Gravity Mode', 'color: #A1A1AA; font-size: 12px;');
    console.log('%c3. Click System Status 5 times for Retro Mode', 'color: #A1A1AA; font-size: 12px;');
    console.log('%c⚡ Click the FAB (bottom-right) for interactive controls!', 'color: #00C896; font-size: 12px;');
});
