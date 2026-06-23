import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/sections/ContactForm";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = generatePageMetadata({
  title: `Contact — Coach running Chartres | ${brand.name}`,
  description:
    "Contactez Matthieu Brébant, coach running et trail à Chartres. Premier échange gratuit de 30 minutes pour parler de votre objectif en Eure-et-Loir.",
  slug: "contact",
});

export default function ContactPage() {
  const { hero, promises } = contactContent;

  return (
    <div>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* ── Colonne gauche — Info ────────────────────────────────── */}
        <div className="bg-brand-dark text-white flex flex-col justify-center px-8 md:px-16 pt-36 pb-16 lg:pt-44 lg:pb-24">
          <div className="max-w-md mx-auto lg:mx-0 flex flex-col gap-10">
            <SectionTitle
              eyebrow={hero.eyebrow}
              title={hero.title}
              accent={hero.titleAccent}
              subtitle={hero.subtitle}
              dark
            />

            {/* Promesses */}
            <div className="flex flex-col gap-6">
              {promises.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-label={p.title}>
                    {p.icon}
                  </span>
                  <div>
                    <p className="font-bebas text-xl text-white">{p.title}</p>
                    <p className="font-inter text-sm text-white/60 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Zone géographique */}
            <div className="border-t border-white/10 pt-6">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                Zone d&apos;intervention
              </p>
              <div className="flex flex-wrap gap-2">
                {brand.location.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="font-inter text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/50"
                  >
                    {area}
                  </span>
                ))}
                <span className="font-inter text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/50">
                  + suivi à distance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Colonne droite — Formulaire ─────────────────────────── */}
        <div className="bg-brand-warm flex items-center px-8 md:px-16 pt-36 pb-16 lg:pt-44 lg:pb-24">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <h2 className="font-bebas text-3xl text-brand-dark mb-8">
              Envoyez un message
            </h2>
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
