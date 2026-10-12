function sumarCreditos(credito1: number, credito2: number) {
    return credito1 + credito2;
}

const totaCreditos: number = sumarCreditos(10, 20);
console.log(`Total de crèditos: ${totaCreditos}`)

// sin devolver valor 

function mostrarCentroDeEntrenamiento(nombre: string): void{
    console.log(`Centro de entrenamiento: ${nombre}`);
    const naves: string[] = ["X-WIngs"];
    for (const nave of naves) {
        console.log(`Nave disponible: ${nave}`)
    }
}

mostrarCentroDeEntrenamiento("Jedi Academy");

// funciones con parametros adicionales 

function entrenarJedi(nombre:string, nivel?:number): void{
    if (nivel) {
        console.log(`Jedi ${nombre} esta entrenando en el nivel ${nivel}`);
    } else {
        console.log(`Jedi ${nombre} esta entrenando`)
    }
}

entrenarJedi ("Luke Skywalk", 5);
entrenarJedi("Yoda");

// FUNCIONES FLECHA
function potenciarFuerza(fuerza: number): number {
    return fuerza * 2;
}

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal: number = 50;
const fuerzaPotenciada: number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha: number = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (flecha): ${fuerzaPotenciadaFlecha}`);