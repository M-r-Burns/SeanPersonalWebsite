# Global Learning Canvas - Complete Editing Guide

Welcome! This guide will show you how to easily update and maintain your personal website without needing deep technical knowledge.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Editing Content](#editing-content)
3. [Adding Images & Videos](#adding-images--videos)
4. [Customizing Colors & Styles](#customizing-colors--styles)
5. [Managing Projects](#managing-projects)
6. [Contact Form Setup](#contact-form-setup)
7. [Deployment to Cloudflare](#deployment-to-cloudflare)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

**The easiest way to update your website is by editing the `content.js` file.** This is where all your text, projects, skills, and links are stored.

### What You Need
- A text editor (VS Code, Sublime Text, or even Notepad)
- Basic understanding of copying and pasting text
- Your website files

### File Structure
```
SeanPersonalWebsite/
├── index.html           # Main website structure (rarely edit)
├── styles.css           # All styling (edit for colors/fonts)
├── content.js           # ⭐ YOUR MAIN EDITING FILE
├── script.js            # Interactive features (rarely edit)
├── assets/
│   ├── images/          # Add your images here
│   └── videos/          # Add your videos here
├── blog/                # Your project blog posts
├── EDITING_GUIDE.md     # This file
└── _headers             # Cloudflare configuration

```

---

## Editing Content

### 1. Opening content.js

Open `content.js` in any text editor. You'll see it's organized into clear sections:

```javascript
const SITE_CONFIG = {
    // Your content here
};
```

### 2. Updating Basic Information

#### Change Your Links
```javascript
formspreeApiKey: 'YOUR_FORMSPREE_API_KEY_HERE',
linkedinUrl: 'https://linkedin.com/in/YOUR_USERNAME',
apexUrl: 'https://your-apex-url.com',
```

#### Update About Me Text
Find the `aboutText:` section and replace the text between the backticks:

```javascript
aboutText: `Your new about me text goes here.
You can use multiple lines.
Just keep the backticks (`) at the start and end.`,
```

#### Update Metrics
```javascript
metrics: {
    connections: '100+',    // Change these numbers
    projects: '20+',
    lebron: '∞'            // Keep this fun!
}
```

### 3. Adding/Editing Professional Experience

Find the `experience:` array. Each job is an object with this structure:

```javascript
{
    title: 'Your Job Title',
    company: 'Company Name',
    date: 'Jan 2024 – Present',
    achievements: [
        'First achievement bullet point.',
        'Second achievement bullet point.',
        'Add as many as you want!'
    ]
}
```

**To add a new job:**
1. Copy an existing entry
2. Paste it at the top of the list (most recent first)
3. Update all the fields
4. Don't forget the comma after the closing `}`

**Example:**
```javascript
experience: [
    {
        title: 'Senior Data Analyst',
        company: 'Tech Company Inc.',
        date: 'Jun 2025 – Present',
        achievements: [
            'Increased efficiency by 50%.',
            'Led team of 5 analysts.'
        ]
    },
    // ... other jobs below
]
```

### 4. Managing Projects

Projects are the heart of your portfolio! Find the `projects:` array.

**Project Template:**
```javascript
{
    title: 'Project Name',
    type: 'Software/Strategy/Design',
    description: 'Short 2-3 sentence summary for the card.',
    techStack: ['Tech1', 'Tech2', 'Tech3'],
    imageUrl: 'assets/images/project-image.jpg',
    imageIcon: '🚀',  // Emoji shown if no image
    fullDescription: `Longer description shown in modal.

    Use multiple paragraphs to tell the full story.

    What did you learn? What challenges did you face?`,
    blogUrl: 'blog/project-blog.md',  // Optional
    demoUrl: 'https://demo-link.com'  // Optional
}
```

**To add a new project:**
1. Scroll to the `projects:` array
2. Copy an existing project entry (including all `{...}`)
3. Paste at the top of the array
4. Update all fields
5. Add a comma after the closing `}`

**To remove a project:**
- Delete the entire `{...}` block
- Make sure you don't leave extra commas

### 5. Updating Skills

Skills are organized by category:

```javascript
skills: [
    {
        category: 'Technical & Programming',
        items: ['Python', 'JavaScript', 'SQL'],
        progress: 90  // Percentage (0-100)
    },
    // Add more categories...
]
```

**To add a new skill category:**
```javascript
{
    category: 'Your Category Name',
    items: ['Skill 1', 'Skill 2', 'Skill 3'],
    progress: 85
}
```

**To add a certification:**
```javascript
certifications: [
    {
        name: 'Your New Certification Name'
    }
]
```

### 6. Managing Awards

Simple format:

```javascript
awards: [
    {
        rank: '1st',
        title: 'Competition Name',
        description: 'What you did to win.'
    }
]
```

### 7. Language Widget Phrases

The side widget cycles through Spanish phrases:

```javascript
languagePhrases: [
    { spanish: 'Tu frase en español', english: 'Your phrase in English' }
]
```

Add as many as you want! They'll cycle automatically every 10 seconds.

---

## Adding Images & Videos

### Adding Project Images

1. **Save your image** to `assets/images/`
   - Name it clearly: `project-name.jpg`
   - Recommended size: 800x600px minimum
   - Format: JPG or PNG

2. **Update content.js**
   ```javascript
   imageUrl: 'assets/images/your-new-image.jpg',
   ```

3. **Optimize images** before adding (use TinyPNG.com)
   - Keeps your site fast
   - Reduces bandwidth costs

### Adding Project Videos

1. **Save video** to `assets/videos/`
   - Format: MP4
   - Keep under 50MB

2. **Reference in fullDescription**
   ```javascript
   fullDescription: `Project description here.

   <video controls style="width: 100%; margin: 1rem 0;">
       <source src="assets/videos/demo.mp4" type="video/mp4">
   </video>

   More description...`
   ```

### Adding a Profile Picture

1. Save your photo to `assets/images/profile.jpg`
2. Add to the hero section in `index.html` if you want (optional)

---

## Customizing Colors & Styles

Want to tweak the colors? Edit `styles.css`.

### Changing the Accent Color

Find this section at the top of `styles.css`:

```css
:root {
    --color-white: #FFFFFF;
    --color-black: #111111;
    --color-accent: #304FFE;  /* ⬅️ CHANGE THIS */
}
```

**Popular alternatives:**
- Deep Purple: `#6200EA`
- Dark Blue: `#0D47A1`
- Forest Green: `#1B5E20`
- Crimson: `#C62828`

### Changing Fonts

In `styles.css`, find:

```css
:root {
    --font-heading: 'Oswald', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'Fira Code', monospace;
}
```

To use different fonts:
1. Find fonts at [Google Fonts](https://fonts.google.com)
2. Copy the `<link>` tag to `index.html` (in the `<head>`)
3. Update the CSS variables above

---

## Contact Form Setup

The contact form uses **Formspree** (free for up to 50 submissions/month).

### Step-by-Step Setup

1. **Go to [Formspree.io](https://formspree.io)**
2. **Sign up** for a free account
3. **Create a new form**
4. **Copy your Form ID** (looks like `abc123xyz`)
5. **Open content.js** and update:
   ```javascript
   formspreeApiKey: 'abc123xyz',  // ⬅️ Paste your ID here
   ```
6. **Save and test** - submit a test message!

### Testing the Form

1. Open your website
2. Scroll to Contact section
3. Fill out the form
4. Click "Initiate Connection"
5. Check your email - you should receive the message!

---

## Deployment to Cloudflare

Cloudflare Pages is **free** and **fast**. Here's how to deploy:

### Prerequisites
- GitHub account
- Cloudflare account (free)
- Git installed on your computer

### Deployment Steps

#### 1. Push to GitHub
```bash
# In your terminal, navigate to your website folder
cd /path/to/SeanPersonalWebsite

# Initialize git (if not already done)
git add .
git commit -m "Initial website setup"
git push origin main
```

#### 2. Deploy to Cloudflare

1. **Go to [Cloudflare Dashboard](https://dash.cloudflare.com)**
2. **Click "Pages"** in the sidebar
3. **Click "Create a project"**
4. **Connect your GitHub** repository
5. **Select your repository** (SeanPersonalWebsite)
6. **Configure build settings:**
   - Framework preset: **None**
   - Build command: (leave empty)
   - Build output directory: `/`
7. **Click "Save and Deploy"**

#### 3. Custom Domain (Optional)

1. In Cloudflare Pages, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow DNS setup instructions

### Auto-Deploy

Once set up, every time you push to GitHub, Cloudflare automatically deploys the changes!

```bash
# Make changes, then:
git add .
git commit -m "Updated projects"
git push origin main
# ✅ Website updates automatically!
```

---

## Troubleshooting

### Common Issues

#### 1. Changes Not Showing

**Problem:** Updated `content.js` but don't see changes.

**Solutions:**
- Hard refresh your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Check for JavaScript errors (F12 → Console tab)

#### 2. Images Not Loading

**Problem:** Images show placeholder icons instead.

**Solutions:**
- Check file path in `content.js` matches actual location
- Verify image exists in `assets/images/`
- Check file name spelling (case-sensitive!)
- Try a different image format (JPG vs PNG)

#### 3. Contact Form Not Working

**Problem:** Form says "Please configure your Formspree API key"

**Solutions:**
- Verify you added your Formspree form ID to `content.js`
- Check you didn't include extra spaces or quotes
- Make sure you saved `content.js`
- Try a different browser

#### 4. Layout Looks Broken on Mobile

**Problem:** Website doesn't look right on phone.

**Solutions:**
- The site is mobile-responsive by default
- Check you didn't accidentally delete CSS
- Test in actual mobile browser, not just resized desktop
- Clear mobile browser cache

#### 5. JavaScript Not Working

**Problem:** Interactive features (animations, modals) don't work.

**Solutions:**
- Check browser console (F12) for errors
- Verify `content.js` and `script.js` are loaded
- Check for syntax errors (missing commas, brackets)
- Make sure you didn't modify `script.js` accidentally

### Getting Help

**If you're stuck:**
1. Check the browser console (F12 → Console) for error messages
2. Verify all files are in the correct locations
3. Try reverting recent changes
4. Search the error message online
5. Ask in web development forums (Stack Overflow, Reddit r/webdev)

---

## Best Practices

### Regular Maintenance

**Monthly:**
- Review and update projects
- Add new skills/certifications
- Check all links still work
- Update experience section

**As Needed:**
- Add new projects immediately while fresh
- Update contact information
- Refresh images/screenshots
- Test contact form

### Content Writing Tips

**For Project Descriptions:**
- Start with the problem you solved
- Explain your approach
- Highlight specific technologies/skills used
- Mention measurable results
- Keep it concise but compelling

**For Experience:**
- Use action verbs (Led, Developed, Analyzed, etc.)
- Include quantifiable achievements (%, $, numbers)
- Focus on impact, not just tasks
- Most recent first

**For About Section:**
- Be authentic and personable
- Show your personality
- Explain your motivation
- Keep it under 200 words

### Performance Tips

**Keep Site Fast:**
- Optimize images before uploading (TinyPNG.com)
- Keep videos under 50MB
- Don't add too many high-res images
- Use JPG for photos, PNG for graphics

**SEO Basics:**
- Update meta description in `index.html`
- Use descriptive project titles
- Include keywords naturally
- Keep content updated

---

## Quick Reference

### File Locations
| What to Edit | File Location |
|--------------|---------------|
| All content | `content.js` |
| Colors/fonts | `styles.css` |
| Add images | `assets/images/` |
| Add videos | `assets/videos/` |

### Common Tasks
| Task | How To |
|------|--------|
| Add project | Copy project block in `content.js` |
| Change accent color | Edit `--color-accent` in `styles.css` |
| Update links | Edit `linkedinUrl` etc. in `content.js` |
| Add skill | Add to `items:` array in `content.js` |
| Setup contact form | Add Formspree ID to `content.js` |

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl + Alt + I` | Open hidden terminal |
| `F12` | Open browser dev tools |
| `Ctrl + Shift + R` | Hard refresh browser |

---

## Easter Eggs Included

Your website has some fun hidden features:

1. **Hidden Terminal**: Press `Ctrl + Alt + I` to open a retro terminal with commands
2. **Basketball Animation**: Click the "∞" LeBron metric
3. **Boiler Up**: Hover over "Larsen Leadership Academy" for 3 seconds
4. **Fitness Timer**: Click the 💪 icon for a 30-second rest timer
5. **AI Quote**: Click the Atlassian certification
6. **Language Widget**: Hover to see English translations
7. **KPI Ripple**: Click any metric number for an animation

---

## Need More Help?

### Resources
- [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Guide](https://web.dev/learn/css/)
- [JavaScript Tutorial](https://javascript.info/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

### Community
- [Stack Overflow](https://stackoverflow.com/) - For technical questions
- [r/webdev](https://reddit.com/r/webdev) - Web development community
- [Discord servers](https://discord.com) - Search for web dev communities

---

**Remember:** The website is designed to be easy to maintain. 95% of updates happen in just one file: `content.js`. Don't be afraid to experiment - you can always undo changes with Git!

**Happy editing! 🚀**
