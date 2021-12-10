import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { Store } from '@ngrx/store';

import { CuentaService } from 'src/app/services/cuenta.service';
import * as uiActions from 'src/app/store/actions/ui.actions';
import { AppStateWithDashboard } from '../store/dashboard.reducers';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss']
})
export class IngresoEgresoComponent implements OnInit {

  transaccionForm: FormGroup;

  get monto() { return this.transaccionForm.controls['monto'] };
  get numeroCuenta() { return this.transaccionForm.controls['numeroCuenta'] };
  get tipo() { return this.transaccionForm.controls['tipo'] };

  constructor(private _cuentaService: CuentaService, private fb: FormBuilder,
    private store: Store<AppStateWithDashboard>) {

    this.transaccionForm = this.fb.group({
      monto: ['', Validators.required],
      numeroCuenta: ['', Validators.required],
      terminal: ['TERM235', Validators.required],
      tipo: ['Retiro', Validators.required],
      usuario: ['u-231', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  registrar() {
    if (this.transaccionForm.invalid) return;
    this.store.dispatch(uiActions.isLoading());
    const fecha = new Date();

    const { monto, tipo, numeroCuenta, terminal, usuario } = this.transaccionForm.value;
    const fechaUltimaAct = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;

    this._cuentaService.altaTransaccion({ fechaUltimaAct, monto, tipo, numeroCuenta, terminal, usuario }).subscribe({
      next: (res: any) => Swal.fire('Exito', `Transacción exitosa confirmacion ${res.name}.`, 'success'),
      complete: () => this.store.dispatch(uiActions.stopLoading()),
      error: (error: HttpErrorResponse) => {
        this.store.dispatch(uiActions.stopLoading())
        Swal.fire('Error', error.message, 'error')
      }
    });
  }

}
