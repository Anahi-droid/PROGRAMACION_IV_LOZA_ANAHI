let memoriaDroide = 1024;
let memoriaDroideMaxima = 2048;
while (memoriaDroide < memoriaDroideMaxima) {
    console.log("Memoria del Droide:", memoriaDroide);
    memoriaDroide += 256;
}

let nivel = 1;
while (nivel <= 10) {
    console.log("NIvel del Droide:", nivel);
    nivel ++;
}

let guerras = 0;
do {
    guerras ++;
    console.log(`Guerra numero: ${guerras}`);
} while (guerras < 5);

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const navesEscaneadas: Nave[] = [
    { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1000 },
    { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
    { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 900 },
    { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 800 }
];

let indice = 0;
while (indice < navesEscaneadas.length) {
    const navecita = navesEscaneadas[indice];
    if (navecita?.tipo === "Caza estelar") {
        console.log(`Nave: ${navecita.nombre}, Tipo: ${navecita.tipo}, Velocidad: ${navecita.velocidad}`);
        indice++;
        continue;
    }

    if (navecita?.velocidad < 1000) {
        console.log(`Nave: ${navecita.nombre}, Tipo: ${navecita.tipo}, Velocidad: ${navecita.velocidad}`);
        break;
    }
    indice++;
}