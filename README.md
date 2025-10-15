<div align="center">

# 🚀 **Modern Portfolio** 
### *Next.js 15 + TypeScript + Tailwind CSS*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)

**A production-quality, fully responsive portfolio website with smooth animations, dark/light mode, and performance optimizations.**

[🌐 **Live Demo**](https://your-portfolio.netlify.app) • [📖 **Documentation**](#-documentation) • [🎨 **Preview**](#-preview) • [⚡ **Quick Start**](#-quick-start)

---

</div>

## ✨ **Features**

<table>
<tr>
<td width="50%">

### 🎨 **Design & UI**
- **Modern Design System** with shadcn/ui components
- **Dark/Light Mode** with smooth transitions
- **Responsive Design** - Mobile-first approach
- **Custom Animations** with Framer Motion
- **Micro-interactions** and hover effects
- **Professional Typography** with Inter & Poppins fonts

</td>
<td width="50%">

### ⚡ **Performance**
- **Lighthouse Score** 95+ across all categories
- **Image Optimization** with next/image
- **Code Splitting** and lazy loading
- **Bundle Optimization** with webpack
- **SEO Optimized** with meta tags
- **Accessibility** WCAG 2.1 compliant

</td>
</tr>
</table>

## 🎯 **Tech Stack**

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, React 19, TypeScript 5.0 |
| **Styling** | Tailwind CSS 4.0, CSS Modules, Framer Motion |
| **UI Components** | shadcn/ui, Radix UI, Lucide Icons |
| **Development** | ESLint, Prettier, TypeScript |
| **Deployment** | Netlify, GitHub Actions |
| **Analytics** | Netlify Analytics |

</div>

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm/yarn/pnpm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/KamalAassab/Portfolio.git
cd Portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

**Open [http://localhost:3000](http://localhost:3000) in your browser** 🎉

---

## 📁 **Project Structure**

```
Portfolio/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/               # API routes
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx           # Home page
│   └── 📄 globals.css        # Global styles
├── 📁 components/            # React components
│   ├── 📁 ui/               # shadcn/ui components
│   ├── 📄 hero.tsx          # Hero section
│   ├── 📄 projects-grid.tsx # Projects showcase
│   ├── 📄 project-modal.tsx # Project details
│   └── 📄 ...               # Other components
├── 📁 lib/                  # Utilities
│   ├── 📄 projects.ts       # Project data
│   └── 📄 utils.ts          # Helper functions
├── 📁 public/               # Static assets
│   ├── 📸 L&F 2.png         # Project images
│   ├── 📸 L&F 3.png         # Project images
│   └── 📸 ...               # More images
├── 📄 netlify.toml          # Netlify configuration
├── 📄 next.config.mjs       # Next.js configuration
└── 📄 package.json          # Dependencies
```

## 🎨 **Customization**

### **1. Personal Information**

Update your details in these files:

```typescript
// app/layout.tsx - Site metadata
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional portfolio",
  // ... other metadata
}

// components/hero.tsx - Personal info
const heroData = {
  name: "Your Name",
  role: "Your Role",
  bio: "Your bio...",
}
```

### **2. Projects**

Add your projects in `lib/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "your-project",
    title: "Your Project Name",
    shortDescription: "Brief description",
    fullDescription: "Detailed description...",
    tech: ["React", "TypeScript", "Node.js"],
    category: ["Full-Stack"],
    demoUrl: "https://your-demo.com",
    repoUrl: "https://github.com/your-repo",
    images: ["/project-1.png", "/project-2.png"],
    role: "Full-Stack Developer",
    timeline: "3 months",
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Users", value: "1K+" },
    ],
    highlights: [
      "Built with modern technologies",
      "Achieved 98% Lighthouse score",
    ],
  },
]
```

### **3. Styling & Theme**

Customize colors in `app/globals.css`:

```css
:root {
  --primary: oklch(0.40 0.12 240);    /* Your brand color */
  --accent: oklch(0.65 0.25 280);     /* Accent color */
  --background: oklch(0.05 0.01 240); /* Background */
  --foreground: oklch(0.95 0.01 240); /* Text color */
}
```

## 🚀 **Deployment**

### **Deploy to Netlify (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Import from GitHub
   - Netlify auto-detects Next.js configuration

3. **Automatic Deployment**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables (if needed)

**🎉 Your portfolio is live!**

### **Other Deployment Options**

- **AWS Amplify**: Connect GitHub repository
- **Docker**: Create Dockerfile with Node.js base
- **Vercel**: Alternative deployment platform

## 📊 **Performance Metrics**

<div align="center">

| Metric | Score | Status |
|--------|-------|--------|
| **Lighthouse Performance** | 95+ | ✅ Excellent |
| **Accessibility** | 98+ | ✅ Excellent |
| **Best Practices** | 100 | ✅ Perfect |
| **SEO** | 100 | ✅ Perfect |
| **First Contentful Paint** | < 1.5s | ✅ Fast |
| **Largest Contentful Paint** | < 2.5s | ✅ Fast |

</div>

## 🎯 **Key Features Showcase**

### **🎨 Modern UI Components**
- **Interactive Project Cards** with hover effects
- **Smooth Animations** with Framer Motion
- **Responsive Grid Layout** for projects
- **Professional Typography** with custom fonts

### **⚡ Performance Optimizations**
- **Image Optimization** with next/image
- **Code Splitting** for faster loading
- **Bundle Optimization** with webpack
- **Lazy Loading** for better performance

### **📱 Responsive Design**
- **Mobile-first** approach
- **Tablet optimized** layouts
- **Desktop enhanced** experience
- **Cross-browser** compatibility

## 🛠️ **Development**

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Netlify specific
npm run netlify:build # Build for Netlify deployment
```

### **Environment Variables**

Create `.env.local` for local development:

```env
# Contact form (optional)
SENDGRID_API_KEY=your_sendgrid_key
# or
POSTMARK_API_KEY=your_postmark_key
# or
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_username
SMTP_PASS=your_password
```

## 📸 **Screenshots**

<div align="center">

### **Desktop View**
![Desktop Portfolio](https://via.placeholder.com/800x500/1a1a1a/ffffff?text=Desktop+Portfolio+View)

### **Mobile View**
![Mobile Portfolio](https://via.placeholder.com/400x800/1a1a1a/ffffff?text=Mobile+Portfolio+View)

### **Project Modal**
![Project Modal](https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Project+Details+Modal)

</div>

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS
- **shadcn/ui** for the beautiful components
- **Framer Motion** for smooth animations
- **Vercel** for the deployment platform

## 📞 **Contact**

**Kamal Aassab** - [@KamalAassab](https://github.com/KamalAassab)

- **Email**: [kamalaassab2002@gmail.com](mailto:kamalaassab2002@gmail.com)
- **GitHub**: [https://github.com/KamalAassab](https://github.com/KamalAassab)
- **Portfolio**: [https://your-portfolio.netlify.app](https://your-portfolio.netlify.app)

---

<div align="center">

### **⭐ Star this repository if you found it helpful!**

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

[![GitHub stars](https://img.shields.io/github/stars/KamalAassab/Portfolio?style=social)](https://github.com/KamalAassab/Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/KamalAassab/Portfolio?style=social)](https://github.com/KamalAassab/Portfolio/network)
[![GitHub issues](https://img.shields.io/github/issues/KamalAassab/Portfolio)](https://github.com/KamalAassab/Portfolio/issues)

</div>