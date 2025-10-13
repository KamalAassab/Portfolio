"use client"

import * as React from "react"

interface PerformanceMonitorProps {
  children: React.ReactNode
}

export const PerformanceMonitor = React.memo(function PerformanceMonitor({ children }: PerformanceMonitorProps) {
  React.useEffect(() => {
    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            })
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation', 'paint'] })
      
      return () => observer.disconnect()
    }
  }, [])

  return <>{children}</>
})
