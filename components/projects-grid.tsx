"use client"

import * as React from "react"
import { projects, projectCategories } from "@/lib/projects"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { Button } from "@/components/ui/button"
import { TypingTitle } from "@/components/typing-title"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Filter, Code2 } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [modalOpen, setModalOpen] = React.useState(false)

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") return projects
    return projects.filter((project) => project.category.includes(selectedCategory))
  }, [selectedCategory])

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Enhanced Header */}
          <div className="space-y-6 animate-fade-up text-center">
            <div className="relative inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="h-8 w-8 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                <TypingTitle 
                  text="Featured Projects" 
                  speed={80}
                  delay={1000}
                  className="text-4xl lg:text-5xl font-bold text-balance text-white font-mono"
                />
                <Code2 className="h-8 w-8 text-secondary animate-bounce" />
              </div>
              
              {/* Enhanced animated underline */}
              <div className="relative">
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-md animate-pulse" />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-ping" />
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mx-auto leading-relaxed">Modern web applications showcasing technical expertise and user-centric design.</p>
          </div>

          {/* Enhanced Category Filter */}
          <div className="space-y-4 animate-fade-up animation-delay-200">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by Technology</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {projectCategories.map((category, index) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-button-enhanced ${
                    selectedCategory === category 
                      ? 'active bg-primary text-primary-foreground shadow-lg' 
                      : 'hover:bg-primary/10 hover:border-primary/20'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {category}
                  {selectedCategory === category && (
                    <Badge variant="secondary" className="ml-2 text-xs animate-project-stats-count">
                      {filteredProjects.length}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid-enhanced">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-project-reveal project-item-enhanced" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} onOpenModal={handleOpenModal} priority={index === 0} />
              </div>
            ))}
          </div>

          {/* Enhanced Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">No projects found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try selecting a different category to explore more projects.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory("All")}
                className="mt-4"
              >
                Show All Projects
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center pt-8 animate-fade-up animation-delay-400">
            <p className="text-muted-foreground mb-4">
              Interested in collaborating or have a project in mind?
            </p>
            <Button 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
