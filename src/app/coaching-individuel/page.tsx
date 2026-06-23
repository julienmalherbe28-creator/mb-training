import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { TestimonialCard } from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { coachingHero, coachingIncludes, coachingFormules, coachingFaq } from "@/content/coaching";
import { testimonialsContent } from "@/content/home";

export const metadata: Metadata = generatePageMetadata({
  title: `Coaching running individuel à Chartres | ${brand.name}`,
  description:
    "Coaching running individuel personnalisé à Chartres, Eure-et-Loir. Programme sur-mesure, suivi hebdomadaire, préparation 10 km, semi-marathon, marathon et trail.",
  slug: "coaching-individuel",
});

export default function CoachingIndividuelPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={coachingHero.eyebrow}
            title={coachingHero.title}
            accent={coachingHero.titleAccent}
            subtitle={coachingHero.subtitle}
            center
            dark
          />
          <div className="flex justify-center mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Commencer par un échange gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* ── Ce qui est inclus ─────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={coachingIncludes.eyebrow}
            title={coachingIncludes.title}
            accent={coachingIncludes.titleAccent}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coachingIncludes.items.map((item) => (
              <div key={item.title} className="rounded-card p-6 bg-white flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bebas text-xl text-brand-dark mb-1">{item.title}</h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Les formules ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={coachingFormules.eyebrow}
            title={coachingFormules.title}
            accent={coachingFormules.titleAccent}
            subtitle={coachingFormules.subtitle}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {coachingFormules.items.map((formule) => (
              <div
                key={formule.name}
                className={`rounded-card p-8 flex flex-col gap-5 ${
                  formule.highlighted
                    ? "bg-brand-dark text-white ring-2 ring-brand-orange shadow-xl"
                    : "bg-brand-warm border border-gray-200"
                }`}
              >
                <span className={`self-start font-inter text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${
                  formule.highlighted
                    ? "bg-brand-orange text-white"
                    : "bg-white text-gray-500 border border-gray-200"
                }`}>
                  {formule.tag}
                </span>

                <div>
                  <h3 className={`font-bebas text-3xl ${formule.highlighted ? "text-white" : "text-brand-dark"}`}>
                    {formule.name}
                  </h3>
                  <p className="font-bebas text-2xl mt-1 text-brand-orange">
                    {formule.price}
                  </p>
                </div>

                <p className={`font-inter text-sm leading-relaxed ${formule.highlighted ? "text-white/70" : "text-gray-600"}`}>
                  {formule.description}
                </p>

                <ul className="flex flex-col gap-2 flex-1">
                  {formule.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-orange flex-shrink-0 font-bold mt-0.5">✓</span>
                      <span className={`font-inter text-sm ${formule.highlighted ? "text-white/80" : "text-gray-700"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={formule.highlighted ? "primary" : "secondary"}
                  size="md"
                  className="w-full mt-2"
                >
                  Me contacter
                </Button>
              </div>
            ))}
          </div>
          <p className="font-inter text-sm text-gray-400 text-center mt-6">
            Toutes les formules incluent le diagnostic initial gratuit de 30 minutes.
          </p>
        </div>
      </section>

      {/* ── Témoignages ───────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={testimonialsContent.eyebrow}
            title={testimonialsContent.title}
            accent={testimonialsContent.titleAccent}
            center
            dark
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsContent.items.map((t) => (
              <TestimonialCard
                key={t.name}
                quote={t.quote}
                name={t.name}
                age={t.age}
                city={t.city}
                stars={t.stars}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Vous avez des"
            accent="questions ?"
            center
            className="mb-10"
          />
          <div className="bg-white rounded-card px-6">
            <Accordion items={coachingFaq} />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            On commence{" "}
            <span className="font-caveat text-brand-orange italic">quand vous voulez.</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">
            Premier échange gratuit de 30 minutes. Pas d&apos;engagement. On discute, et vous décidez.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Prendre contact gratuitement
          </Button>
        </div>
      </section>

    </div>
  );
}
