export const profile = {
  name: "Erdem Ozkorkmaz",
  title: "Développeur full-stack",
  location: "Paris · Disponible sur Malt",
  email: "ozkorkmaze@gmail.com",
  linkedin: "https://www.linkedin.com/in/erdem-ozkorkmaz-879934193",
  github: "https://github.com/rdmozk",
  summary:
    "Je conçois et livre des applications web, des APIs et des déploiements cloud. Je prends en charge le cadrage, le développement et la mise en production.",
};

export const services = [
  {
    title: "Applications web",
    description:
      "Interfaces React / Next.js, parcours utilisateurs, dashboards et back-offices.",
  },
  {
    title: "APIs & backend",
    description:
      "APIs REST, authentification, bases de données PostgreSQL / SQL, intégrations.",
  },
  {
    title: "Cloud & déploiement",
    description:
      "Docker, CI/CD, mise en ligne et industrialisation des environnements.",
  },
  {
    title: "Pilotage",
    description:
      "Priorisation, planning et suivi jusqu’à la livraison, en lien avec votre métier.",
  },
] as const;

export const projects = [
  {
    name: "Pomodoro SaaS",
    description:
      "Application de productivité : sessions chronométrées, historique, statistiques et connexion OAuth (Google / GitHub).",
    stack: ["Angular", "Express", "PostgreSQL", "Docker"],
  },
  {
    name: "Hemicycle",
    description:
      "Plateforme full-stack avec frontend, API backend et déploiement containerisé.",
    stack: ["TypeScript", "Node.js", "Docker"],
  },
  {
    name: "Racing Dashboard",
    description:
      "Tableau de bord de suivi de performances avec graphiques et indicateurs temps réel.",
    stack: ["React", "TypeScript", "Charts"],
  },
  {
    name: "Cookbook",
    description:
      "Application web de gestion de recettes : catalogue, fiches détaillées et organisation des contenus.",
    stack: ["React", "TypeScript"],
  },
  {
    name: "Clinique — front-end",
    description:
      "Interface web pour un parcours clinique : navigation, formulaires et écrans métier.",
    stack: ["React", "Vite", "TypeScript"],
  },
  {
    name: "API e-commerce",
    description:
      "Backend e-commerce : catalogue produits, commandes, rôles utilisateurs et paiement Stripe.",
    stack: ["Node.js", "MongoDB", "Stripe"],
  },
] as const;

export const skills = {
  frontend: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Tailwind CSS"],
  backend: ["Node.js", "Express", "PHP", "Symfony", "APIs REST", "PostgreSQL"],
  devops: ["Docker", "CI/CD", "Git", "Cloud", "Vercel"],
} as const;

export const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Professionnel" },
] as const;
