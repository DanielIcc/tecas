import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { CuentaService } from './../../services/cuenta.service';

import Swal from 'sweetalert2';

import { firstValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducers';
import * as uiActions from 'src/app/store/actions/ui.actions';

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.scss']
})
export class NuevaCuentaComponent implements OnInit {

  cuentaForm: FormGroup;

  get noCuenta() { return this.cuentaForm.controls['numeroCuenta'] }
  get saldo() { return this.cuentaForm.controls['saldo'] }
  get idCliente() { return this.cuentaForm.controls['idCliente'] }

  //State
  
  constructor(private _cuentaService: CuentaService, private fb: FormBuilder, private store: Store<AppState>) {
    this.cuentaForm = this.fb.group({
      numeroCuenta: ['', Validators.required],
      saldo: ['', Validators.required],
      idCliente: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    console.log(this.cuentaForm.value);
    if (this.cuentaForm.invalid) return;

    this.store.dispatch(uiActions.isLoading());    

    const { numeroCuenta, saldo, idCliente } = this.cuentaForm.value;
    const fecha = new Date();
    const fechaFormato = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
    firstValueFrom(this._cuentaService.crearCuentaAhorro({ saldo, idCliente, numeroCuenta, estado: "Activa", fechaUltimaAct: fechaFormato }))
      .then((res: any) => {
        console.log("CrearCuenta", res);
        Swal.fire('Exito', `Cuenta creada correctamente confirmación ${res.name}`, 'success');
      })
      .catch((error: HttpErrorResponse) => {
        console.warn('Error crear cuenta', error);
        Swal.fire('Error', error.message, 'error');
      })

    this.cuentaForm.reset();
    Object.keys(this.cuentaForm.controls).forEach(key => {
      this.cuentaForm.controls[key].setErrors(null)
    });
    this.store.dispatch(uiActions.stopLoading());
  }

}
