"use client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api";
import HeaderUI from "@/features/all/components/header/HeaderUI";

interface MyInfo {
  id: number;
  name: string;
  profilePicture: string;
}

const fetchMyInfo = async (): Promise<MyInfo> => {
  const response = await apiClient.get("/me");
  return response.data;
};

export default function HomePage() {
  const {
    data: myInfo,
  } = useQuery({
    queryKey: ["myInfo"],
    queryFn: fetchMyInfo,
  });
  
  return (
    <div>
      <HeaderUI myInfo={myInfo || {}} />
     
    </div>
  );
}
