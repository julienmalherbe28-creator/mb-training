import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { articles } from "@/content/conseils";

export const metadata: Metadata = generatePageMetadata({
  title: `Conseils running & trail — Entraînement, nutrition, récupération | ${brand.name}`,
  description:
    "Conseils running gratuits par un coach certifié à Chartres : comment débuter, préparer un semi-marathon, gérer la nutrition, récupérer après une course. Eure-et-Loir.",
  slug: "conseils-running",
});

export default function ConseilsRunningPage() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white pt-36 pb-20 md:pt-44 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Conseils running"
            title="Courir mieux,"
            accent="comprendre pourquoi"
            subtitle="Des articles pratiques pour progresser : entraînement, nutrition, récupération, trail. Écrits par un coach running à Chartres."
            center
            dark
          />
        </div>
      </section>

      {/* ── Articles ────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/conseils-running/${article.slug}`}
                className="group rounded-card bg-white flex flex-col overflow-hidden border border-gray-100 hover:shadow-md hover:border-brand-orange/30 transition-all duration-200"
              >
                <div className="px-6 pt-6 pb-0">
                  <span className="inline-block font-inter text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-warm text-brand-orange border border-brand-orange/20">
                    {article.tag}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h2 className="font-bebas text-2xl text-brand-dark leading-tight group-hover:text-brand-orange transition-colors duration-150">
                    {article.title}
                  </h2>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed flex-1">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                    <span className="font-inter text-xs text-gray-400">
                      {article.readingTime} min de lecture
                    </span>
                    <span className="font-inter text-sm font-semibold text-brand-orange group-hover:translate-x-1 transition-transform duration-150">
                      Lire →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            Un conseil ne suffit{" "}
            <span className="font-caveat text-brand-orange italic">pas ?</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">
            Un programme personnalisé vaut mieux que dix articles. Parlons de votre objectif.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Prendre contact gratuitement
          </Button>
        </div>
      </section>

    </div>
  );
}
