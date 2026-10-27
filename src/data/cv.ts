export const profile = {
  name: "Erdem Ozkorkmaz",
  title: "Ingénieur logiciel",
  location: "Paris, Île-de-France",
  email: "erdem.ozkorkmaz@epitech.eu",
  linkedin: "https://www.linkedin.com/in/erdem-ozkorkmaz-879934193",
  github: "https://github.com/rdmozk",
  summary:
    "Ingénieur logiciel à Equans, formé à Epitech (spécialité Cloud). Développement web, APIs, cloud et mise en production — du cadrage à la livraison.",
};

export const experience = [
  {
    role: "Ingénieur logiciel",
    company: "Equans France",
    location: "Paris",
    start: "Oct. 2025",
    end: "Aujourd’hui",
    bullets: [
      "Développement et évolution d’applications logicielles au sein d’Equans France.",
      "Collaboration avec les équipes techniques sur des sujets web, cloud et industrialisation.",
    ],
  },
  {
    role: "Apprenti ingénieur logiciel",
    company: "EQUANS",
    location: "Paris",
    start: "Jan. 2023",
    end: "Juil. 2025",
    bullets: [
      "Alternance ingénierie logicielle (2 ans et demi) en environnement multi-technique.",
      "Contribution au développement, à la maintenance et à l’amélioration continue des solutions internes.",
    ],
  },
  {
    role: "Développeur informatique",
    company: "ENGIE Solutions France",
    location: "France",
    start: "Juin 2020",
    end: "Août 2020",
    bullets: [
      "Élaboration d’une base de données avec une interface sous Symfony.",
    ],
  },
  {
    role: "Stagiaire en développement web",
    company: "ENGIE Solutions France",
    location: "France",
    start: "Mars 2020",
    end: "Mai 2020",
    bullets: [
      "Élaboration d’une base de données avec une interface sous Symfony.",
    ],
  },
] as const;

export const education = [
  {
    degree: "Master en informatique — spécialité Cloud",
    school: "Epitech",
    location: "Le Kremlin-Bicêtre",
    start: "2022",
    end: "2025",
  },
  {
    degree: "Licence Informatique",
    school: "Université Sorbonne Paris Nord",
    location: "Villetaneuse",
    start: "2021",
    end: "2022",
  },
  {
    degree: "DUT Informatique",
    school: "Université de Reims Champagne-Ardenne",
    location: "Reims",
    start: "2018",
    end: "2020",
  },
] as const;

export const projects = [
  {
    name: "Deux fois",
    description:
      "Journal de souvenirs privé pour couple — Next.js, Neon, Drizzle, Vercel Blob, auth JWT.",
    stack: ["Next.js", "TypeScript", "Neon", "Vercel"],
  },
  {
    name: "Pomodoro SaaS",
    description:
      "App de productivité type Pomodoro avec stats (style Strava), OAuth et Docker.",
    stack: ["Angular", "Express", "PostgreSQL", "Docker"],
  },
  {
    name: "Hemicycle",
    description:
      "Plateforme full-stack avec frontend et backend, features sociales et design system.",
    stack: ["Full-stack", "Docker"],
  },
] as const;

export const skills = {
  web: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "PHP", "Symfony"],
  backend: ["Node.js", "Express", "APIs REST", "PostgreSQL", "SQL"],
  cloudInfra: ["Cloud", "Docker", "CI/CD", "Git", "Vercel"],
} as const;

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Professionnel" },
] as const;
