import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { AuthProvider } from "@/components/AuthProvider";
import { getCanonicalUrl, normalizeImageUrl } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = getCanonicalUrl();
const defaultImage = normalizeImageUrl("/me.jpeg");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Azizjon Nigmatjonov",
    template: "%s | Azizjon Nigmatjonov - Frontend Engineer",
  },
  description: "Frontend Engineer and Software Developer portfolio. Explore my projects, skills, and experience in web development.",
  keywords: ["frontend engineer", "web developer", "software engineer", "portfolio", "react", "next.js", "typescript"],
  authors: [{ name: "Azizjon Nigmatjonov" }],
  creator: "Azizjon Nigmatjonov",
  publisher: "Azizjon Nigmatjonov",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Azizjon Nigmatjonov - Portfolio",
    title: "Azizjon Nigmatjonov - Frontend Engineer",
    description: "Frontend Engineer and Software Developer portfolio. Explore my projects, skills, and experience in web development.",
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: "Azizjon Nigmatjonov - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azizjon Nigmatjonov - Frontend Engineer",
    description: "Frontend Engineer and Software Developer portfolio. Explore my projects, skills, and experience in web development.",
    images: [defaultImage],
    creator: "@azizjon7", // Update with actual Twitter handle if available
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  verification: {
    // Add Google Search Console verification code if available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
