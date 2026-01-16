"use client";
import { memo } from "react";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });
};

const BlogPostHeader = memo(function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        {post.title}
      </h1>
      
      <div className="flex items-center gap-4 mb-8 text-foreground/70">
        {post.author.avatar && (
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
        <div className="flex-1">
          <div className="font-medium text-foreground">{post.author.name}</div>
          <div className="text-sm flex items-center gap-3">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>·</span>
            <span>{post.readTime} min read</span>
            {post.views && (
              <>
                <span>·</span>
                <span>{post.views} views</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium rounded-full bg-foreground/5 text-foreground/70 border border-foreground/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {post.featuredImage && (
        <div className="relative w-full h-96 sm:h-[500px] rounded-lg overflow-hidden mb-12">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 1200px"
            priority
          />
        </div>
      )}
    </header>
  );
});

export default BlogPostHeader;
