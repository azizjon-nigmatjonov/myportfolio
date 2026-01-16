"use client";
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
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

const BlogPostCard = memo(function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group">
      <Link 
        href={`/blog/${post.slug}`}
        className="block border-b border-foreground/10 pb-8 hover:border-foreground/20 transition-colors"
      >
        <div className="grid sm:grid-cols-12 gap-6 items-start">
          {/* Content */}
          <div className="sm:col-span-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-foreground/60">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span>{post.author.name}</span>
              <span>·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold group-hover:text-foreground/80 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-foreground/70 text-lg leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 text-foreground/70 border border-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="sm:col-span-4 relative w-full h-48 sm:h-40 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 300px"
              />
            </div>
          )}
        </div>
      </Link>
    </article>
  );
});

export default BlogPostCard;
