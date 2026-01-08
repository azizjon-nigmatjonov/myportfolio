import type { Metadata } from "next";
import HomePage from "@/components/features/home/HomePage";
import { fetchMyInfo } from "@/lib/api-server";
import { PersonSchema } from "@/components/SEO/StructuredData";
import { formatMetaDescription, getCanonicalUrl } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const myInfo = await fetchMyInfo();
  
  const title = "Azizjon Nigmatjonov - Frontend Engineer";
  const description = formatMetaDescription(
    myInfo?.about_me || 
    "Frontend Engineer and Software Developer portfolio. Explore my projects, skills, and experience in web development."
  );
  const url = getCanonicalUrl();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      images: myInfo?.profilePicture ? [myInfo.profilePicture] : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Home() {
  const myInfo = await fetchMyInfo();
  
  return (
    <>
      {myInfo && <PersonSchema person={myInfo} />}
      <HomePage />
    </>
  );
}
