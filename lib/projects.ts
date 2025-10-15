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
    id: "lost-and-found",
    title: "Lost & Found — E-commerce Platform",
    shortDescription:
      "Modern e-commerce platform for streetwear with premium UI/UX, admin dashboard, and full-stack functionality.",
    fullDescription:
      "Built a comprehensive e-commerce platform for hoodies and t-shirts with dual client/admin dashboards. Admin can manage products, orders, users, contact messages, categories, and order statuses (cancelled, in progress, delivered). Features analytics dashboard with order statistics, visitors, and revenue. Clients can purchase as guests or registered users with wishlist functionality and receive automated email confirmations. Includes 15+ pages: home, products, categories, cart, checkout, login, signup, forget password, 404, order success, shipping, contact, refund, size tables, terms of service, and privacy policy.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Drizzle ORM", "Tailwind CSS", "Framer Motion", "Multer", "Lucide", "shadcn/ui", "Vite.js", "Cypress", "Jest", "JWT", "esbuild", "WebSocket", "React Hook Form", "Zod", "React Query", "Passport.js", "bcryptjs"],
    category: ["Full-Stack"],
    demoUrl: "https://github.com/KamalAassab/Lost-and-Found",
    repoUrl: "https://github.com/KamalAassab/Lost-and-Found",
    images: ["/L&F 2.png", "/L&F 3.png", "/L&F 4.png", "/L&F 5.png", "/L&F 6.png", "/L&F 7.png", "/L&F 8.png", "/L&F 9.png", "/L&F 10.png", "/L&F 11.png", "/L&F 12.png", "/L&F 13.png", "/L&F 14.png", "/L&F 15.png", "/L&F 16.png", "/L&F 17.png", "/L&F 18.png", "/L&F 19.png"],
    role: "Full-Stack Developer",
    timeline: "2 months",
    metrics: [
      { label: "Technologies Used", value: "22+" },
      { label: "Pages Built", value: "15+" },
      { label: "User Roles", value: "2" },
      { label: "Test Coverage", value: "90%" },
    ],
    highlights: [
      "Built dual dashboard system with real-time WebSocket updates and comprehensive analytics",
      "Implemented complete authentication system with login, signup, and password recovery pages",
      "Integrated JWT + Passport.js authentication with bcryptjs password hashing for security",
      "Developed automated email notifications for order confirmations and thank you messages",
      "Created 15+ pages including authentication flow, e-commerce functionality, and legal pages",
    ],
  },
  {
    id: "oulinou-website",
    title: "Oulinou Website — E-commerce Store",
    shortDescription: "Responsive e-commerce website with modern design, product showcase, and interactive features.",
    fullDescription:
      "Developed a complete e-commerce website with responsive design, product catalog, shopping functionality, and modern UI/UX. Built with vanilla JavaScript for optimal performance and cross-browser compatibility.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: ["Frontend"],
    demoUrl: "https://github.com/KamalAassab/OulinouWebsite",
    repoUrl: "https://github.com/KamalAassab/OulinouWebsite",
    images: ["/modern-blog-homepage-with-articles.jpg", "/blog-post-with-code-syntax-highlighting.jpg", "/blog-reading-experience-typography.jpg"],
    role: "Frontend Developer",
    timeline: "1 month",
    metrics: [
      { label: "Pages", value: "5+" },
      { label: "Responsive Breakpoints", value: "3" },
      { label: "JavaScript Functions", value: "15+" },
      { label: "Performance Score", value: "95+" },
    ],
    highlights: [
      "Built responsive design that works across all device sizes",
      "Implemented interactive features with vanilla JavaScript",
      "Created modern, clean UI with CSS3 animations",
      "Optimized for performance and user experience",
    ],
  },
]

export const projectCategories = [
  "All",
  "Frontend",
  "Full-Stack",
] as const
