type ID = string | number;
type apellido = string;
type coordenadas = [number, number];
type punto = {
    x: number;
    y: number;
}

const origen: punto = {x:0, y:0}
const id: ID = 42;
const id2: ID = "usr-001";

type forma = punto & {
    z: number;
}

interface usuario {
    readonly id: number;
    nombre: string;
    email: string;
    avatar?: string;
}

interface empleado extends usuario {
    cargo: string;
}

const u: usuario = {
    id:1, 
    nombre: "Ana",
    email: "ana@gmail.com"
};

const u2: usuario = { 
    id: 2,
    nombre: "Luis",
    email: "luis@gmail.com",
    avatar: "avatar.png"
};

console.log(u);
console.log(u2);