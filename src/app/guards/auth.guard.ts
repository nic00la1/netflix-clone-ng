import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  // if user is already logged in then redirect to browse page
  if (!loginService.isLoggedIn) {
    return router.createUrlTree(['/login']);
  } else {
    return true;
  }
};
