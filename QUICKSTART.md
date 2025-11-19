# Quick Start Guide - 5 Minutes to Personalize

Get your website up and running in 5 minutes!

## ⚡ Essential Steps

### 1. Update Your Content (2 minutes)

Open `content.js` and change:

```javascript
// Line 11 - Your Formspree ID (get free at formspree.io)
formspreeApiKey: 'YOUR_KEY_HERE',

// Line 12-13 - Your links
linkedinUrl: 'https://linkedin.com/in/YOUR_USERNAME',
apexUrl: 'https://your-project-hub.com',

// Line 16 - Your about me text
aboutText: `Write your story here...`,

// Lines 20-23 - Your metrics
metrics: {
    connections: '100+',
    projects: '20+',
    lebron: '∞'
}
```

### 2. Add Your Images (1 minute)

1. Drop images into `assets/images/`
2. Update `content.js`:

```javascript
imageUrl: 'assets/images/your-image.jpg',
```

### 3. Test Locally (1 minute)

Just double-click `index.html` - it opens in your browser!

### 4. Deploy (1 minute)

```bash
git add .
git commit -m "Personalized website"
git push origin main
```

Then follow [DEPLOYMENT.md](DEPLOYMENT.md) for Cloudflare Pages setup.

## 📝 Most Common Edits

### Add a New Project

In `content.js`, copy this template:

```javascript
{
    title: 'Project Name',
    type: 'Software/Strategy/Design',
    description: 'Brief description.',
    techStack: ['Tech1', 'Tech2'],
    imageUrl: 'assets/images/project.jpg',
    imageIcon: '🚀',
    fullDescription: `Full story here...`
}
```

### Add a New Job

```javascript
{
    title: 'Job Title',
    company: 'Company Name',
    date: 'Month Year – Present',
    achievements: [
        'What you did.',
        'Impact you made.'
    ]
}
```

### Update Skills

```javascript
{
    category: 'Skill Category',
    items: ['Skill 1', 'Skill 2'],
    progress: 85  // 0-100
}
```

## 🎨 Quick Customization

### Change Accent Color

Edit `styles.css` line 11:

```css
--color-accent: #304FFE;  /* Your color here */
```

### Setup Contact Form

1. Go to [formspree.io](https://formspree.io)
2. Sign up free
3. Create form
4. Copy form ID
5. Paste in `content.js` line 11

## 📚 Need More Help?

- **Content editing**: See [EDITING_GUIDE.md](EDITING_GUIDE.md)
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Full docs**: See [README.md](README.md)

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated `formspreeApiKey` in content.js
- [ ] Changed `linkedinUrl` to your LinkedIn
- [ ] Updated `aboutText` with your story
- [ ] Added at least one project
- [ ] Added your professional experience
- [ ] Updated skills section
- [ ] Tested locally (opened index.html)
- [ ] Added your images to assets/images/
- [ ] Updated imageUrl paths in projects

## 🚀 You're Ready!

Your website is production-ready with:
- ✅ Mobile responsive design
- ✅ Fast loading with lazy loading
- ✅ Interactive features
- ✅ Easter eggs
- ✅ SEO optimized
- ✅ Security headers
- ✅ Professional design

Deploy and share! 🎉
