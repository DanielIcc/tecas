import { AppState } from './../../store/app.reducers';
import { Component, OnInit, } from '@angular/core';

import { CuentaService } from './../../services/cuenta.service';
import { CuentaAhorro } from '../cuenta.interface';

import { firstValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';

import * as uiActions from 'src/app/store/actions/ui.actions';
import Swal from 'sweetalert2';

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
    // setTimeout(() => this.store.dispatch(uiActions.isLoading()), 0);
    this._cuentaService.consultarCuentasAhorro().subscribe({
      next: value => {
        this.cuentas = value;
        this.clientes = [...new Set(this.cuentas.map(c => c.idCliente))];
      },
      complete: () => this.store.dispatch(uiActions.stopLoading()),
      error: (error) => {
        this.store.dispatch(uiActions.stopLoading())
        Swal.fire('Error', error.message, 'error')
      }
    })
  }

  seleccionarCuenta(cuenta: CuentaAhorro) {
    this.store.dispatch(uiActions.isLoading());
    this.historialCuenta = [];

    this._cuentaService.historialTransacciones(cuenta).subscribe({
      next: (value: any) => this.historialCuenta = value,
      complete: () => this.store.dispatch(uiActions.stopLoading()),
      error: (error) => {
        this.store.dispatch(uiActions.stopLoading())
        Swal.fire('Error', error.message, 'error')
      }
    });
  }

  seleccionarCliente(cliente: number) {
    this.cuentasCliente = [];
    this.cuentasCliente = this.cuentas.filter(c => c.idCliente == cliente);
  }

}
