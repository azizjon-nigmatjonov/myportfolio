import type { Metadata } from "next";
import { Portfolio } from "@/types/portfolio";
import { getCanonicalUrl, formatMetaDescription, normalizeImageUrl, generateKeywords } from "@/lib/seo";

export function generateMetadata(portfolio: Portfolio): Metadata {
  const projectTitle = portfolio.title || "Project";
  const title = `${projectTitle} | Azizjon Nigmatjonov - Portfolio`;
  
  // Enhanced description with more context
  const baseDescription = portfolio.description || portfolio.intro_statment || "";
  const categoryInfo = portfolio.category ? ` ${portfolio.category} project` : "";
  const stackInfo = portfolio.stack && portfolio.stack.length > 0 
    ? ` Built with ${portfolio.stack.slice(0, 3).join(", ")}.` 
    : "";
  const fullDescription = formatMetaDescription(
    `${baseDescription}${categoryInfo}.${stackInfo} Explore this project by Frontend Engineer Azizjon Nigmatjonov.`
  );
  
  const url = getCanonicalUrl(`/project/${portfolio.id}`);
  
  // Collect all available images for better SEO
  const allImages = [
    portfolio.showing_image_url,
    portfolio.showing_inner_image_url,
    portfolio.problem_image_url,
    portfolio.production_image_url_1,
    portfolio.production_image_url_2,
    portfolio.production_image_url_3,
    portfolio.production_image_url_4,
  ].filter(Boolean).map(img => normalizeImageUrl(img));
  
  // Primary images for OpenGraph (limit to 4 for best practices)
  const primaryImages = allImages.slice(0, 4);
  
  // Enhanced keywords generation
  const keywords = generateKeywords({
    title: projectTitle,
    description: baseDescription,
    tags: portfolio.tags || [],
    stack: portfolio.stack || [],
    category: portfolio.category,
  });

  return {
    title,
    description: fullDescription,
    keywords,
    authors: [{ name: "Azizjon Nigmatjonov" }],
    creator: "Azizjon Nigmatjonov",
    publisher: "Azizjon Nigmatjonov",
    openGraph: {
      type: "article",
      title: projectTitle,
      description: fullDescription,
      url,
      siteName: "Azizjon Nigmatjonov - Portfolio",
      images: primaryImages.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: `${projectTitle} - Portfolio Project`,
      })),
      publishedTime: portfolio.release_date || portfolio.created_date,
      modifiedTime: portfolio.updated_at || portfolio.created_at,
      authors: ["Azizjon Nigmatjonov"],
      tags: portfolio.tags || [],
      section: portfolio.category,
    },
    twitter: {
      card: "summary_large_image",
      title: projectTitle,
      description: fullDescription,
      images: primaryImages.length > 0 ? [primaryImages[0]] : undefined,
      creator: "@azizjon7",
    },
    alternates: {
      canonical: url,
    },
    other: {
      // Additional metadata
      "project:category": portfolio.category || "",
      "project:status": portfolio.status || "",
      "project:url": portfolio.url || "",
    },
  };
}
