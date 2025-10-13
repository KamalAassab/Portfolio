"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Github, Linkedin, Mail, MessageCircle, Instagram, Zap, Code, Terminal, Cpu } from "lucide-react"
import { TypingTitle } from "@/components/typing-title"
import ElectricBorder from "@/components/electric-border"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiGithub, SiLinux, SiGit, SiCanva } from 'react-icons/si'

const LogoLoop = dynamic(() => import("@/components/LogoLoop"), { ssr: false })

export function ContactForm() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null)
  const [matrixChars, setMatrixChars] = React.useState<string[]>([])
  const [mounted, setMounted] = React.useState(false)

  // Matrix-style characters for background - Optimized for performance
  React.useEffect(() => {
    const chars = '01'
    const matrixArray = Array.from({ length: 30 }, () => chars[Math.floor(Math.random() * chars.length)]) // Reduced from 50 to 30
    setMatrixChars(matrixArray)
    setMounted(true)
  }, [])

  // Tech logos for the loop
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <Terminal className="w-6 h-6" />, title: "VS Code", href: "https://code.visualstudio.com" },
    { node: <SiCanva />, title: "Canva", href: "https://www.canva.com" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://www.github.com/KamalAassab",
      color: "from-gray-300 to-gray-100",
      glowColor: "shadow-[0_0_30px_rgba(255,255,255,0.3)]",
      description: "Explore my code universe",
      techIcon: Code
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kamalaassab",
      color: "from-blue-300 to-blue-100",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.4)]",
      description: "Professional network",
      techIcon: Terminal
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/its.urky",
      color: "from-pink-300 to-purple-100",
      glowColor: "shadow-[0_0_30px_rgba(236,72,153,0.4)]",
      description: "Follow my journey",
      techIcon: Zap
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kamalaassab2002@gmail.com",
      color: "from-red-300 to-red-100",
      glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.4)]",
      description: "Direct communication",
      techIcon: Cpu
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/212642057869",
      color: "from-green-300 to-green-100",
      glowColor: "shadow-[0_0_30px_rgba(34,197,94,0.4)]",
      description: "Instant messaging",
      techIcon: Terminal
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Matrix Rain Background - Optimized */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-5 gap-4 text-xs text-cyan-400 font-mono">
          {matrixChars.map((char, i) => (
            <div
              key={i}
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s'
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridScroll 20s linear infinite'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <div className="relative inline-block">
              <TypingTitle 
                text="Get In Touch" 
                speed={80}
                delay={1000} // Consistent delay for section titles
              />
              {/* Epic animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-md animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 font-mono">
              &gt; Initiating communication protocols...
            </p>
          </div>

          {/* Revolutionary Contact Card */}
          <div className="relative">
            {/* Floating Electric Particles around the border - Optimized */}
            <div className="absolute -inset-4 pointer-events-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${20 + (i % 2) * 60}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
            
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 24 }}
              className="animate-fade-up animation-delay-200"
            >
            <div className="relative bg-transparent p-8 lg:p-12 rounded-3xl overflow-hidden">
              {/* Holographic Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
                </div>

              {/* Header */}
              <div className="relative text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">SYSTEM ONLINE</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 tracking-wider transition-all duration-500 hover:text-cyan-300">
                  COMMUNICATION HUB
                </h3>
              </div>

              {/* Revolutionary Social Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon
                  const TechIcon = link.techIcon
                  const isHovered = hoveredCard === index
                  
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                      style={{ animationDelay: `${index * 150}ms` }}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* 3D Card Container */}
                      <div className="relative h-40 perspective-1000">
                        {/* Card Face */}
                        <div className={`
                          relative w-full h-full transform-gpu transition-all duration-700 ease-out
                          ${isHovered ? 'rotate-y-180' : 'rotate-y-0'}
                        `}>
                          {/* Front Face */}
                          <div className="absolute inset-0 w-full h-full backface-hidden">
                            <div className="relative h-full bg-transparent rounded-2xl border border-slate-700/30 overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
                              {/* Holographic Scan Lines */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
              </div>

                              {/* Space-Themed Official Icons */}
                              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                <div className="relative w-12 h-12 group-hover:scale-125 transition-all duration-500">
                                  {/* Official Icon with Space Theme */}
                                  <div className={`
                                    relative w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} ${link.glowColor}
                                    transition-all duration-500 group-hover:rotate-12
                                    flex items-center justify-center overflow-hidden
                                  `}>
                                    <IconComponent className="w-6 h-6 text-slate-900 relative z-10" />
                                    
                                    {/* Space Starfield Background - Optimized */}
                                    <div className="absolute inset-0 opacity-20">
                                      {Array.from({ length: 4 }).map((_, i) => (
                                        <div
                                          key={i}
                                          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                                          style={{
                                            left: `${20 + i * 20}%`,
                                            top: `${20 + i * 20}%`,
                                            animationDelay: `${i * 0.5}s`,
                                            animationDuration: '2s'
                                          }}
                                        />
                                      ))}
                                    </div>
                                    
                                    {/* Orbital Ring */}
                                    <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }}></div>
                                    
                                    {/* Floating Particles - Optimized */}
                                    {Array.from({ length: 3 }).map((_, i) => (
                                      <div
                                        key={i}
                                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                          left: `${25 + i * 25}%`,
                                          top: `${25 + i * 25}%`,
                                          animation: `particleFloat 2s ease-in-out infinite`,
                                          animationDelay: `${i * 0.2}s`
                                        }}
                                      />
                                    ))}
                                    
                                    {/* Holographic Shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                                  </div>
                                </div>
                              </div>

                              {/* Platform Name */}
                              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
                                <h4 className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-wider">
                                  {link.name}
                                </h4>
                                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              </div>

                              {/* Status Indicator */}
                              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-xs text-green-400 font-mono">ACTIVE</span>
                                </div>
                              </div>

                              {/* Corner Tech Accents */}
                              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                            </div>
                          </div>

                          {/* Back Face - Tech Details */}
                          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                            <div className="relative h-full bg-transparent rounded-2xl border border-cyan-400/30 overflow-hidden">
                              {/* Space-Themed Tech Icon */}
                              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center justify-center relative overflow-hidden">
                                  <TechIcon className="w-6 h-6 text-white relative z-10" />
                                  
                                  {/* Space Starfield Background - Optimized */}
                                  <div className="absolute inset-0 opacity-30">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                      <div
                                        key={i}
                                        className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                                        style={{
                                          left: `${25 + i * 25}%`,
                                          top: `${25 + i * 25}%`,
                                          animationDelay: `${i * 0.5}s`,
                                          animationDuration: '2s'
                                        }}
                                      />
                                    ))}
                                  </div>
                                  
                                  {/* Orbital Ring */}
                                  <div className="absolute inset-0 border border-white/30 rounded-lg animate-spin" style={{ animationDuration: '4s' }}></div>
                                  
                                  {/* Holographic Shimmer */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                </div>
                              </div>

                              {/* Description */}
                              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center px-3">
                                <p className="text-[10px] text-gray-300 font-mono leading-tight">
                                  {link.description}
                                </p>
                              </div>

                              {/* Connection Status */}
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                                  <span className="text-xs text-cyan-400 font-mono">CONNECTED</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>

            </div>
            </ElectricBorder>
          </div>

          {/* Tech Stack Logo Loop - Client Only */}
          {mounted && (
            <div className="mt-16 animate-fade-up animation-delay-400">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 font-mono">EXPERT IN</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
              </div>
              <div className="relative" style={{ height: '120px', overflow: 'hidden' }}>
                <LogoLoop
                  logos={techLogos}
                  speed={80}
                  direction="left"
                  logoHeight={56}
                  gap={64}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#000000"
                  ariaLabel="Technology stack"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
