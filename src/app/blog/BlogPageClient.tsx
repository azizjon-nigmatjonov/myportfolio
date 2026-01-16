"use client";
import { memo } from "react";
import HeaderUI from "@/components/features/all/components/header/HeaderUI";
import FooterUI from "@/components/features/all/components/footer/FooterUI";
import { useMyInfo } from "@/store/auth";
import { MyInfo } from "@/types/auth";
import { BlogPost } from "@/types/blog";
import BlogPostCard from "@/components/features/blog/components/BlogPostCard";
import BlogHeader from "@/components/features/blog/components/BlogHeader";

interface BlogPageClientProps {
  initialPosts: BlogPost[];
}

const BlogPageClient = memo(function BlogPageClient({ 
  initialPosts 
}: BlogPageClientProps) {
  const myInfo = useMyInfo();

  return (
    <div className="pb-20">
      <HeaderUI myInfo={myInfo || ({} as MyInfo)} />
      
      <div className="container py-12 sm:py-20">
        <BlogHeader />
        
        <div className="mt-12 sm:mt-16 space-y-8">
          {initialPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      
      <FooterUI myInfo={myInfo || ({} as MyInfo)} />
    </div>
  );
});

export default BlogPageClient;
