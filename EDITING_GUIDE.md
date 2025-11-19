# Website Editing Guide 📝

Welcome to your AI-Powered Learning Studio website! This guide will help you easily update and maintain your personal website as you grow your portfolio and career.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Updating Personal Information](#updating-personal-information)
3. [Adding/Editing Projects](#addingediting-projects)
4. [Adding Blog Posts](#adding-blog-posts)
5. [Managing Images and Videos](#managing-images-and-videos)
6. [Contact Form Setup (Formspree)](#contact-form-setup-formspree)
7. [Customizing Colors and Styles](#customizing-colors-and-styles)
8. [Deploying to Cloudflare](#deploying-to-cloudflare)
9. [Easter Eggs and Interactive Features](#easter-eggs-and-interactive-features)
10. [Troubleshooting](#troubleshooting)

---

## Quick Start

Your website consists of three main files:

- **`index.html`** - The main structure of your website
- **`assets/css/styles.css`** - All styling and visual design
- **`assets/js/config.js`** - **← START HERE!** This is where you'll make most edits
- **`assets/js/main.js`** - Interactive features (rarely needs editing)

**Most updates can be done by simply editing `config.js`!**

---

## Updating Personal Information

### Step 1: Open `assets/js/config.js`

All your personal information is centralized in this file.

### Step 2: Update Your Details

```javascript
personal: {
    name: "Eli J",
    email: "your-email@example.com", // ← Change this
    location: "Indianapolis, IN",
    university: "Purdue University",
    degree: "B.S. in Business Analytics & Information Management",
    tagline: "BRIDGING STRATEGY. EXECUTING CODE. (A.I. → G.T.M.)"
}
```

### Step 3: Update Social Links

```javascript
links: {
    linkedin: "https://linkedin.com/in/elijb", // ← Your LinkedIn
    apexHub: "https://your-apex-url.com", // ← Your ApeX or portfolio URL
    github: "", // Optional
    twitter: "" // Optional
}
```

### Step 4: Update Metrics

```javascript
metrics: {
    linkedinConnections: 84, // ← Update as you grow!
    projectsCompleted: 15,
    lebronThoughts: "∞" // Keep it fun!
}
```

**Save the file, and your changes will appear automatically!**

---

## Adding/Editing Projects

Projects are displayed in the "Production Models" section.

### Method 1: Edit Existing Projects in HTML

Open `index.html` and find the project card you want to edit (search for `<!-- Project Card 1 - ApeX -->`):

```html
<div class="project-card glass-card" data-project="apex">
    <div class="project-image-container">
        <img src="assets/images/apex-thumbnail.jpg"
             alt="ApeX Student Project Hub"
             class="project-image lazy-load"
             data-src="assets/images/apex-thumbnail.jpg"
             loading="lazy">
        <div class="project-overlay">
            <a href="blog/ApeX.md" class="project-link" target="_blank">Read Full Story →</a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">ApeX Student Project Hub</h3>
        <p class="project-category">Software</p>
        <p class="project-description">
            Launched a public platform for university students to share apps...
        </p>
        <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <!-- Add more tech tags -->
        </div>
    </div>
</div>
```

### Method 2: Add a New Project

Copy an existing project card in `index.html` and update:

1. **Image path**: `src="assets/images/your-project-thumbnail.jpg"`
2. **Title**: `<h3 class="project-title">Your Project Name</h3>`
3. **Description**: Update the project description
4. **Tech tags**: Add/remove `<span class="tech-tag">Technology</span>`
5. **Blog link**: `href="blog/your-blog-post.md"`

**Pro Tip**: Place your project thumbnail in `assets/images/` first!

---

## Adding Blog Posts

All blog posts are stored in the `/blog/` directory as Markdown files.

### Creating a New Blog Post

1. **Create a new `.md` file** in the `/blog/` directory
   - Example: `blog/my-new-project.md`

2. **Add front matter** at the top:

```markdown
---
title: 'Your Project Title'
date: '2025-01-15'
excerpt: 'A brief description of your project'
imageUrl: '/images/your-thumbnail.png'
dataAiHint: 'Category/Type'
---

# Your Project Title

Start writing your blog post here...

## What I Learned

- Lesson 1
- Lesson 2

## Technical Details

Explain how you built it...
```

3. **Link it from your project card** in `index.html`:

```html
<a href="blog/my-new-project.md" class="project-link" target="_blank">Read Full Story →</a>
```

---

## Managing Images and Videos

### Directory Structure

```
assets/
├── images/
│   ├── profile.jpg              ← Your headshot/profile photo
│   ├── apex-thumbnail.jpg       ← Project thumbnails
│   ├── truck-simulator-thumbnail.jpg
│   └── favicon.png              ← Website icon
└── videos/
    ├── project-demo.mp4         ← Demo videos
    └── testimonial.mp4
```

### Adding Project Images

1. **Save your image** in `assets/images/`
2. **Recommended size**: 800x600px or 1200x800px
3. **Supported formats**: JPG, PNG, WebP (WebP is fastest!)

### Adding Project Videos

To add a video demonstration to a project:

1. **Save video** in `assets/videos/`
2. **Add video in project card**:

```html
<div class="project-card glass-card">
    <!-- After the image container, add: -->
    <div class="project-video-container">
        <video controls preload="none" poster="assets/images/video-poster.jpg">
            <source src="assets/videos/project-demo.mp4" type="video/mp4">
            Your browser does not support video playback.
        </video>
    </div>
    <!-- Rest of project content -->
</div>
```

### Optimizing Images

For best performance:

```bash
# Install imagemagick (if not already installed)
# Then optimize images:
convert original.jpg -resize 1200x800 -quality 85 optimized.jpg
```

Or use online tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/).

---

## Contact Form Setup (Formspree)

Your contact form uses Formspree to handle submissions without backend code.

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)

### Step 2: Update `config.js`

```javascript
formspree: {
    endpoint: "https://formspree.io/f/xyzabc123" // ← Paste your endpoint here
}
```

**That's it!** Your contact form will now work.

### Testing the Contact Form

1. Submit a test message through your website
2. Check your email for the notification
3. Verify the message appears in your Formspree dashboard

---

## Customizing Colors and Styles

### Changing the Color Scheme

Open `assets/css/styles.css` and modify the CSS variables at the top:

```css
:root {
    /* Colors */
    --primary-bg: #1a1a2e;           /* Main background */
    --secondary-bg: #16213e;         /* Secondary background */
    --gradient-start: #2d1b69;       /* Gradient start (purple) */
    --gradient-end: #1a1a2e;         /* Gradient end (dark) */
    --accent-neon: #39FF14;          /* Neon green accent */
    --text-white: #ffffff;           /* White text */
    --text-gray: #b8b8b8;            /* Gray text */
}
```

**Example: Change to blue accent**

```css
--accent-neon: #00D9FF; /* Neon cyan/blue */
```

### Changing Fonts

The site uses:
- **Plus Jakarta Sans** - Primary font
- **Fira Code** - Code/technical font

To change fonts:

1. Find new fonts at [Google Fonts](https://fonts.google.com/)
2. Update the font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@300;400;700&display=swap" rel="stylesheet">
```

3. Update the CSS variable:

```css
--font-primary: 'Your Font Name', sans-serif;
```

---

## Deploying to Cloudflare

### Option 1: Cloudflare Pages (Recommended)

1. **Create a Cloudflare account**: [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)

2. **Go to Pages**: Workers & Pages → Create Application → Pages → Connect to Git

3. **Connect your GitHub repository**:
   - Select your repository
   - Build settings: Leave blank (it's a static site)
   - Build output directory: `/`
   - Click "Save and Deploy"

4. **Your site is live!** Cloudflare will give you a URL like:
   - `your-site.pages.dev`

5. **Add custom domain** (optional):
   - Buy a domain from Cloudflare or elsewhere
   - In Cloudflare Pages, go to Custom Domains
   - Add your domain and follow DNS instructions

### Option 2: Cloudflare Workers

1. **Install Wrangler CLI**:

```bash
npm install -g wrangler
```

2. **Login to Cloudflare**:

```bash
wrangler login
```

3. **Create `wrangler.toml`** in your project root:

```toml
name = "eli-j-website"
type = "webpack"
account_id = "your-account-id"
workers_dev = true
route = ""
zone_id = ""

[site]
bucket = "./"
entry-point = "."
```

4. **Deploy**:

```bash
wrangler publish
```

### Updating Your Live Site

Every time you push to GitHub, Cloudflare Pages will automatically rebuild and deploy your site!

**Manual deployment**: Just push your changes to GitHub:

```bash
git add .
git commit -m "Updated projects section"
git push
```

---

## Easter Eggs and Interactive Features

Your website includes several fun interactive features!

### 1. Fitness Timer 🏋️

**How it works**: Click on "constantly iterating" in the About section to start a 30-second rest timer.

**Customizing**:

```javascript
// In config.js
animation: {
    fitnessTimerDuration: 30 // Change to any number of seconds
}
```

### 2. AI Learning Quotes 💡

**How it works**: Hover over "AI research initiative" for 2 seconds to see a random learning quote.

**Adding quotes**:

```javascript
// In config.js
learningQuotes: [
    {
        text: "Your inspiring quote here",
        author: "Author Name"
    },
    // Add more quotes
]
```

### 3. Purdue Boiler Up! ⚒️

**How it works**: Press `Ctrl+Alt+P` anywhere on the site to see a Purdue pride animation.

### 4. Console Message for Developers 👨‍💻

**How it works**: Open browser DevTools (F12) and check the console!

### 5. Spanish Word Widget 🌍

**How it works**: Displays a random Spanish word in the footer on each page load.

**Adding words**:

```javascript
// In config.js
spanishWords: [
    { word: "Aprender", translation: "(to learn)" },
    { word: "Crear", translation: "(to create)" },
    // Add more words
]
```

### 6. Dynamic Network Animations 🌐

**How it works**: Animated particle network in hero section and skill section.

**Customizing**:

```javascript
// In config.js
animation: {
    networkSpeed: 0.5,      // 0.1-2 (higher = faster)
    particleCount: 50       // 20-100 (more = denser)
}
```

### Disabling Features

Don't want a feature? Turn it off in `config.js`:

```javascript
features: {
    enableNetworkAnimation: false,  // Disable hero animation
    enableEasterEggs: false,        // Disable all easter eggs
    enableSpanishWidget: false      // Disable Spanish widget
}
```

---

## Troubleshooting

### Images Not Loading

**Problem**: Images show as broken links

**Solution**:
1. Check image path is correct: `assets/images/filename.jpg`
2. Verify image file exists in the folder
3. Check file extension matches (`.jpg` vs `.JPG`)

### Contact Form Not Working

**Problem**: Form submissions don't send

**Solution**:
1. Verify Formspree endpoint in `config.js`
2. Check your Formspree account is active
3. Look for errors in browser console (F12)

### Animations Not Working

**Problem**: Network animations or interactive features aren't working

**Solution**:
1. Check browser console (F12) for errors
2. Verify `config.js` is loaded (check in Sources tab)
3. Ensure features are enabled in `features` object

### Mobile Menu Not Opening

**Problem**: Hamburger menu doesn't work on mobile

**Solution**:
1. Clear browser cache
2. Check JavaScript is enabled
3. Look for errors in console (F12)

### Site Not Updating After Changes

**Problem**: Changes don't appear after editing files

**Solution**:
1. **Hard refresh**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. If deployed, wait 1-2 minutes for Cloudflare to rebuild

### Gradient Background Not Showing

**Problem**: Background is solid color instead of gradient

**Solution**:
1. Check CSS file loaded properly
2. Try different browser
3. Verify no CSS errors in console

---

## Performance Tips

### Optimize for Speed

1. **Compress images** before uploading (use TinyPNG or Squoosh)
2. **Use WebP format** for images when possible
3. **Keep videos under 10MB** or host on YouTube/Vimeo
4. **Enable lazy loading** (already configured!)

### SEO Best Practices

1. **Update meta tags** in `index.html`:

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="Your, Keywords, Here">
```

2. **Add alt text** to all images:

```html
<img src="..." alt="Descriptive text about the image">
```

3. **Use descriptive link text** instead of "Click here"

---

## Getting Help

### Useful Resources

- **HTML Reference**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS Guide**: [CSS-Tricks](https://css-tricks.com/)
- **JavaScript Help**: [JavaScript.info](https://javascript.info/)
- **Formspree Docs**: [https://help.formspree.io/](https://help.formspree.io/)
- **Cloudflare Pages**: [https://developers.cloudflare.com/pages/](https://developers.cloudflare.com/pages/)

### Common Questions

**Q: Can I add more sections?**
A: Yes! Copy an existing section in `index.html` and modify it.

**Q: How do I change the navigation menu?**
A: Edit the `<nav>` section in `index.html` (around line 30).

**Q: Can I use this website for commercial purposes?**
A: Yes, it's your personal website!

**Q: How do I add Google Analytics?**
A: Add your Google Analytics tracking code in the `<head>` section of `index.html`.

---

## Quick Reference: File Locations

| What You Want to Edit | File to Open |
|----------------------|--------------|
| Personal info, email, links | `assets/js/config.js` |
| Projects, experience, content | `index.html` |
| Colors, fonts, layout | `assets/css/styles.css` |
| Add new blog post | Create file in `/blog/` |
| Add project image | Save in `/assets/images/` |
| Add video | Save in `/assets/videos/` |
| Contact form endpoint | `assets/js/config.js` |
| Interactive features | `assets/js/main.js` (advanced) |

---

## Next Steps

1. ✅ Update your personal information in `config.js`
2. ✅ Set up Formspree for your contact form
3. ✅ Add your project images to `/assets/images/`
4. ✅ Deploy to Cloudflare Pages
5. ✅ Share your new website with the world!

---

**Remember**: The best way to learn is by doing. Don't be afraid to experiment with the code. You can always use Git to revert changes if something breaks!

Happy coding! 🚀
