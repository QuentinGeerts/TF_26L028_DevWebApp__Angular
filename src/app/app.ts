import { Component, signal } from '@angular/core';

import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { Exo01ProfilStatique } from './features/exercices/exo01-profil-statique/exo01-profil-statique';

import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Sidebar, Demo01Interpolation, Exo01ProfilStatique],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TF_26L028_DevWebApp__Angular');
}
