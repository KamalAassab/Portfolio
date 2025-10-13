"use client"

import * as React from "react"

interface TypingTitleProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  as?: React.ElementType
}

export const TypingTitle = React.memo(function TypingTitle({ 
  text, 
  className = "", 
  speed = 80, 
  delay = 0,
  as: Component = "h2"
}: TypingTitleProps) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isComplete, setIsComplete] = React.useState(false)

  React.useEffect(() => {
    if (currentIndex >= text.length) {
      setIsComplete(true)
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex])
      setCurrentIndex(prev => prev + 1)
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, delay])

  // Standardized section title styling
  const defaultClassName = "text-3xl lg:text-4xl font-black text-white tracking-wider transition-all duration-500 hover:text-cyan-300"

  return (
    <Component className={`${defaultClassName} ${className}`}>
      {displayedText}
      {!isComplete && <span className="terminal-cursor animate-pulse"></span>}
    </Component>
  )
})
