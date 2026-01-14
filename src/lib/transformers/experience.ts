import {
  AboutMeApiResponse,
  ContactApiResponse,
  ExperienceApiResponse,
  SkillApiResponse,
  Experience,
  Skill,
  Contact,
  ExperienceData,
} from "@/types/experience";

/**
 * Transform API category to component category
 */
function mapSkillCategory(apiCategory: string): Skill["category"] {
  const categoryMap: Record<string, Skill["category"]> = {
    "Core Technologies": "frontend",
    "Performance & Architecture": "frontend",
    "Testing & Quality": "tools",
    "Development Tools": "tools",
    "APIs & State Management": "backend",
    "UI Libraries & Design": "design",
    "Leadership & Collaboration": "other",
    "Additional Skills": "other",
    // Fallback mappings
    frontend: "frontend",
    backend: "backend",
    tools: "tools",
    design: "design",
    other: "other",
  };

  return categoryMap[apiCategory] || "other";
}

/**
 * Transform API contact type to component type
 */
function mapContactType(apiType: string): Contact["type"] {
  const typeMap: Record<string, Contact["type"]> = {
    email: "email",
    phone: "phone",
    github: "github",
    linkedin: "linkedin",
    website: "website",
    twitter: "other",
  };

  return typeMap[apiType.toLowerCase()] || "other";
}

/**
 * Transform API experience response to component experience
 */
export function transformExperience(apiExperience: ExperienceApiResponse): Experience {
  return {
    id: apiExperience.id || apiExperience._id,
    company: apiExperience.company,
    position: apiExperience.position,
    location: apiExperience.location,
    startDate: apiExperience.startDate,
    endDate: apiExperience.endDate,
    description: apiExperience.description,
    technologies: apiExperience.technologies || [],
    achievements: apiExperience.achievements,
  };
}

/**
 * Transform API skill response to component skill
 */
export function transformSkill(apiSkill: SkillApiResponse): Skill {
  return {
    id: apiSkill.id || apiSkill._id,
    name: apiSkill.name,
    category: mapSkillCategory(apiSkill.category),
    proficiency: apiSkill.proficiency,
    icon: apiSkill.icon,
  };
}

/**
 * Transform API contact response to component contact
 */
export function transformContact(apiContact: ContactApiResponse): Contact {
  return {
    id: apiContact.id || apiContact._id,
    type: mapContactType(apiContact.type),
    label: apiContact.label,
    value: apiContact.value,
    url: apiContact.url,
    icon: apiContact.icon,
  };
}

/**
 * Transform all API responses to ExperienceData
 */
export function transformExperienceData(
  aboutMe: AboutMeApiResponse | null,
  contacts: ContactApiResponse[],
  experiences: ExperienceApiResponse[],
  skills: SkillApiResponse[]
): ExperienceData {
  return {
    aboutMe: {
      title: aboutMe?.title || "About Me",
      content: aboutMe?.content || "",
      image: aboutMe?.image,
    },
    contacts: contacts.map(transformContact),
    experiences: experiences.map(transformExperience),
    skills: skills.map(transformSkill),
  };
}
