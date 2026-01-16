import { Portfolio } from "@/types/portfolio";
import { MyInfo } from "@/types/auth";
import { ExperienceData } from "@/types/experience";
import { BlogPost } from "@/types/blog";
import { getCanonicalUrl, normalizeImageUrl } from "@/lib/seo";

interface PersonSchemaProps {
  person: MyInfo;
}

interface ArticleSchemaProps {
  article: Portfolio;
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

interface ExperienceSchemaProps {
  data: ExperienceData;
}

interface PortfolioCollectionSchemaProps {
  portfolios: Portfolio[];
}

interface BlogCollectionSchemaProps {
  posts: BlogPost[];
}

interface BlogPostSchemaProps {
  post: BlogPost;
}

export function PersonSchema({ person }: PersonSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name || "Azizjon Nigmatjonov",
    jobTitle: "Frontend Engineer",
    description: person.about_me || "Frontend Developer with 4+ years of professional experience, specializing in React, TypeScript, React Native, Vue.js and Node.js ecosystems.",
    image: normalizeImageUrl(person.profilePicture),
    url: getCanonicalUrl(),
  };

  const sameAs = [
    person.github_url,
    person.linkedin_url,
  ].filter(Boolean);
  
  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }
  
  if (person.email) {
    schema.email = person.email;
  }
  
  if (person.phone) {
    schema.telephone = person.phone;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: article.title,
    description: article.description || article.intro_statment || "",
    url: getCanonicalUrl(`/project/${article.id}`),
    author: {
      "@type": "Person",
      name: "Azizjon Nigmatjonov",
      jobTitle: "Frontend Engineer",
    },
  };

  // Collect all available images
  const allImages = [
    article.showing_image_url,
    article.showing_inner_image_url,
    article.problem_image_url,
    article.production_image_url_1,
    article.production_image_url_2,
    article.production_image_url_3,
    article.production_image_url_4,
  ].filter(Boolean).map(img => normalizeImageUrl(img));
  
  if (allImages.length > 0) {
    schema.image = allImages;
  }
  
  if (article.release_date || article.created_date) {
    schema.datePublished = article.release_date || article.created_date;
  }
  
  if (article.updated_at || article.created_at) {
    schema.dateModified = article.updated_at || article.created_at;
  }
  
  const keywords = [...(article.tags || []), ...(article.stack || [])];
  if (keywords.length > 0) {
    schema.keywords = keywords.join(", ");
  }
  
  if (article.category) {
    schema.about = {
      "@type": "Thing",
      name: article.category,
    };
  }

  // Add additional properties
  if (article.url) {
    schema.codeRepository = article.url;
  }

  if (article.stack && article.stack.length > 0) {
    schema.applicationCategory = "WebApplication";
    schema.softwareHelp = article.stack.map(tech => ({
      "@type": "SoftwareApplication",
      name: tech,
    }));
  }

  if (article.problem_statement) {
    schema.text = article.problem_statement;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.url),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ExperienceSchema({ data }: ExperienceSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Experience & Skills - Azizjon Nigmatjonov",
    description: data.aboutMe.content,
    url: getCanonicalUrl("/experience"),
    mainEntity: {
      "@type": "Person",
      name: "Azizjon Nigmatjonov",
      jobTitle: "Frontend Engineer",
      description: data.aboutMe.content,
      image: data.aboutMe.image ? normalizeImageUrl(data.aboutMe.image) : undefined,
      knowsAbout: data.skills.map((skill) => ({
        "@type": "Thing",
        name: skill.name,
      })),
      alumniOf: data.experiences.map((exp) => ({
        "@type": "Organization",
        name: exp.company,
      })),
    },
  };

  // Add work experience
  if (data.experiences.length > 0) {
    schema.mainEntity = {
      ...(schema.mainEntity as Record<string, unknown>),
      worksFor: data.experiences
        .filter((exp) => !exp.endDate)
        .map((exp) => ({
          "@type": "Organization",
          name: exp.company,
        })),
      hasOccupation: data.experiences.map((exp) => ({
        "@type": "Occupation",
        name: exp.position,
        occupationLocation: {
          "@type": "City",
          name: exp.location,
        },
        worksFor: {
          "@type": "Organization",
          name: exp.company,
        },
      })),
    };
  }

  // Add contact information
  const emailContact = data.contacts.find((c) => c.type === "email");
  const phoneContact = data.contacts.find((c) => c.type === "phone");
  const sameAs = data.contacts
    .filter((c) => c.type === "github" || c.type === "linkedin")
    .map((c) => c.url)
    .filter(Boolean) as string[];

  if (emailContact?.value) {
    schema.mainEntity = {
      ...(schema.mainEntity as Record<string, unknown>),
      email: emailContact.value,
    };
  }

  if (phoneContact?.value) {
    schema.mainEntity = {
      ...(schema.mainEntity as Record<string, unknown>),
      telephone: phoneContact.value,
    };
  }

  if (sameAs.length > 0) {
    schema.mainEntity = {
      ...(schema.mainEntity as Record<string, unknown>),
      sameAs,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PortfolioCollectionSchema({ portfolios }: PortfolioCollectionSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Projects - Azizjon Nigmatjonov",
    description: "A collection of web development projects and portfolio works by Azizjon Nigmatjonov, Frontend Engineer",
    url: getCanonicalUrl(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: portfolios.length,
      itemListElement: portfolios.map((portfolio, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          "@id": getCanonicalUrl(`/project/${portfolio.id}`),
          name: portfolio.title,
          description: portfolio.description || portfolio.intro_statment,
          image: portfolio.showing_image_url ? normalizeImageUrl(portfolio.showing_image_url) : undefined,
          url: getCanonicalUrl(`/project/${portfolio.id}`),
          author: {
            "@type": "Person",
            name: "Azizjon Nigmatjonov",
          },
          datePublished: portfolio.release_date || portfolio.created_date,
          dateModified: portfolio.updated_at || portfolio.created_at,
          keywords: [...(portfolio.tags || []), ...(portfolio.stack || [])].join(", "),
          about: portfolio.category ? {
            "@type": "Thing",
            name: portfolio.category,
          } : undefined,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogCollectionSchema({ posts }: BlogCollectionSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog - Azizjon Nigmatjonov",
    description: "Web development blog with articles about React, Next.js, TypeScript, and modern frontend technologies",
    url: getCanonicalUrl("/blog"),
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: getCanonicalUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
        image: post.author.avatar ? normalizeImageUrl(post.author.avatar) : undefined,
      },
      image: post.featuredImage ? normalizeImageUrl(post.featuredImage) : undefined,
      keywords: post.tags.join(", "),
      articleSection: post.category,
      wordCount: post.content.reduce((acc, block) => {
        if (block.type === "paragraph") {
          return acc + block.content.split(" ").length;
        }
        return acc;
      }, 0),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostSchema({ post }: BlogPostSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: getCanonicalUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.avatar ? normalizeImageUrl(post.author.avatar) : undefined,
    },
    publisher: {
      "@type": "Person",
      name: "Azizjon Nigmatjonov",
    },
    image: post.featuredImage ? normalizeImageUrl(post.featuredImage) : undefined,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content.reduce((acc, block) => {
      if (block.type === "paragraph") {
        return acc + block.content.split(" ").length;
      }
      return acc;
    }, 0),
    timeRequired: `PT${post.readTime}M`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
