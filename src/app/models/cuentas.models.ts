export class Cuenta {
    /**
     *
     */
    constructor(
        public estado: string,
        public fechaUltimaAct: string,
        public idCliente: number,
        public numeroCuenta: string,
        public saldo: number
    ) {

    }
}