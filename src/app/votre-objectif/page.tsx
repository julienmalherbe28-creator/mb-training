import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { objectifHero, objectifItems, objectifCta } from "@/content/objectif";

export const metadata: Metadata = generatePageMetadata({
  title: `Votre objectif running — 10 km, semi, marathon, trail | ${brand.name}`,
  description:
    "Préparez votre 10 km, semi-marathon, marathon ou trail avec un coach running personnalisé à Chartres. Programmes sur-mesure en Eure-et-Loir et Centre-Val de Loire.",
  slug: "votre-objectif",
});

export default function VotreObjectifPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={objectifHero.eyebrow}
            title={objectifHero.title}
            accent={objectifHero.titleAccent}
            subtitle={objectifHero.subtitle}
            center
            dark
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {objectifItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-inter text-sm px-4 py-2 rounded-full border border-white/20 text-white/60 hover:border-brand-orange hover:text-brand-orange transition-colors duration-150"
              >
                {item.emoji} {item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Objectifs (alternés clair/foncé) ─────────────────────── */}
      {objectifItems.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className={`section-padding ${item.dark ? "bg-brand-dark text-white" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Contenu */}
              <div className="flex flex-col gap-6">
                <SectionTitle
                  eyebrow={item.eyebrow}
                  title={item.title}
                  dark={item.dark}
                />
                <p className={`font-inter leading-relaxed ${item.dark ? "text-white/70" : "text-gray-600"}`}>
                  {item.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="text-brand-orange flex-shrink-0 font-bold mt-0.5">✓</span>
                      <span className={`font-inter text-sm leading-relaxed ${item.dark ? "text-white/80" : "text-gray-700"}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/contact" variant="primary" size="md">
                    {item.cta}
                  </Button>
                  <span className={`font-inter text-sm ${item.dark ? "text-white/40" : "text-gray-400"}`}>
                    Préparation : {item.duration}
                  </span>
                </div>
              </div>

              {/* Fiche récap */}
              <div className={`rounded-card p-8 flex flex-col gap-6 ${item.dark ? "bg-white/5 border border-white/10" : "bg-brand-warm"}`}>
                <span className="text-6xl">{item.emoji}</span>
                <p className={`font-bebas text-4xl leading-none ${item.dark ? "text-white" : "text-brand-dark"}`}>
                  {item.title}
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Durée de préparation", value: item.duration },
                    { label: "Niveau requis", value: item.level },
                    { label: "Suivi", value: "Hebdomadaire" },
                    { label: "Format", value: "Présentiel ou à distance" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between items-center">
                        <span className={`font-inter text-sm ${item.dark ? "text-white/50" : "text-gray-500"}`}>{row.label}</span>
                        <span className={`font-inter text-sm font-semibold ${item.dark ? "text-white" : "text-brand-dark"}`}>{row.value}</span>
                      </div>
                      <div className={`h-px mt-3 ${item.dark ? "bg-white/10" : "bg-gray-200"}`} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            {objectifCta.title}{" "}
            <span className="font-caveat text-brand-orange italic">{objectifCta.titleAccent}</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">{objectifCta.subtitle}</p>
          <Button href={objectifCta.button.href} variant="primary" size="lg">
            {objectifCta.button.label}
          </Button>
        </div>
      </section>

    </div>
  );
}
