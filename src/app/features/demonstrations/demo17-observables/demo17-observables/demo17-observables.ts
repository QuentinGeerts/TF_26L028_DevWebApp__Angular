import { Component, inject, OnDestroy, signal } from '@angular/core';
import { ObservableService } from '../../../../core/services/observable-demo/observable-service';
import { Subscription, filter } from 'rxjs';
import { ProductObservable } from '../product-observables.model';

@Component({
  selector: 'app-demo17-observables',
  imports: [],
  templateUrl: './demo17-observables.html',
  styleUrl: './demo17-observables.css',
})
export class Demo17Observables implements OnDestroy {

  private observableService = inject(ObservableService);

  counterValue = signal<number | null>(null);
  
  // Un abonnement par flux : chaque bouton « Arrêter » stoppe le bon flux
  counterSubscription?: Subscription;
  
  // On s'abonne à l'observable pour recevoir les valeurs émises
  startCounter() {
    //this.counterSubscription?.unsubscribe(); // évite un double flux si double clic
    this.counterSubscription = this.observableService.getCounter().subscribe({
      next: (value) => this.counterValue.set(value),
      error : (err) => console.log(err),
      complete: () => console.log('Observable terminé'),
      
    });
  }
  
  // Se désabonner : arrête la réception des valeurs émises
  stopCounter() {
    this.counterSubscription?.unsubscribe();
  }
  
  // ------------------------ Exemple avec Product ------------------------------
  products = signal<ProductObservable[]>([]);
  productsSubscription?: Subscription;

  getShoppingItem() {
    this.productsSubscription?.unsubscribe();
    this.products.set([]); // on repart d'une liste vide à chaque démarrage
    this.productsSubscription = this.observableService.getShoppingItem()
      .pipe(
        filter(item => item.id > 0)
      )
      .subscribe({
        next: (item) => this.products.update(list => [...list, item]),
        complete: () => console.log('Observable de produits terminé'),
      });
  }

  stopShoppingItem() {
    this.productsSubscription?.unsubscribe();
  }

  // À la destruction du composant, on nettoie les abonnements
  // pour éviter les fuites de mémoire
  ngOnDestroy() {
    this.stopCounter();
    this.stopShoppingItem();
  }
}
