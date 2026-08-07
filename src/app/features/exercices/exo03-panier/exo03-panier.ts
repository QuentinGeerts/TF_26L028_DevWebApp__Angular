import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-exo03-panier',
  imports: [],
  templateUrl: './exo03-panier.html',
  styleUrl: './exo03-panier.css',
})
export class Exo03Panier {
  prixUnitaire: WritableSignal<number> = signal(25);
  quantite = signal(2);

  totalHT: Signal<number> = computed(() => this.prixUnitaire() * this.quantite());
  tva: Signal<number> = computed(() => this.totalHT() * 0.2);
  totalTTC: Signal<number> = computed(() => this.totalHT() + this.tva());

  augmenterPrix() {
    this.prixUnitaire.update((pu) => pu + 5);
  }

  diminuerPrix() {
    this.prixUnitaire.update((pu) => Math.max(0, pu - 5));
  }

  augmenterQuantite() {
    this.quantite.update((q) => q + 1);
  }

  diminuerQuantite() {
    this.quantite.update((q) => Math.max(1, q - 1));
  }
}
