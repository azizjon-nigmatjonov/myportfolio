"use client";
import HeaderUI from "@/features/all/components/header/HeaderUI";
import MainUI from "./components/MainUI";
import { useMyInfo } from "@/store/auth";
import ProjectList from "./components/ProjectList";
import FooterUI from "../all/components/footer/FooterUI";

export default function HomePage() {
  const myInfo = useMyInfo();

  return (
    <div className="pb-20">
      <HeaderUI myInfo={myInfo || {}} />
      <MainUI />
      <ProjectList />
      <FooterUI />
    </div>
  );
}
