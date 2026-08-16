import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo14-form-control',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './demo14-form-control.html',
  styleUrl: './demo14-form-control.css',
})
export class Demo14FormControl {

  // binding simple
valueTwoWay : string = 'valeur Two-way'


// formulaire : FormControl
valueFormControl = new FormControl('',[])

valeurAffichage = signal<string>('')

soumissionForm(){
  console.log(this.valueFormControl);
  console.log(this.valueFormControl.value);
  this.valeurAffichage.set(this.valueFormControl.value || 'erreur')

}
}
