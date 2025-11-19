/* ============================================
   WEBSITE CONFIGURATION
   Easy editing for non-technical users
   ============================================ */

/* ============================================
   FORMSPREE INTEGRATION
   ============================================ */
// Get your Formspree endpoint from https://formspree.io/
// After creating an account, create a new form and paste your endpoint URL here
// Example: 'https://formspree.io/f/YOUR_FORM_ID'
window.FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE';

/* ============================================
   PERSONAL INFORMATION
   ============================================ */
const personalInfo = {
    name: 'Elijah Burns',
    title: 'Purdue University Student',
    degree: 'BS in Business Analytics & Information Management',
    location: 'Indianapolis, IN',
    tagline: 'Bridging the gap between business needs and technical solutions',

    // Social Links
    linkedin: 'https://linkedin.com/in/elijb',

    // Contact Email (optional - form uses Formspree)
    email: 'your.email@example.com',

    // Stats for hero section
    stats: {
        connections: '84+',
        projects: '15+',
        lebronThoughts: '∞'
    }
};

/* ============================================
   SITE COLORS (Optional Customization)
   ============================================ */
// You can override the default color scheme here
// Uncomment and modify to change colors
const colorScheme = {
    // accent: '#00C896',        // Main accent color (teal/green)
    // accentAlt: '#007AFF',     // Alternative: Electric Blue
    // background: '#18181B',    // Main background
    // cardBackground: '#27272A' // Card/panel background
};

// Apply custom colors (if defined)
if (colorScheme.accent) {
    document.documentElement.style.setProperty('--color-accent', colorScheme.accent);
}
if (colorScheme.accentAlt) {
    // Uncomment next line to use alternative accent
    // document.documentElement.style.setProperty('--color-accent', colorScheme.accentAlt);
}
if (colorScheme.background) {
    document.documentElement.style.setProperty('--color-bg-primary', colorScheme.background);
}
if (colorScheme.cardBackground) {
    document.documentElement.style.setProperty('--color-bg-card', colorScheme.cardBackground);
}

/* ============================================
   FEATURE FLAGS
   ============================================ */
const features = {
    // Enable/disable particle background animation
    particleBackground: true,

    // Enable/disable system status widget
    systemStatus: true,

    // Enable/disable strategy flow on the side
    strategyFlow: true,

    // Enable/disable terminal easter egg
    terminal: true,

    // Enable/disable lazy loading for images
    lazyLoading: true,

    // Particle animation speed (0.1 - 1.0, default: 0.5)
    particleSpeed: 0.5,

    // Number of particles (auto-calculated by default, or set a specific number)
    particleCount: 'auto' // or a number like 50
};

/* ============================================
   DEMO/EXTERNAL LINKS
   ============================================ */
// Update these with your actual project links
const projectLinks = {
    apex: {
        demo: 'https://your-apex-demo-url.com',
        blog: 'blog/ApeX.md'
    },
    truckSimulator: {
        demo: 'https://your-truck-sim-url.com',
        blog: 'blog/truckSimulator.md'
    },
    lidar: {
        blog: 'blog/LiDARBackpack.md'
    },
    messenger: {
        blog: 'blog/marketplaceMessenger.md'
    },
    ebook: {
        buyLink: 'https://your-ebook-purchase-link.com',
        blog: 'blog/beyondTheBasics.md'
    }
};

/* ============================================
   COMPANY WEBSITES
   ============================================ */
const companyLinks = {
    crowe: 'https://www.crowe.com',
    ducharme: 'https://dmacpas.com'
};

/* ============================================
   ANALYTICS (Optional)
   ============================================ */
// Add your Google Analytics or other tracking code here
const analytics = {
    // Google Analytics 4
    ga4MeasurementId: '', // e.g., 'G-XXXXXXXXXX'

    // Cloudflare Web Analytics
    cloudflareToken: '', // Add your Cloudflare Web Analytics token
};

// Initialize Google Analytics if configured
if (analytics.ga4MeasurementId) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', analytics.ga4MeasurementId);

    // Load GA script
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.ga4MeasurementId}`;
    document.head.appendChild(gaScript);
}

// Initialize Cloudflare Web Analytics if configured
if (analytics.cloudflareToken) {
    const cfScript = document.createElement('script');
    cfScript.defer = true;
    cfScript.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cfScript.setAttribute('data-cf-beacon', `{"token": "${analytics.cloudflareToken}"}`);
    document.body.appendChild(cfScript);
}

/* ============================================
   SEO METADATA (Edit these for better SEO)
   ============================================ */
const seoMetadata = {
    title: 'Elijah Burns - Business Analytics & Technical Solutions',
    description: 'Purdue student bridging business needs and technical solutions through AI, data analytics, and strategic thinking.',
    keywords: 'business analytics, AI, data visualization, Purdue, software development, GTM strategy',
    author: 'Elijah Burns',
    ogImage: 'assets/images/og-image.jpg', // Create this image (1200x630px recommended)
};

// Update meta tags
document.addEventListener('DOMContentLoaded', () => {
    // Update title
    if (seoMetadata.title) {
        document.title = seoMetadata.title;
    }

    // Update or create meta tags
    const metaTags = {
        'description': seoMetadata.description,
        'keywords': seoMetadata.keywords,
        'author': seoMetadata.author,
    };

    Object.keys(metaTags).forEach(name => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = name;
            document.head.appendChild(meta);
        }
        meta.content = metaTags[name];
    });

    // Open Graph tags
    const ogTags = {
        'og:title': seoMetadata.title,
        'og:description': seoMetadata.description,
        'og:image': seoMetadata.ogImage,
        'og:type': 'website',
    };

    Object.keys(ogTags).forEach(property => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.content = ogTags[property];
    });
});

/* ============================================
   CLOUDFLARE PAGES CONFIGURATION
   ============================================ */
// This section is for reference - actual deployment config is in wrangler.toml
// See EDITING_GUIDE.md for Cloudflare deployment instructions

const cloudflareConfig = {
    // Custom domain (configure in Cloudflare Pages dashboard)
    customDomain: 'yourdomain.com', // Optional

    // Build settings (for reference)
    buildCommand: 'echo "No build needed - static site"',
    buildOutputDirectory: '/',

    // Environment variables (set in Cloudflare dashboard)
    // FORMSPREE_ENDPOINT: Set in dashboard if you want to hide it
};

/* ============================================
   EXPORT FOR USE IN OTHER FILES (if needed)
   ============================================ */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        personalInfo,
        projectLinks,
        companyLinks,
        features,
        analytics,
        seoMetadata
    };
}
