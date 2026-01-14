"use client";
import HeaderUI from "@/components/features/all/components/header/HeaderUI";
import MainUI from "./components/MainUI";
import { useMyInfo } from "@/store/auth";
import ProjectList from "./components/ProjectList";
import FooterUI from "../all/components/footer/FooterUI";
import { MyInfo } from "@/types/auth";
import { Portfolio } from "@/types/portfolio";

interface HomePageProps {
  initialPortfolios: Portfolio[];
}

export default function HomePage({ initialPortfolios }: HomePageProps) {
  const myInfo = useMyInfo();

  return (
    <div className="pb-20">
      <HeaderUI myInfo={myInfo || {} as MyInfo} />
      <MainUI myInfo={myInfo || {} as MyInfo} />
      <ProjectList initialPortfolios={initialPortfolios} />
      <FooterUI myInfo={myInfo || {} as MyInfo} />
    </div>
  );
}
