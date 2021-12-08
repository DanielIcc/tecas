import { AppState } from './../../store/app.reducers';
import { Component, OnInit, } from '@angular/core';

import { CuentaService } from './../../services/cuenta.service';
import { CuentaAhorro } from '../cuenta.interface';

import { firstValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import * as uiActions from 'src/app/store/actions/ui.actions';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  cuentas: CuentaAhorro[] = [];
  cuentasCliente: CuentaAhorro[] = [];
  clientes: number[] = [];

  cuentaSeleccionada = "";
  clienteSeleccionado = -1;

  historialCuenta: any[] = [];

  constructor(private _cuentaService: CuentaService,
    private store: Store<AppState>) { }


  ngOnInit(): void {
    setTimeout(() => this.store.dispatch(uiActions.isLoading()), 0);
    firstValueFrom(this._cuentaService.consultarCuentasAhorro())
      .then((res: any) => {
        Object.keys(res).forEach(key => {
          this.cuentas.push(res[key]);
        });
        this.clientes = [...new Set(this.cuentas.map(c => c.idCliente))];
      })
      .catch(err => {
        console.warn(err);
      }).finally(() => this.store.dispatch(uiActions.stopLoading()))
  }


  seleccionarCuenta(cuenta: CuentaAhorro) {
    this.store.dispatch(uiActions.isLoading());
    this.historialCuenta = [];
    firstValueFrom(this._cuentaService.historialTransacciones())
      .then((res: any) => {
        Object.keys(res).forEach(key => {
          if (res[key]['numeroCuenta'] === cuenta.numeroCuenta)
            this.historialCuenta.push(res[key]);
        });
      }).catch(err => {
        console.warn(err);
      }).finally(() => this.store.dispatch(uiActions.stopLoading()))
  }

  seleccionarCliente(cliente: number) {
    this.cuentasCliente = [];
    this.cuentasCliente = this.cuentas.filter(c => c.idCliente == cliente);
  }

}
