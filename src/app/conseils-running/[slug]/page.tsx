import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import Button from "@/components/ui/Button";
import { articles, getArticleBySlug, getRelatedArticles } from "@/content/conseils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return generatePageMetadata({
    title: `${article.title} | ${brand.name}`,
    description: article.description,
    slug: `conseils-running/${slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  return (
    <div>

      {/* ── Hero article ────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/conseils-running"
            className="inline-flex items-center gap-2 font-inter text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            ← Tous les articles
          </Link>
          <div className="flex flex-col gap-4">
            <span className="self-start font-inter text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
              {article.tag}
            </span>
            <h1 className="font-bebas text-4xl md:text-6xl text-white leading-tight">
              {article.title}
            </h1>
            <p className="font-inter text-lg text-white/60 leading-relaxed">
              {article.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="font-inter text-sm text-white/30">{article.readingTime} min de lecture</span>
              <span className="text-white/20">·</span>
              <span className="font-inter text-sm text-white/30">Par Matthieu Brébant, coach running à Chartres</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Corps de l'article ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {article.body.map((paragraph, i) => (
              <p key={i} className="font-inter text-base text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Encart coach */}
          <div className="mt-12 rounded-card p-6 bg-brand-warm flex flex-col sm:flex-row gap-4 items-start">
            <span className="text-3xl flex-shrink-0">💬</span>
            <div className="flex flex-col gap-3">
              <p className="font-inter text-sm font-semibold text-brand-dark">
                Envie d&apos;aller plus loin ?
              </p>
              <p className="font-inter text-sm text-gray-600 leading-relaxed">
                Un programme personnalisé est toujours plus efficace qu&apos;un article générique. Je suis coach running à Chartres, en Eure-et-Loir, et j&apos;accompagne des coureurs de tous niveaux avec un suivi sur-mesure.
              </p>
              <Button href="/contact" variant="primary" size="sm" className="w-fit mt-1">
                Premier échange gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles connexes ────────────────────────────────────── */}
      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-3xl text-brand-dark mb-8">À lire aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/conseils-running/${rel.slug}`}
                className="group rounded-card bg-white p-6 flex flex-col gap-3 border border-gray-100 hover:border-brand-orange/30 hover:shadow-md transition-all duration-200"
              >
                <span className="font-inter text-xs font-semibold tracking-widest uppercase text-brand-orange">
                  {rel.tag}
                </span>
                <h3 className="font-bebas text-xl text-brand-dark group-hover:text-brand-orange transition-colors duration-150 leading-tight">
                  {rel.title}
                </h3>
                <span className="font-inter text-sm text-brand-orange mt-auto group-hover:translate-x-1 transition-transform duration-150">
                  Lire →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
