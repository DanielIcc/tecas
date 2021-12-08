export interface CuentaAhorro {
    estado: string;
    fechaUltimaAct: string;
    idCliente: number;
    numeroCuenta: string;
    saldo: number;
}

export interface Transaccion {
    fechaUltimaAct: string;
    monto: number;
    numeroCuenta: string;
    terminal: string;
    tipo: string;
    usuario: string;
}