/**
 * GLOBAL LEARNING CANVAS - CONTENT CONFIGURATION
 * ===============================================
 * Edit this file to update all website content easily!
 * No HTML/CSS knowledge required - just update the text and values below.
 */

const SITE_CONFIG = {
    // ========== CONTACT & LINKS ==========
    formspreeApiKey: 'YOUR_FORMSPREE_API_KEY_HERE', // Replace with your Formspree form ID
    linkedinUrl: 'https://linkedin.com/in/elijb',
    apexUrl: '#', // Add your ApeX hub URL here

    // ========== PROFILE INFO ==========
    profileName: 'Your Name', // Add your name here
    profileBio: `Builder. Strategist. Learner. I create solutions by bridging strategy with execution, from AI-powered tools to go-to-market strategies. Always learning, always building.`,

    // ========== ABOUT ME ==========
    aboutText: `During college, I struggled to find classes or clubs that truly engaged me—so I decided to build my own path. I started launching personal projects, like ApeX, because I believe the best way to learn is by doing. Even when I didn't know how to do something, I trusted that I could figure it out. That mindset led to plenty of failed attempts, but each one taught me something new and pushed me toward more ambitious, impactful work. My drive is simple: I am constantly iterating on new startup ideas and side projects, and always seeking new challenges. Skilled in SQL, Python, data visualization, and AI tooling, I believe "failure" is just a stepping stone to refinement. I am ready to connect ambitious students, university partners, and industry recruiters through the power of real, self-driven work.`,

    // Key metrics displayed in About section
    metrics: {
        connections: '84+',
        projects: '15+',
        lebron: '∞'
    },

    // ========== PROFESSIONAL EXPERIENCE ==========
    experience: [
        {
            title: 'RCFC Consulting/Technology Intern',
            company: 'Crowe LLP',
            date: 'Jun 2025 – Aug 2025',
            achievements: [
                'Developed a ChatGPT-powered HTML/JS tool to standardize 750+ risk statements, cutting manual editing time by ~80% (100+ hours).',
                'Led an AI research initiative, conducting 12+ product owner interviews to uncover 5+ high-impact use cases and presented a strategic roadmap to partners.',
                'Co-created an AI-powered ERP screen-capture assistant concept in an internal case competition, placing 4th/29.',
                'Initiated a prototype RAG compliance agent for natural-language regulatory queries.'
            ]
        },
        {
            title: 'Property Tax Compliance Intern',
            company: 'DuCharme, McMillen & Associates, Inc.',
            date: 'May 2024 – Aug 2024',
            achievements: [
                'Leveraged data analysis and ChatGPT API to uncover trends from 200+ employee feedback responses, enhancing strategic decision-making.',
                'Prepared and filed BPP tax returns and processed bills on $100M+ in assets, ensuring compliance.',
                'Supported an SOC audit, participating in internal control processes.'
            ]
        },
        {
            title: 'Intern',
            company: 'Griswold Consulting',
            date: 'Jan 2024 – May 2025',
            achievements: [
                'Collaborated with Indianapolis Chamber of Commerce for actionable business insights via data analysis.',
                'Used Tableau to analyze 82,000+ data lines, creating interactive visualization for 100+ EV/battery manufacturers.',
                'Partnered with Madison County Economic Development for 5-year economic impact projections.'
            ]
        },
        {
            title: 'Vice President of External Events',
            company: 'Larsen Leadership Academy',
            date: 'Aug 2022 – Dec 2024',
            achievements: [
                'Organized a PowerBI workshop for Larsen members.',
                'Helped guide 600+ students in leadership/professional development on Purdue\'s largest learning community executive board.'
            ],
            isPurdue: true
        },
        {
            title: 'Study Abroad Program',
            company: 'UC3M (Madrid, Spain)',
            date: 'Sep 2024 – Dec 2024',
            achievements: [
                'Completed A2-level Spanish coursework while living with a host family.',
                'Visited nine European countries, navigating diverse customs and deepening adaptability.'
            ],
            isMadrid: true
        }
    ],

    // ========== PROJECTS ==========
    projects: [
        {
            title: 'ApeX Student Project Hub',
            type: 'Software',
            description: 'Launched a public platform for university students to share apps, websites, and research projects. Built and deployed the full product solo using Supabase and the Gemini API for an AI-powered "paper to website" tool.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Supabase', 'UI/UX'],
            imageUrl: 'assets/images/apex.jpg',
            imageIcon: '🚀',
            fullDescription: `ApeX is the project where I learned the most about what I wanted to do and what was possible in the world. This is the thing that really opened my mind and showed me that if I wanted to do something, I could simply learn it myself and do it, no matter how complicated it was.

It started out as a little side project. I was playing around with Google AI Studio, and they had just released their 1 million-token context window. I was pushing the limits, testing different models, and I was really impressed. Around that time, I started thinking about websites. Up to that point, most of my experience with websites came from editing templates I found online.

I wanted to see what other students at Purdue were working on. But when I searched around, I found virtually nothing. So I decided to turn my toy website into something useful: a place where students could share their side projects and research.

This project taught me about programming architecture, databases, edge functions, servers, caching, security, and backend interaction. I used Supabase, and it was fascinating to see how SQL-based databases talk to the front end.

What I learned: I can build stuff. I can hold my own. I can ask the right questions. I can learn what I need, even if I start from zero.`,
            blogUrl: 'blog/ApeX.md',
            demoUrl: '#' // Add your demo URL
        },
        {
            title: 'Class 8 Truck Trip Simulator',
            type: 'Software',
            description: 'Web-based simulation tool comparing Diesel vs. Electric Class 8 trucks on real-world routes. Integrated Google Maps APIs for route geometry, Hours of Service rules, and dynamic refueling/charging.',
            techStack: ['JavaScript', 'Google Maps API', 'Cost Modeling', 'Logistics Simulation'],
            imageUrl: 'assets/images/truck.jpg',
            imageIcon: '🚛',
            fullDescription: `This project started as a logistics case competition, but it ended up being the first time I felt like I was actually building software that could solve a real-world problem.

The case focused on: what are the costs (financial, time, and environmental) of switching from gas to electric trucking fleets? The real challenge was the time costs.

Electric trucks have far more limited ranges and much longer recharge times. That means more frequent stops and longer delays that tie into DOT rest rules.

Using Python, I wrote a simulation that mimicked a trucker's entire journey. It tracked maximum continuous driving hours, required breaks, daily sleep breaks, truck-specific range limits, charging and fueling time, and many more requirements.

I then built a clean, interactive front-end that let users input two cities, adjust truck specs, and instantly see a full comparison of gas vs. electric costs, emissions savings, and time breakdowns.

What I learned: Automation is essential when complexity grows. Small tools scale ideas. Real-world logic is messy. It's not just about building—it's about showing.`,
            blogUrl: 'blog/truckSimulator.md',
            demoUrl: '#' // Add your demo URL
        },
        {
            title: 'MEBA LiDAR Backpack Commercialization',
            type: 'Strategy',
            description: 'Developed a commercialization strategy for a LiDAR-equipped forestry backpack. Engineered a Python NLP tool (Gemini API) for survey data analysis. Conducted market research for customer segments, pricing, and competitive positioning.',
            techStack: ['Python', 'Gemini API', 'NLP', 'Market Research', 'GTM Strategy'],
            imageUrl: 'assets/images/lidar.jpg',
            imageIcon: '🌲',
            fullDescription: `I joined a LiDAR backpack project as part of my project-based class, where the goal was to explore how to commercialize a lidar backpack with a small team of students. The backpack was designed to improve the speed and results of gathering forestry data.

Forestry turned out to be a very niche market. Traditional methods involve manually measuring only a small sample of trees—it can take hours to survey just 1% of an area. The backpack could capture much more data in a day, but its price tag ($40,000-$80,000) was prohibitive.

One idea stood out: offer the backpack as a service. For a flat fee (e.g., $500), a trained operator brings the LiDAR backpack to a landowner's site and completes a full survey in a single day. This approach more than doubles the value delivered to clients while significantly improving our return on investment.

What I learned: The importance of user research in understanding real-world constraints, how to develop pricing and service models that lower barriers to adoption, and the need for structured communication across disciplines.`,
            blogUrl: 'blog/LiDARBackpack.md'
        },
        {
            title: 'Marketplace Messenger',
            type: 'Software - Java',
            description: 'Team project: a concurrent messaging program with a JavaFX GUI. Developed program architecture and managed file/server I/O using Agile principles.',
            techStack: ['Java', 'JavaFX', 'Agile', 'Git'],
            imageUrl: 'assets/images/messenger.jpg',
            imageIcon: '💬',
            fullDescription: 'Team project focused on building a concurrent messaging system with JavaFX GUI. Responsibilities included developing the program architecture and managing file/server I/O operations using Agile development principles.',
            blogUrl: 'blog/marketplaceMessenger.md'
        },
        {
            title: 'Beyond the Basics: Fantasy Football eBook',
            type: 'Design/Marketing',
            description: 'Created, marketed, and sold a 30-page fantasy football eBook. Achieved a 30% conversion rate from Facebook ads, using Final Cut Pro for marketing videos.',
            techStack: ['Digital Publishing', 'Facebook Ads', 'Final Cut Pro', 'Marketing'],
            imageUrl: 'assets/images/fantasy.jpg',
            imageIcon: '🏈',
            fullDescription: 'Created and marketed a 30-page fantasy football strategy eBook. Successfully achieved a 30% conversion rate from targeted Facebook advertising campaigns, utilizing Final Cut Pro for creating engaging marketing videos.',
            blogUrl: 'blog/beyondTheBasics.md'
        }
    ],

    // ========== SKILLS & CERTIFICATIONS ==========
    skills: [
        {
            category: 'Technical & Programming',
            items: ['Python', 'Vibe-coding', 'HTML', 'SQL', 'Supabase'],
            progress: 90
        },
        {
            category: 'APIs & AI Tools',
            items: ['Gemini API', 'ChatGPT API', 'Google Maps API', 'AI Tooling'],
            progress: 85
        },
        {
            category: 'Data & Analytics',
            items: ['Tableau', 'Microsoft Excel', 'Data Visualization', 'Data Analysis'],
            progress: 88
        },
        {
            category: 'Business & Strategy',
            items: ['Agile Project Management', 'Market Research', 'Economic Impact Analysis', 'Commercialization Strategy', 'Digital Marketing'],
            progress: 82
        },
        {
            category: 'Creative & Languages',
            items: ['Final Cut Pro', 'UI/UX Design (Conceptual)', 'Spanish (A2 Level - learning!)'],
            progress: 70
        }
    ],

    certifications: [
        {
            name: 'Atlassian Agile Project Management Professional Certificate',
            hasEasterEgg: true
        },
        {
            name: 'Google Fundamentals of Digital Marketing Certificate'
        },
        {
            name: 'EBEC Python Certificate'
        }
    ],

    // ========== AWARDS ==========
    awards: [
        {
            rank: '1st',
            title: 'Ascend Case Competition',
            description: 'Coffee shop business plan, analyzed 100+ survey responses.'
        },
        {
            rank: '2nd',
            title: 'NSSE Endress Hauser Case Competition',
            description: 'Training plan for new flow control devices.'
        },
        {
            rank: '2nd',
            title: 'Wabash Larsen Case Competition',
            description: 'Shipping container strategy for 5-year revenue doubling.'
        },
        {
            rank: 'Part.',
            title: 'Wisconsin Invitational Consulting Case Competition',
            description: 'Designed EV Class 8 integration plan.'
        }
    ],

    // ========== LANGUAGE WIDGET PHRASES ==========
    languagePhrases: [
        { spanish: 'La estrategia del mercado', english: 'Market strategy' },
        { spanish: 'Análisis de datos', english: 'Data analysis' },
        { spanish: 'Gestión de proyectos', english: 'Project management' },
        { spanish: 'Inteligencia artificial', english: 'Artificial intelligence' },
        { spanish: 'Desarrollo de software', english: 'Software development' },
        { spanish: 'Investigación de mercado', english: 'Market research' },
        { spanish: 'Optimización de procesos', english: 'Process optimization' },
        { spanish: 'Aprendizaje continuo', english: 'Continuous learning' }
    ],

    // ========== LANGUAGE QUIZ QUESTIONS ==========
    quizQuestions: [
        {
            question: '¿Qué significa "La estrategia"?',
            options: ['The strategy', 'The structure', 'The student', 'The system'],
            correct: 0
        },
        {
            question: '¿Qué significa "Análisis de datos"?',
            options: ['Data entry', 'Data analysis', 'Data storage', 'Data backup'],
            correct: 1
        },
        {
            question: '¿Qué significa "Gestión de proyectos"?',
            options: ['Project funding', 'Project management', 'Project planning', 'Project testing'],
            correct: 1
        },
        {
            question: '¿Qué significa "Inteligencia artificial"?',
            options: ['Internet access', 'Artificial intelligence', 'Information architecture', 'Interactive application'],
            correct: 1
        },
        {
            question: '¿Qué significa "Aprendizaje continuo"?',
            options: ['Continuous learning', 'Complete learning', 'Core learning', 'Casual learning'],
            correct: 0
        }
    ],

    // ========== EASTER EGGS ==========
    easterEggs: {
        purdueMottoText: 'Boiler Up.',
        aiQuote: '"The beautiful thing about learning is that no one can take it away from you." – B.B. King',
        terminalCommands: {
            whoami: 'Purdue University Student | Business Analytics & Information Management\nBuilder. Strategist. Learner.',
            list_projects: 'Production Models:\n- ApeX Student Project Hub\n- Class 8 Truck Trip Simulator\n- MEBA LiDAR Backpack Commercialization\n- Marketplace Messenger\n- Beyond the Basics: Fantasy Football eBook',
            strategy_pipeline: `GTM Strategy Pipeline:

1. IDENTIFY PROBLEM
   └─> Market Research

2. DEVELOP SOLUTION
   └─> Build MVP
   └─> Test with Users

3. VALIDATE BUSINESS MODEL
   └─> Pricing Strategy
   └─> Customer Segments

4. EXECUTE & ITERATE
   └─> Deploy
   └─> Measure
   └─> Refine`,
            help: 'Available commands:\n- whoami\n- list_projects\n- strategy_pipeline\n- snake (play Snake game)\n- tictactoe (play Tic-Tac-Toe)\n- help\n- clear'
        }
    }
};

// ========== CONTENT LOADER ==========
// This function automatically loads content into the HTML
document.addEventListener('DOMContentLoaded', function () {
    loadContent();
});

function loadContent() {
    // Load Profile Data
    const profileName = document.getElementById('profile-name');
    const profileBio = document.getElementById('profile-bio');
    if (profileName && SITE_CONFIG.profileName) {
        profileName.textContent = SITE_CONFIG.profileName;
    }
    if (profileBio && SITE_CONFIG.profileBio) {
        profileBio.textContent = SITE_CONFIG.profileBio;
    }

    // Load About Text
    const aboutTextElement = document.getElementById('about-text');
    if (aboutTextElement) {
        aboutTextElement.textContent = SITE_CONFIG.aboutText;
    }

    // Load Experience Timeline (Compact Expandable Layout)
    const timelineElement = document.getElementById('experience-timeline');
    if (timelineElement) {
        SITE_CONFIG.experience.forEach(exp => {
            const experienceItem = document.createElement('div');
            experienceItem.className = 'experience-item';

            const achievementsList = exp.achievements.map(achievement =>
                `<li>${achievement}</li>`
            ).join('');

            const companyClass = exp.isPurdue ? ' purdue-hover' : '';
            const dataAttr = exp.isMadrid ? ' data-madrid="true"' : '';

            experienceItem.innerHTML = `
                <div class="experience-header">
                    <div class="experience-header-left">
                        <h3 class="experience-title">${exp.title}</h3>
                        <div class="experience-company${companyClass}"${dataAttr}>${exp.company}</div>
                    </div>
                    <div class="experience-header-right">
                        <div class="experience-date">${exp.date}</div>
                        <div class="expand-icon">▼</div>
                    </div>
                </div>
                <div class="experience-details">
                    <ul class="experience-achievements">
                        ${achievementsList}
                    </ul>
                </div>
            `;
            timelineElement.appendChild(experienceItem);
        });
    }

    // Load Projects
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        SITE_CONFIG.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.dataset.projectIndex = index;

            const techTags = project.techStack.map(tech =>
                `<span class="tech-tag">${tech}</span>`
            ).join('');

            projectCard.innerHTML = `
                <div class="project-image lazy-load" data-src="${project.imageUrl}">
                    <span style="font-size: 4rem;">${project.imageIcon}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-type">${project.type}</div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        <div class="tech-label">TECH STACK:</div>
                        <div class="tech-stack">${techTags}</div>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }

    // Load Skills (Compact Layout)
    const skillsTechnical = document.getElementById('skills-technical');
    if (skillsTechnical) {
        SITE_CONFIG.skills.forEach(skillCategory => {
            const skillItems = skillCategory.items.map(skill => {
                const isVibeCoding = skill === 'Vibe-coding';
                const vibeBox = isVibeCoding ? `
                    <div class="vibe-box">
# Python
def hello():
    return "AI"

-- SQL
SELECT * FROM ideas

<!-- HTML -->
<div>Build</div>
                    </div>
                ` : '';
                return `<span class="skill-tag${isVibeCoding ? ' vibe-coding' : ''}">${skill}${vibeBox}</span>`;
            }).join('');

            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-group';
            categoryDiv.innerHTML = `
                <h4 class="skill-group-title">${skillCategory.category}</h4>
                <div class="skill-tags">${skillItems}</div>
            `;
            skillsTechnical.appendChild(categoryDiv);
        });
    }

    // Load Skills (OLD FORMAT - for backward compatibility)
    const skillsContent = document.getElementById('skills-content');
    if (skillsContent) {
        SITE_CONFIG.skills.forEach(skillCategory => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';

            const skillItems = skillCategory.items.map(skill => {
                const isVibeCoding = skill === 'Vibe-coding';
                const vibeBox = isVibeCoding ? `
                    <div class="vibe-box">
# Python
def hello():
    return "AI"

-- SQL
SELECT * FROM ideas

<!-- HTML -->
<div>Build</div>
                    </div>
                ` : '';
                return `<div class="skill-item${isVibeCoding ? ' vibe-coding' : ''}">${skill}${vibeBox}</div>`;
            }).join('');

            categoryDiv.innerHTML = `
                <h3 class="skill-category-title">${skillCategory.category}</h3>
                <div class="skill-items">${skillItems}</div>
                <div class="skill-progress">
                    <div class="progress-label">Proficiency: ${skillCategory.progress}%</div>
                    <div class="progress-bar" data-progress="${skillCategory.progress}">
                        <div class="progress-fill" style="--progress-width: ${skillCategory.progress}%"></div>
                    </div>
                </div>
            `;
            skillsContent.appendChild(categoryDiv);
        });

        // Add certifications
        const certsDiv = document.createElement('div');
        certsDiv.className = 'skill-category';
        const certsList = SITE_CONFIG.certifications.map(cert => {
            const className = cert.hasEasterEgg ? ' certification-name' : '';
            const dataAttr = cert.hasEasterEgg ? ' data-easter-egg="true"' : '';
            return `<li class="certification-item"><span class="${className}"${dataAttr}>${cert.name}</span></li>`;
        }).join('');

        certsDiv.innerHTML = `
            <h3 class="skill-category-title">Certifications</h3>
            <ul class="certifications-list">${certsList}</ul>
        `;
        skillsContent.appendChild(certsDiv);
    }

    // Load Certifications (Compact Layout)
    const certificationsList = document.getElementById('certifications-list');
    if (certificationsList) {
        SITE_CONFIG.certifications.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.className = 'cert-item';
            const className = cert.hasEasterEgg ? ' certification-name' : '';
            const dataAttr = cert.hasEasterEgg ? ' data-easter-egg="true"' : '';
            certItem.innerHTML = `<span class="${className}"${dataAttr}>✓ ${cert.name}</span>`;
            certificationsList.appendChild(certItem);
        });
    }

    // Load Awards (Compact Layout)
    const awardsList = document.getElementById('awards-list');
    if (awardsList) {
        SITE_CONFIG.awards.forEach(award => {
            const awardItem = document.createElement('div');
            awardItem.className = 'award-item-compact';
            awardItem.innerHTML = `
                <span class="award-rank-compact">${award.rank}</span>
                <span class="award-title-compact">${award.title}</span>
            `;
            awardsList.appendChild(awardItem);
        });
    }

    // Load Contact Links
    const linkedinLink = document.getElementById('linkedin-link');
    if (linkedinLink) {
        linkedinLink.href = SITE_CONFIG.linkedinUrl;
    }

    const apexLink = document.getElementById('apex-link');
    if (apexLink) {
        apexLink.href = SITE_CONFIG.apexUrl;
    }

    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Export for use in script.js
window.SITE_CONFIG = SITE_CONFIG;
