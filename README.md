# Swiss Hotels & Resorts - Travel Website

🌐 **Live Website**: https://grand-exotica-hospitality-webs.vercel.app/

## 📌 Project Overview

Welcome to the **Swiss Hotels & Resorts** travel website! This is a modern, professional travel booking platform that helps customers explore and book domestic and international travel destinations. The website showcases luxury travel experiences, hotel packages, and allows visitors to make inquiries about their dream vacations.

### What This Website Does:
- **Displays Travel Destinations**: Shows beautiful destinations in India and around the world
- **Luxury Travel Packages**: Features premium travel experiences and hotel stays
- **Customer Inquiries**: Allows visitors to submit travel inquiries and get personalized quotes
- **Responsive Design**: Works perfectly on computers, tablets, and mobile phones
- **Interactive Experience**: Smooth animations and user-friendly navigation

### Key Features:
- ✈️ International destination showcase (Dubai, Paris, Singapore, etc.)
- 🏝️ Domestic destination showcase (Goa, Kashmir, Kerala, etc.)
- 🏨 Luxury hotel and resort information
- 📧 Contact form for travel inquiries
- 📱 Mobile-friendly responsive design
- 🎨 Beautiful animations and modern design

---

## 🚀 Getting Started (For Non-Technical Users)

Don't worry if you're not familiar with coding! Follow these simple steps to get the website running on your computer.

### Prerequisites - What You Need First:

1. **Node.js** - This is the software that runs the website
   - Go to: https://nodejs.org/
   - Download the "LTS" version (the big green button)
   - Install it like any other program (just keep clicking "Next")

2. **A Code Editor** (Optional but helpful)
   - We recommend Visual Studio Code: https://code.visualstudio.com/
   - Download and install it like any regular program

3. **Git** (For downloading the project)
   - Go to: https://git-scm.com/downloads
   - Download for your operating system
   - Install with default settings

### Step-by-Step Setup:

#### 1️⃣ Download the Project

**Option A: Using Git (Recommended)**
1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to where you want to save the project:
   ```
   cd Desktop
   ```
3. Download the project:
   ```
   git clone https://github.com/Faizan-Vhora/grand-exotica-hospitality.git
   ```
4. Enter the project folder:
   ```
   cd travel
   ```

**Option B: Download as ZIP**
1. Go to your GitHub repository
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your Desktop
5. Open Terminal/Command Prompt and navigate to the folder

#### 2️⃣ Install Dependencies

In your Terminal/Command Prompt (make sure you're in the project folder):

```bash
npm install
```

Wait for it to finish (this might take 2-3 minutes). You'll see a lot of text scrolling - that's normal!

#### 3️⃣ Run the Website Locally

Still in Terminal/Command Prompt, type:

```bash
npm run dev
```

You should see:
```
✓ Ready in X seconds
Local: http://localhost:3000
```

#### 4️⃣ View Your Website

Open your web browser (Chrome, Firefox, Safari, etc.) and go to:
```
http://localhost:3000
```

🎉 **Congratulations! Your website is now running!**

To stop the website, press `Ctrl + C` in the Terminal/Command Prompt.

---

## 🌐 Deployment Guide (Making Your Website Live)

### Option 1: Deploy to Vercel (Easiest - FREE)

Vercel is the company that created Next.js (the framework this website uses). It's the easiest way to deploy.

#### Steps:

1. **Create a Vercel Account**
   - Go to: https://vercel.com/signup
   - Sign up with your GitHub account

2. **Connect Your Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your website is now live! 🎉

4. **Your Website URL**
   - Your website is live at: `https://grand-exotica-hospitality-webs.vercel.app/`
   - Share this link with anyone to view your website

### Option 2: Deploy to GitHub Pages (FREE)

GitHub Pages is a free hosting service from GitHub.

#### Setup Steps:

1. **Prepare for GitHub Pages**
   
   In your project, open `next.config.ts` and update it:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/travel', // Replace 'travel' with your repository name
     assetPrefix: '/travel/', // Replace 'travel' with your repository name
   };
   ```

2. **Build the Website**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npx gh-pages -d out
   ```

4. **Enable GitHub Pages**
   - Go to your GitHub repository
   - Click "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Select "gh-pages" branch
   - Click "Save"

5. **Access Your Website**
   - Your site will be available at: `https://faizan-vhora.github.io/grand-exotica-hospitality`
   - It might take 5-10 minutes to appear the first time

### Option 3: Deploy to Netlify (FREE)

1. **Create Netlify Account**
   - Go to: https://www.netlify.com/
   - Sign up with GitHub

2. **Deploy**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

3. **Your Website is Live!**
   - Netlify provides a URL like: `amazing-name-123.netlify.app`

---

## 🛠️ Making Changes to Your Website

### Changing Text Content:

1. **Homepage Text**: Edit `app/page.tsx`
2. **Destination Information**: Edit files in `data/destinations.ts`
3. **Contact Information**: Edit `components/Footer.tsx`

### Changing Images:

1. Add your images to the `public/images/` folder
2. Update the image paths in the relevant component files

### Changing Colors:

Edit the `tailwind.config.ts` file to change the website's color scheme.

### Common File Locations:

```
travel/
├── app/                  # Main pages
│   ├── page.tsx         # Homepage
│   ├── domestic/        # Domestic destinations page
│   └── international/   # International destinations page
├── components/          # Reusable parts of the website
│   ├── Header.tsx      # Top navigation bar
│   ├── Footer.tsx      # Bottom footer
│   └── sections/       # Homepage sections
├── data/               # Destination data and information
├── public/             # Images and static files
└── styles/             # CSS styling files
```

---

## 🔧 Troubleshooting Guide

### Common Issues and Solutions:

#### "npm is not recognized as a command"
**Solution**: Node.js is not installed properly. Reinstall Node.js from https://nodejs.org/

#### "Port 3000 is already in use"
**Solution**: Another program is using port 3000. Either:
- Close the other program, or
- Run on a different port: `npm run dev -- -p 3001`

#### Website looks broken/unstyled
**Solution**: 
1. Stop the server (Ctrl+C)
2. Delete the `.next` folder
3. Run `npm install` again
4. Run `npm run dev`

#### Changes not appearing
**Solution**:
1. Clear your browser cache (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
2. Make sure you saved the file
3. Check the terminal for any error messages

#### "Module not found" error
**Solution**: Run `npm install` to install missing packages

#### Logo or Images Not Showing on Vercel
**Common Causes & Solutions**:
1. **Wrong Repository Connected**: 
   - Go to Vercel Settings → Git
   - Make sure it's connected to `Faizan-Vhora/grand-exotica-hospitality`
   - NOT `grand-exotica-hospitality-web` or any other variation

2. **Old Deployment Cached**:
   - In Vercel Deployments, click (...) → Redeploy
   - UNCHECK "Use existing Build Cache"
   - Redeploy

3. **Image Path Issues**:
   - Images should be in `public` folder
   - Reference them as `/filename.png` (not `public/filename.png`)
   - Use lowercase filenames for better compatibility

#### Vercel Shows "Initial Commit" Instead of Latest Code
**Solution**:
1. Disconnect and reconnect the correct GitHub repository
2. Make sure you're on the `main` branch
3. Force a new deployment without cache

---

## 📧 Contact & Support

If you need help with this website:

**Website Content Issues**: 
- Contact: Swiss Hotels & Resorts
- Email: swisshotelsresorts@gmail.com
- Phone: +91 8887776669

**Technical Support**:
- GitHub Repository: https://github.com/Faizan-Vhora/grand-exotica-hospitality
- Create an issue on GitHub for technical problems
- Or contact your web developer

---

## 🔄 Regular Maintenance

### Weekly Tasks:
1. **Check Website is Running**: Visit your live URL
2. **Update Content**: Keep destination information current
3. **Check Contact Form**: Ensure inquiries are being received

### Monthly Tasks:
1. **Update Dependencies** (Have a developer do this):
   ```bash
   npm update
   ```
2. **Backup Your Code**: Make sure your GitHub repository is up to date
3. **Check Analytics**: Review visitor statistics (if set up)

### How to Update Content:

1. **Make Changes Locally**:
   - Edit the files as needed
   - Test locally with `npm run dev`

2. **Save Changes to GitHub**:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

3. **Deploy Updates**:
   - **Vercel/Netlify**: Automatically deploys when you push to GitHub
   - **GitHub Pages**: Run `npm run build` then `npx gh-pages -d out`

---

## 📚 Additional Resources

### Learning Resources:
- **Next.js Tutorial**: https://nextjs.org/learn
- **React Basics**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs

### Useful Tools:
- **Image Optimization**: https://tinypng.com/
- **Color Palette Generator**: https://coolors.co/
- **Icon Library**: https://lucide.dev/icons/

### Getting Help:
1. **Google** your error message - someone else has probably faced the same issue
2. **ChatGPT** - Can help explain error messages and suggest solutions
3. **Stack Overflow** - Community of developers who answer questions
4. **GitHub Issues** - Report bugs or ask for features

---

## 🎯 Quick Command Reference

| What You Want To Do | Command To Use |
|---------------------|----------------|
| Install the project | `npm install` |
| Run website locally | `npm run dev` |
| Build for production | `npm run build` |
| Check for errors | `npm run lint` |
| Stop the server | `Ctrl + C` (in terminal) |
| Push changes to GitHub | `git add . && git commit -m "Your message" && git push` |
| Check git status | `git status` |
| View commit history | `git log --oneline` |

---

## ✅ Checklist Before Going Live

- [ ] All placeholder text has been replaced with real content
- [ ] Contact information is correct
- [ ] All images are optimized (under 200KB each if possible)
- [ ] Website works on mobile devices
- [ ] Contact form is tested and working
- [ ] Social media links are correct
- [ ] Terms & conditions / Privacy policy added (if needed)
- [ ] Google Analytics added (optional)
- [ ] Website tested in different browsers

---

**Happy Travels! 🌍✈️**

*This website was built with Next.js, React, and Tailwind CSS for Swiss Hotels & Resorts.*