# Multikor.ai Interactive Investor Platform

An interactive, private web presentation for Seed and Series A investor presentations.

## 🚀 Features

### Password Protection
- Secure access with password authentication
- Session-based access (stays logged in during browser session)
- Default password: `XXXXXXXXXX` (change in `script.js`)

### Interactive Content

1. **Hero Section** - Compelling value proposition with key metrics
2. **Value Proposition** - Four key advantages of Multikor
3. **Business Segments** - Detailed breakdown of Customer Support, Finance, and Procurement segments
4. **ROI Calculator** - Interactive calculators for each segment that allow investors to model different scenarios
5. **Financial Projections** - Animated charts showing 3-year revenue and customer growth
6. **Unit Economics** - Best-in-class metrics with industry comparisons
7. **Investment Ask** - Clear Seed and Series A requirements
8. **Competitive Advantage** - Why Multikor wins
9. **Path to $1B+** - Timeline showing growth trajectory

### Interactive Features
- **Live ROI Calculators**: Investors can input their own numbers to see value creation
- **Animated Charts**: Beautiful Chart.js visualizations of financial data
- **Smooth Scrolling**: Professional navigation experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Print-Friendly**: Can be printed for offline review

## 📁 Files

- `index.html` - Main presentation structure
- `styles.css` - Professional dark-themed styling
- `script.js` - Interactive functionality and data visualizations
- `README.md` - This file

## 🔧 Setup Instructions

### Option 1: Open Directly (Simplest)
1. Navigate to the folder in Finder
2. Double-click `index.html`
3. Enter password: `multikor2026`

### Option 2: Local Server (Recommended for sharing)
```bash
# Navigate to the directory
cd /Users/apple/multikor_business/investor_platform

# Start a simple Python server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 3: Deploy to Web Hosting
Upload all files to any web hosting service:
- **Netlify**: Drag and drop the folder (free, automatic HTTPS)
- **Vercel**: Connect to GitHub repo (free, automatic HTTPS)
- **AWS S3**: Upload as static website
- **GitHub Pages**: Push to repo and enable Pages

## 🔐 Security

### Changing the Password
1. Open `script.js`
2. Find line 2: `const INVESTOR_PASSWORD = 'multikor2026';`
3. Change to your preferred password
4. Save the file

### Additional Security Options
For production use, consider:
- Adding HTTPS (required for web deployment)
- Implementing server-side authentication
- Adding access logging
- Setting up expiring access tokens

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent: #3b82f6;
    /* etc. */
}
```

### Financial Data
Update numbers in `script.js` in the `initCharts()` function:
```javascript
datasets: [
    {
        label: 'Customer Support',
        data: [3.55, 8.26, 15.7], // Change these values
        ...
    }
]
```

### Calculator Defaults
Modify default values in `index.html`:
```html
<input type="number" id="support-tickets" value="125000" ...>
```

## 📊 Data Sources

All financial projections are based on:
- `Multikor_Business_Model_v3.1.md`
- `Multikor_Financial_Model_Guide_v3.1.md`
- Enterprise benchmarks from MetricNet, Forrester, APQC, Hackett Group
- Real-world validation from AIG case study

## 🎯 Usage Tips

### For Investor Meetings
1. **Pre-Meeting**: Send the link with password via separate channels
2. **During Meeting**: Use the ROI calculator to model customer scenarios live
3. **Post-Meeting**: Investors can revisit and share internally (password protected)

### For Email Outreach
```
Subject: Multikor.ai - Seed Investment Opportunity ($1.5M-$3M)

Hi [Name],

I'd like to share Multikor's interactive investor presentation with you.

Access: [URL or attached files]
Password: [Send separately for security]

Key highlights:
- $8.3M Year 1 ARR target with 10 customers
- 12.5x customer ROI across all segments
- $84M Year 3 ARR with exceptional unit economics

The platform includes interactive ROI calculators so you can model
different customer scenarios yourself.

Looking forward to discussing further.

Best,
[Your Name]
```

## 🔄 Updates

To update financial projections:
1. Edit the data in `script.js` (charts section)
2. Update HTML tables in `index.html`
3. Adjust calculator default values if needed
4. Test all calculators to ensure accuracy

## 🐛 Troubleshooting

**Charts not displaying?**
- Check internet connection (Chart.js loads from CDN)
- Open browser console (F12) to see errors
- Ensure all files are in the same directory

**Password not working?**
- Check `script.js` for correct password
- Clear browser cache and try again
- Check browser console for JavaScript errors

**Styling looks broken?**
- Ensure `styles.css` is in the same folder as `index.html`
- Check file permissions
- Try a different browser

## 📱 Browser Compatibility

Tested and working on:
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile browsers ✅

## 📄 License

Confidential and proprietary to Multikor.ai.
Not for distribution beyond intended investor audience.

## 📞 Support

For questions or technical issues:
- Check this README first
- Review browser console for errors
- Contact your development team

---

**Version**: 1.0
**Last Updated**: October 22, 2025
**Created with**: Claude Code (Anthropic)

