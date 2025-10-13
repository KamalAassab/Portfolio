"use client"

import * as React from "react"

type RevealDirection = 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scaleIn' | 'rotateIn'

interface ProfessionalRevealProps {
  children: React.ReactNode
  isVisible: boolean
  direction?: RevealDirection
  duration?: number
  delay?: number
  stagger?: number
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier'
  className?: string
}

export const ProfessionalReveal = React.memo(function ProfessionalReveal({ 
  children, 
  isVisible, 
  direction = 'slideUp',
  duration = 1200,
  delay = 0,
  stagger = 0,
  easing = 'cubic-bezier',
  className = ""
}: ProfessionalRevealProps) {
  const [shouldRender, setShouldRender] = React.useState(false)
  const [animationPhase, setAnimationPhase] = React.useState<'hidden' | 'animating' | 'visible'>('hidden')

  React.useEffect(() => {
    if (isVisible) {
      const renderTimer = setTimeout(() => {
        setShouldRender(true)
        setAnimationPhase('animating')
      }, delay)

      const visibleTimer = setTimeout(() => {
        setAnimationPhase('visible')
      }, delay + duration)

      return () => {
        clearTimeout(renderTimer)
        clearTimeout(visibleTimer)
      }
    } else {
      setShouldRender(false)
      setAnimationPhase('hidden')
    }
  }, [isVisible, delay, duration])

  if (!shouldRender) {
    return null
  }

  const getEasingFunction = () => {
    switch (easing) {
      case 'ease': return 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      case 'ease-in': return 'cubic-bezier(0.42, 0, 1, 1)'
      case 'ease-out': return 'cubic-bezier(0, 0, 0.58, 1)'
      case 'ease-in-out': return 'cubic-bezier(0.42, 0, 0.58, 1)'
      case 'cubic-bezier': return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      default: return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  }

  const getTransform = () => {
    if (animationPhase === 'hidden') {
      switch (direction) {
        case 'slideUp': return 'translateY(100vh)'
        case 'slideDown': return 'translateY(-100vh)'
        case 'slideLeft': return 'translateX(100vw)'
        case 'slideRight': return 'translateX(-100vw)'
        case 'fadeIn': return 'translateY(20px)'
        case 'scaleIn': return 'scale(0.8) translateY(50px)'
        case 'rotateIn': return 'rotate(-10deg) translateY(50px)'
        default: return 'translateY(100vh)'
      }
    }
    return 'translateY(0) translateX(0) scale(1) rotate(0deg)'
  }

  const getOpacity = () => {
    if (animationPhase === 'hidden') return 0
    if (animationPhase === 'animating') return 0.3
    return 1
  }

  return (
    <div 
      className={`professional-reveal ${className}`}
      style={{
        '--reveal-duration': `${duration}ms`,
        '--reveal-delay': `${delay}ms`,
        '--reveal-stagger': `${stagger}ms`,
        '--reveal-easing': getEasingFunction(),
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `transform var(--reveal-duration) var(--reveal-easing),
                    opacity var(--reveal-duration) var(--reveal-easing)`,
        transitionDelay: `${delay}ms`
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
})

// Staggered reveal for multiple children
interface StaggeredRevealProps {
  children: React.ReactNode[]
  isVisible: boolean
  direction?: RevealDirection
  duration?: number
  delay?: number
  staggerDelay?: number
  className?: string
}

export function StaggeredReveal({
  children,
  isVisible,
  direction = 'slideUp',
  duration = 800,
  delay = 0,
  staggerDelay = 150,
  className = ""
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ProfessionalReveal
          key={index}
          isVisible={isVisible}
          direction={direction}
          duration={duration}
          delay={delay + (index * staggerDelay)}
        >
          {child}
        </ProfessionalReveal>
      ))}
    </div>
  )
}
