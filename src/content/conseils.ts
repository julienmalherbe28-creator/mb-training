// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES CONSEILS RUNNING — pour ajouter un article, copiez un bloc et
// modifiez les valeurs. Le "slug" doit être unique et sans accents ni espaces.
// ─────────────────────────────────────────────────────────────────────────────

export type ArticleTag = "Débutant" | "Semi-marathon" | "Marathon" | "Trail" | "Nutrition" | "Récupération" | "Entraînement";

export interface Article {
  slug: string;
  title: string;
  description: string;
  tag: ArticleTag;
  readingTime: number; // en minutes
  body: string[]; // chaque élément = un paragraphe
}

export const articles: Article[] = [
  {
    slug: "comment-debuter-course-a-pied",
    title: "Comment débuter la course à pied sans se blesser",
    description:
      "Les erreurs classiques des débutants et comment les éviter. Fréquence des séances, intensité, chaussures : tout ce qu'il faut savoir pour bien commencer.",
    tag: "Débutant",
    readingTime: 5,
    body: [
      "Débuter la course à pied est l'une des meilleures décisions que vous pouvez prendre pour votre santé. Mais c'est aussi l'une des disciplines où les blessures des débutants sont les plus fréquentes — et les plus évitables. La cause principale : vouloir aller trop vite, trop tôt.",
      "La règle d'or pour débuter, c'est la progressivité. Votre corps — tendons, ligaments, muscles — a besoin de temps pour s'adapter aux contraintes de la course. Le cœur et les poumons progressent vite, mais les tissus conjonctifs, eux, s'adaptent lentement. C'est ce décalage qui crée les blessures.",
      "Pour une première approche, commencez par alterner marche et course. 1 minute de course, 2 minutes de marche, sur 20 à 30 minutes totales. Trois fois par semaine maximum. Ne courez jamais deux jours consécutifs en début de programme — la récupération est une partie de l'entraînement à part entière.",
      "Sur les chaussures : un équipement inadapté est la deuxième cause de blessure chez les débutants. Faites-vous conseiller dans un magasin spécialisé qui analyse votre foulée. Une bonne paire de running bien choisie vous coûtera moins cher qu'une consultation chez le kiné.",
      "Enfin, écoutez votre corps. Une douleur persistante au genou, à la cheville ou au mollet est un signal d'alarme, pas un signe de faiblesse. S'arrêter deux jours vaut mieux que s'arrêter deux mois. En cas de doute, consultez un professionnel de santé avant de reprendre.",
    ],
  },
  {
    slug: "preparer-premier-10km",
    title: "Préparer son premier 10 km : le guide complet",
    description:
      "Structure de programme, séances clés, gestion de la course. Tout ce qu'il faut pour aborder votre premier 10 km en confiance et terminer avec le sourire.",
    tag: "Débutant",
    readingTime: 6,
    body: [
      "Le 10 km est une distance parfaite pour un premier objectif de compétition. Assez long pour représenter un vrai accomplissement, assez court pour se préparer en 8 à 12 semaines à partir d'une base modeste. C'est aussi la distance qui permet d'apprendre le plus sur sa gestion de l'effort.",
      "La structure d'un programme 10 km pour débutant repose sur trois types de séances. D'abord, les sorties d'endurance fondamentale — des runs lents, où vous pouvez tenir une conversation, sur 30 à 45 minutes. C'est le cœur du programme, qui représente 70 % du volume total. Ensuite, une séance de travail au seuil par semaine : des fractions de 5 à 10 minutes à une allure inconfortable mais tenable. Enfin, une sortie longue le week-end, progressivement rallonguée jusqu'à 50-60 minutes.",
      "Pour la gestion de la course le jour J, la règle principale est de ne pas partir trop vite. Les 2 premiers kilomètres semblent faciles — c'est un piège. L'adrénaline, l'ambiance, les autres coureurs : tout vous pousse à démarrer plus fort que prévu. Partez 10 à 15 secondes au kilomètre plus lentement que votre allure cible, et accélérez progressivement à partir du 5e km si vous vous sentez bien.",
      "Hydratation : sur 10 km, vous n'avez pas besoin de boire si la température est clémente. Si un ravitaillement est disponible vers le 5e km, prenez quelques gorgées. Évitez de boire trop — ça peut créer des points de côté chez certains coureurs.",
      "L'objectif final est de finir. Pas de chrono, pas de comparaison. Franchir la ligne d'arrivée de votre premier 10 km est un moment dont vous vous souviendrez longtemps. Le chrono, ça viendra avec les suivants.",
    ],
  },
  {
    slug: "semi-marathon-erreurs-a-eviter",
    title: "Semi-marathon : les 5 erreurs que font les coureurs en préparation",
    description:
      "Négliger la récupération, mal gérer la charge d'entraînement, partir trop vite le jour J… Les erreurs classiques de la préparation semi-marathon et comment les corriger.",
    tag: "Semi-marathon",
    readingTime: 5,
    body: [
      "Le semi-marathon est la distance préférée des coureurs réguliers — et celle où les erreurs de préparation sont les plus courantes. Voici les cinq erreurs que je vois le plus souvent chez les coureurs que j'accompagne, et comment les éviter.",
      "Erreur n°1 : augmenter le volume trop rapidement. La règle des 10 % s'applique ici : n'augmentez jamais votre volume hebdomadaire de plus de 10 % d'une semaine à l'autre. Une augmentation brutale — même si elle est motivée — crée des tendinites, des fractures de stress ou de la fatigue chronique qui mettent des semaines à se résorber.",
      "Erreur n°2 : négliger les séances lentes. Beaucoup de coureurs courent trop vite dans leurs séances faciles, pensant que ça n'a pas d'intérêt. Or les sorties d'endurance fondamentale (où vous pouvez parler) développent l'efficacité cardiaque et la capacité à brûler les graisses — deux facteurs clés sur 21 km. Courir trop fort ces séances compromet la récupération pour les séances dures.",
      "Erreur n°3 : ignorer la semaine d'affûtage. Les 10 à 14 jours précédant le semi-marathon doivent être consacrés à une réduction progressive du volume. Ce n'est pas le moment de rattraper des séances manquées. Vous n'améliorerez pas votre condition physique en une semaine — vous ne pouvez que la préserver et arriver frais sur la ligne de départ.",
      "Erreur n°4 : mal gérer les ravitaillements. Sur 21 km, votre corps a besoin de carburant. Testez vos gels ou barres à l'entraînement — jamais pour la première fois en course. Les troubles digestifs sont fréquents quand on consomme un produit inconnu en état d'effort.",
      "Erreur n°5 : s'entraîner avec des chaussures de course usées. Une paire de running a une durée de vie de 600 à 800 km. Au-delà, l'amorti est compromis et le risque de blessure augmente significativement. Si vous avez couru plus de 600 km avec vos chaussures, investissez dans une nouvelle paire au moins 4 semaines avant votre objectif.",
    ],
  },
  {
    slug: "nutrition-coureur-avant-course",
    title: "Nutrition du coureur : quoi manger avant une course",
    description:
      "Les 3 jours avant un 10 km, semi ou marathon font toute la différence. Glucides, hydratation, timing des repas : les principes simples pour arriver avec vos réserves pleines.",
    tag: "Nutrition",
    readingTime: 4,
    body: [
      "La nutrition pré-course est souvent sous-estimée par les coureurs amateurs. Pourtant, la façon dont vous mangez dans les 72 heures précédant votre objectif peut avoir un impact direct sur votre performance — positif comme négatif.",
      "J-3 à J-2 : c'est le moment de faire le plein de glycogène musculaire et hépatique. Les glucides complexes sont vos meilleurs alliés : pâtes, riz, patates douces, quinoa. Augmentez légèrement les portions par rapport à votre alimentation habituelle, sans exagérer. Évitez les aliments nouveaux, les épices, les plats en sauce, la charcuterie et les légumineuses — tout ce qui peut perturber le transit.",
      "J-1 : restez dans la sobriété alimentaire. Repas léger et connu. Hydratez-vous régulièrement tout au long de la journée — votre urine doit être claire ou légèrement jaune. Évitez l'alcool, qui déshydrate et perturbe le sommeil. Le dîner classique de la veille : pâtes à l'huile d'olive avec une source de protéines maigres (poulet, jambon blanc) et du pain.",
      "Le matin de la course : mangez 2h30 à 3h avant le départ, pas avant. Un repas trop proche du départ entraîne des problèmes digestifs pour beaucoup de coureurs. Privilégiez les glucides simples facilement digestibles : pain blanc avec du miel, banane, riz blanc. Évitez les fibres (son, céréales complètes), les graisses en excès et les protéines en grande quantité.",
      "Sur des distances inférieures à 1h, l'apport en énergie pendant la course est peu nécessaire si vous avez bien chargé avant. Au-delà, un gel toutes les 30-40 minutes maintient la glycémie stable. Testez toujours vos gels à l'entraînement avant de les utiliser en compétition.",
    ],
  },
  {
    slug: "trail-running-specificites-entrainement",
    title: "Trail running : les spécificités de l'entraînement",
    description:
      "Le trail n'est pas du running sur route en forêt. Dénivelé, technique de descente, gestion de l'effort sur longue durée : voici ce qui change vraiment dans la préparation.",
    tag: "Trail",
    readingTime: 6,
    body: [
      "Beaucoup de coureurs sur route abordent leur premier trail avec leurs habitudes de running classique. C'est souvent là que les problèmes commencent. Le trail est une discipline à part entière, avec ses propres exigences physiologiques et techniques.",
      "La première grande différence : le dénivelé. En trail, on ne parle pas de distance seule, mais de distance ET dénivelé positif. Un trail de 20 km avec 800 m de D+ est beaucoup plus exigeant qu'un 20 km plat. Votre entraînement doit intégrer des sorties avec du dénivelé dès le début de préparation, même si vous ne trouvez pas de vraies montagnes en Eure-et-Loir — les buttes, les côtes répétées et les escaliers font le travail.",
      "La montée en trail : contrairement à la route où on s'efforce de maintenir une cadence régulière, en trail il est souvent plus efficace de marcher les côtes très raides. La marche rapide nordique (bâtons ou non) permet de conserver de l'énergie pour la suite. Beaucoup de trailers expérimentés marchent 40 % du temps sur un ultra — sans honte.",
      "La descente est la compétence technique la plus importante en trail, et aussi la plus souvent négligée à l'entraînement. Des quadriceps non préparés à l'excentrique encaissent très mal les descentes répétées. Entraînez-vous spécifiquement à descendre : pentes raides, terrain irrégulier, regard loin devant pour anticiper les obstacles.",
      "L'alimentation en trail est radicalement différente du running sur route. Sur un trail de 4h et plus, vous devez manger régulièrement : 60 à 90g de glucides par heure, des aliments solides bien tolérés (banane, dattes, sandwichs sucrés), et une hydratation adaptée à la chaleur et à l'effort. Le sac à dos avec réserve d'eau ou flasks devient indispensable au-delà de 2h.",
      "Enfin, les bâtons : sur les distances courtes (moins de 25 km et 1 000 m de D+), ils sont souvent inutiles. Sur les longues distances avec fort dénivelé, ils permettent d'utiliser les bras à la montée et de protéger les genoux à la descente. Apprenez à les utiliser avant le jour de la course.",
    ],
  },
  {
    slug: "recuperation-apres-course",
    title: "Récupération après une course : les bonnes pratiques",
    description:
      "Les 48h qui suivent un 10 km, un semi ou un marathon sont cruciales pour votre progression. Ce qu'il faut faire — et ce qu'il faut absolument éviter.",
    tag: "Récupération",
    readingTime: 4,
    body: [
      "La récupération est la partie de l'entraînement que les coureurs amateurs sacrifient le plus souvent. Pourtant, c'est pendant la récupération que le corps s'adapte et progresse — pas pendant l'effort. Voici ce que la science et l'expérience terrain nous apprennent sur les 48 à 72h post-course.",
      "Les 30 premières minutes après l'effort : c'est la fenêtre métabolique. Consommez des glucides et des protéines le plus tôt possible — une banane et un yaourt, un sandwich jambon-fromage, une boisson de récupération. Ce n'est pas facultatif : refaire les réserves de glycogène et apporter les acides aminés nécessaires à la réparation musculaire fait une différence mesurable sur la récupération.",
      "L'hydratation : après une course, vous avez perdu entre 1 et 3 litres de sueur selon la chaleur et la durée. Boire n'est pas suffisant — vous avez aussi perdu des électrolytes (sodium, magnésium). Une eau minéralisée, un bouillon ou une boisson isotonique aide à restaurer cet équilibre plus efficacement que l'eau plate seule.",
      "Le froid : un bain froid (12-15°C pendant 10-15 minutes) après un effort intense réduit l'inflammation et accélère la récupération musculaire. C'est inconfortable mais efficace. Si vous n'avez pas de baignoire, finissez votre douche à l'eau froide pendant 2-3 minutes.",
      "Les jours suivants : après un 10 km ou un semi-marathon, 48 à 72h de repos actif (marche, vélo léger, natation) avant de reprendre l'entraînement. Après un marathon, prévoyez au minimum une semaine sans course et 3 à 4 semaines avant de reprendre un vrai entraînement. Votre corps récupère de l'intérieur bien après que vous ne ressentez plus de douleur. Les blessures post-marathon surviennent souvent quand on reprend trop vite.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}
