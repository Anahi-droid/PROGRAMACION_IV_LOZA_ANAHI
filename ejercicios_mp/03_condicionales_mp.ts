// condicionales
let aniosAntiguedad: number = 5;
if (aniosAntiguedad >= 5) {
    console.log("El empleado recibe bono por antigüedad");
}

// condicionales dobles o dos caminos
if (aniosAntiguedad >= 10) {
    console.log("El empleado es candidato a ascenso a Gerente");
} else {
    console.log("El empleado aún no es candidato a Gerente");
}

// condición múltiple
if (aniosAntiguedad >= 10) {
    console.log("Categoría: Senior");
} else if (aniosAntiguedad >= 3) {
    console.log("Categoría: Semi-Senior");
} else {
    console.log("Categoría: Junior");
}

// condicional anidado
if (aniosAntiguedad >= 10) {
    console.log("Categoría: Senior");
} else {
    if (aniosAntiguedad >= 3) {
        console.log("Categoría: Semi-Senior");
    } else {
        console.log("Categoría: Junior");
    }
}

aniosAntiguedad = 4;
let evaluacion: number = 90; // sobre 100
// condicional con operador lógico AND
if (aniosAntiguedad >= 3 && aniosAntiguedad < 10 && evaluacion >= 85) {
    console.log("El empleado puede ascender a Semi-Senior");
} else if (aniosAntiguedad >= 10) {
    console.log("El empleado ya es Senior");
} else {
    console.log("El empleado no cumple los requisitos de ascenso");
}

aniosAntiguedad = 1;
evaluacion = 95;
// condicional con operador lógico OR
if (aniosAntiguedad >= 3 || evaluacion >= 90) {
    console.log("El empleado recibe un bono");
} else {
    console.log("El empleado no recibe bono");
}

// ejemplo complejo: bono anual
let diasFaltas: number = 1;
let tieneSancion: boolean = false;
let ventasMes: number = 12000;

if (diasFaltas <= 2 && !tieneSancion) {
    if (aniosAntiguedad >= 1 || evaluacion >= 90) {
        if (ventasMes >= 10000 && evaluacion >= 90) {
            console.log("Bono: Excelente desempeño");
        } else {
            console.log("Bono: Desempeño regular");
        }
    } else {
        console.log("Sin bono: poca antigüedad y evaluación baja");
    }
} else {
    console.log("Sin bono: faltas excesivas o sanción activa");
}