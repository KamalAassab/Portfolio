"use client"

import * as React from "react"
import { LoadingScreen } from "./loading-screen"

interface LoadingManagerProps {
  children: (props: { isLoading: boolean }) => React.ReactNode
  onWebsiteStart?: () => void
}

export function LoadingManager({ children, onWebsiteStart }: LoadingManagerProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  const handleStart = React.useCallback(() => {
    setIsLoading(false)
    // Trigger website reveal animation
    if (onWebsiteStart) {
      onWebsiteStart()
    }
  }, [onWebsiteStart])

  if (isLoading) {
    return <LoadingScreen onStart={handleStart} />
  }

  return <>{children({ isLoading })}</>
}
