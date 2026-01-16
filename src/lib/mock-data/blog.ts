import { BlogPost, ContentBlock } from "@/types/blog";

export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-modern-web-applications-with-nextjs",
    title: "Building Modern Web Applications with Next.js 14",
    excerpt: "Explore the latest features in Next.js 14 and learn how to build performant, SEO-friendly web applications with React Server Components and the App Router.",
    author: {
      name: "Azizjon Nigmatjonov",
      avatar: "/me.jpeg",
    },
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: 8,
    tags: ["Next.js", "React", "Web Development", "SSR"],
    category: "Web Development",
    featuredImage: "https://i.ibb.co/whHyJXxQ/1768381644936-2025-12-10-10-27-51-jpg.jpg",
    content: [
      {
        id: "1",
        type: "paragraph",
        content: "Next.js 14 has revolutionized how we build web applications. With the introduction of React Server Components and the App Router, developers can now create more efficient, scalable applications with better performance and SEO.",
      },
      {
        id: "2",
        type: "heading",
        content: "What's New in Next.js 14",
        level: 2,
      },
      {
        id: "3",
        type: "paragraph",
        content: "The latest version brings several groundbreaking features that make development faster and applications more performant. Let's dive into the key improvements.",
      },
      {
        id: "4",
        type: "image",
        content: "",
        imageUrl: "https://i.ibb.co/whHyJXxQ/1768381644936-2025-12-10-10-27-51-jpg.jpg",
        imageAlt: "Next.js 14 Architecture",
      },
      {
        id: "4.5",
        type: "video",
        content: "",
        videoUrl: "https://youtu.be/H19-at0u354?si=PhDmTNG600AFT0fR",
        videoTitle: "Next.js 14 Tutorial - Getting Started",
      },
      {
        id: "5",
        type: "heading",
        content: "React Server Components",
        level: 3,
      },
      {
        id: "6",
        type: "paragraph",
        content: "Server Components allow you to build UI that can leverage server infrastructure. By default, components in the App Router are Server Components, which means they run on the server and can directly access backend resources.",
      },
      {
        id: "7",
        type: "code",
        content: `// app/posts/page.tsx
export default async function PostsPage() {
  const posts = await fetchPosts(); // Runs on server
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}`,
        language: "typescript",
      },
      {
        id: "8",
        type: "paragraph",
        content: "This approach reduces the JavaScript bundle size sent to the client, improving initial page load times and overall performance.",
      },
      {
        id: "8.5",
        type: "video",
        content: "",
        videoUrl: "https://youtu.be/H19-at0u354?si=PhDmTNG600AFT0fR",
        videoTitle: "Understanding React Server Components",
      },
      {
        id: "9",
        type: "heading",
        content: "The App Router",
        level: 3,
      },
      {
        id: "10",
        type: "paragraph",
        content: "The new App Router provides a more intuitive file-system based routing system with support for layouts, loading states, error handling, and more.",
      },
      {
        id: "11",
        type: "quote",
        content: "The App Router is the future of Next.js. It provides a better developer experience and enables new patterns that weren't possible before.",
      },
      {
        id: "12",
        type: "heading",
        content: "Best Practices",
        level: 2,
      },
      {
        id: "13",
        type: "list",
        content: "Key practices for Next.js 14",
        items: [
          "Use Server Components by default",
          "Leverage streaming and Suspense for better UX",
          "Implement proper caching strategies",
          "Optimize images with next/image",
          "Use TypeScript for type safety",
        ],
      },
      {
        id: "14",
        type: "paragraph",
        content: "By following these practices, you can build applications that are not only fast but also maintainable and scalable.",
      },
    ],
    views: 1250,
    likes: 89,
  },
  {
    id: "2",
    slug: "mastering-typescript-in-react-applications",
    title: "Mastering TypeScript in React Applications",
    excerpt: "Learn advanced TypeScript patterns and best practices for building type-safe React applications that scale.",
    author: {
      name: "Azizjon Nigmatjonov",
      avatar: "/me.jpeg",
    },
    publishedAt: "2024-01-10T14:30:00Z",
    readTime: 12,
    tags: ["TypeScript", "React", "Type Safety"],
    category: "Programming",
    featuredImage: "https://i.ibb.co/whHyJXxQ/1768381644936-2025-12-10-10-27-51-jpg.jpg",
    content: [
      {
        id: "1",
        type: "paragraph",
        content: "TypeScript has become the standard for building large-scale React applications. Its type system helps catch errors early, improves developer experience, and makes codebases more maintainable.",
      },
      {
        id: "2",
        type: "heading",
        content: "Advanced Type Patterns",
        level: 2,
      },
      {
        id: "3",
        type: "paragraph",
        content: "Understanding advanced TypeScript patterns can significantly improve how you structure your React components and hooks.",
      },
      {
        id: "3.5",
        type: "video",
        content: "",
        videoUrl: "https://youtu.be/H19-at0u354?si=PhDmTNG600AFT0fR",
        videoTitle: "TypeScript Advanced Patterns Tutorial",
      },
      {
        id: "4",
        type: "code",
        content: `// Generic component with proper typing
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}`,
        language: "typescript",
      },
      {
        id: "5",
        type: "paragraph",
        content: "This pattern allows you to create reusable components that maintain type safety across different data types.",
      },
    ],
    views: 980,
    likes: 67,
  },
  {
    id: "3",
    slug: "optimizing-react-performance-tips-and-tricks",
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Discover practical techniques to improve your React application's performance, from memoization to code splitting.",
    author: {
      name: "Azizjon Nigmatjonov",
      avatar: "/me.jpeg",
    },
    publishedAt: "2024-01-05T09:15:00Z",
    readTime: 6,
    tags: ["React", "Performance", "Optimization"],
    category: "Web Development",
    content: [
      {
        id: "1",
        type: "paragraph",
        content: "Performance optimization is crucial for creating smooth user experiences. In this article, we'll explore various techniques to make your React applications faster and more efficient.",
      },
      {
        id: "2",
        type: "heading",
        content: "Memoization Strategies",
        level: 2,
      },
      {
        id: "3",
        type: "paragraph",
        content: "React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders and computations.",
      },
      {
        id: "3.5",
        type: "video",
        content: "",
        videoUrl: "https://youtu.be/H19-at0u354?si=PhDmTNG600AFT0fR",
        videoTitle: "React Performance Optimization Techniques",
      },
      {
        id: "4",
        type: "quote",
        content: "Premature optimization is the root of all evil. But when you need it, React provides excellent tools.",
      },
    ],
    views: 750,
    likes: 45,
  },
];
