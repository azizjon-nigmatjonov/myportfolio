import type { Metadata } from "next";
import HomePage from "@/components/features/home/HomePage";
import { fetchMyInfo, fetchPortfolios } from "@/lib/api-server";
import { PersonSchema, PortfolioCollectionSchema } from "@/components/SEO/StructuredData";
import { generateHomeMetadata } from "./metadata";

export async function generateMetadata(): Promise<Metadata> {
  const [myInfo, portfolios] = await Promise.all([
    fetchMyInfo(),
    fetchPortfolios(),
  ]);
  
  return generateHomeMetadata(myInfo, portfolios);
}

export default async function Home() {
  const [myInfo, portfolios] = await Promise.all([
    fetchMyInfo(),
    fetchPortfolios(),
  ]);
  
  return (
    <>
      {myInfo && <PersonSchema person={myInfo} />}
      <PortfolioCollectionSchema portfolios={portfolios} />
      <HomePage initialPortfolios={portfolios} />
    </>
  );
}
