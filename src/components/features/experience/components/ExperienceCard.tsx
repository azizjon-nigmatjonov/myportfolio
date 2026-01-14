"use client";
import { memo } from "react";
import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = memo(function ExperienceCard({ 
  experience 
}: ExperienceCardProps) {
  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const dateObj = new Date(parseInt(year), parseInt(month) - 1);
    return dateObj.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const startDate = formatDate(experience.startDate);
  const endDate = experience.endDate ? formatDate(experience.endDate) : "Present";

  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-foreground/20 pb-8 last:pb-0 group">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground border-2 border-background group-hover:scale-125 transition-transform duration-200" />
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{experience.position}</h3>
          <p className="text-foreground/70 font-medium">{experience.company}</p>
          <p className="text-sm text-foreground/60 mt-1">
            {experience.location} • {startDate} - {endDate}
          </p>
        </div>
        
        <p className="text-foreground/80 leading-relaxed">
          {experience.description}
        </p>
        
        {experience.achievements && experience.achievements.length > 0 && (
          <ul className="space-y-2 mt-4">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="text-foreground/40 mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80 border border-foreground/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ExperienceCard;
