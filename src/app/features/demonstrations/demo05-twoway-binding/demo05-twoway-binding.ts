import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo05-twoway-binding',
  imports: [
    FormsModule, // ⚠️ Obligatoire pour ngModel
  ],
  templateUrl: './demo05-twoway-binding.html',
  styleUrl: './demo05-twoway-binding.css',
})
export class Demo05TwowayBinding {
  name: WritableSignal<string> = signal("Quentin");
  day: string = "Lundi";
  
  onInput(event: Event) {
    const field = event.target as HTMLInputElement;
    this.name.set(field.value);
  }
  
  reset() {
    this.name.set("Quentin");
  }
}
