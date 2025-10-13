"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { TypingTitle } from "@/components/typing-title"
import ScrollReveal from "@/components/ScrollReveal"
import CountUp from "@/components/count-up"


const metrics = [
  { 
    label: "Coffee Cups Consumed", 
    value: 1312, 
    suffix: "+", 
    icon: "coffee",
    description: "Each cup represents a problem solved",
    color: "from-amber-500 to-orange-500"
  },
  { 
    label: "Bugs Transformed to Features", 
    value: 2387, 
    suffix: "+", 
    icon: "butterfly",
    description: "Turning unexpected behavior into innovation",
    color: "from-purple-500 to-pink-500"
  },
  { 
    label: "Architecture Patterns Mastered", 
    value: 578, 
    suffix: "+", 
    icon: "architecture",
    description: "Building scalable solutions from the ground up",
    color: "from-blue-500 to-indigo-500"
  },
]

export function About() {

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 animate-fade-up">
            <div className="relative inline-block">
              <TypingTitle 
                text="About Me" 
                speed={80}
                delay={1000} // Consistent delay for section titles
              />
              {/* Epic animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-md animate-pulse" />
            </div>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={3}
              blurStrength={6}
              containerClassName="text-lg text-gray-200 text-pretty leading-loose"
              textClassName="text-lg text-gray-200 text-pretty leading-loose"
            >
              Hello there! I'm Kamal, born and raised in Taroudant, a warm and historic city in the south of Morocco where tradition meets simplicity. Growing up surrounded by creativity and curiosity, I discovered my deep passion for technology at the age of fifteen. I was fascinated by how computers worked, how websites came to life, and what really happens behind the scenes of the digital world. That curiosity soon turned into a calling, leading me to study web development and explore the endless possibilities of digital innovation. Today, I find joy in crafting interactive, responsive, and visually engaging web experiences, blending art and engineering to create something meaningful. I love experimenting with animations, UI/UX design, full-stack projects, and AI-driven features, always chasing that perfect balance between creativity and functionality. Outside the screen, I'm someone who finds inspiration in music, hiking, and entrepreneurship. I also enjoy swimming and home decoration, both reminding me that design, whether digital or physical, is all about harmony and emotion. For me, web development is more than just writing code; it's about building experiences that inspire, connect, and make people's lives better.
            </ScrollReveal>
            
            {/* Highlighted Quote - Interactive Space Theme */}
            <div className="mt-8 relative group cursor-pointer w-full">
              {/* Animated Starfield Background */}
              <div className="absolute inset-0 overflow-hidden rounded-xl opacity-40 pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-yellow-300 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-yellow-400"
                    style={{
                      width: `${1 + Math.random() * 2}px`,
                      height: `${1 + Math.random() * 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 3}s`,
                      animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'
                    }}
                  />
                ))}
              </div>
              
              {/* Quote Container with 3D Effect */}
              <div className="relative p-8 bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-slate-900/90 backdrop-blur-md border-2 border-yellow-400/40 rounded-xl shadow-2xl shadow-yellow-400/20 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-yellow-400/40 group-hover:border-yellow-400/60">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"></div>
                
                {/* Orbiting Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={`orbit-${i}`}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        left: '50%',
                        top: '50%',
                        animation: `orbit ${3 + i}s linear infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Quote Content */}
                <div className="relative flex items-center justify-center gap-3 w-full">
                  <span className="text-4xl text-yellow-400/30 font-serif leading-none select-none transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">"</span>
                  <p className="text-yellow-400 font-bold italic text-sm whitespace-nowrap text-center transition-all duration-300 group-hover:text-yellow-300 group-hover:tracking-wide flex-shrink-0" style={{ textShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}>
                    it's about building experiences that inspire, connect, and make people's lives better.
                  </p>
                  <span className="text-4xl text-yellow-400/30 font-serif leading-none select-none transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110 group-hover:-rotate-12 flex-shrink-0">"</span>
                </div>
                
                {/* Shooting Stars on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-400/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
              </div>
            </div>
          </div>

          {/* Unique Developer Metrics - Professional Space Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative cursor-pointer h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Orbiting Stars */}
                <div className="absolute inset-0 overflow-visible pointer-events-none">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={`orbit-${i}`}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        left: '50%',
                        top: '50%',
                        animation: `orbit ${4 + i}s linear infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>

                {/* Card Container - Fixed Height */}
                <div className="relative h-72 p-6 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-cyan-500/30 group-hover:border-cyan-400/40">
                  
                  {/* Animated Space Grid Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                      animation: 'gridScroll 20s linear infinite'
                    }}></div>
                  </div>

                  {/* Glowing Orb Effect */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${metric.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-between">
                    {/* Custom Space Icon */}
                    <div className="relative">
                      <div className="relative w-16 h-16">
                        {/* Icon Orbital Ring */}
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                        <div className="absolute inset-2 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                        
                        {/* Icon Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-125 group-hover:rotate-180`}>
                            {metric.icon === "coffee" && (
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            )}
                            {metric.icon === "butterfly" && (
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            )}
                            {metric.icon === "architecture" && (
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Counter with Hologram Effect */}
                    <div className="relative">
                      <div className="text-4xl font-black tracking-tight">
                        <CountUp
                          to={metric.value}
                          from={0}
                          duration={1.2}
                          delay={index * 0.1}
                          separator=","
                          className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                        />
                        <span className="text-cyan-400 ml-1">{metric.suffix}</span>
                      </div>
                      {/* Hologram Lines */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
                      </div>
          </div>

                    {/* Label */}
                    <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-widest text-center leading-tight transition-all duration-300 group-hover:text-cyan-200">
                      {metric.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[10px] text-gray-500 text-center leading-snug transition-colors duration-300 group-hover:text-gray-400 px-2">
                      {metric.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Corner Tech Accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </section>
  )
}
