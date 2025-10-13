"use client"

import * as React from "react"
import { LoadingScreen } from "./loading-screen"

interface LoadingManagerProps {
  children: (props: { isLoading: boolean }) => React.ReactNode
}

export function LoadingManager({ children }: LoadingManagerProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  const handleStart = React.useCallback(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <LoadingScreen onStart={handleStart} />
  }

  return <>{children({ isLoading })}</>
}
