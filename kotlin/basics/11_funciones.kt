

fun activarPortal(){
    println("Activando portal interdimensional")
    println("COnteo Regresivo")
    println("3")
    println("2")
    println("1")
    println("Anahi Loza activo el portal")
}

fun viajar(dimension: String, viajes: Int, consumo: Int){
    println("Viajando ${dimension}")
    val total = viajes*consumo
    println("consumo total: ${total}")
}

fun calcularPrecio(precio: Double): Double{
    var descuento: Double = 0.0
    if (precio>=100){
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularEnergiaTotal(energias: Array<Int>): Int{
    var total = 0
    for (energia in energias){
        total += energia
        if (energia>=100){
            println("SObre Energia $energia")
        }
    }
    return total
}

fun main(){
    activarPortal()
    activarPortal()
    viajar("Tierra", 5,4)
    viajar("Tierra", 5,4)
    val descuentoCliente = calcularPrecio(123.5)
    println("EL cliente Anahi tiene este descuento: $descuentoCliente")
    val totalEnergias = arrayOf(30,50,80,100,60)
    println("Energia total $totalEnergias ")
}

