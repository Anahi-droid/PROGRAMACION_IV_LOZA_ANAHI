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
}