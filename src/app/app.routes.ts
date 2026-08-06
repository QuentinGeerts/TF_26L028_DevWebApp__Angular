import { Routes } from '@angular/router';
import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { NotFound } from './features/errors/not-found/not-found';
import { Exo01ProfilStatique } from './features/exercices/exo01-profil-statique/exo01-profil-statique';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    title: 'Accueil',
    path: '',
    component: Home,
  },
  {
    title: 'Démonstration 01 - Interpolation',
    path: 'demo01',
    component: Demo01Interpolation,
  },

  {
    title: 'Exercice 01 - Profile statique',
    path: 'exo01',
    component: Exo01ProfilStatique
  },
  
  // Toujours à placer en tant que dernière route !!
  {
    path: '**',
    component: NotFound,
  },
];
