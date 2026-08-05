import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-demo01-interpolation',
  imports: [],
  templateUrl: './demo01-interpolation.html',
  styleUrl: './demo01-interpolation.css',
})
export class Demo01Interpolation implements OnInit {
  maVariable1: string = 'Quentin';
  maVariable2: number = 42;
  maVariable3: number = 4.2;
  maVariable4: boolean = true;

  maVariable5: Date = new Date();

  // "!": Permet de dire que la valeur sera initialisée à l'initialisation du composant
  // Initialisation du composant → hook
  maVariable6!: { name: string; price: number }; // Definite Assignment Assertion

  maVariable7: string | undefined = undefined;
  maVariable8?: string = undefined;

  maVariable9: number[] = [1, 2, 3, 4, 5]; // ❤️
  maVariable10: Array<number> = [1, 2, 3, 4, 5];

  maVariable11: unknown; // Principalement utilisé pour les paramètres de méthodes (indication)
  maVariable12!: never; // Principalement utilisé pour les paramètres de méthodes (indication)

  maVariable13: User = {
    email: 'quentin.geerts@bstorm.be',
    lastname: 'Geerts',
    firstname: 'Quentin',
    birthdate: new Date('1996-04-03'),
  };

  // Principalement utilisé pour les injections de dépendance
  constructor() {}

  // Principalement utilisée pour initialiser les variables du composant
  ngOnInit(): void {
    // Initialiser les variables
    this.maVariable6 = { name: 'Souris gaming', price: 59.99 };
    this.maVariable1 = 'Tom';
  }

  maMethode1(nb1: number, nb2: number): number {
    return nb1 + nb2;
  }
}
