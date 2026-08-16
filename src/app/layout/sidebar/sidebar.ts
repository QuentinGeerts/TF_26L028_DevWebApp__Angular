import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  authService = inject(AuthService)

  isLogged = this.authService.isLogged

  login(){
    this.authService.login()
  }

  logout(){
    this.authService.logout()
  }
}
