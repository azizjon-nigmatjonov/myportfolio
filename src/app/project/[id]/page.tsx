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

export default function ProjectPage() {
    const { id } = useParams();
    const myInfo = useMyInfo();
    const { portfolio, portfolios, isLoading, error, fetchPortfolioById } = usePortfoliosStore();
    
    const [nextProjectData, setNextProjectData] = useState<Portfolio>({} as Portfolio);
    useEffect(() => {
        if (id) {
            fetchPortfolioById(id as string);

            const index = portfolios.findIndex((portfolio) => portfolio.id === id) + 1
            setNextProjectData(portfolios[index === portfolios.length ? 0 : index]);
        }
    }, [id, fetchPortfolioById, portfolios]);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!portfolio) {
        return <div>Portfolio not found</div>;
    }
    
    return <div>
        <HeaderInnerUI myInfo={myInfo || {}} url={portfolio?.url || ''} />
        <ProjectInnerUI portfolio={portfolio} nextProjectData={nextProjectData} />
        <FooterUI myInfo={myInfo || {} as MyInfo} />
    </div>
}