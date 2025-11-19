# Website Editing Guide

Welcome! This guide will help you easily update and maintain your personal website. Everything is designed to be simple and straightforward.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Updating Content](#updating-content)
3. [Adding Images and Videos](#adding-images-and-videos)
4. [Configuring the Contact Form](#configuring-the-contact-form)
5. [Adding New Projects](#adding-new-projects)
6. [Updating Experience](#updating-experience)
7. [Modifying Skills and Awards](#modifying-skills-and-awards)
8. [Customizing Colors and Theme](#customizing-colors-and-theme)
9. [Deploying to Cloudflare](#deploying-to-cloudflare)
10. [Troubleshooting](#troubleshooting)

---

## Quick Start

Your website consists of these main files:

- **`index.html`** - The main structure and content
- **`styles.css`** - All styling and visual design
- **`script.js`** - Interactive features and animations
- **`config.js`** - Easy-to-edit configuration (start here!)

**Most Common Edits**: You'll primarily edit `config.js` and `index.html`.

---

## Updating Content

### Step 1: Edit the Configuration File

Open `config.js` and update the following:

```javascript
// ADD YOUR FORMSPREE ENDPOINT
formspreeEndpoint: 'https://formspree.io/f/YOUR_KEY_HERE',

// UPDATE PROJECT LINKS
projectDemoUrls: {
    apex: 'https://your-actual-apex-url.com',
    truck: 'https://your-truck-demo.com',
},

// UPDATE COMPANY LINKS (if needed)
companyUrls: {
    crowe: 'https://www.crowe.com/',
    // Add more companies as needed
}
```

### Step 2: Edit Text Content in HTML

Open `index.html` and find the section you want to edit:

#### Updating the Hero Section
Find the `<section id="hero">` tag and edit:
```html
<h1 class="hero-title">
    <span class="typing-text">Your new headline here</span>
</h1>
<p class="hero-subtitle">Your new subtitle</p>
```

#### Updating About Section
Find `<section id="about">` and edit the paragraphs:
```html
<p>Your new about text here...</p>
```

#### Updating Contact Information
Find `<section id="contact">` to change contact text.

---

## Adding Images and Videos

### Organizing Your Media

1. **Create folders** (if they don't exist):
   ```
   /images/
   /images/projects/
   /videos/projects/
   ```

2. **Name your files** clearly:
   - Profile photo: `profile.jpg`
   - Project images: `apex.jpg`, `truck-simulator.jpg`, etc.
   - Videos: `apex-demo.mp4`, `truck-demo.mp4`, etc.

### Adding a Profile Photo

1. Add your photo to `/images/profile.jpg`
2. Update `config.js`:
   ```javascript
   images: {
       profile: 'images/profile.jpg',
   }
   ```

### Adding Project Images

1. Add your image to `/images/projects/your-project.jpg`
2. Update the project in `index.html`:
   ```html
   <img src="" alt="Project Name" class="project-image lazy-image"
        data-src="images/projects/your-project.jpg">
   ```

### Adding Project Videos

1. Add your video to `/videos/projects/your-demo.mp4`
2. Update the project in `index.html`:
   ```html
   <video class="project-video lazy-video"
          data-src="videos/projects/your-demo.mp4"
          loop muted playsinline></video>
   ```

**Video Tips**:
- Keep videos under 10MB for fast loading
- Use MP4 format
- Keep videos short (10-30 seconds)
- Videos will auto-play on hover

---

## Configuring the Contact Form

### Get Your Formspree API Key

1. Go to [formspree.io](https://formspree.io/)
2. Create a free account
3. Click "New Form"
4. Name your form (e.g., "Portfolio Contact")
5. Copy the form endpoint URL (looks like: `https://formspree.io/f/xvoeabcd`)

### Add the Key to Your Website

1. Open `config.js`
2. Find `formspreeEndpoint`
3. Replace `'YOUR_FORMSPREE_ENDPOINT_HERE'` with your actual endpoint:
   ```javascript
   formspreeEndpoint: 'https://formspree.io/f/xvoeabcd',
   ```
4. Save the file

**That's it!** Your contact form will now send messages to your email.

---

## Adding New Projects

### Step 1: Add Project HTML

Open `index.html` and find the `<div class="projects-grid">` section. Copy an existing project card and modify it:

```html
<div class="project-card" data-lazy>
    <div class="project-image-wrapper">
        <img src="" alt="Your Project Name" class="project-image lazy-image"
             data-src="images/projects/your-project.jpg">
        <div class="image-placeholder">Project Image</div>
        <!-- Optional: Add video -->
        <video class="project-video lazy-video"
               data-src="videos/projects/your-demo.mp4"
               loop muted playsinline></video>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <span class="project-category">Software</span>
        <p class="project-description">Brief description of your project.</p>

        <div class="project-details">
            <p><strong>The Build:</strong> How you built it...</p>
            <p><strong>Key Features:</strong> Main features...</p>
        </div>

        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">JavaScript</span>
            <!-- Add more tech tags -->
        </div>

        <div class="project-links">
            <a href="#" class="project-link" data-project-demo="yourproject">Demo</a>
            <a href="blog/your-blog.md" class="project-link">Reflection Blog</a>
        </div>
    </div>
</div>
```

### Step 2: Add Project Links to Config

Open `config.js` and add your project:

```javascript
projectDemoUrls: {
    apex: 'https://your-apex-demo.com',
    yourproject: 'https://your-new-project-demo.com', // ADD THIS
},
```

---

## Updating Experience

### Adding a New Job/Experience

Find the `<div class="timeline">` section in `index.html` and add:

```html
<div class="experience-item" data-lazy>
    <div class="experience-header">
        <h3 class="experience-title">Your Job Title</h3>
        <span class="experience-company">Company Name</span>
    </div>
    <div class="experience-meta">
        <span class="experience-date">Start Date - End Date</span>
        <a href="#" class="experience-link" data-company-url="companykey">Website</a>
    </div>
    <ul class="experience-details">
        <li>First accomplishment or responsibility</li>
        <li>Second accomplishment or responsibility</li>
        <li>Third accomplishment or responsibility</li>
    </ul>
</div>
```

Then add the company URL to `config.js`:

```javascript
companyUrls: {
    crowe: 'https://www.crowe.com/',
    companykey: 'https://www.your-company.com/', // ADD THIS
}
```

---

## Modifying Skills and Awards

### Adding New Skills

Find the `<div class="skills-grid">` section and add skills to existing categories:

```html
<div class="skill-tags">
    <span class="skill-tag">Python</span>
    <span class="skill-tag">Your New Skill</span> <!-- ADD THIS -->
</div>
```

### Adding a New Skill Category

```html
<div class="skill-category" data-lazy>
    <h3 class="skill-category-title">New Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### Adding New Awards

Find the `<div class="awards-grid">` section:

```html
<div class="award-card">
    <div class="award-badge">🏆</div>
    <div class="award-title">1st Place</div>
    <div class="award-competition">Competition Name</div>
    <p class="award-description">Brief description of the achievement</p>
</div>
```

---

## Customizing Colors and Theme

### Changing Accent Colors

Open `styles.css` and find the `:root` section:

```css
:root {
    --accent-color: #0066ff; /* Change this for light mode */
}

[data-theme="dark"] {
    --accent-color: #00ff88; /* Change this for dark mode */
}
```

**Popular color options**:
- Electric Blue: `#0066ff`
- Neon Green: `#00ff88`
- Purple: `#8b5cf6`
- Orange: `#ff6b35`
- Cyan: `#00d4ff`

### Changing Default Theme

Open `config.js`:

```javascript
theme: {
    defaultTheme: 'dark', // Change to 'light' for light mode default
}
```

---

## Deploying to Cloudflare Pages

### Prerequisites

1. A GitHub account
2. A Cloudflare account (free)
3. Your code pushed to a GitHub repository

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

### Step 2: Deploy on Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **"Pages"** in the sidebar
3. Click **"Create a project"**
4. Click **"Connect to Git"**
5. Authorize Cloudflare to access your GitHub
6. Select your repository
7. Configure the build:
   - **Project name**: `your-website-name`
   - **Production branch**: `main`
   - **Build command**: Leave empty (not needed for static sites)
   - **Build output directory**: `/`
8. Click **"Save and Deploy"**

### Step 3: Wait for Deployment

- Cloudflare will build and deploy your site
- You'll get a URL like: `https://your-website-name.pages.dev`

### Step 4: (Optional) Add Custom Domain

1. In Cloudflare Pages, go to **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter your domain (e.g., `yourname.com`)
4. Follow the DNS setup instructions

### Auto-Deployments

Every time you push to your GitHub repository, Cloudflare will automatically rebuild and deploy your site!

```bash
# Make changes to your files
git add .
git commit -m "Updated project section"
git push origin main
# Cloudflare automatically deploys!
```

---

## Troubleshooting

### Contact Form Not Working

**Issue**: Form doesn't send messages

**Solution**:
1. Check that you've added your Formspree endpoint to `config.js`
2. Make sure the endpoint URL is correct (starts with `https://formspree.io/f/`)
3. Test your form on Formspree's dashboard

### Images Not Loading

**Issue**: Images show placeholder instead of actual images

**Solutions**:
1. Check that image files are in the correct folder (`/images/` or `/images/projects/`)
2. Verify the file names match exactly (case-sensitive)
3. Make sure the `data-src` attribute in HTML matches the file path
4. Check file formats (use `.jpg`, `.png`, or `.webp`)

### Videos Not Playing

**Issue**: Videos don't appear or play

**Solutions**:
1. Verify video is in MP4 format
2. Check file size (keep under 10MB)
3. Ensure the `data-src` path is correct
4. Videos only auto-play on hover over the project card

### Dark/Light Mode Not Working

**Issue**: Theme toggle doesn't switch modes

**Solution**:
1. Make sure the theme toggle button exists in `index.html`
2. Check browser console for JavaScript errors
3. Clear browser cache and reload

### Website Not Deploying on Cloudflare

**Issue**: Deployment fails or site doesn't update

**Solutions**:
1. Check build logs in Cloudflare Pages dashboard
2. Ensure all files are committed and pushed to GitHub
3. Verify branch name matches production branch in Cloudflare settings
4. Try triggering a manual retry in Cloudflare dashboard

### Lazy Loading Not Working

**Issue**: Images/sections don't animate in

**Solution**:
1. Check browser console for JavaScript errors
2. Ensure `script.js` is properly loaded
3. Verify elements have the `data-lazy` attribute
4. Make sure JavaScript is enabled in browser

---

## Advanced Tips

### Optimizing Images

**Before adding images**:
1. Resize images to appropriate dimensions:
   - Profile: 600x600px
   - Projects: 1200x800px
2. Compress images using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
3. Use WebP format for better compression (optional)

### Optimizing Videos

1. Keep videos short (10-30 seconds)
2. Reduce resolution (720p is usually enough)
3. Compress videos using:
   - HandBrake
   - Adobe Media Encoder
   - Online tools like CloudConvert

### SEO Optimization

Edit the `<head>` section in `index.html`:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your compelling description">
<meta name="keywords" content="your, relevant, keywords">
```

Update `config.js`:

```javascript
site: {
    title: 'Your Name | Your Title',
    description: 'Your description',
    keywords: 'your, keywords'
}
```

---

## Need Help?

If you run into issues:

1. Check the browser console (F12 → Console tab) for errors
2. Verify all file paths are correct
3. Make sure all files are saved
4. Clear browser cache and reload
5. Check that `config.js` is properly formatted (no missing commas, quotes)

---

## Regular Maintenance Checklist

**Monthly**:
- [ ] Update experience section with new achievements
- [ ] Add new projects
- [ ] Update stats in About section
- [ ] Check all external links work

**When Adding Projects**:
- [ ] Add project HTML to `index.html`
- [ ] Add project images/videos
- [ ] Update `config.js` with project URLs
- [ ] Write or update blog post in `/blog/`
- [ ] Test project links
- [ ] Commit and push to GitHub

**When Changing Jobs**:
- [ ] Add new experience item
- [ ] Update company URL in `config.js`
- [ ] Update hero section if needed

---

## File Structure Reference

```
your-website/
├── index.html          # Main HTML file - edit content here
├── styles.css          # All styles - edit colors/layout here
├── script.js           # Interactive features - usually don't edit
├── config.js           # Easy configuration - edit links/API keys here
├── EDIT_GUIDE.md       # This guide!
├── README.md           # Project overview
├── blog/               # Blog posts (markdown files)
│   ├── ApeX.md
│   ├── truckSimulator.md
│   └── ...
├── images/             # All images
│   ├── profile.jpg
│   └── projects/
│       ├── apex.jpg
│       ├── truck-simulator.jpg
│       └── ...
└── videos/             # All videos
    └── projects/
        ├── apex-demo.mp4
        └── ...
```

---

**Happy editing! 🚀**

Your website is designed to grow with you. Don't hesitate to experiment and make it your own!
