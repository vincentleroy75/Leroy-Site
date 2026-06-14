# Vincent Leroy — AXA Prévoyance & Patrimoine

Site professionnel de Vincent Leroy, Agent Général AXA Prévoyance & Patrimoine.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **CSS** : Tailwind CSS
- **Déploiement** : Vercel

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

## Variables à compléter avant mise en ligne

Ouvrir `src/lib/config.ts` et remplacer tous les placeholders :

| Placeholder | Description |
|---|---|
| `[TELEPHONE_A_COMPLETER]` | Numéro de téléphone du cabinet |
| `[EMAIL_A_COMPLETER]` | Adresse email de contact |
| `[ADRESSE_A_COMPLETER]` | Adresse postale complète |
| `[ORIAS_A_COMPLETER]` | Numéro d'immatriculation ORIAS |
| `[SIRET_A_COMPLETER]` | Numéro SIRET |
| `[LIEN_CALENDLY_A_COMPLETER]` | URL Calendly pour la prise de rendez-vous |

Mettre également à jour `public/llms.txt` avec les mêmes informations.

## Structure des pages

```
src/app/
├── page.tsx                          # Page d'accueil
├── layout.tsx                        # Layout racine
├── prevoyance-professionnelle/       # Service prévoyance pro
├── prevoyance-dirigeant/             # Prévoyance dirigeants
├── retraite-per/                     # Retraite & PER
├── complementaire-sante/             # Complémentaire santé
├── assurance-emprunteur/             # Assurance emprunteur
├── protection-sociale-entreprise/    # Protection sociale entreprise
├── professions-liberales/            # Hub professions libérales
├── prevoyance-medecin/               # Médecins
├── prevoyance-dentiste/              # Dentistes
├── prevoyance-veterinaire/           # Vétérinaires
├── prevoyance-avocat/                # Avocats
├── prevoyance-architecte/            # Architectes
├── prevoyance-pharmacien/            # Pharmaciens
├── prevoyance-orthophoniste/         # Orthophonistes
├── prevoyance-psychologue/           # Psychologues
├── prevoyance-opticien/              # Opticiens
├── prevoyance-paris/                 # Local SEO Paris
├── prevoyance-vincennes/             # Local SEO Vincennes
├── prevoyance-val-de-marne/          # Local SEO Val-de-Marne
├── prevoyance-paris-12/              # Local SEO Paris 12e
├── prevoyance-saint-mande/           # Local SEO Saint-Mandé
├── prevoyance-charenton/             # Local SEO Charenton
├── prevoyance-nogent-sur-marne/      # Local SEO Nogent
├── prevoyance-montreuil/             # Local SEO Montreuil
├── audit-prevoyance-gratuit/         # Landing conversion audit individuel
├── audit-protection-sociale-entreprise/ # Landing conversion audit entreprise
├── qui-consulter-prevoyance-paris/   # Page GEO/AEO
├── meilleur-conseiller-prevoyance-paris/ # Page GEO/AEO
├── ressources/                       # Blog index
│   └── [slug]/                       # 12 articles dynamiques
├── a-propos/                         # À propos
├── contact/                          # Contact
├── mentions-legales/                 # Mentions légales
├── politique-confidentialite/        # RGPD
├── plan-du-site/                     # Sitemap HTML
├── sitemap.ts                        # Sitemap XML automatique
└── robots.ts                         # robots.txt automatique
```

## Checklist pré-lancement

### Informations à compléter
- [ ] Téléphone dans `src/lib/config.ts`
- [ ] Email dans `src/lib/config.ts`
- [ ] Adresse dans `src/lib/config.ts`
- [ ] Numéro ORIAS dans `src/lib/config.ts`
- [ ] Numéro SIRET dans `src/lib/config.ts`
- [ ] Lien Calendly dans `src/lib/config.ts`
- [ ] Mettre à jour `public/llms.txt` avec les vraies informations
- [ ] Mettre à jour l'URL canonique dans `sitemap.ts` et `robots.ts`

### SEO technique
- [ ] Vérifier que toutes les pages ont un `title` et une `description` uniques
- [ ] Vérifier que le sitemap.xml est accessible sur `/sitemap.xml`
- [ ] Vérifier que le robots.txt est accessible sur `/robots.txt`
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Soumettre le sitemap dans Bing Webmaster Tools

### Google Business Profile
- [ ] Créer ou revendiquer la fiche Google Business Profile
- [ ] Synchroniser l'adresse et le téléphone avec le site
- [ ] Ajouter les photos et les horaires

### Conformité
- [ ] Vérifier que le formulaire de contact inclut bien la case RGPD
- [ ] Vérifier le contenu des mentions légales (ORIAS, ACPR, Médiation)
- [ ] S'assurer qu'aucune formule interdite n'est présente dans les textes

### Performance
- [ ] Tester sur PageSpeed Insights (cible : 90+ mobile)
- [ ] Vérifier le rendu mobile sur différentes tailles d'écran
- [ ] Tester les formulaires de contact

## Déploiement Vercel

1. Connecter le dépôt GitHub à Vercel
2. Aucune variable d'environnement requise pour le build
3. Le domaine `www.vincentleroy-axa.fr` doit pointer vers Vercel (mettre à jour le DNS)
4. Activer HTTPS automatique (inclus avec Vercel)

## Ajout d'articles

Les articles sont définis dans `src/app/ressources/[slug]/page.tsx` dans l'objet `articles`. Pour ajouter un article :

1. Ajouter une entrée dans l'objet `articles` avec le slug comme clé
2. Ajouter le slug dans `generateStaticParams()`
3. Ajouter la carte dans `src/app/ressources/page.tsx`
4. Ajouter l'URL dans `src/app/sitemap.ts`
5. Ajouter le lien dans `src/app/plan-du-site/page.tsx`

## Conformité prudentielle

Ce site respecte le cadre prudentiel de distribution d'assurance. Les formulations interdites sont :
- "garantie de réduire vos impôts"
- "meilleur conseiller de Paris"
- "vous économiserez forcément"
- "protection totale"
- "optimisation fiscale garantie"

Les formulations conformes utilisées :
- "peut permettre selon votre situation"
- "à étudier dans le cadre d'un bilan"
- "une analyse personnalisée est nécessaire"
- "sous réserve d'éligibilité et des conditions contractuelles"
