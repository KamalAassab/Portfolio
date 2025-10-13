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

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

            {education.map((item, index) => (
              <Card
                key={index}
                className="relative p-6 md:pl-12 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background hidden md:block -translate-x-[5px]" />

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground text-pretty">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
