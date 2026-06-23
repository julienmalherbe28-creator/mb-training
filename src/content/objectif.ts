// ─────────────────────────────────────────────────────────────────────────────
// CONTENU PAGE VOTRE OBJECTIF — à compléter avec vos vraies informations
// ─────────────────────────────────────────────────────────────────────────────

export const objectifHero = {
  eyebrow: "Votre objectif",
  title: "Chaque distance,",
  titleAccent: "un voyage",
  subtitle:
    "Du 10 km découverte au trail technique, chaque objectif mérite une préparation dédiée. Découvrez comment je construis votre programme.",
};

export const objectifItems = [
  {
    id: "10km",
    emoji: "🏃",
    eyebrow: "Découverte & Progression",
    title: "10 km",
    duration: "8 à 12 semaines",
    level: "Tous niveaux",
    description:
      "Le 10 km est une distance idéale pour débuter la compétition ou améliorer significativement ses chronos. Accessible sans expérience préalable, il demande cependant une vraie préparation pour être vécu dans de bonnes conditions physiques et mentales.",
    points: [
      "Programme adapté aux débutants complets",
      "Travail sur l'endurance fondamentale et le rythme",
      "Objectif : finir confortablement ou améliorer son temps",
      "Compatible avec 3 séances par semaine",
    ],
    cta: "Préparer mon 10 km",
    dark: false,
  },
  {
    id: "semi",
    emoji: "⚡",
    eyebrow: "Le défi accessible",
    title: "Semi-marathon 21,1 km",
    duration: "12 à 16 semaines",
    level: "Intermédiaire",
    description:
      "Le semi-marathon est la distance préférée des coureurs réguliers : assez long pour représenter un vrai défi, assez court pour rester compatible avec une vie professionnelle et familiale. Une préparation sérieuse permet de le courir au meilleur de ses capacités.",
    points: [
      "Travail sur l'endurance et la gestion de l'allure",
      "Séances spécifiques semi-marathon (tempo, seuil)",
      "Stratégie de course et gestion de l'effort sur 21 km",
      "Compatible avec 3 à 4 séances par semaine",
    ],
    cta: "Préparer mon semi-marathon",
    dark: true,
  },
  {
    id: "marathon",
    emoji: "🏆",
    eyebrow: "L'objectif ultime",
    title: "Marathon 42,195 km",
    duration: "16 à 20 semaines",
    level: "Confirmé",
    description:
      "Le marathon est une épreuve à part entière qui nécessite une préparation structurée et une gestion rigoureuse de la charge d'entraînement. C'est un projet de vie, pas juste une course. Je vous accompagne du premier jour d'entraînement jusqu'à la ligne d'arrivée.",
    points: [
      "Périodisation sur 16 à 20 semaines",
      "Sorties longues progressives (jusqu'à 35 km)",
      "Nutrition, hydratation et récupération incluses",
      "Bilan post-course et plan de récupération",
    ],
    cta: "Préparer mon marathon",
    dark: false,
  },
  {
    id: "trail",
    emoji: "⛰️",
    eyebrow: "Nature & Sensations",
    title: "Trail running",
    duration: "12 à 24 semaines selon la distance",
    level: "Tous niveaux",
    description:
      "Le trail est une discipline à part entière avec ses propres codes : dénivelé, terrain varié, ravitaillements, gestion de l'effort sur longue durée. Que vous visiez un trail découverte de 20 km ou un ultra, l'approche est radicalement différente du running sur route.",
    points: [
      "Travail spécifique montée/descente et dénivelé",
      "Préparation mentale et gestion des ravitaillements",
      "Choix du matériel (chaussures, sac, nutrition)",
      "Connaissance des parcours en Centre-Val de Loire",
    ],
    cta: "Préparer mon trail",
    dark: true,
  },
];

export const objectifCta = {
  title: "Pas encore sûr de votre",
  titleAccent: "objectif ?",
  subtitle:
    "Pas de problème. On en parle lors d'un premier échange gratuit de 30 minutes pour définir ensemble ce qui vous correspond le mieux.",
  button: { label: "En discuter gratuitement", href: "/contact" },
};
