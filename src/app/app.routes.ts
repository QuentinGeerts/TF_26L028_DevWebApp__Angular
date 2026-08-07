import { Routes } from '@angular/router';

import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { Demo02Signals } from './features/demonstrations/demo02-signals/demo02-signals';
import { Demo03PropertyBinding } from './features/demonstrations/demo03-property-binding/demo03-property-binding';
import { Demo04EventBinding } from './features/demonstrations/demo04-event-binding/demo04-event-binding';
import { Demo05TwowayBinding } from './features/demonstrations/demo05-twoway-binding/demo05-twoway-binding';

import { Exo01ProfilStatique } from './features/exercices/exo01-profil-statique/exo01-profil-statique';
import { Exo02Thermostat } from './features/exercices/exo02-thermostat/exo02-thermostat';
import { Exo03Panier } from './features/exercices/exo03-panier/exo03-panier';

import { NotFound } from './features/errors/not-found/not-found';
import { Exo04CarteProduit } from './features/exercices/exo04-carte-produit/exo04-carte-produit';
import { Home } from './features/home/home';



export const routes: Routes = [
  {
    title: 'Accueil',
    path: '',
    component: Home,
  },

  // --- Démonstrations ---
  {
    title: 'Démonstration 01 - Interpolation',
    path: 'demo01',
    component: Demo01Interpolation,
  },
  {
    title: 'Démonstration 02 - Signals',
    path: 'demo02',
    component: Demo02Signals
  },
  {
    title: 'Démonstration 03 - Property Binding',
    path: 'demo03',
    component: Demo03PropertyBinding
  },
  {
    title: 'Démonstration 04 - Event Binding',
    path: 'demo04',
    component: Demo04EventBinding
  },
  {
    title: 'Démonstration 05 - Two-Way Binding',
    path: 'demo05',
    component: Demo05TwowayBinding
  },


  // --- Exercices ---
  {
    title: 'Exercice 01 - Profile statique',
    path: 'exo01',
    component: Exo01ProfilStatique
  },
  {
    title: 'Exercice 02 - Thermostat',
    path: 'exo02',
    component: Exo02Thermostat
  },
  {
    title: 'Exercice 03 - Panier',
    path: 'exo03',
    component: Exo03Panier
  },
  {
    title: 'Exercice 04 - Carte panier',
    path: 'exo04',
    component: Exo04CarteProduit
  },
  
  // Toujours à placer en tant que dernière route !!
  {
    path: '**',
    component: NotFound,
  },
];
