# 🚀 GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Custom domain (currently pointing to Wix)
- Node.js and npm installed

## Step 1: GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name: `newsleepline-canada`
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (you already have one)

### 2. Push Your Code
```bash
# In your project directory
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/newsleepline-canada.git
git push -u origin main
```

## Step 2: Deploy to GitHub Pages

### Deploy Command
```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push the built files to GitHub
- Make your site available at `https://YOUR_USERNAME.github.io/newsleepline-canada/`

## Step 3: Connect Your Custom Domain

### 1. Update CNAME File
Replace `yourdomain.com` in `public/CNAME` with your actual domain.

### 2. Configure DNS (Remove Wix Settings)

**Remove all Wix DNS settings** and add these records to your domain registrar:

#### Option A: Using A Records (Recommended)
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### Option B: Using CNAME
```
Type: CNAME
Name: @
Value: YOUR_USERNAME.github.io
TTL: 3600
```

### 3. Enable Custom Domain in GitHub
1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Custom domain", enter your domain
4. Save
5. Check "Enforce HTTPS"

## Step 4: Verify Deployment

### Check Your Site
- **GitHub Pages URL**: `https://YOUR_USERNAME.github.io/newsleepline-canada/`
- **Custom Domain**: `https://yourdomain.com`

### DNS Propagation
- DNS changes can take 24-48 hours to propagate
- You can check propagation at [whatsmydns.net](https://whatsmydns.net)

## Step 5: Future Updates

### Deploy Updates
```bash
# Make your changes
git add .
git commit -m "Update description"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Common Issues

#### 1. 404 Errors
- Check that your repository is public
- Verify the `gh-pages` branch exists
- Ensure GitHub Pages is enabled in repository settings

#### 2. Custom Domain Not Working
- Verify DNS settings are correct
- Check that CNAME file is in the `gh-pages` branch
- Wait for DNS propagation (24-48 hours)

#### 3. Build Errors
- Check that all dependencies are installed: `npm install`
- Verify TypeScript compilation: `npm run build`
- Check for any import errors

#### 4. Routing Issues
- Ensure `basename` is set correctly in App.tsx
- Check that all routes are properly configured

### Useful Commands
```bash
# Check build locally
npm run build

# Preview build
npm run preview

# Check deployment status
git log --oneline gh-pages

# Force redeploy
npm run deploy --force
```

## Security Notes

### HTTPS
- GitHub Pages automatically provides HTTPS
- Enable "Enforce HTTPS" in repository settings

### API Keys
- The Google Maps demo key is sufficient for 400 visits/day
- Consider getting your own API key for production

## Performance Tips

### Optimization
- Images are optimized during build
- CSS and JS are minified
- Consider using WebP images for better performance

### Monitoring
- Use Google Analytics for traffic monitoring
- Monitor page load speeds
- Check mobile responsiveness

## Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Verify DNS settings with your domain registrar
3. Test locally with `npm run dev`
4. Check browser console for errors 