import { CanActivateFn, Router } from '@angular/router';
import { AutentificadorService } from '../services/autentificador.service';
import { inject } from '@angular/core';

export const perfilesGuard: CanActivateFn = (route, state) => {
  const authService = inject(AutentificadorService);
  const ruteador = inject(Router);

  if (authService.estaLogeado == true) {
    return true;
  }

  ruteador.navigate(['/login']);
  return false;
};
