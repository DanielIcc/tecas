import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './../../services/auth.service';
import { Credenciales } from 'src/app/models/credenciales.model';
import Swal from 'sweetalert2';


import { lastValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducers';
import * as uiActions from 'src/app/store/actions/ui.actions';


export interface AuthSuccess {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: number;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  hide = true;

  get email() { return this.loginForm.controls['email']; }
  get password() { return this.loginForm.controls['password']; }

  constructor(private fb: FormBuilder, private store: Store<AppState>, private _authService: AuthService, private router: Router) {

    this.loginForm = this.fb.group({
      email: ['desarrollo@prueba.com', [Validators.email, Validators.required]],
      password: ['pruebas001', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  async ingresar() {

    if (this.loginForm.invalid) return;

    this.store.dispatch(uiActions.isLoading());

    const { email, password } = this.loginForm.value;
    const credenciales = new Credenciales(email, password);

    lastValueFrom(this._authService.ingresar(credenciales)).then((res: AuthSuccess) => {
      localStorage.setItem("acceso", JSON.stringify(res));
      this.router.navigate(['/']);
    }).catch((error: HttpErrorResponse) => {
      Swal.fire('Error', (error.status == 400) ? 'Usuario y/o contraseña incorrectos' : error.message, 'error');
    })
      .finally(() => this.store.dispatch(uiActions.stopLoading()));
  }

}
