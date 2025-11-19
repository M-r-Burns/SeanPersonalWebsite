/**
 * WEBSITE CONFIGURATION FILE
 *
 * Edit this file to update your personal information, links, and settings.
 * This centralized configuration makes it easy to maintain your website.
 */

const SITE_CONFIG = {
    // ==========================================
    // PERSONAL INFORMATION
    // ==========================================
    personal: {
        name: "Eli J",
        email: "your-email@example.com", // Replace with your email
        location: "Indianapolis, IN",
        university: "Purdue University",
        degree: "B.S. in Business Analytics & Information Management",
        tagline: "BRIDGING STRATEGY. EXECUTING CODE. (A.I. → G.T.M.)"
    },

    // ==========================================
    // SOCIAL LINKS
    // ==========================================
    links: {
        linkedin: "https://linkedin.com/in/elijb",
        apexHub: "https://your-apex-url.com", // Replace with your ApeX URL
        github: "", // Optional: Add your GitHub profile
        twitter: "" // Optional: Add your Twitter/X profile
    },

    // ==========================================
    // FORMSPREE CONFIGURATION
    // Get your Formspree endpoint at: https://formspree.io/
    // ==========================================
    formspree: {
        // Replace this with your Formspree form endpoint
        // Example: "https://formspree.io/f/xyzabc123"
        endpoint: "YOUR_FORMSPREE_ENDPOINT_HERE"
    },

    // ==========================================
    // METRICS (About Section)
    // ==========================================
    metrics: {
        linkedinConnections: 84,
        projectsCompleted: 15,
        lebronThoughts: "∞" // Keep it fun!
    },

    // ==========================================
    // SPANISH WORDS (Footer Widget)
    // Add more words to expand the rotation
    // ==========================================
    spanishWords: [
        { word: "Aprender", translation: "(to learn)" },
        { word: "Crear", translation: "(to create)" },
        { word: "Innovar", translation: "(to innovate)" },
        { word: "Perseverar", translation: "(to persevere)" },
        { word: "Construir", translation: "(to build)" },
        { word: "Mejorar", translation: "(to improve)" },
        { word: "Explorar", translation: "(to explore)" },
        { word: "Desarrollar", translation: "(to develop)" },
        { word: "Ejecutar", translation: "(to execute)" },
        { word: "Iterar", translation: "(to iterate)" }
    ],

    // ==========================================
    // AI LEARNING QUOTES (Easter Egg)
    // Add your favorite quotes about learning and education
    // ==========================================
    learningQuotes: [
        {
            text: "The best way to learn is by doing. Even when I didn't know how to do something, I trusted that I could figure it out.",
            author: "Personal Philosophy"
        },
        {
            text: "I don't need to know how to do everything, but I've gotten really good at knowing what questions to ask.",
            author: "Lessons from ApeX"
        },
        {
            text: "The real blocker is not knowing what you don't know.",
            author: "Self Discovery"
        },
        {
            text: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
            author: "Benjamin Franklin"
        },
        {
            text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            author: "Mahatma Gandhi"
        }
    ],

    // ==========================================
    // BUSINESS TERMS DEFINITIONS (Tooltips)
    // Add definitions for business terms that appear on your site
    // ==========================================
    businessTerms: {
        "AI research initiative": "Systematic investigation into AI applications and use cases to identify high-impact opportunities",
        "Agile": "An iterative project management methodology focusing on flexibility, collaboration, and rapid delivery",
        "Commercialization": "The process of bringing a product or service from development to market",
        "Commercialization Strategy": "A comprehensive plan for bringing a product to market, including pricing, positioning, and go-to-market tactics"
    },

    // ==========================================
    // FEATURE FLAGS
    // Enable or disable certain features
    // ==========================================
    features: {
        enableNetworkAnimation: true, // Hero section network graph
        enableSkillNetwork: true, // Skills section network background
        enableEasterEggs: true, // All easter eggs
        enableSpanishWidget: true, // Footer language widget
        enableLazyLoading: true, // Lazy load images
        enablePreloading: true // Preload images in background
    },

    // ==========================================
    // ANIMATION SETTINGS
    // ==========================================
    animation: {
        networkSpeed: 0.5, // Speed of network graph animation (0.1 - 2)
        particleCount: 50, // Number of particles in network graph (20 - 100)
        fitnessTimerDuration: 30 // Fitness timer duration in seconds
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}
