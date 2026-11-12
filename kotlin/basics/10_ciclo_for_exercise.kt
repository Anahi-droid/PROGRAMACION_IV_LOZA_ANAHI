data class Portal (
    val nombre: String,
    val energia: Int
)

fun main(){
    var propTotal = 0.0
    println("Presupuesto de la expedicion")
    for (viaje in 1..6) {
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if(costoOriginal >= 1000) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo original $costoOriginal")
        println("DEscuento Aplicado $descuento")
        println("Costo Final $costoFinal")
        propTotal += costoFinal
    }
    println("Propuesto total de la expedicion %1f creditos".format(propTotal))

    val portales = arrayOf(
        Portal("Tierra", 30),
        Portal("Marte", 95),
        Portal("Saturno", 130),
        Portal("Neptuno", 45),
        Portal("Anahi", 89),
        Portal("Loza", 75)

    )

    val costoViaje = 50;
    for (portal in portales) {
        println("Portal: ${portal.nombre}")
        println("Energia: ${portal.energia}")
        when{
            portal.energia<50->{
                println("Estado: INACTIVO")
                println("No se puede realizar el viaje")
            }
            portal.energia<80->{
                println("Estado:Operativo")
            }
            portal.energia<120->{
                println("Estado: Estable")
            }
            else -> {
                println("Estado: ALta Capacida")
            }
        }
        if(portal.energia>=costoViaje){
            val restante=portal.energia-costoViaje
            println("Viaje Autorizado")
            println("Energia restante ${restante}")
        }
    }
}