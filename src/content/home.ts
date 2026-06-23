// ───────────────────────────────────────────────────────────────────────────────
// CONTENU PAGE D'ACCUEIL — MB Training
// Pour modifier un texte, changez la valeur entre guillemets correspondante.
// ───────────────────────────────────────────────────────────────────────────────

export const heroContent = {
  eyebrow: "Coach Running & Trail · Chartres, Eure-et-Loir",
  subtitle:
    "Coach running et trail basé à Chartres, j'accompagne chaque coureur — débutant ou confirmé — avec un programme 100% personnalisé en Eure-et-Loir et Centre-Val de Loire.",
  cta: {
    primary: { label: "Parlons de votre objectif", href: "/contact" },
    secondary: { label: "Découvrir la méthode", href: "/la-methode" },
  },
};

export const conceptContent = {
  eyebrow: "La philosophie",
  title: "The Human",
  titleAccent: "Journey",
  subtitle:
    "Chaque coureur est unique. Son histoire, ses contraintes, son objectif — tout est pris en compte pour construire un accompagnement qui lui ressemble vraiment.",
  pillars: [
    {
      icon: "👂",
      title: "Écoute & Diagnostic",
      description:
        "On commence par comprendre qui vous êtes : niveau actuel, emploi du temps, contraintes physiques, objectif réel. Sans ça, un programme ne vaut rien.",
    },
    {
      icon: "🗺️",
      title: "Programme sur-mesure",
      description:
        "Un plan semaine par semaine, calibré sur votre vie — pas sur un modèle générique. 10 km, semi-marathon, marathon ou trail en Centre-Val de Loire.",
    },
    {
      icon: "📈",
      title: "Suivi & Adaptation",
      description:
        "Les séances évoluent avec vous. Fatigue, blessure légère, compétition surprise — le programme s'adapte en temps réel à votre réalité.",
    },
  ],
};

export const goalsContent = {
  eyebrow: "Votre prochain défi",
  title: "Quel objectif",
  titleAccent: "vous attend ?",
  subtitle:
    "Du premier 10 km découverte au trail technique en Eure-et-Loir, chaque distance mérite une préparation dédiée.",
  items: [
    {
      emoji: "🏃",
      label: "10 km",
      tag: "Découverte & Progression",
      description:
        "Idéal pour débuter la course à pied ou améliorer son temps. Programme de 8 à 12 semaines.",
      href: "/votre-objectif#10km",
    },
    {
      emoji: "⚡",
      label: "Semi-marathon",
      tag: "Le défi accessible",
      description:
        "21,1 km : le format le plus populaire pour se dépasser sans sacrifier sa vie sociale.",
      href: "/votre-objectif#semi",
    },
    {
      emoji: "🏆",
      label: "Marathon",
      tag: "L'objectif ultime",
      description:
        "42,195 km de dépassement de soi. Une préparation sérieuse de 16 à 20 semaines minimum.",
      href: "/votre-objectif#marathon",
    },
    {
      emoji: "⛰️",
      label: "Trail",
      tag: "Nature & Sensations",
      description:
        "Sentiers, dénivelé, ravitaillements — une discipline à part entière avec ses spécificités.",
      href: "/votre-objectif#trail",
    },
  ],
};

export const testimonialsContent = {
  eyebrow: "Ils ont franchi la ligne",
  title: "Ce qu'ils en",
  titleAccent: "disent",
  items: [
    {
      quote:
        "Grâce à Matthieu, j'ai couru mon premier semi-marathon en 1h52. Le suivi hebdomadaire m'a permis de ne jamais me décourager, même dans les semaines les plus chargées.",
      name: "Marie L.",
      age: 34,
      city: "Chartres",
      stars: 5,
    },
    {
      quote:
        "Je cherchais un vrai coach de terrain, pas un plan générique. La différence est énorme : je suis passé de 5h15 à 4h38 au marathon en seulement 6 mois de préparation.",
      name: "Thomas D.",
      age: 42,
      city: "Luisant",
      stars: 5,
    },
    {
      quote:
        "Premier trail de 30 km terminé sans pépins physiques. Le travail spécifique sur le dénivelé et les ravitaillements m'a vraiment préparé à ce que j'ai vécu sur le parcours.",
      name: "Sophie M.",
      age: 28,
      city: "Dreux",
      stars: 5,
    },
  ],
};

export const methodContent = {
  eyebrow: "La méthode MB Training",
  title: "Comment ça",
  titleAccent: "fonctionne ?",
  steps: [
    {
      number: "01",
      title: "Diagnostic initial",
      description:
        "Un appel de 30 minutes pour établir votre profil complet : niveau actuel, objectif précis, disponibilités hebdomadaires, historique de blessures.",
    },
    {
      number: "02",
      title: "Programme personnalisé",
      description:
        "Je construis votre plan d'entraînement semaine par semaine. Chaque séance a un but précis dans votre progression vers l'objectif.",
    },
    {
      number: "03",
      title: "Suivi hebdomadaire",
      description:
        "Retour sur vos séances, ajustements selon votre ressenti et vos contraintes, réponses à vos questions — on avance ensemble, pas seul.",
    },
  ],
  cta: { label: "Voir la méthode complète", href: "/la-methode" },
};

export const coachContent = {
  eyebrow: "Le coach",
  title: "Matthieu",
  titleAccent: "Brébant",
  bio: "Coach running et trail basé à Chartres, j'accompagne des coureurs de tous niveaux depuis plus de 5 ans en Eure-et-Loir et Centre-Val de Loire. Ma conviction : un bon programme de running doit s'adapter à votre vie, pas l'inverse.",
  details: [
    "Basé à Chartres — interventions dans tout l'Eure-et-Loir",
    "Préparation 10 km, semi-marathon, marathon et trail",
    "Suivi individuel en présentiel (Chartres, Dreux) ou à distance",
    "Coaching sportif personnalisé depuis plus de 5 ans",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=600&q=80",
  imageAlt: "Coureur sur sentier de trail en nature",
  cta: { label: "En savoir plus sur le coach", href: "/a-propos" },
};

export const faqContent = {
  eyebrow: "Questions fréquentes",
  title: "Vous avez des",
  titleAccent: "questions ?",
  items: [
    {
      question: "Est-ce que le coaching running convient aux débutants ?",
      answer:
        "Absolument. J'accompagne des coureurs de tous niveaux, des grands débutants qui n'ont jamais couru jusqu'aux coureurs confirmés qui cherchent à progresser. Le programme est intégralement adapté à votre point de départ.",
    },
    {
      question: "Comment se déroule le suivi hebdomadaire ?",
      answer:
        "Chaque semaine, vous me transmettez vos comptes-rendus de séances via une application de running ou un simple message. J'analyse vos données et ajuste le programme si nécessaire. Un point téléphonique mensuel complète ce suivi.",
    },
    {
      question: "Le coaching se fait en présentiel ou à distance ?",
      answer:
        "Les deux sont possibles. Je propose des séances d'entraînement en présentiel sur Chartres, Dreux et leurs environs, ainsi qu'un suivi complet à distance pour les coureurs en dehors de la zone Eure-et-Loir.",
    },
    {
      question: "Combien de temps avant une course faut-il démarrer une préparation ?",
      answer:
        "Idéalement 12 à 16 semaines avant votre objectif pour un 10 km ou un semi-marathon. Pour un marathon ou un trail, prévoyez 20 semaines pour une préparation optimale. Il est possible de travailler sur des délais plus courts selon votre niveau.",
    },
    {
      question: "Quel est le tarif du coaching running personnalisé à Chartres ?",
      answer:
        "Les tarifs varient selon la formule choisie : programme seul, suivi hebdomadaire ou accompagnement complet. Contactez-moi pour un devis personnalisé adapté à votre objectif et votre budget.",
    },
  ],
};

export const ctaContent = {
  title: "Prêt à franchir",
  titleAccent: "la ligne ?",
  subtitle:
    "Un premier échange gratuit de 30 minutes pour parler de votre objectif et voir comment je peux vous aider.",
  button: { label: "Prendre contact gratuitement", href: "/contact" },
};
