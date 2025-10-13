"use client"

import * as React from "react"

interface ParticleEffectsProps {
  isVisible: boolean
  count?: number
  delay?: number
}

export const ParticleEffects = React.memo(function ParticleEffects({ isVisible, count = 10, delay = 0 }: ParticleEffectsProps) {
  const [particles, setParticles] = React.useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
  }>>([])

  React.useEffect(() => {
    if (isVisible) {
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 2
      }))
      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [isVisible, count])

  if (!isVisible || particles.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
          }}
        />
      ))}
    </div>
  )
})
