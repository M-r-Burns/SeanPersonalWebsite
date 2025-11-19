# Assets Directory

This directory contains all media assets for the Global Learning Canvas website.

## Directory Structure

```
assets/
├── images/          # Project images, profile pictures, etc.
│   ├── apex.jpg
│   ├── truck.jpg
│   ├── lidar.jpg
│   ├── messenger.jpg
│   ├── fantasy.jpg
│   └── world-map.svg
└── videos/          # Project demonstration videos, etc.
```

## Adding Images

1. **Project Images**: Add project screenshots/thumbnails as `.jpg` or `.png` files
   - Recommended size: 800x600px minimum
   - Format: JPG for photos, PNG for graphics
   - Name them descriptively (e.g., `apex-dashboard.jpg`)

2. **Profile Pictures**: Add your professional photo
   - Recommended size: 400x400px
   - Format: JPG or PNG
   - Square aspect ratio works best

3. **Update References**: After adding images, update the `imageUrl` in `content.js`:
   ```javascript
   imageUrl: 'assets/images/your-image.jpg'
   ```

## Adding Videos

1. **Upload Videos**: Add `.mp4` videos to the `videos/` directory
   - Recommended format: MP4 (H.264 codec)
   - Recommended size: 1920x1080px (1080p) or 1280x720px (720p)
   - Keep file sizes under 50MB for web performance

2. **Reference Videos**: In your project cards or modals, you can embed videos:
   ```html
   <video controls>
       <source src="assets/videos/demo.mp4" type="video/mp4">
   </video>
   ```

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images before uploading
- Lazy loading is already enabled - images load as users scroll
- Background preloading ensures fast navigation
- Consider using WebP format for better compression (with JPG fallback)

## Current Placeholders

The website currently uses icon emojis as placeholders:
- 🚀 for ApeX
- 🚛 for Truck Simulator
- 🌲 for LiDAR Backpack
- 💬 for Marketplace Messenger
- 🏈 for Fantasy Football

Replace these by adding actual images and updating the paths in `content.js`.
