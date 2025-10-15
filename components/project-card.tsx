"use client"

import * as React from "react"
import { ExternalLink, Github, ArrowRight, Sparkles, Zap } from "lucide-react"
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
      className="group relative overflow-hidden project-card-enhanced cursor-pointer border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(project)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full transition-all duration-700 ${isHovered ? 'animate-ping' : ''}`} />
        <div className={`absolute bottom-6 left-6 w-1 h-1 bg-secondary/40 rounded-full transition-all duration-700 ${isHovered ? 'animate-pulse' : ''}`} />
        <div className={`absolute top-1/2 right-8 w-1.5 h-1.5 bg-accent/50 rounded-full transition-all duration-700 ${isHovered ? 'animate-bounce' : ''}`} />
      </div>

      <CardContent className="p-6 space-y-4 relative z-10">
        {/* Header with Icon and Title */}
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          
          {/* Animated Arrow Icon */}
          <div className={`transition-all duration-300 ${isHovered ? 'translate-x-1 scale-110' : ''}`}>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Tech Stack with Enhanced Animations */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech, index) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className={`text-xs tech-badge-enhanced ${
                isHovered ? 'animate-tech-badge-pulse' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tech.length - 4} more
            </Badge>
          )}
        </div>

        {/* Project Highlights Preview */}
        <div className={`space-y-2 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Key Features
          </div>
          <ul className="space-y-1">
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Zap className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics Preview */}
        <div className={`grid grid-cols-2 gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {project.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="text-center p-2 bg-muted/50 rounded-lg">
              <div className="text-xs font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
      </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2 relative z-10">
        <Button 
          size="sm" 
          variant="outline" 
          asChild 
          onClick={(e) => e.stopPropagation()}
          className="flex-1 transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/20"
        >
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          asChild 
          onClick={(e) => e.stopPropagation()}
          className="flex-1 transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/20"
        >
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            Code
          </a>
        </Button>
      </CardFooter>

      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Card>
  )
}
