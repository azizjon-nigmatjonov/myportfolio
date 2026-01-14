import { Portfolio } from "@/types/portfolio";
import { MyInfo } from "@/types/auth";
import { ExperienceData } from "@/types/experience";
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
