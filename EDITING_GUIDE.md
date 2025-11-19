# 📝 Website Editing Guide

Welcome to your personal website! This guide will help you easily update and maintain your site without needing to know HTML, CSS, or JavaScript.

## 🚀 Quick Start

All website content is controlled through **one main file**:

```
js/config.js
```

Simply edit this file to update your entire website!

---

## 📋 Table of Contents

1. [Basic Information](#1-basic-information)
2. [Hero Section](#2-hero-section)
3. [About Me](#3-about-me)
4. [Experience](#4-experience)
5. [Projects](#5-projects)
6. [Skills & Certifications](#6-skills--certifications)
7. [Awards](#7-awards)
8. [Contact Form](#8-contact-form)
9. [Adding Images & Videos](#9-adding-images--videos)
10. [Blog Posts](#10-blog-posts)
11. [Theme Customization](#11-theme-customization)
12. [Deployment](#12-deployment)

---

## 1. Basic Information

### Location in config.js:
```javascript
personal: {
  name: "Your Name",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/elijb",
  // ... etc
}
```

### What to edit:
- **name**: Your full name
- **email**: Your contact email
- **linkedin**: Your LinkedIn profile URL
- **apexLink**: Link to your ApeX or portfolio hub
- **location**: Your current location (e.g., "Indianapolis, IN")
- **university**: Your university name
- **degree**: Your degree program
- **profileImage**: Path to your profile photo (see [Adding Images](#9-adding-images--videos))

### Map Locations:
```javascript
locations: {
  purdue: { lat: 40.4237, lng: -86.9212, label: "Purdue University" },
  // Add more locations as needed
}
```

Update the coordinates and labels for the interactive map feature.

---

## 2. Hero Section

### Location in config.js:
```javascript
hero: {
  headline: "BRIDGING STRATEGY. EXECUTING CODE.",
  subheadline: "A.I. → G.T.M.",
  description: "Purdue University Student...",
  ctaText: "View Production Models",
  ctaLink: "#projects"
}
```

### What to edit:
- **headline**: Main headline text (shows up large on homepage)
- **subheadline**: Secondary headline (usually short, like "A.I. → G.T.M.")
- **description**: Brief description under the headline
- **ctaText**: Text on the main button
- **ctaLink**: Where the button goes (e.g., "#projects" for projects section)

---

## 3. About Me

### Location in config.js:
```javascript
about: {
  headline: "THE LEARNING ALGORITHM.",
  narrative: `Your full story here...`,
  metrics: [
    { value: "84+", label: "LinkedIn Connections" },
    // Add more metrics
  ],
  interests: [
    "Interest 1",
    "Interest 2"
  ]
}
```

### What to edit:

#### Narrative:
Replace the text between the backticks (\`) with your personal story. Use multiple paragraphs if needed.

#### Metrics:
Add or remove metric cards:
```javascript
{ value: "100+", label: "Projects Completed" },
```

#### Interests:
List your personal interests as an array:
```javascript
interests: [
  "AI and Machine Learning",
  "Fitness and Health",
  "Travel"
]
```

---

## 4. Experience

### Location in config.js:
```javascript
experience: [
  {
    role: "Software Intern",
    company: "Company Name",
    period: "Jun 2024 – Aug 2024",
    website: "https://company.com",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    mapHighlight: "north-america"
  },
  // Add more experiences
]
```

### What to edit:

#### Adding a new job:
Copy the entire block from `{` to `}` and paste it before the closing `]`. Update all fields.

#### Fields:
- **role**: Your job title
- **company**: Company name
- **period**: Date range (e.g., "Jan 2024 – May 2024")
- **website**: Company website URL (use "#" if none)
- **achievements**: Array of bullet points highlighting your work
- **mapHighlight**: Region to highlight on map hover
  - Options: `"north-america"`, `"europe"`, `"asia"`, `"global"`, or `null`

#### Study Abroad Special Feature:
For study abroad experiences, add:
```javascript
countries: ["ES", "IT", "DE", "FR"]  // Country codes
```
This enables the Easter egg that shows countries on hover!

---

## 5. Projects

### Location in config.js:
```javascript
projects: [
  {
    name: "Project Name",
    type: "Software",
    description: "Project description...",
    techStack: ["HTML", "JavaScript"],
    image: "assets/images/projects/project.jpg",
    video: "assets/videos/demo.mp4",
    blogPost: "blog/ProjectName.md",
    link: "https://project-url.com",
    mapRoute: "indianapolis"
  },
  // Add more projects
]
```

### What to edit:

#### Adding a new project:
Copy an existing project block and update all fields.

#### Fields:
- **name**: Project name
- **type**: Project type (e.g., "Software", "Design", "Strategy")
- **description**: Brief description of the project
- **techStack**: Array of technologies used (e.g., `["Python", "React"]`)
- **image**: Path to project image (see [Adding Images](#9-adding-images--videos))
- **video**: Path to demo video (optional)
- **blogPost**: Path to markdown blog post (optional)
- **link**: Live project URL (use "#" if none)
- **mapRoute**: For map animation (optional)

---

## 6. Skills & Certifications

### Location in config.js:
```javascript
skills: {
  "Category Name": [
    "Skill 1",
    "Skill 2"
  ],
  "Another Category": [
    "Skill A",
    "Skill B"
  ]
}
```

### What to edit:

#### Adding a new category:
```javascript
"New Category Name": [
  "Skill 1",
  "Skill 2",
  "Skill 3"
]
```

#### Certifications:
```javascript
certifications: [
  "Certification Name 1",
  "Certification Name 2"
]
```

Simply add or remove items from the array.

---

## 7. Awards

### Location in config.js:
```javascript
awards: [
  {
    place: "1st Place",
    name: "Competition Name",
    description: "Brief description"
  },
  // Add more awards
]
```

### What to edit:

#### Adding a new award:
Copy an existing award block and update:
- **place**: Placement (e.g., "1st Place", "2nd Place", "Participant")
- **name**: Award/competition name
- **description**: Brief description of what you did

---

## 8. Contact Form

### Setting up Formspree:

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Paste it in config.js:

```javascript
contact: {
  headline: "SET TRANSMISSION COORDINATES.",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
}
```

That's it! Your contact form will now work.

---

## 9. Adding Images & Videos

### Directory Structure:
```
assets/
├── images/
│   ├── profile/
│   │   └── profile.jpg         ← Your profile photo
│   └── projects/
│       ├── project1.jpg        ← Project images
│       └── project2.jpg
└── videos/
    ├── demo1.mp4               ← Project demo videos
    └── demo2.mp4
```

### Adding a Profile Photo:

1. Place your photo in `assets/images/profile/`
2. Update config.js:
```javascript
profileImage: "assets/images/profile/yourphoto.jpg"
```

### Adding Project Images:

1. Place your image in `assets/images/projects/`
2. Update the project in config.js:
```javascript
image: "assets/images/projects/yourproject.jpg"
```

### Adding Demo Videos:

1. Place your video in `assets/videos/`
2. Update the project in config.js:
```javascript
video: "assets/videos/yourvideo.mp4"
```

### Supported Formats:
- **Images**: JPG, PNG, WebP, SVG
- **Videos**: MP4, WebM

### Tips:
- Keep images under 2MB for fast loading
- Use descriptive filenames (e.g., `apex-project.jpg` not `image1.jpg`)
- Videos should be compressed (under 10MB recommended)

---

## 10. Blog Posts

### Creating a Blog Post:

1. Create a new markdown file in the `blog/` folder:
```
blog/MyNewProject.md
```

2. Write your content in markdown format:
```markdown
# My Project Name

## Overview
This is my project description...

## Key Features
- Feature 1
- Feature 2

## Technologies Used
- JavaScript
- Python

## Challenges
I faced several challenges...

## Conclusion
This project taught me...
```

3. Link it in config.js:
```javascript
blogPost: "blog/MyNewProject.md"
```

### Markdown Basics:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

[Link Text](https://url.com)

- Bullet point 1
- Bullet point 2
```

---

## 11. Theme Customization

### Location in config.js:
```javascript
theme: {
  colors: {
    primary: "#0a1929",        // Deep Navy
    secondary: "#1a3a52",      // Dark Teal
    accent: "#FFC107",         // Amber/Gold
    text: "#ffffff",           // White
    textSecondary: "#b0bec5"   // Light Gray
  }
}
```

### Changing Colors:

Simply update the hex color codes. Use a color picker tool online to find colors you like.

**Note**: Changing colors here will update CSS variables. For more advanced styling, edit `css/styles.css`.

---

## 12. Deployment

### Deploying to Cloudflare Pages:

1. **Prepare your repository:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Login to Cloudflare:**
   - Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign up or login

3. **Create a new project:**
   - Click "Pages" in the sidebar
   - Click "Create a project"
   - Connect your GitHub repository
   - Select your repository

4. **Configure build settings:**
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
   - Click "Save and Deploy"

5. **Done!** Your site will be live in a few minutes.

### Custom Domain (Optional):

1. In Cloudflare Pages, click "Custom domains"
2. Click "Set up a custom domain"
3. Follow the instructions to add your domain

---

## 🎨 Interactive Features

Your website includes several interactive features:

### 1. **Map Panning** (Hero Section)
Click the location buttons (Purdue, Indianapolis, Madrid) to pan the background map.

### 2. **Experience Highlighting**
Hover over experience cards to highlight regions on the map.

### 3. **Global Impact Metrics**
Metrics in the experience section are clickable and highlight regions.

### 4. **Language Toggle**
Click the Spanish flag in the footer to translate key sections.

### 5. **Project Routes**
Hover over projects to see animated routes on the map.

---

## 🥚 Easter Eggs

Your website has hidden Easter eggs for visitors to discover:

1. **Fitness Goal**: Click "ambitious, impactful work" in the About section
2. **Country Count**: Hover over "nine European countries" in Study Abroad
3. **Secret API Key**: Hover over "Gemini API" in Skills for 3 seconds
4. **Strategy Diagram**: Press `Ctrl+Alt+S` to see your GTM strategy

---

## 🔧 Troubleshooting

### Contact form not working?
- Make sure you've set up your Formspree account
- Check that `formspreeEndpoint` in config.js is correct
- Verify your Formspree form is active

### Images not showing?
- Check that the file path in config.js matches the actual file location
- Ensure image files are in the correct folder
- Check that filenames match exactly (case-sensitive)

### Map not appearing?
- Check browser console for errors (F12 > Console)
- Ensure `js/worldMap.js` is loaded
- Verify coordinates in config.js are valid

### Blog posts not loading?
- Ensure markdown files are in the `blog/` folder
- Check that the path in config.js matches the file location
- Verify the markdown file has content

---

## 📱 Mobile Responsiveness

Your website is fully mobile-responsive! The design automatically adapts to:
- Phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

Test on different devices to see the responsive design in action.

---

## 🚀 Performance Tips

1. **Optimize images** before uploading:
   - Use tools like [TinyPNG](https://tinypng.com) to compress images
   - Recommended: JPG for photos, PNG for graphics

2. **Keep videos short**:
   - Aim for 10-30 second demo clips
   - Compress with [HandBrake](https://handbrake.fr)

3. **Limit projects**:
   - Show your best 5-8 projects
   - Archive older projects by removing them from config.js

4. **Update regularly**:
   - Keep your experience and projects current
   - Remove outdated information

---

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [Formspree Documentation](https://help.formspree.io/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Color Picker Tool](https://htmlcolorcodes.com/color-picker/)

---

## 💡 Tips for Success

1. **Keep it updated**: Regularly update your projects and experience
2. **Tell your story**: Make your About section personal and authentic
3. **Show your work**: Add screenshots and demos to projects
4. **Write blog posts**: Document your journey and learnings
5. **Test everything**: Check all links and forms before deploying
6. **Get feedback**: Share with friends and ask for input

---

## 🆘 Need Help?

If you need additional help:

1. Check the browser console for errors (F12 > Console)
2. Review this guide for common solutions
3. Check that all file paths are correct
4. Ensure all required files are present

---

## 🎉 You're All Set!

You now have a fully functional, production-ready personal website with:

✅ Professional design with Global GTM Navigator theme
✅ Interactive world map background
✅ Lazy loading for optimal performance
✅ Mobile-responsive layout
✅ Working contact form
✅ Blog post integration
✅ Easter eggs for engagement
✅ Easy content management through config.js

**Good luck with your website!** 🚀
