import type { Metadata } from "next";
import { Portfolio } from "@/types/portfolio";
import { MyInfo } from "@/types/auth";
import { getCanonicalUrl, formatMetaDescription, generateKeywords, normalizeImageUrl } from "@/lib/seo";

export function generateHomeMetadata(
  myInfo: MyInfo | null,
  portfolios: Portfolio[]
): Metadata {
  const title = "Azizjon Nigmatjonov - Frontend Engineer";
  const description = formatMetaDescription(
    myInfo?.about_me || 
    "Frontend Engineer and Software Developer portfolio. Explore my projects, skills, and experience in web development."
  );
  const url = getCanonicalUrl();

  // Generate keywords from portfolios
  const allTags = portfolios.flatMap(p => p.tags || []);
  const allStack = portfolios.flatMap(p => p.stack || []);
  const allCategories = portfolios
    .map(p => p.category)
    .filter(Boolean) as string[];
  
  const keywords = generateKeywords({
    title: "Portfolio",
    description: description,
    tags: allTags,
    stack: allStack,
    category: allCategories.length > 0 ? allCategories[0] : undefined,
  });

  // Get portfolio images for OpenGraph
  const portfolioImages = portfolios
    .map(p => p.showing_image_url)
    .filter(Boolean)
    .slice(0, 4) // Limit to 4 images
    .map(img => normalizeImageUrl(img));

  // Use profile picture or first portfolio image
  const ogImage = myInfo?.profilePicture 
    ? normalizeImageUrl(myInfo.profilePicture)
    : portfolioImages[0] || normalizeImageUrl("/me.jpeg");

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "profile",
      title,
      description,
      url,
      siteName: "Azizjon Nigmatjonov - Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
        ...portfolioImages.slice(0, 3).map(img => ({
          url: img,
          width: 1200,
          height: 630,
          alt: "Portfolio Projects",
        })),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
