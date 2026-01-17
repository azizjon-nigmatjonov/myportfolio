import { Portfolio } from "@/types/portfolio";
import { MyInfo } from "@/types/auth";
import { 
  AboutMeApiResponse, 
  ContactApiResponse, 
  ExperienceApiResponse, 
  SkillApiResponse 
} from "@/types/experience";
import { BlogApiResponse } from "@/types/blog";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Server-side API functions for fetching data
 * These use native fetch with Next.js caching
 */

export async function fetchPortfolioById(id: string): Promise<Portfolio | null> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/portfolios/${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return null;
  }
}

export async function fetchPortfolios(): Promise<Portfolio[]> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/portfolios`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return [];
  }
}

export async function fetchMyInfo(): Promise<MyInfo | null> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}

/**
 * Experience API functions
 */

export async function fetchAboutMe(): Promise<AboutMeApiResponse | null> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/about-me`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching about me:", error);
    return null;
  }
}

export async function fetchContacts(): Promise<ContactApiResponse[]> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
}

export async function fetchExperiences(): Promise<ExperienceApiResponse[]> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/experiences`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
}

export async function fetchSkills(): Promise<SkillApiResponse[]> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/skills`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}

/**
 * Blog API functions
 */

export async function fetchBlogPosts(): Promise<BlogApiResponse[]> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return [];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/blog/posts`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function fetchBlogPostById(idOrSlug: string): Promise<BlogApiResponse | null> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_BASE_URL is not set");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${idOrSlug}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
