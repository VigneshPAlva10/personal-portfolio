export interface SkillItem {
  name: string;
  level: string;
  category: 'languages' | 'frontend' | 'tools' | 'soft-skills';
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const personalInfo = {
  name: "Vignesh P Alva",
  role: "Software Developer & Computer Science Enthusiast",
  email: "vigneshpalva2007@gmail.com",
  github: "https://github.com/VigneshPAlva10",
  bio: "Passionate programmer with deep expertise in C++ and Python, combined with modern full-stack web development using Next.js and React. Driven by clean software design, algorithmic problem-solving, and clear cross-functional communication.",
  tagline: "Crafting robust software systems and intuitive digital experiences with C++, Python, and Next.js.",
  location: "India",
  status: "Available for internships, projects & collaborations",
  stats: [
    { label: "Core Languages", value: "C++ & Python" },
    { label: "Modern Web Stack", value: "Next.js & React" },
    { label: "Core Competency", value: "Data Structures & Algos" },
    { label: "Focus", value: "Problem Solving & Quality" }
  ]
};

export const skillsData: SkillItem[] = [
  // Languages
  {
    name: "C++",
    level: "Advanced",
    category: "languages",
    iconName: "Code2",
    description: "Object-oriented programming, STL, memory management, data structures & high-performance algorithmic solutions."
  },
  {
    name: "Python",
    level: "Advanced",
    category: "languages",
    iconName: "FileCode",
    description: "Scripting, task automation, backend logic, data manipulation, algorithm implementations and prototyping."
  },
  {
    name: "JavaScript",
    level: "Proficient",
    category: "languages",
    iconName: "Layers",
    description: "ES6+, asynchronous programming, DOM manipulation, dynamic user interactions and modern web APIs."
  },
  // Frontend & Web
  {
    name: "React.js",
    level: "Proficient",
    category: "frontend",
    iconName: "Component",
    description: "Component-driven architecture, custom hooks, reusable design systems, state management and reactive UIs."
  },
  {
    name: "Next.js",
    level: "Proficient",
    category: "frontend",
    iconName: "Globe",
    description: "Server/client components, file-system routing, SEO optimization, and high-performance web deployment."
  },
  {
    name: "CSS3 & Responsive Design",
    level: "Advanced",
    category: "frontend",
    iconName: "Palette",
    description: "Flexbox, CSS Grid, mobile-first responsive architecture, Tailwind CSS utilities, animations and glassmorphism."
  },
  // Tools & Deployment
  {
    name: "Git & GitHub",
    level: "Advanced",
    category: "tools",
    iconName: "GitBranch",
    description: "Version control workflows, branching strategies, collaborative development, pull requests and code reviews."
  },
  {
    name: "Vercel",
    level: "Proficient",
    category: "tools",
    iconName: "UploadCloud",
    description: "Continuous integration, automated deployments, custom domain routing, edge functions and serverless hosting."
  },
  {
    name: "Terminal & VS Code",
    level: "Advanced",
    category: "tools",
    iconName: "Terminal",
    description: "Unix/PowerShell tooling, debugging configurations, build scripts, and optimized developer environments."
  },
  // Soft Skills
  {
    name: "Communication Skills",
    level: "Expert",
    category: "soft-skills",
    iconName: "MessageSquare",
    description: "Articulating complex technical concepts with clarity, active listening, and effective cross-functional teamwork."
  },
  {
    name: "Problem Solving & Analysis",
    level: "Advanced",
    category: "soft-skills",
    iconName: "BrainCircuit",
    description: "Breaking down complex algorithmic challenges into optimal, modular, and maintainable solutions."
  },
  {
    name: "Team Collaboration & Adaptability",
    level: "Expert",
    category: "soft-skills",
    iconName: "Users",
    description: "Agile mindset, receptive to constructive code reviews, quick learner of new stacks, and reliable team player."
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "algo-perf-cpp",
    title: "High-Performance Algorithm Suite",
    category: "C++ / Systems & Algorithms",
    description: "A benchmarked library of fundamental and advanced algorithms implemented in modern C++ with an emphasis on low time-complexity, cache friendliness, and STL mastery.",
    highlights: [
      "Custom implementations of advanced graph traversals, dynamic programming, and sorting trees",
      "Benchmarked memory efficiency and runtime execution metrics against standard libraries",
      "Clean modular OOP structure with comprehensive test suites"
    ],
    techStack: ["C++", "STL", "Data Structures", "Benchmarking", "Git"],
    githubUrl: "https://github.com/VigneshPAlva10",
    featured: true
  },
  {
    id: "py-automation-toolkit",
    title: "Python Automation & Data Processing Hub",
    category: "Python / Utility & Scripting",
    description: "A suite of automation scripts and data processors built in Python designed to eliminate repetitive workflows, parse complex data formats, and automate file management.",
    highlights: [
      "Automated batch file parsing, sanitization, and structured CSV/JSON data transformation",
      "Asynchronous web scraping and API status reporting module",
      "Interactive CLI interface with rich formatting and error handling"
    ],
    techStack: ["Python", "Automation", "File I/O", "Data Extraction", "CLI"],
    githubUrl: "https://github.com/VigneshPAlva10",
    featured: true
  },
  {
    id: "modern-portfolio-nextjs",
    title: "Dynamic Developer Portfolio Platform",
    category: "Next.js / React / Web UI",
    description: "The fast, fully responsive portfolio application built with Next.js, React, Tailwind CSS, and Lucide React, engineered for seamless performance and Vercel hosting.",
    highlights: [
      "App Router architecture with responsive layouts and fluid dark-mode theme",
      "Interactive contact messaging system with client-side validation and quick copy utilities",
      "Integrated live resume viewer and modular project showcase cards"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Lucide React", "Vercel"],
    githubUrl: "https://github.com/VigneshPAlva10",
    liveUrl: "https://vigneshpalva.vercel.app",
    featured: true
  },
  {
    id: "interactive-quiz-interactive-portal",
    title: "Interactive Coding & Quiz Platform",
    category: "React / JavaScript / Web",
    description: "A reactive web application providing technical quizzes and problem-solving exercises in C++ and Python with real-time score tracking and detailed explanations.",
    highlights: [
      "Custom question engine supporting multiple programming categories",
      "Instant feedback with code snippet syntax styling and score analytics",
      "Local storage state persistence and mobile-optimized touch controls"
    ],
    techStack: ["React", "JavaScript", "CSS3", "State Management", "GitHub Pages"],
    githubUrl: "https://github.com/VigneshPAlva10",
    featured: false
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "Current & Ongoing",
    title: "Full-Stack Web & Software Engineering",
    subtitle: "Next.js, React, System Architecture & Vercel",
    description: "Designing end-to-end web applications combining robust backend algorithmic logic with modern responsive React frontends, deploying seamlessly to production via Vercel.",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "UI/UX"]
  },
  {
    year: "Core Mastery",
    title: "Python Automation & Scripting Excellence",
    subtitle: "Data Processing, File Systems & Logic Pipelines",
    description: "Harnessed the power of Python for building rapid prototypes, automations, and data processing utilities. Focused on clean syntax, readability, and modular design.",
    tags: ["Python", "Data Structures", "Automation", "OOP", "APIs"]
  },
  {
    year: "Foundation",
    title: "Algorithms & Low-Level Architecture in C++",
    subtitle: "Data Structures, STL & Computational Efficiency",
    description: "Built a solid computer science bedrock focusing on memory management, pointer arithmetic, Object-Oriented Programming, and algorithmic problem-solving in C++.",
    tags: ["C++", "STL", "Algorithms", "Memory Management", "Problem Solving"]
  }
];
