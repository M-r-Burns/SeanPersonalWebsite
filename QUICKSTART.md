# ⚡ Quick Start Guide

Get your website up and running in 5 minutes!

---

## ✅ Step 1: Edit Your Information (2 minutes)

Open `js/config.js` and update:

### Personal Info
```javascript
personal: {
  name: "YOUR NAME HERE",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/YOUR_PROFILE",
  apexLink: "YOUR_APEX_LINK",
  location: "Your City, State"
}
```

### Hero Section
```javascript
hero: {
  headline: "YOUR HEADLINE HERE",
  description: "Your degree and university..."
}
```

### About Me
Update the narrative with your personal story!

---

## ✅ Step 2: Set Up Contact Form (1 minute)

1. Go to **[https://formspree.io](https://formspree.io)**
2. Sign up (free)
3. Create a new form
4. Copy the endpoint URL
5. Paste in `js/config.js`:

```javascript
contact: {
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
}
```

---

## ✅ Step 3: Test Locally (1 minute)

**Option A: Simple** - Just open `index.html` in your browser

**Option B: Local Server** (recommended):
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

---

## ✅ Step 4: Add Your Images (Optional)

1. Add profile photo to `assets/images/profile/`
2. Add project images to `assets/images/projects/`
3. Update paths in `config.js`

---

## ✅ Step 5: Deploy to Cloudflare (1 minute)

### First Time Setup:
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial website"
   git push origin main
   ```

2. **Deploy to Cloudflare:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Connect your GitHub repository
   - Click "Deploy"
   - Done! Your site is live!

### Future Updates:
```bash
# Edit files, then:
git add .
git commit -m "Update content"
git push

# Cloudflare auto-deploys in ~1 minute!
```

---

## 🎉 You're Done!

Your website is now live at: `https://your-site.pages.dev`

---

## 📚 Next Steps

### Customize Further:
- Read [EDITING_GUIDE.md](EDITING_GUIDE.md) for detailed customization
- See [DEPLOYMENT.md](DEPLOYMENT.md) for advanced deployment options

### Add Content:
- Update your projects in `config.js`
- Write blog posts in `blog/` folder
- Add more experience entries

### Share Your Site:
- Add to LinkedIn profile
- Include in resume
- Share on social media

---

## 🐛 Troubleshooting

### Website looks broken?
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors (F12)
- Verify all file paths in config.js

### Contact form not working?
- Verify Formspree endpoint is correct
- Check that you've verified your Formspree email
- Test with browser console open

### Need more help?
- See [EDITING_GUIDE.md](EDITING_GUIDE.md)
- Check browser console (F12 → Console tab)

---

## ⏱️ Total Time: ~5 Minutes

- ✅ Edit config.js: 2 min
- ✅ Set up Formspree: 1 min
- ✅ Test locally: 1 min
- ✅ Deploy: 1 min

**Your professional website is now live!** 🚀

---

**Questions?** Check the full guides:
- [EDITING_GUIDE.md](EDITING_GUIDE.md) - How to edit everything
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment details
- [README.md](README.md) - Full documentation
