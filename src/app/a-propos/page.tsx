import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/seo";
import { brand } from "@/lib/brand";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { aboutHero, aboutStory, aboutPhilosophy, aboutStats, aboutQualifications, aboutPersonal } from "@/content/about";

export const metadata: Metadata = generatePageMetadata({
  title: `À propos — Coach running Chartres | ${brand.name}`,
  description:
    "Découvrez Matthieu Brébant, coach running et trail à Chartres (Eure-et-Loir). Son parcours, sa philosophie et son approche du coaching personnalisé.",
  slug: "a-propos",
});

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-brand-dark text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SectionTitle eyebrow={aboutHero.eyebrow} title={aboutHero.title} accent={aboutHero.titleAccent} subtitle={aboutHero.subtitle} dark />
              <Button href="/contact" variant="primary" size="lg" className="w-fit">Prendre contact</Button>
            </div>
            <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-2xl">
              <Image src={aboutHero.imageUrl} alt={aboutHero.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-bebas text-5xl text-white">{stat.number}</span>
                <span className="font-inter text-sm text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SectionTitle eyebrow={aboutStory.eyebrow} title={aboutStory.title} accent={aboutStory.titleAccent} className="lg:sticky lg:top-28" />
            <div className="flex flex-col gap-5">
              {aboutStory.paragraphs.map((p, i) => (<p key={i} className="font-inter text-gray-600 leading-relaxed">{p}</p>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <SectionTitle eyebrow={aboutPhilosophy.eyebrow} title={aboutPhilosophy.title} accent={aboutPhilosophy.titleAccent} center dark />
          <blockquote className="font-caveat text-2xl md:text-3xl text-brand-orange italic leading-relaxed max-w-2xl">{aboutPhilosophy.quote}</blockquote>
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            {aboutPhilosophy.paragraphs.map((p, i) => (<p key={i} className="font-inter text-white/70 leading-relaxed">{p}</p>))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow={aboutQualifications.eyebrow} title={aboutQualifications.title} accent={aboutQualifications.titleAccent} center className="mb-12" />
          <div className="max-w-3xl mx-auto flex flex-col gap-0">
            {aboutQualifications.items.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-bebas text-white text-sm">{item.year.slice(-2)}</span>
                  </div>
                  {i < aboutQualifications.items.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" />}
                </div>
                <div className="pb-8">
                  <p className="font-inter text-xs text-brand-orange font-semibold tracking-widest uppercase mb-1">{item.year}</p>
                  <h3 className="font-bebas text-2xl text-brand-dark mb-1">{item.title}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionTitle eyebrow={aboutPersonal.eyebrow} title={aboutPersonal.title} accent={aboutPersonal.titleAccent} />
            <div className="flex flex-col gap-5">
              <p className="font-inter text-gray-600 leading-relaxed">{aboutPersonal.paragraph}</p>
              <div className="flex flex-wrap gap-2">
                {aboutPersonal.hobbies.map((hobby) => (
                  <span key={hobby} className="font-inter text-sm px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">{hobby}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="font-bebas text-5xl md:text-7xl text-white leading-none">
            On travaille <span className="font-caveat text-brand-orange italic">ensemble ?</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-lg">Premier échange gratuit de 30 minutes, sans engagement.</p>
          <Button href="/contact" variant="primary" size="lg">Me contacter</Button>
        </div>
      </section>
    </div>
  );
}
