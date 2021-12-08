import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  /**
   *
   */
  constructor(private router: Router, private _authService: AuthService) { }


  canActivate(): boolean {
    return this.validarToken();
  }

  canLoad(): boolean {
    return this.validarToken();

  }

  validarToken(): boolean {
    const sessionActiva = this._authService.validarToken();

    if (!sessionActiva)
      this.router.navigate(['/home']);

    return sessionActiva;
  }

}
