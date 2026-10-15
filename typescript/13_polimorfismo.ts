class Boxeador {
    atacar(): void{
        console.log("Ataque basico")
    }
}

class Rocky extends Boxeador{
    override atacar(): void{
        console.log("Rocky ataca con fuerza")
    }
}

class Apollo extends Boxeador{
    override atacar(): void{
        console.log("Apolo ataca con velocidad")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo(),
    new Apollo()
]

console.log(boxeadores)
boxeadores.forEach(boxeador=>boxeador.atacar());



