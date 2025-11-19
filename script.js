/* ============================================
   PRECISION ANALYTICS GRID - JAVASCRIPT
   Interactive Features & Easter Eggs
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeSystemConsole();
    initializeLazyLoading();
    initializePreloading();
    initializeEasterEggs();
    initializeContactForm();
    initializeNavigation();
    initializeInteractiveFeatures();
});

// ============================================
// PROJECTS LOADING
// ============================================
function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !CONFIG.projects) return;

    CONFIG.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project', JSON.stringify(project));

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'project-image-container';

    if (project.imageUrl) {
        const img = document.createElement('img');
        img.className = 'project-image lazy-image';
        img.setAttribute('data-src', project.imageUrl);
        img.alt = project.title;
        imageContainer.appendChild(img);
    } else {
        const placeholder = document.createElement('div');
        placeholder.className = 'project-placeholder';
        placeholder.textContent = '📊';
        imageContainer.appendChild(placeholder);
    }

    // Title
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    // Description
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description.substring(0, 150) + '...';

    // Tech stack
    const techStack = document.createElement('div');
    techStack.className = 'project-tech-stack';
    project.techStack.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techStack.appendChild(tag);
    });

    // Links
    const links = document.createElement('div');
    links.className = 'project-links';

    if (project.blogPost) {
        const blogLink = document.createElement('a');
        blogLink.href = '#';
        blogLink.className = 'project-link';
        blogLink.textContent = 'Read More';
        blogLink.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            openProjectModal(project);
        };
        links.appendChild(blogLink);
    }

    if (project.demoUrl) {
        const demoLink = document.createElement('a');
        demoLink.href = project.demoUrl;
        demoLink.className = 'project-link';
        demoLink.textContent = 'Live Demo';
        demoLink.target = '_blank';
        demoLink.rel = 'noopener noreferrer';
        demoLink.onclick = (e) => e.stopPropagation();
        links.appendChild(demoLink);
    }

    if (project.githubUrl) {
        const githubLink = document.createElement('a');
        githubLink.href = project.githubUrl;
        githubLink.className = 'project-link';
        githubLink.textContent = 'GitHub';
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.onclick = (e) => e.stopPropagation();
        links.appendChild(githubLink);
    }

    // Append all elements
    card.appendChild(imageContainer);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(techStack);
    card.appendChild(links);

    // Click handler for project snapshot view
    card.addEventListener('click', () => openProjectModal(project));

    return card;
}

// ============================================
// PROJECT MODAL
// ============================================
async function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');

    if (!project.blogPost) return;

    // Show loading state
    modalBody.innerHTML = '<p class="modal-loading">Loading...</p>';
    modal.classList.remove('hidden');

    try {
        // Fetch the blog post markdown
        const response = await fetch(project.blogPost);
        const markdown = await response.text();

        // Parse front matter and content
        const { frontMatter, content } = parseMarkdown(markdown);

        // Create modal content
        modalBody.innerHTML = `
            <h2 class="modal-title">${project.title}</h2>
            ${project.imageUrl ? `<img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; margin-bottom: 1rem; border: 2px solid var(--color-gray-300);">` : ''}
            <div class="project-tech-stack" style="margin-bottom: 1rem;">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="blog-content" style="line-height: 1.8; color: var(--color-gray-700);">
                ${convertMarkdownToHTML(content)}
            </div>
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="cta-button" style="margin-top: 1rem; display: inline-block;">View Live Demo</a>` : ''}
        `;
    } catch (error) {
        modalBody.innerHTML = `<p>Error loading project details. Please try again later.</p>`;
        console.error('Error loading blog post:', error);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
}

// Simple markdown parser
function parseMarkdown(markdown) {
    const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontMatterRegex);

    if (match) {
        const frontMatterText = match[1];
        const content = match[2];
        const frontMatter = {};

        frontMatterText.split('\n').forEach(line => {
            const [key, ...values] = line.split(':');
            if (key && values.length) {
                frontMatter[key.trim()] = values.join(':').trim().replace(/^['"]|['"]$/g, '');
            }
        });

        return { frontMatter, content };
    }

    return { frontMatter: {}, content: markdown };
}

function convertMarkdownToHTML(markdown) {
    return markdown
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Paragraphs
        .split('\n\n')
        .map(para => para.trim() ? `<p>${para.replace(/\n/g, '<br>')}</p>` : '')
        .join('\n');
}

// ============================================
// SYSTEM STATUS CONSOLE
// ============================================
function initializeSystemConsole() {
    if (!CONFIG.features.systemConsole) return;

    const computeLoadEl = document.getElementById('compute-load');
    const latencyEl = document.getElementById('latency');
    const aiTrainingEl = document.getElementById('ai-training');

    function updateSystemStatus() {
        // Randomly update compute load
        const loads = CONFIG.systemStatus.computeLoad;
        computeLoadEl.textContent = loads[Math.floor(Math.random() * loads.length)];

        // Update latency
        const latency = Math.floor(
            Math.random() * (CONFIG.systemStatus.latencyRange.max - CONFIG.systemStatus.latencyRange.min) +
            CONFIG.systemStatus.latencyRange.min
        );
        latencyEl.textContent = `${latency}ms`;

        // Update AI training percentage
        const aiTraining = Math.floor(
            Math.random() * (CONFIG.systemStatus.aiTrainingRange.max - CONFIG.systemStatus.aiTrainingRange.min) +
            CONFIG.systemStatus.aiTrainingRange.min
        );
        aiTrainingEl.textContent = `${aiTraining}%`;
    }

    // Update initially
    updateSystemStatus();

    // Update periodically
    setInterval(updateSystemStatus, CONFIG.systemStatus.updateInterval);
}

// ============================================
// LAZY LOADING
// ============================================
function initializeLazyLoading() {
    if (!CONFIG.lazyLoading.enabled) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                if (src) {
                    img.src = src;
                    img.classList.add('lazy-loaded');
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: CONFIG.lazyLoading.rootMargin,
        threshold: CONFIG.lazyLoading.threshold
    });

    // Observe all lazy images
    document.querySelectorAll('.lazy-image, [data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Re-observe when new images are added (for dynamically loaded projects)
    const mutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    const lazyImages = node.querySelectorAll('.lazy-image, [data-src]');
                    lazyImages.forEach(img => imageObserver.observe(img));
                }
            });
        });
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// ============================================
// PRELOADING ASSETS
// ============================================
function initializePreloading() {
    if (!CONFIG.preloadAssets || CONFIG.preloadAssets.length === 0) return;

    // Use requestIdleCallback to preload during idle time
    const preloadAsset = (src) => {
        const link = document.createElement('link');
        link.rel = 'preload';

        if (src.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
            link.as = 'image';
        } else if (src.match(/\.(mp4|webm|ogg)$/i)) {
            link.as = 'video';
        } else {
            link.as = 'fetch';
        }

        link.href = src;
        document.head.appendChild(link);
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            CONFIG.preloadAssets.forEach(preloadAsset);
        });
    } else {
        setTimeout(() => {
            CONFIG.preloadAssets.forEach(preloadAsset);
        }, 1000);
    }
}

// ============================================
// EASTER EGGS
// ============================================
function initializeEasterEggs() {
    // Training Log
    if (CONFIG.features.fitnessLog) {
        const trainingLink = document.getElementById('training-log-link');
        if (trainingLink) {
            trainingLink.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('fitness-modal').classList.remove('hidden');
            });
        }
    }

    // LeBron Counter
    if (CONFIG.features.lebronCounter) {
        const lebronCounter = document.getElementById('lebron-counter');
        if (lebronCounter) {
            lebronCounter.addEventListener('click', () => {
                const modal = document.getElementById('lebron-modal');
                const timestamp = document.getElementById('lebron-timestamp');
                const count = document.getElementById('lebron-count');

                const now = new Date();
                timestamp.textContent = now.toLocaleString();

                // Increment count
                const currentCount = parseInt(count.textContent) || 0;
                count.textContent = currentCount + 1;

                modal.classList.remove('hidden');
            });
        }
    }

    // Spanish A2 Switch
    if (CONFIG.features.spanishSwitch) {
        let pressTimer;
        const spanishTriggers = document.querySelectorAll('.spanish-trigger');

        spanishTriggers.forEach(trigger => {
            trigger.addEventListener('mousedown', () => {
                pressTimer = setTimeout(() => {
                    toggleSpanish();
                }, 3000);
            });

            trigger.addEventListener('mouseup', () => {
                clearTimeout(pressTimer);
            });

            trigger.addEventListener('mouseleave', () => {
                clearTimeout(pressTimer);
            });

            // Touch support for mobile
            trigger.addEventListener('touchstart', (e) => {
                e.preventDefault();
                pressTimer = setTimeout(() => {
                    toggleSpanish();
                }, 3000);
            });

            trigger.addEventListener('touchend', () => {
                clearTimeout(pressTimer);
            });
        });
    }

    // Hidden Terminal (CTRL + ALT + D)
    if (CONFIG.features.terminalEasterEgg) {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.altKey && e.key === 'd') {
                e.preventDefault();
                openTerminal();
            }
        });

        // Terminal input handler
        const terminalInput = document.getElementById('terminal-input');
        if (terminalInput) {
            terminalInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const command = terminalInput.value.trim();
                    executeTerminalCommand(command);
                    terminalInput.value = '';
                }
            });
        }
    }
}

// Toggle Spanish
function toggleSpanish() {
    const enNarrative = document.getElementById('about-narrative-en');
    const esNarrative = document.getElementById('about-narrative-es');

    if (enNarrative && esNarrative) {
        enNarrative.classList.toggle('hidden');
        esNarrative.classList.toggle('hidden');
    }
}

// Terminal functions
function openTerminal() {
    const terminal = document.getElementById('terminal-overlay');
    terminal.classList.remove('hidden');
    document.getElementById('terminal-input').focus();
}

function closeTerminal() {
    const terminal = document.getElementById('terminal-overlay');
    terminal.classList.add('hidden');
}

function executeTerminalCommand(command) {
    const output = document.getElementById('terminal-output');
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span style="color: var(--color-accent);">&gt;</span> ${command}`;
    output.appendChild(commandLine);

    let response = '';

    switch (command.toLowerCase()) {
        case 'help':
            response = `
                Available commands:<br>
                - whoami: Display user information<br>
                - list_projects: List all projects<br>
                - skills: Display technical skills<br>
                - contact: Show contact information<br>
                - clear: Clear terminal<br>
                - exit: Close terminal
            `;
            break;

        case 'whoami':
            response = `
                Sean - Business Analytics & Information Management Student<br>
                Location: Indianapolis, IN<br>
                University: Purdue University<br>
                Focus: AI, Data Analytics, Software Development
            `;
            break;

        case 'list_projects':
            response = CONFIG.projects.map((p, i) => `${i + 1}. ${p.title}`).join('<br>');
            break;

        case 'skills':
            response = `
                Technical: Python, SQL, JavaScript, HTML, CSS<br>
                AI/APIs: Gemini API, ChatGPT API, Google Maps API<br>
                Data: Tableau, Excel, Data Visualization<br>
                Other: Agile, UI/UX, Market Research
            `;
            break;

        case 'contact':
            response = `
                Email: ${CONFIG.contact.email}<br>
                LinkedIn: ${CONFIG.contact.linkedin}<br>
                Projects: ${CONFIG.contact.apexLink}
            `;
            break;

        case 'clear':
            output.innerHTML = '<div class="terminal-line">Type \'help\' for available commands.</div>';
            return;

        case 'exit':
            closeTerminal();
            return;

        default:
            response = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    const responseLine = document.createElement('div');
    responseLine.className = 'terminal-line';
    responseLine.innerHTML = response;
    output.appendChild(responseLine);

    // Auto-scroll to bottom
    output.scrollTop = output.scrollHeight;
}

// Modal close functions
function closeFitnessModal() {
    document.getElementById('fitness-modal').classList.add('hidden');
}

function closeLebronModal() {
    document.getElementById('lebron-modal').classList.add('hidden');
}

// ============================================
// INTERACTIVE FEATURES
// ============================================
function initializeInteractiveFeatures() {
    // Vibe-coding Toggle
    if (CONFIG.features.vibeCodingToggle) {
        const fontToggle = document.getElementById('font-toggle-switch');
        if (fontToggle) {
            fontToggle.addEventListener('change', (e) => {
                if (e.target.checked) {
                    document.body.classList.add('alt-mono-font');
                } else {
                    document.body.classList.remove('alt-mono-font');
                }
            });
        }
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile nav scroll behavior
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            nav.style.transform = 'translateY(0)';
            return;
        }

        // Hide nav on scroll down, show on scroll up (mobile only)
        if (window.innerWidth <= 768) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// CONTACT FORM (FORMSPREE INTEGRATION)
// ============================================
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Update email link
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.href = `mailto:${CONFIG.contact.email}`;
        emailLink.querySelector('.contact-value').textContent = CONFIG.contact.email;
    }

    // Update ApeX link
    const apexLink = document.getElementById('apex-link');
    if (apexLink) {
        apexLink.href = CONFIG.contact.apexLink;
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = new FormData(form);

        try {
            if (CONFIG.formspree.endpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
                throw new Error('Formspree endpoint not configured');
            }

            const response = await fetch(CONFIG.formspree.endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Message sent successfully! I\'ll get back to you soon.');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error sending your message. Please try emailing directly at ' + CONFIG.contact.email);
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// ============================================
// NAVIGATION
// ============================================
function initializeNavigation() {
    // Highlight active section in nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightActiveSection() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.color = 'var(--color-accent)';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial check
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// Prevent body scroll when modals are open
const modalObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            const modals = document.querySelectorAll('.modal:not(.hidden)');
            if (modals.length > 0) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modalObserver.observe(modal, { attributes: true });
});

// Performance monitoring (optional - for development)
if (window.performance && console.table) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('Performance Metrics:');
            console.table({
                'Page Load Time': `${pageLoadTime}ms`,
                'Connect Time': `${connectTime}ms`,
                'Render Time': `${renderTime}ms`
            });
        }, 0);
    });
}
