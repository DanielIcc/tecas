"use strict";(self.webpackChunktecas=self.webpackChunktecas||[]).push([[897],{897:(Dt,y,i)=>{i.r(y),i.d(y,{DashboardModule:()=>Qt});var l=i(9007),a=i(9133),f=i(1850),h=i(6019),t=i(3668),M=i(348),Q=i(273),D=i(5804),j=i(1404),Y=i(8305),H=i(9468),E=i(9661),P=i(9463),v=i(4753),k=i(3970),R=i(6263),V=i(928);const U=new Set;let Z,O=(()=>{class n{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):G}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function(n){if(!U.has(n))try{Z||(Z=document.createElement("style"),Z.setAttribute("type","text/css"),document.head.appendChild(Z)),Z.sheet&&(Z.sheet.insertRule(`@media ${n} {body{ }}`,0),U.add(n))}catch(r){console.error(r)}}(e),this._matchMedia(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(V.t4))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function G(n){return{matches:"all"===n||""===n,media:n,addListener:()=>{},removeListener:()=>{}}}let $=(()=>{class n{constructor(e,o){this._mediaMatcher=e,this._zone=o,this._queries=new Map,this._destroySubject=new Q.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return F((0,M.Eq)(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){const s=F((0,M.Eq)(e)).map(m=>this._registerQuery(m).observable);let c=(0,D.a)(s);return c=(0,j.z)(c.pipe((0,H.q)(1)),c.pipe((0,E.T)(1),(0,P.b)(0))),c.pipe((0,v.U)(m=>{const u={matches:!1,breakpoints:{}};return m.forEach(({matches:C,query:b})=>{u.matches=u.matches||C,u.breakpoints[b]=C}),u}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const o=this._mediaMatcher.matchMedia(e),c={observable:new Y.y(m=>{const u=C=>this._zone.run(()=>m.next(C));return o.addListener(u),()=>{o.removeListener(u)}}).pipe((0,k.O)(o),(0,v.U)(({matches:m})=>({query:e,matches:m})),(0,R.R)(this._destroySubject)),mql:o};return this._queries.set(e,c),c}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(O),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function F(n){return n.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}var X=i(8643),x=i(86),W=i(9112),T=i(3084),I=i(8895),A=i(3050);const K=["snav"],tt=function(n){return[n]};function et(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"a",17),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).cerrarMenu()}),t.TgZ(1,"mat-icon",18),t._uU(2),t.qZA(),t._uU(3),t.qZA()}if(2&n){const e=r.$implicit;t.Q6J("routerLink",t.VKq(3,tt,e.ruta)),t.xp6(2),t.hij("",e.icono," "),t.xp6(1),t.hij(" ",e.descripcion," ")}}function nt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"mat-expansion-panel",12),t.TgZ(2,"mat-expansion-panel-header",13,14),t.NdJ("click",function(){return t.CHM(e),t.MAs(3)._toggle()}),t._uU(4),t.qZA(),t.TgZ(5,"mat-nav-list",15),t.YNc(6,et,4,5,"a",16),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=r.$implicit;t.xp6(1),t.Q6J("expanded",!0),t.xp6(1),t.Q6J("collapsedHeight","40px")("expandedHeight","40px"),t.xp6(2),t.hij(" ",e.descripcion," "),t.xp6(2),t.Q6J("ngForOf",e.subMenus)}}let ot=(()=>{class n{constructor(e,o,s,c){this.breakpointObserver=e,this.router=c,this.menuArray=[{descripcion:"Operaciones",icono:"",activo:!1,subMenus:[{descripcion:"Historial",icono:"history",ruta:"/dashboard/historial",activo:!1},{descripcion:"Nueva Cuenta",icono:"account_balance",ruta:"/dashboard/nueva-cuenta",activo:!1},{descripcion:"Ingresos Egresos",icono:"compare_arrows",ruta:"/dashboard/ingreso-egreso",activo:!1},{descripcion:"Alta Cliente",icono:"person",ruta:"/dashboard/alta",activo:!1}]}],this.isHandset$=this.breakpointObserver.observe("(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)").pipe((0,v.U)(m=>m.matches)),this.mobileQuery=s.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>o.detectChanges(),this.mobileQuery.addEventListener("change",this._mobileQueryListener)}ngOnInit(){}ngOnDestroy(){this.mobileQuery.removeEventListener("change",this._mobileQueryListener)}cerrarMenu(){this.isHandset$.subscribe(e=>{e&&this.sidenav.close()})}cerrarSesion(){localStorage.clear(),this.router.navigate(["/home"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36($),t.Y36(t.sBO),t.Y36(O),t.Y36(f.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],viewQuery:function(e,o){if(1&e&&t.Gf(K,5),2&e){let s;t.iGM(s=t.CRH())&&(o.sidenav=s.first)}},decls:18,vars:7,consts:[[1,"mat-typography"],[1,"mat-elevation-z2",2,"background-color","white"],["aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"],["src","./assets/images/TCR-logo.png","width","120px"],[1,"spacer"],["color","primary","mat-stroked-button","",2,"margin-right","5px",3,"click"],["color","primary",3,"hasBackdrop"],["fixedTopGap","56",1,"mat-elevation-z2",3,"mode","fixedInViewport","opened"],["snav",""],["multi","true"],[4,"ngFor","ngForOf"],["hideToggle","true",1,"menu","mat-elevation-z0",3,"expanded"],["matRipple","",3,"collapsedHeight","expandedHeight","click"],["panelH",""],["dense",""],["routerLinkActive","activo","mat-list-item","",3,"routerLink","click",4,"ngFor","ngForOf"],["routerLinkActive","activo","mat-list-item","",3,"routerLink","click"],["aria-label","Side nav toggle icon",1,"menu-icon"]],template:function(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-toolbar",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return t.CHM(s),t.MAs(11).toggle()}),t.TgZ(3,"mat-icon",3),t._uU(4,"menu"),t.qZA(),t.qZA(),t._UZ(5,"img",4),t._UZ(6,"span",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return o.cerrarSesion()}),t._uU(8,"Cerrar sesi\xf3n"),t.qZA(),t.qZA(),t.TgZ(9,"mat-sidenav-container",7),t.TgZ(10,"mat-sidenav",8,9),t.ALo(12,"async"),t.TgZ(13,"mat-nav-list"),t.TgZ(14,"mat-accordion",10),t.YNc(15,nt,7,5,"div",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"mat-sidenav-content"),t._UZ(17,"router-outlet"),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(9),t.Q6J("hasBackdrop",!1),t.xp6(1),t.Q6J("mode",o.mobileQuery.matches?"over":"side")("fixedInViewport",!0)("opened",!t.lcZ(12,5,o.isHandset$)),t.xp6(5),t.Q6J("ngForOf",o.menuArray))},directives:[X.Ye,x.lW,W.Hw,T.TM,T.JX,I.Hk,A.pp,h.sg,T.Rh,f.lC,A.ib,A.yz,I.Tg,f.yS,f.Od],pipes:[h.Ov],styles:[".margin-Top-56[_ngcontent-%COMP%]{margin-top:56px}.menu-icon[_ngcontent-%COMP%]{margin-right:5px!important}.mat-list-base[_ngcontent-%COMP%]{padding:0!important}.mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:0!important}.menu[_ngcontent-%COMP%]{background-color:#f5f5f5!important}.mat-accordion[_ngcontent-%COMP%]{background-color:#f5f5f5!important}.loader-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;top:0;left:0;opacity:1;z-index:500000}"]}),n})();var rt=i(8129),at=i(1659),g=i.n(at),p=i(8082),it=i(4522);let _=(()=>{class n{constructor(e){this._http=e,this.cuentasUrl={altaCuentaAhorro:"https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=",consultaCuentasAhorro:"https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=",consultaHistorialTransacciones:"https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth=",altaTransaccion:"https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json?auth="}}crearCuentaAhorro(e){return this._http.post(this.cuentasUrl.altaCuentaAhorro,e)}consultarCuentasAhorro(){return this._http.get(this.cuentasUrl.consultaCuentasAhorro).pipe((0,v.U)(e=>{let o=[];return Object.keys(e).forEach(s=>o.push(e[s])),o}))}historialTransacciones(e){return this._http.get(this.cuentasUrl.consultaHistorialTransacciones).pipe((0,v.U)(o=>{let s=[];return Object.keys(o).forEach(c=>{o[c].numeroCuenta===e.numeroCuenta&&s.push(o[c])}),s}))}altaTransaccion(e){return this._http.post(this.cuentasUrl.altaTransaccion,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(it.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var d=i(8167),q=i(138),N=i(9859);function st(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function ct(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}let lt=(()=>{class n{constructor(e,o,s){this._cuentaService=e,this.fb=o,this.store=s,this.transaccionForm=this.fb.group({monto:["",a.kI.required],numeroCuenta:["",a.kI.required],terminal:["TERM235",a.kI.required],tipo:["Retiro",a.kI.required],usuario:["u-231",a.kI.required]})}get monto(){return this.transaccionForm.controls.monto}get numeroCuenta(){return this.transaccionForm.controls.numeroCuenta}get tipo(){return this.transaccionForm.controls.tipo}ngOnInit(){}registrar(){if(this.transaccionForm.invalid)return;this.store.dispatch(p.h());const e=new Date,{monto:o,tipo:s,numeroCuenta:c,terminal:m,usuario:u}=this.transaccionForm.value,C=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`;this._cuentaService.altaTransaccion({fechaUltimaAct:C,monto:o,tipo:s,numeroCuenta:c,terminal:m,usuario:u}).subscribe({next:b=>g().fire("Exito",`Transacci\xf3n exitosa confirmacion ${b.name}.`,"success"),complete:()=>this.store.dispatch(p.V()),error:b=>{this.store.dispatch(p.V()),g().fire("Error",b.message,"error")}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(a.qu),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ingreso-egreso"]],decls:22,vars:3,consts:[[1,"flex-container"],[1,"container"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","xx00xx000x00","formControlName","numeroCuenta"],[4,"ngIf"],["type","number","matInput","","placeholder","0.00","formControlName","monto"],["formControlName","tipo","aria-label","Tipo de transacci\xf3n"],["value","Retiro"],["value","Deposito"],["mat-raised-button","","type","submit","color","primary",1,"full-button",2,"margin-top","15px"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Realizar una Transacci\xf3n"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return o.registrar()}),t.TgZ(5,"mat-form-field",3),t.TgZ(6,"mat-label"),t._uU(7,"N\xfamero de Cuenta"),t.qZA(),t._UZ(8,"input",4),t.YNc(9,st,2,0,"mat-error",5),t.qZA(),t.TgZ(10,"mat-form-field",3),t.TgZ(11,"mat-label"),t._uU(12,"Monto"),t.qZA(),t._UZ(13,"input",6),t.YNc(14,ct,2,0,"mat-error",5),t.qZA(),t.TgZ(15,"mat-radio-group",7),t.TgZ(16,"mat-radio-button",8),t._uU(17,"Retiro"),t.qZA(),t.TgZ(18,"mat-radio-button",9),t._uU(19,"Dep\xf3sito"),t.qZA(),t.qZA(),t.TgZ(20,"button",10),t._uU(21," Realizar transacci\xf3n"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.transaccionForm),t.xp6(5),t.Q6J("ngIf",o.numeroCuenta),t.xp6(5),t.Q6J("ngIf",o.monto))},directives:[a._Y,a.JL,a.sg,d.KE,d.hX,q.Nt,a.Fj,a.JJ,a.u,h.O5,a.wV,N.VQ,N.U0,x.lW,d.TO],styles:[".container[_ngcontent-%COMP%]{width:350px;margin-top:56px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px;margin-top:20px}button[_ngcontent-%COMP%]{margin-top:20px!important}@media (max-width: 600px){.container[_ngcontent-%COMP%]{width:250px}}"]}),n})();function ut(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function mt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function pt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}let dt=(()=>{class n{constructor(e,o,s){this._cuentaService=e,this.fb=o,this.store=s,this.cuentaForm=this.fb.group({numeroCuenta:["",a.kI.required],saldo:["",a.kI.required],idCliente:["",a.kI.required]})}get noCuenta(){return this.cuentaForm.controls.numeroCuenta}get saldo(){return this.cuentaForm.controls.saldo}get idCliente(){return this.cuentaForm.controls.idCliente}ngOnInit(){}registrar(){if(console.log(this.cuentaForm.value),this.cuentaForm.invalid)return;this.store.dispatch(p.h());const{numeroCuenta:e,saldo:o,idCliente:s}=this.cuentaForm.value,c=new Date,m=`${c.getFullYear()}-${c.getMonth()+1}-${c.getDate()}`;this._cuentaService.crearCuentaAhorro({saldo:o,idCliente:s,numeroCuenta:e,estado:"Activa",fechaUltimaAct:m}).subscribe({next:u=>g().fire("Exito",`Cuenta creada correctamente confirmaci\xf3n ${u.name}`,"success"),complete:()=>this.store.dispatch(p.V()),error:u=>{this.store.dispatch(p.V()),g().fire("Error",u.message,"error")}}),this.cuentaForm.reset(),Object.keys(this.cuentaForm.controls).forEach(u=>{this.cuentaForm.controls[u].setErrors(null)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(a.qu),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-nueva-cuenta"]],decls:22,vars:4,consts:[[1,"flex-container-cuenta"],[1,"cuenta-container"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","xx00xx000x00","formControlName","numeroCuenta"],[4,"ngIf"],["type","number","matInput","","placeholder","0.00","formControlName","saldo"],["type","number","matInput","","placeholder","000000000000","formControlName","idCliente"],["mat-raised-button","","type","submit","color","primary",1,"full-button",2,"margin-top","15px"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Apertura de cuentas de ahorro"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return o.registrar()}),t.TgZ(5,"mat-form-field",3),t.TgZ(6,"mat-label"),t._uU(7,"N\xfamero de Cuenta"),t.qZA(),t._UZ(8,"input",4),t.YNc(9,ut,2,0,"mat-error",5),t.qZA(),t.TgZ(10,"mat-form-field",3),t.TgZ(11,"mat-label"),t._uU(12,"Saldo"),t.qZA(),t._UZ(13,"input",6),t.YNc(14,mt,2,0,"mat-error",5),t.qZA(),t.TgZ(15,"mat-form-field",3),t.TgZ(16,"mat-label"),t._uU(17,"ID Cliente"),t.qZA(),t._UZ(18,"input",7),t.YNc(19,pt,2,0,"mat-error",5),t.qZA(),t.TgZ(20,"button",8),t._uU(21,"Crear Cuenta de Ahorro"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.cuentaForm),t.xp6(5),t.Q6J("ngIf",o.noCuenta),t.xp6(5),t.Q6J("ngIf",o.saldo),t.xp6(5),t.Q6J("ngIf",o.idCliente))},directives:[a._Y,a.JL,a.sg,d.KE,d.hX,q.Nt,a.Fj,a.JJ,a.u,h.O5,a.wV,x.lW,d.TO],styles:[".flex-container-cuenta[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:center;height:calc(100vh - 56px)}.cuenta-container[_ngcontent-%COMP%]{width:350px;margin-top:56px}mat-form-field[_ngcontent-%COMP%]{width:100%}@media (max-width: 600px){.cuenta-container[_ngcontent-%COMP%]{width:250px}}"]}),n})();const S=(0,l.PH)("[Cuentas] setCuentas",(0,l.Ky)()),ht=(0,l.PH)("[Cuentas] unSetCuentas"),gt=(0,l.PH)("[Clientes] UnSet Clientes"),w=(0,l.PH)("[Clientes] Set Clientes",(0,l.Ky)());var J=i(6400),L=i(6731);function ft(n,r){if(1&n&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",e," ")}}function Zt(n,r){if(1&n&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",e.numeroCuenta," ")}}function Ct(n,r){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.qZA()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,8,e.fechaUltimaAct)),t.xp6(3),t.Oqu(t.lcZ(6,10,e.monto)),t.xp6(3),t.Oqu(e.terminal),t.xp6(1),t.ekj("deposito","deposito"==e.tipo.toLowerCase())("retiro","retiro"===e.tipo.toLowerCase()),t.xp6(1),t.hij(" ",e.tipo," ")}}function vt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"h4",8),t._uU(2,"Detalle de ingreso egreso"),t.qZA(),t.TgZ(3,"table",9),t.TgZ(4,"thead"),t.TgZ(5,"tr"),t.TgZ(6,"th"),t._uU(7,"Fecha"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Monto"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Terminal"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Tipo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,Ct,11,12,"tr",10),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(15),t.Q6J("ngForOf",e.historialCuenta)}}function bt(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1,"No hay transacciones"),t.qZA())}let xt=(()=>{class n{constructor(e,o){this._cuentaService=e,this.store=o,this.cuentas=[],this.cuentasCliente=[],this.clientes=[],this.cuentaSeleccionada="",this.clienteSeleccionado=-1,this.historialCuenta=[]}ngOnInit(){this.clientesSub=this.store.select("dashboard").subscribe(({clientes:{items:e}})=>this.clientes=e),this.cuentasSub=this.store.select("dashboard").subscribe(({cuentas:{items:e}})=>this.cuentas=e),setTimeout(()=>{this.store.dispatch(p.h()),this._cuentaService.consultarCuentasAhorro().subscribe({next:e=>{this.store.dispatch(S({items:e})),this.store.dispatch(w({items:[...new Set(this.cuentas.map(o=>o.idCliente))]}))},complete:()=>this.store.dispatch(p.V()),error:e=>{this.store.dispatch(p.V()),g().fire("Error",e.message,"error")}})},0)}ngOnDestroy(){var e,o;null===(e=this.cuentasSub)||void 0===e||e.unsubscribe(),null===(o=this.clientesSub)||void 0===o||o.unsubscribe()}seleccionarCuenta(e){this.store.dispatch(p.h()),this.historialCuenta=[],this._cuentaService.historialTransacciones(e).subscribe({next:o=>this.historialCuenta=o,complete:()=>this.store.dispatch(p.V()),error:o=>{this.store.dispatch(p.V()),g().fire("Error",o.message,"error")}})}seleccionarCliente(e){this.cuentasCliente=[],this.cuentasCliente=this.cuentas.filter(o=>o.idCliente==e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-historial"]],decls:19,vars:7,consts:[[1,"flex-container"],[1,"contenedor"],["appearance","outline"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["notrans",""],[3,"value"],[1,"card-title"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Historial de transacciones"),t.qZA(),t.TgZ(4,"mat-form-field",2),t.TgZ(5,"mat-label"),t._uU(6,"Selecciona el Cliente"),t.qZA(),t.TgZ(7,"mat-select",3),t.NdJ("ngModelChange",function(c){return o.seleccionarCliente(c)}),t.YNc(8,ft,2,2,"mat-option",4),t.qZA(),t.qZA(),t.TgZ(9,"mat-form-field",2),t.TgZ(10,"mat-label"),t._uU(11,"Selecciona la Cuenta"),t.qZA(),t.TgZ(12,"mat-select",3),t.NdJ("ngModelChange",function(c){return o.seleccionarCuenta(c)}),t.YNc(13,Zt,2,2,"mat-option",4),t.qZA(),t.TgZ(14,"mat-hint"),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.YNc(16,vt,16,1,"ng-container",5),t.YNc(17,bt,2,0,"ng-template",null,6,t.W1O),t.qZA()),2&e){const s=t.MAs(18);t.xp6(7),t.Q6J("ngModel",o.clienteSeleccionado),t.xp6(1),t.Q6J("ngForOf",o.clientes),t.xp6(4),t.Q6J("ngModel",o.cuentaSeleccionada),t.xp6(1),t.Q6J("ngForOf",o.cuentasCliente),t.xp6(2),t.hij("Cuentas: ",o.cuentasCliente.length,""),t.xp6(1),t.Q6J("ngIf",o.historialCuenta.length>0)("ngIfElse",s)}},directives:[d.KE,d.hX,J.gD,a.JJ,a.On,h.sg,d.bx,h.O5,L.ey],pipes:[h.uU,h.H9],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}.deposito[_ngcontent-%COMP%]{color:green}.retiro[_ngcontent-%COMP%]{color:red}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px;text-align:left;border-bottom:1px solid #ddd}@media (max-width: 600px){.cuenta-container[_ngcontent-%COMP%]{width:250px}}"]}),n})(),Tt=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-inicio"]],decls:5,vars:0,consts:[[1,"contenedor"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Bienvenido"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Nuevo sistema de cuentas de ahorro, puedes crear tantas como necesites y hacer tanto retiros como depositos."),t.qZA(),t.qZA())},encapsulation:2}),n})();function At(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function _t(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function qt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function yt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}function Mt(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Campo requerido"),t.qZA())}let Ut=(()=>{class n{constructor(e,o,s){this.fb=e,this.router=o,this.store=s,this.registroForm=this.fb.group({nombre:["",a.kI.required],id:["",a.kI.required],direccion:["",a.kI.required],genero:["",a.kI.required],edad:["",a.kI.required]})}get nombreF(){return this.registroForm.controls.nombre}get idF(){return this.registroForm.controls.id}get direccionF(){return this.registroForm.controls.direccion}get generoF(){return this.registroForm.controls.genero}get edadF(){return this.registroForm.controls.edad}ngOnInit(){}registrar(){this.registroForm.invalid||(console.log(this.registroForm.value),g().fire("Exito!","Registro exitoso bienvenido","success"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(f.F0),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alta-cliente"]],decls:38,vars:6,consts:[[1,"flex-container-registro"],[1,"registro-container"],[2,"margin-top","15px",3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","Daniel de Leon","formControlName","nombre"],[4,"ngIf"],["formControlName","genero"],["value","hombre"],["value","mujer"],["type","number","matInput","","placeholder","xxxxxxxx","formControlName","edad"],["matInput","","placeholder","avenida siempre viva 742","formControlName","direccion"],["matInput","","placeholder","xxxxxxxx","formControlName","id"],["mat-raised-button","","type","submit","color","primary",1,"full-button","mt-10"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Alta de clientes"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Llena todos los campos."),t.qZA(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return o.registrar()}),t.TgZ(7,"mat-form-field",3),t.TgZ(8,"mat-label"),t._uU(9,"Nombre Completo"),t.qZA(),t._UZ(10,"input",4),t.YNc(11,At,2,0,"mat-error",5),t.qZA(),t.TgZ(12,"mat-form-field",3),t.TgZ(13,"mat-label"),t._uU(14,"G\xe9nero"),t.qZA(),t.TgZ(15,"mat-select",6),t.TgZ(16,"mat-option",7),t._uU(17,"Hombre"),t.qZA(),t.TgZ(18,"mat-option",8),t._uU(19,"Mujer"),t.qZA(),t.qZA(),t.YNc(20,_t,2,0,"mat-error",5),t.qZA(),t.TgZ(21,"mat-form-field",3),t.TgZ(22,"mat-label"),t._uU(23,"Edad"),t.qZA(),t._UZ(24,"input",9),t.YNc(25,qt,2,0,"mat-error",5),t.qZA(),t.TgZ(26,"mat-form-field",3),t.TgZ(27,"mat-label"),t._uU(28,"Direcci\xf3n"),t.qZA(),t._UZ(29,"input",10),t.YNc(30,yt,2,0,"mat-error",5),t.qZA(),t.TgZ(31,"mat-form-field",3),t.TgZ(32,"mat-label"),t._uU(33,"N\xfamero de identificaci\xf3n"),t.qZA(),t._UZ(34,"input",11),t.YNc(35,Mt,2,0,"mat-error",5),t.qZA(),t.TgZ(36,"button",12),t._uU(37,"Crear Cuenta"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.registroForm),t.xp6(5),t.Q6J("ngIf",o.nombreF),t.xp6(9),t.Q6J("ngIf",o.generoF),t.xp6(5),t.Q6J("ngIf",o.edadF),t.xp6(5),t.Q6J("ngIf",o.direccionF),t.xp6(5),t.Q6J("ngIf",o.idF))},directives:[a._Y,a.JL,a.sg,d.KE,d.hX,q.Nt,a.Fj,a.JJ,a.u,h.O5,J.gD,L.ey,a.wV,x.lW,d.TO],styles:[".registro-container[_ngcontent-%COMP%]{margin-top:56px;width:350px}mat-form-field[_ngcontent-%COMP%]{width:100%}.flex-container-registro[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:center;height:calc(100vh - 56px)}@media (max-width: 600px){.registro-container[_ngcontent-%COMP%]{width:250px}}"]}),n})();const Ft=(0,l.Lq)({items:[]},(0,l.on)(S,(n,{items:r})=>Object.assign(Object.assign({},n),{items:[...r]})),(0,l.on)(ht,n=>Object.assign(Object.assign({},n),{items:[]}))),St=(0,l.Lq)({items:[]},(0,l.on)(gt,n=>Object.assign(Object.assign({},n),{items:[]})),(0,l.on)(w,(n,{items:r})=>Object.assign(Object.assign({},n),{items:[...r]}))),Jt={clientes:function(n,r){return St(n,r)},cuentas:function(n,r){return Ft(n,r)}},Lt=[{path:"",component:ot,children:[{path:"",redirectTo:"inicio",pathMatch:"full"},{path:"inicio",component:Tt},{path:"alta",component:Ut},{path:"historial",component:xt},{path:"nueva-cuenta",component:dt},{path:"ingreso-egreso",component:lt}]}];let Qt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.ez,a.u5,a.UX,f.Bz.forChild(Lt),l.Aw.forFeature("dashboard",Jt),rt.h]]}),n})()}}]);