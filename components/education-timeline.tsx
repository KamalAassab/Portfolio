"use client"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypingTitle } from "@/components/typing-title"

const education = [
  {
    year: "2024 — Present",
    institution: "Klaviyo",
    degree: "Senior Frontend Engineer, Accessibility",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams to implement best practices in web accessibility.",
    link: "#",
    skills: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    year: "2018 — 2024",
    institution: "Various Companies",
    degree: "Front-end Developer",
    description:
      "Developed software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios.",
    link: "#",
    skills: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    year: "2014 — 2018",
    institution: "University of Technology",
    degree: "Bachelor of Computer Science",
    description:
      "Focused on web technologies, human-computer interaction, and software engineering principles. Graduated with honors.",
    link: "/diploma.pdf",
    skills: ["Algorithms", "Data Structures", "Web Development", "UI/UX"],
  },
]

export function EducationTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <TypingTitle 
            text="Experience & Education" 
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
                  className="relative w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden transition-all duration-700 transform hover:scale-[1.02] hover:shadow-purple-500/20 hover:shadow-3xl hover:border-purple-400/50 hover:-translate-y-1"
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Corner Tech Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400/60 group-hover:border-purple-300 transition-all duration-300 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400/60 group-hover:border-blue-300 transition-all duration-300 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 group-hover:border-cyan-300 transition-all duration-300 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400/60 group-hover:border-purple-300 transition-all duration-300 rounded-br-lg"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Year for small screens */}
                    <div className="md:hidden text-lg font-bold text-gray-300 font-mono tracking-wider mb-2">
                      {item.year}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-purple-400">{item.degree}</h3>
                        <p className="text-gray-300">{item.institution}</p>
                      </div>
                      {item.link && (
                        <a
                          href={item.link}
                          className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Details
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-400 text-pretty">{item.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
