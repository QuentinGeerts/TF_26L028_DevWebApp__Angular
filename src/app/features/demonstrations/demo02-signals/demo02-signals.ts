import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { User } from '../demo01-interpolation/models/user.model';

@Component({
  selector: 'app-demo02-signals',
  imports: [],
  templateUrl: './demo02-signals.html',
  styleUrl: './demo02-signals.css',
})
export class Demo02Signals implements OnInit {
  // Typage inféré automatiquement (type est connu directement par la valeur) => Pas obligatoire de typer
  message: WritableSignal<string> = signal('Chargement...');
  message1: WritableSignal<User | null> = signal(null); // Obligation de typer car n'accepte que les null uniquement
  genre: WritableSignal<'M' | 'F'> = signal('M');

  compteur: WritableSignal<number> = signal(5);

  ngOnInit(): void {
    setTimeout(() => {
      this.message.set('Bonjour Jordan !');
      console.log('this.message :>> ', this.message);
    }, 2000);
  }

  incrementer(): void {
    // this.compteur.set(this.compteur() + 1); // Correct mais pas la bonne
    this.compteur.update((v) => v + 1); // ❤️
  }

  reinitialiser(): void {
    this.compteur.set(0);
  }
}
