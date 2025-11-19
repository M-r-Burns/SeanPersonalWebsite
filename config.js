/* ============================================
   CONFIGURATION FILE
   Edit this file to update website content
   ============================================ */

const CONFIG = {
    // ============================================
    // CONTACT INFORMATION
    // ============================================
    contact: {
        email: 'your.email@example.com',
        linkedin: 'https://linkedin.com/in/elijb',
        apexLink: 'https://yourwebsite.com',
        apexText: 'ApeX Platform'
    },

    // ============================================
    // FORMSPREE CONFIGURATION
    // Get your endpoint from: https://formspree.io/
    // ============================================
    formspree: {
        endpoint: 'YOUR_FORMSPREE_ENDPOINT_HERE' // Example: 'https://formspree.io/f/xpznqrrb'
    },

    // ============================================
    // PROJECTS
    // ============================================
    projects: [
        {
            title: 'ApeX Student Project Hub',
            description: 'Launched a public platform for university students to share apps, websites, and research projects. Built and deployed the full product solo using Supabase and the Gemini API for an AI-powered "paper to website" tool. Designed 8+ web app tools and games for the library.',
            techStack: ['HTML', 'CSS', 'JS', 'Gemini API', 'Supabase', 'UI/UX'],
            imageUrl: '/images/apestackThumbnail.png', // Path to project image
            blogPost: '/blog/ApeX.md', // Path to blog post markdown file
            demoUrl: '', // Optional: Link to live demo
            githubUrl: '' // Optional: Link to GitHub repo
        },
        {
            title: 'Class 8 Truck Trip Simulator',
            description: 'Web-based simulation tool comparing Diesel vs. Electric Class 8 trucks on real-world routes. Integrated Google Maps APIs for route geometry, Hours of Service rules, and dynamic refueling/charging. Built a cost-modeling engine for TCO analysis.',
            techStack: ['JavaScript', 'Google Maps API', 'Cost Modeling', 'Logistics Simulation'],
            imageUrl: '/images/trucklogo.png',
            blogPost: '/blog/truckSimulator.md',
            demoUrl: '',
            githubUrl: ''
        },
        {
            title: 'MEBA LiDAR Backpack Commercialization',
            description: 'Developed a commercialization strategy for a LiDAR-equipped forestry backpack. Engineered a Python NLP tool (Gemini API) for survey data analysis. Conducted market research for customer segments, pricing, and competitive positioning.',
            techStack: ['Python', 'Gemini API', 'NLP', 'Market Research'],
            imageUrl: '/images/lidar.png',
            blogPost: '/blog/LiDARBackpack.md',
            demoUrl: '',
            githubUrl: ''
        },
        {
            title: 'Marketplace Messenger',
            description: 'Team project: a concurrent messaging program with a JavaFX GUI. Developed program architecture and managed file/server I/O using Agile principles.',
            techStack: ['Java', 'JavaFX', 'Agile', 'Git'],
            imageUrl: '/images/marketplace.png',
            blogPost: '/blog/marketplaceMessenger.md',
            demoUrl: '',
            githubUrl: ''
        },
        {
            title: 'Beyond the Basics: Fantasy Football eBook',
            description: 'Created, marketed, and sold a 30-page fantasy football eBook. Achieved a 30% conversion rate from Facebook ads, using Final Cut Pro for marketing videos.',
            techStack: ['Digital Publishing', 'Facebook Ads', 'Final Cut Pro'],
            imageUrl: '/images/fantasy.png',
            blogPost: '/blog/beyondTheBasics.md',
            demoUrl: '',
            githubUrl: ''
        },
        {
            title: 'From Sand to Silicon',
            description: 'A deep dive into semiconductor manufacturing and the technology that powers modern computing.',
            techStack: ['Research', 'Technical Writing'],
            imageUrl: '/images/silicon.png',
            blogPost: '/blog/fromSandtoSilicon.md',
            demoUrl: '',
            githubUrl: ''
        }
    ],

    // ============================================
    // SYSTEM STATUS CONSOLE SETTINGS
    // ============================================
    systemStatus: {
        // Animation intervals in milliseconds
        updateInterval: 3000,

        // Possible values for each metric
        computeLoad: ['Low', 'Medium', 'High', 'Optimal'],
        latencyRange: { min: 18, max: 35 }, // in ms
        aiTrainingRange: { min: 80, max: 95 } // in percentage
    },

    // ============================================
    // LAZY LOADING SETTINGS
    // ============================================
    lazyLoading: {
        enabled: true,
        rootMargin: '50px', // Start loading before element is in viewport
        threshold: 0.01
    },

    // ============================================
    // PRELOADING SETTINGS
    // Images/videos to preload in the background
    // ============================================
    preloadAssets: [
        // Add paths to images/videos you want to preload
        // Example: '/images/hero-bg.jpg',
        // Example: '/videos/demo.mp4'
    ],

    // ============================================
    // FEATURE TOGGLES
    // ============================================
    features: {
        systemConsole: true,
        terminalEasterEgg: true,
        fitnessLog: true,
        lebronCounter: true,
        spanishSwitch: true,
        vibeCodingToggle: true
    }
};

// Make CONFIG available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
