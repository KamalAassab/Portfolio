"use client"

import * as React from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  onOpenModal: (project: Project) => void
  priority?: boolean
}

export function ProjectCard({ project, onOpenModal, priority = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(project)}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-background/95 p-6 flex flex-col justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h4 className="text-lg font-semibold mb-3">What I Built</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button size="sm" variant="outline" asChild onClick={(e) => e.stopPropagation()}>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild onClick={(e) => e.stopPropagation()}>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
