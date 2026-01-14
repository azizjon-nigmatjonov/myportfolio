import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";
import { fetchPortfolioById, fetchPortfolios } from "@/lib/api-server";
import { generateMetadata as generateProjectMetadata } from "./metadata";
import { ArticleSchema } from "@/components/SEO/StructuredData";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const portfolio = await fetchPortfolioById(id);
  
  if (!portfolio) {
    return {
      title: "Project Not Found",
    };
  }

  return generateProjectMetadata(portfolio);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  
  // Fetch portfolio and portfolios list in parallel for better performance
  const [portfolio, portfolios] = await Promise.all([
    fetchPortfolioById(id),
    fetchPortfolios(),
  ]);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <ArticleSchema article={portfolio} />
      <ProjectPageClient initialPortfolio={portfolio} initialPortfolios={portfolios} />
    </>
  );
}