import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo04-carte-produit',
  imports: [
    FormsModule
  ],
  templateUrl: './exo04-carte-produit.html',
  styleUrl: './exo04-carte-produit.css',
})
export class Exo04CarteProduit {
  // Variables (en signal)
  nom: WritableSignal<string> = signal('Casque sans fil');
  prix: WritableSignal<number> = signal(29.99);
  urlImage = signal(
    'https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png',
  );
  description = signal('Photo du casque audio sans fil');
  tailleImage = signal(200);
  stock = signal(3);
  estEnPromotion = signal(true);

  estEnStock: Signal<boolean> = computed(() => this.stock() !== 0);

  valeurStock: Signal<number> = computed(() => this.prix() * this.stock());

  status: Signal<string> = computed(() =>
    this.estEnStock() ? 'En stock' : 'En rupture de stock',
  );
  couleurStock: Signal<string> = computed(() => 
    this.estEnStock() ? '#6b7280' : '#dd0031'
);

  // Propriété simple car ngModel
  noteVendeur: string = '';

  // Méthodes
  ajouterPanier(): void {
    this.stock.update((s) => Math.max(0, s - 1));
  }

  reapprovisionner(): void {
    this.stock.set(3);
  }

  agrandirImage(): void {
    this.tailleImage.update((t) => (t === 200 ? 500 : 200));
  }

  renommer(event: Event): void {
    this.nom.set((event.target as HTMLInputElement).value);
  }

  viderNote(): void {
    this.noteVendeur = '';
  }
}
