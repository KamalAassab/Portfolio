"use client"

import * as React from "react"
import { Home, User2, Zap, Briefcase, Code, Mail, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const navItems = [
  { label: "HOME", href: "#hero", icon: <Home className="h-5 w-5" /> },
  { label: "ABOUT", href: "#about", icon: <User2 className="h-5 w-5" /> },
  { label: "SKILLS", href: "#skills", icon: <Zap className="h-5 w-5" /> },
  { label: "EXPERIENCE", href: "#experience", icon: <Briefcase className="h-5 w-5" /> },
  { label: "PROJECTS", href: "#projects", icon: <Code className="h-5 w-5" /> },
  { label: "CONTACT", href: "#contact", icon: <Mail className="h-5 w-5" /> },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || 'hero')
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Revolutionary Floating Orbital Navigation */}
      <nav 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
        onMouseMove={handleMouseMove}
      >
        {/* Cosmic Background Container */}
        <div className="relative">
          {/* Central Orbital Hub */}
          <div className="relative w-20 h-[450px]">
            {/* Animated Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-16 h-16 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute w-12 h-12 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute w-8 h-8 border border-emerald-400/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>

            {/* Navigation Nodes */}
            <div className="relative h-full flex flex-col justify-center items-center py-6 space-y-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '')
                const isHovered = hoveredIndex === index
                
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Orbital Node Button */}
                    <button
                      onClick={() => scrollToSection(item.href)}
        className={cn(
                        "relative w-12 rounded-xl backdrop-blur-xl transition-all duration-500 transform",
                        "flex items-center justify-center overflow-hidden",
                        isActive ? "h-28" : "h-12", // Conditional height for active button
                        isActive 
                          ? "bg-gradient-to-br from-cyan-500/40 via-purple-500/40 to-emerald-500/40 scale-110 shadow-2xl shadow-cyan-500/50" 
                          : "bg-slate-900/70 hover:bg-slate-800/90 hover:scale-105 border border-cyan-500/30 hover:border-cyan-400/60"
                      )}
                      style={{
                        animation: isActive ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none'
                      }}
                    >
                      {/* Particle Burst Effect */}
                      {(isActive || isHovered) && (
                        <div className="absolute inset-0">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                              style={{
                                left: '50%',
                                top: '50%',
                                animation: `particleBurst 1.5s ease-out infinite`,
                                animationDelay: `${i * 0.2}s`,
                                transform: `rotate(${i * 45}deg) translateY(-20px)`
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Animated Grid Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div 
                          className="absolute inset-0" 
                          style={{
                            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                            backgroundSize: '10px 10px',
                            animation: 'gridScroll 20s linear infinite'
                          }}
                        ></div>
                      </div>

                      {/* Icon with 3D Effect */}
                      <div className={cn(
                        "relative z-10 text-lg transition-all duration-300 transform",
                        isActive ? "scale-50 opacity-0" : "scale-100 opacity-100",
                        isHovered && !isActive ? "scale-110" : ""
                      )}>
                        {item.icon}
                      </div>

                      {/* Integrated Label with Rotation */}
                      <div className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 pointer-events-none",
                        isActive ? "opacity-100 -rotate-90 z-20" : "opacity-0 rotate-0 -z-10"
                      )}>
                        <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap">
                          {item.label}
                        </span>
                      </div>

                      {/* Hologram Scan Lines */}
                      {isActive && (
                        <div className="absolute inset-0 overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                            style={{
                              animation: 'scanLine 2s linear infinite'
                            }}
                          ></div>
                        </div>
                      )}

                      {/* Glowing Border */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 opacity-20 blur-xl"></div>
                          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 opacity-30 animate-pulse"></div>
                        </>
                      )}
                    </button>
                    {/* Connection Lines to Active Node */}
                    {isActive && index > 0 && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-cyan-400/50 to-transparent"></div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Central Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
          </div>

          {/* Floating Cosmic Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </nav>

              {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
              <Button
                variant="ghost"
          size="sm"
          className="bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 hover:bg-slate-800/90"
          onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>

      {/* Mobile Menu */}
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent className="sm:max-w-md bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30">
          <DialogHeader>
            <DialogTitle className="text-emerald-400">Navigation</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-400 hover:text-emerald-400 transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}