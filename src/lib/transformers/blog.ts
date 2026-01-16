import { BlogApiResponse, BlogPost, ContentBlock } from "@/types/blog";

/**
 * Transform API blog post response to component blog post
 */
export function transformBlogPost(apiPost: BlogApiResponse): BlogPost {
  return {
    id: apiPost.id || apiPost._id,
    slug: apiPost.slug,
    title: apiPost.title,
    excerpt: apiPost.excerpt,
    author: {
      name: apiPost.author.name,
      avatar: apiPost.author.avatar,
    },
    publishedAt: apiPost.publishedAt,
    updatedAt: apiPost.updatedAt,
    readTime: apiPost.readTime,
    tags: apiPost.tags || [],
    category: apiPost.category,
    featuredImage: apiPost.featuredImage,
    content: apiPost.content || [],
    views: apiPost.views || 0,
    likes: apiPost.likes || 0,
  };
}
