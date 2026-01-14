"use client";
import { memo } from "react";
import { Experience } from "@/types/experience";
import ExperienceCard from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = memo(function ExperienceSection({ 
  experiences 
}: ExperienceSectionProps) {
  return (
    <section className="scroll-mt-20" id="experience">
      <div className="grid sm:grid-cols-4 gap-8 sm:gap-12">
        <div className="sm:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
        </div>
        
        <div className="sm:col-span-3 space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
