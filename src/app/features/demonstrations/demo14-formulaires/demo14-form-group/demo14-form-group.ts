import { Component, inject, signal } from '@angular/core';
import { User } from './user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo14-form-group',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './demo14-form-group.html',
  styleUrl: './demo14-form-group.css',
})
export class Demo14FormGroup {

listUser = signal<User[]>([
  {
    id : 1,
    name : 'bob',
    email : 'bob@mail.com',
    password : 'test1234',
    city : 'bruxelles',
    imageUrl : ''
  }
]) 

// objet formulaire qui va contenir les informations liés au formulaire
formUser : FormGroup;

// injection du formBuilder ( constructeur de formulaire )
private fb = inject(FormBuilder)

constructor(){
// construction du formulaire
this.formUser = this.fb.group({
  name :     ['', [Validators.required]],
  email :    ['', [Validators.required]],
  password : ['', [Validators.required]],
  city :     ['', []],
  image :    ['', []]
})
}

addUser(){
if(this.formUser.valid){
  const newUser : User = {
  id : this.listUser()[this.listUser().length -1].id + 1,
  name : this.formUser.value['name'],
  email : this.formUser.value['email'],
  password : this.formUser.value['password'],
  city : this.formUser.value['city'],
  imageUrl : this.formUser.get('image')?.value
}

this.listUser.update((list) => [...list , newUser])
}else{
  console.log('le formulaire est incorrect');
  
}
}

}
