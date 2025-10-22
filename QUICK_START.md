# Quick Start Guide

## 🎯 View the Presentation Now

### Method 1: Double-Click (Easiest)
1. Open Finder
2. Navigate to this folder
3. Double-click **`index.html`**
4. Enter password: **`multikor2026`**

### Method 2: Launch Script (Recommended)
```bash
cd /Users/apple/multikor_business/investor_platform
./launch.sh
```
Browser will open automatically at http://localhost:8000

## 🔑 Access Information

**Password**: `multikor2026`

**To Change Password**:
1. Open `script.js`
2. Change line 2: `const INVESTOR_PASSWORD = 'multikor2026';`
3. Save file

## 📋 What's Included

- **Password Protection** - Secure access for investors only
- **Hero Section** - $8.3M Year 1, $84M Year 3 ARR targets
- **Business Segments** - Support, Finance, Procurement details
- **Interactive ROI Calculators** - Live calculators for each segment
- **Financial Charts** - Animated revenue and customer growth
- **Unit Economics** - 15:1 LTV:CAC, 3.6mo payback, 74% margins
- **Investment Ask** - Seed ($1.5M-$3M) and Series A ($20M-$30M)
- **Competitive Advantage** - Why Multikor wins
- **Path to $1B+** - 7-year growth timeline

## 📊 Key Features

### ROI Calculators
Investors can input their own numbers:
- **Support**: Tickets, cost per ticket, automation rate
- **Finance**: Invoices, AP staff, cost reduction
- **Procurement**: Annual spend, optimization rate

All calculators show:
- Current costs
- Annual savings
- Multikor ACV (8% of savings)
- Customer net benefit
- Customer ROI (typically 12.5x)

### Interactive Charts
- Revenue growth by segment (Years 1-3)
- Customer acquisition timeline
- Built with Chart.js for smooth animations

## 🌐 Sharing with Investors

### Email Template
```
Subject: Multikor.ai Investment Opportunity - Interactive Presentation

Hi [Name],

Please access our interactive investor presentation here:
[Link or attachment]

Access code: [Send separately]

The platform includes live ROI calculators so you can model
different scenarios. Key highlights:

- $8.3M Year 1 ARR (10 customers)
- 12.5x customer ROI, validated with enterprise data
- $84M Year 3 ARR with exceptional unit economics

Best regards,
[Your Name]
```

### For In-Person Meetings
1. Open presentation before meeting starts
2. Navigate to ROI Calculator section
3. Use live inputs to model customer scenarios
4. Adjust numbers based on prospect questions

## 🎨 Customization

### Update Financial Data
Edit `script.js` line 160+ for chart data:
```javascript
data: [3.55, 8.26, 15.7], // Year 1, 2, 3 revenue
```

### Change Color Scheme
Edit `styles.css` lines 10-20:
```css
--primary-color: #2563eb;
--accent: #3b82f6;
```

## 🚀 Deployment Options

### Netlify (Recommended)
1. Go to netlify.com
2. Drag and drop this folder
3. Get instant HTTPS URL
4. Share with investors

### Vercel
```bash
npm i -g vercel
cd /Users/apple/multikor_business/investor_platform
vercel
```

### GitHub Pages
1. Create GitHub repo
2. Push these files
3. Enable Pages in settings
4. Access at `https://[username].github.io/[repo]`

## 💡 Pro Tips

1. **Send password separately** - Email link, text password
2. **Test before sharing** - Verify calculators work correctly
3. **Use locally first** - Test with advisors before investors
4. **Track engagement** - Note which sections get most questions
5. **Update regularly** - Refresh with latest metrics monthly

## 🔒 Security Notes

- Password stored in JavaScript (basic protection)
- For production: use server-side auth
- HTTPS required for public deployment
- Consider access logging for tracking

## 📱 Mobile Friendly

Fully responsive design works on:
- Desktop computers
- Tablets (iPad, Android)
- Mobile phones (iPhone, Android)
- All modern browsers

## 🐛 Common Issues

**Charts not showing?**
- Check internet connection (uses Chart.js CDN)
- Open browser console (F12) for errors

**Password not working?**
- Verify `script.js` has correct password
- Clear browser cache

**Styling broken?**
- Ensure all files in same folder
- Try different browser

## 📞 Need Help?

1. Check `README.md` for detailed info
2. Review browser console (F12) for errors
3. Test in different browser
4. Contact development team

---

**Ready to impress investors!** 🚀

Open `index.html` and enter password: `multikor2026`
