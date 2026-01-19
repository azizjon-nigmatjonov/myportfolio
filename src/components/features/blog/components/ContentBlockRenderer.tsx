"use client";
import { memo } from "react";
import Image from "next/image";
import { ContentBlock } from "@/types/blog";
import { getYouTubeEmbedUrl, isYouTubeUrl } from "@/lib/utils/video";

interface ContentBlockRendererProps {
  block: ContentBlock;
}

const ContentBlockRenderer = memo(function ContentBlockRenderer({ 
  block 
}: ContentBlockRendererProps) {
  
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-foreground/90">
          {block.content}
        </p>
      );

    case "heading":
      const level = block.level || 2;
      const headingClasses = {
        1: "text-4xl sm:text-5xl font-bold mb-6 mt-12",
        2: "text-3xl sm:text-4xl font-bold mb-5 mt-10",
        3: "text-2xl sm:text-3xl font-bold mb-4 mt-8",
        4: "text-xl sm:text-2xl font-semibold mb-4 mt-6",
        5: "text-lg sm:text-xl font-semibold mb-3 mt-5",
        6: "text-base sm:text-lg font-semibold mb-3 mt-4",
      };
      
      const HeadingComponent = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      
      switch (HeadingComponent) {
        case 'h1':
          return <h1 className={headingClasses[1]}>{block.content}</h1>;
        case 'h2':
          return <h2 className={headingClasses[2]}>{block.content}</h2>;
        case 'h3':
          return <h3 className={headingClasses[3]}>{block.content}</h3>;
        case 'h4':
          return <h4 className={headingClasses[4]}>{block.content}</h4>;
        case 'h5':
          return <h5 className={headingClasses[5]}>{block.content}</h5>;
        case 'h6':
          return <h6 className={headingClasses[6]}>{block.content}</h6>;
        default:
          return <h2 className={headingClasses[2]}>{block.content}</h2>;
      }

    case "image":
      if (!block.imageUrl) return null;
      
      return (
        <figure className="my-10">
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={block.imageUrl}
              alt={block.imageAlt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            />
          </div>
          {block.imageAlt && (
            <figcaption className="text-sm text-foreground/60 text-center mt-3">
              {block.imageAlt}
            </figcaption>
          )}
        </figure>
      );

    case "video":
      if (!block.videoUrl) return null;

      const embedUrl = isYouTubeUrl(block.videoUrl) 
        ? getYouTubeEmbedUrl(block.videoUrl)
        : block.videoUrl;

      if (!embedUrl) return null;

      return (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-foreground/5">
            <iframe
              src={embedUrl}
              title={block.videoTitle || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {block.videoTitle && (
            <figcaption className="text-sm text-foreground/60 text-center mt-3">
              {block.videoTitle}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-foreground/30 pl-6 py-2 my-8 italic text-xl sm:text-2xl text-foreground/80">
          {block.content}
        </blockquote>
      );

    case "code":
      return (
        <div className="my-8">
          <pre className="bg-foreground/5 border border-foreground/10 rounded-lg p-4 sm:p-6 overflow-x-auto">
            <code className="text-sm sm:text-base font-mono text-foreground/90">
              {block.content}
            </code>
          </pre>
          {block.language && (
            <div className="text-xs text-foreground/50 mt-2 text-right">
              {block.language}
            </div>
          )}
        </div>
      );

    case "list":
      return (
        <ul className="my-6 space-y-3 list-disc list-inside text-lg sm:text-xl text-foreground/90">
          {block.items?.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
});

export default ContentBlockRenderer;
