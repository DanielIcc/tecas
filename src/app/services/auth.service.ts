import { Credenciales } from './../models/credenciales.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl: string = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI";

  constructor(private _http: HttpClient) {
  }

  ingresar(credenciales: Credenciales): Observable<any> {
    return this._http.post(this.loginUrl, credenciales);
  }

  validarToken(): boolean {
    const acceso = localStorage.getItem('acceso');
    let res = false;

    if (acceso && JSON.parse(acceso)['idToken'])
      res = true;

    return res;
  }

  token() {
    let token = "";
    const acceso = localStorage.getItem('acceso');

    if (acceso)
      token = JSON.parse(acceso)['idToken'];

    return token;
  }


}
