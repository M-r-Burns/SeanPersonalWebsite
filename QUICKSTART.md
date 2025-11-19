# Quick Start Guide

Get your website up and running in 5 minutes!

## 1. Configure Formspree (2 minutes)

1. Go to [formspree.io](https://formspree.io/)
2. Sign up for free
3. Create a new form
4. Copy the form endpoint URL (e.g., `https://formspree.io/f/xvoeabcd`)
5. Open `config.js`
6. Replace `'YOUR_FORMSPREE_ENDPOINT_HERE'` with your endpoint
7. Save the file

## 2. Add Your Content (2 minutes)

### Update Project Links

Open `config.js` and add your project URLs:

```javascript
projectDemoUrls: {
    apex: 'https://your-apex-url.com',
    truck: 'https://your-truck-demo.com',
}
```

### Update Company Links (if needed)

```javascript
companyUrls: {
    crowe: 'https://www.crowe.com/',
    // Your companies here
}
```

## 3. Add Images (Optional - 1 minute)

1. Add `profile.jpg` to `/images/`
2. Add project images to `/images/projects/`
3. Images will automatically lazy-load!

## 4. Deploy to Cloudflare (1 minute)

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your GitHub repo
5. Click "Save and Deploy"

**Done!** Your site is live! 🚀

---

## Next Steps

- Read [EDIT_GUIDE.md](EDIT_GUIDE.md) for detailed editing instructions
- Customize colors in `styles.css`
- Add more projects
- Update your experience section

## Need Help?

Check the [Troubleshooting section](EDIT_GUIDE.md#troubleshooting) in EDIT_GUIDE.md
