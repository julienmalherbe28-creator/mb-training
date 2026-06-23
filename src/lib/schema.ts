import { brand } from "./brand";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org", "@type": "LocalBusiness",
    name: brand.name, description: brand.promise, url: brand.site.url, email: brand.contact.email,
    address: { "@type": "PostalAddress", addressLocality: brand.location.city, addressRegion: brand.location.department, addressCountry: "FR" },
    geo: { "@type": "GeoCoordinates", latitude: 48.4469, longitude: 1.4895 },
    areaServed: brand.location.serviceAreas.map((area) => ({ "@type": "City", name: area })),
    sameAs: [brand.social.instagram, brand.social.linkedin, brand.social.strava].filter(Boolean),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org", "@type": "Person",
    name: "Matthieu B.", jobTitle: "Coach Running & Trail",
    worksFor: { "@type": "Organization", name: brand.name },
    address: { "@type": "PostalAddress", addressLocality: brand.location.city, addressRegion: brand.location.department },
  };
}

export interface FaqItem { question: string; answer: string; }
export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
}
