# 🚀 DEPLOYMENT GUIDE - Digital Catalogue Website

This guide will help you deploy your website for **FREE** in under 10 minutes!

## 📋 Prerequisites

1. GitHub account
2. Your code pushed to GitHub repository

---

## 🎯 QUICK DEPLOYMENT (Recommended)

### **Step 1: Deploy Backend on Render** (5 minutes)

1. **Go to** https://render.com and sign up (free)

2. **Click** "New +" → "Web Service"

3. **Connect your GitHub repository**
   - Authorize Render to access your GitHub
   - Select your repository

4. **Configure the service:**
   - **Name:** `greenpower-backend` (or any name)
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

5. **Click "Create Web Service"**
   - Wait 2-3 minutes for deployment
   - Copy your backend URL (e.g., `https://greenpower-backend.onrender.com`)

---

### **Step 2: Deploy Frontend on Vercel** (3 minutes)

1. **Go to** https://vercel.com and sign up (free)

2. **Click** "Add New..." → "Project"

3. **Import your GitHub repository**
   - Click "Import" next to your repo

4. **Configure the project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)

5. **Add Environment Variable:**
   - Click "Environment Variables"
   - **Name:** `VITE_API_URL`
   - **Value:** `https://your-backend-url.onrender.com/api`
   - (Use the URL from Step 1)

6. **Click "Deploy"**
   - Wait 1-2 minutes
   - Your site is live! 🎉

---

## 🌐 Alternative: Deploy Frontend on Netlify

1. **Go to** https://netlify.com and sign up

2. **Click** "Add new site" → "Import an existing project"

3. **Connect GitHub** and select your repository

4. **Configure:**
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`

5. **Add Environment Variable:**
   - Go to Site settings → Environment variables
   - Add `VITE_API_URL` with your backend URL

6. **Deploy**

---

## ✅ Post-Deployment Checklist

After deployment, test these:

- [ ] Home page loads
- [ ] All navigation links work
- [ ] Products page displays correctly
- [ ] Product filtering works
- [ ] Product details page works
- [ ] About page loads
- [ ] Contact form submits successfully
- [ ] Mobile responsive design works
- [ ] All images load properly

---

## 🔧 Troubleshooting

### Backend not responding:
- Check Render logs for errors
- Ensure PORT environment variable is set
- Verify CORS is enabled for your frontend domain

### Frontend API calls failing:
- Verify VITE_API_URL environment variable
- Check browser console for errors
- Ensure backend URL includes `/api` path

### Images not loading:
- Check if Unsplash images are accessible
- Verify image URLs in backend/index.js

---

## 📱 Share Your Live Website

Once deployed, you'll have two URLs:

- **Frontend:** `https://your-project.vercel.app`
- **Backend API:** `https://your-backend.onrender.com`

Share the **Frontend URL** with your internship evaluators!

---

## 💰 Costs

✅ **100% FREE** on both platforms:
- Vercel: Unlimited free hosting for frontend
- Render: 750 hours/month free (always-on for 1 app)

---

## 🎓 What This Demonstrates

✅ Full-stack deployment skills  
✅ Understanding of environment variables  
✅ Knowledge of modern deployment platforms  
✅ Production-ready application  
✅ Professional development workflow  

---

## 📞 Need Help?

If you encounter issues:
1. Check Render/Vercel deployment logs
2. Review browser console for errors
3. Verify all environment variables are set correctly

Good luck with your internship! 🚀
