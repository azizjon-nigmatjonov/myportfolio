import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";
import { fetchBlogPostById, fetchBlogPosts } from "@/lib/api-server";
import { generateBlogPostMetadata } from "./metadata";
import { BlogPostSchema } from "@/components/SEO/StructuredData";
import { transformBlogPost } from "@/lib/transformers/blog";
import { mockBlogPosts } from "@/lib/mock-data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const apiPost = await fetchBlogPostById(slug);
  const post = apiPost ? transformBlogPost(apiPost) : mockBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generateBlogPostMetadata(post);
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  const transformedPosts = posts.length > 0 
    ? posts.map(transformBlogPost)
    : mockBlogPosts;
  
  return transformedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const apiPost = await fetchBlogPostById(slug);
  const post = apiPost ? transformBlogPost(apiPost) : mockBlogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostSchema post={post} />
      <BlogPostPageClient post={post} />
    </>
  );
}
