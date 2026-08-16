import { Routes } from '@angular/router';

import { Demo01Interpolation } from './features/demonstrations/demo01-interpolation/demo01-interpolation';
import { Demo02Signals } from './features/demonstrations/demo02-signals/demo02-signals';
import { Demo03PropertyBinding } from './features/demonstrations/demo03-property-binding/demo03-property-binding';
import { Demo04EventBinding } from './features/demonstrations/demo04-event-binding/demo04-event-binding';
import { Demo05TwowayBinding } from './features/demonstrations/demo05-twoway-binding/demo05-twoway-binding';
import { Demo06Pipe } from './features/demonstrations/demo06-pipe/demo06-pipe';

import { Exo01ProfilStatique } from './features/exercices/exo01-profil-statique/exo01-profil-statique';
import { Exo02Thermostat } from './features/exercices/exo02-thermostat/exo02-thermostat';
import { Exo03Panier } from './features/exercices/exo03-panier/exo03-panier';

import { NotFound } from './features/errors/not-found/not-found';
import { Exo04CarteProduit } from './features/exercices/exo04-carte-produit/exo04-carte-produit';
import { Home } from './features/home/home';
import { Exo05Compteur } from './features/exercices/exo05-compteur/exo05-compteur';
import { Demo07Directives } from './features/demonstrations/demo07-directives/demo07-directives';
import { ProductList } from './features/exercices/exo06-product-list/product-list';
import { Demo08SousRoutage } from './features/demonstrations/demo08-sous-routage/demo08-sous-routage';
import { Demo08SousRoutageHome } from './features/demonstrations/demo08-sous-routage-home/demo08-sous-routage-home';
import { Demo091InputParent } from './features/demonstrations/demo09-input/demo09.1-input-parent/demo09.1-input-parent';
import { Demo101OutputParent } from './features/demonstrations/demo10-output/demo10.1-output-parent/demo10.1-output-parent';
import { Demo11NgContentParent } from './features/demonstrations/demo11-ng-content/demo11-ng-content-parent/demo11-ng-content-parent';
import { ParentExoList } from './features/exercices/exo07-input-output/parent-exo-list/parent-exo-list';
import { RoutageService } from './features/demonstrations/demo12-service-crud/routage-service/routage-service';
import { ListArticle } from './features/demonstrations/demo12-service-crud/list-article/list-article';
import { AddArticle } from './features/demonstrations/demo12-service-crud/add-article/add-article';
import { DetailsArticle } from './features/demonstrations/demo12-service-crud/details-article/details-article';
import { UpdateArticle } from './features/demonstrations/demo12-service-crud/update-article/update-article';
import { Demo14FormControl } from './features/demonstrations/demo14-formulaires/demo14-form-control/demo14-form-control';
import { Demo14FormGroup } from './features/demonstrations/demo14-formulaires/demo14-form-group/demo14-form-group';
import { accesGuard } from './core/guards/acces-guard/acces-guard';
import { activateChildGuard } from './core/guards/activate-child/activate-child-guard';
import { Demo13Routage } from './features/demonstrations/demo13-routage/demo13-routage/demo13-routage';
import { Demo14FormArray } from './features/demonstrations/demo14-formulaires/demo14-form-array/demo14-form-array';
import { Demo18HttpClient } from './features/demonstrations/demo18-httpClient/demo18-http-client/demo18-http-client';
import { Demo17Observables } from './features/demonstrations/demo17-observables/demo17-observables/demo17-observables';
import { Demo19Storage } from './features/demonstrations/demo19-storage/demo19-storage/demo19-storage';
import { Demo20Resolver } from './features/demonstrations/demo20-resolver/demo20-resolver/demo20-resolver';
import { Demo21Interceptor } from './features/demonstrations/demo21-interceptor/demo21-interceptor/demo21-interceptor';
import { Demo22Build } from './features/demonstrations/demo22-build/demo22-build/demo22-build';



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
    {
    title: 'Démonstration 06 - Pipes',
    path: 'demo06',
    component: Demo06Pipe
  },
      {
    title: 'Démonstration 07 - Directives',
    path: 'demo07',
    component: Demo07Directives
  },
  {
    title: 'Démonstration 08 - Sous-Routage',
    path: 'demo08',
    component: Demo08SousRoutage,
    children : [
      {
        path :'homepage',
        component : Demo08SousRoutageHome
      }
    ]
  },
  {
    title: 'Démonstration 09 - Input',
    path: 'demo09',
    component: Demo091InputParent
  },
  {
    title : 'Démonstration 10 - output',
    path : 'demo10',
    component : Demo101OutputParent
  },
    {
    title : 'Démonstration 11 - ng-content',
    path : 'demo11',
    component : Demo11NgContentParent
  },
  {
    title : 'Démonstration 12 - service',
    path : 'demo-service',
    component : RoutageService,
    children : [
      {
        path : '',
        component : ListArticle
      },
      {
        path : 'add-article',
        component : AddArticle
      },
      {
        path : 'details-article/:id',
        component : DetailsArticle
      },
      {
        path : 'update-article/:id',
        component : UpdateArticle
      }
    ]
  },
  {
    title : 'Demonstration 13 - Router & Activated route',
    path : 'demo13',
    component : Demo13Routage
  },
  {
    title : 'Demonstration 14 - Form Control',
    path : 'demo14',
    component : Demo14FormControl
  },
    {
    title : 'Demonstration 14 - Form Group',
    path : 'demo14-form-group',
    component : Demo14FormGroup
  },
      {
    title : 'Demonstration 14 - Form Array',
    path : 'demo14-form-array',
    component : Demo14FormArray
  },
    {
    title : 'Demonstration 17 - Observable',
    path : 'demo17-observable',
    component : Demo17Observables
  },
      {
    title : 'Demonstration 18 - HttpClient',
    path : 'demo18-http',
    component : Demo18HttpClient
  },
        {
    title : 'Demonstration 19 - Storage',
    path : 'demo19-storage',
    component : Demo19Storage
  },
        {
    title : 'Demonstration 20 - resolver',
    path : 'demo20-resolver',
    component : Demo20Resolver
  },
          {
    title : 'Demonstration 21 - interceptor',
    path : 'demo21-interceptor',
    component : Demo21Interceptor
  },
          {
    title : 'Demonstration 22 - build',
    path : 'demo22-build',
    component : Demo22Build
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
  {
    title : 'Exercice 05 Compteur',
    path : 'exo05',
    component : Exo05Compteur
  },
  {
    title : ' Exercice 06 Product List',
    path : 'exo06',
    component : ProductList
  },
    {
    title : ' Exercice 07 Product List',
    path : 'exo07',
    component : ParentExoList
  },
  
  // Toujours à placer en tant que dernière route !!
  {
    path: '**',
    component: NotFound,
  },
];
