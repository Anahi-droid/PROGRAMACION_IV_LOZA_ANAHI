fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Capacitacion costosa")
        }
    }
    return total
}

fun main() {
    val departamentos = listOf("Reclutamiento", "Capacitacion")
    var iteracion = 1
    for (departamento in departamentos) {
        println("Departamento $iteracion: $departamento")
        iteracion++
    }
    val costos = listOf(100, 150, 200, 80, 120)
    val total = calcularTotal(costos)

    println("Costo total de capacitaciones de Anahi Loza: $total")
}