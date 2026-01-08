"use client";
import { useEffect, useState } from "react";
import HeaderInnerUI from "@/components/features/all/components/header/HeaderInnerUI"
import { useMyInfo } from "@/store/auth";
import ProjectInnerUI from "@/components/features/all/components/project/ProjectInnerUI";
import FooterUI from "@/components/features/all/components/footer/FooterUI";
import { MyInfo } from "@/types/auth";
import { useParams } from "next/navigation";
import { usePortfoliosStore } from "@/store/portfolios";
import { Portfolio } from "@/types/portfolio";

interface ProjectPageClientProps {
  initialPortfolio: Portfolio;
  initialPortfolios: Portfolio[];
}

export default function ProjectPageClient({ initialPortfolio, initialPortfolios }: ProjectPageClientProps) {
    const { id } = useParams();
    const myInfo = useMyInfo();
    const { portfolio, portfolios, isLoading, error, fetchPortfolioById } = usePortfoliosStore();
    
    // Initialize nextProjectData from initialPortfolios
    const getNextProject = (currentId: string, portfolioList: Portfolio[]) => {
        const index = portfolioList.findIndex((p) => p.id === currentId) + 1;
        return portfolioList[index === portfolioList.length ? 0 : index] || ({} as Portfolio);
    };
    
    const [nextProjectData, setNextProjectData] = useState<Portfolio>(() => 
        getNextProject(id as string, initialPortfolios)
    );
    
    useEffect(() => {
        if (id) {
            fetchPortfolioById(id as string);

            const currentPortfolios = portfolios.length > 0 ? portfolios : initialPortfolios;
            setNextProjectData(getNextProject(id as string, currentPortfolios));
        }
    }, [id, fetchPortfolioById, portfolios, initialPortfolios]);
    
    const currentPortfolio = portfolio || initialPortfolio;
    
    if (isLoading && !currentPortfolio) {
        return <div>Loading...</div>;
    }

    if (error && !currentPortfolio) {
        return <div>Error: {error}</div>;
    }

    if (!currentPortfolio) {
        return <div>Portfolio not found</div>;
    }
    
    return <div>
        <HeaderInnerUI myInfo={myInfo || {}} url={currentPortfolio?.url || ''} />
        <ProjectInnerUI portfolio={currentPortfolio} nextProjectData={nextProjectData} />
        <FooterUI myInfo={myInfo || {} as MyInfo} />
    </div>
}
