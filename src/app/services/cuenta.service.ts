import { Transaccion } from './../dashboard/cuenta.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CuentaAhorro } from '../dashboard/cuenta.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  cuentasUrl = {
    altaCuentaAhorro: "https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=",
    consultaCuentasAhorro: "https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=",
    consultaHistorialTransacciones: "https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=",
    altaTransaccion: "https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth="

  }


  constructor(private _http: HttpClient) {

  }

  crearCuentaAhorro(cuenta: CuentaAhorro) {
    return this._http.post(this.cuentasUrl.altaCuentaAhorro, cuenta);
  }

  consultarCuentasAhorro() {
    return this._http.get(this.cuentasUrl.consultaCuentasAhorro).pipe(
      map((elm: any) => {
        let temp: any = [];
        Object.keys(elm).forEach(key => temp.push(elm[key]))
        return temp;
      }));
  }

  historialTransacciones(cuenta: CuentaAhorro) {
    return this._http.get(this.cuentasUrl.consultaHistorialTransacciones).pipe(
      map((elm: any) => {
        let temp: any = [];
        Object.keys(elm).forEach(key => {
          if (elm[key]['numeroCuenta'] === cuenta.numeroCuenta)
            temp.push(elm[key]);
        });
        return temp;
      })
    )
  }

  altaTransaccion(movimiento: Transaccion) {
    return this._http.post(this.cuentasUrl.altaTransaccion, movimiento);
  }




}
