function sumarHoras(horas1: number, horas2: number) {
    return horas1 + horas2;
}

const totalHoras: number = sumarHoras(40, 8);
console.log(`Total de horas: ${totalHoras}`);

function mostrarDepartamento(nombre: string): void {
    console.log(`Departamento: ${nombre}`);
    const puestos: string[] = ["Reclutador", "Analista de nómina"];
    for (const puesto of puestos) {
        console.log(`Puesto disponible: ${puesto}`);
    }
}

mostrarDepartamento("Recursos Humanos");

function capacitarEmpleado(nombre: string, nivelCapacitacion?: number): void {
    if (nivelCapacitacion) {
        console.log(`${nombre} está en capacitación nivel ${nivelCapacitacion}`);
    } else {
        console.log(`${nombre} está en capacitación`);
    }
}

capacitarEmpleado("Carla Gómez", 3);
capacitarEmpleado("Jorge Ruiz");

function calcularBono(salario: number): number {
    return salario * 0.1;
}

const calcularBonoFlecha = (salario: number): number => salario * 0.1;

const salarioBase: number = 1200;
const bonoNormal: number = calcularBono(salarioBase);
console.log(`Salario base: ${salarioBase}, Bono: ${bonoNormal}`);

const bonoConFlecha: number = calcularBonoFlecha(salarioBase);
console.log(`Salario base: ${salarioBase}, Bono (flecha): ${bonoConFlecha}`);

function formatearDatoRH(valor: number): string;
function formatearDatoRH(valor: string): string;
function formatearDatoRH(valor: boolean): string;

function formatearDatoRH(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "sí" : "no";
    }
    return `${valor}`;
}

console.log(formatearDatoRH(2500.5));
console.log(formatearDatoRH(true));
console.log(formatearDatoRH("contratado"));

function crearContadorVacaciones(inicio: number = 0) {
    let dias = inicio;
    return {
        sumar: () => ++dias,
        restar: () => --dias,
        valor: () => dias,
        resetear: () => { dias = inicio; }
    };
}

const vacacionesAna = crearContadorVacaciones();
const vacacionesLuis = crearContadorVacaciones(15);

vacacionesAna.sumar();
vacacionesAna.sumar();
vacacionesAna.sumar();

console.log(vacacionesAna.valor());
console.log(vacacionesLuis.valor());

vacacionesAna.resetear();
console.log(vacacionesAna.valor());