import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  entreprisesHero,
  entreprisesBenefits,
  entreprisesOffres,
  entreprisesFormules,
  entreprisesProcess,
  entreprisesFaq,
} from "@/content/entreprises";

export const metadata: Metadata = generatePageMetadata({
  title: `Running en entreprise — Bien-être & team building | ${brand.name}`,
  description:
    "Programmes running bien-être et team building running pour les entreprises de l'Eure-et-Loir. Séances encadrées, événements sportifs sur-mesure. Coach running à Chartres.",
  slug: "entreprises",
});

export default function EntreprisesPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={entreprisesHero.eyebrow}
            title={entreprisesHero.title}
            accent={entreprisesHero.titleAccent}
            subtitle={entreprisesHero.subtitle}
            center
            dark
          />
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis
            </Button>
            <Button href="#nos-offres" variant="outline" size="lg">
              Découvrir l'offre
            </Button>
          </div>
        </div>
      </section>

      {/* ── Pourquoi le running en entreprise ─────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Les bénéfices"
            title="Pourquoi le running"
            accent="en entreprise ?"
            center
            className="mb-12"
          />
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entreprisesBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-4 p-6 bg-white rounded-card border border-gray-100 shadow-sm"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="font-bebas text-xl text-brand-dark">{benefit.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Nos offres ──────────────────────────────────────────────── */}
      <section id="nos-offres" className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Ce qu'on propose"
            title="Deux formats,"
            accent="un seul objectif"
            subtitle="Bien-être individuel ou cohésion collective — les deux approches se complètent et peuvent être combinées."
            center
            dark
            className="mb-14"
          />
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {entreprisesOffres.map((offre) => (
              <div
                key={offre.title}
                className="rounded-card p-8 bg-white/5 border border-white/10 flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{offre.icon}</span>
                  <div>
                    <span className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-orange">
                      {offre.label}
                    </span>
                    <h3 className="font-bebas text-2xl text-white">{offre.title}</h3>
                  </div>
                </div>
                <p className="font-inter text-sm text-white/70 leading-relaxed">{offre.description}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {offre.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-brand-orange flex-shrink-0 font-bold mt-0.5">✓</span>
                      <span className="font-inter text-sm text-white/70 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-inter text-xs text-brand-orange/70 border-t border-white/10 pt-4 mt-2">
                  🕐 {offre.duration}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Formules ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Les formules"
            title="Sur-mesure,"
            accent="sur devis"
            subtitle="Chaque entreprise est différente. Le devis est établi selon votre effectif, votre fréquence et vos objectifs."
            center
            className="mb-12"
          />
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {entreprisesFormules.map((formule) => (
              <div
                key={formule.title}
                className={`rounded-card p-8 flex flex-col gap-5 border-2 ${
                  formule.highlighted
                    ? "bg-brand-dark text-white border-brand-orange ring-2 ring-brand-orange ring-offset-2"
                    : "bg-brand-warm text-brand-dark border-transparent"
                }`}
              >
                {formule.highlighted && (
                  <span className="self-start font-inter text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange text-white">
                    Le plus choisi
                  </span>
                )}
                <div>
                  <h3 className={`font-bebas text-3xl ${formule.highlighted ? "text-white" : "text-brand-dark"}`}>
                    {formule.title}
                  </h3>
                  <p className={`font-inter text-sm mt-2 leading-relaxed ${formule.highlighted ? "text-white/70" : "text-gray-600"}`}>
                    {formule.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {formule.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-orange flex-shrink-0 font-bold mt-0.5">✓</span>
                      <span className={`font-inter text-sm leading-relaxed ${formule.highlighted ? "text-white/80" : "text-gray-700"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={`border-t pt-5 mt-2 ${formule.highlighted ? "border-white/20" : "border-gray-200"}`}>
                  <p className={`font-bebas text-2xl mb-3 ${formule.highlighted ? "text-white" : "text-brand-dark"}`}>
                    Sur devis
                  </p>
                  <Button
                    href="/contact"
                    variant={formule.highlighted ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    Demander un devis
                  </Button>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Comment ça se passe ─────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Le processus"
            title="Simple,"
            accent="rapide, efficace"
            center
            className="mb-14"
          />
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entreprisesProcess.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <span className="font-bebas text-white text-2xl">{step.number}</span>
                </div>
                <h3 className="font-bebas text-2xl text-brand-dark">{step.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Vous avez"
            accent="des questions ?"
            center
            className="mb-10"
          />
          <Accordion items={entreprisesFaq} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            Parlons de{" "}
            <span className="font-caveat text-brand-orange italic">votre projet</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">
            Un échange de 20 minutes suffit pour cerner vos besoins et vous faire une proposition adaptée. Gratuit, sans engagement.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Prendre contact
          </Button>
        </div>
      </section>

    </div>
  );
}
