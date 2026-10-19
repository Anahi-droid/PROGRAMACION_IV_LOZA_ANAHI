abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("EL boxeadoe recupera energia ")
    }
}

class Rocky extends Boxeador{
    atacar(): void{
        console.log("Rocky lanza un gancho")
    }
}

class Apollo extends Boxeador{
    atacar(): void{
        console.log("Apolo lanza un tupper")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]

console.log(boxeadores)
boxeadores.forEach(boxeador=>boxeador.atacar());



