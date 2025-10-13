import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com'),
  title: "Kamal — Front-end Developer",
  description:
    "Front-end Developer passionate about crafting accessible, pixel-perfect user interfaces. Specializing in React, Next.js, and Tailwind CSS.",
  keywords: ["Front-end Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Kamal" }],
  creator: "Kamal",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Kamal — Front-end Developer",
    description: "Front-end Developer passionate about crafting accessible, pixel-perfect user interfaces.",
    siteName: "Kamal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kamal — Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal — Front-end Developer",
    description: "Front-end Developer passionate about crafting accessible, pixel-perfect user interfaces.",
    images: ["/og-image.png"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://yourportfolio.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kamal",
              jobTitle: "Front-end Developer",
              url: "https://yourportfolio.com",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-mono antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        {children}
            <Toaster />
          </ThemeProvider>
        <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
