# FlickB Marketplace - Deployment Guide

## 📱 **App Overview**
**FlickB** is a fully functional marketplace PWA (Progressive Web App) for buying and selling products.
- **Owned by:** Homlivia Pvt. Ltd.
- **Tech Stack:** React + FastAPI + MongoDB
- **Features:** Browse products, post ads, chat, favorites, user authentication
- **Mobile Ready:** PWA installable on iOS and Android

---

## 🚀 **Deployment Options**

### **Option 1: Deploy on Emergent Platform (Recommended - Easiest)**

Your app is already running on Emergent! Here's how to make it live:

1. **Push to GitHub** (if not done already)
   - Connect your GitHub account in Emergent dashboard
   - Your app will auto-deploy on every push

2. **Native Deployment**
   - Go to Emergent dashboard → Your Project
   - Click "Deploy" button
   - Your app will be live at: `https://your-app-name.emergent.sh`

3. **Custom Domain (Flickb.com)**
   - Purchase domain from GoDaddy, Namecheap, etc.
   - In Emergent dashboard: Settings → Custom Domain
   - Add `flickb.com` 
   - Update DNS records:
     ```
     Type: CNAME
     Name: @
     Value: your-app-name.emergent.sh
     ```

📚 **Need help?** Ask the support agent: "How do I deploy and connect custom domain?"

---

### **Option 2: Deploy on Vercel (Frontend) + Railway (Backend)**

#### **A. Frontend Deployment (Vercel)**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd /app/frontend
   vercel --prod
   ```

3. **Configure Environment**
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `REACT_APP_BACKEND_URL` = `https://your-backend-url.railway.app`

4. **Custom Domain**
   - Vercel dashboard → Domains → Add `flickb.com`
   - Update DNS:
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     ```

#### **B. Backend Deployment (Railway)**

1. **Create Railway Account** at [railway.app](https://railway.app)

2. **Deploy Backend**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   cd /app/backend
   railway login
   railway init
   railway up
   ```

3. **Add Environment Variables**
   - Railway dashboard → Variables
   - Add:
     ```
     MONGO_URL=mongodb+srv://your-atlas-url
     DB_NAME=flickb_db
     ```

4. **MongoDB Setup**
   - Create free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Get connection string
   - Whitelist Railway IP (0.0.0.0/0 for simplicity)

---

### **Option 3: Deploy on AWS/Google Cloud (Production-Grade)**

#### **AWS Deployment**

1. **Frontend (S3 + CloudFront)**
   ```bash
   cd /app/frontend
   yarn build
   
   # Upload to S3
   aws s3 sync build/ s3://flickb-frontend
   
   # Setup CloudFront CDN
   aws cloudfront create-distribution --origin-domain-name flickb-frontend.s3.amazonaws.com
   ```

2. **Backend (EC2/ECS)**
   ```bash
   # Create EC2 instance
   # SSH into server
   ssh -i your-key.pem ubuntu@your-ec2-ip
   
   # Install dependencies
   sudo apt update
   sudo apt install python3-pip nginx
   
   # Setup app
   git clone your-repo
   cd backend
   pip3 install -r requirements.txt
   
   # Run with Gunicorn
   gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app --bind 0.0.0.0:8001
   ```

3. **Domain Setup**
   - Route 53 → Create hosted zone for `flickb.com`
   - Add A record pointing to CloudFront/EC2

---

## 📱 **PWA Installation Instructions**

### **For Users (iOS)**
1. Open `flickb.com` in Safari
2. Tap Share button (⎙)
3. Scroll down → "Add to Home Screen"
4. Tap "Add" → FlickB icon appears on home screen

### **For Users (Android)**
1. Open `flickb.com` in Chrome
2. Tap menu (⋮) → "Add to Home screen"
3. Tap "Add" → FlickB icon appears

---

## 🔧 **Pre-Deployment Checklist**

- [ ] Update backend `.env` with production MongoDB URL
- [ ] Update frontend `.env` with production backend URL
- [ ] Test all features (login, post ad, chat, favorites)
- [ ] Enable HTTPS (automatic on Vercel/Railway/Emergent)
- [ ] Configure CORS in backend for your domain
- [ ] Test PWA installation on real devices
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Configure analytics (Google Analytics, PostHog)

---

## 🌐 **Domain Configuration for Flickb.com**

### **DNS Records (for any registrar)**

```
Type    Name    Value                           TTL
A       @       Your-Server-IP                  300
CNAME   www     flickb.com                      300
CNAME   api     your-backend-domain.com         300
```

### **SSL Certificate**
- Most platforms (Vercel, Railway, Emergent) provide automatic SSL
- For custom setup: Use [Let's Encrypt](https://letsencrypt.org/)
  ```bash
  sudo certbot --nginx -d flickb.com -d www.flickb.com
  ```

---

## 📊 **Post-Deployment Setup**

1. **Google Search Console**
   - Verify `flickb.com`
   - Submit sitemap

2. **Social Media Setup**
   - Add Open Graph meta tags (already included)
   - Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

3. **Monitoring**
   - Set up uptime monitoring (UptimeRobot, Pingdom)
   - Configure error tracking

---

## 🆘 **Need Help?**

### **Emergent Support**
- Ask support agent: "How do I deploy FlickB to production?"
- Check Emergent docs: https://docs.emergent.sh

### **Quick Fixes**

**Issue:** PWA not installing
- **Fix:** Ensure HTTPS is enabled and manifest.json is accessible

**Issue:** Backend connection failed
- **Fix:** Check CORS settings in backend, verify REACT_APP_BACKEND_URL

**Issue:** Images not loading
- **Fix:** Verify image URLs are accessible, check CSP headers

---

## 📝 **Backend Implementation Note**

Currently, the app uses **mock data** for demonstration. To make it fully functional:

1. Implement backend APIs (I can help with this!)
2. Connect MongoDB for data persistence
3. Add authentication (JWT tokens)
4. Implement file upload for product images
5. Add real-time chat with WebSockets

**Want me to build the backend?** Just say "Let's implement the backend now!"

---

© 2025 Flickb - A subsidiary of Homlivia Pvt. Ltd.
