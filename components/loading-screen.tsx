"use client"

import * as React from "react"
import { CheckCircle } from "lucide-react"

interface LoadingScreenProps {
  onStart: () => void
}

export const LoadingScreen = React.memo(function LoadingScreen({ onStart }: LoadingScreenProps) {
  const [progress, setProgress] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = React.useState(false)

  // Star positions - generated only on client side to prevent hydration mismatch
  const [starPositions, setStarPositions] = React.useState<{
    large: Array<{ left: number; top: number; delay: number; duration: number; size: number }>
    medium: Array<{ left: number; top: number; opacity: number; delay: number; size: number }>
    small: Array<{ left: number; top: number; opacity: number; delay: number; size: number }>
    tiny: Array<{ left: number; top: number; opacity: number; delay: number; size: number }>
    shooting: Array<{ left: number; top: number; delay: number; duration: number }>
  }>({
    large: [],
    medium: [],
    small: [],
    tiny: [],
    shooting: []
  })

  React.useEffect(() => {
    setIsMounted(true)
    
    // Optimized: Reduced star count for better performance (500 → 150 total)
    const positions = {
      large: Array.from({ length: 10 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
        size: 1 + Math.random() * 2
      })),
      medium: Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.5 + Math.random() * 0.4,
        delay: Math.random() * 2,
        size: 0.5 + Math.random() * 1
      })),
      small: Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.2 + Math.random() * 0.3,
        delay: Math.random() * 1.5,
        size: 0.5 + Math.random() * 0.5
      })),
      tiny: Array.from({ length: 10 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.2,
        delay: Math.random() * 1,
        size: 0.25 + Math.random() * 0.25
      })),
      shooting: Array.from({ length: 1 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2
      }))
    }
    setStarPositions(positions)
  }, [])

  // Set mounted flag on client
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Mouse movement handler
  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  // Progress animation - 3 seconds total
  React.useEffect(() => {
    let progress = 0
    const timer = setInterval(() => {
      progress += 2
      setProgress(progress)
      
      if (progress >= 100) {
        clearInterval(timer)
        setIsComplete(true)
      }
    }, 60) // 60ms interval: 50 steps × 60ms = 3000ms (3 seconds)

    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden group"
      onMouseMove={handleMouseMove}
      suppressHydrationWarning
    >
      {/* Space Background with Stars */}
      <div className="absolute inset-0 bg-black" suppressHydrationWarning>
         {/* Stars Layer 1 - Large stars */}
         <div className="absolute inset-0" suppressHydrationWarning>
           {isMounted && starPositions.large.length > 0 && starPositions.large.map((pos, i) => {
             const distance = Math.sqrt(
               Math.pow((pos.left * (typeof window !== 'undefined' ? window.innerWidth : 1920) / 100) - mousePosition.x, 2) + 
               Math.pow((pos.top * (typeof window !== 'undefined' ? window.innerHeight : 1080) / 100) - mousePosition.y, 2)
             )
             const isNearMouse = distance < 150
             
             return (
               <div
                 key={`star-1-${i}`}
                 className={`absolute bg-white rounded-full transition-all duration-300 ease-out ${
                   isNearMouse ? 'animate-ping' : 'animate-swim-slow'
                 }`}
                 style={{
                   left: `${pos.left}%`,
                   top: `${pos.top}%`,
                   width: `${pos.size}px`,
                   height: `${pos.size}px`,
                   animationDelay: `${pos.delay}s`,
                   animationDuration: isNearMouse ? '1s' : `${pos.duration}s`,
                   transform: isNearMouse ? 'scale(1.5)' : 'scale(1)',
                   opacity: isNearMouse ? 1 : 0.8
                 }}
               />
             )
           })}
         </div>
        
         {/* Stars Layer 2 - Medium stars */}
         <div className="absolute inset-0" suppressHydrationWarning>
           {isMounted && starPositions.medium.length > 0 && starPositions.medium.map((pos, i) => {
             const distance = Math.sqrt(
               Math.pow((pos.left * (typeof window !== 'undefined' ? window.innerWidth : 1920) / 100) - mousePosition.x, 2) + 
               Math.pow((pos.top * (typeof window !== 'undefined' ? window.innerHeight : 1080) / 100) - mousePosition.y, 2)
             )
             const isNearMouse = distance < 120
             
             return (
               <div
                 key={`star-2-${i}`}
                 className={`absolute bg-white rounded-full transition-all duration-300 ease-out ${
                   isNearMouse ? 'animate-ping' : 'animate-space-drift'
                 }`}
                 style={{
                   left: `${pos.left}%`,
                   top: `${pos.top}%`,
                   width: `${pos.size}px`,
                   height: `${pos.size}px`,
                   opacity: isNearMouse ? 1 : pos.opacity,
                   animationDelay: `${pos.delay}s`,
                   transform: isNearMouse ? 'scale(1.3)' : 'scale(1)'
                 }}
               />
             )
           })}
         </div>
        
         {/* Stars Layer 3 - Small stars */}
         <div className="absolute inset-0" suppressHydrationWarning>
           {isMounted && starPositions.small.length > 0 && starPositions.small.map((pos, i) => {
             const distance = Math.sqrt(
               Math.pow((pos.left * (typeof window !== 'undefined' ? window.innerWidth : 1920) / 100) - mousePosition.x, 2) + 
               Math.pow((pos.top * (typeof window !== 'undefined' ? window.innerHeight : 1080) / 100) - mousePosition.y, 2)
             )
             const isNearMouse = distance < 100
             
             return (
               <div
                 key={`star-3-${i}`}
                 className={`absolute bg-white rounded-full transition-all duration-300 ease-out ${
                   isNearMouse ? 'animate-ping' : 'animate-swim-slow'
                 }`}
                 style={{
                   left: `${pos.left}%`,
                   top: `${pos.top}%`,
                   width: `${pos.size}px`,
                   height: `${pos.size}px`,
                   opacity: isNearMouse ? 1 : pos.opacity,
                   animationDelay: `${pos.delay}s`,
                   transform: isNearMouse ? 'scale(1.2)' : 'scale(1)'
                 }}
               />
             )
           })}
         </div>
        
         {/* Stars Layer 4 - Tiny stars */}
         <div className="absolute inset-0" suppressHydrationWarning>
           {isMounted && starPositions.tiny.length > 0 && starPositions.tiny.map((pos, i) => {
             const distance = Math.sqrt(
               Math.pow((pos.left * (typeof window !== 'undefined' ? window.innerWidth : 1920) / 100) - mousePosition.x, 2) + 
               Math.pow((pos.top * (typeof window !== 'undefined' ? window.innerHeight : 1080) / 100) - mousePosition.y, 2)
             )
             const isNearMouse = distance < 80
             
             return (
               <div
                 key={`star-4-${i}`}
                 className={`absolute bg-white rounded-full transition-all duration-300 ease-out ${
                   isNearMouse ? 'animate-ping' : 'animate-swim-slow'
                 }`}
                 style={{
                   left: `${pos.left}%`,
                   top: `${pos.top}%`,
                   width: `${pos.size}px`,
                   height: `${pos.size}px`,
                   opacity: isNearMouse ? 0.8 : pos.opacity,
                   animationDelay: `${pos.delay}s`,
                   transform: isNearMouse ? 'scale(1.5)' : 'scale(1)'
                 }}
               />
             )
           })}
         </div>
         
         {/* Shooting stars */}
         <div className="absolute inset-0" suppressHydrationWarning>
           {isMounted && starPositions.shooting.length > 0 && starPositions.shooting.map((pos, i) => (
             <div
               key={`shooting-${i}`}
               className="absolute w-1 h-1 bg-white rounded-full animate-ping transition-all duration-300 ease-out"
               style={{
                 left: `${pos.left}%`,
                 top: `${pos.top}%`,
                 animationDelay: `${pos.delay}s`,
                 animationDuration: '1s'
               }}
             />
           ))}
         </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-2xl mx-auto px-4" suppressHydrationWarning>
        {/* Professional Developer Loading Card - only show when not complete */}
        {!isComplete && (
          <>
            <div className="w-full bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 shadow-2xl shadow-emerald-500/10" suppressHydrationWarning>
              {/* Professional Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/20" suppressHydrationWarning>
                <div className="flex items-center space-x-3" suppressHydrationWarning>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" suppressHydrationWarning></div>
                  <div className="text-sm font-mono text-emerald-400 font-semibold tracking-wider" suppressHydrationWarning>
                    KAMAL.DEV
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-mono" suppressHydrationWarning>
                  v2.0.24
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-4 mb-6" suppressHydrationWarning>
                <div className="flex justify-between items-center" suppressHydrationWarning>
                  <span className="text-sm font-mono text-gray-300 font-medium">System Initialization</span>
                  <span className="text-sm font-mono text-emerald-400 font-bold">{progress}%</span>
                </div>
                <div className="relative" suppressHydrationWarning>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden" suppressHydrationWarning>
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full transition-all duration-300 relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Core Systems</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-300">React Framework</span>
                      <span className="text-xs text-emerald-400 ml-auto">✓</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-300">Next.js Engine</span>
                      <span className="text-xs text-emerald-400 ml-auto">✓</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-300">TypeScript Compiler</span>
                      <span className="text-xs text-emerald-400 ml-auto">✓</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Services</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-300">UI Components</span>
                      <span className="text-xs text-emerald-400 ml-auto">✓</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-300">Animation Engine</span>
                      <span className="text-xs text-emerald-400 ml-auto">✓</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-300">Portfolio Assets</span>
                      <span className="text-xs text-yellow-400 ml-auto">⏳</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Operation */}
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                  <div className="flex-1">
                    <div className="text-sm font-mono text-cyan-400 font-medium">
                      Initializing Portfolio Environment
                    </div>
                    <div className="text-xs text-gray-400 font-mono mt-1">
                      Loading components and preparing deployment...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Loading Indicator */}
            <div className="space-y-4 text-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-400/40 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
              </div>
              <div className="text-sm font-mono text-gray-300">
                <span className="text-emerald-400">Initializing</span> portfolio environment... {progress}%
              </div>
            </div>
          </>
        )}

        {/* Professional START Button - Only show when complete */}
        {isComplete && (
          <div className="space-y-12 text-center">
            <div className="flex items-center justify-center space-x-3 text-green-400">
              <CheckCircle className="w-8 h-8" />
              <span className="text-2xl font-mono font-bold">Mission Ready!</span>
            </div>
            
            <div className="text-lg text-gray-300 font-mono mb-8">
              <span className="text-green-400">//</span> Portfolio systems online and ready for deployment
            </div>
            
            <div className="text-sm text-emerald-400 font-mono mb-4 animate-pulse">
              🚀 Mission Ready - Deploy Portfolio to Begin
            </div>
            
            {/* Professional Swimming Button */}
            <div className="relative w-full h-32 flex items-center justify-center">
              {/* Swimming button container */}
              <div className="absolute animate-swim-professional">
                <button
                  onClick={onStart}
                  className="group relative px-12 py-6 text-lg font-mono font-bold bg-gradient-to-br from-slate-800 via-gray-900 to-black border-2 border-emerald-400/60 rounded-2xl shadow-2xl hover:shadow-emerald-400/60 hover:shadow-2xl transition-all duration-700 transform hover:scale-115 hover:border-emerald-300 hover:-translate-y-2 cursor-pointer overflow-hidden hover:rotate-1"
                >
                  {/* Enhanced animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/15 to-cyan-500/10 rounded-2xl blur-sm group-hover:blur-lg group-hover:from-emerald-500/20 group-hover:via-teal-500/25 group-hover:to-cyan-500/20 transition-all duration-700"></div>
                  
                  {/* Additional hover glow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Enhanced floating particles */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-emerald-300 transition-all duration-500"></div>
                  <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-teal-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-teal-300 transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-cyan-400/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-cyan-300 transition-all duration-500" style={{animationDelay: '1s'}}></div>
                  <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-emerald-300/80 rounded-full animate-ping group-hover:animate-pulse group-hover:scale-150 group-hover:bg-emerald-200 transition-all duration-500" style={{animationDelay: '1.5s'}}></div>
                  
                  {/* Additional hover particles */}
                  <div className="absolute -top-3 -left-1 w-1 h-1 bg-teal-300/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute -bottom-3 -right-1 w-1 h-1 bg-cyan-300/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{animationDelay: '0.7s'}}></div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center space-x-4">
                    {/* Enhanced developer icon */}
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center group-hover:animate-spin group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-700">
                      <span className="text-black font-bold text-sm group-hover:animate-pulse">{'<>'}</span>
                    </div>
                    
                    {/* Enhanced button text */}
                    <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 group-hover:from-emerald-200 group-hover:via-teal-300 group-hover:to-cyan-300 group-hover:drop-shadow-lg group-hover:drop-shadow-emerald-400/50 transition-all duration-500 font-mono group-hover:scale-105">
                      DEPLOY PORTFOLIO
                    </span>
                    
                    {/* Enhanced rocket icon */}
                    <div className="w-7 h-7 text-emerald-400 group-hover:translate-x-2 group-hover:scale-125 group-hover:animate-pulse transition-all duration-500">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full group-hover:drop-shadow-lg group-hover:drop-shadow-emerald-400/50">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Hover effect particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  
                  {/* Enhanced corner accents */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400/60 group-hover:border-emerald-300 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-500 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-teal-400/60 group-hover:border-teal-300 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-teal-400/50 transition-all duration-500 rounded-tr-lg" style={{animationDelay: '0.1s'}}></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60 group-hover:border-cyan-300 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-500 rounded-bl-lg" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400/60 group-hover:border-emerald-300 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-500 rounded-br-lg" style={{animationDelay: '0.3s'}}></div>
                  
                  {/* Additional corner glow effects */}
                  <div className="absolute top-0 left-0 w-4 h-4 bg-emerald-400/10 rounded-tl-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 bg-teal-400/10 rounded-tr-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{animationDelay: '0.1s'}}></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-cyan-400/10 rounded-bl-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400/10 rounded-br-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" style={{animationDelay: '0.3s'}}></div>
                </button>
              </div>
            </div>
            
            <div className="text-sm text-gray-400 font-mono animate-fade-in-out">
              Ready to explore the portfolio
            </div>
          </div>
        )}
      </div>
    </div>
  )
})