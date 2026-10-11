// ciclo for
const APORTE_IESS: number = 9.45;

for (let i = 0; i < 5; i++) {
    console.log(`Revisando expediente del empleado: ${i}`);
}

for (let i = 0; i <= 20; i += 5) {
    console.log(`Procesando lote de nómina: ${i}`);
}

for (let i = 100; i >= 0; i -= 25) {
    console.log(`Presupuesto restante (%): ${i}`);
}

for (let i = 40; i >= 0; i -= 5) {
    if (i === 20) {
        console.log("La revisión de nómina ha terminado");
        break;
    }
    if (i === 30) {
        console.log("Se omite el empleado 30 (está de vacaciones)");
        continue;
    }
    console.log(`Procesando pago del empleado: ${i}`);
}

// ejemplo práctico: sueldo neto
const sueldos: number[] = [600, 850, 1200, 460, 2000];

for (let i = 0; i < sueldos.length; i++) {
    const descuento = sueldos[i] * (APORTE_IESS / 100);
    const neto = sueldos[i] - descuento;
    console.log(`Empleado ${i + 1}: bruto $${sueldos[i]} | IESS $${descuento.toFixed(2)} | neto $${neto.toFixed(2)}`);
}