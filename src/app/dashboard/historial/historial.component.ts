import { firstValueFrom } from 'rxjs';
import { CuentaService } from './../../services/cuenta.service';
import { Component, OnInit } from '@angular/core';
import { CuentaAhorro } from '../cuenta.interface';
import { UtilsService } from 'src/app/services/utils.service';

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

  constructor(private _cuentaService: CuentaService, public _utils: UtilsService) { }

  ngOnInit(): void {
    setTimeout(async () => {
      this._utils.loading = true;
      firstValueFrom(this._cuentaService.consultarCuentasAhorro())
        .then((res: any) => {
          console.log(res);
          Object.keys(res).forEach(key => {
            this.cuentas.push(res[key]);
          });

          this.clientes = [...new Set(this.cuentas.map(c => c.idCliente))];
          console.log(this.clientes);
        })
        .catch(err => {
          console.warn(err);
        }).finally(() => this._utils.loading = false)
    }, 0)
  }

  seleccionarCuenta(cuenta: CuentaAhorro) {
    this._utils.loading = true;
    this.historialCuenta = [];
    firstValueFrom(this._cuentaService.historialTransacciones())
      .then((res: any) => {
        Object.keys(res).forEach(key => {
          if (res[key]['numeroCuenta'] === cuenta.numeroCuenta)
            this.historialCuenta.push(res[key]);
        });
      }).catch(err => {
        console.warn(err);
      }).finally(() => this._utils.loading = false)
  }

  seleccionarCliente(cliente: number) {
    this.cuentasCliente = [];
    this.cuentasCliente = this.cuentas.filter(c => c.idCliente == cliente);

  }

}
