import { createAction, props } from '@ngrx/store';

export const unSetClientes = createAction('[Clientes] UnSet Clientes');
export const setClientes = createAction('[Clientes] Set Clientes',
    props<{ items: number[] }>());