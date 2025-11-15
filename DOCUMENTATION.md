# A3Neptune Website - Documentation

## 🌟 Project Overview

This is a complete, fully responsive, award-winning static website for **A3Neptune** - a freelance IT consulting and development company. The website features an ultra-modern, futuristic design inspired by Awwwards.com.

### Live Preview

The development server is running. Visit the local URL shown in your terminal (typically `http://localhost:5174`).

## ✨ Key Features

✅ **Award-Winning Design** - Ultra-modern, clean, minimal UI  
✅ **Fully Responsive** - Perfect on mobile, tablet, and desktop  
✅ **Smooth Animations** - Framer Motion for fluid interactions  
✅ **Space Theme** - Neptune-inspired with black/white/yellow colors  
✅ **SEO Optimized** - Complete meta tags and Open Graph  
✅ **Production Ready** - Optimized and deployable

## 🎨 Brand Colors

- **Background**: `#000000` (Black)
- **Text**: `#ffffff` (White)
- **Accent**: `#FFD600` (Pure Bold Yellow)
- **Secondary**: `#9ca3af` (Gray)

## 🚀 Quick Start

The website is already set up and running! Here's what was built:

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Yellow CTA buttons with hover effects
│   ├── Card.jsx        # Service and portfolio cards
│   ├── Footer.jsx      # Site footer with links
│   ├── Navbar.jsx      # Sticky navigation with glass effect
│   └── SectionTitle.jsx # Section heading component
│
├── sections/           # Page sections
│   ├── Hero.jsx        # Premium hero with animations
│   ├── About.jsx       # Company introduction
│   ├── Services.jsx    # 12 service offerings
│   ├── FreelanceCTA.jsx # Hiring call-to-action
│   ├── Portfolio.jsx   # Filterable project showcase
│   ├── Team.jsx        # Team member cards
│   └── Contact.jsx     # Contact form and info
│
├── config/             # Configuration
│   ├── site.js         # Site data and content
│   └── seo.js          # SEO metadata
│
└── App.jsx             # Main component
```

## 📄 Website Sections

1. **Navigation** - Sticky header with smooth scroll, glass-blur effect
2. **Hero** - Animated space particles, bold headings, yellow CTAs
3. **About** - Company description with statistics
4. **Services** - 12 services in animated cards
5. **Freelance CTA** - Special hiring section with multiple CTAs
6. **Portfolio** - Filterable project grid (6 categories)
7. **Team** - 5 team members with social links
8. **Contact** - Professional form + contact information
9. **Footer** - Minimal footer with social icons

## 🎯 Services Included

1. Full-Stack Website Development
2. AI-Integrated Web & App Solutions
3. Mobile App Development
4. Business Portfolio Websites
5. E-Commerce Solutions
6. Learning Apps for Educators
7. College & School Websites
8. Landing Pages for Businesses
9. Custom Dashboard & Admin Panel
10. API Development & Integrations
11. Cloud Deployment & DevOps
12. UI/UX Design

## 👥 Team Members

- Aniket Kumar
- Akshat Angra
- Ansh Sharma
- Manav Pathania
- Harsh

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool
- **Tailwind CSS 4.1.17** - Styling
- **Framer Motion 12.23.24** - Animations
- **Lucide React 0.553.0** - Icons

## 📝 Customization Guide

### Update Content

Edit `src/config/site.js` to change:

- Team members
- Services list
- Social media links
- Email address

### Update SEO

Edit `src/config/seo.js` for:

- Page title
- Meta description
- Keywords

### Update Colors

Edit `src/index.css`:

```css
@theme {
  --color-yellow-400: #ffd600; /* Change accent color */
  --color-zinc-900: #18181b;
  --color-zinc-800: #27272a;
}
```

## 🚀 Commands

```bash
# Development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Upload `dist` folder to Netlify

### Other Platforms

- Build output is in `dist/` folder
- Static files ready to deploy anywhere

## 📧 Contact Information

- **Email**: a3neptuneofficial@gmail.com
- **GitHub**: https://github.com/a3neptune
- **LinkedIn**: https://linkedin.com/company/a3neptune
- **Upwork**: Available for hire

## ✨ Design Features

- **Animated Hero** with space particles and floating shapes
- **Hover Effects** on all interactive elements
- **Smooth Scrolling** between sections
- **Custom Scrollbar** in yellow theme
- **Glass Morphism** on navigation
- **Gradient Backgrounds** for visual depth
- **Micro-interactions** throughout

## 📱 Responsive Design

- **Mobile**: Optimized for phones (< 768px)
- **Tablet**: Perfect for tablets (768px - 1024px)
- **Desktop**: Full experience (> 1024px)

## 🎨 Design Philosophy

- **Minimal & Spacious** - Lots of negative space
- **Bold Typography** - Large, impactful headings
- **Yellow Accents** - Stand-out call-to-action buttons
- **Space Theme** - Neptune-inspired subtle elements
- **Premium Feel** - High-value, professional appearance

## 📦 What's Included

✅ All components fully functional  
✅ Smooth animations implemented  
✅ Responsive across all screens  
✅ SEO meta tags configured  
✅ Contact form ready  
✅ Portfolio section with filters  
✅ Team section with placeholders  
✅ Social media integration  
✅ Production-ready build

## 🎉 Ready to Use

The website is **100% complete and production-ready**. All sections are fully styled, animated, and responsive. Simply customize the content in the config files and deploy!

---

**Built with ❤️ for A3Neptune**  
_Premium Full-Stack Development Solutions_
