let presupuestoContratacion = 1000;
let presupuestoMaximo = 2000;
while (presupuestoContratacion < presupuestoMaximo) {
    console.log("Presupuesto de contratación:", presupuestoContratacion);
    presupuestoContratacion += 250;
}

let entrevista = 1;
while (entrevista <= 5) {
    console.log("Entrevista número:", entrevista);
    entrevista++;
}

let reuniones = 0;
do {
    reuniones++;
    console.log(`Reunión de equipo número: ${reuniones}`);
} while (reuniones < 4);

interface Empleado {
    nombre: string;
    departamento: string;
    salario: number;
}

const empleados: Empleado[] = [
    { nombre: "Ana", departamento: "Ventas", salario: 1500 },
    { nombre: "Luis", departamento: "Ventas", salario: 1700 },
    { nombre: "Marta", departamento: "Sistemas", salario: 2500 },
    { nombre: "Pedro", departamento: "Contabilidad", salario: 900 }
];

let indice = 0;
while (indice < empleados.length) {
    const empleado = empleados[indice];
    if (empleado.departamento === "Ventas") {
        console.log(`Empleado: ${empleado.nombre}, Departamento: ${empleado.departamento}, Salario: ${empleado.salario}`);
        indice++;
        continue;
    }

    if (empleado.salario < 1000) {
        console.log(`Empleado: ${empleado.nombre}, Departamento: ${empleado.departamento}, Salario: ${empleado.salario}`);
        break;
    }
    indice++;
}