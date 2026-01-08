import type { Metadata } from "next";
import { Portfolio } from "@/types/portfolio";
import { getCanonicalUrl, formatMetaDescription, normalizeImageUrl, generateKeywords } from "@/lib/seo";

export function generateMetadata(portfolio: Portfolio): Metadata {
  const title = portfolio.title || "Project";
  const description = formatMetaDescription(portfolio.description || portfolio.intro_statment || "");
  const url = getCanonicalUrl(`/project/${portfolio.id}`);
  const images = [
    normalizeImageUrl(portfolio.showing_image_url),
    normalizeImageUrl(portfolio.showing_inner_image_url),
  ].filter(Boolean);
  const keywords = generateKeywords(portfolio);

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Azizjon Nigmatjonov - Portfolio",
      images: images.map((image) => ({
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      })),
      publishedTime: portfolio.release_date || portfolio.created_date,
      modifiedTime: portfolio.updated_at || portfolio.created_at,
      authors: ["Azizjon Nigmatjonov"],
      tags: portfolio.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.length > 0 ? [images[0]] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}
