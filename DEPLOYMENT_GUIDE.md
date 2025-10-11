# GoDaddy Deployment Guide for Travel Website

## ✅ What Has Been Done

1. **Configured Next.js for Static Export**
   - Added `output: 'export'` to next.config.ts
   - Added `trailingSlash: true` for proper routing
   - Built the static files in the `/out` directory

2. **Created .htaccess File**
   - Added HTTPS redirection
   - Configured URL rewriting for clean URLs
   - Added compression and caching rules

3. **Generated Production Build**
   - All static files are ready in the `/out` folder
   - All pages have been pre-rendered as HTML

## 📁 Files to Upload

Upload ALL contents from the `/out` directory to your GoDaddy hosting root folder (usually `public_html` or `www`).

## 🚀 Deployment Steps

### Method 1: Using GoDaddy File Manager (Recommended for First-Time)

1. **Login to GoDaddy Account**
   - Go to https://www.godaddy.com
   - Login with your credentials (jay9898984686@gmail.com)

2. **Access cPanel/Hosting Control Panel**
   - Go to "My Products"
   - Find your hosting plan
   - Click "Manage" or "cPanel Admin"

3. **Open File Manager**
   - In cPanel, find and click "File Manager"
   - Navigate to `public_html` directory

4. **Upload Files**
   - Click "Upload" button
   - Upload the entire contents of the `/out` folder
   - Make sure to include:
     - All HTML files
     - `_next` folder (contains CSS and JS)
     - `.htaccess` file (important for routing)
     - All image files and assets

### Method 2: Using FTP Client (Faster for Large Files)

1. **Get FTP Credentials**
   - In GoDaddy cPanel, go to "FTP Accounts"
   - Note your FTP server, username, and password
   - Or create a new FTP account

2. **FTP Client Setup** (using FileZilla or similar)
   ```
   Host: Your domain or FTP server address
   Username: Your FTP username
   Password: Your FTP password
   Port: 21 (or 22 for SFTP if available)
   ```

3. **Upload Files**
   - Connect to your server
   - Navigate to `public_html` on the remote server
   - Upload all contents from `/out` folder
   - Ensure all files transfer successfully

### Method 3: Using Terminal (Advanced)

If you have SSH access:

```bash
# Navigate to the out directory
cd /Users/apple/Faizan-test/travel/out

# Upload using SCP (replace with your actual details)
scp -r ./* username@yourdomain.com:~/public_html/

# Or using rsync for better performance
rsync -avz --progress ./* username@yourdomain.com:~/public_html/
```

## 🔧 Post-Deployment Checklist

1. **Verify Website Access**
   - Visit your domain: https://yourdomain.com
   - Check if the homepage loads correctly

2. **Test Navigation**
   - Click through all menu items
   - Test all links and buttons
   - Verify all pages load correctly

3. **Check SSL Certificate**
   - Ensure the padlock icon appears in browser
   - Verify HTTPS is working

4. **Test Contact Forms**
   - Note: API routes (/api/contact, /api/send-inquiry) won't work on static hosting
   - You'll need to set up a separate backend service or use a form service like:
     - Formspree (https://formspree.io)
     - Netlify Forms
     - EmailJS
     - Or create a simple PHP script on GoDaddy

## ⚠️ Important Notes

1. **Contact Form Alternative**
   Since this is a static export, the Node.js API routes won't work. Here's a simple PHP alternative you can use on GoDaddy:

   Create a file `contact.php` in your public_html:
   ```php
   <?php
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
       $name = $_POST['name'];
       $email = $_POST['email'];
       $message = $_POST['message'];

       $to = "your-email@example.com";
       $subject = "New Contact Form Submission";
       $body = "Name: $name\nEmail: $email\nMessage: $message";

       mail($to, $subject, $body);
       header("Location: /contact?success=true");
   }
   ?>
   ```

2. **Future Updates**
   - Make changes locally
   - Run `npm run build` to regenerate the static files
   - Upload the new `/out` folder contents
   - Consider using Git deployment if GoDaddy supports it

3. **Domain Configuration**
   - If you haven't pointed your domain to the hosting yet:
     - Go to DNS Management in GoDaddy
     - Point A record to your hosting IP
     - Wait for DNS propagation (can take up to 48 hours)

## 📞 Support

If you encounter any issues:
1. Check GoDaddy's error logs in cPanel
2. Verify all files were uploaded correctly
3. Ensure .htaccess file is present and has correct permissions (644)
4. Contact GoDaddy support for hosting-specific issues

## 🎉 Your Website is Ready!

Once uploaded, your travel website will be live at your domain with SSL enabled!