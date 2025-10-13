"use client"

import * as React from "react"
import { projects, projectCategories } from "@/lib/projects"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import { Button } from "@/components/ui/button"
import { TypingTitle } from "@/components/typing-title"
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
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-up text-center">
            <TypingTitle 
              text="Featured Projects" 
              speed={80}
              delay={1000}
            />
            <p className="text-lg text-muted-foreground mx-auto whitespace-nowrap">
              A selection of projects that showcase my expertise in building modern, performant web applications.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 animate-fade-up animation-delay-200">
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard project={project} onOpenModal={handleOpenModal} priority={index === 0} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
