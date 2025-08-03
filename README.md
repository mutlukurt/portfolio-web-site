# Modern Portfolio Website

A fully responsive React-based portfolio website with engaging scroll-triggered animations, modern UI/UX patterns, and clean design inspired by contemporary web standards.

## 🚀 Features

- **Modern Design**: Bold, vibrant design with diagonal shapes and angled sections
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion scroll-triggered animations throughout
- **Interactive Components**: 
  - Working hamburger menu for mobile
  - Search functionality with filtering
  - Video player with custom controls
  - Smooth scroll navigation
- **Performance Optimized**: Fast loading and smooth interactions
- **Clean Code**: Modular React components with reusable patterns

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#7B61FF`
- **Primary Yellow**: `#FFD93D`  
- **Soft Blue**: `#EAF4FC`
- **Light Gray**: `#F8F9FA`

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter/Poppins (sans-serif)

## 📦 Tech Stack

- **Frontend**: React 18 with Hooks
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather icons)
- **Routing**: React Router DOM
- **Video**: React Player (optional)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation with search & mobile menu
│   ├── HeroSection.jsx      # Landing section with profile
│   ├── AboutMeSection.jsx   # About section with skills
│   ├── VideoSection.jsx     # Video showcase section
│   ├── ServicesSection.jsx  # Services grid layout
│   └── Footer.jsx          # Footer with social links
├── App.jsx                 # Main app component
├── index.js               # React entry point
├── index.css             # Global styles & Tailwind imports
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎯 Sections Overview

### 1. Header
- Fixed top navigation with smooth scroll
- Hamburger menu for mobile devices
- Search functionality with dummy data filtering
- Animated underlines on active menu items

### 2. Hero Section
- Profile image with decorative shapes
- Animated headline with your name and role
- Call-to-action buttons (Contact Me, Download CV)
- Stats display and scroll indicator

### 3. About Me Section
- Personal description and background
- Skill icons with hover animations
- Technology stack badges
- Performance metrics display

### 4. Video Section
- Embedded video player with custom controls
- Play/pause, mute, and fullscreen functionality
- Responsive video container with decorative elements

### 5. Services Section
- Grid layout of service cards
- Staggered entrance animations
- Hover effects and interactive elements
- Call-to-action section

### 6. Footer
- Social media links
- Contact information
- Newsletter signup
- Scroll-to-top functionality

## 🎮 Customization

### Replace Placeholder Content

1. **Profile Images**: Replace placeholder divs in `HeroSection.jsx` and `AboutMeSection.jsx`
2. **Video Content**: Add your video files and update paths in `VideoSection.jsx`
3. **Personal Information**: Update contact details, social links, and personal info
4. **CV Download**: Add your actual CV file and update the download path

### Update Contact Information

Edit the contact details in `Footer.jsx`:
```jsx
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  // ... update other contact info
];
```

### Modify Social Links

Update social media links in `Footer.jsx`:
```jsx
const socialLinks = [
  { 
    icon: FiGithub, 
    name: 'GitHub', 
    url: 'https://github.com/yourusername',
    color: 'hover:text-gray-800'
  },
  // ... update other social links
];
```

## 🎨 Animation Features

- **Scroll-triggered animations** using Framer Motion's `useInView`
- **Staggered animations** for card grids and lists
- **Hover animations** on interactive elements
- **Page load animations** with sequential timing
- **Smooth scrolling** between sections

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly interactions** for mobile devices

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Zero-configuration deployment with Git integration
- **GitHub Pages**: Free hosting for personal projects
- **AWS S3 + CloudFront**: For enterprise-level hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ **Commercial use** - Use for commercial projects
- ✅ **Modification** - Modify and distribute modified versions
- ✅ **Distribution** - Distribute original or modified versions
- ✅ **Private use** - Use privately
- ❌ **Liability** - No warranty or liability
- ❌ **Warranty** - No warranty provided

Copyright (c) 2024 Mutlu Kurt

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling
- React Icons for beautiful iconography

---

## 🏷️ **Version & Status**

- **Version**: 1.0.0
- **Status**: Production Ready ✅
- **License**: MIT License
- **Author**: Mutlu Kurt
- **Live Demo**: [https://mutlukurt.github.io/portfolio-web-site](https://mutlukurt.github.io/portfolio-web-site)

---

**Note**: This is a modern portfolio website template. Feel free to fork, modify, and use for your own projects under the MIT License!