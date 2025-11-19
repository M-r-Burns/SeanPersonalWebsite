# Website Editing Guide

Welcome to your personal website! This guide will help you easily update and maintain your site, even if you're not a developer.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Editing Content](#editing-content)
3. [Adding Images and Videos](#adding-images-and-videos)
4. [Setting Up Formspree Contact Form](#setting-up-formspree)
5. [Customizing Colors and Styles](#customizing-colors)
6. [Adding New Projects](#adding-new-projects)
7. [Deploying to Cloudflare Pages](#deploying-to-cloudflare)
8. [Advanced Customization](#advanced-customization)
9. [Troubleshooting](#troubleshooting)

---

## Quick Start

Your website consists of these main files:

```
SeanPersonalWebsite/
├── index.html          # Main website structure (rarely needs editing)
├── styles.css          # All styling (rarely needs editing)
├── script.js           # Interactive features (rarely needs editing)
├── config.js           # ⭐ EDIT THIS for most changes!
├── assets/
│   ├── images/        # Put your photos here
│   ├── videos/        # Put your videos here
│   └── icons/         # Put icons/logos here
├── blog/              # Your existing blog posts
└── EDITING_GUIDE.md   # This file
```

**Most of your edits will happen in `config.js` and adding files to the `assets/` folder!**

---

## Editing Content

### Method 1: Using config.js (Easiest)

Open `config.js` in any text editor and look for the sections you want to edit:

#### Personal Information
```javascript
const personalInfo = {
    name: 'Elijah Burns',
    title: 'Purdue University Student',
    location: 'Indianapolis, IN',
    linkedin: 'https://linkedin.com/in/elijb',
    // ... etc
};
```

#### Statistics
```javascript
stats: {
    connections: '84+',
    projects: '15+',
    lebronThoughts: '∞'
}
```

#### Project Links
```javascript
const projectLinks = {
    apex: {
        demo: 'https://your-apex-demo-url.com',
        blog: 'blog/ApeX.md'
    },
    // ... add more
};
```

### Method 2: Editing HTML Directly

If you need to change the actual content (text in sections), open `index.html`:

1. Find the section you want to edit (use Ctrl+F / Cmd+F to search)
2. Look for sections like `<!-- Hero Section -->`, `<!-- About Section -->`, etc.
3. Edit the text between the HTML tags:

```html
<h1 class="hero-title">
    Your new title here
</h1>
```

**⚠️ Important:** Don't delete any HTML tags (things in `< >`), only edit the text between them!

---

## Adding Images and Videos

### Step 1: Prepare Your Media

**Image Requirements:**
- Profile picture: 800x800px, JPG or PNG
- Project images: 1200x800px (landscape), JPG or PNG
- Keep file sizes under 1MB for fast loading

**Video Requirements:**
- Format: MP4 or WebM
- Keep under 10MB for web performance
- Consider using YouTube/Vimeo and embedding instead

### Step 2: Add Files to Assets Folder

1. Place your images in `assets/images/`
2. Place your videos in `assets/videos/`
3. Use descriptive names: `profile.jpg`, `apex-demo.jpg`, `truck-sim-video.mp4`

### Step 3: Link Images in HTML

Find the placeholder you want to replace in `index.html`:

**Before:**
```html
<div class="media-placeholder profile-picture">
    <div class="placeholder-icon">👤</div>
    <p class="placeholder-text">Profile Picture</p>
</div>
```

**After:**
```html
<img src="assets/images/profile.jpg"
     alt="Elijah Burns"
     class="profile-picture"
     data-src="assets/images/profile.jpg">
```

**For Lazy Loading (Recommended):**
Use `data-src` instead of `src` for images that load later:

```html
<img data-src="assets/images/project-screenshot.jpg"
     alt="Project Screenshot"
     class="project-image">
```

### Step 4: Add Project Images

For each project card, replace the placeholder:

```html
<!-- Find this -->
<div class="media-placeholder project-image">
    <div class="placeholder-icon">🎯</div>
</div>

<!-- Replace with -->
<img data-src="assets/images/apex-screenshot.jpg"
     alt="ApeX Project Screenshot"
     class="project-image"
     loading="lazy">
```

### Adding Videos

```html
<video controls
       class="project-video"
       data-src="assets/videos/demo.mp4">
    <source src="assets/videos/demo.mp4" type="video/mp4">
    Your browser doesn't support video.
</video>
```

**Or embed YouTube:**
```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        frameborder="0"
        allowfullscreen>
</iframe>
```

---

## Setting Up Formspree

Your contact form needs Formspree to work. Here's how to set it up:

### Step 1: Create Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Click "New Form"
4. Give it a name (e.g., "Portfolio Contact Form")

### Step 2: Get Your Endpoint

1. After creating the form, copy your form's endpoint URL
2. It will look like: `https://formspree.io/f/xyzabc123`

### Step 3: Add to config.js

Open `config.js` and replace this line:

```javascript
window.FORMSPREE_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE';
```

With your actual endpoint:

```javascript
window.FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabc123';
```

### Step 4: Test It!

1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email for the message

**Note:** The first time someone submits, Formspree will send you a confirmation email.

---

## Customizing Colors

### Change the Accent Color

Open `config.js` and find this section:

```javascript
const colorScheme = {
    // accent: '#00C896',        // Teal (default)
    // accentAlt: '#007AFF',     // Electric Blue
};
```

**To change to blue:**
```javascript
const colorScheme = {
    accent: '#007AFF',  // Remove the //
};
```

**Custom color:**
```javascript
const colorScheme = {
    accent: '#FF6B6B',  // Red
    // accent: '#4ECDC4',  // Turquoise
    // accent: '#95E1D3',  // Mint
};
```

### Change Background Colors

```javascript
const colorScheme = {
    background: '#18181B',    // Main background
    cardBackground: '#27272A' // Card background
};
```

---

## Adding New Projects

### Step 1: Prepare Your Content

Gather:
- Project title
- Short description
- Technology tags (HTML, Python, etc.)
- Project image/video
- Links (demo, blog post, etc.)

### Step 2: Add HTML in index.html

Find the `<!-- Projects Section -->` and copy an existing project card:

```html
<div class="project-card card fade-in-section">
    <div class="project-media">
        <img data-src="assets/images/new-project.jpg"
             alt="New Project"
             class="project-image">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your New Project</h3>
        <p class="project-subtitle">Software</p>
        <p class="project-description">
            A brief description of what this project does.
        </p>
        <div class="project-highlights">
            <p><strong>The Build:</strong> How you built it...</p>
            <p><strong>Key Features:</strong> What makes it special...</p>
        </div>
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">API</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link demo-link">
                <span class="link-text">Demo</span>
                <span class="link-arrow">→</span>
            </a>
        </div>
    </div>
</div>
```

### Step 3: Add Links to config.js

```javascript
const projectLinks = {
    // ... existing projects
    newProject: {
        demo: 'https://your-demo-url.com',
        blog: 'blog/new-project.md'
    }
};
```

---

## Deploying to Cloudflare Pages

Cloudflare Pages offers free hosting with great performance. Here's how to deploy:

### Step 1: Push to GitHub

1. Create a new repository on GitHub (if you haven't already)
2. Push your code:

```bash
git add .
git commit -m "Initial website commit"
git push origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click "Pages" in the sidebar
3. Click "Create a project"
4. Click "Connect to Git"
5. Select your GitHub repository
6. Configure build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
   - Click "Save and Deploy"

### Step 3: Configure Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Click "Custom domains"
3. Click "Set up a custom domain"
4. Follow the instructions to add your domain

### Step 4: Set Environment Variables (Optional)

If you want to hide your Formspree endpoint:

1. Go to Settings → Environment variables
2. Add: `FORMSPREE_ENDPOINT` with your endpoint URL
3. Update `config.js` to use it:

```javascript
window.FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || 'YOUR_FALLBACK';
```

### Your Site is Live! 🎉

Cloudflare will give you a URL like: `https://your-site.pages.dev`

Every time you push to GitHub, Cloudflare will automatically rebuild and deploy your site!

---

## Advanced Customization

### Disable Features

In `config.js`, toggle features on/off:

```javascript
const features = {
    particleBackground: true,    // Animated background
    systemStatus: true,          // Bottom-left widget
    strategyFlow: true,          // Right-side flow
    terminal: true,              // Terminal easter egg
    lazyLoading: true,          // Lazy load images
};
```

Set any to `false` to disable.

### Adjust Particle Speed

```javascript
const features = {
    particleSpeed: 0.5,  // 0.1 (slow) to 1.0 (fast)
    particleCount: 50,   // Or 'auto'
};
```

### Add Google Analytics

1. Get your GA4 Measurement ID from Google Analytics
2. Add to `config.js`:

```javascript
const analytics = {
    ga4MeasurementId: 'G-XXXXXXXXXX',
};
```

### Add Cloudflare Web Analytics

1. Get your token from Cloudflare dashboard
2. Add to `config.js`:

```javascript
const analytics = {
    cloudflareToken: 'your-token-here',
};
```

---

## Troubleshooting

### Images Not Loading

**Problem:** Images show as broken
**Solution:**
1. Check file paths are correct: `assets/images/filename.jpg`
2. Ensure file names match exactly (case-sensitive!)
3. Check file permissions
4. Try refreshing with Ctrl+Shift+R (hard refresh)

### Contact Form Not Working

**Problem:** Form doesn't send
**Solution:**
1. Check you've added your Formspree endpoint in `config.js`
2. Make sure endpoint URL is correct
3. Check browser console for errors (F12 → Console)
4. Verify Formspree account is active

### Animations Not Working

**Problem:** Particles or effects not showing
**Solution:**
1. Check `features` in `config.js` - are they enabled?
2. Clear browser cache
3. Check browser console for JavaScript errors
4. Try a different browser

### Colors Not Changing

**Problem:** Custom colors not applying
**Solution:**
1. Make sure you removed the `//` before the color line
2. Check color format is correct: `#RRGGBB`
3. Clear cache and hard refresh
4. Check `styles.css` hasn't overridden the variable

### Slow Loading

**Problem:** Website loads slowly
**Solution:**
1. Compress images (use [TinyPNG](https://tinypng.com/))
2. Enable lazy loading in `config.js`
3. Use Cloudflare Pages for CDN benefits
4. Convert large images to WebP format

### Layout Broken on Mobile

**Problem:** Site looks bad on phone
**Solution:**
1. The site is responsive by default
2. Test in Chrome DevTools mobile view
3. Don't modify CSS breakpoints unless you know what you're doing
4. Check images aren't too large (max-width should be 100%)

---

## File Structure Reference

```
SeanPersonalWebsite/
│
├── index.html              # Main page structure
├── styles.css              # All styling
├── script.js              # Interactivity
├── config.js              # ⭐ Your main editing file
├── EDITING_GUIDE.md       # This guide
│
├── assets/
│   ├── images/           # Your images
│   │   ├── profile.jpg
│   │   ├── apex-demo.jpg
│   │   ├── project-*.jpg
│   │   └── og-image.jpg  # For social media sharing
│   │
│   ├── videos/           # Your videos
│   │   └── demo.mp4
│   │
│   └── icons/            # Logos, favicon
│       └── favicon.svg
│
└── blog/                 # Your existing blog posts
    ├── ApeX.md
    ├── LiDARBackpack.md
    └── ...
```

---

## Quick Tips

1. **Always back up** before making major changes
2. **Test locally** before deploying (open index.html in browser)
3. **Use descriptive file names** for images: `project-name-screenshot.jpg`
4. **Optimize images** before uploading (compress to <1MB)
5. **Keep it simple** - don't over-customize unless needed
6. **Git commit often** - small commits are easier to undo

---

## Getting Help

### Browser Console (For debugging)

1. Press F12 to open Developer Tools
2. Click "Console" tab
3. Look for red errors - they tell you what's wrong

### Common Console Errors

- `Cannot read property...` → Check variable names in config.js
- `404 Not Found` → File path is wrong
- `Formspree endpoint not configured` → Add your endpoint to config.js

### Resources

- [Formspree Documentation](https://help.formspree.io/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS)

---

## Changelog Template

Keep track of changes you make:

```
## 2024-XX-XX
- Added new project: [Project Name]
- Updated profile picture
- Changed accent color to blue

## 2024-XX-XX
- Fixed contact form
- Added new blog post
```

---

## Next Steps

1. ✅ Add your Formspree endpoint
2. ✅ Upload profile picture
3. ✅ Add project images
4. ✅ Customize colors (optional)
5. ✅ Deploy to Cloudflare Pages
6. ✅ Add custom domain (optional)
7. ✅ Set up analytics (optional)

---

**Need more help?** Feel free to reach out or consult the documentation links above.

Good luck with your website! 🚀
