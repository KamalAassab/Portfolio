"use client"
import { TypingTitle } from "@/components/typing-title"

const timelineItems = [
  {
    year: "June 2024",
    institution: "Faculty of Sciences and Techniques, Settat, Morocco",
    degree: "Diploma in Scientific and Technical University Studies: Mathematics, Computer Science, and Physics",
    description:
      "Interdisciplinary program covering foundational knowledge in mathematics, computer science fundamentals, and physics principles. Developed strong analytical and problem-solving skills.",
    type: "education"
  },
  {
    year: "June 2025",
    institution: "Faculty of Sciences and Techniques, Settat, Morocco",
        degree: "Bachelor in Information system and digital transformation",
    description:
      "Comprehensive study of information systems, digital project management, and transformative technologies. Focused on practical applications in business and technology.",
    type: "education"
  },
  {
    year: "NOW",
    degree: "Freelance & Upskilling",
    institution: "Freelance",
    description:
      "During this period, I worked as a freelancer for various clients, providing 3D and web services, while actively upskilling also in multiple areas increasing my Techstack.",
    type: "experience"
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

          <div className="relative mt-12">
            {/* Timeline Line with Glowing Orb */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/50 to-cyan-500/20 shadow-lg shadow-purple-500/20 animate-pulse" />

            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-center justify-center py-8 animate-fade-up"
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                {/* Content Wrapper for each item - centers around the timeline */}
                <div className="flex flex-col md:flex-row items-center md:items-stretch w-full max-w-4xl">

                  {/* Left Section: Diploma and Institution */}
                  <div className="flex-1 text-center md:text-right pr-0 md:pr-16 order-1 md:order-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <p className="text-gray-400 text-sm">{item.institution}</p>
                  </div>

                  {/* Center Section: Year and Glowing Dot (acts as the timeline point) */}
                  <div className="relative w-24 flex-shrink-0 flex justify-center items-center order-2 md:order-2">
                    {/* Year on the timeline */}
                    <span className="text-2xl font-bold text-gray-300 font-mono tracking-wider animate-float-professional z-10 bg-black px-2">
                      {item.year}
                    </span>
                    {/* Glowing Timeline Dot - positioned over the line, behind the year text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white/30 shadow-lg shadow-blue-500/50 animate-ping z-0" />
                  </div>

                  {/* Right Section: Description */}
                  <div className="flex-1 text-center md:text-left pl-0 md:pl-16 order-3 md:order-3 mt-4 md:mt-0">
                    <p className="text-gray-500 text-pretty text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
