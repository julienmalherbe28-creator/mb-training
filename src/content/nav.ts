export interface NavLink { label: string; href: string; }
export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Votre objectif", href: "/votre-objectif" },
  { label: "La méthode", href: "/la-methode" },
  { label: "Coaching individuel", href: "/coaching-individuel" },
  { label: "Conseils", href: "/conseils-running" },
  { label: "À propos", href: "/a-propos" },
];
export const ctaLink: NavLink = { label: "Me contacter", href: "/contact" };
