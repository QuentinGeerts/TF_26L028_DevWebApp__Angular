import { Service, signal } from '@angular/core';

@Service()
export class AuthService {

    isLogged = signal<boolean>(false)

    login(){
        this.isLogged.update((v) => !v)
    }

    register(){

    }

    logout(){
        this.isLogged.update((v) => !v)
    }
}
