import { Cuenta } from '../../../models/cuentas.models';
import { Action, createReducer, on } from '@ngrx/store';
import { setCuentas, unSetCuentas } from '../actions';


export interface State {
    items: Cuenta[]
}

export const initialState: State = {
    items: []
}

const _cuentasReducer = createReducer(initialState,
    on(setCuentas, (state, { items }) => ({ ...state, items: [...items] })),
    on(unSetCuentas, state => ({ ...state, items: [] })),

);

export function cuentasReducer(state: State | undefined, action: Action) {
    return _cuentasReducer(state, action);
}