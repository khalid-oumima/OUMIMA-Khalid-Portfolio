# Portfolio — Khalid Oumima (React + Vite)

Version React du portfolio, construite avec [Vite](https://vitejs.dev/).

## Structure

```
src/
  App.jsx              — assemble les sections
  data.js               — tout le contenu (compétences, expériences, projets…)
  index.css             — design system (thème sombre, accents phosphor green / amber)
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
    Timeline.jsx         — composant réutilisé pour Expérience et Formation
```

## Lancer en local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview   # pour tester le build localement
```

## Déployer sur Vercel

### Option A — via GitHub (recommandé)

1. Pousse ce dossier sur un nouveau dépôt GitHub :
   ```bash
   git init
   git add .
   git commit -m "Portfolio React initial"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/portfolio.git
   git push -u origin main
   ```
2. Sur [vercel.com](https://vercel.com) : **Add New → Project**, sélectionne le dépôt.
3. Vercel détecte automatiquement le framework **Vite** — laisse les réglages par défaut
   (`Build Command: vite build`, `Output Directory: dist`).
4. Clique sur **Deploy**.

### Option B — via la CLI Vercel

```bash
npm install -g vercel
vercel        # premier déploiement (preview)
vercel --prod # mise en production
```

## Personnaliser

- Contenu : tout se modifie dans `src/data.js`, sans toucher aux composants.
- Couleurs / typographies : variables CSS en haut de `src/index.css` (bloc `:root`).
- Ajouter une photo : place l'image dans `src/assets/`, importe-la dans `About.jsx`
  (`import photo from '../assets/photo.jpg'`) et ajoute une balise `<img>`.
