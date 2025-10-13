"use client"

import * as React from "react"

interface SpaceBackgroundProps {
  isVisible?: boolean
  className?: string
}

interface Star {
  left: number
  top: number
  delay: number
  duration: number
  opacity: number
  size: number
}

interface ShootingStar {
  left: number
  top: number
  delay: number
  rotation: number
}

interface StarPositions {
  large: Star[]
  medium: Star[]
  small: Star[]
  tiny: Star[]
  shooting: ShootingStar[]
}

export function SpaceBackground({ isVisible = true, className = "" }: SpaceBackgroundProps) {
  const [starPositions, setStarPositions] = React.useState<StarPositions | null>(null)

  // Generate star positions only on client side to avoid hydration mismatch
  React.useEffect(() => {
    const generateStars = (count: number, size: number, opacity: number) => 
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
        opacity: opacity + Math.random() * 0.3,
        size: size
      }))

    setStarPositions({
      large: generateStars(15, 1, 0.8),    // Reduced from 20 to 15
      medium: generateStars(25, 0.5, 0.6), // Reduced from 35 to 25
      small: generateStars(35, 0.5, 0.4),  // Reduced from 50 to 35
      tiny: generateStars(50, 0.5, 0.2),   // Reduced from 80 to 50
      shooting: Array.from({ length: 2 }, () => ({ // Reduced from 3 to 2
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        rotation: Math.random() * 360
      }))
    })
  }, [])

  if (!isVisible) return null
  if (!starPositions) return <div className={`fixed inset-0 z-0 bg-black ${className}`} />

  return (
    <div className={`fixed inset-0 z-0 bg-black ${className}`}>
      {/* Large bright stars */}
      {starPositions.large.map((star, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}
      
      {/* Medium stars */}
      {starPositions.medium.map((star, i) => (
        <div
          key={`medium-${i}`}
          className="absolute w-0.5 h-0.5 bg-gray-300 rounded-full animate-ping"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)'
          }}
        />
      ))}
      
      {/* Small stars */}
      {starPositions.small.map((star, i) => (
        <div
          key={`small-${i}`}
          className="absolute w-0.5 h-0.5 bg-gray-400 rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            boxShadow: '0 0 2px rgba(255, 255, 255, 0.4)'
          }}
        />
      ))}
      
      {/* Tiny background stars */}
      {starPositions.tiny.map((star, i) => (
        <div
          key={`tiny-${i}`}
          className="absolute w-0.5 h-0.5 bg-gray-500 rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {starPositions.shooting.map((star, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-1 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full animate-ping"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: '2s',
            transform: `rotate(${star.rotation}deg)`,
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}

      {/* Nebula effect - subtle gradient overlays */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            left: '10%',
            top: '20%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            right: '15%',
            top: '60%',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            left: '60%',
            top: '10%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  )
}
