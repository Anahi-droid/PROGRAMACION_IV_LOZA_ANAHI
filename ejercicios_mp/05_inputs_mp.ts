import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
    const rl = readline.createInterface({ input, output });

    const cargoEmpleado = await rl.question(
        "Ingrese el cargo (Gerente, Desarrollador, Contador, Recepcionista, Practicante): "
    );
    const edadEmpleado = Number(await rl.question("Ingrese la edad del empleado: "));
    const horasSemana = Number(await rl.question("Ingrese las horas trabajadas por semana (1-60): "));

    rl.close();

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
}

main();