"use client";
import { memo } from "react";

const BlogHeader = memo(function BlogHeader() {
  return (
    <header className="text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
      <p className="text-foreground/70 text-lg max-w-2xl">
        Thoughts, tutorials, and insights about web development, React, and modern frontend technologies.
      </p>
    </header>
  );
});

export default BlogHeader;
