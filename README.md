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
5. [Le data binding](#5-le-data-binding)
6. [Base du routing](#6-base-du-routing)
7. [Signals](#7-signals)
8. [Contenu du dépôt](#8-contenu-du-dépôt)

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

## 5. Le data binding

Le **data binding** est la liaison entre la classe TypeScript d'un composant et son template HTML.
Angular propose 4 syntaxes, chacune avec un sens de circulation de la donnée différent.

| Syntaxe | Nom | Sens |
|---|---|---|
| `{{ expression }}` | Interpolation | TS → HTML (texte) |
| `[propriete]="expression"` | Property binding | TS → HTML (propriété DOM) |
| `(evenement)="methode()"` | Event binding | HTML → TS |
| `[(ngModel)]="propriete"` | Two-way binding | TS ↔ HTML |

### Interpolation

Affiche une valeur TypeScript comme **texte** dans le template (voir `demo01-interpolation`) :

```html
<p>{{ maVariable1 }}</p>
```

### Property binding

Les crochets `[propriete]="expression"` évaluent du TypeScript et posent le résultat sur une
**propriété** de l'élément DOM (pas un attribut HTML). Sans crochets, la valeur est toujours du texte
figé, même écrite entre guillemets :

```html
<!-- ❌ toujours désactivé, même avec "false" : c'est un attribut texte -->
<button disabled="false">Bouton</button>

<!-- ✅ dépend de la valeur du signal -->
<button [disabled]="estDesactive()">Bouton</button>

<img [src]="urlPhoto()" [alt]="description()" [width]="taillePhotoLongueur()" />
```

Deux variantes utiles du property binding :

| Syntaxe | Rôle |
|---|---|
| `[class.ma-classe]="condition"` | Ajoute la classe CSS si `condition` est vraie, la retire sinon |
| `[style.propriete.unite]="valeur"` | Applique un style inline avec une valeur (et une unité en option) |

```html
<p class="etiquette" [class.etiquette-active]="estActif()">Class binding</p>

<div class="jauge-remplissage" [style.width.%]="largeurBarre()"></div>
<p [style.color]="couleurText()">Texte coloré depuis le TS</p>
```

> `demo03-property-binding` illustre ces trois cas (attribut simple, `class.`, `style.`).

### Event binding

Les parenthèses `(evenement)="methode()"` exécutent une méthode TypeScript lorsque l'événement se
produit sur l'élément. `$event` donne accès à l'objet événement natif du DOM :

```html
<button (click)="saluer('Jean')">Saluer Jean</button>

<p (mouseenter)="survoler()" (mouseleave)="sortir()">Survolez-moi</p>

<input (input)="surSaisie($event)">
```

```ts
surSaisie(event: InputEvent) {
  const champ = event.target as HTMLInputElement;
  this.saisie.set(champ.value);
}
```

Angular permet aussi de **filtrer un événement clavier** sur une touche précise, directement dans le
nom de l'événement :

```html
<input type="text" (keyup.Enter)="surEntree($event)">
<input type="text" (keyup.alt.r)="surEntree($event)">
```

> `demo04-event-binding` illustre `click`, `mouseenter`/`mouseleave`, `input` et le filtrage `keyup.*`.

### Two-way binding

Le two-way binding n'est pas une nouvelle mécanique : c'est un **property binding + event binding**
réunis dans une seule écriture, pour garder une valeur synchronisée dans les deux sens.

**Version manuelle** (property binding `[value]` + event binding `(input)`) :

```html
<input type="text" [value]="name()" (input)="onInput($event)">
```

**Version automatisée avec `[(ngModel)]`** (la « banane dans la boîte » : `[()]`) — nécessite
d'importer `FormsModule` dans le composant :

```ts
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule], // ⚠️ obligatoire pour ngModel
  // ...
})
export class Demo05TwowayBinding {
  day: string = 'Lundi';
}
```

```html
<input type="text" [(ngModel)]="day">
<p>Jour: {{ day }}</p>
```

> `demo05-twoway-binding` compare les deux versions. `ngModel` fonctionne aussi bien avec une simple
> propriété qu'avec un signal.

---

## 6. Base du routing

Le **routing** (`@angular/router`) permet de faire correspondre une URL à un composant à afficher,
sans recharger la page.

### Déclarer les routes

**`src/app/app.routes.ts`** — une route est un objet `{ path, component }` dans un tableau `Routes` :

```ts
import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { NotFound } from './features/errors/not-found/not-found';

export const routes: Routes = [
  { title: 'Accueil', path: '', component: Home },
  { title: 'Démonstration 01 - Interpolation', path: 'demo01', component: Demo01Interpolation },

  // Toujours à placer en tant que dernière route !!
  { path: '**', component: NotFound },
];
```

| Propriété | Rôle |
|---|---|
| `path` | Segment d'URL (sans `/` initial) — `''` correspond à la racine |
| `component` | Composant affiché pour ce chemin |
| `title` | Titre de l'onglet du navigateur pour cette route |
| `path: '**'` | Route « joker » : capture tout ce qui ne correspond à rien d'autre (404) — **doit rester en dernier** |

### Enregistrer le router

**`src/app/app.config.ts`** — le router est fourni globalement via `provideRouter(routes)` :

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
```

### Afficher la page active : `<router-outlet>`

Le composant racine importe `RouterOutlet` et place la balise `<router-outlet />` à l'endroit où le
composant de la route active doit s'afficher :

```ts
// app.ts
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Sidebar, RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
```

```html
<!-- app.html -->
<main>
  <router-outlet />
</main>
```

### Naviguer : `routerLink` et `routerLinkActive`

Dans un template, `routerLink` remplace le `href` classique (il évite un rechargement complet de la
page) ; `routerLinkActive` ajoute une classe CSS quand le lien correspond à la route active.

```html
<!-- sidebar.html -->
<a routerLink="/" routerLinkActive="active">Accueil</a>
<a routerLink="/demo01" routerLinkActive="active">01. Interpolation</a>
```

Par défaut, `routerLinkActive` matche dès que la route active **commence par** le `routerLink` — le
lien `/` resterait donc actif sur toutes les pages. `[routerLinkActiveOptions]="{ exact: true }"` force
une correspondance exacte, utile pour le lien d'accueil :

```html
<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
```

> **À retenir** : chaque nouveau composant de page doit être 1) déclaré dans `app.routes.ts` avec un
> `path`, puis 2) relié par un `routerLink` (typiquement dans la `Sidebar`).

---

## 7. Signals

Un **signal** est un conteneur de valeur réactif : Angular sait quand sa valeur change et met à jour
automatiquement tout ce qui en dépend (template, `computed`…), sans avoir à demander explicitement un
rafraîchissement.

### Créer et typer un signal

```ts
import { signal, WritableSignal } from '@angular/core';

// Typage inféré automatiquement à partir de la valeur initiale
message: WritableSignal<string> = signal('Chargement...');

// Typage explicite nécessaire quand la valeur initiale ne suffit pas à déduire le type
genre: WritableSignal<'M' | 'F'> = signal('M');
message1: WritableSignal<User | null> = signal(null);
```

### Lire, modifier

| Opération | Syntaxe | Remarque |
|---|---|---|
| **Lire** | `this.compteur()` | Un signal se lit en l'**appelant** comme une fonction |
| **Remplacer** | `this.compteur.set(0)` | Remplace la valeur par une nouvelle |
| **Dériver de l'ancienne valeur** | `this.compteur.update((v) => v + 1)` | ✅ à préférer à `set` quand la nouvelle valeur dépend de l'ancienne |

```ts
incrementer(): void {
  this.compteur.update((v) => v + 1);
}

reinitialiser(): void {
  this.compteur.set(0);
}
```

Dans le template, un signal s'affiche également en l'appelant : `{{ compteur() }}`.

### `computed` : une valeur dérivée

`computed()` crée un **signal en lecture seule**, recalculé automatiquement seulement quand un des
signaux qu'il utilise change (et mis en cache tant que rien n'a changé) :

```ts
import { computed, Signal } from '@angular/core';

genre: WritableSignal<'M' | 'F'> = signal('M');

civilite: Signal<string> = computed(() => {
  return this.genre() === 'F' ? 'Madame' : 'Monsieur';
});
```

```ts
// this.civilite.set('Madame'); // ❌ impossible : un computed est en lecture seule
```

> **`computed` vs méthode classique** : une méthode (`getCivilite()`) est **ré-exécutée à chaque cycle
> de détection de changement**, même si rien n'a changé. Un `computed` n'est ré-évalué que si l'un des
> signaux qu'il lit a changé de valeur — plus performant pour une valeur dérivée affichée souvent.

---

## 8. Contenu du dépôt

### Démonstrations

| # | Sujet | Emplacement |
|---|---|---|
| 01 | Interpolation & types TypeScript | `src/app/features/demonstrations/demo01-interpolation/` |
| 02 | Signals (`signal`, `computed`, `set`, `update`) | `src/app/features/demonstrations/demo02-signals/` |
| 03 | Property binding (`[prop]`, `class.`, `style.`) | `src/app/features/demonstrations/demo03-property-binding/` |
| 04 | Event binding (`(event)`, `$event`, `keyup.*`) | `src/app/features/demonstrations/demo04-event-binding/` |
| 05 | Two-way binding (manuel et `[(ngModel)]`) | `src/app/features/demonstrations/demo05-twoway-binding/` |

### Exercices

| # | Énoncé | Emplacement |
|---|---|---|
| 01 | [Profil statique](exercices/exercice01-profil-statique.md) | `src/app/features/exercices/exo01-profil-statique/` |
| 02 | [Thermostat](exercices/exercice02-thermostat.md) | `src/app/features/exercices/exo02-thermostat/` |
| 03 | [Panier](exercices/exercice03-panier.md) | `src/app/features/exercices/exo03-panier/` |
| 04 | Carte produit | `src/app/features/exercices/exo04-carte-produit/` |

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
