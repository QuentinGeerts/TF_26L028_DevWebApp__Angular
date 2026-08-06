import { Routes } from '@angular/router';
import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { NotFound } from './features/errors/not-found/not-found';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    title: "Accueil",
    path: "",
    component: Home
  },
  {
    title: "Démonstration 01 - Profil statique",
    path: "demo01",
    component: Demo01Interpolation
  },

  // TODO: créer la route pour l'exercice

  // Toujours à placer en tant que dernière route !!
  {
    path: "**",
    component: NotFound
  }
];
