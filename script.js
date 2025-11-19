/**
 * GLOBAL LEARNING CANVAS - INTERACTIVE FEATURES
 * ==============================================
 * All interactive functionality, animations, and Easter eggs
 */

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
    initializeWebsite();
    initializeNavigation();
    initializeLanguageWidget();
    initializeMapFeatures();
    initializeMetrics();
    initializeProjects();
    initializeSkills();
    initializeEasterEggs();
    initializeFitnessTimer();
    initializeContactForm();
    initializeLazyLoading();
    initializeBackgroundPreloading();
    initializeScrollAnimations();

    // NEW FEATURES FOR RESTRUCTURED LAYOUT
    initializeProfileImage();
    initializeExpandableExperiences();
    initializeStatAnimations();
    initializeDrawingCanvas();
    initializeAIChat();
    initializeLanguageQuiz();
    initializeKonamiCode();

    // Hide loading screen after everything is loaded
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1000);
});

// ========== WEBSITE INITIALIZATION ==========
function initializeWebsite() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== NAVIGATION ==========
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========== LANGUAGE LEARNING WIDGET ==========
function initializeLanguageWidget() {
    if (!window.SITE_CONFIG || !window.SITE_CONFIG.languagePhrases) return;

    const languageText = document.getElementById('language-text');
    const languageTranslation = document.getElementById('language-translation');
    const phrases = window.SITE_CONFIG.languagePhrases;
    let currentIndex = 0;

    function updatePhrase() {
        const phrase = phrases[currentIndex];
        if (languageText && languageTranslation) {
            languageText.style.opacity = '0';
            languageTranslation.style.opacity = '0';

            setTimeout(() => {
                languageText.textContent = phrase.spanish;
                languageTranslation.textContent = phrase.english;
                languageText.style.opacity = '1';
            }, 300);
        }

        currentIndex = (currentIndex + 1) % phrases.length;
    }

    // Update every 10 seconds
    setInterval(updatePhrase, 10000);
}

// ========== MAP FEATURES ==========
function initializeMapFeatures() {
    const mapPin = document.getElementById('map-pin');
    const mapTooltip = document.getElementById('map-tooltip');

    if (mapPin && mapTooltip) {
        mapPin.addEventListener('mouseenter', function (e) {
            mapTooltip.style.left = (e.pageX + 10) + 'px';
            mapTooltip.style.top = (e.pageY - 30) + 'px';
            mapTooltip.classList.add('show');
        });

        mapPin.addEventListener('mouseleave', function () {
            mapTooltip.classList.remove('show');
        });

        mapPin.addEventListener('mousemove', function (e) {
            mapTooltip.style.left = (e.pageX + 10) + 'px';
            mapTooltip.style.top = (e.pageY - 30) + 'px';
        });
    }

    // Animate map pin when scrolling to Madrid experience
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.madrid === 'true') {
                animateMapToMadrid();
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-madrid="true"]').forEach(element => {
        observer.observe(element);
    });
}

function animateMapToMadrid() {
    const worldMap = document.getElementById('world-map');
    const mapPin = document.getElementById('map-pin');
    const mapTooltip = document.getElementById('map-tooltip');

    if (worldMap) {
        worldMap.style.transform = 'translateX(-10%)';
    }

    if (mapPin && mapTooltip) {
        mapTooltip.textContent = 'Study Abroad: Madrid, Spain';
        mapTooltip.classList.add('show');
        setTimeout(() => {
            mapTooltip.classList.remove('show');
        }, 2000);
    }
}

// ========== METRICS (KPI DATA RIPPLE) ==========
function initializeMetrics() {
    const metricNumbers = document.querySelectorAll('.metric-number');

    metricNumbers.forEach(metric => {
        metric.addEventListener('click', function () {
            this.classList.add('ripple');
            setTimeout(() => {
                this.classList.remove('ripple');
            }, 600);
        });
    });
}

// ========== PROJECTS ==========
function initializeProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectIndex = this.dataset.projectIndex;
            const project = window.SITE_CONFIG.projects[projectIndex];

            if (project && modalBody) {
                const techTags = project.techStack.map(tech =>
                    `<span class="tech-tag">${tech}</span>`
                ).join('');

                const demoButton = project.demoUrl
                    ? `<a href="${project.demoUrl}" target="_blank" class="cta-button" style="margin-top: 2rem;">Go to Demo</a>`
                    : '';

                const blogButton = project.blogUrl
                    ? `<a href="${project.blogUrl}" target="_blank" class="cta-button" style="margin-top: 2rem; margin-left: 1rem;">Read Blog Post</a>`
                    : '';

                modalBody.innerHTML = `
                    <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem;">${project.title}</h2>
                    <div style="color: var(--color-accent); font-family: var(--font-mono); margin-bottom: 2rem;">${project.type}</div>
                    <div style="line-height: 1.8; white-space: pre-line; margin-bottom: 2rem;">${project.fullDescription || project.description}</div>
                    <div style="border-top: 1px solid var(--color-black); padding-top: 1rem;">
                        <div style="font-family: var(--font-mono); font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem;">TECH STACK:</div>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">${techTags}</div>
                    </div>
                    ${demoButton}${blogButton}
                `;

                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// ========== SKILLS (PROGRESS BARS) ==========
function initializeSkills() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ========== FITNESS TIMER ==========
function initializeFitnessTimer() {
    const fitnessIcon = document.getElementById('fitness-icon');
    const fitnessModal = document.getElementById('fitness-modal');
    const modalClose = fitnessModal ? fitnessModal.querySelector('.modal-close') : null;
    const timerDisplay = document.getElementById('timer-display');
    const timerStart = document.getElementById('timer-start');
    const timerReset = document.getElementById('timer-reset');

    let timeLeft = 30;
    let timerInterval = null;
    let isRunning = false;

    if (fitnessIcon) {
        fitnessIcon.addEventListener('click', () => {
            fitnessModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            fitnessModal.classList.remove('show');
            document.body.style.overflow = 'auto';
            stopTimer();
        });
    }

    if (timerStart) {
        timerStart.addEventListener('click', () => {
            if (!isRunning) {
                startTimer();
                timerStart.textContent = 'Pause';
            } else {
                pauseTimer();
                timerStart.textContent = 'Start';
            }
        });
    }

    if (timerReset) {
        timerReset.addEventListener('click', () => {
            resetTimer();
        });
    }

    function startTimer() {
        isRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                stopTimer();
                alert('Rest time complete! Time to lift! 💪');
                resetTimer();
            }
        }, 1000);
    }

    function pauseTimer() {
        isRunning = false;
        clearInterval(timerInterval);
    }

    function stopTimer() {
        isRunning = false;
        clearInterval(timerInterval);
        if (timerStart) {
            timerStart.textContent = 'Start';
        }
    }

    function resetTimer() {
        stopTimer();
        timeLeft = 30;
        updateDisplay();
    }

    function updateDisplay() {
        if (timerDisplay) {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }
}

// ========== CONTACT FORM (FORMSPREE) ==========
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            const formspreeKey = window.SITE_CONFIG?.formspreeApiKey;

            if (!formspreeKey || formspreeKey === 'YOUR_FORMSPREE_API_KEY_HERE') {
                showFormStatus('Please configure your Formspree API key in content.js', 'error');
                return;
            }

            try {
                const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
                    form.reset();
                } else {
                    showFormStatus('Oops! There was a problem sending your message.', 'error');
                }
            } catch (error) {
                showFormStatus('Network error. Please try again later.', 'error');
            }
        });
    }

    function showFormStatus(message, type) {
        if (formStatus) {
            formStatus.textContent = message;
            formStatus.className = `form-status show ${type}`;

            setTimeout(() => {
                formStatus.classList.remove('show');
            }, 5000);
        }
    }
}

// ========== LAZY LOADING ==========
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-load');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;

                if (src) {
                    // Check if the element already has an img child
                    let imgElement = img.querySelector('img');
                    if (!imgElement) {
                        imgElement = document.createElement('img');
                        img.appendChild(imgElement);
                    }

                    imgElement.src = src;
                    imgElement.onload = () => {
                        img.classList.add('loaded');
                    };

                    // If image fails to load, still show the icon
                    imgElement.onerror = () => {
                        img.classList.add('loaded');
                    };
                }

                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== BACKGROUND PRELOADING ==========
function initializeBackgroundPreloading() {
    // Preload images for sections not yet visible
    const imagesToPreload = [
        'assets/images/apex.jpg',
        'assets/images/truck.jpg',
        'assets/images/lidar.jpg',
        'assets/images/messenger.jpg',
        'assets/images/fantasy.jpg'
    ];

    // Start preloading after initial page load
    setTimeout(() => {
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, 2000);
}

// ========== SCROLL ANIMATIONS ==========
function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .award-item');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => scrollObserver.observe(element));
}

// ========== EASTER EGGS ==========
function initializeEasterEggs() {
    initializeHiddenTerminal();
    initializeLeBronMetric();
    initializePurdueHover();
    initializeAIQuote();
}

// 1. Hidden Terminal (Ctrl+Shift+T)
function initializeHiddenTerminal() {
    const terminal = document.getElementById('terminal');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const terminalClose = terminal ? terminal.querySelector('.terminal-close') : null;

    // Open terminal with Ctrl+Shift+T
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            if (terminal) {
                terminal.classList.add('show');
                if (terminalInput) {
                    terminalInput.focus();
                }
            }
        }
    });

    // Close terminal
    if (terminalClose) {
        terminalClose.addEventListener('click', () => {
            terminal.classList.remove('show');
        });
    }

    // Terminal commands
    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim().toLowerCase();
                executeTerminalCommand(command);
                terminalInput.value = '';
            }
        });
    }

    function executeTerminalCommand(command) {
        if (!terminalOutput || !window.SITE_CONFIG?.easterEggs?.terminalCommands) return;

        const commands = window.SITE_CONFIG.easterEggs.terminalCommands;
        let output = '';

        if (command === 'clear') {
            terminalOutput.innerHTML = '<div>> System initialized. Type \'help\' for available commands.</div>';
            return;
        }

        if (commands[command]) {
            output = commands[command];
        } else if (command) {
            output = `Command not found: ${command}\nType 'help' for available commands.`;
        }

        if (output) {
            const outputDiv = document.createElement('div');
            outputDiv.innerHTML = `<div style="margin-top: 1rem;">> ${command}</div><div style="white-space: pre-line; margin-top: 0.5rem;">${output}</div>`;
            terminalOutput.appendChild(outputDiv);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    }
}

// 2. LeBron Metric Basketball Animation
function initializeLeBronMetric() {
    const lebronMetric = document.querySelector('.lebron-metric');

    if (lebronMetric) {
        lebronMetric.addEventListener('click', function () {
            createBasketball();
        });
    }

    function createBasketball() {
        const container = document.getElementById('basketball-container');
        if (!container) return;

        const basketball = document.createElement('div');
        basketball.className = 'basketball';
        basketball.textContent = '🏀';

        container.appendChild(basketball);

        // Remove after animation
        setTimeout(() => {
            basketball.remove();
        }, 2000);
    }
}

// 3. Purdue Motto (Hover for 3 seconds)
function initializePurdueHover() {
    const purdueElements = document.querySelectorAll('.purdue-hover');
    let hoverTimeout;

    purdueElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            const motto = window.SITE_CONFIG?.easterEggs?.purdueMottoText || 'Boiler Up.';

            hoverTimeout = setTimeout(() => {
                showTooltip(this, motto);
            }, 3000);
        });

        element.addEventListener('mouseleave', function () {
            clearTimeout(hoverTimeout);
        });
    });

    function showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip show';
        tooltip.textContent = text;
        tooltip.style.position = 'absolute';
        tooltip.style.zIndex = '100';

        const rect = element.getBoundingClientRect();
        tooltip.style.left = (rect.left + window.scrollX) + 'px';
        tooltip.style.top = (rect.bottom + window.scrollY + 10) + 'px';

        document.body.appendChild(tooltip);

        setTimeout(() => {
            tooltip.remove();
        }, 3000);
    }
}

// 4. AI Education Quote (Click certification)
function initializeAIQuote() {
    const certifications = document.querySelectorAll('[data-easter-egg="true"]');

    certifications.forEach(cert => {
        cert.addEventListener('click', function () {
            const quote = window.SITE_CONFIG?.easterEggs?.aiQuote || 'Continuous learning is the key to success.';
            showQuoteModal(quote);
        });
    });

    function showQuoteModal(quote) {
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');

        if (modal && modalBody) {
            modalBody.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 1.5rem; font-family: var(--font-mono); color: var(--color-accent); margin-bottom: 2rem;">
                        // Motivational Quote
                    </div>
                    <div style="font-size: 1.2rem; line-height: 1.8; font-style: italic;">
                        ${quote}
                    </div>
                </div>
            `;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }
}

// ========== NEW FEATURES FOR RESTRUCTURED LAYOUT ==========

// Profile Image Loading
function initializeProfileImage() {
    const profileImage = document.getElementById('profile-image');
    const profilePlaceholder = document.getElementById('profile-placeholder');

    if (profileImage && profilePlaceholder) {
        // Try to load profile image
        profileImage.onload = function() {
            profilePlaceholder.style.display = 'none';
            profileImage.style.display = 'block';
        };

        profileImage.onerror = function() {
            // Keep placeholder if image fails to load
            profilePlaceholder.style.display = 'flex';
            profileImage.style.display = 'none';
        };

        // Check if image should load
        if (profileImage.src) {
            const img = new Image();
            img.onload = function() {
                profilePlaceholder.style.display = 'none';
                profileImage.style.display = 'block';
            };
            img.src = profileImage.src;
        }
    }
}

// Expandable Experience Cards
function initializeExpandableExperiences() {
    const experienceHeaders = document.querySelectorAll('.experience-header');

    experienceHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.experience-item');
            item.classList.toggle('expanded');
        });
    });
}

// Stat Animations
function initializeStatAnimations() {
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach(item => {
        item.addEventListener('click', function() {
            const statNumber = this.querySelector('.stat-number');
            if (statNumber) {
                statNumber.classList.add('ripple');
                setTimeout(() => {
                    statNumber.classList.remove('ripple');
                }, 600);
            }
        });
    });
}

// Drawing Canvas (Press D to toggle)
function initializeDrawingCanvas() {
    const canvas = document.getElementById('drawing-canvas');
    const indicator = document.getElementById('draw-mode-indicator');
    const clearBtn = document.getElementById('clear-canvas-btn');
    const exitBtn = document.getElementById('exit-draw-mode');

    if (!canvas || !indicator) return;

    let isDrawing = false;
    let drawingEnabled = false;
    let ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Toggle drawing mode with D key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'd' || e.key === 'D') {
            // Don't toggle if typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            e.preventDefault();
            drawingEnabled = !drawingEnabled;

            if (drawingEnabled) {
                canvas.classList.add('active');
                indicator.classList.add('show');
            } else {
                canvas.classList.remove('active');
                indicator.classList.remove('show');
            }
        }
    });

    // Drawing functionality
    canvas.addEventListener('mousedown', (e) => {
        if (!drawingEnabled) return;
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!drawingEnabled || !isDrawing) return;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    // Clear canvas
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }

    // Exit drawing mode
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            drawingEnabled = false;
            canvas.classList.remove('active');
            indicator.classList.remove('show');
        });
    }
}

// AI Chat Widget
function initializeAIChat() {
    const chatWidget = document.getElementById('ai-chat-widget');
    const chatTrigger = document.getElementById('ai-chat-trigger');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    if (!chatWidget || !chatTrigger) return;

    // Toggle chat
    chatTrigger.addEventListener('click', () => {
        chatWidget.classList.toggle('show');
        if (chatWidget.classList.contains('show')) {
            chatInput.focus();
        }
    });

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWidget.classList.remove('show');
        });
    }

    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Simulate AI response
        setTimeout(() => {
            const response = getAIResponse(message);
            addMessage(response, 'ai');
        }, 500);
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getAIResponse(input) {
        const lowerInput = input.toLowerCase();

        // Simple pattern matching responses
        if (lowerInput.includes('project')) {
            return 'I have several exciting projects! Check out ApeX Student Hub, the Class 8 Truck Simulator, and more. Click on the Projects page to explore them!';
        } else if (lowerInput.includes('experience')) {
            return 'I have experience in consulting, tax compliance, and data analytics. I\'ve worked with Crowe LLP, DuCharme McMillen, and more. Scroll down to see my full experience!';
        } else if (lowerInput.includes('skill')) {
            return 'My skills include Python, SQL, JavaScript, data visualization with Tableau, and AI tooling. I also know Spanish at an A2 level!';
        } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
            return 'You can reach me through the contact form at the bottom of the page, or connect with me on LinkedIn!';
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            return 'Hello! I\'m your AI assistant. Feel free to ask about projects, experience, skills, or anything else!';
        } else if (lowerInput.includes('apex')) {
            return 'ApeX is a student project hub I built to showcase university student work. It uses Supabase and the Gemini API. Check it out in the Projects section!';
        } else if (lowerInput.includes('truck') || lowerInput.includes('simulator')) {
            return 'The Class 8 Truck Simulator compares diesel vs. electric trucks using real-world logistics constraints. It integrates Google Maps API and Hours of Service rules!';
        } else {
            return 'That\'s an interesting question! Feel free to explore the site to learn more, or ask me about "projects", "experience", or "skills"!';
        }
    }
}

// Language Quiz Feature
function initializeLanguageQuiz() {
    const quizBtn = document.getElementById('lang-quiz-btn');
    const quizModal = document.getElementById('language-quiz-modal');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizResult = document.getElementById('quiz-result');
    const modalClose = quizModal ? quizModal.querySelector('.modal-close') : null;

    if (!quizBtn || !quizModal || !window.SITE_CONFIG?.quizQuestions) return;

    let currentQuestionIndex = 0;
    let score = 0;
    let quizStarted = false;

    // Open quiz
    quizBtn.addEventListener('click', () => {
        quizModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        if (!quizStarted) {
            startQuiz();
            quizStarted = true;
        } else {
            loadQuestion();
        }
    });

    // Close quiz
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            quizModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }

    function loadQuestion() {
        const questions = window.SITE_CONFIG.quizQuestions;
        const question = questions[currentQuestionIndex];

        quizQuestion.textContent = question.question;
        quizOptions.innerHTML = '';
        quizResult.textContent = '';
        quizResult.classList.remove('show');

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => checkAnswer(index, question.correct));
            quizOptions.appendChild(optionDiv);
        });
    }

    function checkAnswer(selected, correct) {
        const options = quizOptions.querySelectorAll('.quiz-option');

        if (selected === correct) {
            options[selected].classList.add('correct');
            score++;
            quizResult.textContent = '✓ Correct!';
        } else {
            options[selected].classList.add('incorrect');
            options[correct].classList.add('correct');
            quizResult.textContent = '✗ Incorrect';
        }

        quizResult.classList.add('show');

        // Disable all options
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
        });

        // Move to next question after delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < window.SITE_CONFIG.quizQuestions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 2000);
    }

    function showResults() {
        const totalQuestions = window.SITE_CONFIG.quizQuestions.length;
        quizQuestion.textContent = 'Quiz Complete!';
        quizOptions.innerHTML = `
            <div style="text-align: center; padding: 2rem; border: 2px solid var(--color-black);">
                <div style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">
                    ${score} / ${totalQuestions}
                </div>
                <div style="font-size: 1.1rem;">
                    ${score === totalQuestions ? '¡Perfecto! 🎉' : score >= totalQuestions / 2 ? '¡Bien hecho! 👍' : '¡Sigue practicando! 📚'}
                </div>
            </div>
        `;
        quizResult.textContent = 'Click outside to close';
        quizResult.classList.add('show');
        quizStarted = false;
    }
}

// Konami Code (↑↑↓↓←→AI)
function initializeKonamiCode() {
    const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'a', 'i'];
    let currentIndex = 0;

    document.addEventListener('keydown', (e) => {
        // Don't track if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            currentIndex = 0;
            return;
        }

        const key = e.key.toLowerCase();

        if (key === sequence[currentIndex].toLowerCase()) {
            currentIndex++;
            if (currentIndex === sequence.length) {
                activateAIMode();
                currentIndex = 0;
            }
        } else {
            currentIndex = 0;
        }
    });

    function activateAIMode() {
        const overlay = document.getElementById('ai-mode-overlay');
        if (overlay) {
            overlay.classList.add('show');
            setTimeout(() => {
                overlay.classList.remove('show');
                // Open AI chat after overlay
                const chatWidget = document.getElementById('ai-chat-widget');
                const chatInput = document.getElementById('chat-input');
                if (chatWidget) {
                    chatWidget.classList.add('show');
                    if (chatInput) {
                        chatInput.focus();
                    }
                }
            }, 2000);
        }
    }
}

// ========== UTILITY FUNCTIONS ==========
// Debounce function for performance
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

// Log initialization for debugging
console.log('%c🌍 Global Learning Canvas Initialized', 'color: #304FFE; font-size: 16px; font-weight: bold;');
console.log('%cPress Ctrl+Shift+T to open Insights Terminal', 'color: #00FF00; font-family: monospace;');
console.log('%cPress D to toggle Drawing Mode', 'color: #304FFE; font-family: monospace;');
console.log('%cKonami Code: ↑↑↓↓←→AI for AI Mode', 'color: #304FFE; font-family: monospace;');
