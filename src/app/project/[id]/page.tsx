"use client";
import { useEffect } from "react";
import HeaderInnerUI from "@/features/all/components/header/HeaderInnerUI"
import { useMyInfo } from "@/store/auth";
import ProjectInnerUI from "@/features/all/components/project/ProjectInnerUI";
import FooterUI from "@/features/all/components/footer/FooterUI";
import { MyInfo } from "@/types/auth";
import { useParams } from "next/navigation";
import { usePortfoliosStore } from "@/store/portfolios";

export default function ProjectPage() {
    const { id } = useParams();
    const myInfo = useMyInfo();
    const { portfolio, isLoading, error, fetchPortfolioById } = usePortfoliosStore();

    useEffect(() => {
        if (id) {
            fetchPortfolioById(id as string);
        }
    }, [id, fetchPortfolioById]);

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
        <HeaderInnerUI myInfo={myInfo || {}} />
        <ProjectInnerUI portfolio={portfolio} />
        <FooterUI myInfo={myInfo || {} as MyInfo} />
    </div>
}