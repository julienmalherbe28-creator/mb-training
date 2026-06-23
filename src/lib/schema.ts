import { brand } from "./brand";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: brand.promise,
    url: brand.site.url,
    email: brand.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.location.city,
      addressRegion: brand.location.department,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.4469,
      longitude: 1.4895,
    },
    areaServed: brand.location.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [
      brand.social.instagram,
      brand.social.linkedin,
      brand.social.strava,
    ].filter(Boolean),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matthieu Brébant",
    jobTitle: "Coach Running & Trail",
    worksFor: {
      "@type": "Organization",
      name: brand.name,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.location.city,
      addressRegion: brand.location.department,
    },
  };
}

export function articleSchema(params: { title: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    author: {
      "@type": "Person",
      name: "Matthieu Brébant",
      jobTitle: "Coach Running & Trail",
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.site.url,
    },
    url: `${brand.site.url}/conseils-running/${params.slug}`,
    inLanguage: "fr",
    isPartOf: {
      "@type": "Blog",
      name: "Conseils Running — MB Training",
      url: `${brand.site.url}/conseils-running`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
