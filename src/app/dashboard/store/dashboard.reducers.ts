import { ActionReducerMap } from '@ngrx/store';
import { State } from 'src/app/store/reducers/ui.reducers';
import * as cuentas from './reducers/cuentas.reducer';
import * as clientes from './reducers/clientes.reducer';

export interface AppStateWithDashboard extends State {
    dashboard: {
        cuentas: cuentas.State,
        clientes: clientes.State
    }
}

interface AppState {
    cuentas: cuentas.State,
    clientes: clientes.State
}

export const dashboardReducers: ActionReducerMap<AppState> = {
    clientes: clientes.clientesReducer,
    cuentas: cuentas.cuentasReducer
}