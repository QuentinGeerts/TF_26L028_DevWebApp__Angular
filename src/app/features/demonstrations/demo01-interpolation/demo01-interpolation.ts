import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01-interpolation',
  imports: [],
  templateUrl: './demo01-interpolation.html',
  styleUrl: './demo01-interpolation.css',
})
export class Demo01Interpolation implements OnInit {

  maVariable1: string = "Quentin";
  maVariable2: number = 42;
  maVariable3: number = 4.2;
  maVariable4: boolean = true;

  maVariable5: Date = new Date();

  // "!": Permet de dire que la valeur sera initialisée à l'initialisation du composant
  // Initialisation du composant → hook
  maVariable6!: { name: string, price: number }; // Definite Assignment Assertion


  // Principalement utilisé pour les injections de dépendance
  constructor() { }

  // Principalement utilisée pour initialiser les variables du composant
  ngOnInit(): void {
    // Initialiser les variables
    this.maVariable6 = { name: "Souris gaming", price: 59.99 };
    this.maVariable1 = "Tom";
  }

}
