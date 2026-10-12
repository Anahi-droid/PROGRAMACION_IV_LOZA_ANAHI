// prompt funciona en el navegador (en Node.js se usa readline)
let cargoEmpleado = prompt("Ingrese el cargo (Gerente, Desarrollador, Contador, Recepcionista, Practicante): ");
let edadEmpleado = Number(prompt("Ingrese la edad del empleado: "));
let horasSemana = Number(prompt("Ingrese las horas trabajadas por semana (1-60): "));

if (
    cargoEmpleado === "Gerente" ||
    cargoEmpleado === "Desarrollador" ||
    cargoEmpleado === "Contador" ||
    cargoEmpleado === "Recepcionista" ||
    cargoEmpleado === "Practicante"
) {
    if (edadEmpleado >= 18 && edadEmpleado <= 65) {
        if (horasSemana >= 1 && horasSemana <= 60) {
            console.log(`El ${cargoEmpleado} tiene ${edadEmpleado} años y trabaja ${horasSemana} horas por semana.`);
        } else {
            console.log("Las horas deben estar entre 1 y 60.");
        }
    } else {
        console.log("Edad inválida. Debe estar entre 18 y 65.");
    }
} else {
    console.log("Cargo desconocido. Ingrese un cargo válido.");
}