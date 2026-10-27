export const profile = {
  name: "Erdem Ozkorkmaz",
  title: "Ingénieur logiciel",
  location: "Paris, France",
  email: "erdem.ozkorkmaz@epitech.eu",
  linkedin: "https://www.linkedin.com/in/erdem-ozkorkmaz-879934193",
  github: "https://github.com/rdmozk",
  summary:
    "Ingénieur logiciel basé à Paris. Parcours cloud & développement full-stack, formé à Epitech, en poste chez Equans après une alternance de plus de deux ans.",
};

export const experiences = [
  {
    role: "Ingénieur logiciel",
    company: "Equans France",
    location: "Paris",
    period: "Oct. 2025 — Aujourd’hui",
    bullets: [
      "Développement et évolution d’applications logicielles dans un contexte multi-technique énergie & digital.",
      "Collaboration avec les équipes produit et métier pour livrer des solutions robustes et maintenables.",
    ],
  },
  {
    role: "Apprenti ingénieur logiciel",
    company: "EQUANS",
    location: "Paris",
    period: "Jan. 2023 — Juil. 2025",
    bullets: [
      "Alternance ingénierie logicielle au sein d’Equans, en parallèle du Master Epitech (spécialité Cloud).",
      "Participation au cycle de vie logiciel : conception, développement, intégration et suivi.",
    ],
  },
  {
    role: "Développeur informatique",
    company: "ENGIE Solutions France",
    location: "France",
    period: "Juin 2020 — Août 2020",
    bullets: [
      "Élaboration d’une base de données avec une interface sous Symfony.",
    ],
  },
  {
    role: "Stagiaire en développement web",
    company: "ENGIE Solutions France",
    location: "France",
    period: "Mars 2020 — Mai 2020",
    bullets: [
      "Élaboration d’une base de données avec une interface sous Symfony.",
    ],
  },
] as const;

export const education = [
  {
    degree: "Master en informatique — Spécialité Cloud",
    school: "Epitech",
    location: "Le Kremlin-Bicêtre",
    period: "2022 — 2025",
  },
  {
    degree: "Licence Informatique",
    school: "Université Sorbonne Paris Nord",
    location: "Villetaneuse",
    period: "2021",
  },
  {
    degree: "DUT Informatique",
    school: "Université de Reims Champagne-Ardenne",
    location: "Reims",
    period: "2018 — 2020",
  },
] as const;

export const projects = [
  {
    name: "Deux fois",
    description:
      "Journal de souvenirs privé pour couple — Next.js, auth JWT, Neon/Drizzle, Vercel Blob.",
    stack: ["Next.js", "TypeScript", "Neon", "Vercel"],
    href: "https://github.com/rdmozk/deux-fois",
  },
  {
    name: "Pomodoro SaaS",
    description:
      "Application SaaS de gestion du temps (méthode Pomodoro) avec stats style Strava.",
    stack: ["Angular", "Express", "PostgreSQL", "Docker"],
  },
  {
    name: "Hemicycle",
    description:
      "Projet full-stack avec backend, frontend et mise en docker.",
    stack: ["Full-stack", "Docker"],
  },
] as const;

export const skills = {
  langages: ["TypeScript", "JavaScript", "PHP", "SQL"],
  frontend: ["React", "Next.js", "Angular", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Symfony", "REST APIs"],
  cloudData: ["Cloud (spé. Epitech)", "PostgreSQL", "Docker", "Vercel"],
} as const;

export const languages = [
  { name: "Français", level: "Natif / courant" },
  { name: "Anglais", level: "Professionnel" },
] as const;
