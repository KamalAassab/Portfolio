"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface AvatarHeroProps {
  className?: string
}

export const AvatarHero: React.FC<AvatarHeroProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-sm mx-auto rounded-full",
        "flex items-center justify-center",
        "bg-gradient-to-br from-indigo-900 to-purple-900",
        "shadow-2xl shadow-indigo-500/50",
        "border border-indigo-700/60",
        "overflow-hidden animate-float-professional",
        className
      )}
    >
      {/* Outer pulsating glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 blur-2xl opacity-70 animate-pulse-slow" />

      {/* Central Orb / Core */}
      <div className="relative w-4/5 h-4/5 rounded-full flex items-center justify-center
                  bg-gradient-to-br from-indigo-700 to-purple-800
                  shadow-xl shadow-indigo-600/50
                  border-2 border-purple-500/70
                  animate-spin-slow" // Subtle continuous rotation
        style={{ animationDuration: '40s' }}
      >
        {/* Inner holographic grid */}
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-scroll opacity-50" />
        
        {/* Inner pulsating light */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 opacity-60 blur-xl animate-pulse" />

        {/* Text Initials */}
        <span className="relative z-10 text-6xl lg:text-7xl font-extrabold text-white
                    bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300
                    drop-shadow-lg animate-fade-in-out-subtle font-mono">
          K.A
        </span>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-particle-float opacity-80"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: `${0.4 + Math.random() * 0.6}`
            }}
          />
        ))}

        {/* Arc effects */}
        <div className="absolute w-full h-full border-t-2 border-purple-500/70 rounded-full animate-rotate-slow" style={{ animationDuration: '25s' }} />
        <div className="absolute w-full h-full border-b-2 border-indigo-500/70 rounded-full animate-rotate-slow-reverse" style={{ animationDuration: '30s' }} />
      </div>
    </div>
  )
}
