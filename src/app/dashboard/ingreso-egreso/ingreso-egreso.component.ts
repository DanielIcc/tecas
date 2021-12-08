import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';
import { firstValueFrom } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from 'src/app/services/cuenta.service';
import Swal from 'sweetalert2';

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

  constructor(private _cuentaService: CuentaService, private fb: FormBuilder, private _utils: UtilsService) {
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
    this._utils.loading = true;
    const fecha = new Date();

    const { monto, tipo, numeroCuenta, terminal, usuario } = this.transaccionForm.value;
    const fechaUltimaAct = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;

    firstValueFrom(this._cuentaService.altaTransaccion({ fechaUltimaAct, monto, tipo, numeroCuenta, terminal, usuario }))
      .then((res: any) => {
        Swal.fire('Exito', `Transacción exitosa confirmacion ${res.name}.`, 'success');
      })
      .catch((error: HttpErrorResponse) => {
        Swal.fire('Error', error.message, 'error');
        console.warn(error);
      })
      .finally(() => this._utils.loading = false)
  }

}
