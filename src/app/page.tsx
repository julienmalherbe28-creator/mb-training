import { generatePageMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import { brand } from "@/lib/brand";

export const metadata = generatePageMetadata({
  title: `Coach running Chartres | ${brand.name}`,
  description: "Coach running et trail à Chartres. Préparation personnalisée 10 km, semi-marathon, marathon et trail en Eure-et-Loir.",
});

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white px-4 text-center gap-6">
        <p className="font-inter text-xs font-semibold tracking-[0.2em] uppercase text-brand-orange">Sprint 1 à venir</p>
        <h1 className="font-bebas text-6xl md:text-8xl leading-none">
          Chaque course raconte une <span className="font-caveat text-brand-orange italic">histoire.</span>
        </h1>
        <p className="font-inter text-lg text-white/70 max-w-xl">{brand.promise}</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button href="/contact" variant="primary" size="lg">Parlons de votre objectif</Button>
          <Button href="/la-methode" variant="outline" size="lg">Découvrir la méthode</Button>
        </div>
      </section>
    </div>
  );
}
