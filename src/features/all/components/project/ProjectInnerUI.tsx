import ProblemStatement, { ProductionDetails } from "./components/Contents";
import ProjectHeader from "./ProjectHeader";
import IntroducingImage, { GridImages, NavigatingImages, ProductionImage } from "./components/Images";

export default function ProjectInnerUI() {
    return <>
        <ProjectHeader />
        <IntroducingImage />
        <ProblemStatement />
        <ProductionImage />
        <ProductionDetails />
        <GridImages />
        <NavigatingImages />
    </>
}