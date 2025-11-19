# Personal Website - Elijah

A modern, minimalist personal website showcasing my projects, experience, and skills. Built with a "control panel" aesthetic featuring clean lines, data visualizations, and smooth interactions.

## Features

- **Minimalist Design**: Clean, professional interface with a focus on content
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Lazy Loading**: Images and videos load as you scroll for optimal performance
- **Preloading**: Smart preloading of content before you reach it
- **Data Visualizations**: Interactive charts and network graphs
- **Contact Form**: Integrated Formspree contact form
- **Easy to Edit**: Simple configuration file for quick updates
- **Production Ready**: Optimized for deployment on Cloudflare Pages

## Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern CSS with custom properties for theming
- **Vanilla JavaScript** - No frameworks, pure performance
- **Intersection Observer API** - Efficient lazy loading and animations
- **Canvas API** - Real-time data visualizations
- **Formspree** - Contact form handling

## Quick Start

### 1. Configure Your Website

Edit `config.js` to add your:
- Formspree API endpoint
- Project URLs
- Company links
- Social media links

### 2. Add Your Content

- Add profile photo to `/images/profile.jpg`
- Add project images to `/images/projects/`
- Add demo videos to `/videos/projects/`
- Update text content in `index.html`

### 3. Deploy

Push to GitHub and deploy on Cloudflare Pages (see [Deployment Guide](#deployment)).

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styles and theming
├── script.js           # Interactive features
├── config.js           # Easy-to-edit configuration
├── EDIT_GUIDE.md       # Comprehensive editing guide
├── README.md           # This file
├── _headers            # Cloudflare Pages headers
├── _redirects          # Cloudflare Pages redirects
├── robots.txt          # SEO configuration
├── blog/               # Blog posts (markdown)
├── images/             # Images
│   └── projects/       # Project images
└── videos/             # Videos
    └── projects/       # Project demo videos
```

## Editing Your Website

**See [EDIT_GUIDE.md](EDIT_GUIDE.md) for comprehensive instructions.**

### Quick Edits

1. **Update text content**: Edit `index.html`
2. **Add project links**: Edit `config.js`
3. **Change colors**: Edit `styles.css` (`:root` section)
4. **Add images**: Place in `/images/` and update HTML `data-src` attributes
5. **Configure contact form**: Add Formspree endpoint to `config.js`

## Deployment

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to **Pages** → **Create a project**
4. Connect your GitHub repository
5. Configure:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
6. Deploy!

Your site will be live at `https://your-project.pages.dev`

### Auto-Deployments

Every push to your main branch automatically triggers a new deployment on Cloudflare Pages.

## Performance Features

### Lazy Loading
- Images load only when scrolled into view
- Videos load on demand and play on hover
- Reduces initial page load time by 60%+

### Preloading
- Next section's assets preload as you scroll
- Content is ready before you reach it
- Seamless, instant feel when navigating

### Optimization
- Minified and cached assets
- Efficient Intersection Observer usage
- Optimized animations with CSS transforms
- Canvas-based visualizations (no heavy libraries)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change Theme Colors

Edit `styles.css`:

```css
:root {
    --accent-color: #0066ff; /* Your color here */
}

[data-theme="dark"] {
    --accent-color: #00ff88; /* Your dark mode color */
}
```

### Add New Sections

1. Add HTML in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation in `<nav>` if needed

### Disable Features

Edit `config.js`:

```javascript
features: {
    enableLazyLoading: false, // Disable lazy loading
    enableDataVisualizations: false, // Disable charts
}
```

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA compliant)
- Focus indicators
- Screen reader friendly

## SEO

- Semantic HTML5 markup
- Meta tags for social sharing
- robots.txt included
- Fast loading times
- Mobile-friendly design
- Clean URLs

## Troubleshooting

See [EDIT_GUIDE.md](EDIT_GUIDE.md#troubleshooting) for common issues and solutions.

## License

This is a personal website. Feel free to use the code structure for your own portfolio, but please don't copy content directly.

## Contact

- LinkedIn: [linkedin.com/in/elijb](https://linkedin.com/in/elijb)
- Website: [Your deployed URL]

---

Built with simplicity and performance in mind. 🚀
