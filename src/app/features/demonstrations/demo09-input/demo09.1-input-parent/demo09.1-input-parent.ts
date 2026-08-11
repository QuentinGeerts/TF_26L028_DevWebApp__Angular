import { Component } from '@angular/core';
import { Demo091InputEnfant } from '../demo09.1-input-enfant/demo09.1-input-enfant';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-demo09.1-input-parent',
  imports: [Demo091InputEnfant],
  templateUrl: './demo09.1-input-parent.html',
  styleUrl: './demo09.1-input-parent.css',
})
export class Demo091InputParent {

  message : string = "un message du parent"

  animalParent : Animal = {
    name : 'rex',
    couleur : 'gris',
    age : 5
  }
}
