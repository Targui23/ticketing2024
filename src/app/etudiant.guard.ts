import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const etudiantGuard: CanActivateFn = (route, state) => {
  const authentification = inject(AuthentificationService);
  const router = inject(Router);
  const snackBar: MatSnackBar = inject(MatSnackBar);

  if (authentification.role) {
    return true;
  } else {
    snackBar.open(
      "Vous ne pouvez pas accéder à cette page, veuillez vous connecter",
      undefined,
      {
        duration: 10000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'error',
      }
    );
    return router.createUrlTree(['/connexion']);
  }
};
