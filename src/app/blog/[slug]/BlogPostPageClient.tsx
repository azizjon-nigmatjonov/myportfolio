"use client";
import { memo } from "react";
import HeaderUI from "@/components/features/all/components/header/HeaderUI";
import FooterUI from "@/components/features/all/components/footer/FooterUI";
import { useMyInfo } from "@/store/auth";
import { MyInfo } from "@/types/auth";
import { BlogPost } from "@/types/blog";
import BlogPostContent from "@/components/features/blog/components/BlogPostContent";
import BlogPostHeader from "@/components/features/blog/components/BlogPostHeader";

interface BlogPostPageClientProps {
  post: BlogPost;
}

const BlogPostPageClient = memo(function BlogPostPageClient({ 
  post 
}: BlogPostPageClientProps) {
  const myInfo = useMyInfo();

  return (
    <div className="pb-20">
      <HeaderUI myInfo={myInfo || ({} as MyInfo)} />
      
      <article className="container py-12 sm:py-20">
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
      </article>
      
      <FooterUI myInfo={myInfo || ({} as MyInfo)} />
    </div>
  );
});

export default BlogPostPageClient;
