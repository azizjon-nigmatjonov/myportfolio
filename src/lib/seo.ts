const SITE_URL = "https://www.azizjon7.uz";

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Format meta description to optimal length (150-160 characters)
 */
export function formatMetaDescription(description: string, maxLength: number = 160): string {
  if (!description) return "";
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3).trim() + "...";
}

/**
 * Generate keywords from portfolio data
 */
export function generateKeywords(portfolio: {
  title?: string;
  description?: string;
  tags?: string[];
  stack?: string[];
  category?: string;
}): string {
  const keywords: string[] = [];
  
  if (portfolio.tags) {
    keywords.push(...portfolio.tags);
  }
  
  if (portfolio.stack) {
    keywords.push(...portfolio.stack);
  }
  
  if (portfolio.category) {
    keywords.push(portfolio.category);
  }
  
  // Add common portfolio keywords
  keywords.push("portfolio", "web development", "frontend", "software engineer");
  
  return [...new Set(keywords)].join(", ");
}

/**
 * Normalize image URL to absolute URL
 */
export function normalizeImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) return `${SITE_URL}/me.jpeg`; // Default fallback
  
  // If already absolute URL, return as is
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  
  // If relative URL, make it absolute
  const cleanPath = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Format title with site name
 */
export function formatTitle(title: string, includeSiteName: boolean = true): string {
  if (!includeSiteName) return title;
  return `${title} | Azizjon Nigmatjonov - Frontend Engineer`;
}
