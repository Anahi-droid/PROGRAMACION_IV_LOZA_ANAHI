fun main(){
    val portal = 2

    when (portal){
        1 -> println("Destino: Tierra")
        2 -> println("Destino: Marte")
        3 -> println("Destino: Saturno")
        else -> println("Portal no disponible")
    }

    print("Incluya el dia (1-7)")
    val dia = readLine()!!.toInt()
    when (dia){
        1,2,3,4,5 -> println("dia de exerimentos")
        6, 7 -> println("Dia de descanso")
        else -> println("Dia invalido") 
    }

    print("Ingrese energia de portal")
    val energia = readLine()!!.toInt()
    when (energia){
        in 0..39 -> println("Energia baja")
        in 40..79-> println("Energia media")
        in 80..100 -> println("Energia alta")
        else -> println("Energia invalido") 
    }

    val energiaNuclear = 80
    val motorACtivo = true
    val costoViaje = 40

    when {
        energiaNuclear>=costoViaje&&motorACtivo->{
            val restante = energiaNuclear-costoViaje
            println("Viaje Autorizado")
            println("Eenergia Restante $restante")
        }
        energiaNuclear<costoViaje&&motorACtivo->{
            println("Energia insuficiente")
        }
        !motorACtivo->{
            println("EL motor esta inactivo")
        }
    }

}