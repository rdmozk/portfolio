# Portfolio — Erdem Ozkorkmaz

Site portfolio personnel (Next.js + TypeScript + Tailwind).

**Prod (GitHub Pages)** : https://rdmozk.github.io/portfolio/

## Dev

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build local / GitHub Pages

```bash
npm run build          # export statique (sans basePath)
npm run build:pages    # export avec basePath /portfolio
```

Chaque push sur `main` déploie via `.github/workflows/deploy-pages.yml`.

## Contenu

Édite `src/data/cv.ts` pour mettre à jour le contenu.
