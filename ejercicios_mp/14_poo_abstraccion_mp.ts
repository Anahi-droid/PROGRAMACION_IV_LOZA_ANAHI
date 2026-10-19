abstract class PersonalRH {
    abstract trabajar(): void;

    tomarDescanso(): void {
        console.log("El empleado toma su descanso");
    }
}

class ReclutadorAbstracto extends PersonalRH {
    trabajar(): void {
        console.log("El reclutador revisa currículums");
    }
}

class CapacitadorAbstracto extends PersonalRH {
    trabajar(): void {
        console.log("El capacitador dicta un taller");
    }
}

const equipoRH: PersonalRH[] = [
    new ReclutadorAbstracto(),
    new CapacitadorAbstracto()
];

console.log(equipoRH);
equipoRH.forEach(persona => persona.trabajar());