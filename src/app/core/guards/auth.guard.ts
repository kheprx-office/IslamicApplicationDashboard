import { inject } from '@angular/core';
import {  CanActivateFn,  Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.authorized()) {
    console.log('Guard: User is authorized');
    return true;
  } else {
    console.log('Guard: User is not authorized');
    return router.createUrlTree(['auth/register']);
  }
};
