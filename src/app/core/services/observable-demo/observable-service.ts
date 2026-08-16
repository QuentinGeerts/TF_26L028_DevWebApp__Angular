import { Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../features/demonstrations/demo07-directives/product.model';
import { ProductObservable } from '../../../features/demonstrations/demo17-observables/product-observables.model';

@Service()
export class ObservableService {
    
   // Cette méthode retourne un Observable qui émet un nombre toutes les secondes
  getCounter(): Observable<number> {

    return new Observable<number>((observer) => {
      let count = 0;

      const interval = setInterval(() => {
        
        // On émet la valeur `count` à l'observer
        // Cela permet à tous les abonnés de recevoir cette valeur
        observer.next(count); 
        count++;

        // Si count atteint 5, on complète l'observable
        // Cela signifie que l'observable ne va plus émettre de nouvelles valeurs
        if (count > 5) {
          observer.complete(); // On termine l'observable après 5
        }

      }, 1000);

      // Nettoyage en cas d’arrêt
      return () => {
        clearInterval(interval);
      };
    });
  }


  // cette methode retourne un shopping item toute les 2 secondes
getShoppingItem(): Observable<ProductObservable> {
  let count = 1;

  return new Observable<ProductObservable>((observer) => {
    
    const interval = setInterval(() => {
      const item: ProductObservable = {
        id: count,
        name: 'Produit :'+count,
        price: 99,
        img: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg'
      };

      observer.next(item);
      count++;
    }, 2000);

    return () => clearInterval(interval);
  });
}
}
