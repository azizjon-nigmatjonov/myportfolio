// API Response Types
export interface ExperienceApiResponse {
  _id: string;
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  achievements?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface SkillApiResponse {
  _id: string;
  id: string;
  name: string;
  category: string; // API uses different categories
  proficiency: number;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactApiResponse {
  _id: string;
  id: string;
  type: string;
  label: string;
  value: string;
  url?: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AboutMeApiResponse {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Component Types
export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null; // null for current position
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "design" | "other";
  proficiency: number; // 1-100
  icon?: string;
}

export interface Contact {
  id: string;
  type: "email" | "phone" | "github" | "linkedin" | "website" | "other";
  label: string;
  value: string;
  url?: string;
  icon?: string;
}

export interface ExperienceData {
  aboutMe: {
    title: string;
    content: string;
    image?: string;
  };
  contacts: Contact[];
  experiences: Experience[];
  skills: Skill[];
}
