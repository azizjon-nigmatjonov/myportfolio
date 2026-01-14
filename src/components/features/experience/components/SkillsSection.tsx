"use client";
import { memo, useMemo } from "react";
import { Skill } from "@/types/experience";
import SkillCard from "./SkillCard";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = memo(function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {
      frontend: [],
      backend: [],
      tools: [],
      design: [],
      other: [],
    };

    skills.forEach((skill) => {
      if (groups[skill.category]) {
        groups[skill.category].push(skill);
      } else {
        groups.other.push(skill);
      }
    });

    return Object.entries(groups).filter(([_, skills]) => skills.length > 0);
  }, [skills]);

  const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & Technologies",
    design: "Design",
    other: "Other",
  };

  return (
    <section className="scroll-mt-20" id="skills">
      <div className="grid sm:grid-cols-4 gap-8 sm:gap-12">
        <div className="sm:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
        </div>
        
        <div className="sm:col-span-3 space-y-12">
          {groupedSkills.map(([category, categorySkills]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground/90">
                {categoryLabels[category] || category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
