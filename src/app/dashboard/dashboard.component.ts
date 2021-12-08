import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';

export interface Menu {
  descripcion: string;
  icono: string;
  activo: boolean;
  ruta?: string;
  subMenus?: Menu[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  menuArray: Menu[] = [
    {
      descripcion: 'Operaciones', icono: '', activo: false, subMenus: [
        { descripcion: 'Historial', icono: 'history', ruta: "/dashboard/historial", activo: false },
        { descripcion: 'Nueva Cuenta', icono: 'account_balance', ruta: "/dashboard/nueva-cuenta", activo: false },
        { descripcion: 'Ingresos Egresos', icono: 'compare_arrows', ruta: "/dashboard/ingreso-egreso", activo: false },
        { descripcion: 'Alta Cliente', icono: 'person', ruta: "/dashboard/alta", activo: false },
      ]
    }
  ];

  // para el side menu y toolbar
  @ViewChild('snav') sidenav?: MatSidenav;
  mobileQuery: MediaQueryList;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  private _mobileQueryListener: () => void;

  constructor(private breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher, private router: Router,public _utils: UtilsService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);

  }

  cerrarMenu(): void {
    this.isHandset$.subscribe(res => {
      if (res) this.sidenav!.close();
    })
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

}
