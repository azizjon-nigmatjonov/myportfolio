"use client";
import HeaderUI from "@/features/all/components/header/HeaderUI";
import MainUI from "./components/MainUI";
import { useMyInfo } from "@/store/auth";
import ProjectList from "./components/ProjectList";

export default function HomePage() {
  const myInfo = useMyInfo();

  return (
    <div>
      <HeaderUI myInfo={myInfo || {}} />
      <MainUI />
      <ProjectList />
    </div>
  );
}
