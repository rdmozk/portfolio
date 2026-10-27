export const profile = {
  name: "Erdem Ozkorkmaz",
  title: "Ingénieur logiciel",
  location: "Paris, France",
  email: "ozkorkmaze@gmail.com",
  linkedin: "https://www.linkedin.com/in/erdem-ozkorkmaz-879934193",
  github: "https://github.com/rdmozk",
  heroClaim: "Des systèmes qui tiennent.",
  heroLine: "Web · Cloud · Infrastructure as Code · Pilotage",
  summary:
    "Je conçois des solutions logicielles faites pour la production : stables, lisibles, industrialisées. Moins de surprises, plus de delivery.",
};

export const reliabilitySignals = [
  { key: "Statut", value: "Production-ready" },
  { key: "Priorité", value: "Fiabilité" },
  { key: "Delivery", value: "Cadré & suivi" },
  { key: "Stack", value: "Web · Cloud · IaC" },
] as const;

export const aboutBlocks = [
  {
    title: "Qui je suis",
    body: "Ingénieur logiciel à Paris. Je construis et fais évoluer des produits web et cloud avec une obsession : que ça tienne une fois en prod.",
  },
  {
    title: "Ce que je fais",
    body: "Développement web, cloud, Infrastructure as Code, Git et CI/CD. Je cadre aussi le besoin client, les priorités et le planning jusqu’à la livraison.",
  },
  {
    title: "Mon approche",
    body: "Clarté avant la complexité. Automatiser ce qui casse. Documenter ce qui compte. Livrer ce qui est attendu — dans les délais.",
  },
] as const;

export const focusAreas = [
  {
    id: "web",
    label: "Développement web",
    body: "Applications et APIs solides, stack TypeScript / React / Node, qualité de code et expérience utilisateur.",
  },
  {
    id: "cloud",
    label: "Cloud",
    body: "Architectures cloud, services managés, déploiement et exploitation d’applications en environnement professionnel.",
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    body: "Environnements reproductibles, Docker, CI/CD, réduction du risque opérationnel par l’automatisation.",
  },
  {
    id: "pm",
    label: "Pilotage de projet",
    body: "Cadrage du besoin, priorisation, planning réaliste et suivi du delivery avec les parties prenantes.",
  },
] as const;

export const skills = {
  web: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "PHP", "Symfony"],
  backend: ["Node.js", "Express", "APIs REST", "PostgreSQL", "SQL"],
  cloudInfra: [
    "Cloud",
    "Infrastructure as Code",
    "Docker",
    "CI / CD",
    "Git",
    "Genetec",
  ],
  delivery: [
    "Cadrage besoin client",
    "Priorisation",
    "Planning",
    "Suivi de delivery",
  ],
} as const;

export const languages = [
  { name: "Français", level: "Natif / courant" },
  { name: "Anglais", level: "Professionnel" },
] as const;
