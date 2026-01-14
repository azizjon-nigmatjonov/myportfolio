"use client";
import { memo } from "react";
import { Skill } from "@/types/experience";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = memo(function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-4 rounded-lg border border-foreground/20 bg-background/50 hover:bg-foreground/5 transition-colors duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skill.icon && <span className="text-lg">{skill.icon}</span>}
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-xs text-foreground/60">{skill.proficiency}%</span>
      </div>
      
      <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-foreground rounded-full transition-all duration-500 ease-out"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
});

export default SkillCard;
