# BXLM — page vitrine

Site vitrine du livre **BXLM** (Tayino Chérubin & Dido Lakama), à destination
des organismes pédagogiques : présentation de l'ouvrage, pistes d'exploitation
en classe, commande de l'e-book et de la version papier.

Construit avec **Next.js 15** (App Router) + TypeScript. Aucune base de données,
aucun service externe : les boutons de commande ouvrent un e-mail pré-rempli.

---

## 1. Ce qu'il faut personnaliser

Tout le contenu modifiable est regroupé dans **`lib/content.ts`** :

| À changer | Où |
| --- | --- |
| Adresse e-mail de commande | `site.orderEmail` (actuellement `contact@bxlm-livre.be` — **à remplacer**) |
| URL de production (SEO / partage) | `site.url` |
| Tarifs, mentions, texte des offres | `offers.ebook`, `offers.paper` |
| Fiche technique | `book`, `specs` |
| Frise du récit / portes d'entrée pédagogiques | `timeline`, `entryPoints`, `whyPoints` |

Les photographies sont dans `app/assets/`. L'image de partage (Open Graph) est
`public/og.jpg`.

> **Droits d'image.** Les photos proviennent du livre (© Teddy Mazina).
> Vérifiez l'autorisation de diffusion en ligne avant toute mise en production
> publique.

---

## 2. Lancer en local

Prérequis : Node.js 18.18+ (20+ recommandé).

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

Pour tester la version de production :

```bash
npm run build
npm run start
```

---

## 3. Déployer sur Vercel

### Option A — depuis GitHub (recommandé)

1. Poussez ce dossier sur un dépôt GitHub / GitLab / Bitbucket.
2. Sur [vercel.com](https://vercel.com) : **Add New… → Project**, importez le dépôt.
3. Vercel détecte Next.js automatiquement — aucun réglage à changer.
   Cliquez **Deploy**.
4. Après le déploiement, renseignez l'URL obtenue dans `site.url`
   (`lib/content.ts`), commitez, le site se redéploie tout seul.

### Option B — CLI

```bash
npm i -g vercel
vercel          # préversion
vercel --prod   # production
```

### Domaine personnalisé

Project → **Settings → Domains** : ajoutez votre nom de domaine et suivez les
instructions DNS.

---

## 4. Structure

```
app/
  layout.tsx      métadonnées, polices (next/font)
  page.tsx        toute la page vitrine
  globals.css     charte graphique (couleurs, typographie)
  icon.svg        favicon
  assets/         photographies
lib/
  content.ts      ← contenu éditable (e-mail, tarifs, textes)
public/
  og.jpg          image de partage réseaux sociaux
```
