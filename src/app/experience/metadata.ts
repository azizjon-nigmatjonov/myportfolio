import type { Metadata } from "next";
import { ExperienceData } from "@/types/experience";
import { getCanonicalUrl, formatMetaDescription, generateKeywords } from "@/lib/seo";

export function generateExperienceMetadata(data: ExperienceData): Metadata {
  const title = "Experience & Skills | Azizjon Nigmatjonov";
  const description = formatMetaDescription(
    `Explore my professional experience, technical skills, and expertise as a Frontend Engineer. ${data.aboutMe.content.substring(0, 100)}...`
  );
  const url = getCanonicalUrl("/experience");
  
  const skillsList = data.skills.map(skill => skill.name).join(", ");
  const keywords = generateKeywords({
    title: "Experience",
    description: `Frontend Engineer experience, skills, portfolio. Technologies: ${skillsList}`,
    tags: data.skills.map(s => s.name),
    stack: data.skills.map(s => s.name),
    category: "Professional Experience",
  });

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "profile",
      title,
      description,
      url,
      siteName: "Azizjon Nigmatjonov - Portfolio",
      images: data.aboutMe.image ? [
        {
          url: getCanonicalUrl(data.aboutMe.image),
          width: 1200,
          height: 630,
          alt: "Azizjon Nigmatjonov - Experience",
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.aboutMe.image ? [getCanonicalUrl(data.aboutMe.image)] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}
