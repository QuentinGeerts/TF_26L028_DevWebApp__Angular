import { Component, signal } from '@angular/core';
import { Demo101OutputEnfant } from "../demo10.1-output-enfant/demo10.1-output-enfant";

@Component({
  selector: 'app-demo10.1-output-parent',
  imports: [Demo101OutputEnfant],
  templateUrl: './demo10.1-output-parent.html',
  styleUrl: './demo10.1-output-parent.css',
})
export class Demo101OutputParent {
    messages = signal<string[]>(['hello'])

  addMessage(valeur : string){
    this.messages().push(valeur)
  }
}
