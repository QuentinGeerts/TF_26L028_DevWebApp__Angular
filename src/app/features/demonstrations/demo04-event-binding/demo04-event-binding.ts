import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-demo04-event-binding',
  imports: [],
  templateUrl: './demo04-event-binding.html',
  styleUrl: './demo04-event-binding.css',
})
export class Demo04EventBinding {
  journal: WritableSignal<string> = signal('Aucune action pour le moment');
  saisie: WritableSignal<string> = signal('Quentin');

  saluer(prenom: string) {
    this.journal.set(`Bonjour ${prenom} !`);
  }

  survoler() {
    this.journal.set('Souris est entrée dans la zone.');
  }

  sortir() {
    this.journal.set('Souris est sortie dans la zone.');
  }

  surSaisie(event: InputEvent) {
    const champ = event.target as HTMLInputElement;
    this.saisie.set(champ.value);
  }

  surEntree(event: Event) {
    this.journal.set(`Validé: ${(event.target as HTMLInputElement).value}`);
  }
}
