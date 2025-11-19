// ========================================
// MAIN SCRIPT - INTERACTIVE FEATURES
// ========================================

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Load content from config
  loadContent();

  // Initialize features
  initNavigation();
  initMapControls();
  initLazyLoading();
  initPreloading();
  initModals();
  initContactForm();
  initEasterEggs();
  initScrollAnimations();
  initLanguageToggle();

  // Hide loading overlay
  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.add('hidden');
  }, 500);

  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// ========================================
// CONTENT LOADING FROM CONFIG
// ========================================
function loadContent() {
  const config = window.CONFIG;

  // Hero Section
  document.getElementById('heroHeadline').textContent = config.hero.headline;
  document.getElementById('heroDescription').textContent = config.hero.description;
  document.getElementById('heroCTA').querySelector('span').textContent = config.hero.ctaText;
  document.getElementById('heroCTA').href = config.hero.ctaLink;

  // About Section
  document.getElementById('aboutHeadline').textContent = config.about.headline;
  document.getElementById('aboutNarrative').textContent = config.about.narrative;

  // Load Metrics
  const metricsGrid = document.getElementById('metricsGrid');
  metricsGrid.innerHTML = config.about.metrics.map(metric => `
    <div class="metric-card fade-in">
      <span class="metric-value">${metric.value}</span>
      <span class="metric-label">${metric.label}</span>
    </div>
  `).join('');

  // Load Interests
  const interestsList = document.getElementById('interestsList');
  interestsList.innerHTML = config.about.interests.map(interest => `
    <li class="fade-in">${interest}</li>
  `).join('');

  // Experience Section
  const experienceTimeline = document.getElementById('experienceTimeline');
  experienceTimeline.innerHTML = config.experience.map(exp => `
    <div class="experience-card fade-in" data-map-highlight="${exp.mapHighlight || ''}" ${exp.countries ? `data-countries='${JSON.stringify(exp.countries)}'` : ''}>
      <div class="experience-header">
        <div>
          <h3 class="experience-role">${exp.role}</h3>
          <div class="experience-company">
            ${exp.website && exp.website !== '#' ? `<a href="${exp.website}" target="_blank" rel="noopener">${exp.company}</a>` : exp.company}
          </div>
        </div>
        <span class="experience-period">${exp.period}</span>
      </div>
      <ul class="experience-achievements">
        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Projects Section
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = config.projects.map((project, index) => `
    <div class="project-card fade-in" data-project-index="${index}" data-map-route="${project.mapRoute || ''}">
      <div class="project-image-container">
        ${project.image ?
          `<img src="${project.image}" alt="${project.name}" class="project-image lazy-load" data-src="${project.image}">` :
          `<div class="project-placeholder">◆</div>`
        }
        <span class="project-type-badge">${project.type}</span>
      </div>
      <div class="project-content">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech-stack">
          ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.blogPost ? `<a href="#" class="project-link read-blog" data-blog="${project.blogPost}">Read More</a>` : ''}
          ${project.link && project.link !== '#' ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener">View Project →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Skills Section
  const skillsCategories = document.getElementById('skillsCategories');
  skillsCategories.innerHTML = Object.entries(config.skills).map(([category, skills]) => `
    <div class="skill-category fade-in">
      <h3 class="skill-category-title">${category}</h3>
      <ul class="skill-list">
        ${skills.map(skill => `<li data-skill="${skill}">${skill}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Certifications
  const certificationsList = document.getElementById('certificationsList');
  certificationsList.innerHTML = config.certifications.map(cert => `
    <li class="fade-in">${cert}</li>
  `).join('');

  // Awards Section
  const awardsGrid = document.getElementById('awardsGrid');
  const medalEmojis = { '1st Place': '🥇', '2nd Place': '🥈', '3rd Place': '🥉', 'Participant': '🎖️' };
  awardsGrid.innerHTML = config.awards.map(award => `
    <div class="award-card fade-in">
      <div class="award-medal">${medalEmojis[award.place] || '🏆'}</div>
      <div class="award-place">${award.place}</div>
      <div class="award-name">${award.name}</div>
      <div class="award-description">${award.description}</div>
    </div>
  `).join('');

  // Contact Section
  document.getElementById('contactHeadline').textContent = config.contact.headline;
  document.getElementById('contactEmail').href = `mailto:${config.personal.email}`;
  document.getElementById('contactEmail').textContent = config.personal.email;
  document.getElementById('contactLinkedIn').href = config.personal.linkedin;
  document.getElementById('contactApex').href = config.personal.apexLink;

  // Set Formspree endpoint
  document.getElementById('contactForm').action = config.contact.formspreeEndpoint;
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  let lastScroll = 0;

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Hide navbar on scroll down, show on scroll up
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove('hidden');
    } else if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('hidden');
    } else if (currentScroll < lastScroll) {
      navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;

    // Update active nav link
    updateActiveNavLink();
  });

  // Smooth scroll for anchor links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.pageYOffset + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ========================================
// MAP CONTROLS (Interactive #1)
// ========================================
function initMapControls() {
  const mapControlBtns = document.querySelectorAll('.map-control-btn');
  const locationBadge = document.getElementById('currentLocation');

  mapControlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const location = btn.getAttribute('data-location');

      // Update active button
      mapControlBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Pan map
      if (window.worldMap) {
        worldMap.panTo(location);
      }

      // Update location badge
      const locationData = CONFIG.personal.locations[location];
      if (locationData) {
        locationBadge.textContent = locationData.label;
      }

      // Update headline based on location (subtle change)
      const headline = document.getElementById('heroHeadline');
      if (location === 'madrid') {
        headline.textContent = 'NAVIGATING GLOBAL STRATEGY. EXECUTING CODE.';
      } else if (location === 'purdue') {
        headline.textContent = 'LEARNING STRATEGY. BUILDING CODE.';
      } else {
        headline.textContent = CONFIG.hero.headline;
      }
    });
  });
}

// ========================================
// EXPERIENCE HOVER - MAP HIGHLIGHTING (Interactive #2 & #3)
// ========================================
function initExperienceHighlighting() {
  const experienceCards = document.querySelectorAll('.experience-card');

  experienceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const mapHighlight = card.getAttribute('data-map-highlight');
      if (mapHighlight && window.worldMap) {
        worldMap.highlightRegion(mapHighlight);
      }
    });

    card.addEventListener('mouseleave', () => {
      if (window.worldMap) {
        worldMap.highlightRegion(null);
      }
    });
  });
}

// Call after content is loaded
setTimeout(initExperienceHighlighting, 1000);

// ========================================
// PROJECT HOVER - TRUCK ROUTE (Interactive #5)
// ========================================
function initProjectHoverEffects() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const mapRoute = card.getAttribute('data-map-route');
      if (mapRoute === 'truck-route' && window.worldMap) {
        // Draw a line across North America for the truck route
        worldMap.highlightRegion('north-america');
      }
    });

    card.addEventListener('mouseleave', () => {
      if (window.worldMap) {
        worldMap.highlightRegion(null);
      }
    });
  });
}

// Call after content is loaded
setTimeout(initProjectHoverEffects, 1000);

// ========================================
// LAZY LOADING
// ========================================
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('.lazy-load');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// PRELOADING
// ========================================
function initPreloading() {
  // Preload images when sections are near viewport
  const sections = document.querySelectorAll('section');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        preloadSectionAssets(section);
      }
    });
  }, {
    rootMargin: '200px' // Preload when section is 200px away
  });

  sections.forEach(section => sectionObserver.observe(section));
}

function preloadSectionAssets(section) {
  // Preload images in section
  const images = section.querySelectorAll('img[data-src]');
  images.forEach(img => {
    const src = img.getAttribute('data-src');
    if (src && !img.src) {
      const preloadImg = new Image();
      preloadImg.src = src;
    }
  });

  // Preload videos in section
  const videos = section.querySelectorAll('video[data-src]');
  videos.forEach(video => {
    const src = video.getAttribute('data-src');
    if (src && !video.src) {
      video.src = src;
      video.load();
    }
  });
}

// ========================================
// MODALS
// ========================================
function initModals() {
  const projectModal = document.getElementById('projectModal');
  const strategyModal = document.getElementById('strategyModal');
  const modalCloses = document.querySelectorAll('.modal-close');

  // Close modals
  modalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').classList.remove('active');
    });
  });

  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });

  // Project cards click - open blog post modal
  setTimeout(() => {
    const readBlogBtns = document.querySelectorAll('.read-blog');
    readBlogBtns.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const blogPath = btn.getAttribute('data-blog');
        await loadBlogPost(blogPath);
      });
    });
  }, 1000);
}

async function loadBlogPost(blogPath) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = '<div class="loader"></div>';
  modal.classList.add('active');

  try {
    const response = await fetch(blogPath);
    if (!response.ok) throw new Error('Blog post not found');

    const markdown = await response.text();

    // Simple markdown to HTML conversion
    const html = markdownToHTML(markdown);
    modalBody.innerHTML = html;
  } catch (error) {
    modalBody.innerHTML = `
      <h2>Error Loading Blog Post</h2>
      <p>Sorry, the blog post could not be loaded at this time.</p>
      <p class="error-message">${error.message}</p>
    `;
  }
}

function markdownToHTML(markdown) {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // Line breaks
  html = html.replace(/\n\n/gim, '</p><p>');
  html = html.replace(/\n/gim, '<br>');

  // Wrap in paragraphs
  html = '<p>' + html + '</p>';

  // Lists
  html = html.replace(/<p>- (.*?)<\/p>/gim, '<ul><li>$1</li></ul>');

  return html;
}

// ========================================
// CONTACT FORM (FORMSPREE)
// ========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formspreeEndpoint = CONFIG.contact.formspreeEndpoint;

    // Validate endpoint
    if (!formspreeEndpoint || formspreeEndpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
      formStatus.textContent = 'Please configure your Formspree endpoint in config.js';
      formStatus.className = 'form-status error';
      return;
    }

    formStatus.textContent = 'Sending...';
    formStatus.className = 'form-status';

    try {
      const response = await fetch(formspreeEndpoint, {
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
    }
  });
}

// ========================================
// EASTER EGGS
// ========================================
function initEasterEggs() {
  // Easter Egg #1: Fitness Goal Marker
  initFitnessEasterEgg();

  // Easter Egg #2: Country Count
  initCountryEasterEgg();

  // Easter Egg #3: Secret API Key
  initAPIKeyEasterEgg();

  // Easter Egg #4: Strategy Diagram (Ctrl+Alt+S)
  initStrategyDiagramEasterEgg();
}

// Easter Egg #1: Fitness icon appears
function initFitnessEasterEgg() {
  setTimeout(() => {
    const narrativeText = document.getElementById('aboutNarrative');
    if (!narrativeText) return;

    const fitnessText = CONFIG.easterEggs.fitnessGoalText;
    const textContent = narrativeText.innerHTML;
    const wrappedText = textContent.replace(
      fitnessText,
      `<span class="fitness-easter-egg" id="fitnessEgg">${fitnessText}</span>`
    );
    narrativeText.innerHTML = wrappedText;

    const eggElement = document.getElementById('fitnessEgg');
    if (eggElement) {
      eggElement.addEventListener('click', () => {
        const icon = document.createElement('span');
        icon.className = 'fitness-icon';
        icon.textContent = '🏋️';
        icon.style.left = '100%';
        icon.style.top = '0';
        eggElement.appendChild(icon);

        setTimeout(() => icon.remove(), 1000);
      });
    }
  }, 1000);
}

// Easter Egg #2: Country codes appear
function initCountryEasterEgg() {
  setTimeout(() => {
    const experienceCards = document.querySelectorAll('.experience-card[data-countries]');
    experienceCards.forEach(card => {
      const achievements = card.querySelector('.experience-achievements');
      if (!achievements) return;

      const items = achievements.querySelectorAll('li');
      items.forEach(item => {
        if (item.textContent.includes('nine European countries')) {
          const countries = JSON.parse(card.getAttribute('data-countries'));
          item.style.cursor = 'help';
          item.title = 'Hover to see countries';

          item.addEventListener('mouseenter', () => {
            const countryList = document.createElement('span');
            countryList.style.color = '#FFC107';
            countryList.style.marginLeft = '10px';
            countryList.textContent = ` (${countries.join(' → ')})`;
            item.appendChild(countryList);
          });

          item.addEventListener('mouseleave', () => {
            const countryList = item.querySelector('span');
            if (countryList) countryList.remove();
          });
        }
      });
    });
  }, 1000);
}

// Easter Egg #3: Secret API Key flash
function initAPIKeyEasterEgg() {
  setTimeout(() => {
    const geminiSkill = document.querySelector('[data-skill="Gemini API"]');
    if (!geminiSkill) return;

    let hoverTimer;
    geminiSkill.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => {
        const apiKey = CONFIG.easterEggs.secretAPIKey;
        const originalText = geminiSkill.textContent;

        geminiSkill.classList.add('api-key-flash');
        geminiSkill.textContent = apiKey;

        setTimeout(() => {
          geminiSkill.classList.remove('api-key-flash');
          geminiSkill.textContent = originalText;
        }, 1000);
      }, 3000);
    });

    geminiSkill.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
    });
  }, 1000);
}

// Easter Egg #4: Strategy Diagram Modal
function initStrategyDiagramEasterEgg() {
  document.addEventListener('keydown', (e) => {
    // Ctrl+Alt+S
    if (e.ctrlKey && e.altKey && e.key === 's') {
      e.preventDefault();
      const modal = document.getElementById('strategyModal');
      modal.classList.add('active');
    }
  });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  setTimeout(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }, 100);
}

// ========================================
// LANGUAGE TOGGLE (Easter Egg - Interactive #4)
// ========================================
function initLanguageToggle() {
  const languageToggle = document.getElementById('languageToggle');
  let isSpanish = false;

  const translations = {
    en: {
      heroHeadline: CONFIG.hero.headline,
      heroDescription: CONFIG.hero.description,
      contactHeadline: CONFIG.contact.headline
    },
    es: {
      heroHeadline: "CONECTANDO ESTRATEGIA. EJECUTANDO CÓDIGO.",
      heroDescription: "Estudiante de Purdue University, B.S. en Analítica de Negocios y Gestión de Información.",
      contactHeadline: "ESTABLECER COORDENADAS DE TRANSMISIÓN."
    }
  };

  languageToggle.addEventListener('click', () => {
    isSpanish = !isSpanish;
    const lang = isSpanish ? 'es' : 'en';

    document.getElementById('heroHeadline').textContent = translations[lang].heroHeadline;
    document.getElementById('heroDescription').textContent = translations[lang].heroDescription;
    document.getElementById('contactHeadline').textContent = translations[lang].contactHeadline;

    // Toggle flag
    languageToggle.querySelector('.flag-icon').textContent = isSpanish ? '🇺🇸' : '🇪🇸';
  });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

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

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
