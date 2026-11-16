fun main() {
    println("Planilla de pagos")
    println("¿Nombre del empleado?")
    val nombre = readLine()
    println("Cantidad de horas extra:")
    val horasExtra = readLine()!!.toInt()
    println("Pago por hora extra:")
    val pagoHora = readLine()!!.toDouble()
    println("Salario base:")
    val salarioBase = readLine()!!.toDouble()
    val pagoExtra = horasExtra * pagoHora
    val salarioTotal = salarioBase + pagoExtra
    println("Reporte")
    println("Empleado: $nombre")
    println("Pago por horas extra: $pagoExtra")
    println("Salario total: $salarioTotal")
}