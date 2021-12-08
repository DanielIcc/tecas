import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private router: Router, private _authService: AuthService) { }

  canActivate() {
    return !this.sessionActiva();
  }

  sessionActiva(): boolean {
    const session = this._authService.validarToken();

    if (session)
      this.router.navigate(['/']);

    return session;
  }


}
