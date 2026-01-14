import type { Metadata } from "next";
import ExperiencePageClient from "./ExperiencePageClient";
import { generateExperienceMetadata } from "./metadata";
import { ExperienceSchema } from "@/components/SEO/StructuredData";
import {
  fetchAboutMe,
  fetchContacts,
  fetchExperiences,
  fetchSkills,
} from "@/lib/api-server";
import { transformExperienceData } from "@/lib/transformers/experience";
import { mockExperienceData } from "@/lib/mock-data/experience";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch data for metadata
  const [aboutMe, contacts, experiences, skills] = await Promise.all([
    fetchAboutMe(),
    fetchContacts(),
    fetchExperiences(),
    fetchSkills(),
  ]);

  const experienceData = transformExperienceData(
    aboutMe,
    contacts,
    experiences,
    skills
  );

  // Fallback to mock data if API fails
  const data = aboutMe || contacts.length > 0 || experiences.length > 0 || skills.length > 0
    ? experienceData
    : mockExperienceData;

  return generateExperienceMetadata(data);
}

export default async function ExperiencePage() {
  // Fetch all experience data in parallel
  const [aboutMe, contacts, experiences, skills] = await Promise.all([
    fetchAboutMe(),
    fetchContacts(),
    fetchExperiences(),
    fetchSkills(),
  ]);

  const experienceData = transformExperienceData(
    aboutMe,
    contacts,
    experiences,
    skills
  );

  // Fallback to mock data if API fails or returns empty
  const data = aboutMe || contacts.length > 0 || experiences.length > 0 || skills.length > 0
    ? experienceData
    : mockExperienceData;

  return (
    <>
      <ExperienceSchema data={data} />
      <ExperiencePageClient initialData={data} />
    </>
  );
}
