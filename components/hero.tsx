"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TypingTitle } from "@/components/typing-title"
// Removed SpaceAvatar import - using simple profile image instead

// Tech Stack Icons
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
)

const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.072-.091a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.484.484 0 0 1 .233-.296c.096-.05.13-.054.5-.054.347 0 .408.005.485.047z"/>
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
)

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
)

const AngularIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M9.93 12.645h4.134L12 8.4l-2.07 4.245zM12 1.5L1.5 4.65l1.725 14.7L12 22.5l8.775-3.15L22.5 4.65L12 1.5zm0 2.925L19.5 5.4l-1.35 11.475L12 19.5l-6.15-2.625L4.5 5.4L12 4.425z"/>
  </svg>
)

const VueIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
  </svg>
)

       const techStack = [
         { name: "React", icon: ReactIcon, color: "text-blue-400", url: "https://react.dev", status: "active" },
         { name: "Next.js", icon: NextIcon, color: "text-gray-300", url: "https://nextjs.org", status: "active" },
         { name: "TypeScript", icon: TypeScriptIcon, color: "text-blue-500", url: "https://www.typescriptlang.org", status: "active" },
         { name: "JavaScript", icon: JavaScriptIcon, color: "text-yellow-400", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", status: "active" },
         { name: "Tailwind CSS", icon: TailwindIcon, color: "text-cyan-400", url: "https://tailwindcss.com", status: "active" },
         { name: "Angular", icon: AngularIcon, color: "text-red-500", url: "https://angular.io", status: "in-progress" },
         { name: "Vue.js", icon: VueIcon, color: "text-green-500", url: "https://vuejs.org", status: "in-progress" }
       ]

export function Hero() {
  // Removed typedText state and useEffect as TypingTitle handles it internally

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] pointer-events-none" />

      {/* Space-themed background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-blob-slow" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-blob-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="terminal-prompt text-sm text-muted-foreground mb-2">
                <span className="terminal-path">$ ~/portfolio</span>
                <span className="terminal-cursor"></span>
              </div>
              <div className="relative inline-block">
                <TypingTitle 
                  text="Hi, I'm Kamal" 
                  speed={80}
                  delay={500} // Shorter delay for the main title
                  className="text-4xl lg:text-5xl font-bold text-balance font-mono text-white" // Decreased font size
                />
                
              </div>
              <div className="relative inline-block">
                <TypingTitle 
                  text="Front-end Developer" 
                  speed={80}
                  delay={1000}
                  className="text-2xl lg:text-3xl text-gray-300 font-medium font-mono"
                />
                
              </div>
            </div>

            {/* Professional About Me Card */}
            <div className="relative max-w-xl group">
              {/* Card Background with Space Theme */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-2xl shadow-emerald-500/10 overflow-hidden transition-all duration-700 transform hover:scale-[1.02] hover:shadow-emerald-500/20 hover:shadow-3xl hover:border-emerald-400/50 hover:-translate-y-1">
                {/* Enhanced Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-teal-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Tech Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400/60 group-hover:border-emerald-300 transition-all duration-300 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-teal-400/60 group-hover:border-teal-300 transition-all duration-300 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 group-hover:border-cyan-300 transition-all duration-300 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400/60 group-hover:border-emerald-300 transition-all duration-300 rounded-br-lg"></div>
                
                {/* Enhanced Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-emerald-300 transition-all duration-500"></div>
                <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-teal-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-teal-300 transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-cyan-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-cyan-300 transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                {/* Additional Hover Particles */}
                <div className="absolute -top-3 -left-1 w-1 h-1 bg-emerald-300/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute -bottom-3 -right-1 w-1 h-1 bg-teal-300/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{animationDelay: '0.7s'}}></div>
                
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20 group-hover:border-emerald-400/40 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse group-hover:bg-emerald-300 group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-emerald-400 font-mono text-sm font-semibold tracking-wider group-hover:text-emerald-200 transition-colors duration-300">ABOUT.DEV</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono group-hover:text-emerald-300/90 transition-colors duration-300">v2.0.24</div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-300 font-mono text-sm">// Developer Profile</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed font-mono text-sm">
                    I'm Kamal, a passionate Front-End Web Developer from southern Morocco. 
                    I create modern, responsive, and interactive digital experiences that 
                    blend creativity, technology, and innovation.
                  </p>
                </div>
                
              </div>
            </div>

            {/* Professional Tech Stack Card */}
            <div className="relative w-full max-w-6xl mx-auto group">
              {/* Card Background with Space Theme */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-teal-500/30 rounded-2xl p-8 shadow-2xl shadow-teal-500/10 overflow-hidden transition-all duration-700 transform hover:scale-[1.02] hover:shadow-teal-500/20 hover:shadow-3xl hover:border-teal-400/50 hover:-translate-y-1">
                {/* Enhanced Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/3 via-transparent to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Corner Tech Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-teal-400/60 group-hover:border-teal-300 transition-all duration-300 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 group-hover:border-cyan-300 transition-all duration-300 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400/60 group-hover:border-emerald-300 transition-all duration-300 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-teal-400/60 group-hover:border-teal-300 transition-all duration-300 rounded-br-lg"></div>
                
                {/* Enhanced Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-teal-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-teal-300 transition-all duration-500"></div>
                <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-cyan-300 transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-emerald-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-emerald-300 transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                {/* Additional Hover Particles */}
                <div className="absolute -top-3 -left-1 w-1 h-1 bg-teal-300/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute -bottom-3 -right-1 w-1 h-1 bg-cyan-300/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{animationDelay: '0.7s'}}></div>
                
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-500/20 group-hover:border-teal-400/40 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse group-hover:bg-teal-300 group-hover:scale-125 transition-all duration-300 shadow-lg shadow-teal-400/50"></div>
                    <span className="text-teal-400 font-mono text-sm font-semibold tracking-wider group-hover:text-teal-200 transition-colors duration-300">TECH.STACK</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono group-hover:text-teal-300/90 transition-colors duration-300">
                    <span className="text-yellow-400 font-semibold">5 Active</span>, <span className="text-red-400 font-semibold">2 In Progress</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-400/50"></div>
                    <span className="text-teal-300 font-mono text-sm">// Core Technologies</span>
                  </div>
                  
                  {/* Active Technologies */}
                  <div className="flex gap-2 justify-center mb-4">
                    {techStack.filter(tech => tech.status === "active").map((tech, index) => (
                      <a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/tech relative bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-emerald-500/30 rounded-xl px-3 py-2 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 cursor-pointer transform hover:scale-105 hover:-translate-y-1 flex-shrink-0"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                        {/* Tech Badge Content */}
                        <div className="flex items-center space-x-1.5">
                          <div className={`${tech.color} group-hover/tech:scale-110 transition-transform duration-300`}>
                            <tech.icon />
                          </div>
                          <span className="text-emerald-300 font-mono text-xs font-semibold tracking-wider whitespace-nowrap">{tech.name}</span>
                        </div>
                        
                        {/* Enhanced Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        
                        {/* Status Indicator */}
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 group-hover/tech:scale-125 transition-transform duration-300"></div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-emerald-400/40 rounded-tl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-teal-400/40 rounded-br opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                      </a>
              ))}
            </div>

                  {/* In Progress Technologies */}
                  <div className="flex gap-2 justify-center">
                    {techStack.filter(tech => tech.status === "in-progress").map((tech, index) => (
                      <a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/tech relative bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-red-500/30 rounded-xl px-3 py-2 hover:border-red-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 cursor-pointer transform hover:scale-105 hover:-translate-y-1 flex-shrink-0"
                        style={{ animationDelay: `${index * 100 + 600}ms` }}
                      >
                        {/* Tech Badge Content */}
                        <div className="flex items-center space-x-1.5">
                          <div className={`${tech.color} group-hover/tech:scale-110 transition-transform duration-300`}>
                            <tech.icon />
                          </div>
                          <span className="text-red-300 font-mono text-xs font-semibold tracking-wider whitespace-nowrap">{tech.name}</span>
                        </div>
                        
                        {/* Enhanced Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Glowing Border Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 blur-sm"></div>
                        
                        {/* Status Indicator */}
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-400/50 group-hover/tech:scale-125 transition-transform duration-300"></div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-red-400/40 rounded-tl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-orange-400/40 rounded-br opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>

          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile Image Card */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                  {/* Redesigned Professional Avatar */}
                  <div className="relative w-40 h-40 rounded-full flex items-center justify-center
                              bg-gradient-to-br from-emerald-600 to-cyan-700
                              shadow-2xl shadow-emerald-500/40
                              animate-float-professional border border-emerald-400/50">
                    {/* Inner glowing core */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-70 blur-lg animate-pulse" />
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
                         style={{
                           borderImage: 'linear-gradient(to right, #10b981, #06b6d4, #6366f1) 1',
                           animationDuration: '8s',
                           animationDirection: 'reverse'
                         }}
                    />
                    {/* Text / Symbol */}
                    <span className="relative z-10 text-5xl font-extrabold text-white text-shadow-lg animate-fade-in-out">
                      K.A
                    </span>
                    {/* Orbital particles */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full animate-orbital-particle"
                        style={{
                          animationDelay: `${i * 0.8}s`,
                          animationDuration: `${5 + Math.random() * 3}s`,
                          transform: `rotate(${Math.random() * 360}deg) translate(50px) rotate(-${Math.random() * 360}deg)`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-4 py-2 shadow-lg animate-float">
                <p className="text-sm font-semibold text-emerald-300">⚛️ React Expert</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm border border-teal-500/30 rounded-lg px-4 py-2 shadow-lg animate-float animation-delay-1000">
                <p className="text-sm font-semibold text-teal-300">🎨 UI/UX Focused</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-emerald-400" />
        </div>
        
        {/* Centered Action Button */}
        <div className="flex items-center justify-center pt-16 w-full">
          {/* Deploy Projects Button */}
          <div className="relative group">
            {/* Space Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 animate-pulse"></div>
            
            {/* Button Container */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-cyan-500/40 rounded-2xl p-1.5 shadow-2xl shadow-cyan-500/20 overflow-hidden transition-all duration-700 transform hover:scale-105 hover:shadow-cyan-500/40 hover:border-cyan-400/70">
              {/* Animated Starfield Background */}
              <div className="absolute inset-0 opacity-30">
                {/* Static positioned stars to avoid hydration issues */}
                <div className="absolute w-1 h-1 bg-white rounded-full animate-ping" style={{ left: '20%', top: '30%', animationDelay: '0s', animationDuration: '2s' }} />
                <div className="absolute w-1 h-1 bg-white rounded-full animate-ping" style={{ left: '70%', top: '60%', animationDelay: '1s', animationDuration: '3s' }} />
                <div className="absolute w-1 h-1 bg-white rounded-full animate-ping" style={{ left: '40%', top: '80%', animationDelay: '2s', animationDuration: '2.5s' }} />
                <div className="absolute w-1 h-1 bg-white rounded-full animate-ping" style={{ left: '85%', top: '25%', animationDelay: '1.5s', animationDuration: '3.5s' }} />
              </div>
              
              {/* Animated Code Lines */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1500"></div>
              
              {/* Button Content */}
              <Button 
                size="lg" 
                onClick={scrollToProjects} 
                className="relative bg-transparent border-0 text-white font-mono font-bold px-12 py-4 text-base transition-all duration-500 hover:bg-transparent"
              >
                <span className="relative flex items-center gap-3 z-10">
                  {/* Status Indicator */}
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Button Text */}
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent text-lg font-bold">
                    DEPLOY PROJECTS
                  </span>
                  
                  {/* Rocket Icon */}
                  <div className="relative">
                    <ExternalLink className="h-5 w-5 text-cyan-300 group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-500" />
                    <div className="absolute -top-1 -right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                  </div>
                </span>
                
                {/* Corner Tech Accents */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/60 group-hover:border-cyan-300 transition-all duration-300 rounded-tl-lg"></div>
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-blue-400/60 group-hover:border-blue-300 transition-all duration-300 rounded-tr-lg"></div>
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400/60 group-hover:border-purple-300 transition-all duration-300 rounded-bl-lg"></div>
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/60 group-hover:border-cyan-300 transition-all duration-300 rounded-br-lg"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
