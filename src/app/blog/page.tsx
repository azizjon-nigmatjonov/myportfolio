import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { fetchBlogPosts } from "@/lib/api-server";
import { generateBlogMetadata } from "./metadata";
import { BlogCollectionSchema } from "@/components/SEO/StructuredData";
import { mockBlogPosts } from "@/lib/mock-data/blog";
import { transformBlogPost } from "@/lib/transformers/blog";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await fetchBlogPosts();
  const transformedPosts = posts.length > 0 
    ? posts.map(transformBlogPost)
    : mockBlogPosts;
  
  return generateBlogMetadata(transformedPosts);
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();
  const transformedPosts = posts.length > 0 
    ? posts.map(transformBlogPost)
    : mockBlogPosts;

  return (
    <>
      <BlogCollectionSchema posts={transformedPosts} />
      <BlogPageClient initialPosts={transformedPosts} />
    </>
  );
}
