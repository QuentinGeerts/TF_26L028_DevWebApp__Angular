import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo14-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './demo14-form-array.html',
  styleUrl: './demo14-form-array.css',
})
export class Demo14FormArray {
  myForm :FormGroup;

  fb = inject(FormBuilder)

  constructor(){
    this.myForm = this.fb.group({
      name : ['',[]],
      power : this.fb.array([this.fb.control('')])
    })
  }

  get power(){
    return this.myForm.get('power') as FormArray;
  }

  addPower(){
    this.power.push(this.fb.control(''))
  }

  removePower(index : number){
    this.power.removeAt(index)
  }


  // liste pour l'affichage
  heroes  = signal<{name : string , power : string[]}[]>([
    {
      name : 'Hulk',
      power : ['tout vert', 'force']
    }
  ])
  
  onSubmit(){
    this.heroes.update((list) => [...list,this.myForm.value])
        this.myForm.reset();
    this.power.clear();
    this.addPower(); 
  }
}
