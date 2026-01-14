"use client";

import { memo } from "react";
import ProjectUI from "@/components/features/all/components/project/ProjectUI";
import { Portfolio } from "@/types/portfolio";

interface ProjectListProps {
    initialPortfolios: Portfolio[];
}

const ProjectList = memo(function ProjectList({ initialPortfolios }: ProjectListProps) {
    return (
        <div>
            {initialPortfolios.map((portfolio) => (
                <ProjectUI key={portfolio.id} portfolio={portfolio} />
            ))}
        </div>
    );
});

export default ProjectList;