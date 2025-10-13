"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProfessionalReveal } from "@/components/professional-reveal"
import { LoadingManager } from "@/components/loading-manager"
import { SpaceBackground } from "@/components/space-background"

// Lazy load heavy components for better performance
const TechnicalSkills = dynamic(() => import("@/components/technical-skills").then(mod => ({ default: mod.TechnicalSkills })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading skills...</div></div>,
  ssr: false
})

const EducationTimeline = dynamic(() => import("@/components/education-timeline").then(mod => ({ default: mod.EducationTimeline })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading education...</div></div>,
  ssr: false
})

const ProjectsGrid = dynamic(() => import("@/components/projects-grid").then(mod => ({ default: mod.ProjectsGrid })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading projects...</div></div>,
  ssr: false
})

const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading contact...</div></div>,
  ssr: false
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-32 flex items-center justify-center"><div className="animate-pulse text-gray-400">Loading footer...</div></div>,
  ssr: false
})

const ParticleEffects = dynamic(() => import("@/components/particle-effects").then(mod => ({ default: mod.ParticleEffects })), {
  ssr: false
})

export default function Home() {
  const [showWebsite, setShowWebsite] = React.useState(false)


  const handleStartWebsite = () => {
    setShowWebsite(true)
  }

  return (
    <LoadingManager onWebsiteStart={handleStartWebsite}>
      {({ isLoading }) => (
        <>
          {/* Loading Screen */}
          {isLoading && (
            <div className="fixed inset-0 z-50">
              {/* Loading screen content will be rendered here by LoadingManager */}
            </div>
          )}

          {/* Website Content with Professional Multi-Directional Animations */}
          <div className="relative min-h-screen overflow-hidden">
            {/* Unified Space Background */}
            <SpaceBackground isVisible={!isLoading && showWebsite} />
            
            {/* Particle Effects - Optimized */}
            <ParticleEffects 
              isVisible={!isLoading && showWebsite} 
              count={5}
              delay={300}
            />

            {/* Navbar - Always visible */}
            <Navbar />

            {/* Content with Staggered Animations - Centered with navbar space */}
            <div className="relative z-10">
              {/* Main content with navbar spacing */}
              <div className="md:mr-24 lg:mr-32">
                <main id="main-content">
                  {/* Hero Section - Slides from bottom with scale */}
                  <ProfessionalReveal 
                    isVisible={!isLoading && showWebsite} 
                    direction="scaleIn"
                    duration={700}
                    delay={200}
                  >
                    <Hero />
                  </ProfessionalReveal>

                  {/* About Section - Slides from left */}
                  <ProfessionalReveal 
                    isVisible={!isLoading && showWebsite} 
                    direction="slideLeft"
                    duration={600}
                    delay={300}
                  >
                    <About />
                  </ProfessionalReveal>

                  {/* Technical Skills Section - Slides from right */}
                  <ProfessionalReveal 
                    isVisible={!isLoading && showWebsite} 
                    direction="slideRight"
                    duration={600}
                    delay={350}
                  >
                    <TechnicalSkills />
                  </ProfessionalReveal>

                  {/* Education Timeline - Slides from left */}
                  <ProfessionalReveal 
                    isVisible={!isLoading && showWebsite} 
                    direction="slideLeft"
                    duration={600}
                    delay={400}
                  >
                    <EducationTimeline />
                  </ProfessionalReveal>

                  {/* Projects Grid - Rotates in */}
                  <ProfessionalReveal 
                    isVisible={!isLoading && showWebsite} 
                    direction="rotateIn"
                    duration={700}
                    delay={500}
                  >
                    <ProjectsGrid />
                  </ProfessionalReveal>

                  {/* Contact Form - Slides from bottom */}
                  <ProfessionalReveal 
                    isVisible={!isLoading && showWebsite} 
                    direction="slideUp"
                    duration={600}
                    delay={600}
                  >
                    <ContactForm />
                  </ProfessionalReveal>
                </main>
              </div>

              {/* Footer - Fades in - Full Width */}
              <ProfessionalReveal 
                isVisible={!isLoading && showWebsite} 
                direction="fadeIn"
                duration={500}
                delay={700}
              >
                <Footer />
              </ProfessionalReveal>
            </div>
          </div>
        </>
      )}
    </LoadingManager>
  )
}
