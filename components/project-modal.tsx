"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    if (open) {
      setCurrentImageIndex(0)
    }
  }, [open])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open || !project) return

      if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, project])

  if (!project) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Carousel */}
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
            <Image
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {project.images.length > 1 && (
              <>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-primary w-8" : "bg-primary/30"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Role</div>
              <div className="font-semibold">{project.role}</div>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Timeline</div>
              <div className="font-semibold">{project.timeline}</div>
            </Card>
            <Card className="p-4">
              <div className="text-sm text-muted-foreground mb-1">Category</div>
              <div className="font-semibold">{project.category.join(", ")}</div>
            </Card>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">{project.fullDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric) => (
                <Card key={metric.label} className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <Button asChild className="flex-1">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
