# Formation - Angular

Support de cours et projet de démonstrations réalisé pendant la formation.
Ce dépôt regroupe la théorie vue au fil des séances, les démonstrations codées en direct et les exercices.

**Stack du projet** : Angular 22 · TypeScript 6 · Tailwind CSS 4 · npm

---

## Table des matières

1. [Qu'est-ce qu'Angular ?](#1-quest-ce-quangular-)
2. [Création d'un projet](#2-création-dun-projet)
3. [Anatomie d'un projet Angular](#3-anatomie-dun-projet-angular)
4. [Création d'un composant](#4-création-dun-composant)
5. [Contenu du dépôt](#5-contenu-du-dépôt)

---

## 1. Qu'est-ce qu'Angular ?

Angular est un **framework front-end** développé et maintenu par Google, écrit en **TypeScript**.
Il permet de construire des **SPA** (*Single Page Application*) : une seule page HTML est chargée par le
navigateur, puis le contenu est mis à jour dynamiquement sans rechargement complet.

### Framework vs bibliothèque

| | Bibliothèque (ex. React) | Framework (ex. Angular) |
|---|---|---|
| Structure | Libre, à composer soi-même | Imposée par le framework |
| Outils | À ajouter (routing, HTTP, formulaires…) | Inclus « out of the box » |
| Courbe d'apprentissage | Plus douce au départ | Plus raide, mais cadre solide |

> C'est **nous** qui appelons une bibliothèque ; c'est le **framework** qui nous appelle
> (*inversion de contrôle*).

### Ce qu'Angular fournit nativement

- Un système de **composants** (brique de base de l'interface)
- Le **data binding** (liaison entre la logique TypeScript et le template HTML)
- Le **routing** (`@angular/router`)
- Les **formulaires** (`@angular/forms`)
- La **communication HTTP** (`@angular/common/http`)
- L'**injection de dépendances**
- Une **CLI** complète (génération, build, serveur de développement, tests)

### Points de repère

- Écrit en **TypeScript** → typage statique, erreurs détectées à la compilation.
- **Angular** (v2+) est une réécriture complète d'**AngularJS** (v1) : ce sont deux technologies différentes.
- Depuis Angular 17-19, l'approche **standalone** remplace les `NgModule` : un composant déclare
  lui-même ses dépendances via `imports: []`.
- Nouvelle syntaxe de contrôle de flux dans les templates : `@if`, `@for`, `@switch`.

---

## 2. Création d'un projet

### Prérequis

```bash
node -v    # Node.js LTS
npm -v
```

### Installation de la CLI Angular

```bash
npm install -g @angular/cli

ng version   # vérifier l'installation
```

### Générer un nouveau projet

```bash
ng new mon-projet
```

La CLI pose quelques questions :

| Question | Choix du cours |
|---|---|
| Stylesheet format | `tailwind` |
| Server-Side Rendering (SSR/SSG) | `Non` |
| AI tools configuration | `Aucun` |

Options utiles :

```bash
ng new mon-projet --style=tailwind --ssr=false     # non interactif
ng new mon-projet --skip-git                  # sans dépôt Git
ng new mon-projet --skip-tests                # sans tests unitaires (ou -S)
```

### Lancer le serveur de développement

```bash
cd mon-projet
npm start          # équivalent à : ng serve (vous pouvez changer la commande dans le package.json)
```

L'application est disponible sur <http://localhost:4200> avec **rechargement à chaud**
(*hot reload*) : chaque sauvegarde met la page à jour automatiquement.

### Commandes de la CLI

| Commande | Rôle |
|---|---|
| `ng serve` | Serveur de développement (`-o` pour ouvrir le navigateur) |
| `ng build` | Build de production dans `dist/` |
| `ng generate` (`ng g`) | Génère composants, services, pipes… |
| `ng test` | Lance les tests unitaires |
| `ng version` | Versions d'Angular, Node et des paquets |
| `ng update` | Met à jour les dépendances Angular |

### Scripts de ce dépôt

```bash
npm start     # ng serve
npm run build # ng build
npm run watch # ng build --watch --configuration development
npm test      # ng test
```

---

## 3. Anatomie d'un projet Angular

```
TF_26L028_DevWebApp__Angular/
├── .vscode/              # Configuration de l'éditeur
├── dist/                 # Résultat du build (généré, non versionné)
├── node_modules/         # Dépendances (générées, non versionnées)
├── public/               # Fichiers statiques servis tels quels (images, fonts, favicon)
├── src/                  # ⭐ Le code source de l'application
│   ├── app/              #    L'application elle-même
│   ├── index.html        #    Unique page HTML (contient <app-root>)
│   ├── main.ts           #    Point d'entrée : démarre l'application
│   └── styles.css        #    Styles globaux
├── angular.json          # Configuration du workspace (build, serve, assets, styles)
├── package.json          # Dépendances et scripts npm
├── tsconfig.json         # Configuration TypeScript
└── README.md
```

### Les fichiers clés

**`src/index.html`** — la seule page HTML de l'application. Elle contient la balise du composant racine :

```html
<body>
  <app-root></app-root>
</body>
```

**`src/main.ts`** — point d'entrée : il démarre (*bootstrap*) l'application à partir du composant racine.

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

**`src/app/app.config.ts`** — configuration globale : les *providers* de l'application (routing, HTTP…).

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
```

**`src/app/app.routes.ts`** — table des routes de l'application.

**`src/app/app.ts` / `app.html` / `app.css`** — le composant racine `App`, sélecteur `app-root`.

### Le dossier `src/app`

L'organisation retenue dans ce projet :

```
src/app/
├── features/               # Fonctionnalités métier
│   └── demonstrations/     #   Démonstrations du cours
│       └── demo01-interpolation/
│           ├── demo01-interpolation.ts
│           ├── demo01-interpolation.html
│           ├── demo01-interpolation.css
│           └── models/
│               └── user.model.ts
├── layout/                 # Structure de la page (réutilisable)
│   ├── header/
│   ├── sidebar/
│   └── footer/
├── app.config.ts
├── app.routes.ts
├── app.ts
├── app.html
└── app.css
```

> **Convention** : un dossier par composant, contenant ses 3 fichiers (`.ts`, `.html`, `.css`).
> Les modèles (`interface`, `type`) sont regroupés dans un sous-dossier `models/`.

### Fichiers de configuration

| Fichier | Rôle |
|---|---|
| `angular.json` | Configuration du build, du serveur, des assets et des styles |
| `package.json` | Dépendances et scripts npm |
| `tsconfig.json` | Options du compilateur TypeScript (mode strict) |
| `.prettierrc` | Formatage automatique du code |
| `.editorconfig` | Règles d'édition partagées entre éditeurs |
| `.postcssrc.json` | Configuration PostCSS (Tailwind CSS) |
| `.gitignore` | Fichiers exclus du dépôt (`node_modules/`, `dist/`, `.angular/`) |

---

## 4. Création d'un composant

Un **composant** est la brique de base d'une application Angular. Il associe :

- une **classe TypeScript** (la logique et les données) ;
- un **template HTML** (l'affichage) ;
- une **feuille de style CSS** (l'apparence) ;
- un **sélecteur** (la balise permettant de l'utiliser dans un autre template).

### Génération avec la CLI

```bash
ng generate component mon-composant
# forme courte
ng g c mon-composant
```

Avec un chemin (recommandé pour respecter l'arborescence) :

```bash
ng g c features/demonstrations/demo01-interpolation
ng g c layout/header
```

Options utiles :

```bash
ng g c mon-composant --skip-tests       # sans fichier de test
ng g c mon-composant --inline-template  # template dans le fichier .ts
```

Fichiers générés :

```
mon-composant/
├── mon-composant.ts       # Classe + décorateur @Component
├── mon-composant.html     # Template
└── mon-composant.css      # Styles (scopés au composant)
```

### Structure d'un composant

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01-interpolation',   // balise : <app-demo01-interpolation />
  imports: [],                            // dépendances (composants, directives, pipes)
  templateUrl: './demo01-interpolation.html',
  styleUrl: './demo01-interpolation.css',
})
export class Demo01Interpolation implements OnInit {

  // Propriétés : les données du composant
  maVariable1: string = 'Quentin';
  maVariable2: number = 42;
  maVariable4: boolean = true;

  // Principalement utilisé pour l'injection de dépendances
  constructor() {}

  // Hook de cycle de vie : initialisation des données du composant
  ngOnInit(): void {
    this.maVariable1 = 'Tom';
  }

  // Méthodes : le comportement du composant
  maMethode1(nb1: number, nb2: number): number {
    return nb1 + nb2;
  }
}
```

### Le décorateur `@Component`

| Propriété | Rôle |
|---|---|
| `selector` | Nom de la balise HTML (préfixe `app-` par convention) |
| `imports` | Dépendances du composant (approche **standalone**) |
| `templateUrl` / `template` | Template externe ou en ligne |
| `styleUrl` / `styles` | Styles externes ou en ligne |

### Utiliser un composant

1. **Importer** la classe dans le composant parent ;
2. **Déclarer** la classe dans le tableau `imports` ;
3. **Placer** la balise (le `selector`) dans le template. (Si vous commencez par lui, ça importera directement)

```ts
// app.ts
import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';

@Component({
  selector: 'app-root',
  imports: [Header, Demo01Interpolation],   // 2. déclaration
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

```html
<!-- app.html -->
<app-header />                  <!-- 3. utilisation -->
<app-demo01-interpolation />
```

> ⚠️ Oublier le composant dans `imports` est l'erreur la plus fréquente :
> la balise reste alors ignorée ou provoque une erreur de compilation.

### Cycle de vie (hooks)

| Hook | Moment | Usage typique |
|---|---|---|
| `constructor` | À l'instanciation de la classe | Injection de dépendances |
| `ngOnInit` | Après l'initialisation des propriétés | Initialiser les données, appels API |
| `ngOnDestroy` | Avant la destruction du composant | Nettoyage, désabonnements |

### Conventions de nommage

| Élément | Convention | Exemple |
|---|---|---|
| Dossier / fichiers | `kebab-case` | `demo01-interpolation/` |
| Classe | `PascalCase` | `Demo01Interpolation` |
| Sélecteur | `app-` + `kebab-case` | `app-demo01-interpolation` |
| Propriétés / méthodes | `camelCase` | `maVariable1`, `maMethode1()` |

---

## 5. Contenu du dépôt

### Démonstrations

| # | Sujet | Emplacement |
|---|---|---|
| 01 | Interpolation & types TypeScript | `src/app/features/demonstrations/demo01-interpolation/` |

### Exercices

| # | Énoncé |
|---|---|
| 01 | [Profil statique](exercices/exercice01-profil-statique.md) |

### Layout

| Composant | Emplacement |
|---|---|
| `Header` | `src/app/layout/header/` |
| `Sidebar` | `src/app/layout/sidebar/` |
| `Footer` | `src/app/layout/footer/` |

---

## Démarrage rapide

```bash
git clone <url-du-depot>
cd TF_26L028_DevWebApp__Angular
npm install
npm start
```

Puis ouvrir <http://localhost:4200>.

---

## Ressources

- [Documentation officielle Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
