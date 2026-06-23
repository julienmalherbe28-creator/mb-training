import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { methodeHero, methodeSteps, methodeVsGeneric, methodeTools } from "@/content/methode";

export const metadata: Metadata = generatePageMetadata({
  title: `La méthode de coaching running | ${brand.name}`,
  description:
    "Découvrez la méthode MB Training : diagnostic, programme personnalisé, suivi hebdomadaire et préparation course. Coach running à Chartres, Eure-et-Loir.",
  slug: "la-methode",
});

export default function LaMethodePage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={methodeHero.eyebrow}
            title={methodeHero.title}
            accent={methodeHero.titleAccent}
            subtitle={methodeHero.subtitle}
            center
            dark
          />
        </div>
      </section>

      {/* ── Les 4 étapes ──────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Le processus"
            title="4 étapes,"
            accent="du diagnostic à la ligne d'arrivée"
            center
            className="mb-16"
          />
          <div className="flex flex-col gap-0 max-w-4xl mx-auto">
            {methodeSteps.map((step, i) => (
              <div key={step.number} className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12">
                {/* Numéro + ligne verticale */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                    <span className="font-bebas text-white text-xl">{step.number}</span>
                  </div>
                  {i < methodeSteps.length - 1 && (
                    <div className="hidden lg:block w-px flex-1 bg-gray-300 ml-7 my-1" />
                  )}
                </div>
                {/* Contenu */}
                <div className="pb-14">
                  <p className="font-inter text-xs text-brand-orange font-semibold tracking-widest uppercase mb-1">
                    {step.subtitle}
                  </p>
                  <h3 className="font-bebas text-3xl text-brand-dark mb-4">{step.title}</h3>
                  <p className="font-inter text-gray-600 leading-relaxed mb-5">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-brand-orange flex-shrink-0 font-bold mt-0.5">✓</span>
                        <span className="font-inter text-sm text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi pas un plan générique ────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={methodeVsGeneric.eyebrow}
            title={methodeVsGeneric.title}
            accent={methodeVsGeneric.titleAccent}
            center
            dark
            className="mb-14"
          />
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodeVsGeneric.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-4">
                <p className="font-inter text-xs font-semibold tracking-widest uppercase text-white/30">
                  {item.label}
                </p>
                {/* Plan générique */}
                <div className="rounded-card p-5 bg-white/5 border border-white/10 flex-1">
                  <p className="font-inter text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">Plan générique</p>
                  <p className="font-inter text-sm text-white/50 leading-relaxed">{item.generic}</p>
                </div>
                {/* MB Training */}
                <div className="rounded-card p-5 bg-brand-orange/15 border border-brand-orange/30 flex-1">
                  <p className="font-inter text-xs font-semibold text-brand-orange uppercase tracking-widest mb-2">MB Training</p>
                  <p className="font-inter text-sm text-white/80 leading-relaxed">{item.personalized}</p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Les outils ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={methodeTools.eyebrow}
            title={methodeTools.title}
            accent={methodeTools.titleAccent}
            center
            className="mb-12"
          />
          <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodeTools.items.map((tool) => (
              <div key={tool.title} className="rounded-card p-6 bg-brand-warm flex flex-col gap-3">
                <span className="text-3xl">{tool.icon}</span>
                <h3 className="font-bebas text-xl text-brand-dark">{tool.title}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            Prêt à démarrer{" "}
            <span className="font-caveat text-brand-orange italic">l'aventure ?</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">
            Premier échange gratuit de 30 minutes — sans engagement, pour voir si on se correspond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">Me contacter</Button>
            <Button href="/coaching-individuel" variant="outline" size="lg">Voir les formules</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
