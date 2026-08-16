import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';
import { inject } from '@angular/core';

export const activateChildGuard: CanActivateChildFn = (childRoute, state) => {
  
  const authService = inject(AuthService)
  const router = inject(Router)

  const isLogged = authService.isLogged()

  if(isLogged){
    return true
  }

  router.navigateByUrl('')
  return false
};
