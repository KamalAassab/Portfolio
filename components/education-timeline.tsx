"use client"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypingTitle } from "@/components/typing-title"

const education = [
  {
    year: "June 2025",
    institution: "Faculty of Sciences and Techniques, Settat, Morocco",
    degree: "Bachelor in Information system and digital transformation",
    description:
      "Comprehensive study of information systems, digital project management, and transformative technologies. Focused on practical applications in business and technology.",
    link: "#", // Replace with actual diploma link if available
    skills: ["Information Systems", "Digital Transformation", "Project Management", "Business Analysis", "Web Development", "Project Architecture"],
  },
  {
    year: "June 2024",
    institution: "Faculty of Sciences and Techniques, Settat, Morocco",
    degree: "Diploma in Scientific and Technical University Studies: Mathematics, Computer Science, and Physics",
    description:
      "Interdisciplinary program covering foundational knowledge in mathematics, computer science fundamentals, and physics principles. Developed strong analytical and problem-solving skills.",
    link: "#", // Replace with actual diploma link if available
    skills: ["Mathematics", "Computer Science", "Physics", "Algorithms", "Problem Solving"],
  },
]

export function EducationTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <TypingTitle 
            text="My Career & Experience" 
            speed={80}
            delay={1500}
          />

          <div className="relative space-y-8 mt-12">
            {/* Timeline Line with Glowing Orb */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/50 to-cyan-500/20 shadow-lg shadow-purple-500/20 animate-pulse" />

            {education.map((item, index) => (
              <div key={index} className="relative flex justify-center animate-fade-up"
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                {/* Year - Left side for larger screens */}
                <div className="hidden md:flex w-1/2 justify-end pr-12 items-center">
                  <span className="text-2xl font-bold text-gray-300 font-mono tracking-wider animate-float-professional">
                    {item.year}
                  </span>
                </div>

                {/* Glowing Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white/30 shadow-lg shadow-blue-500/50 animate-ping" />

                {/* Card - Right side for larger screens, full width for small screens */}
                <Card
                  className="relative w-full md:w-1/2 p-6 md:p-8 bg-transparent border-0 shadow-none overflow-visible transition-none transform-none hover:scale-100 hover:shadow-none hover:border-transparent hover:-translate-y-0"
                >
                  {/* Content */}
                  <div className="relative z-10 space-y-2">
                    {/* Year for small screens */}
                    <div className="md:hidden text-2xl font-bold text-gray-300 font-mono tracking-wider mb-2">
                      {item.year}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                      <p className="text-gray-400 text-sm">{item.institution}</p>
                    </div>
                    <p className="text-gray-500 text-pretty text-sm">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
