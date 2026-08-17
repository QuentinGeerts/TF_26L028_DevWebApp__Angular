import { Service, signal } from '@angular/core';
import { email } from '@angular/forms/signals';

@Service()
export class AuthService {

    isLogged = signal<boolean>(false)

    constructor(){
        if(sessionStorage.getItem('isLogged') === 'true'){
            this.isLogged.update((v) => !v)
        }
    }

    login({email,password } : {email : string , password : string}){
        if(email === ''){

        }

        this.isLogged.update((v) => !v)
        sessionStorage.setItem('isLogged','true')
        localStorage.setItem('token' , 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }

    register(){

    }

    logout(){
        this.isLogged.update((v) => !v)
        // localStorage.setItem('isLogged','false')
        // localStorage.removeItem('isLogged')
        sessionStorage.clear()
    }
}
