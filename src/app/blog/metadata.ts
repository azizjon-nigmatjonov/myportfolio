import type { Metadata } from "next";
import { BlogPost } from "@/types/blog";
import { getCanonicalUrl, formatMetaDescription, generateKeywords, normalizeImageUrl } from "@/lib/seo";

export function generateBlogMetadata(posts: BlogPost[]): Metadata {
  const title = "Blog | Azizjon Nigmatjonov";
  const description = formatMetaDescription(
    "Read articles about web development, React, Next.js, TypeScript, and modern frontend technologies. Insights and tutorials from a Frontend Engineer."
  );
  const url = getCanonicalUrl("/blog");

  const allTags = posts.flatMap(p => p.tags || []);
  const keywords = generateKeywords({
    title: "Blog",
    description: description,
    tags: allTags,
    category: "Blog",
  });

  // Get featured image from first post or default
  const ogImage = posts.length > 0 && posts[0].featuredImage
    ? normalizeImageUrl(posts[0].featuredImage)
    : normalizeImageUrl("/me.jpeg");

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
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
