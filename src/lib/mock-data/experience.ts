import { ExperienceData } from "@/types/experience";

export const mockExperienceData: ExperienceData = {
  aboutMe: {
    title: "About Me",
    content: "I'm a passionate Frontend Engineer with a strong focus on creating beautiful, performant, and user-centric web experiences. With expertise in modern JavaScript frameworks and a keen eye for design, I transform complex problems into elegant solutions. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of web development.",
    image: "/me.jpeg",
  },
  contacts: [
    {
      id: "1",
      type: "email",
      label: "Email",
      value: "aziz.nigmatjonov7@gmail.com",
      url: "mailto:aziz.nigmatjonov7@gmail.com",
    },
    {
      id: "2",
      type: "phone",
      label: "Phone",
      value: "+998 99 491 28 30",
      url: "tel:+998994912828",
    },
    {
      id: "3",
      type: "github",
      label: "GitHub",
      value: "github.com/azizjon-nigmatjonov",
      url: "https://github.com/azizjon-nigmatjonov",
    },
    {
      id: "4",
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/azizjon-nigmatjonov",
      url: "https://linkedin.com/in/azizjon-nigmatjonov",
    },
  ],
  experiences: [
    {
      id: "1",
      company: "Tech Company Inc.",
      position: "Senior Frontend Engineer",
      location: "Tashkent, Uzbekistan",
      startDate: "2022-01",
      endDate: null,
      description: "Leading frontend development initiatives, architecting scalable React applications, and mentoring junior developers. Focused on performance optimization and modern web technologies.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led migration to Next.js 14, improving SEO and user experience",
        "Mentored 3 junior developers, improving team productivity",
      ],
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Frontend Developer",
      location: "Remote",
      startDate: "2020-06",
      endDate: "2021-12",
      description: "Developed and maintained multiple client-facing applications using React and Vue.js. Collaborated with design and backend teams to deliver high-quality user experiences.",
      technologies: ["React", "Vue.js", "JavaScript", "CSS3", "REST APIs"],
      achievements: [
        "Built 5+ production applications from scratch",
        "Reduced bundle size by 30% through code splitting",
        "Implemented responsive designs for mobile and desktop",
      ],
    },
    {
      id: "3",
      company: "Digital Agency",
      position: "Junior Frontend Developer",
      location: "Tashkent, Uzbekistan",
      startDate: "2019-01",
      endDate: "2020-05",
      description: "Developed responsive web applications and collaborated with senior developers to learn best practices. Focused on writing clean, maintainable code.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      achievements: [
        "Completed 10+ client projects successfully",
        "Learned modern JavaScript and React fundamentals",
        "Improved code quality through code reviews",
      ],
    },
  ],
  skills: [
    // Frontend
    { id: "1", name: "React", category: "frontend", proficiency: 95, icon: "⚛️" },
    { id: "2", name: "Next.js", category: "frontend", proficiency: 90, icon: "▲" },
    { id: "3", name: "TypeScript", category: "frontend", proficiency: 88, icon: "📘" },
    { id: "4", name: "JavaScript", category: "frontend", proficiency: 92, icon: "🟨" },
    { id: "5", name: "HTML5", category: "frontend", proficiency: 95, icon: "🌐" },
    { id: "6", name: "CSS3", category: "frontend", proficiency: 90, icon: "🎨" },
    { id: "7", name: "Tailwind CSS", category: "frontend", proficiency: 88, icon: "💨" },
    { id: "8", name: "Vue.js", category: "frontend", proficiency: 75, icon: "💚" },
    
    // Backend
    { id: "9", name: "Node.js", category: "backend", proficiency: 70, icon: "🟢" },
    { id: "10", name: "REST APIs", category: "backend", proficiency: 85, icon: "🔌" },
    { id: "11", name: "GraphQL", category: "backend", proficiency: 75, icon: "🔷" },
    
    // Tools
    { id: "12", name: "Git", category: "tools", proficiency: 90, icon: "📦" },
    { id: "13", name: "Webpack", category: "tools", proficiency: 80, icon: "📦" },
    { id: "14", name: "Vite", category: "tools", proficiency: 85, icon: "⚡" },
    { id: "15", name: "Docker", category: "tools", proficiency: 65, icon: "🐳" },
    
    // Design
    { id: "16", name: "Figma", category: "design", proficiency: 80, icon: "🎨" },
    { id: "17", name: "UI/UX Design", category: "design", proficiency: 75, icon: "✨" },
  ],
};
