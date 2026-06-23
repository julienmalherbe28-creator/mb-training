"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { navLinks, ctaLink } from "@/content/nav";
import { brand } from "@/lib/brand";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-bebas text-2xl text-white tracking-wide hover:text-brand-orange transition-colors" aria-label={`${brand.name} — accueil`}>
            MB<span className="text-brand-orange">.</span>Training
          </Link>
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className={`px-3 py-2 rounded-md font-inter text-sm font-medium transition-colors duration-150 ${active ? "text-brand-orange" : "text-white/80 hover:text-white"}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <Button href={ctaLink.href} variant="primary" size="sm">{ctaLink.label}</Button>
          </div>
          <button className="lg:hidden p-2 text-white hover:text-brand-orange transition-colors" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="bg-brand-dark border-t border-white/10 px-4 pb-6 flex flex-col gap-1" aria-label="Navigation mobile">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`py-3 font-inter font-medium border-b border-white/5 last:border-0 transition-colors ${active ? "text-brand-orange" : "text-white/80"}`}>
                {link.label}
              </Link>
            );
          })}
          <Button href={ctaLink.href} variant="primary" size="md" className="mt-4 w-full">{ctaLink.label}</Button>
        </nav>
      </div>
    </header>
  );
}
