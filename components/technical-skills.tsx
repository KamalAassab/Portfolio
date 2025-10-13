"use client"

import * as React from "react"
import ReactDOM from "react-dom"
import { TypingTitle } from "@/components/typing-title"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Star,
  Zap,
  Sparkles,
  TrendingUp,
  Award,
  Target
} from "lucide-react"

// Professional Icons for Skills
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M8.851 18.56c-.701 0-1.4-.025-2.1-.075-1.1-.1-2.2-.25-3.3-.45-.1-.025-.15-.1-.15-.2v-1.5c0-.1.05-.15.15-.15 1.1.2 2.2.35 3.3.45.7.05 1.4.075 2.1.075.1 0 .15.05.15.15v1.5c0 .1-.05.15-.15.15zm-5.1-3.5c-.1 0-.15-.05-.15-.15v-1.5c0-.1.05-.15.15-.15 1.1.2 2.2.35 3.3.45.7.05 1.4.075 2.1.075.1 0 .15.05.15.15v1.5c0 .1-.05.15-.15-.15-.7 0-1.4-.025-2.1-.075-1.1-.1-2.2-.25-3.3-.45zm8.1-1.5c-.1 0-.15-.05-.15-.15v-1.5c0-.1.05-.15.15-.15 1.1.2 2.2.35 3.3.45.7.05 1.4.075 2.1.075.1 0 .15.05.15.15v1.5c0 .1-.05.15-.15.15-.7 0-1.4-.025-2.1-.075-1.1-.1-2.2-.25-3.3-.45z"/>
  </svg>
)

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
)

const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.072-.091a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.484.484 0 0 1 .233-.296c.096-.05.13-.054.5-.054.347 0 .408.005.485.047z"/>
  </svg>
)

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
)

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
)

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.218-.091-.423-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
  </svg>
)

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.504 0C5.64 0 .004 5.636.004 12.5S5.64 25 12.504 25 25 19.364 25 12.5 19.364 0 12.504 0zm0 1.5c5.798 0 10.5 4.702 10.5 10.5S18.302 22.5 12.504 22.5 2.004 17.798 2.004 12.5 6.706 1.5 12.504 1.5zM8.5 6.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-7 3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/>
  </svg>
)

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const CanvaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
  </svg>
)

const UMLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

// Skill Categories - Vibrant & Dynamic Design
const languageSkills = [
  { 
    name: "Moroccan Arabic", 
    level: "Native", 
    icon: Globe, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500", 
    borderColor: "border-emerald-400/50",
    glowColor: "shadow-emerald-500/50",
    accentColor: "from-emerald-400 to-teal-400"
  },
  { 
    name: "English", 
    level: "Professional", 
    icon: Globe, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500", 
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    accentColor: "from-blue-400 to-indigo-400"
  },
  { 
    name: "Arabic", 
    level: "Native", 
    icon: Globe, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500", 
    borderColor: "border-amber-400/50",
    glowColor: "shadow-amber-500/50",
    accentColor: "from-amber-400 to-orange-400"
  },
  { 
    name: "French", 
    level: "Professional", 
    icon: Globe, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500", 
    borderColor: "border-purple-400/50",
    glowColor: "shadow-purple-500/50",
    accentColor: "from-purple-400 to-pink-400"
  },
  { 
    name: "Tamazight", 
    level: "Elementary", 
    icon: Globe, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500", 
    borderColor: "border-cyan-400/50",
    glowColor: "shadow-cyan-500/50",
    accentColor: "from-cyan-400 to-blue-400"
  }
]

const programmingSkills = [
  { 
    name: "Java/JEE", 
    icon: JavaIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500", 
    borderColor: "border-orange-400/50",
    glowColor: "shadow-orange-500/50",
    accentColor: "from-orange-400 to-red-400"
  },
  { 
    name: "SQL", 
    icon: Database, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500", 
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    accentColor: "from-blue-400 to-cyan-400"
  },
  { 
    name: "HTML/CSS", 
    icon: Code, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500", 
    borderColor: "border-pink-400/50",
    glowColor: "shadow-pink-500/50",
    accentColor: "from-pink-400 to-rose-400"
  },
  { 
    name: "JavaScript", 
    icon: JavaScriptIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500", 
    borderColor: "border-yellow-400/50",
    glowColor: "shadow-yellow-500/50",
    accentColor: "from-yellow-400 to-amber-400"
  },
  { 
    name: "PHP", 
    icon: Code, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500", 
    borderColor: "border-indigo-400/50",
    glowColor: "shadow-indigo-500/50",
    accentColor: "from-indigo-400 to-purple-400"
  }
]

const frameworkSkills = [
  { 
    name: "ReactJS", 
    icon: ReactIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500", 
    borderColor: "border-cyan-400/50",
    glowColor: "shadow-cyan-500/50",
    accentColor: "from-cyan-400 to-blue-400",
    website: "https://react.dev"
  },
  { 
    name: "Next.js", 
    icon: NextIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800", 
    borderColor: "border-gray-400/50",
    glowColor: "shadow-gray-500/50",
    accentColor: "from-gray-400 to-gray-500",
    website: "https://nextjs.org"
  },
  { 
    name: "TailwindCSS", 
    icon: TailwindIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500", 
    borderColor: "border-teal-400/50",
    glowColor: "shadow-teal-500/50",
    accentColor: "from-teal-400 to-cyan-400",
    website: "https://tailwindcss.com"
  },
  { 
    name: "Bootstrap", 
    icon: Code, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500", 
    borderColor: "border-purple-400/50",
    glowColor: "shadow-purple-500/50",
    accentColor: "from-purple-400 to-violet-400",
    website: "https://getbootstrap.com"
  },
  { 
    name: "shadcn/ui", 
    icon: Sparkles, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500", 
    borderColor: "border-emerald-400/50",
    glowColor: "shadow-emerald-500/50",
    accentColor: "from-emerald-400 to-green-400",
    website: "https://ui.shadcn.com"
  },
  { 
    name: "TypeScript", 
    icon: TypeScriptIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500", 
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    accentColor: "from-blue-400 to-indigo-400",
    website: "https://www.typescriptlang.org"
  }
]

const toolSkills = [
  { 
    name: "Linux", 
    icon: LinuxIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500", 
    borderColor: "border-yellow-400/50",
    glowColor: "shadow-yellow-500/50",
    accentColor: "from-yellow-400 to-orange-400"
  },
  { 
    name: "Matlab", 
    icon: TrendingUp, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500", 
    borderColor: "border-orange-400/50",
    glowColor: "shadow-orange-500/50",
    accentColor: "from-orange-400 to-red-400"
  },
  { 
    name: "Git/Version Control", 
    icon: GitIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-red-500 via-pink-500 to-rose-500", 
    borderColor: "border-red-400/50",
    glowColor: "shadow-red-500/50",
    accentColor: "from-red-400 to-pink-400"
  },
  { 
    name: "GitHub", 
    icon: GitHubIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800", 
    borderColor: "border-gray-400/50",
    glowColor: "shadow-gray-500/50",
    accentColor: "from-gray-400 to-gray-500"
  },
  { 
    name: "IoT (Arduino)", 
    icon: Zap, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500", 
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    accentColor: "from-blue-400 to-cyan-400"
  },
  { 
    name: "Business Intelligence", 
    icon: Target, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500", 
    borderColor: "border-green-400/50",
    glowColor: "shadow-green-500/50",
    accentColor: "from-green-400 to-emerald-400"
  },
  { 
    name: "Microsoft Office", 
    icon: Award, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500", 
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    accentColor: "from-blue-400 to-indigo-400"
  },
  { 
    name: "Adobe Suite", 
    icon: Sparkles, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500", 
    borderColor: "border-pink-400/50",
    glowColor: "shadow-pink-500/50",
    accentColor: "from-pink-400 to-rose-400"
  },
  { 
    name: "Canva", 
    icon: CanvaIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500", 
    borderColor: "border-purple-400/50",
    glowColor: "shadow-purple-500/50",
    accentColor: "from-purple-400 to-violet-400"
  },
  { 
    name: "VSCode", 
    icon: VSCodeIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500", 
    borderColor: "border-blue-400/50",
    glowColor: "shadow-blue-500/50",
    accentColor: "from-blue-400 to-cyan-400"
  },
  { 
    name: "UML/MERISE", 
    icon: UMLIcon, 
    color: "text-white", 
    bgColor: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500", 
    borderColor: "border-indigo-400/50",
    glowColor: "shadow-indigo-500/50",
    accentColor: "from-indigo-400 to-purple-400"
  }
]

interface SkillItemProps {
  skill: {
    name: string
    level?: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    bgColor: string
    borderColor: string
  }
}

type Skill = {
  name: string
  level?: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  borderColor: string
  glowColor: string
  accentColor: string
  website?: string
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const IconComponent = skill.icon
  
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 group">
      <div className={`
        p-1.5 rounded-md transition-all duration-200 group-hover:scale-110
        ${skill.bgColor} ${skill.borderColor} border
      `}>
        <IconComponent className={`w-3 h-3 ${skill.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-sm text-white font-medium group-hover:text-opacity-90 transition-colors duration-200">
          {skill.name}
        </span>
        {skill.level && (
          <Badge className={`
            ml-2 text-xs px-1.5 py-0.5
            ${skill.color} ${skill.bgColor} ${skill.borderColor} border
          `}>
            {skill.level}
          </Badge>
        )}
      </div>
    </div>
  )
}

interface SkillCategoryProps {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: Skill[]
  color: string
  index: number
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: IconComponent, skills, color, index }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const handleCardClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const modalContent = isModalOpen && (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-8 animate-fade-in bg-black/80 backdrop-blur-2xl"
      onClick={handleCloseModal}
    >
      {/* Epic Space Backdrop Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive floating stars */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.8
            }}
          />
        ))}
        
        {/* Epic nebula clouds */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '6s' }} />
        <div className={`absolute bottom-1/3 right-1/4 w-[500px] h-[500px] ${color.replace('text-', 'bg-').replace('-400', '-500/8')} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
      </div>

      {/* Professional Modal Card */}
      <Card 
        className={`relative border-2 ${color.replace('text-', 'border-').replace('-400', '-500/30')} rounded-2xl p-8 shadow-xl max-w-5xl w-full max-h-[80vh] overflow-hidden animate-scale-in group bg-gray-900/95 backdrop-blur-xl z-10`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle gradient overlay */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.replace('text-', 'from-').replace('-400', '-500/8')} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        
        {/* Corner frames */}
        <div className={`absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        <div className={`absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        <div className={`absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        {/* Close Button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-all duration-300 z-20 p-2 rounded-lg hover:bg-gray-800/80 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <div className={`
            relative p-4 rounded-xl transition-all duration-500
            ${color.replace('text-', 'bg-').replace('-400', '-500/20')} ${color.replace('text-', 'border-').replace('-400', '-500/30')} border-2
          `}>
            {/* Subtle glow */}
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${color.replace('text-', 'bg-').replace('-400', '-500/20')} blur-lg`} />
            
            {/* Rotating ring */}
            <div className={`absolute inset-0 rounded-xl border-2 border-transparent ${color.replace('text-', 'border-t-').replace('-400', '-400/60')} opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500`} style={{ animationDuration: '3s' }} />
            
            <IconComponent className={`w-10 h-10 ${color} relative z-10`} />
          </div>

          <div className="flex-1">
            <h2 className={`text-3xl font-bold ${color} mb-2`}>
              {title}
            </h2>
            <p className="text-gray-400 text-sm">
              {skills.length} technologies and tools
            </p>
          </div>
        </div>

        {/* Clean Skills Grid - Single Line */}
        <div className="flex flex-wrap gap-3 relative z-10 justify-center">
          {skills.map((skill, skillIndex) => {
            const SkillWrapper = skill.website ? 'a' : 'div'
            const wrapperProps = skill.website ? {
              href: skill.website,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {}
            
            return (
              <SkillWrapper
                key={skill.name}
                {...wrapperProps}
                className="group/skill relative flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/40 backdrop-blur-sm cursor-pointer"
              >
                {/* Skill Icon */}
                <div className={`relative p-2 rounded-lg ${skill.bgColor} ${skill.borderColor} border-2`}>
                  <skill.icon className={`w-6 h-6 ${skill.color} relative z-10`} />
                </div>

                {/* Skill Name & Level */}
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-white whitespace-nowrap">
                    {skill.name}
                  </h4>
                  {skill.level && (
                    <div className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${skill.accentColor} text-white border border-white/20`}>
                      {skill.level}
                    </div>
                  )}
                  {skill.website && (
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
              </SkillWrapper>
            )
          })}
        </div>
      </Card>
    </div>
  )

  return (
    <>
      {/* Professional Category Card */}
      <Card
        className={`
          group relative overflow-hidden border-2 transition-all duration-500 
          hover:scale-105 hover:-translate-y-2
          bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90
          ${color.replace('text-', 'border-').replace('-400', '-500/40')} border
          backdrop-blur-xl
          animate-fade-up cursor-pointer
          hover:shadow-xl hover:${color.replace('text-', 'shadow-').replace('-400', '-500/50')}
          rounded-2xl
        `}
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={handleCardClick}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${color.replace('text-', 'from-').replace('-400', '-500/20')} via-transparent to-transparent`} />
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${color.replace('text-', 'bg-').replace('-400', '-500/10')} rounded-full blur-3xl`} />
        </div>

        {/* Corner Frames */}
        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
        <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${color.replace('text-', 'border-').replace('-400', '-400/50')} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

        <div className="relative p-6 text-center">
          {/* Professional Icon Container */}
          <div className="mb-4 flex justify-center">
            <div className={`
              relative p-4 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
              ${color.replace('text-', 'bg-').replace('-400', '-500/20')} ${color.replace('text-', 'border-').replace('-400', '-500/40')} border-2
              group-hover:shadow-xl group-hover:${color.replace('text-', 'shadow-').replace('-400', '-500/50')}
            `}>
              {/* Subtle glow */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${color.replace('text-', 'bg-').replace('-400', '-500/30')} blur-lg`} />

              {/* Rotating ring */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent ${color.replace('text-', 'border-t-').replace('-400', '-400/60')} opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500`} style={{ animationDuration: '2s' }} />

              {/* Main Icon */}
              <IconComponent className={`w-10 h-10 ${color} relative z-10 transition-all duration-500 group-hover:scale-110`} />

              {/* Corner particles */}
              <div className={`absolute -top-1 -right-1 w-2 h-2 ${color.replace('text-', 'bg-').replace('-400', '-400')} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500`} style={{ animationDelay: '0.1s' }} />
              <div className={`absolute -bottom-1 -left-1 w-2 h-2 ${color.replace('text-', 'bg-').replace('-400', '-400')} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500`} style={{ animationDelay: '0.2s' }} />
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-3">
            <h3 className={`text-lg font-bold text-white transition-all duration-500 group-hover:${color} group-hover:scale-105`}>
              {title}
            </h3>

            <div className="flex items-center justify-center gap-2">
              <div className={`h-px w-8 bg-gradient-to-r from-transparent ${color.replace('text-', 'to-').replace('-400', '-400')}`} />
              <p className={`text-xs ${color} font-medium`}>
                {skills.length} Skills
              </p>
              <div className={`h-px w-8 bg-gradient-to-l from-transparent ${color.replace('text-', 'to-').replace('-400', '-400')}`} />
            </div>

            {/* Click Me Notice */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className={`w-2 h-2 ${color.replace('text-', 'bg-').replace('-400', '-400')} rounded-full animate-pulse`} />
              <p className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
                Click to explore
              </p>
              <div className={`w-2 h-2 ${color.replace('text-', 'bg-').replace('-400', '-400')} rounded-full animate-pulse`} style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </Card>

      {/* Render modal using Portal to document body */}
      {mounted && modalContent && ReactDOM.createPortal(modalContent, document.body)}
    </>
  )
}

export function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Epic Space Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Massive animated nebulas */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" style={{ animationDuration: '10s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" style={{ animationDuration: '12s' }} />
        
        {/* Floating stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Shooting stars */}
        <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Epic Section Header */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <TypingTitle 
                text="Technical Arsenal" 
                speed={80}
                delay={1000}
              />
              {/* Epic animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-md animate-pulse" />
            </div>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
              Explore my technical expertise across languages, frameworks, and tools
            </p>
          </div>

          {/* Section Notice */}
          <div className="text-center mb-8 animate-fade-up animation-delay-500">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <p className="text-sm font-medium text-gray-300">
                <span className="text-blue-400 font-bold">Click on any card</span> to explore the technologies
              </p>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>

          {/* Skills Grid - 4 Cards in One Line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up animation-delay-600">
            <SkillCategory
              title="Languages"
              icon={Globe}
              skills={languageSkills}
              color="text-emerald-400"
              index={0}
            />
            
            <SkillCategory
              title="Programming"
              icon={Code}
              skills={programmingSkills}
              color="text-blue-400"
              index={1}
            />
            
            <SkillCategory
              title="Frameworks"
              icon={Sparkles}
              skills={frameworkSkills}
              color="text-purple-400"
              index={2}
            />
            
            <SkillCategory
              title="Tools"
              icon={Wrench}
              skills={toolSkills}
              color="text-orange-400"
              index={3}
            />
          </div>

          {/* Epic Bottom Decoration */}
          <div className="flex justify-center items-center gap-6 animate-fade-up animation-delay-800">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="relative">
              <Star className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 border-2 border-cyan-400/30 rounded-full animate-ping" />
            </div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}