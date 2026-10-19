abstract class Saiyajin {
    abstract tranformarse(): void;
    detectarKi(): void{
        console.log("Detectando el nivel de energia del enemigo..")
    }
}

class Goku extends Saiyajin{
    tranformarse(): void{
        console.log("Goku se transforma en Super Saiyajin Blue")
    }
}

class Vegeta extends Saiyajin{
    tranformarse(): void{
        console.log("Vegeta alcanza el Ultra Ego")
    }
}

const saiyajin: saiyajines[]=[
    new Rocky(),
    new Apollo()
]

console.log(Saiyajin)
saiyajin.forEach(Saiyajines=>Saiyajines.tranformarse());
