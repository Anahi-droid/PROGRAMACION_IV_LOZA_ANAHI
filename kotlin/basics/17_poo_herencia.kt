open class Vehiculo(val nombre: String){
    fun monstrarNombre{
        println("Vehiculo: ${nombre}")
    }
}

class NaveEspacialHerencia(nombre: String, val energia: Int): Vehiculo(nombre){
    fun mostrarEnergia{
            println("Energia: ${energia}")
    }
}

fun main(){
    val nave = NaveEspacialHerencia("Nave Interdimensional", 100)
    nave.mostrarEnergia()
    nave.monstrarNombre()
}
