# 📊 Precision Analytics Grid - Personal Website

> A sleek, monochromatic personal portfolio website with graph paper aesthetics and interactive features.

![Website Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![Mobile Friendly](https://img.shields.io/badge/Mobile-Friendly-blue)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-green)

## 🎨 Design Theme

**"Precision Analytics Grid"** - A high-contrast, data-driven design featuring:
- Black & white graph paper background (fixed)
- Strict monochromatic color scheme
- Electric blue (#007AFF) accent color for key elements
- Clean, structured layout emphasizing precision and analysis
- Typography: Inter (primary) + JetBrains Mono (technical elements)

## ✨ Features

### 🎯 Core Features
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Zero Dependencies** - Pure HTML, CSS, and vanilla JavaScript
- **Production Ready** - Configured for Cloudflare Pages deployment
- **Easy to Edit** - Single `config.js` file for all content
- **Performance Optimized** - Lazy loading, preloading, and caching
- **Accessibility** - WCAG compliant with keyboard navigation support

### 🕹️ Interactive Components

1. **System Status Console** - Fixed bottom-right display showing:
   - Compute Load (randomized)
   - Latency (18-35ms range)
   - AI Training percentage (80-95%)
   - Updates every 3 seconds

2. **Grid Highlight Effect** - Hover over experience/project cards to see the underlying graph paper grid illuminate with electric blue

3. **Data Point Tooltips** - Hover over metrics to see contextual explanations

4. **Vibe-coding Toggle** - Switch between JetBrains Mono and Courier New for technical text

5. **Project Snapshot View** - Click project cards to view full blog post in modal overlay

### 🥚 Easter Eggs

1. **Training Log** - Tiny link in footer ("Training Log") shows fitness metrics
2. **LeBron Counter** - Click the "∞ Times I've thought about LeBron" stat to log a count with timestamp
3. **Spanish A2 Switch** - Hold mouse on "Spanish (A2 Level)" for 3 seconds to translate About section to Spanish
4. **Hidden Terminal** - Press `CTRL + ALT + D` to open a retro terminal with custom commands:
   - `whoami` - Display user info
   - `list_projects` - List all projects
   - `skills` - Show technical skills
   - `contact` - Display contact info
   - `clear` - Clear terminal
   - `exit` - Close terminal
   - `help` - Show all commands

## 📁 File Structure

```
SeanPersonalWebsite/
├── index.html              # Main HTML structure
├── styles.css              # All styling (1300+ lines)
├── script.js               # Interactive features & functionality
├── config.js               # ⭐ Edit this for content updates
├── EDITING_GUIDE.md        # Comprehensive editing documentation
├── README.md               # This file
├── wrangler.toml           # Cloudflare configuration
├── _headers                # Cloudflare headers for caching/security
├── .gitignore              # Git ignore rules
├── blog/                   # Blog posts (Markdown)
│   ├── ApeX.md
│   ├── truckSimulator.md
│   ├── LiDARBackpack.md
│   ├── marketplaceMessenger.md
│   ├── beyondTheBasics.md
│   └── fromSandtoSilicon.md
└── images/                 # All images and videos
    └── .gitkeep
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd SeanPersonalWebsite
   ```

2. **Update your information**
   - Edit `config.js` with your contact info
   - Add your images to `images/` folder
   - Update blog posts in `blog/` folder

3. **Test locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 8000

     # Node.js
     npx serve
     ```

4. **View your site**
   - Navigate to `http://localhost:8000`

### Deployment

#### Cloudflare Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Connect to Cloudflare**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Use these settings:
     - Framework preset: `None`
     - Build command: (leave empty)
     - Build output directory: `/`
   - Click "Save and Deploy"

3. **Done!** Your site is live 🎉

#### Alternative: Direct Upload

1. Zip all files
2. Upload to Cloudflare Pages
3. Deploy

## 📝 Editing Content

### Quick Edit Checklist

- [ ] Update contact info in `config.js`
- [ ] Add your email to `config.js`
- [ ] Configure Formspree endpoint in `config.js`
- [ ] Add project images to `images/` folder
- [ ] Update project data in `config.js`
- [ ] Test all interactive features
- [ ] Deploy to Cloudflare

### Detailed Instructions

See **[EDITING_GUIDE.md](EDITING_GUIDE.md)** for comprehensive documentation on:
- Managing projects
- Adding blog posts
- Updating images
- Configuring Formspree
- Customizing features
- Troubleshooting

## 🛠️ Configuration

All configuration is in `config.js`:

```javascript
const CONFIG = {
    contact: { /* Your contact info */ },
    formspree: { /* Formspree endpoint */ },
    projects: [ /* Array of projects */ ],
    systemStatus: { /* Console settings */ },
    lazyLoading: { /* Lazy load settings */ },
    preloadAssets: [ /* Assets to preload */ ],
    features: { /* Feature toggles */ }
};
```

## 📮 Contact Form Setup

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your endpoint
4. Update `config.js`:
   ```javascript
   formspree: {
       endpoint: 'https://formspree.io/f/YOUR_FORM_ID'
   }
   ```

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-accent: #007AFF;  /* Change accent color */
    --grid-size: 20px;        /* Change grid size */
}
```

### Features

Toggle features in `config.js`:

```javascript
features: {
    systemConsole: true,      // System status console
    terminalEasterEgg: true,  // Hidden terminal
    fitnessLog: true,         // Training log
    lebronCounter: true,      // LeBron counter
    spanishSwitch: true,      // Spanish translation
    vibeCodingToggle: true    // Font toggle
}
```

## 📱 Mobile Optimization

- Responsive breakpoints: 768px, 480px
- Touch-optimized tap targets (min 48px)
- Auto-hiding navigation on scroll
- Disabled hover effects on touch devices
- Optimized modals for small screens
- Landscape orientation support

## 🔒 Security & Performance

- **Security Headers** - CORS, XSS protection, frame options
- **Content Security** - No inline scripts vulnerabilities
- **Performance** - Lazy loading, preloading, caching
- **SEO** - Semantic HTML, meta tags, proper headings
- **Accessibility** - ARIA labels, keyboard navigation

## 🧪 Testing Checklist

- [ ] All interactive features work
- [ ] Easter eggs activate correctly
- [ ] Contact form submits successfully
- [ ] Images load properly
- [ ] Blog posts display in modals
- [ ] Mobile layout looks good
- [ ] Navigation scrolls smoothly
- [ ] System console updates
- [ ] Terminal commands work

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal website template. Feel free to:
- Fork it for your own use
- Suggest improvements via issues
- Share your customizations

## 📄 License

MIT License - Feel free to use this for your own personal website!

## 🎯 Credits

**Design Concept:** Precision Analytics Grid theme
**Built by:** Sean (with Claude)
**Inspired by:** Data visualization, engineering notebooks, and precision tools

## 📞 Support

For questions or issues:
1. Check [EDITING_GUIDE.md](EDITING_GUIDE.md)
2. Review browser console (F12)
3. Verify `config.js` syntax
4. Check Cloudflare deployment logs

## 🚀 What's Next?

Ideas for future enhancements:
- [ ] Add dark mode toggle
- [ ] Integrate analytics
- [ ] Add blog RSS feed
- [ ] Create more Easter eggs
- [ ] Add animations on scroll
- [ ] Integrate CMS for easier editing

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**

*No frameworks. No build tools. Just clean code.*
