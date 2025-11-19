// ========================================
// WEBSITE CONFIGURATION FILE
// ========================================
// Edit this file to update your website content easily
// No HTML or CSS knowledge required - just update the values!

const CONFIG = {
  // ========================================
  // PERSONAL INFORMATION
  // ========================================
  personal: {
    name: "Your Name",
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/elijb",
    apexLink: "YOUR_APEX_LINK_HERE",
    location: "Indianapolis, IN",
    university: "Purdue University",
    degree: "B.S. in Business Analytics & Information Management",

    // Profile image (place your image in assets/images/profile/)
    profileImage: "assets/images/profile/profile.jpg", // Change to your image filename

    // Map coordinates for interactive map
    locations: {
      purdue: { lat: 40.4237, lng: -86.9212, label: "Purdue University" },
      indianapolis: { lat: 39.7684, lng: -86.1581, label: "Indianapolis, IN" },
      madrid: { lat: 40.4168, lng: -3.7038, label: "Madrid, Spain" }
    }
  },

  // ========================================
  // HERO SECTION
  // ========================================
  hero: {
    headline: "BRIDGING STRATEGY. EXECUTING CODE.",
    subheadline: "A.I. → G.T.M.",
    description: "Purdue University Student, B.S. in Business Analytics & Information Management.",
    ctaText: "View Production Models",
    ctaLink: "#projects"
  },

  // ========================================
  // ABOUT ME SECTION
  // ========================================
  about: {
    headline: "THE LEARNING ALGORITHM.",
    narrative: `During college, I struggled to find classes or clubs that truly engaged me—so I decided to build my own path. I started launching personal projects, like ApeX, because I believe the best way to learn is by doing. Even when I didn't know how to do something, I trusted that I could figure it out. That mindset led to plenty of failed attempts, but each one taught me something new and pushed me toward more ambitious, impactful work. My drive is simple: I am constantly iterating on new startup ideas and side projects, and always seeking new challenges. Skilled in SQL, Python, data visualization, and AI tooling, I believe "failure" is just a stepping stone to refinement. I am ready to connect ambitious students, university partners, and industry recruiters through the power of real, self-driven work.`,

    metrics: [
      { value: "84+", label: "LinkedIn Connections" },
      { value: "15+", label: "Projects Completed" },
      { value: "∞", label: "Times I've thought about LeBron" }
    ],

    interests: [
      "Leveraging AI to accelerate learning (languages, business strategy)",
      "Optimizing fitness (weightlifting)",
      "Understanding business mechanics"
    ]
  },

  // ========================================
  // PROFESSIONAL EXPERIENCE
  // ========================================
  experience: [
    {
      role: "RCFC Consulting/Technology Intern",
      company: "Crowe LLP",
      period: "Jun 2025 – Aug 2025",
      website: "https://www.crowe.com",
      achievements: [
        "Developed a ChatGPT-powered HTML/JS tool to standardize 750+ risk statements, cutting manual editing time by ~80% (100+ hours).",
        "Led an AI research initiative, conducting 12+ product owner interviews to uncover 5+ high-impact use cases and presented a strategic roadmap to partners.",
        "Co-created an AI-powered ERP screen-capture assistant concept in an internal case competition, placing 4th/29.",
        "Initiated a prototype RAG compliance agent for natural-language regulatory queries."
      ],
      mapHighlight: "north-america" // Options: north-america, europe, asia, global
    },
    {
      role: "Property Tax Compliance Intern",
      company: "DuCharme, McMillen & Associates, Inc.",
      period: "May 2024 – Aug 2024",
      website: "https://www.dmcpa.com",
      achievements: [
        "Leveraged data analysis and ChatGPT API to uncover trends from 200+ employee feedback responses, enhancing strategic decision-making.",
        "Prepared and filed BPP tax returns and processed bills on $100M+ in assets, ensuring compliance.",
        "Supported an SOC audit, participating in internal control processes."
      ],
      mapHighlight: "north-america"
    },
    {
      role: "Intern",
      company: "Griswold Consulting",
      period: "Jan 2024 – May 2025",
      website: "#",
      achievements: [
        "Collaborated with Indianapolis Chamber of Commerce for actionable business insights via data analysis.",
        "Used Tableau to analyze 82,000+ data lines, creating interactive visualization for 100+ EV/battery manufacturers.",
        "Partnered with Madison County Economic Development for 5-year economic impact projections."
      ],
      mapHighlight: "north-america"
    },
    {
      role: "Vice President of External Events",
      company: "Larsen Leadership Academy",
      period: "Aug 2022 – Dec 2024",
      website: "#",
      achievements: [
        "Organized a PowerBI workshop for Larsen members.",
        "Helped guide 600+ students in leadership/professional development on Purdue's largest learning community executive board."
      ],
      mapHighlight: null
    },
    {
      role: "Study Abroad Program",
      company: "UC3M (Madrid, Spain)",
      period: "Sep 2024 – Dec 2024",
      website: "#",
      achievements: [
        "Completed A2-level Spanish coursework while living with a host family.",
        "Visited nine European countries, navigating diverse customs and deepening adaptability."
      ],
      mapHighlight: "europe",
      countries: ["ES", "IT", "DE", "FR", "PT", "NL", "BE", "CH", "AT"] // Easter egg
    }
  ],

  // ========================================
  // PROJECTS / PORTFOLIO
  // ========================================
  projects: [
    {
      name: "ApeX Student Project Hub",
      type: "Software",
      description: "Launched a public platform for university students to share apps, websites, and research projects. Built and deployed the full product solo using Supabase and the Gemini API for an AI-powered 'paper to website' tool. Designed 8+ web app tools and games for the library.",
      techStack: ["HTML", "CSS", "JavaScript", "Gemini API", "Supabase", "UI/UX"],
      image: "assets/images/projects/apex.jpg", // Add your project image
      video: "assets/videos/apex-demo.mp4", // Optional: Add project demo video
      blogPost: "blog/ApeX.md",
      link: "YOUR_APEX_LINK",
      mapRoute: "indianapolis" // For map animation
    },
    {
      name: "Class 8 Truck Trip Simulator",
      type: "Software",
      description: "Web-based simulation tool comparing Diesel vs. Electric Class 8 trucks on real-world routes. Integrated Google Maps APIs for route geometry, Hours of Service rules, and dynamic refueling/charging. Built a cost-modeling engine for TCO analysis.",
      techStack: ["JavaScript", "Google Maps API", "Cost Modeling", "Logistics Simulation"],
      image: "assets/images/projects/truck-simulator.jpg",
      video: "assets/videos/truck-demo.mp4",
      blogPost: "blog/truckSimulator.md",
      link: "#",
      mapRoute: "truck-route" // Special route animation
    },
    {
      name: "MEBA LiDAR Backpack Commercialization",
      type: "Strategy",
      description: "Developed a commercialization strategy for a LiDAR-equipped forestry backpack. Engineered a Python NLP tool (Gemini API) for survey data analysis. Conducted market research for customer segments, pricing, and competitive positioning.",
      techStack: ["Python", "Gemini API", "NLP", "Market Research"],
      image: "assets/images/projects/lidar.jpg",
      blogPost: "blog/LiDARBackpack.md",
      link: "#",
      mapRoute: null
    },
    {
      name: "Marketplace Messenger",
      type: "Software - Java",
      description: "Team project: a concurrent messaging program with a JavaFX GUI. Developed program architecture and managed file/server I/O using Agile principles.",
      techStack: ["Java", "JavaFX", "Agile", "Git"],
      image: "assets/images/projects/messenger.jpg",
      blogPost: "blog/marketplaceMessenger.md",
      link: "#",
      mapRoute: null
    },
    {
      name: "Beyond the Basics: Fantasy Football eBook",
      type: "Design/Marketing",
      description: "Created, marketed, and sold a 30-page fantasy football eBook. Achieved a 30% conversion rate from Facebook ads, using Final Cut Pro for marketing videos.",
      techStack: ["Digital Publishing", "Facebook Ads", "Final Cut Pro"],
      image: "assets/images/projects/fantasy-football.jpg",
      blogPost: "blog/beyondTheBasics.md",
      link: "#",
      mapRoute: null
    }
  ],

  // ========================================
  // SKILLS & CERTIFICATIONS
  // ========================================
  skills: {
    "Technical & Programming": [
      "Python",
      "Vibe-coding",
      "HTML",
      "SQL",
      "Supabase"
    ],
    "APIs & AI Tooling": [
      "Gemini API",
      "ChatGPT API",
      "Google Maps API",
      "AI Tooling"
    ],
    "Data & Analytics": [
      "Tableau",
      "Microsoft Excel",
      "Data Visualization",
      "Data Analysis"
    ],
    "Business & Strategy": [
      "Agile Project Management",
      "Market Research",
      "Economic Impact Analysis",
      "Commercialization Strategy",
      "Digital Marketing"
    ],
    "Creative & Languages": [
      "Final Cut Pro",
      "UI/UX Design (Conceptual)",
      "Spanish (A2 Level - learning!)"
    ]
  },

  certifications: [
    "Atlassian Agile Project Management Professional Certificate",
    "Google Fundamentals of Digital Marketing Certificate",
    "EBEC Python Certificate"
  ],

  // ========================================
  // AWARDS & COMPETITIONS
  // ========================================
  awards: [
    {
      place: "1st Place",
      name: "Ascend Case Competition",
      description: "Coffee shop business plan, analyzed 100+ survey responses."
    },
    {
      place: "2nd Place",
      name: "NSSE Endress Hauser Case Competition",
      description: "Training plan for new flow control devices."
    },
    {
      place: "2nd Place",
      name: "Wabash Larsen Case Competition",
      description: "Shipping container strategy for 5-year revenue doubling."
    },
    {
      place: "Participant",
      name: "Wisconsin Invitational Consulting Case Competition",
      description: "Designed EV Class 8 integration plan."
    }
  ],

  // ========================================
  // CONTACT FORM (FORMSPREE)
  // ========================================
  contact: {
    headline: "SET TRANSMISSION COORDINATES.",
    formspreeEndpoint: "YOUR_FORMSPREE_ENDPOINT_HERE", // Get from https://formspree.io/
    // Example: "https://formspree.io/f/YOUR_FORM_ID"
  },

  // ========================================
  // EASTER EGGS & HIDDEN FEATURES
  // ========================================
  easterEggs: {
    fitnessGoalText: "ambitious, impactful work",
    secretAPIKey: "sk-••••••••••••••••HIDDEN••••••••••••••••",
    strategyShortcut: "Control+Alt+S", // Press this to see strategy diagram
  },

  // ========================================
  // THEME CUSTOMIZATION (Advanced)
  // ========================================
  theme: {
    colors: {
      primary: "#0a1929", // Deep Navy
      secondary: "#1a3a52", // Dark Teal
      accent: "#FFC107", // Amber/Gold
      text: "#ffffff", // White
      textSecondary: "#b0bec5" // Light Gray
    }
  }
};

// Make config available globally
window.CONFIG = CONFIG;
