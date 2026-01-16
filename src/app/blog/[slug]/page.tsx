import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";
import { fetchBlogPostById, fetchBlogPosts } from "@/lib/api-server";
import { generateBlogPostMetadata } from "./metadata";
import { BlogPostSchema } from "@/components/SEO/StructuredData";
import { transformBlogPost } from "@/lib/transformers/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const apiPost = await fetchBlogPostById(slug);
  
  if (!apiPost) {
    return {
      title: "Post Not Found",
    };
  }

  const post = transformBlogPost(apiPost);
  return generateBlogPostMetadata(post);
}

export async function generateStaticParams() {
  const posts = await fetchBlogPosts();
  const transformedPosts = posts.map(transformBlogPost);
  
  return transformedPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const apiPost = await fetchBlogPostById(slug);

  if (!apiPost) {
    notFound();
  }

  const post = transformBlogPost(apiPost);

  return (
    <>
      <BlogPostSchema post={post} />
      <BlogPostPageClient post={post} />
    </>
  );
}
