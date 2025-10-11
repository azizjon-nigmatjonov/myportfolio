"use client";
import ProblemStatement, { ProductionDetails } from "./components/Contents";
import ProjectHeader from "./ProjectHeader";
import IntroducingImage, { GridImages, NavigatingImages, ProductionImage } from "./components/Images";
import { useRouter } from "next/navigation";
import { Portfolio } from "@/types/portfolio";

export default function ProjectInnerUI({ portfolio }: { portfolio: Portfolio }) {
    const router = useRouter();
    const navigateToProject = () => {
        router.push(`/project/${portfolio.id}`);
    }
    return <>
        <ProjectHeader portfolio={portfolio} />
        <IntroducingImage portfolio={portfolio} />
        <ProblemStatement portfolio={portfolio} />
        <ProductionImage portfolio={portfolio} />
        <ProductionDetails portfolio={portfolio} />
        <GridImages portfolio={portfolio} />
        <NavigatingImages navigateToProject={navigateToProject} portfolio={portfolio} />
    </>
}