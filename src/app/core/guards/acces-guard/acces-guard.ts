import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';

export const accesGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)

  const isLogged = authService.isLogged()

  if(isLogged){
    return true
  }

  return false
};
