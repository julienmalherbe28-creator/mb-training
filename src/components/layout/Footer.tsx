import Link from "next/link";
import { brand } from "@/lib/brand";
import { navLinks } from "@/content/nav";

const seoLinks = [
  { label: "Coach running Chartres", href: "/" },
  { label: "Coach trail Eure-et-Loir", href: "/la-methode" },
  { label: "Coaching individuel running Chartres", href: "/coaching-individuel" },
  { label: "Conseils running trail", href: "/conseils-running" },
  { label: "Préparer un marathon Chartres", href: "/votre-objectif#marathon" },
  { label: "Préparer un trail Centre-Val de Loire", href: "/votre-objectif#trail" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col gap-4">
            <p className="font-bebas text-2xl tracking-wide">MB<span className="text-brand-orange">.</span>Training</p>
            <p className="font-inter text-sm text-white/60 leading-relaxed">{brand.tagline}<br />{brand.promise}</p>
          </div>
          <nav aria-label="Navigation secondaire">
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="font-inter text-sm text-white/60 hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-inter text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Contact & Zone</p>
            <address className="not-italic flex flex-col gap-2 font-inter text-sm text-white/60">
              <span>Basé à {brand.location.city}</span>
              <span>Intervention dans tout l&apos;{brand.location.department}</span>
              {brand.contact.email && (<a href={`mailto:${brand.contact.email}`} className="hover:text-white transition-colors">{brand.contact.email}</a>)}
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {brand.location.serviceAreas.map((area) => (<span key={area} className="font-inter text-xs text-white/30">{area}</span>))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            {seoLinks.map((link) => (<Link key={link.href} href={link.href} className="font-inter text-xs text-white/25 hover:text-white/50 transition-colors">{link.label}</Link>))}
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-white/30 font-inter text-xs">
          <span>© {new Date().getFullYear()} {brand.name}. Tous droits réservés.</span>
          <span>Coach running & trail — {brand.location.city}, {brand.location.department}</span>
        </div>
      </div>
    </footer>
  );
}
