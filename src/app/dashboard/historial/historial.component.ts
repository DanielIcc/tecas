import { setCuentas } from './../store/actions/cuentas.actions';
import { setClientes } from './../store/actions/clientes.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CuentaService } from './../../services/cuenta.service';
import { CuentaAhorro } from '../cuenta.interface';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as uiActions from 'src/app/store/actions/ui.actions';
import Swal from 'sweetalert2';
import { AppStateWithDashboard } from '../store/dashboard.reducers';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit, OnDestroy {

  cuentas: CuentaAhorro[] = [];
  cuentasCliente: CuentaAhorro[] = [];
  clientes: number[] = [];

  cuentaSeleccionada = "";
  clienteSeleccionado = -1;

  historialCuenta: any[] = [];

  clientesSub?: Subscription;
  cuentasSub?: Subscription;

  constructor(private _cuentaService: CuentaService,
    private store: Store<AppStateWithDashboard>) { }


  ngOnInit(): void {
    this.clientesSub = this.store.select('dashboard').subscribe(({ clientes: { items } }) => this.clientes = items);
    this.cuentasSub = this.store.select('dashboard').subscribe(({ cuentas: { items } }) => this.cuentas = items);

    setTimeout(() => {
      this.store.dispatch(uiActions.isLoading())

      this._cuentaService.consultarCuentasAhorro().subscribe({
        next: value => {
          this.store.dispatch(setCuentas({ items: value }));
          this.store.dispatch(setClientes({ items: [...new Set(this.cuentas.map(c => c.idCliente))] }))
        },
        complete: () => this.store.dispatch(uiActions.stopLoading()),
        error: (error) => {
          this.store.dispatch(uiActions.stopLoading())
          Swal.fire('Error', error.message, 'error')
        }
      })
    }, 0);
  }

  ngOnDestroy(): void {
    this.cuentasSub?.unsubscribe();
    this.clientesSub?.unsubscribe();
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
