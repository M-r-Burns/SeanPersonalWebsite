# Global Learning Canvas - Personal Portfolio Website

A professional, high-contrast personal portfolio website with the "Global Learning Canvas" theme. Built with vanilla HTML, CSS, and JavaScript - production-ready and optimized for performance.

## 🌟 Features

### Design & Aesthetics
- **High-contrast black & white theme** with deep indigo accent
- **Clean, professional layout** inspired by strategic reports and academic resources
- **World map background** - subtle, schematic continent outlines
- **Fully responsive** - mobile, tablet, and desktop optimized
- **Custom typography** - Oswald for headings, Inter for body, Fira Code for code

### Interactive Elements
- **Map Pin Animation** - Animates between Indianapolis and Madrid
- **Language Learning Widget** - Rotating Spanish/English phrases
- **KPI Data Ripple** - Click metrics for satisfying animations
- **Fitness Rest Timer** - 30-second countdown timer (click 💪)
- **Project Modal Reveals** - Full project details on click
- **Vibe-coding Snippet** - Hover to see code examples
- **Skill Progress Bars** - Animated fill on scroll

### Easter Eggs
- **Hidden Terminal** (Ctrl+Alt+I) - Retro command-line interface
- **Basketball Animation** - Click the LeBron metric
- **Purdue Motto** - Hover "Larsen Leadership Academy" for 3s
- **AI Quote** - Click Atlassian certification

### Performance
- **Lazy Loading** - Images load as you scroll
- **Background Preloading** - Assets load before needed
- **Optimized Caching** - Smart cache headers for Cloudflare
- **Fast Page Load** - Minimal dependencies, optimized code

### Easy Maintenance
- **Single Config File** - Update all content in `content.js`
- **No Build Process** - Pure HTML/CSS/JS
- **Comprehensive Guide** - Full documentation in `EDITING_GUIDE.md`
- **Formspree Integration** - Simple contact form setup

## 📁 File Structure

```
SeanPersonalWebsite/
├── index.html              # Main HTML structure
├── styles.css              # All styles and responsive design
├── content.js              # ⭐ Edit this file for all content
├── script.js               # Interactive features and functionality
├── assets/
│   ├── images/             # Project images, photos
│   │   └── world-map.svg   # Background map graphic
│   └── videos/             # Demo videos
├── blog/                   # Project blog posts (Markdown)
│   ├── ApeX.md
│   ├── truckSimulator.md
│   ├── LiDARBackpack.md
│   ├── marketplaceMessenger.md
│   ├── beyondTheBasics.md
│   └── fromSandtoSilicon.md
├── _headers                # Cloudflare security/cache headers
├── .gitignore              # Git ignore rules
├── EDITING_GUIDE.md        # Comprehensive editing documentation
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/SeanPersonalWebsite.git
cd SeanPersonalWebsite
```

### 2. Customize Content

Open `content.js` and update:
- Your links (LinkedIn, ApeX, etc.)
- About me text
- Professional experience
- Projects
- Skills & certifications
- Awards
- Contact form API key

See `EDITING_GUIDE.md` for detailed instructions.

### 3. Add Your Images

Place images in `assets/images/` and update the `imageUrl` fields in `content.js`:

```javascript
imageUrl: 'assets/images/your-project.jpg'
```

### 4. Setup Contact Form

1. Create free account at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Add to `content.js`:

```javascript
formspreeApiKey: 'your-formspree-id-here'
```

### 5. Test Locally

Simply open `index.html` in your browser! No build process needed.

### 6. Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Click "Pages" → "Create a project"
4. Connect your GitHub repository
5. Deploy!

Full deployment instructions in `EDITING_GUIDE.md`.

## 🎨 Customization

### Change Accent Color

Edit `styles.css`:

```css
:root {
    --color-accent: #304FFE;  /* Change this! */
}
```

### Change Fonts

1. Find fonts at [Google Fonts](https://fonts.google.com)
2. Add `<link>` to `index.html`
3. Update `styles.css`:

```css
:root {
    --font-heading: 'Your Font', sans-serif;
}
```

### Add/Remove Sections

Edit `index.html` and remove/add `<section>` blocks as needed.

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

Test on actual devices or use browser dev tools (F12).

## 🔒 Security Features

- Content Security Policy (CSP) headers
- XSS protection
- Frame denial (prevents embedding)
- Secure form submission via Formspree
- No external scripts (except Google Fonts)

## ⚡ Performance

- **Lazy loading** for images
- **Preloading** critical assets
- **Optimized caching** via Cloudflare
- **Minimal JavaScript** - vanilla JS, no frameworks
- **Fast Time to Interactive** - < 1 second on good connections

## 📖 Documentation

- **EDITING_GUIDE.md** - Complete guide for updating content
- **assets/README.md** - Guide for managing images/videos
- **Inline comments** - All code is well-documented

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Oswald, Inter, Fira Code
- **Formspree** - Contact form backend
- **Cloudflare Pages** - Hosting & CDN

## 🐛 Troubleshooting

See `EDITING_GUIDE.md` for common issues and solutions.

**Quick fixes:**
- Changes not showing? Hard refresh: `Ctrl + Shift + R`
- Images not loading? Check file paths in `content.js`
- Form not working? Verify Formspree API key

## 📄 License

This is your personal portfolio website. Feel free to customize and use as needed!

## 🤝 Contributing

This is a personal website, but if you find bugs or have suggestions, feel free to open an issue.

## 📞 Contact

Visit the website and use the contact form to get in touch!

---

**Built with ❤️ using the Global Learning Canvas theme**

*Bridging Strategy. Executing Code.*
