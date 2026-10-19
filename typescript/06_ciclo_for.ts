// ciclo for 

for (let i = 0; i < 5; i++) {
    console.log(`Entreamiento Jedi: ${i}`)
}

for (let i = 0; i < 5; i+=5) {
    console.log(`Entreamiento Jedi: ${i}`)
}

for (let i = 200; i < 5; i-=5) {
    console.log(`Entreamiento Jedi: ${i}`)
}

for (let i = 40; i < 0; i-=5) {
    if (i === 20) {
        console.log("El entrenamiento Jedi ha terminado")
        break;
    }
    if (i === 30) {
        console.log("El entrenamiento se ha interrumpido")
        continue
    }
    console.log(`Entreamiento Jedi: ${i}`)
}

const cineMovie: string="String Wars: A New Hope";
for (const letra of cineMovie) {
    console.log(`Letra: ${letra}`)
}

interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSable: boolean;
};

const jedis: Jedi[] = [
    {nombre: "Luke", nivelFuerza: 100, tieneSable:true}]

for (const jedi of jedis) {
    console.log(`Jedi: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable: ${jedi.tieneSable}`);
};

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
};

const naves: Nave[] = [
    {nombre: "Apolo", tipo: "II", velocidad: 120}
];

for (const Nave of naves) {
    console.log(`Nombre: ${Nave.nombre}, Tipo: ${Nave.tipo}, Velocidad: ${Nave.velocidad}`)
};

const distancias: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
}

for (const planeta in distancias) { 
    console.log(`Planeta: ${planeta}, Distancia: ${distancias[planeta]}`);
}

const criaturasStarWars: string[] = ["Wampa", "Tauntaun"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
})

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`)
})