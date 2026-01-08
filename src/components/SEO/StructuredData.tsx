import { Portfolio } from "@/types/portfolio";
import { MyInfo } from "@/types/auth";
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

export function PersonSchema({ person }: PersonSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name || "Azizjon Nigmatjonov",
    jobTitle: "Frontend Engineer",
    description: person.about_me || "Frontend Engineer",
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
    description: article.description,
    url: getCanonicalUrl(`/project/${article.id}`),
    author: {
      "@type": "Person",
      name: "Azizjon Nigmatjonov",
    },
  };

  const images = [
    normalizeImageUrl(article.showing_image_url),
    normalizeImageUrl(article.showing_inner_image_url),
  ].filter(Boolean);
  
  if (images.length > 0) {
    schema.image = images;
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
