/* ============================================
   EASTER EGGS & FUN INTERACTIVE COMPONENTS
   ============================================ */

// Achievement System
class AchievementSystem {
    constructor() {
        this.achievements = {
            first_visit: { name: 'First Visit', description: 'Welcome to the site!', unlocked: false },
            terminal_user: { name: 'Terminal Explorer', description: 'Opened the hidden terminal', unlocked: false },
            konami_code: { name: 'Konami Master', description: 'Entered the Konami code', unlocked: false },
            particle_player: { name: 'Particle Player', description: 'Interacted with the particle background', unlocked: false },
            click_enthusiast: { name: 'Click Enthusiast', description: 'Clicked 50 times', unlocked: false },
            secret_finder: { name: 'Secret Finder', description: 'Found a hidden secret', unlocked: false },
            night_owl: { name: 'Night Owl', description: 'Visited after midnight', unlocked: false },
            scroll_master: { name: 'Scroll Master', description: 'Scrolled to the bottom', unlocked: false },
            skill_explorer: { name: 'Skill Explorer', description: 'Hovered over all skill tags', unlocked: false },
            social_butterfly: { name: 'Social Butterfly', description: 'Clicked on social links', unlocked: false }
        };

        this.clickCount = 0;
        this.hoveredSkills = new Set();
        this.init();
    }

    init() {
        // Check if it's first visit
        if (!localStorage.getItem('visited_before')) {
            this.unlock('first_visit');
            localStorage.setItem('visited_before', 'true');
        }

        // Check if it's after midnight
        const hour = new Date().getHours();
        if (hour >= 0 && hour < 6) {
            this.unlock('night_owl');
        }

        // Track clicks
        document.addEventListener('click', () => {
            this.clickCount++;
            if (this.clickCount >= 50) {
                this.unlock('click_enthusiast');
            }
        });

        // Track scroll
        let hasScrolledToBottom = false;
        window.addEventListener('scroll', () => {
            if (!hasScrolledToBottom && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                hasScrolledToBottom = true;
                this.unlock('scroll_master');
            }
        });

        // Track skill hovers
        document.querySelectorAll('.tech-tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                this.hoveredSkills.add(tag.textContent.trim());
                if (this.hoveredSkills.size >= 10) {
                    this.unlock('skill_explorer');
                }
            });
        });

        // Track social clicks
        document.querySelectorAll('.contact-link, .company-link').forEach(link => {
            link.addEventListener('click', () => {
                this.unlock('social_butterfly');
            });
        });
    }

    unlock(achievementKey) {
        // Check if already unlocked in localStorage
        if (localStorage.getItem(`achievement_${achievementKey}`) === 'true') {
            if (!this.achievements[achievementKey].unlocked) {
                this.achievements[achievementKey].unlocked = true;
                this.updateAchievementCount();
            }
            return; // Don't show notification again
        }

        if (this.achievements[achievementKey] && !this.achievements[achievementKey].unlocked) {
            this.achievements[achievementKey].unlocked = true;
            this.showAchievement(this.achievements[achievementKey]);
            this.updateAchievementCount();

            // Save to localStorage
            localStorage.setItem(`achievement_${achievementKey}`, 'true');
        }
    }

    showAchievement(achievement) {
        const toast = document.getElementById('achievement-toast');
        const description = toast.querySelector('.achievement-description');

        description.textContent = achievement.name + ': ' + achievement.description;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }

    updateAchievementCount() {
        const unlockedCount = Object.values(this.achievements).filter(a => a.unlocked).length;
        const totalCount = Object.keys(this.achievements).length;
        const counter = document.getElementById('achievement-count');
        if (counter) {
            counter.textContent = `${unlockedCount}/${totalCount}`;
        }
    }
}

// Konami Code Easter Egg
class KonamiCode {
    constructor(callback) {
        this.pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.current = 0;
        this.callback = callback;

        document.addEventListener('keydown', (e) => this.check(e.key));
    }

    check(key) {
        if (key === this.pattern[this.current]) {
            this.current++;
            if (this.current === this.pattern.length) {
                this.callback();
                this.current = 0;
            }
        } else {
            this.current = 0;
        }
    }
}

// Click Ripple Effect - DISABLED (was annoying)
class RippleEffect {
    constructor() {
        // Disabled - was too annoying
        this.enabled = false;
    }
}

// Secret Messages (Triple Click Easter Egg)
class SecretMessages {
    constructor() {
        this.messages = [
            "🎯 You found a secret!",
            "💡 The best ideas come from trying",
            "🚀 Keep exploring!",
            "⚡ LeBron is the GOAT",
            "🔥 You're doing great!",
            "🎨 Design is how it works",
            "💻 Code is poetry",
            "🌟 Stay curious",
            "🎭 Every failure is a lesson",
            "🎪 Have fun!"
        ];

        this.clickCount = 0;
        this.clickTimer = null;
        this.usedMessages = new Set();

        document.addEventListener('click', (e) => this.handleTripleClick(e));
    }

    handleTripleClick(e) {
        clearTimeout(this.clickTimer);
        this.clickCount++;

        if (this.clickCount === 3) {
            this.showSecret(e);
            this.clickCount = 0;

            // Unlock achievement
            if (window.achievementSystem) {
                window.achievementSystem.unlock('secret_finder');
            }
        }

        this.clickTimer = setTimeout(() => {
            this.clickCount = 0;
        }, 500);
    }

    showSecret(e) {
        // Get a random message that hasn't been used recently
        let availableMessages = this.messages.filter(m => !this.usedMessages.has(m));
        if (availableMessages.length === 0) {
            this.usedMessages.clear();
            availableMessages = this.messages;
        }

        const message = availableMessages[Math.floor(Math.random() * availableMessages.length)];
        this.usedMessages.add(message);

        const secret = document.createElement('div');
        secret.className = 'secret-message';
        secret.textContent = message;
        secret.style.left = e.clientX + 'px';
        secret.style.top = e.clientY + 'px';

        document.body.appendChild(secret);

        setTimeout(() => {
            secret.style.opacity = '0';
            secret.style.transform = 'translateY(-50px)';
        }, 100);

        setTimeout(() => {
            secret.remove();
        }, 2000);
    }
}

// Data Stream Visualizer
class DataStreamVisualizer {
    constructor() {
        this.active = false;
        this.canvas = null;
        this.ctx = null;
        this.streams = [];
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            this.createCanvas();
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
        this.canvas.id = 'data-stream-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '0';
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.ctx = this.canvas.getContext('2d');

        // Create streams
        for (let i = 0; i < 15; i++) {
            this.streams.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                speed: 1 + Math.random() * 2,
                chars: this.generateStreamChars()
            });
        }
    }

    generateStreamChars() {
        const chars = '01';
        const length = 20;
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }

    animate() {
        if (!this.active || !this.ctx) return;

        this.ctx.fillStyle = 'rgba(24, 24, 27, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#00C896';
        this.ctx.font = '12px monospace';

        this.streams.forEach(stream => {
            this.ctx.fillText(stream.chars, stream.x, stream.y);
            stream.y += stream.speed;

            if (stream.y > this.canvas.height) {
                stream.y = -20;
                stream.x = Math.random() * this.canvas.width;
                stream.chars = this.generateStreamChars();
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Interactive Background (Enhanced Particle Dragging)
class InteractiveBackground {
    constructor(particleBackground) {
        this.particleBackground = particleBackground;
        this.isDragging = false;
        this.init();
    }

    init() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;

        canvas.style.pointerEvents = 'auto';
        canvas.style.cursor = 'grab';

        canvas.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            canvas.style.cursor = 'grabbing';

            // Unlock achievement
            if (window.achievementSystem) {
                window.achievementSystem.unlock('particle_player');
            }
        });

        canvas.addEventListener('mouseup', () => {
            this.isDragging = false;
            canvas.style.cursor = 'grab';
        });

        canvas.addEventListener('mousemove', (e) => {
            if (this.isDragging && this.particleBackground) {
                const dx = e.movementX;
                const dy = e.movementY;

                // Push particles away from mouse
                this.particleBackground.particles.forEach(particle => {
                    const distX = e.clientX - particle.x;
                    const distY = e.clientY - particle.y;
                    const distance = Math.sqrt(distX * distX + distY * distY);

                    if (distance < 100) {
                        const force = (100 - distance) / 100;
                        particle.vx -= (distX / distance) * force * 2;
                        particle.vy -= (distY / distance) * force * 2;
                    }
                });
            }
        });

        // Touch support
        canvas.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            if (window.achievementSystem) {
                window.achievementSystem.unlock('particle_player');
            }
        });

        canvas.addEventListener('touchend', () => {
            this.isDragging = false;
        });

        canvas.addEventListener('touchmove', (e) => {
            if (this.isDragging && e.touches[0] && this.particleBackground) {
                const touch = e.touches[0];

                this.particleBackground.particles.forEach(particle => {
                    const distX = touch.clientX - particle.x;
                    const distY = touch.clientY - particle.y;
                    const distance = Math.sqrt(distX * distX + distY * distY);

                    if (distance < 100) {
                        const force = (100 - distance) / 100;
                        particle.vx -= (distX / distance) * force * 2;
                        particle.vy -= (distY / distance) * force * 2;
                    }
                });
            }
        });
    }
}

// Typing Sound Effect (Optional - subtle)
class TypingEffect {
    constructor() {
        this.enabled = false;
        this.audioContext = null;

        // Listen for typing in inputs
        document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => {
            input.addEventListener('keydown', () => {
                if (this.enabled) this.playClickSound();
            });
        });
    }

    playClickSound() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.01, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.05);
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// Cursor Trail Effect
class CursorTrail {
    constructor() {
        this.active = false;
        this.dots = [];
        this.maxDots = 20;
    }

    toggle() {
        this.active = !this.active;

        if (this.active) {
            document.addEventListener('mousemove', this.handleMouseMove);
            this.animate();
        } else {
            document.removeEventListener('mousemove', this.handleMouseMove);
            this.dots.forEach(dot => dot.remove());
            this.dots = [];
        }
    }

    handleMouseMove = (e) => {
        if (!this.active) return;

        const dot = document.createElement('div');
        dot.className = 'cursor-trail-dot';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';

        document.body.appendChild(dot);
        this.dots.push(dot);

        if (this.dots.length > this.maxDots) {
            const oldDot = this.dots.shift();
            oldDot.remove();
        }
    }

    animate() {
        if (!this.active) return;

        this.dots.forEach((dot, index) => {
            const life = index / this.dots.length;
            dot.style.opacity = life;
            dot.style.transform = `scale(${life})`;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize all easter eggs
let achievementSystem;
let konamiCode;
let rippleEffect;
let secretMessages;
let dataStreamVisualizer;
let interactiveBackground;
let typingEffect;
let cursorTrail;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize achievement system
    achievementSystem = new AchievementSystem();
    window.achievementSystem = achievementSystem; // Make it globally accessible

    // Initialize Konami code
    konamiCode = new KonamiCode(() => {
        achievementSystem.unlock('konami_code');

        // Activate data stream visualizer
        if (!dataStreamVisualizer) {
            dataStreamVisualizer = new DataStreamVisualizer();
        }
        dataStreamVisualizer.toggle();

        // Show message
        const toast = document.getElementById('achievement-toast');
        if (toast) {
            const description = toast.querySelector('.achievement-description');
            description.textContent = '🎮 Konami Code Activated! Matrix mode ' + (dataStreamVisualizer.active ? 'ON' : 'OFF');
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        }
    });

    // Initialize ripple effect
    rippleEffect = new RippleEffect();

    // Initialize secret messages
    secretMessages = new SecretMessages();

    // Initialize typing effect (disabled by default)
    typingEffect = new TypingEffect();

    // Initialize cursor trail (disabled by default)
    cursorTrail = new CursorTrail();

    // Initialize interactive background after particle background is created
    setTimeout(() => {
        if (window.particleBackground) {
            interactiveBackground = new InteractiveBackground(window.particleBackground);
        }
    }, 1000);

    // Add terminal easter egg tracking
    const terminalInput = document.getElementById('terminal-input');
    if (terminalInput) {
        terminalInput.addEventListener('focus', () => {
            if (achievementSystem) {
                achievementSystem.unlock('terminal_user');
            }
        });
    }

    // Console Easter Egg
    console.log('%c🎨 Welcome to the Matrix!', 'color: #00C896; font-size: 20px; font-weight: bold;');
    console.log('%cFound the console? You\'re a true explorer!', 'color: #00C896; font-size: 14px;');
    console.log('%cTry the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #A1A1AA; font-size: 12px;');
    console.log('%cTriple-click anywhere for surprises!', 'color: #A1A1AA; font-size: 12px;');
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AchievementSystem,
        KonamiCode,
        RippleEffect,
        SecretMessages,
        DataStreamVisualizer,
        InteractiveBackground,
        TypingEffect,
        CursorTrail
    };
}
