"use client"
import { TypingTitle } from "@/components/typing-title"
import React from "react"; // Added missing import for React

interface TimelineEntry {
  year: string;
  institution: string | React.ReactNode;
  degree: string;
  description: string;
  type: "education" | "experience";
}

interface TimelineTitle {
  type: "title";
  text: string;
  delay: number;
}

type TimelineItem = TimelineEntry | TimelineTitle;

const rawTimelineItems: TimelineEntry[] = [
  {
    year: "June 2024",
    institution: "Faculty of Sciences and Techniques, Settat, Morocco",
    degree: "Diploma in Scientific and Technical University Studies: Mathematics, Computer Science, and Physics",
    description:
      "Interdisciplinary program in math, CS, and physics. Developed strong analytical and problem-solving skills.",
    type: "education"
  },
  {
    year: "July 2025", // Changed from June 2025
    institution: "Faculty of Sciences and Techniques, Settat, Morocco",
        degree: "Bachelor in Information system and digital transformation",
    description:
      "Comprehensive study of information systems, digital project management, and transformative technologies. Focused on web dev, Java OOP, Power BI, UML/MERISE, and databases (SQL).",
    type: "education"
  },
  {
    year: "June 2025", // Changed from Avril 2025 - June 2025
    degree: "Full Stack Developer (Internship)",
    institution: (<>
      <a href="https://www.tasmimweb.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">TASMIM WEB</a>
      <span className="block text-gray-500 text-xs mt-0.5">Casablanca, Morocco</span>
    </>),
    description:
      "Developed a full-stack e-commerce website with React.js, Node.js, TypeScript, MySQL, and other modern web technologies, including admin/client dashboards for product, order, and user management. April - June 2025 (2 months)", // Rephrased duration
    type: "experience"
  },
  {
    year: "NOW",
    degree: "Freelance & Upskilling",
    institution: "Freelance",
    description:
      "Worked as a frontend developer (occasionally backend, though with limited backend skills) providing web services, while actively upskilling in various tech areas.",
    type: "experience"
  },
]

export function EducationTimeline() {
  const educationItems = rawTimelineItems.filter(item => item.type === "education").sort((a, b) => new Date(b.year.split(' ')[1] || b.year).getTime() - new Date(a.year.split(' ')[1] || a.year).getTime());
  const experienceItems = rawTimelineItems.filter(item => item.type === "experience").sort((a, b) => new Date(b.year.split(' ')[1] || b.year).getTime() - new Date(a.year.split(' ')[1] || a.year).getTime());

  const mergedTimelineItems: TimelineItem[] = [
    { type: "title", text: "Education", delay: 100 },
    ...educationItems,
    { type: "title", text: "Experience", delay: educationItems.length * 150 + 200 },
    ...experienceItems,
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="w-full space-y-12">
          <div className="relative inline-block text-center mx-auto">
            <TypingTitle 
              text="Professional Journey" // Reformulated title
              speed={80}
              delay={1000} // Consistent delay for section titles
              className="text-4xl lg:text-5xl font-bold text-balance text-white font-mono" // Decreased font size
            />
            {/* Epic animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-md animate-pulse" />
          </div>

          <div className="relative mt-12">
            {/* Main Timeline Line with Glowing Orb */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-blue-500/50 to-cyan-500/20 shadow-lg shadow-purple-500/20 animate-pulse" />

            {mergedTimelineItems.map((item, index) => {
              if (item.type === "title") {
                return (
                  <div key={item.text} className="relative flex justify-center py-4 z-10"
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    <h2 className="text-2xl font-bold text-center text-white px-4 bg-black rounded-lg shadow-lg border border-purple-500/30">
                      {item.text}
                    </h2>
                    {/* Removed Glowing Timeline Dot for title */}
                  </div>
                )
              }

              const entry = item as TimelineEntry; // Type assertion for non-title items
              return (
                <div key={`${entry.degree}-${index}`} className="relative flex flex-col md:flex-row justify-between items-center md:items-stretch py-4"
                  style={{ animationDelay: `${index * 150 + 200}ms` }}
                >
                  {/* Content Wrapper for each item - centers around the timeline */}
                  <div className="flex flex-col md:flex-row items-center md:items-stretch w-full text-left">

                    {/* Left Section: Diploma and Institution */}
                    <div className="flex-1 text-center md:text-left pr-0 md:pr-16 order-1 md:order-1 mb-4 md:mb-0">
                      <h3 className="text-lg font-bold text-white">{entry.degree}</h3>
                      <p className="text-gray-400 text-xs">{entry.institution}</p>
                    </div>

                    {/* Center Section: Year and Glowing Dot (acts as the timeline point) */}
                    <div className="relative w-24 flex-shrink-0 flex justify-center items-center order-2 md:order-2">
                      {/* Year on the timeline */}
                      <span className="text-sm font-bold text-gray-300 font-mono tracking-wider z-10 text-center">
                        {entry.year.includes(' ') ? (
                          <>{entry.year.split(' ')[0]}<br/>{entry.year.split(' ')[1]}</>
                        ) : (
                          entry.year
                        )}
                      </span>
                      {/* Removed Glowing Timeline Dot - positioned over the line, behind the year text */}
                  </div>

                    {/* Right Section: Description */}
                    <div className="flex-1 text-center md:text-left pl-0 md:pl-16 order-3 md:order-3 mt-4 md:mt-0">
                      <p className="text-gray-500 text-pretty text-xs">{entry.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


