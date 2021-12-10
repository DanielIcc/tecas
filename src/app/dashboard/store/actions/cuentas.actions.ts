import { createAction, props } from '@ngrx/store';
import { Cuenta } from 'src/app/models/cuentas.models';

export const setCuentas = createAction('[Cuentas] setCuentas',
    props<{ items: Cuenta[] }>());
export const unSetCuentas = createAction('[Cuentas] unSetCuentas');