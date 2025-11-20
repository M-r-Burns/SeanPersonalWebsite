/**
 * Internationalization (i18n) System
 * Supports English and Spanish
 */

const translations = {
    en: {
        nav: {
            profile: 'Profile',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            viewProjects: 'View Projects',
            experience: 'Experience',
            contact: 'Contact',
            tagline: 'BRIDGING STRATEGY. EXECUTING CODE. (A.I. → G.T.M.)'
        },
        stats: {
            connections: 'Connections',
            projects: 'Projects',
            lebronThoughts: 'LeBron Thoughts'
        },
        sections: {
            professionalExperience: 'PROFESSIONAL EXPERIENCE',
            capabilitiesAchievements: 'CAPABILITIES & ACHIEVEMENTS',
            technicalSkills: '💻 TECHNICAL SKILLS',
            certifications: '🎓 CERTIFICATIONS',
            achievements: '🏆 ACHIEVEMENTS',
            connect: 'CONNECT'
        },
        contact: {
            linkedin: 'LinkedIn',
            email: 'Email',
            apexHub: 'ApeX Hub',
            name: 'Name',
            subject: 'Subject',
            message: 'Message',
            send: 'Send Message'
        },
        footer: {
            hint: '🎮 Try: Ctrl+Shift+T | Draw Mode: D | AI Mode: ↑↑↓↓←→AI'
        }
    },
    es: {
        nav: {
            profile: 'Perfil',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        hero: {
            viewProjects: 'Ver Proyectos',
            experience: 'Experiencia',
            contact: 'Contacto',
            tagline: 'CONECTANDO ESTRATEGIA. EJECUTANDO CÓDIGO. (I.A. → G.T.M.)'
        },
        stats: {
            connections: 'Conexiones',
            projects: 'Proyectos',
            lebronThoughts: 'Pensamientos de LeBron'
        },
        sections: {
            professionalExperience: 'EXPERIENCIA PROFESIONAL',
            capabilitiesAchievements: 'CAPACIDADES Y LOGROS',
            technicalSkills: '💻 HABILIDADES TÉCNICAS',
            certifications: '🎓 CERTIFICACIONES',
            achievements: '🏆 LOGROS',
            connect: 'CONECTAR'
        },
        contact: {
            linkedin: 'LinkedIn',
            email: 'Correo',
            apexHub: 'ApeX Hub',
            name: 'Nombre',
            subject: 'Asunto',
            message: 'Mensaje',
            send: 'Enviar Mensaje'
        },
        footer: {
            hint: '🎮 Prueba: Ctrl+Shift+T | Dibujar: D | Modo IA: ↑↑↓↓←→AI'
        }
    }
};

// i18n Manager
const i18nManager = {
    currentLang: 'en',

    init() {
        const savedLang = localStorage.getItem('language') || 'en';
        this.setLanguage(savedLang);
    },

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateDOM();
        this.updateLangToggle();
    },

    translate(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    },

    updateDOM() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
    },

    updateLangToggle() {
        const langIcon = document.getElementById('lang-icon');
        if (langIcon) {
            langIcon.textContent = this.currentLang === 'en' ? 'ES' : 'EN';
        }
    },

    toggle() {
        const newLang = this.currentLang === 'en' ? 'es' : 'en';
        this.setLanguage(newLang);
    }
};

// Export for use in other scripts
window.i18nManager = i18nManager;
