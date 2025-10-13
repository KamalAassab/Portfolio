# Modern Portfolio — Next.js + TypeScript + Tailwind CSS

A production-quality, fully responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. Features smooth animations, dark/light mode, accessibility optimizations, and performance best practices.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **UI Components**: shadcn/ui for consistent, accessible components
- **Dark/Light Mode**: Smooth theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Animations**: Custom keyframe animations and micro-interactions
- **Accessibility**: WCAG 2.1 compliant, keyboard navigation, ARIA labels
- **Performance**: Optimized images with next/image, lazy loading, code splitting
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Contact Form**: Validated form with API route (ready for email integration)
- **Project Showcase**: Filterable grid with detailed modal views

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone or download the project**

2. **Install dependencies**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Run the development server**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles & animations
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── navbar.tsx                # Sticky navigation with scroll effect
│   ├── theme-provider.tsx        # Dark/light mode context
│   ├── theme-toggle.tsx          # Theme switcher button
│   ├── hero.tsx                  # Hero section with typing effect
│   ├── about.tsx                 # About section with metrics
│   ├── education-timeline.tsx    # Experience timeline
│   ├── projects-grid.tsx         # Filterable projects grid
│   ├── project-card.tsx          # Individual project card
│   ├── project-modal.tsx         # Project detail modal
│   ├── contact-form.tsx          # Contact form with validation
│   └── footer.tsx                # Footer with social links
└── lib/
    ├── projects.ts               # Sample project data
    └── utils.ts                  # Utility functions
\`\`\`

## 🎨 Customization

### 1. Personal Information

Update the following files with your information:

- **`src/app/layout.tsx`**: Update metadata (title, description, social links)
- **`src/components/hero.tsx`**: Change name, role, and bio
- **`src/components/about.tsx`**: Update metrics and skills
- **`src/components/education-timeline.tsx`**: Add your experience/education
- **`src/components/footer.tsx`**: Update social links

### 2. Projects

Edit **`src/lib/projects.ts`** to add your projects:

\`\`\`typescript
{
  id: 'unique-id',
  title: 'Project Name',
  shortDescription: 'Brief description',
  fullDescription: 'Detailed description',
  tech: ['Next.js', 'TypeScript', 'Tailwind'],
  category: ['Next.js', 'Open Source'],
  demoUrl: 'https://demo.example.com',
  repoUrl: 'https://github.com/username/repo',
  images: ['/path/to/image.jpg'],
  role: 'Lead Developer',
  timeline: '3 months',
  metrics: [
    { label: 'Performance', value: '98/100' }
  ],
  highlights: [
    'Key achievement 1',
    'Key achievement 2'
  ]
}
\`\`\`

### 3. Theme & Colors

Customize colors in **`src/app/globals.css`**:

\`\`\`css
:root {
  --primary: oklch(0.40 0.12 240); /* Your brand color */
  --accent: oklch(0.65 0.25 280);  /* Accent color */
  /* ... other colors */
}
\`\`\`

### 4. Images

Replace placeholder images:

- Add your profile photo to `/public/profile.jpg`
- Add project screenshots to `/public/projects/`
- Update image paths in components

## 📧 Contact Form Setup

The contact form API route is ready for email integration. Choose one:

### Option 1: SendGrid

\`\`\`bash
npm install @sendgrid/mail
\`\`\`

Add to `.env.local`:
\`\`\`
SENDGRID_API_KEY=your_api_key
\`\`\`

Uncomment SendGrid code in `src/app/api/contact/route.ts`

### Option 2: Postmark

\`\`\`bash
npm install postmark
\`\`\`

Add to `.env.local`:
\`\`\`
POSTMARK_API_KEY=your_api_key
\`\`\`

Uncomment Postmark code in `src/app/api/contact/route.ts`

### Option 3: SMTP (Nodemailer)

\`\`\`bash
npm install nodemailer
\`\`\`

Add to `.env.local`:
\`\`\`
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_username
SMTP_PASS=your_password
\`\`\`

Uncomment Nodemailer code in `src/app/api/contact/route.ts`

## 🏗️ Build & Deploy

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys
4. Add environment variables in Vercel dashboard (if using email service)

**Zero-config deployment!** Vercel handles everything automatically.

[Learn more about Vercel deployment](https://vercel.com/docs/deployments/overview)

### Deploy to Other Platforms

- **Netlify**: Use `next export` for static export
- **AWS Amplify**: Connect GitHub repo
- **Docker**: Create Dockerfile with Node.js base image

## ✅ Final Polish Checklist

- [ ] Replace all placeholder images with real images
- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update all personal information (name, bio, social links)
- [ ] Add your real projects to `src/lib/projects.ts`
- [ ] Configure email service for contact form
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Test keyboard navigation and screen readers
- [ ] Add Google Analytics or Vercel Analytics (optional)
- [ ] Take screenshots for README
- [ ] Update `package.json` with your details
- [ ] Set up custom domain (optional)

## 🎯 Performance Targets

- **Lighthouse Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), Poppins (headings)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have questions or need help, feel free to open an issue.

---

**Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui**
