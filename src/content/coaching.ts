// ─────────────────────────────────────────────────────────────────────────────
// CONTENU PAGE COACHING INDIVIDUEL — à compléter avec vos vraies informations
// ─────────────────────────────────────────────────────────────────────────────

export const coachingHero = {
  eyebrow: "Coaching individuel",
  title: "Un accompagnement",
  titleAccent: "100% personnalisé",
  subtitle:
    "Pas de programme type. Pas de plan générique. Un suivi construit autour de vous, de votre objectif et de votre vie.",
};

export const coachingIncludes = {
  eyebrow: "Ce qui est inclus",
  title: "Tout ce dont vous avez",
  titleAccent: "besoin",
  items: [
    {
      icon: "📞",
      title: "Diagnostic initial gratuit",
      description: "30 minutes d'échange pour établir votre profil complet avant tout engagement.",
    },
    {
      icon: "📋",
      title: "Programme semaine par semaine",
      description: "Plan détaillé avec allures, durées et objectif de chaque séance.",
    },
    {
      icon: "💬",
      title: "Suivi hebdomadaire",
      description: "Retour sur vos séances, ajustements, réponses à vos questions.",
    },
    {
      icon: "📱",
      title: "Point mensuel téléphonique",
      description: "Un appel de 20 minutes chaque mois pour faire le bilan et ajuster les objectifs.",
    },
    {
      icon: "🏁",
      title: "Préparation de la course",
      description: "Plan d'affûtage, stratégie de course, conseils nutrition la semaine J-7.",
    },
    {
      icon: "📊",
      title: "Bilan post-course",
      description: "Analyse de votre performance et plan de récupération après l'objectif.",
    },
  ],
};

export const coachingFormules = {
  eyebrow: "Les formules",
  title: "Choisissez votre",
  titleAccent: "niveau d'accompagnement",
  subtitle:
    "Toutes les formules incluent le diagnostic initial gratuit. Le tarif est établi lors de notre premier échange selon votre objectif et la durée de préparation.",
  items: [
    {
      name: "Essentiel",
      tag: "Autonome & guidé",
      // TODO: remplacer par votre vrai tarif
      price: "Sur devis",
      description:
        "Le programme, le plan de course et un suivi mensuel. Idéal si vous êtes autonome et cherchez une structure efficace.",
      includes: [
        "Programme semaine par semaine",
        "Séances détaillées avec allures",
        "1 point téléphonique par mois",
        "Ajustements sur demande",
      ],
      highlighted: false,
    },
    {
      name: "Complet",
      tag: "Le plus populaire",
      // TODO: remplacer par votre vrai tarif
      price: "Sur devis",
      description:
        "L'accompagnement complet avec suivi hebdomadaire. Vous avancez, je m'adapte. Recommandé pour les premiers semi-marathons et marathons.",
      includes: [
        "Tout ce qui est dans Essentiel",
        "Suivi hebdomadaire des séances",
        "Ajustements en temps réel",
        "Préparation course & bilan post-course",
        "Disponibilité par message",
      ],
      highlighted: true,
    },
    {
      name: "Élite",
      tag: "Haute performance",
      // TODO: remplacer par votre vrai tarif
      price: "Sur devis",
      description:
        "Pour les coureurs ambitieux visant la performance. Analyse approfondie, suivi data, accompagnement terrain si souhaité.",
      includes: [
        "Tout ce qui est dans Complet",
        "Analyse de vos données Garmin/Strava",
        "Séances terrain à Chartres et environs",
        "Planification sur plusieurs objectifs",
        "Préparation mentale",
      ],
      highlighted: false,
    },
  ],
};

export const coachingFaq = [
  {
    question: "Est-ce que le coaching convient aux débutants complets ?",
    answer:
      "Absolument. J'accompagne des coureurs de tous niveaux, des grands débutants jusqu'aux coureurs confirmés cherchant à franchir un cap. Le programme est intégralement construit sur votre point de départ.",
  },
  {
    question: "Combien de séances par semaine sont nécessaires ?",
    answer:
      "Le minimum conseillé est de 3 séances par semaine pour progresser efficacement. Pour un marathon, 4 séances sont recommandées. Le programme s'adapte toujours à vos vraies disponibilités.",
  },
  {
    question: "Le coaching se fait en présentiel ou à distance ?",
    answer:
      "Les deux sont possibles. Je propose des séances terrain à Chartres, Dreux et environs, ainsi qu'un suivi complet à distance pour les coureurs hors Eure-et-Loir.",
  },
  {
    question: "Quel est le tarif du coaching running ?",
    answer:
      "Les tarifs varient selon la formule et la durée de préparation. Je préfère établir un devis personnalisé lors du premier échange gratuit pour que le tarif soit adapté à votre objectif réel.",
  },
  {
    question: "Combien de temps avant ma course faut-il démarrer ?",
    answer:
      "Idéalement 12 à 16 semaines pour un 10 km ou semi-marathon. 16 à 20 semaines pour un marathon ou un trail long. Il est possible de travailler sur des délais plus courts selon votre niveau.",
  },
];
