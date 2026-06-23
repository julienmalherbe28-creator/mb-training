export const brand = {
  name: "MB Training",
  tagline: "Running & Trail Coaching",
  promise: "Chaque objectif mérite un accompagnement unique.",
  concept: "The Human Journey",
  location: {
    city: "Chartres",
    department: "Eure-et-Loir",
    region: "Centre-Val de Loire",
    serviceAreas: ["Chartres", "Luisant", "Lucé", "Mainvilliers", "Lèves", "Champhol", "Dreux", "Nogent-le-Rotrou"],
  },
  contact: { email: process.env.CONTACT_EMAIL ?? "", phone: "" },
  social: { instagram: "", linkedin: "", strava: "" },
  site: { url: process.env.NEXT_PUBLIC_SITE_URL ?? "" },
} as const;
export type Brand = typeof brand;
