# Project Videos

Place your project demo videos here.

## Recommended Specifications

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Duration**: 10-30 seconds (short demos)
- **File size**: Under 10MB (compress if needed)
- **Frame rate**: 30fps or 60fps

## How to Use

1. Add your demo videos to this folder
2. Update the project in `js/config.js`:
   ```javascript
   projects: [
     {
       name: "My Project",
       video: "assets/videos/my-project-demo.mp4",
       // ... other fields
     }
   ]
   ```

## Video Optimization Tips

- Use [HandBrake](https://handbrake.fr/) to compress videos
- Keep videos short and focused (10-30 seconds)
- Show key features or interactions
- Use screen recording software like:
  - **OBS Studio** (Free, open source)
  - **QuickTime** (Mac)
  - **Windows Game Bar** (Windows 10/11)
  - **Loom** (Browser-based)

## Compression Settings (HandBrake)

```
Format: MP4
Video Codec: H.264
Quality: RF 23-28 (lower = higher quality)
Frame Rate: Same as source
Resolution: 1280x720 or 1920x1080
Audio: AAC, 128kbps
```

## Examples

- `apex-demo.mp4` - Demo of ApeX platform features
- `truck-simulator-demo.mp4` - Simulation in action
- `messenger-demo.mp4` - Chat interface demonstration

## Alternative: Using GIFs

For shorter animations (< 5 seconds), consider using GIFs instead:
- Tools: [Gifox](https://gifox.io/), [LICEcap](https://www.cockos.com/licecap/)
- Keep under 5MB
- Lower frame rate (10-15fps)
