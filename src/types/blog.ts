export type ContentBlockType = "paragraph" | "heading" | "image" | "video" | "quote" | "code" | "list" | "link";

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string; // YouTube or other video URLs
  videoTitle?: string; // Optional title/caption for video
  level?: number; // For headings (1-6)
  language?: string; // For code blocks
  items?: string[]; // For lists
  linkTitle?: string; // For link blocks
  linkUrl?: string; // For link blocks
  linkImage?: string; // Optional image for link blocks
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // in minutes
  tags: string[];
  category?: string;
  featuredImage?: string;
  content: ContentBlock[];
  views?: number;
  likes?: number;
}

export interface BlogApiResponse {
  _id: string;
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  tags: string[];
  category?: string;
  featuredImage?: string;
  content: ContentBlock[];
  views?: number;
  likes?: number;
  createdAt?: string;
}
