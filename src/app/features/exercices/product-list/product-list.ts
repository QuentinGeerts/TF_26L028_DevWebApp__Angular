import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductExo } from './product-exo.model';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

products = signal<ProductExo[]>([
  {
    id : 1,
    name : 'product 1',
    description : 'Le premier produit',
    stock : 10,
    price : 10.99,
    promo : true
  },
    {
    id : 2,
    name : 'product 2',
    description : 'Le deuxième produit',
    stock : 5,
    price : 10.99,
    promo : false
  }
])

addQuantity(id : number){
const index = this.products().findIndex((p) => p.id == id)

this.products()[index].stock++
}

removeQuantity(id : number){
const index = this.products().findIndex((p) => p.id == id)
this.products()[index].stock--
}

// Ajout de produit ----------------------------

name : string = '';
description : string = '';
stock : number = 0;
price : number = 0;
promo : boolean = false;

lastId : number = this.products()[this.products().length - 1].id +1

errorMessage = signal<null | string>(null)

addProduct(){
  if(this.stock <= 0){
  this.errorMessage.set('La quantité doit être supérieur à 0')
  }else {
    this.errorMessage.set(null)
    const newProduct : ProductExo = {
      id : this.lastId,
      name : this.name,
      description : this.description,
      stock : this.stock,
      price : this.price,
      promo : this.promo
    }

    this.products().push(newProduct)

    this.lastId++
  }
}
}

