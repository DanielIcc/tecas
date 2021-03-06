import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Store } from '@ngrx/store';

import * as uiActions from 'src/app/store/actions/ui.actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.scss']
})
export class AltaClienteComponent implements OnInit {

  registroForm: FormGroup;



  get nombreF() { return this.registroForm.controls['nombre'] }
  get idF() { return this.registroForm.controls['id'] }
  get direccionF() { return this.registroForm.controls['direccion'] }
  get generoF() { return this.registroForm.controls['genero'] }
  get edadF() { return this.registroForm.controls['edad'] }

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      id: ['', Validators.required],
      direccion: ['', Validators.required],
      genero: ['', Validators.required],
      edad: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  registrar() {
    //No hay endpoint
    if (this.registroForm.invalid) return;

    console.log(this.registroForm.value);
    Swal.fire('Exito!', 'Registro exitoso bienvenido', 'success');

  }

}
