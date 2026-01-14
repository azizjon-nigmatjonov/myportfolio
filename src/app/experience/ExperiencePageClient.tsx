"use client";
import { memo } from "react";
import HeaderUI from "@/components/features/all/components/header/HeaderUI";
import FooterUI from "@/components/features/all/components/footer/FooterUI";
import { useMyInfo } from "@/store/auth";
import { MyInfo } from "@/types/auth";
import { ExperienceData } from "@/types/experience";
import AboutMeSection from "@/components/features/experience/components/AboutMeSection";
import ContactsSection from "@/components/features/experience/components/ContactsSection";
import ExperienceSection from "@/components/features/experience/components/ExperienceSection";
import SkillsSection from "@/components/features/experience/components/SkillsSection";

interface ExperiencePageClientProps {
  initialData: ExperienceData;
}

const ExperiencePageClient = memo(function ExperiencePageClient({ 
  initialData 
}: ExperiencePageClientProps) {
  const myInfo = useMyInfo();

  return (
    <div className="pb-20">
      <HeaderUI myInfo={myInfo || ({} as MyInfo)} />
      
      <div className="container space-y-24 sm:space-y-32 py-12 sm:py-20">
        <AboutMeSection data={initialData.aboutMe} />
        <ExperienceSection experiences={initialData.experiences} />
        <SkillsSection skills={initialData.skills} />
        <ContactsSection contacts={initialData.contacts} />
      </div>
      
      <FooterUI myInfo={myInfo || ({} as MyInfo)} />
    </div>
  );
});

export default ExperiencePageClient;
