# Elijah Burns - Personal Website

A modern, high-performance personal portfolio website with a cutting-edge SaaS dashboard aesthetic.

## 🌟 Features

- **Modern Dark UI**: Sleek, Apple-inspired design with deep charcoal background
- **Interactive Animations**: Particle background, smooth transitions, and engaging micro-interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Lazy loading, background preloading, and optimized assets
- **Easy to Edit**: Simple config file for quick updates without touching code
- **Contact Form**: Integrated Formspree for seamless messaging
- **Production Ready**: Configured for Cloudflare Pages deployment
- **Easter Eggs**: Hidden terminal interface (Ctrl+Shift+T)

## 🎨 Design Highlights

- 8-point grid system for pixel-perfect layouts
- Teal accent color (#00C896) with smooth gradients
- Interactive particle network background
- Real-time "system status" widget
- Strategy flow visualization
- Hover effects and micro-animations

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/M-r-Burns/SeanPersonalWebsite.git
cd SeanPersonalWebsite
```

### 2. Open in Browser

Simply open `index.html` in your browser to view locally!

### 3. Customize

Edit `config.js` to update:
- Personal information
- Project links
- Formspree endpoint
- Colors and styling
- Feature toggles

See [`EDITING_GUIDE.md`](EDITING_GUIDE.md) for detailed instructions.

## 📁 Project Structure

```
SeanPersonalWebsite/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js          # Interactive features
├── config.js          # ⭐ Configuration (edit this!)
├── EDITING_GUIDE.md   # Comprehensive editing guide
├── assets/
│   ├── images/       # Your images
│   ├── videos/       # Your videos
│   └── favicon.svg   # Site icon
└── blog/             # Blog posts/reflections
```

## 📝 Editing Content

Most edits can be done in `config.js`:

```javascript
// Update personal info
const personalInfo = {
    name: 'Your Name',
    location: 'Your Location',
    // ...
};

// Add project links
const projectLinks = {
    projectName: {
        demo: 'https://your-demo.com',
        blog: 'blog/post.md'
    }
};
```

For detailed instructions, see the [Editing Guide](EDITING_GUIDE.md).

## 📧 Setting Up Contact Form

1. Create a [Formspree](https://formspree.io/) account
2. Create a new form and get your endpoint
3. Add to `config.js`:

```javascript
window.FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_ID';
```

## 🖼️ Adding Images

1. Place images in `assets/images/`
2. Update image paths in `index.html`
3. Use lazy loading for better performance:

```html
<img data-src="assets/images/your-image.jpg" alt="Description">
```

## 🌐 Deploying to Cloudflare Pages

### Option 1: Automatic (Recommended)

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your repository
4. Deploy!

### Option 2: Manual

```bash
# Install Wrangler CLI
npm install -g wrangler

# Deploy
wrangler pages publish .
```

See [Deployment Guide](EDITING_GUIDE.md#deploying-to-cloudflare) for details.

## 🎯 Performance Features

- **Lazy Loading**: Images load as you scroll
- **Background Preloading**: Next section loads before you reach it
- **Optimized Animations**: 60fps smooth animations
- **CDN Ready**: Works great with Cloudflare Pages
- **Minimal Dependencies**: Pure vanilla JS, no frameworks

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks, pure performance
- **Formspree**: Contact form backend
- **Cloudflare Pages**: Hosting and CDN

## 🎨 Customization

### Change Colors

```javascript
// In config.js
const colorScheme = {
    accent: '#007AFF',  // Electric blue
};
```

### Toggle Features

```javascript
// In config.js
const features = {
    particleBackground: true,
    systemStatus: true,
    terminal: true,
    // ...
};
```

## 📊 Analytics (Optional)

Add Google Analytics or Cloudflare Web Analytics in `config.js`:

```javascript
const analytics = {
    ga4MeasurementId: 'G-XXXXXXXXXX',
    cloudflareToken: 'your-token',
};
```

## 🐛 Troubleshooting

See the [Troubleshooting Section](EDITING_GUIDE.md#troubleshooting) in the Editing Guide.

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork and customize for your own use!

## 📞 Contact

- **LinkedIn**: [linkedin.com/in/elijb](https://linkedin.com/in/elijb)
- **Location**: Indianapolis, IN

---

**Built with purpose** 🚀

Last updated: 2024
