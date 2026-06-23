import type { Metadata } from "next";
import { brand } from "./brand";

interface PageSeoOptions { title: string; description: string; slug?: string; image?: string; }

export function generatePageMetadata({ title, description, slug = "", image }: PageSeoOptions): Metadata {
  const url = `${brand.site.url}${slug ? `/${slug}` : ""}`;
  const ogImage = image ?? `${brand.site.url}/og-default.jpg`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: brand.name, locale: "fr_FR", type: "website", images: [{ url: ogImage, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
