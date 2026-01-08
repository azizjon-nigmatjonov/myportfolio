import { Portfolio } from "@/types/portfolio";
import { MyInfo } from "@/types/auth";

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
