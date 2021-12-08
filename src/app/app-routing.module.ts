import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { SessionGuard } from './services/session.guard';


const rutas: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [SessionGuard] },
  { path: 'home', component: HomeComponent, canActivate: [SessionGuard] },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
