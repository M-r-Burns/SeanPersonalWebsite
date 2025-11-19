# Eli's Personal Website - AI-Powered Learning Studio 🚀

A modern, production-ready personal website featuring the "AI-Powered Learning Studio" theme. Built with clean HTML, CSS, and JavaScript - no frameworks needed!

![Website Preview](assets/images/preview.png)

## ✨ Features

### Design & Aesthetic
- **Dynamic Gradient Background**: Deep indigo/purple fading to charcoal gray
- **Glassmorphism Effects**: Modern, translucent card designs
- **Neon Green Accents**: Electric #39FF14 for that AI processing feel
- **Fully Responsive**: Perfect on desktop, tablet, and mobile
- **Typography**: Plus Jakarta Sans (modern) + Fira Code (technical)

### Interactive Features
- 🎨 **Animated Network Graphs**: Hero section and skill background
- 📊 **Dynamic Metrics**: Live-updating connection counter
- 🏋️ **Fitness Timer Easter Egg**: 30-second rest timer
- 💡 **AI Quote Display**: Hover for inspiration
- ⚒️ **Purdue Pride**: Press Ctrl+Alt+P for Boiler Up!
- 🌍 **Spanish Word Widget**: Daily word in the footer
- 📱 **Mobile-Friendly Menu**: Smooth hamburger navigation

### Technical Features
- ⚡ **Lazy Loading**: Images load only when needed
- 🔄 **Background Preloading**: Next images load before you scroll
- 📬 **Formspree Integration**: Contact form without backend
- 🎯 **SEO Optimized**: Meta tags, semantic HTML
- 🔒 **Security Headers**: Production-ready with Cloudflare
- 🚀 **Lightning Fast**: Optimized for performance

## 📁 Project Structure

```
SeanPersonalWebsite/
├── index.html                 # Main website file
├── assets/
│   ├── css/
│   │   └── styles.css        # All styling
│   ├── js/
│   │   ├── config.js         # ← Edit this for content updates!
│   │   └── main.js           # Interactive features
│   ├── images/               # Project images & photos
│   └── videos/               # Demo videos
├── blog/                     # Blog posts (Markdown)
│   ├── ApeX.md
│   ├── truckSimulator.md
│   └── ...
├── EDITING_GUIDE.md          # Comprehensive editing instructions
├── DEPLOYMENT.md             # Deployment guide
├── _headers                  # Cloudflare headers config
├── _redirects                # Cloudflare redirects config
└── robots.txt                # SEO configuration
```

## 🚀 Quick Start

### 1. Update Your Information

Edit `assets/js/config.js` and update:

```javascript
personal: {
    name: "Your Name",
    email: "your-email@example.com",
    location: "Your City, State",
    // ... more settings
}
```

### 2. Set Up Contact Form

1. Create a free account at [Formspree.io](https://formspree.io/)
2. Create a new form and copy your endpoint
3. Update `config.js`:

```javascript
formspree: {
    endpoint: "https://formspree.io/f/YOUR_ENDPOINT"
}
```

### 3. Add Your Images

1. Place project images in `assets/images/`
2. Recommended size: 1200x800px
3. Formats: JPG, PNG, or WebP (WebP is fastest!)

### 4. Deploy to Cloudflare

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

**Quick deploy**:
1. Push to GitHub
2. Connect repository to Cloudflare Pages
3. Done! Your site is live.

## 📝 Editing Guide

For detailed instructions on updating content, see [EDITING_GUIDE.md](EDITING_GUIDE.md).

**Common tasks**:
- Update personal info: Edit `assets/js/config.js`
- Add new project: Copy a project card in `index.html`
- Add blog post: Create `.md` file in `/blog/`
- Change colors: Edit CSS variables in `styles.css`
- Add images: Save to `assets/images/`

## 🎨 Customization

### Change Color Scheme

Edit `assets/css/styles.css`:

```css
:root {
    --accent-neon: #39FF14;  /* Change this! */
    --gradient-start: #2d1b69;
    --gradient-end: #1a1a2e;
}
```

### Disable Features

Edit `assets/js/config.js`:

```javascript
features: {
    enableNetworkAnimation: false,  // Turn off animations
    enableEasterEggs: false,        // Disable easter eggs
}
```

### Adjust Animation Speed

```javascript
animation: {
    networkSpeed: 0.5,      // 0.1-2 (higher = faster)
    particleCount: 50       // 20-100 (more = denser)
}
```

## 🐛 Troubleshooting

### Images not loading?
- Check file paths are correct
- Verify images are in `assets/images/`
- Try hard refresh: `Ctrl+Shift+R`

### Contact form not working?
- Verify Formspree endpoint in `config.js`
- Check browser console (F12) for errors

### Changes not showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Wait 1-2 minutes if deployed to Cloudflare

See [EDITING_GUIDE.md](EDITING_GUIDE.md) for more troubleshooting tips.

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: < 0.1

## 📄 License

This is your personal website - feel free to use, modify, and distribute as you wish!

## 🤝 Contributing

This is a personal website, but suggestions are welcome! Feel free to:
- Report bugs
- Suggest features
- Share improvements

## 📚 Resources

- **Formspree Docs**: [https://help.formspree.io/](https://help.formspree.io/)
- **Cloudflare Pages**: [https://developers.cloudflare.com/pages/](https://developers.cloudflare.com/pages/)
- **MDN Web Docs**: [https://developer.mozilla.org/](https://developer.mozilla.org/)
- **Web Performance**: [https://web.dev/](https://web.dev/)

## 🌟 Credits

**Design Theme**: AI-Powered Learning Studio
**Built By**: Eli J
**Typography**: Plus Jakarta Sans, Fira Code
**Inspiration**: The power of iteration and self-driven learning

---

**Remember**: "I don't need to know how to do everything, but I've gotten really good at knowing what questions to ask."

Now go build something amazing! 🚀
