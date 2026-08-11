import { Component, input, Input } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-demo09-input-enfant',
  imports: [],
  templateUrl: './demo09.1-input-enfant.html',
  styleUrl: './demo09.1-input-enfant.css',
})
export class Demo091InputEnfant {

  // ancienne façon d'utiliser les inputs
  @Input() valeurRecu : string = 'valeur par défaut enfant';

  // nouvelle façon d'utiliser les inputs (signal) 
  message2 = input<string>('valeur par défaut 2')

  // input avec un objet 
  animal = input<Animal>(
    {
      name : 'garfield',
      couleur : 'roux',
      age : 3
    }
  )
}
