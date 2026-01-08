import { MetadataRoute } from "next";
import { fetchPortfolios } from "@/lib/api-server";
import { getCanonicalUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getCanonicalUrl();
  
  // Fetch all portfolios
  const portfolios = await fetchPortfolios();
  
  // Home page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
  
  // Portfolio project pages
  const portfolioRoutes: MetadataRoute.Sitemap = portfolios.map((portfolio) => ({
    url: getCanonicalUrl(`/project/${portfolio.id}`),
    lastModified: portfolio.updated_at ? new Date(portfolio.updated_at) : new Date(portfolio.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  
  return [...routes, ...portfolioRoutes];
}
