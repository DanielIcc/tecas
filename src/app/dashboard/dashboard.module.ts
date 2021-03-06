import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from '../material.module';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { NuevaCuentaComponent } from './nueva-cuenta/nueva-cuenta.component';
import { HistorialComponent } from './historial/historial.component';
import { InicioComponent } from './inicio/inicio.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { clientesReducer } from './store/reducers/clientes.reducer';
import { cuentasReducer } from './store/reducers/cuentas.reducer';
import { dashboardReducers } from './store/dashboard.reducers';


const rutasHijas: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'alta', component: AltaClienteComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'nueva-cuenta', component: NuevaCuentaComponent },
      { path: 'ingreso-egreso', component: IngresoEgresoComponent }
    ]
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    NuevaCuentaComponent,
    HistorialComponent,
    InicioComponent,
    AltaClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(rutasHijas),
    StoreModule.forFeature('dashboard', dashboardReducers),
    AngularMaterialModule,
  ],
  exports: [
  ]
})

export class DashboardModule { }