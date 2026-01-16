"use client";
import { memo } from "react";
import Image from "next/image";
import { BlogPost, ContentBlock } from "@/types/blog";
import ContentBlockRenderer from "./ContentBlockRenderer";

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = memo(function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="prose prose-lg max-w-none">
        {post.content.map((block) => (
          <ContentBlockRenderer key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
});

export default BlogPostContent;
