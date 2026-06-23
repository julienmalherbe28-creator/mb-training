import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";
import { brand } from "@/lib/brand";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import HeroSection from "@/components/sections/HeroSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  conceptContent,
  goalsContent,
  testimonialsContent,
  methodContent,
  coachContent,
  faqContent,
  ctaContent,
} from "@/content/home";

export const metadata: Metadata = generatePageMetadata({
  title: `Coach running Chartres | ${brand.name}`,
  description:
    "Coach running et trail à Chartres (Eure-et-Loir). Préparation personnalisée 10 km, semi-marathon, marathon et trail. Suivi individuel en présentiel ou à distance en Centre-Val de Loire.",
});

export default function HomePage() {
  return (
    <>
      {/* Données structurées FAQ pour les moteurs de recherche et IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqContent.items)),
        }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Concept ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={conceptContent.eyebrow}
            title={conceptContent.title}
            accent={conceptContent.titleAccent}
            subtitle={conceptContent.subtitle}
            center
            className="mb-12"
          />
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conceptContent.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col gap-4 p-8 bg-white rounded-card shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-3xl" role="img" aria-label={pillar.title}>
                  {pillar.icon}
                </span>
                <h3 className="font-bebas text-2xl text-brand-dark">{pillar.title}</h3>
                <p className="font-inter text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Objectifs ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={goalsContent.eyebrow}
            title={goalsContent.title}
            accent={goalsContent.titleAccent}
            subtitle={goalsContent.subtitle}
            center
            dark
            className="mb-12"
          />
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goalsContent.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex flex-col gap-3 p-6 rounded-card border border-white/10 hover:border-brand-orange hover:bg-white/5 transition-all duration-200"
              >
                <span className="text-4xl" role="img" aria-label={item.label}>
                  {item.emoji}
                </span>
                <div>
                  <p className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-orange mb-1">
                    {item.tag}
                  </p>
                  <h3 className="font-bebas text-3xl text-white group-hover:text-brand-orange transition-colors">
                    {item.label}
                  </h3>
                </div>
                <p className="font-inter text-sm text-white/60 leading-relaxed">{item.description}</p>
                <span className="font-inter text-xs text-brand-orange mt-auto">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Témoignages ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={testimonialsContent.eyebrow}
            title={testimonialsContent.title}
            accent={testimonialsContent.titleAccent}
            center
            className="mb-12"
          />
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsContent.items.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Méthode ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionTitle
              eyebrow={methodContent.eyebrow}
              title={methodContent.title}
              accent={methodContent.titleAccent}
            />
            <div className="flex flex-col gap-6">
              {methodContent.steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <span className="font-bebas text-5xl text-brand-orange/30 leading-none min-w-[3rem]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bebas text-2xl text-brand-dark mb-1">{step.title}</h3>
                    <p className="font-inter text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
              <Button href={methodContent.cta.href} variant="primary" size="md" className="w-fit mt-2">
                {methodContent.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Le coach ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-lg">
              <Image
                src={coachContent.imageUrl}
                alt={coachContent.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
            </div>
            {/* Texte */}
            <div className="flex flex-col gap-6">
              <SectionTitle
                eyebrow={coachContent.eyebrow}
                title={coachContent.title}
                accent={coachContent.titleAccent}
              />
              <p className="font-inter text-gray-600 leading-relaxed">{coachContent.bio}</p>
              <ul className="flex flex-col gap-2">
                {coachContent.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 font-inter text-sm text-gray-700">
                    <span className="text-brand-orange mt-0.5 flex-shrink-0">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <Button href={coachContent.cta.href} variant="secondary" size="md" className="w-fit">
                {coachContent.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={faqContent.eyebrow}
            title={faqContent.title}
            accent={faqContent.titleAccent}
            center
            className="mb-10"
          />
          <Accordion items={faqContent.items} />
        </div>
      </section>

      {/* ── CTA final ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            {ctaContent.title}{" "}
            <span className="font-caveat text-brand-orange italic">{ctaContent.titleAccent}</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">{ctaContent.subtitle}</p>
          <Button href={ctaContent.button.href} variant="primary" size="lg">
            {ctaContent.button.label}
          </Button>
        </div>
      </section>
    </>
  );
}
