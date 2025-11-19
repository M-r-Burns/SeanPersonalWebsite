# Deployment Guide - Cloudflare Pages

This guide walks you through deploying your Global Learning Canvas website to Cloudflare Pages.

## Why Cloudflare Pages?

- ✅ **Free** - Unlimited bandwidth and requests
- ⚡ **Fast** - Global CDN with edge caching
- 🔒 **Secure** - Free SSL/HTTPS
- 🚀 **Auto-deploy** - Push to GitHub = instant deploy
- 📊 **Analytics** - Built-in (optional)
- 🌐 **Custom domains** - Easy DNS setup

## Prerequisites

Before you begin, you need:
1. ✅ GitHub account ([sign up here](https://github.com/signup))
2. ✅ Cloudflare account ([sign up here](https://dash.cloudflare.com/sign-up))
3. ✅ Git installed on your computer

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
# Navigate to your project folder
cd /path/to/SeanPersonalWebsite

# Check if git is already initialized
git status

# If not, initialize it
git init
git branch -M main
```

### 1.2 Commit Your Files

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Global Learning Canvas website"
```

## Step 2: Push to GitHub

### 2.1 Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon → **New repository**
3. Name it: `personal-website` (or your preferred name)
4. Keep it **Public** (or Private if you prefer)
5. **Don't** initialize with README, .gitignore, or license
6. Click **Create repository**

### 2.2 Push Your Code

GitHub will show you commands. Use these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace** `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values.

### 2.3 Verify Upload

Refresh your GitHub repository page. You should see all your files!

## Step 3: Deploy to Cloudflare Pages

### 3.1 Access Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Log in to your account
3. Click **Pages** in the left sidebar
4. Click **Create a project**

### 3.2 Connect GitHub

1. Click **Connect to Git**
2. Choose **GitHub**
3. Click **Authorize Cloudflare Pages**
4. Authorize access to your repositories

### 3.3 Select Repository

1. Find and select your website repository
2. Click **Begin setup**

### 3.4 Configure Build Settings

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Project name** | `personal-website` (or your choice) |
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | (leave empty) |
| **Build output directory** | `/` |

### 3.5 Deploy!

1. Click **Save and Deploy**
2. Wait 1-2 minutes while Cloudflare deploys
3. You'll get a URL like: `https://personal-website-abc.pages.dev`

### 3.6 Visit Your Site

Click the URL to see your live website! 🎉

## Step 4: Custom Domain (Optional)

Want to use your own domain (e.g., `yourname.com`)? Here's how:

### 4.1 Purchase a Domain

Buy a domain from:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (cheapest, no markup)

### 4.2 Add Domain to Cloudflare Pages

1. In Cloudflare Pages, go to your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `yourname.com`)
5. Click **Continue**

### 4.3 Update DNS Records

Cloudflare will show you DNS records to add. Two options:

#### Option A: Domain Already on Cloudflare
If your domain's nameservers point to Cloudflare:
1. Cloudflare automatically adds the records
2. Wait 5-10 minutes for DNS propagation
3. Done! ✅

#### Option B: Domain Elsewhere
If your domain is at another registrar:
1. Copy the DNS records shown
2. Go to your domain registrar
3. Add the CNAME record:
   ```
   Name: @ (or yourname.com)
   Type: CNAME
   Value: personal-website-abc.pages.dev
   ```
4. Wait 24-48 hours for DNS propagation

### 4.4 Enable HTTPS

Cloudflare automatically provides SSL certificate. Wait about 5 minutes, then:
1. Visit `https://yourname.com`
2. Verify the site loads securely
3. In Cloudflare Pages, set **Always Use HTTPS** to ON

## Step 5: Automatic Deployments

Now, every time you push to GitHub, your site auto-updates!

### Making Updates

```bash
# 1. Edit your files (content.js, etc.)

# 2. Commit changes
git add .
git commit -m "Updated projects section"

# 3. Push to GitHub
git push origin main

# 4. Cloudflare automatically deploys!
# Check deployment status in Cloudflare dashboard
```

## Step 6: Configure Analytics (Optional)

### 6.1 Enable Web Analytics

1. In Cloudflare Pages, click your project
2. Go to **Analytics** tab
3. Click **Enable Web Analytics**
4. Copy the beacon code
5. Paste before `</head>` in `index.html`

### 6.2 View Analytics

After 24 hours, you'll see:
- Page views
- Visitors
- Top pages
- Referrers
- Geographic data

## Step 7: Performance Optimization

Your site is already optimized, but here are additional tips:

### 7.1 Optimize Images

Before uploading images:
1. Compress with [TinyPNG](https://tinypng.com)
2. Resize to appropriate dimensions
3. Use JPG for photos, PNG for graphics
4. Consider WebP format for better compression

### 7.2 Enable Cloudflare Features

In Cloudflare dashboard:

| Feature | What It Does | How to Enable |
|---------|--------------|---------------|
| **Auto Minify** | Compresses CSS/JS/HTML | Speed → Optimization → Auto Minify |
| **Brotli** | Better compression | Speed → Optimization → Brotli |
| **Rocket Loader™** | Faster JS loading | Speed → Optimization → Rocket Loader |

### 7.3 Test Performance

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target scores: 90+ on all metrics.

## Troubleshooting

### Issue: Deployment Failed

**Solution:**
1. Check Cloudflare Pages deployment logs
2. Verify all files are in the repository
3. Ensure no build errors in logs
4. Try re-deploying

### Issue: Changes Not Showing

**Solution:**
1. Clear Cloudflare cache:
   - Go to **Caching** → **Configuration**
   - Click **Purge Everything**
2. Hard refresh browser: `Ctrl + Shift + R`
3. Wait 5 minutes for CDN propagation

### Issue: Custom Domain Not Working

**Solution:**
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check SSL certificate is active
4. Try incognito/private browsing mode

### Issue: Form Not Working After Deploy

**Solution:**
1. Verify Formspree API key in `content.js`
2. Check browser console for errors (F12)
3. Verify your domain is allowed in Formspree settings
4. Test from different browser

## Rollback to Previous Version

Made a mistake? Easy to rollback:

1. Go to Cloudflare Pages → your project
2. Click **Deployments** tab
3. Find the working version
4. Click **···** (three dots)
5. Click **Rollback to this deployment**

## Branch Deployments (Preview)

Test changes before going live:

```bash
# Create a new branch
git checkout -b feature/new-project

# Make changes and commit
git add .
git commit -m "Add new project"

# Push branch
git push origin feature/new-project
```

Cloudflare automatically creates preview URL:
`https://new-project.personal-website.pages.dev`

When ready, merge to main:
```bash
git checkout main
git merge feature/new-project
git push origin main
```

## Environment Variables (If Needed)

If you add backend features later:

1. In Cloudflare Pages → **Settings** → **Environment variables**
2. Add key-value pairs
3. Re-deploy to apply

## Security Best Practices

✅ **Already Implemented:**
- HTTPS enabled
- Security headers in `_headers` file
- XSS protection
- Content Security Policy

✅ **Additional Steps:**
1. Enable **Bot Fight Mode** in Cloudflare (free DDoS protection)
2. Set up **WAF rules** for added security
3. Enable **2FA** on your Cloudflare account
4. Regularly update content and dependencies

## Monitoring

### Set Up Alerts

1. Go to Cloudflare → **Notifications**
2. Create alerts for:
   - Deployment failures
   - High traffic spikes
   - SSL certificate expiration
   - Downtime

### Uptime Monitoring

Use free services:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

## Costs

### Cloudflare Pages (Free Tier)

| Feature | Free Tier Limit |
|---------|----------------|
| Requests | Unlimited |
| Bandwidth | Unlimited |
| Builds | 500/month |
| Custom domains | 100 |
| Seat | 1 free |

**You'll likely never exceed free tier limits.**

### When You Might Pay

- Custom domain registration: $8-15/year
- Cloudflare Pro (optional): $20/month for advanced features
- Formspree Pro: $10/month for 1000+ submissions

## Next Steps

After deployment:

1. ✅ Add to LinkedIn/resume
2. ✅ Share on social media
3. ✅ Set up Google Search Console
4. ✅ Submit to web directories
5. ✅ Update regularly with new projects

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Web.dev Performance](https://web.dev/performance/)

## Getting Help

**Cloudflare Support:**
- [Community Forum](https://community.cloudflare.com/)
- [Discord](https://discord.cloudflare.com)
- Email support (for paid plans)

**General Web Dev:**
- [Stack Overflow](https://stackoverflow.com)
- [r/webdev](https://reddit.com/r/webdev)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Congratulations!** Your website is live and production-ready. 🚀

**Questions?** Check `EDITING_GUIDE.md` for content updates.

---

*Last updated: 2025*
