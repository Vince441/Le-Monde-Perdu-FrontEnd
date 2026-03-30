import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router)
  
const role = authService.getUserRole();
  if (role === 'ADMIN') {
    return true;
  } else {
    router.navigate(['/unauthorized']);
    return false;
  }
};
