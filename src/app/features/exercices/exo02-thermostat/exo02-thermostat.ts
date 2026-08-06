import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-exo02-thermostat',
  imports: [],
  templateUrl: './exo02-thermostat.html',
  styleUrl: './exo02-thermostat.css',
})
export class Exo02Thermostat {

  temperature: WritableSignal<number> = signal(19);

  augmenter(): void {
    this.temperature.update((v) => v + 1);
  }

  diminuer(): void {
    this.temperature.update((v) => v - 1);
  }

  confort(): void {
    this.temperature.set(21);
  }

}
