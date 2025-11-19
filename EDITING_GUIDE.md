# 📝 Website Editing Guide

Welcome! This guide will help you easily update and maintain your personal website. The site is designed to be simple to edit, even if you're not a web developer.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Editing Contact Information](#editing-contact-information)
3. [Managing Projects](#managing-projects)
4. [Adding/Updating Blog Posts](#addingupdating-blog-posts)
5. [Updating Images](#updating-images)
6. [Configuring Formspree](#configuring-formspree)
7. [Customizing Features](#customizing-features)
8. [Deployment to Cloudflare](#deployment-to-cloudflare)
9. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

All the content you'll need to edit is in **one file**: `config.js`

This file controls:
- Contact information
- Projects
- System status console behavior
- Feature toggles
- Formspree integration

---

## 📧 Editing Contact Information

**File:** `config.js`

**Location:** Lines 10-15

```javascript
contact: {
    email: 'your.email@example.com',           // ← Change this to your email
    linkedin: 'https://linkedin.com/in/elijb', // ← Change to your LinkedIn URL
    apexLink: 'https://yourwebsite.com',       // ← Change to your projects link
    apexText: 'ApeX Platform'                  // ← Change the display text
}
```

**Steps:**
1. Open `config.js` in any text editor
2. Find the `contact:` section
3. Replace the values with your own information
4. Save the file
5. Refresh your browser to see changes

---

## 🎨 Managing Projects

**File:** `config.js`

**Location:** Lines 25-108 (projects array)

### Adding a New Project

Copy this template and add it to the `projects` array:

```javascript
{
    title: 'Your Project Name',
    description: 'A detailed description of your project. Explain what it does, why you built it, and what technologies you used.',
    techStack: ['Technology 1', 'Technology 2', 'Technology 3'],
    imageUrl: '/images/your-project-image.png',  // Optional
    blogPost: '/blog/your-blog-post.md',         // Optional
    demoUrl: 'https://your-demo-link.com',       // Optional
    githubUrl: 'https://github.com/you/project'  // Optional
}
```

### Editing an Existing Project

1. Open `config.js`
2. Find the project you want to edit in the `projects` array
3. Update any field (title, description, techStack, etc.)
4. Save and refresh

### Removing a Project

1. Open `config.js`
2. Find the project object you want to remove
3. Delete the entire object (including the curly braces `{ }`)
4. Make sure there's no extra comma at the end
5. Save and refresh

### Example:

```javascript
projects: [
    {
        title: 'My Awesome App',
        description: 'This app helps users track their fitness goals.',
        techStack: ['React', 'Node.js', 'MongoDB'],
        imageUrl: '/images/awesome-app.png',
        blogPost: '/blog/awesome-app.md',
        demoUrl: 'https://awesome-app.com',
        githubUrl: 'https://github.com/me/awesome-app'
    },
    // Add more projects here...
]
```

---

## 📝 Adding/Updating Blog Posts

Blog posts are markdown files (`.md`) in the `blog/` directory.

### Creating a New Blog Post

1. Create a new file in the `blog/` directory
2. Name it something descriptive (e.g., `my-new-project.md`)
3. Use this template:

```markdown
---
title: 'Your Project Title'
date: '2025-01-15'
excerpt: 'A brief summary of your project'
imageUrl: '/images/your-image.png'
dataAiHint: 'Project Category/Type'
---

Your full blog post content goes here.

You can use **bold text**, *italic text*, and [links](https://example.com).

## Headings work too

Write as much as you want! The blog post will be displayed when users click on your project card.
```

### Front Matter Explained

The section between the `---` markers is called "front matter." It contains metadata about your blog post:

- **title**: The title of your project
- **date**: Publication date (format: YYYY-MM-DD)
- **excerpt**: A short description (shows on project cards)
- **imageUrl**: Path to the project image
- **dataAiHint**: Category or type of project

### Markdown Tips

- `# Heading 1` - Large heading
- `## Heading 2` - Medium heading
- `### Heading 3` - Small heading
- `**bold text**` - Bold
- `*italic text*` - Italic
- `[link text](url)` - Link
- Empty line = new paragraph

### Linking Blog Posts to Projects

In `config.js`, add the blog post path to your project:

```javascript
{
    title: 'My Project',
    // ... other fields ...
    blogPost: '/blog/my-new-project.md'  // ← Points to your blog post
}
```

---

## 🖼️ Updating Images

### Adding Images

1. Place your image files in the `images/` directory
2. Use descriptive names (e.g., `apex-screenshot.png`)
3. Reference them in `config.js`:

```javascript
imageUrl: '/images/apex-screenshot.png'
```

### Image Recommendations

| Type | Size | Format |
|------|------|--------|
| Project images | 600x400px | .jpg, .png, .webp |
| Profile pictures | 400x400px | .jpg, .png |
| Video thumbnails | 1920x1080px | .jpg, .png |

### Optimizing Images

Before uploading, compress your images for faster loading:
- Use [TinyPNG](https://tinypng.com/) for PNG files
- Use [Squoosh](https://squoosh.app/) for all formats
- Keep file sizes under 500KB

### Videos

1. Add video files to the `images/` directory
2. Supported formats: `.mp4`, `.webm`
3. Reference them like images:

```html
<video src="/images/my-demo.mp4" controls></video>
```

---

## 📮 Configuring Formspree

Formspree handles your contact form submissions without needing a backend.

### Setup Steps

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xpznqrrb`)
5. Open `config.js`
6. Update the `formspree` section:

```javascript
formspree: {
    endpoint: 'https://formspree.io/f/YOUR_FORM_ID_HERE'  // ← Paste your endpoint here
}
```

7. Save and test your contact form!

### Testing the Contact Form

1. Fill out the form on your website
2. Submit it
3. Check your email (the one you used to sign up for Formspree)
4. You should receive the form submission

---

## ⚙️ Customizing Features

**File:** `config.js`

### Feature Toggles

You can enable/disable features at the bottom of `config.js`:

```javascript
features: {
    systemConsole: true,      // System status console in bottom-right
    terminalEasterEgg: true,  // CTRL+ALT+D terminal
    fitnessLog: true,         // Training log easter egg
    lebronCounter: true,      // LeBron counter easter egg
    spanishSwitch: true,      // Spanish translation easter egg
    vibeCodingToggle: true    // Font toggle in Skills section
}
```

Set any to `false` to disable that feature.

### System Status Console

Customize the animated system console:

```javascript
systemStatus: {
    updateInterval: 3000,  // How often to update (milliseconds)
    computeLoad: ['Low', 'Medium', 'High', 'Optimal'],  // Possible values
    latencyRange: { min: 18, max: 35 },  // Latency range (ms)
    aiTrainingRange: { min: 80, max: 95 }  // AI training % range
}
```

### Lazy Loading

Control image lazy loading:

```javascript
lazyLoading: {
    enabled: true,
    rootMargin: '50px',  // Start loading before element is visible
    threshold: 0.01
}
```

### Preloading Assets

Preload specific images/videos for faster performance:

```javascript
preloadAssets: [
    '/images/hero-bg.jpg',
    '/images/featured-project.png',
    '/videos/demo.mp4'
]
```

---

## 🚀 Deployment to Cloudflare

### Option 1: Cloudflare Pages (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Click "Pages" in the sidebar
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository
   - Click "Begin setup"

3. **Configure Build Settings**
   - Framework preset: `None`
   - Build command: (leave empty)
   - Build output directory: `/`
   - Root directory: `/`

4. **Deploy**
   - Click "Save and Deploy"
   - Wait for deployment (usually 1-2 minutes)
   - Your site is live! 🎉

5. **Custom Domain (Optional)**
   - Click "Custom domains"
   - Add your domain
   - Follow Cloudflare's DNS instructions

### Option 2: Manual Upload

1. **Prepare Files**
   - Make sure all images are in the `images/` folder
   - Check that `config.js` has your information

2. **Upload via Cloudflare Dashboard**
   - Go to Cloudflare Pages
   - Click "Create a project"
   - Choose "Direct Upload"
   - Drag and drop all your files
   - Deploy!

### Automatic Deployments

Once connected to GitHub, every push to your main branch will automatically deploy updates to your live site!

---

## 🛠️ Troubleshooting

### Projects Not Showing

**Problem:** Projects section is empty

**Solutions:**
1. Check `config.js` - make sure the `projects` array has items
2. Open browser console (F12) - look for JavaScript errors
3. Check that all curly braces `{ }` and commas are correct in `config.js`

### Images Not Loading

**Problem:** Broken image icons appear

**Solutions:**
1. Verify image files are in the `images/` directory
2. Check image paths in `config.js` start with `/images/`
3. Ensure image file names match exactly (case-sensitive)
4. Check image file formats (.jpg, .png, .webp are supported)

### Contact Form Not Working

**Problem:** Form submission fails

**Solutions:**
1. Verify your Formspree endpoint in `config.js`
2. Check that endpoint includes `https://formspree.io/f/YOUR_ID`
3. Test the form while checking browser console for errors
4. Make sure you're using a valid Formspree account

### Easter Eggs Not Working

**Problem:** Hidden features don't activate

**Solutions:**
1. Check `config.js` - make sure the feature toggle is `true`
2. **Training Log:** Click the tiny "Training Log" link in the footer
3. **LeBron Counter:** Click the "∞ Times I've thought about LeBron" stat
4. **Spanish Switch:** Hold mouse down on "Spanish (A2 Level)" for 3 seconds
5. **Terminal:** Press CTRL + ALT + D on your keyboard

### Mobile Layout Issues

**Problem:** Site doesn't look right on mobile

**Solutions:**
1. Clear your browser cache
2. Test in incognito/private mode
3. Check that you haven't modified the CSS file
4. Ensure viewport meta tag is in `index.html`

### System Console Not Updating

**Problem:** Status values don't change

**Solutions:**
1. Wait 3 seconds (default update interval)
2. Check browser console for JavaScript errors
3. Verify `systemConsole: true` in `config.js` features
4. Refresh the page

---

## 📚 File Structure Reference

```
SeanPersonalWebsite/
├── index.html          # Main HTML file (rarely needs editing)
├── styles.css          # All styling (rarely needs editing)
├── script.js           # JavaScript functionality (rarely needs editing)
├── config.js           # ★ EDIT THIS for content updates
├── EDITING_GUIDE.md    # This guide
├── README.md           # Project overview
├── blog/               # Blog posts (markdown files)
│   ├── ApeX.md
│   ├── truckSimulator.md
│   └── ...
└── images/             # All images and videos
    ├── .gitkeep
    └── (your images here)
```

---

## 🎯 Common Tasks Quick Reference

| Task | File | What to Edit |
|------|------|--------------|
| Change email | `config.js` | `contact.email` |
| Add project | `config.js` | Add object to `projects` array |
| Add blog post | Create file in `blog/` | New `.md` file |
| Add image | `images/` folder | Upload image file |
| Setup contact form | `config.js` | `formspree.endpoint` |
| Toggle feature | `config.js` | `features.featureName` |
| Deploy site | Cloudflare Pages | Connect GitHub repo |

---

## 💡 Tips for Success

1. **Always test locally first** - Open `index.html` in your browser before deploying
2. **Use descriptive file names** - `apex-project-screenshot.png` is better than `img1.png`
3. **Keep backups** - Save copies before making major changes
4. **Commit often** - Small, frequent commits are easier to manage than large ones
5. **Check the console** - Press F12 in your browser to see errors
6. **Mobile test** - Always check how your site looks on mobile devices

---

## 🆘 Need More Help?

1. **Browser Console:** Press F12 to see error messages
2. **Markdown Guide:** [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
3. **Formspree Docs:** [formspree.io/help](https://help.formspree.io/)
4. **Cloudflare Pages:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages/)

---

## 🎨 Customization Ideas

As you grow comfortable editing the site, try these:

- Add more sections to `index.html`
- Customize colors in `styles.css` (search for `:root` variables)
- Add new Easter eggs in `script.js`
- Create a custom 404 page
- Add Google Analytics
- Integrate a blog CMS

---

**Happy editing! 🚀**

Remember: The best way to learn is by experimenting. Don't be afraid to try things - you can always undo changes with Git!
