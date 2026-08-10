import { Component, signal } from '@angular/core';
import { Product, ProductFull } from './product.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-demo07-directives',
  imports: [
    CommonModule
  ],
  templateUrl: './demo07-directives.html',
  styleUrl: './demo07-directives.css',
})
export class Demo07Directives {


  // IF ------------------------------------------------

  // booléen pour afficher ou cacher un élément
  isLogged = signal(false)


  // methode pour inverser la valeur du booléen
  toggleIsLogged(){
    this.isLogged.update( (v) => !v)
  }


  // For -------------------------------------------------

  products : Product[] = [
    {
      id : 1,
      name : "Chaussures",
      price : 99.99,
      stock : 10
    },
    {
          id : 2,
      name : "Veste",
      price : 100,
      stock : 20
    },
        {
      id : 3,
      name : "ceinture",
      price : 15,
      stock : 30
    }
  ]

  deleteProduct(index : number){
    this.products = this.products.filter((_,i) => i !== index)
  }

  // For avec signal -------------------------

  productsSignal = signal([
        {
      id : 1,
      name : "Chaussures",
      price : 99.99,
      stock : 10
    },
    {
          id : 2,
      name : "Veste",
      price : 100,
      stock : 20
    },
        {
      id : 3,
      name : "ceinture",
      price : 15,
      stock : 30
    }
  ])


  removeItem(id : number){
    this.productsSignal.update((list) => 
      list.filter((p) => p.id !== id))
  }

// switch 
  dayOfWeek = signal(2)


  // Exemple Complet ----------------------------

  productsFull =  signal([
      {
      id : 1,
      name : "chaussures",
      price : 99.99,
      stock : 4,
      promo : true
    },

          {
      id : 2,
      name : "Ceinture",
      price : 19.99,
      stock : 10,
      promo : false
    },

          {
      id : 3,
      name : "Vestes",
      price : 99.99,
      stock : 0,
      promo : false
    },
  ])


}
