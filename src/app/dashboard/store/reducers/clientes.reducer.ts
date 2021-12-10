import { setClientes } from './../actions/clientes.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { unSetClientes } from '../actions';

export interface State {
    items: number[];
}

export const initialState: State = {
    items: []
}

const _clientesReducer = createReducer(initialState,
    on(unSetClientes, state => ({ ...state, items: [] })),
    on(setClientes, (state, { items }) => ({ ...state, items: [...items] })),

);

export function clientesReducer(state: State | undefined, action: Action) {
    return _clientesReducer(state, action);
}