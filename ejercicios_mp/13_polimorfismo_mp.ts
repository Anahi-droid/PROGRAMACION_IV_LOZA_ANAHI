class TrabajadorPoli {
    realizarTarea(): void {
        console.log("Tarea básica");
    }
}

class ReclutadorPoli extends TrabajadorPoli {
    override realizarTarea(): void {
        console.log("El reclutador entrevista candidatos");
    }
}

class AnalistaPoli extends TrabajadorPoli {
    override realizarTarea(): void {
        console.log("El analista procesa la nómina");
    }
}

const equipoPoli: TrabajadorPoli[] = [
    new ReclutadorPoli(),
    new AnalistaPoli(),
    new AnalistaPoli()
];

console.log(equipoPoli);
equipoPoli.forEach(miembro => miembro.realizarTarea());