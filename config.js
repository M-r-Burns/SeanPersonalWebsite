// ========================================
// PERSONAL WEBSITE CONFIGURATION
// ========================================
// Edit this file to update your website content, links, and API keys
// All changes will be automatically reflected on your website

window.CONFIG = {
    // ========================================
    // FORMSPREE CONFIGURATION
    // ========================================
    // Get your Formspree endpoint from: https://formspree.io/
    // Create a free account and create a new form
    // Copy the form endpoint URL and paste it below
    // Example: 'https://formspree.io/f/xvoeabcd'
    formspreeEndpoint: 'YOUR_FORMSPREE_ENDPOINT_HERE',

    // ========================================
    // COMPANY/ORGANIZATION URLS
    // ========================================
    // Add or update company website URLs
    companyUrls: {
        crowe: 'https://www.crowe.com/',
        ducharme: 'https://www.dmacpas.com/',
        griswold: 'https://www.griswoldconsulting.com/',
        larsen: 'https://www.purdue.edu/larsen/',
        uc3m: 'https://www.uc3m.es/'
    },

    // ========================================
    // PROJECT DEMO URLS
    // ========================================
    // Add URLs to your live project demos
    projectDemoUrls: {
        apex: 'https://your-apex-demo.com',
        truck: 'https://your-truck-simulator-demo.com',
        ebook: 'https://your-ebook-purchase-link.com'
    },

    // ========================================
    // PROJECT BUY/PURCHASE URLS
    // ========================================
    // Add URLs for purchasing projects or products
    projectBuyUrls: {
        ebook: 'https://your-ebook-purchase-link.com'
    },

    // ========================================
    // SOCIAL MEDIA & CONTACT LINKS
    // ========================================
    social: {
        linkedin: 'https://linkedin.com/in/elijb',
        email: 'your-email@example.com',
        // Add more as needed:
        // github: 'https://github.com/yourusername',
        // twitter: 'https://twitter.com/yourusername',
    },

    // ========================================
    // IMAGE PATHS
    // ========================================
    // Update these paths when you add your images
    // Place your images in the 'images' folder
    images: {
        profile: 'images/profile.jpg',
        projects: {
            apex: 'images/projects/apex.jpg',
            truckSimulator: 'images/projects/truck-simulator.jpg',
            lidar: 'images/projects/lidar.jpg',
            messenger: 'images/projects/messenger.jpg',
            ebook: 'images/projects/ebook.jpg'
        }
    },

    // ========================================
    // VIDEO PATHS
    // ========================================
    // Update these paths when you add your videos
    // Place your videos in the 'videos/projects' folder
    // Recommended format: MP4, max size: 10MB for best performance
    videos: {
        apexDemo: 'videos/projects/apex-demo.mp4',
        truckSimulatorDemo: 'videos/projects/truck-simulator-demo.mp4'
    },

    // ========================================
    // SITE METADATA
    // ========================================
    site: {
        title: 'Elijah | Business Analytics & Software Development',
        description: 'Bridging the gap between business needs and technical solutions',
        author: 'Elijah',
        keywords: 'business analytics, software development, data visualization, AI, projects'
    },

    // ========================================
    // THEME PREFERENCES
    // ========================================
    theme: {
        defaultTheme: 'dark', // 'light' or 'dark'
        accentColorLight: '#0066ff', // Electric blue for light mode
        accentColorDark: '#00ff88' // Neon green for dark mode
    },

    // ========================================
    // FEATURE FLAGS
    // ========================================
    // Enable or disable features
    features: {
        enableTypingAnimation: false, // Set to true to enable typing animation on hero
        enableParticles: false, // Future feature
        enableSmoothScroll: true,
        enableLazyLoading: true,
        enablePreloading: true,
        enableDataVisualizations: true
    }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

// Check if configuration is valid
window.validateConfig = function() {
    const warnings = [];

    if (CONFIG.formspreeEndpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
        warnings.push('⚠️ Formspree endpoint not configured. Contact form will not work.');
    }

    if (warnings.length > 0) {
        console.warn('Configuration warnings:');
        warnings.forEach(w => console.warn(w));
    } else {
        console.log('✅ Configuration is valid!');
    }

    return warnings.length === 0;
};

// Run validation on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.validateConfig();
    });
} else {
    window.validateConfig();
}
