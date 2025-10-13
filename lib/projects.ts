export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  tech: string[]
  category: string[]
  demoUrl: string
  repoUrl: string
  images: string[]
  role: string
  timeline: string
  metrics: {
    label: string
    value: string
  }[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: "revella-ecommerce",
    title: "Revella — E-commerce Landing",
    shortDescription:
      "Single-page marketing site for a beauty device with high-converting product detail modal and checkout funnel.",
    fullDescription:
      "Built a conversion-optimized landing page for a premium beauty device startup. Implemented dynamic product modals, interactive before/after comparisons, and a streamlined checkout experience with Stripe integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Stripe", "Framer Motion"],
    category: ["Next.js", "E-commerce", "Freelance"],
    demoUrl: "https://demo.revella.example",
    repoUrl: "https://github.com/username/revella",
    images: ["/modern-ecommerce-beauty-product-landing-page.jpg", "/product-detail-modal-with-checkout.jpg", "/mobile-responsive-ecommerce-design.jpg"],
    role: "Lead Front-end Developer",
    timeline: "3 months",
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "LCP", value: "1.2s" },
      { label: "Accessibility Score", value: "98/100" },
      { label: "Conversion Rate Increase", value: "+12%" },
    ],
    highlights: [
      "Implemented lazy-loading and code-splitting for 40% faster initial load",
      "Built accessible product carousel with keyboard navigation",
      "Integrated Stripe checkout with real-time inventory validation",
    ],
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    shortDescription:
      "Interactive analytics dashboard with real-time charts, advanced filters, and CSV export functionality.",
    fullDescription:
      "Developed a comprehensive analytics platform for SaaS clients to visualize user engagement, revenue metrics, and performance KPIs. Features real-time data updates, customizable date ranges, and exportable reports.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "React Query", "Zustand"],
    category: ["Next.js", "React", "Dashboard"],
    demoUrl: "https://demo.analytics-dashboard.example",
    repoUrl: "https://github.com/username/analytics-dashboard",
    images: ["/modern-analytics-dashboard.png", "/data-visualization-dashboard-dark-mode.jpg", "/responsive-dashboard-mobile-view.jpg"],
    role: "Full-Stack Developer",
    timeline: "4 months",
    metrics: [
      { label: "Data Points Rendered", value: "10K+" },
      { label: "Chart Load Time", value: "<500ms" },
      { label: "Accessibility Score", value: "96/100" },
      { label: "User Satisfaction", value: "4.8/5" },
    ],
    highlights: [
      "Optimized chart rendering with virtualization for large datasets",
      "Implemented real-time WebSocket updates for live metrics",
      "Built custom date range picker with keyboard shortcuts",
    ],
  },
  {
    id: "blog-mdx",
    title: "Personal Blog (SSG + MDX)",
    shortDescription: "Fast, SEO-optimized blog using static generation, MDX for rich content, and optimized images.",
    fullDescription:
      "Created a high-performance blog platform with static site generation, MDX support for interactive content, syntax highlighting, reading time estimates, and comprehensive SEO optimization.",
    tech: ["Next.js", "MDX", "TypeScript", "Tailwind CSS", "Contentlayer", "Shiki"],
    category: ["Next.js", "Open Source", "Blog"],
    demoUrl: "https://demo.blog.example",
    repoUrl: "https://github.com/username/blog-mdx",
    images: ["/modern-blog-homepage-with-articles.jpg", "/blog-post-with-code-syntax-highlighting.jpg", "/blog-reading-experience-typography.jpg"],
    role: "Solo Developer",
    timeline: "2 months",
    metrics: [
      { label: "Lighthouse Performance", value: "100/100" },
      { label: "First Contentful Paint", value: "0.8s" },
      { label: "SEO Score", value: "100/100" },
      { label: "Build Time (50 posts)", value: "<30s" },
    ],
    highlights: [
      "Achieved perfect Lighthouse scores across all categories",
      "Implemented automatic image optimization with blur placeholders",
      "Built custom MDX components for interactive code examples",
    ],
  },
]

export const projectCategories = [
  "All",
  "Next.js",
  "React",
  "Tailwind CSS",
  "E-commerce",
  "Dashboard",
  "Blog",
  "Freelance",
  "Open Source",
] as const
