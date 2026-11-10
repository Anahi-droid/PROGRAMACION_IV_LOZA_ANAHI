data class PistolaPortal(
    val energia: Int,
    val activa: Boolean
)

data class Robot(
    val nombre: String,
    val bateria: Int
)

data class NaveEspacial(
    val energia: Int,
    val motorACtivo: Boolean,
    val autorizacion: Boolean
)

fun main(){
    val pistola = PistolaPortal(80, true)
    if (pistola.energia >= 50 && pistola.activa){
        print("Rick puede abri el portal")
    }


    val radiacion = arrayOf(20,45,65,30,60)
    if (radiacion[2]>70){
        println("Peligro Dimension con alta radiacion")
    } else {
        println("Radiacion moderada")
    }

    val pruebas = arrayOf(80,65,90)
    val suma = pruebas[0]+pruebas[1]+pruebas[2]
    val promedio = suma / 8.0
    if (promedio >= 70){
        println("Portal estable")
    } else {
        println("Portal inestable")
    }


    val robot = Robot("Robot Ayudante", 65)
    if (robot.bateria >= 50){
        println("Funcionamiento Optimo")
    } else if (robot.bateria >= 40) {
        println("FUncionamiento normal")
    } else if (robot.bateria >= 20) {
        println("Bateria baja")
    } else {
        println("Estado critico")
    }

    val nave = NaveEspacial(120, true, false)
    if (nave.energia >= 100){
        if (nave.autorizacion) {
            println("Viaje Autorizado")
        } else {
            println("Mry o tiene autorizacion")
        }
    } else {
        println("Energia insufiviente")
    }

}

