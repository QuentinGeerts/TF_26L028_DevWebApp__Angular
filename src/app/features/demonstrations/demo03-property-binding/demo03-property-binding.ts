import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-demo03-property-binding',
  imports: [],
  templateUrl: './demo03-property-binding.html',
  styleUrl: './demo03-property-binding.css',
})
export class Demo03PropertyBinding {
  
  estDesactive: WritableSignal<boolean> = signal(false);

  urlPhoto: WritableSignal<string> = signal(
    'https://ziggyfamily.com/cdn/shop/articles/10-choses-a-savoir-sur-Garfield-chat_f15f48e1-8d2c-48f4-9160-745fd62365f8.png',
  );
  description: WritableSignal<string> = signal('Une photo de Garfield');
  taillePhotoLongueur: WritableSignal<number> = signal(200);

  prenom: WritableSignal<string> = signal("Quentin");

  toggleDisabled() {
    this.estDesactive.update((v) => !v);
  }

  agrandirPhoto() {
    this.taillePhotoLongueur.update(t => t + 30);
  }
}
