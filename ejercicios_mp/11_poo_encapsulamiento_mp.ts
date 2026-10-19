class CuentaNomina {
    private saldo: number = 0;

    depositarSueldo(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
        }
    }

    descontar(monto: number): void {
        if (monto > 0) {
            this.saldo = Math.max(0, this.saldo - monto);
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const cuentaNomina = new CuentaNomina();
cuentaNomina.depositarSueldo(1500);
cuentaNomina.descontar(2000);
console.log(cuentaNomina.consultarSaldo());