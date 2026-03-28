import type { Metadata } from "next";
import { BlogPost } from "@/types/blog";
import {
  getCanonicalUrl,
  formatMetaDescription,
  generateKeywords,
  normalizeImageUrl,
  normalizeWhitespaceForMeta,
} from "@/lib/seo";

export function generateBlogPostMetadata(post: BlogPost): Metadata {
  // Extract meaningful content text from blog post for social media preview
  const getContentText = () => {
    // Get all paragraph blocks and extract text
    const paragraphTexts = post.content
      .filter(block => block.type === "paragraph" && block.content)
      .map(block => block.content.trim())
      .join(" ");
    
    // If we have paragraph content, combine with excerpt
    if (paragraphTexts) {
      // Take first 200 characters of combined content
      const combinedText = `${post.excerpt} ${paragraphTexts}`;
      return combinedText.length > 200 
        ? combinedText.substring(0, 200).trim() + "..."
        : combinedText;
    }
    
    return post.excerpt;
  };
  
  const rawSummary = normalizeWhitespaceForMeta(getContentText() || post.excerpt || post.title);
  const description = formatMetaDescription(rawSummary, 160);
  const socialDescription = formatMetaDescription(rawSummary, 280);
  const url = getCanonicalUrl(`/blog/${post.slug}`);

  const keywords = generateKeywords({
    title: post.title,
    description: normalizeWhitespaceForMeta(post.excerpt),
    tags: post.tags || [],
    category: post.category,
  });

  // Get featured image or first image from content as fallback
  const getPrimaryImage = () => {
    if (post.featuredImage) {
      return normalizeImageUrl(post.featuredImage);
    }
    // Fallback to first image in content
    const firstImageBlock = post.content.find(block => block.type === "image" && block.imageUrl);
    if (firstImageBlock?.imageUrl) {
      return normalizeImageUrl(firstImageBlock.imageUrl);
    }
    return undefined;
  };

  const ogImage = getPrimaryImage();

  return {
    title: {
      absolute: `${post.title} | Azizjon Nigmatjonov - Blog`,
    },
    description,
    keywords,
    authors: [{ name: post.author.name }],
    creator: "Azizjon Nigmatjonov",
    publisher: "Azizjon Nigmatjonov",
    openGraph: {
      type: "article",
      locale: "en_US",
      title: post.title,
      description: socialDescription,
      url,
      siteName: "Azizjon Nigmatjonov - Portfolio",
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags || [],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: socialDescription,
      images: ogImage ? [ogImage] : undefined,
      creator: "@azizjon7",
    },
    alternates: {
      canonical: url,
    },
  };
}
