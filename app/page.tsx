"use client";

import { useState } from "react";
import { Hero1 } from "@/components/ui/hero-1";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ElectricBorder } from "@/components/ui/electric-border";
import { CursorGrid } from "@/components/ui/cursor-grid";
import { TiltedCard } from "@/components/ui/tilted-card";
import { MagicBento } from "@/components/ui/magic-bento";
import { AccordionGallery } from "@/components/ui/accordion-gallery";
import { Home as HomeIcon, User, Code2, FolderGit2, Award, Sparkles, Mail, ExternalLink, Briefcase, GraduationCap, Languages, Globe, MessageSquare, BookOpen, Trophy, Activity, Gamepad2, Phone, Send, Video } from "lucide-react";
import { SkillIcon } from "@/components/ui/skill-icons";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GlassIcons, GlassIconsItem } from "@/components/ui/glass-icons";
import { SpecularButton } from "@/components/ui/specular-button";
import { DecayCard } from "@/components/ui/decay-card";
import { DomeGallery } from "@/components/ui/dome-gallery";
import DriftWall from "@/components/ui/drift-wall";

const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const navItems = [
  { id: "home", icon: <HomeIcon />, label: "Home", href: "#home" },
  { id: "about", icon: <User />, label: "About", href: "#about" },
  { id: "skills", icon: <Code2 />, label: "Skills", href: "#skills" },
  { id: "projects", icon: <FolderGit2 />, label: "Projects", href: "#projects" },
  { id: "co-curricular", icon: <Award />, label: "Co Curricular", href: "#co-curricular" },
  { id: "additional-skills", icon: <Sparkles />, label: "Additional Skills", href: "#additional-skills" },
  { id: "contact", icon: <Mail />, label: "Contact", href: "#contact" },
];

const accordionCoCurricularItems = [
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    label: "Flutter & Dart Mobile Apps — IBM Coursera",
    alt: "Flutter and Dart Mobile Apps IBM Certification",
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    label: "Retrieval Augmented Generation (RAG) — DeepLearning.AI",
    alt: "RAG DeepLearning.AI Certification",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    label: "Foundations of Coding Back-End — Microsoft",
    alt: "Foundations of Coding Back-End Microsoft Certification",
  },
  {
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80",
    label: "Node.js & MongoDB Database Apps — IBM Coursera",
    alt: "Node.js and MongoDB IBM Certification",
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
    label: "Introduction to Software Engineering — IBM Coursera",
    alt: "Intro to Software Engineering IBM Certification",
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    label: "Develop Generative AI Applications — IBM Coursera",
    alt: "IBM GenAI Applications",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    label: "Backend Dev: Node.js & REST APIs — Board Infinity",
    alt: "Board Infinity Backend",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    label: "Duolingo English Test (DET) — Score: 115/160",
    alt: "Duolingo English Test",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    label: "Merit Scholarship (2024–2028) — NTU Faisalabad",
    alt: "NTU Merit Scholarship",
  },
  {
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1000&q=80",
    label: "Brilliant Student Award — Punjab College",
    alt: "Punjab College Award",
  },
  {
    image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1000&q=80",
    label: "3x 1st Naat & 8x Class Merit Awards",
    alt: "Naat Competitions",
  },
];

const coCurricularItems = [
  {
    title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
    subtitle: "IBM | Coursera",
    date: "Earned: July 2026",
    badge: "IBM Professional Cert",
    category: "Mobile Development",
    description: "Architecting cross-platform mobile apps for iOS & Android with Flutter widgets and Dart async state management.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Retrieval Augmented Generation (RAG)",
    subtitle: "DeepLearning.AI | Coursera",
    date: "Earned: July 2026",
    badge: "DeepLearning.AI Cert",
    category: "Generative AI & LLMs",
    description: "Building production RAG pipelines, vector embedding retrieval, chunking strategies, and LLM prompt grounding.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Foundations of Coding Back-End",
    subtitle: "Microsoft | Coursera",
    date: "Earned: July 2026",
    badge: "Microsoft Professional Cert",
    category: "Backend Engineering",
    description: "Core backend architecture, cloud service integration, server-side data processing, and enterprise API design.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Node.js & MongoDB: Developing Back-end Database Applications",
    subtitle: "IBM | Coursera",
    date: "Earned: July 2026",
    badge: "IBM Database Cert",
    category: "Databases & Node.js",
    description: "Full backend database application development using Express, Mongoose ORM, MongoDB aggregation, and async I/O.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Introduction to Software Engineering",
    subtitle: "IBM | Coursera",
    date: "Earned: July 2026",
    badge: "IBM Foundation Cert",
    category: "Software Lifecycle",
    description: "SDLC principles, Agile methodologies, version control workflows, design patterns, and software architecture.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Duolingo English Test (DET)",
    subtitle: "Duolingo Official Certification",
    badge: "Overall Score: 115 / 160",
    category: "Language Proficiency",
    description: "Certified proficiency in reading, writing, listening, and speaking for global technical communication.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Develop Generative AI Applications",
    subtitle: "IBM | Coursera",
    date: "Earned: July 2026",
    badge: "IBM Professional Cert",
    category: "Generative AI",
    description: "Hands-on foundation in LLMs, Prompt Engineering, Agentic Workflows, and GenAI application development.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Backend Development: Node.js & REST APIs",
    subtitle: "Board Infinity | Coursera",
    date: "Earned: July 2026",
    badge: "Full-Stack Backend",
    category: "REST APIs & Databases",
    description: "Mastered RESTful API design, Express middleware architecture, MongoDB schema modeling, and production server setup.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Merit Scholarship (2024 – 2028)",
    subtitle: "National Textile University, Faisalabad",
    badge: "4-Year Merit Award",
    category: "Honors & Awards",
    description: "Awarded Merit Scholarship & Certificate of Excellence based on top academic performance in BS Software Engineering.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Brilliant Student Award (2022)",
    subtitle: "Punjab College, Faisalabad",
    badge: "Excellence Distinction",
    category: "Academic Distinction",
    description: "Certificate of excellence for securing top academic distinction as 'Brilliant Student'.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Naat & Class Merit Competitions",
    subtitle: "School & University Level",
    badge: "3x 1st Pos & 8x Top 3",
    category: "Co-Curricular Excellence",
    description: "Secured 3 First Position certificates in Naat Competitions and 8 Merit Certificates for top 3 academic positions in class.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
  },
];

/* Social Media GlassIcons Configuration - PASTE YOUR PROFILE LINKS HERE */
const contactGlassItems: GlassIconsItem[] = [
  {
    icon: <LinkedinIcon className="w-7 h-7 text-white drop-shadow-md" />,
    color: "blue",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-usman-ilyas-24b20b354", // <-- EDIT YOUR LINKEDIN URL HERE
  },
  {
    icon: <FolderGit2 className="w-7 h-7 text-white stroke-[2.5] drop-shadow-md" />,
    color: "purple",
    label: "GitHub",
    href: "https://github.com/Usman-Ilyas-11", // <-- EDIT YOUR GITHUB URL HERE
  },
  {
    icon: <Phone className="w-7 h-7 text-white stroke-[2.5] drop-shadow-md" />,
    color: "green",
    label: "WhatsApp",
    href: "https://wa.me/+923348829555", // <-- EDIT YOUR WHATSAPP NUMBER LINK HERE
  },
  {
    icon: <Mail className="w-7 h-7 text-white stroke-[2.5] drop-shadow-md" />,
    color: "red",
    label: "Gmail",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=new", // <-- EDIT YOUR GMAIL LINK HERE
  },
];

const bentoExperienceCards = [
  {
    title: "AI Intern",
    company: "NETIXSOL Pvt Ltd",
    date: "July 2026 – Sep 2026",
    description: "Hands-on training and software implementation in Data Science, Artificial Intelligence, Agentic AI, and Machine Learning algorithms.",
    label: "AI & ML Internship",
    bullets: [
      "Built end-to-end data processing pipelines using Python, NumPy, and Pandas for detailed data cleaning, manipulation, and exploratory analysis.",
      "Developed and validated robust Machine Learning models utilizing bagging, boosting, cross-validation, and automated preprocessing workflows.",
      "Designed and deployed multi-agent systems and AFL chatbots leveraging LangChain, LangGraph, and CrewAI frameworks for Agentic AI workflows.",
      "Integrated intelligent ML models and autonomous AI agent architectures into functional software implementations.",
    ],
  },
  {
    title: "Teaching Assistant / ICT Intern",
    company: "National Textile University",
    date: "Sep 2025 – Jan 2026",
    description: "Assisted faculty in conducting programming & ICT lab sessions. Guided students in debugging assignments, software engineering concepts, databases, and networking tools.",
    label: "Academic Leadership",
    bullets: [
      "Assisted faculty in conducting programming & ICT lab sessions.",
      "Guided students in debugging assignments & software engineering concepts.",
      "Supported practical demonstrations in databases & networking tools.",
      "Prepared instructional materials & evaluated student lab work.",
    ],
  },
  {
    title: "Desktop Application Developer (POS)",
    company: "National Textile University, Faisalabad",
    date: "June 2025 – Sep 2025",
    description: "Engineered a production-ready Point of Sale (POS) desktop application featuring integrated database & inventory management.",
    label: "POS System Project",
  },
  {
    title: "Freelance Software Developer",
    company: "Self-Employed (Remote)",
    date: "Sep 2024 – Present",
    description: "Delivering custom desktop software, database architectures, and full-stack web applications for global clients.",
    label: "Freelance Remote",
  },
  {
    title: "Academic Standing (CGPA: 3.98/4.00)",
    company: "Software Engineering Student",
    date: "Top Distinction",
    description: "High academic honors with strong foundation in OOP, DSA, SDLC, Agile methodologies, and Git version control.",
    label: "Academic Honors",
  },
  {
    title: "Engineering Tech Stack",
    company: "Production Systems",
    date: "C#, Java, C++, Python, SQL",
    description: "Proficient across multi-paradigm languages, database query engines, desktop GUI frameworks, and modern web architectures.",
    label: "Technical Stack",
  },
];

const skillItems = [
  // Programming Languages (Front & Core Priority)
  { id: 1, name: "Python", category: "Programming Languages", color: "#ef4444" },
  { id: 2, name: "C++", category: "Programming Languages", color: "#3b82f6" },
  { id: 3, name: "C#", category: "Programming Languages", color: "#a855f7" },
  { id: 4, name: "Java", category: "Programming Languages", color: "#eab308" },
  { id: 5, name: "SQL", category: "Programming Languages", color: "#f97316" },

  // Mobile & Web Stack (Featured Core Tech)
  { id: 6, name: "Flutter", category: "Mobile Stack", color: "#0284c7" },
  { id: 7, name: "Dart", category: "Mobile Stack", color: "#0284c7" },
  { id: 8, name: "TypeScript", category: "Web Stack", color: "#3b82f6" },
  { id: 9, name: "React", category: "Web Stack", color: "#06b6d4" },
  { id: 10, name: "Next.js", category: "Web Stack", color: "#06b6d4" },
  { id: 11, name: "Tailwind CSS", category: "Web Stack", color: "#06b6d4" },

  // Backend Technologies
  { id: 12, name: "Node.js", category: "Backend Technologies", color: "#22c55e" },
  { id: 13, name: "Express.js", category: "Backend Technologies", color: "#22c55e" },
  { id: 14, name: "REST APIs", category: "Backend Technologies", color: "#22c55e" },

  // Databases
  { id: 15, name: "SQL Server", category: "Databases", color: "#10b981" },
  { id: 16, name: "MySQL", category: "Databases", color: "#10b981" },
  { id: 17, name: "MongoDB", category: "Databases", color: "#10b981" },

  // Software Development
  { id: 18, name: "Object-Oriented Programming (OOP)", category: "Software Development", color: "#ef4444" },
  { id: 19, name: "Data Structures & Algorithms (DSA)", category: "Software Development", color: "#ef4444" },
  { id: 20, name: "Software Development Life Cycle (SDLC)", category: "Software Development", color: "#ef4444" },
  { id: 21, name: "Agile Methodologies", category: "Software Development", color: "#ef4444" },
  { id: 22, name: "Database Design & Data Modelling", category: "Software Development", color: "#ef4444" },

  // Tools & Technologies
  { id: 23, name: "Git", category: "Tools & Technologies", color: "#f97316" },
  { id: 24, name: "GitHub", category: "Tools & Technologies", color: "#f97316" },
  { id: 25, name: "Visual Studio", category: "Tools & Technologies", color: "#f97316" },
  { id: 26, name: "Visual Studio Code", category: "Tools & Technologies", color: "#f97316" },
  { id: 27, name: "Microsoft Excel", category: "Tools & Technologies", color: "#f97316" },
  { id: 28, name: "RStudio", category: "Tools & Technologies", color: "#f97316" },
  { id: 29, name: "Wireshark", category: "Tools & Technologies", color: "#f97316" },
  { id: 30, name: "Cisco Packet Tracer", category: "Tools & Technologies", color: "#f97316" },

  // Core Concepts & AI
  { id: 31, name: "Artificial Intelligence", category: "Core Concepts", color: "#a855f7" },
  { id: 32, name: "Machine Learning", category: "Core Concepts", color: "#a855f7" },
  { id: 33, name: "Agentic AI Automation", category: "Core Concepts", color: "#a855f7" },
  { id: 34, name: "Authentication", category: "Core Concepts", color: "#6366f1" },
  { id: 35, name: "CRUD Operations", category: "Core Concepts", color: "#6366f1" },
  { id: 36, name: "Database Normalization", category: "Core Concepts", color: "#6366f1" },
];

const driftWallItems = [
  // Programming Languages
  { image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80", title: "Python", category: "Language", tag: "AI & Scripting" },
  { image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&q=80", title: "C++", category: "Language", tag: "System Performance" },
  { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", title: "C#", category: "Language", tag: "OOP & .NET" },
  { image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80", title: "Java", category: "Language", tag: "Enterprise Core" },
  { image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80", title: "SQL", category: "Language", tag: "Data Queries" },

  // Mobile & Web Stack
  { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80", title: "Flutter", category: "Mobile Stack", tag: "Cross-Platform" },
  { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", title: "Dart", category: "Mobile Stack", tag: "UI Framework" },
  { image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80", title: "TypeScript", category: "Web Stack", tag: "Type-Safe Systems" },
  { image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80", title: "React 19", category: "Web Stack", tag: "Frontend UI" },
  { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", title: "Next.js 16", category: "Web Stack", tag: "Full-Stack SSR" },
  { image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80", title: "Tailwind CSS", category: "Web Stack", tag: "Styling & UI" },

  // Backend & Databases
  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80", title: "Node.js", category: "Backend", tag: "Server Runtime" },
  { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", title: "Express.js", category: "Backend", tag: "API Framework" },
  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80", title: "REST APIs", category: "Backend", tag: "Web Services" },
  { image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80", title: "SQL Server", category: "Database", tag: "Enterprise RDBMS" },
  { image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80", title: "MySQL", category: "Database", tag: "Relational DB" },
  { image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80", title: "MongoDB", category: "Database", tag: "NoSQL Documents" },

  // Software Development Principles
  { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", title: "OOP", category: "Software Eng", tag: "Object-Oriented" },
  { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", title: "DSA", category: "Software Eng", tag: "Algorithms" },
  { image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80", title: "SDLC", category: "Software Eng", tag: "Lifecycle" },
  { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80", title: "Agile", category: "Software Eng", tag: "Scrum & Sprint" },
  { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", title: "Database Design", category: "Software Eng", tag: "Data Modelling" },

  // Tools & Technologies
  { image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=400&q=80", title: "Git", category: "Tools", tag: "Version Control" },
  { image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&q=80", title: "GitHub", category: "Tools", tag: "Repository & CI" },
  { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80", title: "Visual Studio", category: "Tools", tag: "IDE Environment" },
  { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80", title: "VS Code", category: "Tools", tag: "Code Editor" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80", title: "Microsoft Excel", category: "Tools", tag: "Data Analysis" },
  { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80", title: "RStudio", category: "Tools", tag: "Stats & Analytics" },
  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80", title: "Wireshark", category: "Tools", tag: "Network Analysis" },
  { image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80", title: "Packet Tracer", category: "Tools", tag: "Cisco Networking" },

  // AI & Core Concepts
  { image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=400&q=80", title: "Artificial Intelligence", category: "AI Stack", tag: "Neural Networks" },
  { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80", title: "Machine Learning", category: "AI Stack", tag: "Predictive Models" },
  { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", title: "Agentic AI", category: "AI Stack", tag: "Autonomous Agents" },
  { image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80", title: "Authentication", category: "Concepts", tag: "JWT & Security" },
  { image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=400&q=80", title: "CRUD Operations", category: "Concepts", tag: "Data Lifecycle" },
  { image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80", title: "Normalization", category: "Concepts", tag: "DB Optimization" },
];

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  bullets?: string[];
  description?: string;
  color: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  links?: {
    label: string;
    url: string;
    icon: string;
  }[];
}

const dummyProjects: ProjectItem[] = [
  {
    id: 1,
    title: "RealEstate Hub — Voice & Chat AI Agent",
    category: "Conversational & Voice AI",
    bullets: [
      "10-Node LangGraph state machine & Hybrid RAG (SQL + ChromaDB)",
      "Real-time UrduLish speech streaming with Deepgram STT & Fish Audio TTS",
      "Google Calendar scheduling, n8n workflow engine & 42-case eval suite",
    ],
    color: "#ef4444", // Vibrant Red
    tags: ["FastAPI", "LangGraph", "Hybrid RAG", "Deepgram", "Fish Audio"],
    githubUrl: "https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Capstone",
    liveUrl: "https://www.loom.com/share/b4d6c097a1ce46b187ae26189de03707",
    links: [
      {
        label: "Live Demo",
        url: "https://www.loom.com/share/b4d6c097a1ce46b187ae26189de03707",
        icon: "video",
      },
      {
        label: "Source Code",
        url: "https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Capstone",
        icon: "github",
      },
    ],
  },
  {
    id: 2,
    title: "Point of Sale (POS) & Inventory System",
    category: "Desktop Application",
    bullets: [
      "Production-ready desktop POS & inventory software deployed using C#",
      "Real-time inventory management, billing, sales, & secure user auth",
      "Lightweight MS Excel data persistence engine for database-free operation",
    ],
    color: "#3b82f6", // Electric Royal Blue
    tags: ["C#", "Desktop POS", "Inventory", "Excel Storage", "User Auth"],
    githubUrl: "https://github.com/Usman-Ilyas-11/POS-Inventory-System",
    liveUrl: "https://lnkd.in/p/d6_QZeT6",
    links: [
      {
        label: "Live Demo",
        url: "https://lnkd.in/p/d6_QZeT6",
        icon: "video",
      },
      {
        label: "Source Code",
        url: "https://github.com/Usman-Ilyas-11/POS-Inventory-System",
        icon: "github",
      },
    ],
  },
  {
    id: 3,
    title: "AFL Chat & Match Prediction Assistant",
    category: "Domain-Scoped AI Agent",
    bullets: [
      "LangGraph agent with 7 retrieval tools, Elo prediction model & Streamlit UI",
      "AFL factual Q&A, player/team stats, match predictions & multi-turn memory",
      "Domain guardrails, grounding verification layer, 32-case eval suite & rate limiter",
    ],
    color: "#059669", // Electric Emerald
    tags: ["LangGraph", "FastAPI", "Elo Model", "Guardrails", "Streamlit"],
    githubUrl: "https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Week-6/day5",
    liveUrl: "https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Week-6/day5",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Week-6/day5",
        icon: "github",
      },
    ],
  },
  {
    id: 4,
    title: "VFS Explorer — Virtual File System",
    category: "C++ Systems & Data Structures",
    bullets: [
      "Virtual File System CLI with N-ary tree directory hierarchy & persistence",
      "Trie-based autocomplete, DFS/BFS search, command history & bookmarks",
      "Custom Undo/Redo stack engine, expression tree evaluation & STL integration",
    ],
    color: "#a855f7", // Electric Purple
    tags: ["C++", "Data Structures", "N-ary Trees", "Tries", "STL"],
    githubUrl: "https://github.com/Usman-Ilyas-11/VFS-EXPLORER",
    liveUrl: "https://github.com/Usman-Ilyas-11/VFS-EXPLORER",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/Usman-Ilyas-11/VFS-EXPLORER",
        icon: "github",
      },
    ],
  },
  {
    id: 5,
    title: "Lost & Found Management System",
    category: "Desktop Application • C# & SQLite",
    bullets: [
      "Desktop app in C# WinForms & Guna UI for institutional item tracking",
      "Role-based access control (Admin & Student) for reporting & matching items",
      "SQLite database persistence with item status tracking (Pending, Returned)",
    ],
    color: "#f97316", // Electric Orange
    tags: ["C#", "WinForms", "Guna UI", "SQLite", "Desktop App"],
    githubUrl: "https://github.com/Usman-Ilyas-11/LOST-AND-FOUND",
    liveUrl: "https://github.com/Usman-Ilyas-11/LOST-AND-FOUND",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/Usman-Ilyas-11/LOST-AND-FOUND",
        icon: "github",
      },
    ],
  },
  {
    id: 6,
    title: "NAVI-CORE AI — Pathfinding & ML",
    category: "AI Pathfinding & Navigation",
    bullets: [
      "Pathfinding engine supporting BFS, DFS, A* Search & Maze Solver algorithms",
      "City navigation modeling & decision tree prediction with Scikit-learn",
      "Interactive Python Tkinter GUI with NetworkX graph & Matplotlib visualization",
    ],
    color: "#0284c7", // Electric Sky Blue
    tags: ["Python", "Pathfinding", "A* Search", "Scikit-Learn", "Tkinter"],
    githubUrl: "https://github.com/Usman-Ilyas-11/NAVI-CORE-AI",
    liveUrl: "https://github.com/Usman-Ilyas-11/NAVI-CORE-AI",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/Usman-Ilyas-11/NAVI-CORE-AI",
        icon: "github",
      },
    ],
  },
  {
    id: 7,
    title: "Premium Todo & Task Dashboard",
    category: "Mobile Application • Flutter & Dart",
    bullets: [
      "Cross-platform Flutter app with Material Design 3 & Provider state management",
      "SharedPreferences auth, persistent login & interactive statistics dashboard",
      "Task management suite featuring search, filter, completed & pending tracking",
    ],
    color: "#0284c7", // Electric Sky Blue
    tags: ["Flutter", "Dart", "Provider", "SharedPreferences", "Material 3"],
    githubUrl: "https://github.com/Usman-Ilyas-11/premium-todo-app-flutter",
    liveUrl: "https://lnkd.in/p/dkFDvrH6",
    links: [
      {
        label: "Live Demo",
        url: "https://lnkd.in/p/dkFDvrH6",
        icon: "video",
      },
      {
        label: "Source Code",
        url: "https://github.com/Usman-Ilyas-11/premium-todo-app-flutter",
        icon: "github",
      },
    ],
  },
  {
    id: 8,
    title: "Quiz System — Desktop Platform",
    category: "Desktop Application • C# & MySQL",
    bullets: [
      "C# WinForms desktop app for role-based quiz management (Admin & Student)",
      "Admin suite for subjects, question banks, quiz creation & result analytics",
      "MySQL backend integration with MaterialSkin & Guna UI modern controls",
    ],
    color: "#eab308", // Electric Gold
    tags: ["C#", "WinForms", "MySQL", "MaterialSkin", "Guna UI"],
    githubUrl: "https://github.com/ilyas-usman/Quiz-System",
    liveUrl: "https://github.com/ilyas-usman/Quiz-System",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/ilyas-usman/Quiz-System",
        icon: "github",
      },
    ],
  },
  {
    id: 9,
    title: "Smart Home Automation System",
    category: "IoT & Embedded Systems",
    bullets: [
      "Arduino-based multi-sensor smart home system with automated actuators",
      "Keypad gate access, ultrasonic garage door, IR fan & rain awning control",
      "DHT11 climate tracking, soil moisture auto-watering & I2C LCD display",
    ],
    color: "#10b981", // Electric Emerald
    tags: ["Arduino", "C/C++", "IoT", "Sensors", "Embedded Systems"],
    githubUrl: "https://github.com/ilyas-usman/Smart-Home",
    liveUrl: "https://github.com/ilyas-usman/Smart-Home",
    links: [
      {
        label: "Source Code",
        url: "https://github.com/ilyas-usman/Smart-Home",
        icon: "github",
      },
    ],
  },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectText = formData.subject || `Portfolio Contact from ${formData.name}`;
    const bodyText = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=musmanilyas.002@gmail.com&su=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    window.open(gmailUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white selection:bg-red-500 selection:text-white transition-colors duration-300">
      {/* Floating Header Navigation & Theme Toggle */}
      <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex items-center justify-center px-2 max-w-full pointer-events-none">
        <div className="flex items-center justify-center gap-2 sm:gap-3 max-w-full pointer-events-auto">
          <LimelightNav
            items={navItems}
            limelightClassName="bg-red-600 dark:bg-red-500 shadow-[0_30px_15px_rgba(239,68,68,0.6)]"
          />
          <ThemeToggle />
        </div>
      </header>

      {/* Home Section (React Bits Pro Hero 1) */}
      <section id="home" className="relative z-10 pt-8">
        <Hero1
          name="MUHAMMAD USMAN ILYAS"
          urduName="محمد عثمان الیاس"
          subscript="SOFTWARE ENGINEER"
          description="Software Engineer | AI/ML & Generative AI Specialist | Building Intelligent, Scalable & Production-Ready Solutions"
          ctaText="Download Resume"
          ctaHref="/RESUME.pdf"
          imageSrc="/pici.jpg?v=2"
          imageAlt="Muhammad Usman Ilyas"
        />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-20 max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-white/5 space-y-12">
        <div className="space-y-2 flex flex-col items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
              <User className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              About Me
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent pb-3 pt-1 leading-normal">
            Passionate Software Engineer
          </h2>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono font-semibold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-red-600 dark:text-red-400" />
                CGPA: 3.98 / 4.00
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">Software Engineering Student</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Summary</h3>
              <p className="text-slate-700 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
                Software Engineering student (CGPA: 3.98/4.00) skilled in C#, Java, C++, Python, SQL, OOP, DSA, SDLC, Agile, and Git, with hands-on experience building production-ready desktop, database, and AI software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Experience Section with MagicBento */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
              <Briefcase className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              Career Journey
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Professional Experience
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
            </p>
          </div>

          {/* React Bits MagicBento Grid */}
          <MagicBento
            cards={bentoExperienceCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={14}
            glowColor="239, 68, 68"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-20 max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-white/5 space-y-8">
        <div className="space-y-2 flex flex-col items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
              <Code2 className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              Interactive Skills Wall
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent pb-3 pt-1 leading-normal">
            Core Skills & Tech Stack
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-zinc-400 text-base">
            Explore core technology stacks, languages, and technical capabilities.
          </p>
        </div>

        {/* React Bits DriftWall 3D Component */}
        <div className="relative h-[600px] w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-900/90 dark:bg-zinc-950/90 overflow-hidden shadow-2xl">
          <DriftWall
            items={driftWallItems}
            columns={6}
            tileWidth={150}
            tileHeight={100}
            gap={14}
            radius={10}
            tilt={14}
            turn={-12}
            perspective={1100}
            depth={100}
            speed={36}
            direction="up"
            variance={0.45}
            parallax={0.5}
            lift={48}
            fade={0.55}
            dim={0.75}
            overlayColor="#060010"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-20 max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-white/5 space-y-8">
        <div className="space-y-2 flex flex-col items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
              <FolderGit2 className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              Featured Work
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent pb-3 pt-1 leading-normal">
            Projects Showcase
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-zinc-400 text-base">
            Explore a collection of key projects demonstrating end-to-end web architecture and visual creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {dummyProjects.map((project) => (
            <ElectricBorder
              key={project.id}
              color={project.color}
              speed={1}
              chaos={0}
              thickness={1.2}
              hoverThickness={3.2}
              borderRadius={20}
            >
              <div className="relative group overflow-hidden p-6 rounded-[20px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md space-y-4 h-full flex flex-col justify-between border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
                {/* CursorGrid interactive animation layer */}
                <CursorGrid
                  color={project.color}
                  cellSize={45}
                  radius={110}
                  falloff="smooth"
                  holdTime={350}
                  fadeDuration={700}
                  lineWidth={1.2}
                  maxOpacity={0.85}
                  fillOpacity={0.1}
                  gridOpacity={0.03}
                  cellRadius={4}
                  clickPulse={true}
                  pulseSpeed={500}
                />

                <div className="relative z-10 space-y-3 pointer-events-none">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.bullets ? (
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed list-none pt-1">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-red-500 font-bold select-none mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>

                <div className="relative z-10 space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5 pointer-events-none">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100/90 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10 text-xs font-medium pointer-events-auto">
                    {project.links ? (
                      project.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        >
                          {link.icon === "video" ? (
                            <Video className="w-3.5 h-3.5 text-red-500" />
                          ) : link.icon === "github" ? (
                            <FolderGit2 className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                          ) : (
                            <ExternalLink className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                          )}
                          {link.label}
                        </a>
                      ))
                    ) : (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <FolderGit2 className="w-3.5 h-3.5" />
                          Source Code
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </section>

      {/* Co Curricular Section */}
      <section id="co-curricular" className="relative z-20 max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-white/5 space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
            <Award className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
            Extracurriculars, Honors & Certifications
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent pb-3 pt-1 leading-normal inline-block">
            Co-Curricular Activities & Honors
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-zinc-400 text-base">
          </p>
        </div>

        {/* GSAP AccordionGallery Component */}
        <div className="w-full relative rounded-2xl overflow-hidden pt-2">
          <AccordionGallery
            items={accordionCoCurricularItems}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
            height={460}
            gap={12}
            radius={20}
            accentColor="#ef4444"
            grayscale={true}
            parallax={0.5}
            tilt={8}
          />
        </div>

        {/* Structured Honors & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-2">
          {/* Certifications Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-lg">
              <Award className="w-5 h-5" />
              Certifications & Tests
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-zinc-300">
              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Flutter and Dart: Developing iOS, Android, and Mobile Apps</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">IBM | Coursera</p>
                  <a
                    href="https://coursera.org/share/137bc323b463aaa5159645c43c40624f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Retrieval Augmented Generation (RAG)</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">DeepLearning.AI | Coursera</p>
                  <a
                    href="https://coursera.org/share/7e282af2f680aebfed5338db0892c573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Foundations of Coding Back-End</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Microsoft | Coursera</p>
                  <a
                    href="https://coursera.org/share/f04974ab08c51087b010f1b97589a155"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Node.js & MongoDB: Developing Back-end Database Applications</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">IBM | Coursera</p>
                  <a
                    href="https://coursera.org/share/6753241d0ba3fb68386a15efe990ab26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Introduction to Software Engineering</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">IBM | Coursera</p>
                  <a
                    href="https://coursera.org/share/3db5aeb8cc7196bb505f88aeb6180dc6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Develop Generative AI Applications: Get Started</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">IBM | Coursera</p>
                  <a
                    href="https://coursera.org/share/83d2d753b1276d50ba4d102ae587feb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Backend Development: Node.js, Express, MongoDB & REST APIs</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">July 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Board Infinity | Coursera</p>
                  <a
                    href="https://coursera.org/share/b86417075199dd4e43605ab0d34f428a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Duolingo English Test (DET)</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 font-semibold">115 / 160</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Duolingo Official Certification</p>
                  <a
                    href="https://drive.google.com/file/d/1brNKMmC28QOLz2HjbMz6Y2EYla8vhapJ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Honors and Awards Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-white/10 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-lg">
              <GraduationCap className="w-5 h-5" />
              Honors & Awards
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-zinc-300">
              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Merit Scholarship</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">2024 – 2028</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                  Merit scholarship & certificate of excellence based on top academic performance in BS Software Engineering by National Textile University, Faisalabad.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Brilliant Student Award</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">2022</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Certificate of excellence of "Brilliant Student" by Punjab College, Faisalabad.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 dark:border-white/20 hover:border-red-500 dark:hover:border-red-500 transition-colors duration-200 pl-3 space-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Naat & Academic Distinction</h4>
                  <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">Competitions</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  3 certificates of 1st position in Naat Competition & 8 merit certificates for securing top 3 positions in class.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Additional Skills, Languages & Hobbies Section */}
      <section id="additional-skills" className="relative z-20 max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-white/5 space-y-10">
        <div className="space-y-2 flex flex-col items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              Complementary Skills & Interests
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent pb-3 pt-1 leading-normal">
            Languages, Hobbies & Capabilities
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-zinc-400 text-base">
          </p>
        </div>

        {/* Languages & Hobbies Spotlight Cards Grid */}
        <div className="space-y-8 pt-2">
          {/* Subheading: Language Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Languages className="w-5 h-5 text-red-600 dark:text-red-400" />
              Language Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Mother Tongue: URDU */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">Mother Tongue</span>
                  <Languages className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white">
                  URDU
                </div>
              </SpotlightCard>

              {/* Other Language: ENGLISH */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Other Language</span>
                  <Globe className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white">
                  ENGLISH
                </div>
              </SpotlightCard>

              {/* Other Language: PUNJABI */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Other Language</span>
                  <MessageSquare className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white">
                  PUNJABI
                </div>
              </SpotlightCard>

              {/* Other Language: ARABIC */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Other Language</span>
                  <BookOpen className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white">
                  ARABIC
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Subheading: Hobbies & Personal Interests */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-red-600 dark:text-red-400" />
              Hobbies & Interests
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Cricket */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">Outdoor Sport</span>
                  <Trophy className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Cricket</span>
                  <span className="text-xs font-mono font-normal text-slate-500 dark:text-zinc-400">🏏</span>
                </div>
              </SpotlightCard>

              {/* Badminton */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">Racquet Sport</span>
                  <Activity className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Badminton</span>
                  <span className="text-xs font-mono font-normal text-slate-500 dark:text-zinc-400">🏸</span>
                </div>
              </SpotlightCard>

              {/* Video Games */}
              <SpotlightCard className="w-full h-24 p-3.5 flex flex-col justify-between shadow-md hover:border-red-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">E-Gaming</span>
                  <Gamepad2 className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                </div>
                <div className="text-base font-black tracking-wide text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Video Games</span>
                  <span className="text-xs font-mono font-normal text-slate-500 dark:text-zinc-400">🎮</span>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-20 max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-white/5 space-y-12">
        <div className="space-y-2 flex flex-col items-center text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-zinc-400">
              <Mail className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              Get In Touch
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent pb-3 pt-1 leading-normal">
            Let's Build Something Great
          </h2>
          <p className="max-w-lg mx-auto text-slate-600 dark:text-zinc-400 text-base">
            Have a project in mind or interested in collaborating? Send a direct message or connect via social platforms below.
          </p>
        </div>

        {/* Contact Layout: Left Form + Right GlassIcons */}
        {/* Contact Layout: Left Form + Right GlassIcons matching Projects Section Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          {/* Left Side: Contact Form in Projects Card Design */}
          <div className="lg:col-span-7">
            <ElectricBorder
              color="#ef4444"
              speed={1}
              chaos={0}
              thickness={1.2}
              hoverThickness={3.2}
              borderRadius={20}
            >
              <div className="relative group overflow-hidden p-6 sm:p-8 rounded-[20px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md space-y-6 h-full flex flex-col justify-between border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
                {/* CursorGrid interactive animation layer */}
                <CursorGrid
                  color="#ef4444"
                  cellSize={45}
                  radius={110}
                  falloff="smooth"
                  holdTime={350}
                  fadeDuration={700}
                  lineWidth={1.2}
                  maxOpacity={0.85}
                  fillOpacity={0.1}
                  gridOpacity={0.03}
                  cellRadius={4}
                  clickPulse={true}
                  pulseSpeed={500}
                />

                <div className="relative z-10 space-y-1 pointer-events-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Send className="w-5 h-5 text-red-600 dark:text-red-500" />
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    Directly sends your message to <span className="font-semibold text-slate-700 dark:text-zinc-200">musmanilyas.002@gmail.com</span>.
                  </p>
                </div>

                <div className="relative z-10 pointer-events-auto">
                  {isSubmitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-2">
                      <div className="text-lg font-bold">Message Composed in Gmail! 🚀</div>
                      <p className="text-xs">
                        Direct Gmail compose window has opened in your browser pre-filled to <span className="font-mono underline">musmanilyas.002@gmail.com</span>.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-semibold text-slate-700 dark:text-zinc-300 underline pt-2 cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name (Required ✅) */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-300 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                          />
                        </div>

                        {/* Email (Required ✅) */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-300 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Subject / Purpose (Optional) */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
                          Subject / Purpose <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Project Collaboration / Job Offer / Query"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-300 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>

                      {/* Message (Required ✅) */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Type your message here..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-300 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                        />
                      </div>

                      {/* SpecularButton Component for Send Message */}
                      <div className="pt-2">
                        <SpecularButton
                          type="submit"
                          size="lg"
                          radius={14}
                          textColor="#09090b"
                          lineColor="#ef4444"
                          baseColor="#dc2626"
                          className="w-full sm:w-auto font-black text-slate-950 dark:text-white"
                        >
                          Send Message 🚀
                        </SpecularButton>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </ElectricBorder>
          </div>

          {/* Right Side: GlassIcons Social Media Links in Projects Card Design */}
          <div className="lg:col-span-5">
            <ElectricBorder
              color="#ef4444"
              speed={1}
              chaos={0}
              thickness={1.2}
              hoverThickness={3.2}
              borderRadius={20}
            >
              <div className="relative group overflow-hidden p-6 sm:p-8 rounded-[20px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md flex flex-col justify-between items-center text-center h-full border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none">
                {/* CursorGrid interactive animation layer */}
                <CursorGrid
                  color="#ef4444"
                  cellSize={45}
                  radius={110}
                  falloff="smooth"
                  holdTime={350}
                  fadeDuration={700}
                  lineWidth={1.2}
                  maxOpacity={0.85}
                  fillOpacity={0.1}
                  gridOpacity={0.03}
                  cellRadius={4}
                  clickPulse={true}
                  pulseSpeed={500}
                />

                <div className="relative z-10 space-y-2 pt-2 pointer-events-auto">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Connect & Follow</h4>
                </div>

                <div className="relative z-10 py-6 w-full flex justify-center pointer-events-auto">
                  <GlassIcons items={contactGlassItems} className="w-full" />
                </div>

                <div className="relative z-10 text-[11px] font-mono text-slate-500 dark:text-zinc-400 pb-2 pointer-events-auto">
                  Fast Response Guaranteed
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-slate-200 dark:border-white/10 py-8 text-center text-xs text-slate-500 dark:text-zinc-500">
        Usman Portfolio &copy; {new Date().getFullYear()} — Built with Next.js 16 & Tailwind CSS 4
      </footer>
    </main>
  );
}
