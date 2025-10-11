"use client";
import HeaderUI from "@/features/all/components/header/HeaderUI";
import MainUI from "./components/MainUI";
import { useMyInfo } from "@/store/auth";
import ProjectList from "./components/ProjectList";
import FooterUI from "../all/components/footer/FooterUI";
import { MyInfo } from "@/types/auth";

export default function HomePage() {
  const myInfo = useMyInfo();

  return (
    <div className="pb-20">
      <HeaderUI myInfo={myInfo || {} as MyInfo} />
      <MainUI myInfo={myInfo || {} as MyInfo} />
      <ProjectList />
      <FooterUI myInfo={myInfo || {} as MyInfo} />
    </div>
  );
}
