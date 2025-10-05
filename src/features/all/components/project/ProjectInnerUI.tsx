"use client";
import ProblemStatement, { ProductionDetails } from "./components/Contents";
import ProjectHeader from "./ProjectHeader";
import IntroducingImage, { GridImages, NavigatingImages, ProductionImage } from "./components/Images";
import { useRouter } from "next/navigation";

export default function ProjectInnerUI() {
    const router = useRouter();
    const navigateToProject = () => {
        router.push("/project/makrformelle");
    }
    return <>
        <ProjectHeader />
        <IntroducingImage />
        <ProblemStatement />
        <ProductionImage />
        <ProductionDetails />
        <GridImages />
        <NavigatingImages navigateToProject={navigateToProject} />
    </>
}