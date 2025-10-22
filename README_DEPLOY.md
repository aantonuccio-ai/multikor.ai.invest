# Multikor.ai Investor Platform

An interactive, password-protected web presentation for seed and Series A investor presentations.

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL will be here]

**Access Code:** `multikor2026`

## 📋 Features

- **Password Protection** - Secure access with session-based authentication
- **Interactive ROI Calculators** - Live calculations for each business segment
- **Animated Financial Charts** - Revenue growth and customer acquisition visualizations
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Business Model Page** - Comprehensive breakdown of pricing and strategy
- **Professional Dark Theme** - Modern, elegant design

## 🔧 Technology Stack

- Pure HTML/CSS/JavaScript
- Chart.js for data visualizations
- No framework dependencies
- Static site - no backend required

## 📊 Content Sections

1. **Hero Section** - Key metrics and value proposition
2. **Value Proposition** - Four key advantages
3. **Business Segments** - Support, Finance, and Procurement details
4. **ROI Calculator** - Interactive calculators with real-time results
5. **Financial Projections** - 3-year revenue and customer charts
6. **Unit Economics** - Best-in-class metrics
7. **Investment Ask** - Seed and Series A details
8. **Business Model** - Complete pricing and strategy breakdown

## 🔐 Security

- Client-side password protection (basic)
- Session-based access
- Confidential investor content
- For production use, consider server-side authentication

### Changing the Password

Edit `script.js` line 2:
```javascript
const INVESTOR_PASSWORD = 'multikor2026'; // Change this
```

## 🌐 Deployment

### GitHub Pages (Current)
This site is deployed using GitHub Pages. Any push to the main branch automatically updates the live site.

### Alternative Deployment Options

**Netlify:**
1. Go to netlify.com
2. Drag and drop the folder
3. Get instant HTTPS URL

**Vercel:**
```bash
npm i -g vercel
vercel
```

**AWS S3:**
Upload as static website hosting

## 📱 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 📄 Files

- `index.html` - Main presentation page
- `business-model.html` - Detailed business model page
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality and charts
- `logo.png` - Multikor.ai logo
- `launch.sh` - Local development server launcher

## 🛠️ Local Development

**Option 1: Launch Script**
```bash
./launch.sh
```

**Option 2: Python Server**
```bash
python3 -m http.server 8000
open http://localhost:8000
```

**Option 3: Direct Open**
Double-click `index.html`

## 📧 Contact

For questions about the platform or investment opportunities, please contact the Multikor.ai team.

---

**Version:** 1.0
**Last Updated:** October 22, 2025
**Confidential:** Investor Access Only

© 2025 Multikor.ai. All rights reserved.
