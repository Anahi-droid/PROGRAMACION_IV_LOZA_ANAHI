type IdEmpleado = string | number;
type Cedula = string;
type HorarioLaboral = [number, number];
type Sueldo = {
    base: number;
    bono: number;
};

const sueldoInicial: Sueldo = { base: 1000, bono: 0 };
const idEmpleadoFijo: IdEmpleado = 101;
const idEmpleadoTemporal: IdEmpleado = "emp-001";

type SueldoCompleto = Sueldo & {
    descuentos: number;
};

interface PersonaRH {
    readonly id: number;
    nombre: string;
    correo: string;
    foto?: string;
}

interface GerenteRH extends PersonaRH {
    area: string;
}

const personaUno: PersonaRH = {
    id: 1,
    nombre: "Ana",
    correo: "ana@empresa.com"
};

const personaDos: PersonaRH = {
    id: 2,
    nombre: "Luis",
    correo: "luis@empresa.com",
    foto: "luis.png"
};

console.log(personaUno);
console.log(personaDos);