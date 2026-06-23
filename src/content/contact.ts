export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Parlons de votre",
    titleAccent: "objectif",
    subtitle:
      "Un premier échange gratuit de 30 minutes, sans engagement, pour voir comment je peux vous accompagner.",
  },
  promises: [
    {
      icon: "⚡",
      title: "Réponse sous 48h",
      description: "Je réponds à tous les messages en moins de deux jours ouvrés.",
    },
    {
      icon: "🎯",
      title: "Premier échange gratuit",
      description: "30 minutes pour parler de votre objectif et voir si on se correspond.",
    },
    {
      icon: "🤝",
      title: "Sans engagement",
      description: "Aucune obligation. On discute, et vous décidez.",
    },
  ],
  form: {
    fields: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Téléphone (optionnel)",
      goal: "Votre objectif",
      goalOptions: [
        { value: "", label: "Choisissez votre objectif..." },
        { value: "10km", label: "10 km" },
        { value: "semi", label: "Semi-marathon" },
        { value: "marathon", label: "Marathon" },
        { value: "trail", label: "Trail" },
        { value: "autre", label: "Autre / Je ne sais pas encore" },
      ],
      message: "Votre message",
      messagePlaceholder:
        "Parlez-moi de vous : votre niveau actuel, votre objectif, vos disponibilités...",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
    },
    success: {
      title: "Message envoyé !",
      message:
        "Merci pour votre message. Je vous réponds dans les 48h pour convenir d'un premier échange.",
    },
    error:
      "Une erreur est survenue. Réessayez ou contactez-moi directement par email.",
  },
};
