# Videos Folder

Place your video files here for project demos.

## Recommended Specs

### Demo Videos
- **Format:** MP4 (H.264 codec) or WebM
- **Dimensions:** 1920x1080px (1080p) or 1280x720px (720p)
- **Duration:** Keep under 2 minutes for best performance
- **File Size:** < 10MB (compress if larger)
- **Frame Rate:** 30fps

## Tips

1. **Compress videos** using [HandBrake](https://handbrake.fr/) or online tools
2. **Use descriptive names** like `apex-demo.mp4`
3. **Consider YouTube** for longer videos (better for bandwidth)
4. **Test on mobile** to ensure good playback

## Alternative: Using YouTube

Instead of hosting large video files, consider:

1. Upload video to YouTube
2. Get the video ID from the URL
3. Embed using iframe in `index.html`:

```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        frameborder="0"
        allowfullscreen>
</iframe>
```

## Video Compression Commands

### Using FFmpeg (if installed):

```bash
# Compress to web-friendly size
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4

# Create WebM version
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm
```
