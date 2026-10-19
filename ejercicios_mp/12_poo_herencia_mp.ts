class TrabajadorHerencia {
    trabajar(): void {
        console.log("Trabajo básico");
    }
}

class ReclutadorHerencia extends TrabajadorHerencia {
    publicarVacante(): void {
        console.log("El reclutador publica una vacante");
    }
}

class AnalistaHerencia extends TrabajadorHerencia {
    calcularPago(): void {
        console.log("El analista calcula el pago quincenal");
    }
}

const reclutadorHerencia = new ReclutadorHerencia();
reclutadorHerencia.trabajar();
reclutadorHerencia.publicarVacante();

const analistaHerencia = new AnalistaHerencia();
analistaHerencia.trabajar();
analistaHerencia.calcularPago();