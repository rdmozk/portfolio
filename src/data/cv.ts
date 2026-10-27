export const profile = {
  name: "Erdem Ozkorkmaz",
  title: "Ingénieur logiciel",
  location: "Paris",
  email: "ozkorkmaze@gmail.com",
  linkedin: "https://www.linkedin.com/in/erdem-ozkorkmaz-879934193",
  github: "https://github.com/rdmozk",
  summary:
    "Je travaille surtout sur du développement web, du cloud et de l’Infrastructure as Code. J’aime aussi cadrer un besoin, prioriser et faire avancer un projet jusqu’à la mise en prod.",
};

export const skills = {
  web: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "PHP", "Symfony"],
  backend: ["Node.js", "Express", "APIs REST", "PostgreSQL", "SQL"],
  cloudInfra: ["Cloud", "Infrastructure as Code", "Docker", "CI/CD", "Git"],
  autres: ["Genetec", "Vidéosurveillance", "Pilotage de projet"],
} as const;

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Professionnel" },
] as const;
