"use client";
import HeaderInnerUI from "@/features/all/components/header/HeaderInnerUI"
import { useMyInfo } from "@/store/auth";
import ProjectInnerUI from "@/features/all/components/project/ProjectInnerUI";
import FooterUI from "@/features/all/components/footer/FooterUI";

export default function ProjectPage() {
    const myInfo = useMyInfo();
    return <div>
        <HeaderInnerUI myInfo={myInfo || {}} />
        <ProjectInnerUI />
        <FooterUI />
    </div>
}