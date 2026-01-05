"use client";

import { useEffect } from "react";
import ProjectUI from "@/components/features/all/components/project/ProjectUI";
import { usePortfoliosStore } from "@/store/portfolios";

export default function ProjectList() {
    const { portfolios, isLoading, error, fetchPortfolios } = usePortfoliosStore();

    useEffect(() => {
        fetchPortfolios();
    }, [fetchPortfolios]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return <div>
        {portfolios.map((portfolio) => (
            <ProjectUI key={portfolio.id} portfolio={portfolio} />
        ))}
    </div>
}