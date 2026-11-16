fun registrarAsistencia() {
    println("Registrando asistencia del personal")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Anahi Loza registro la asistencia")
}

fun calcularPagoHoras(empleado: String, horas: Int, tarifa: Int) {
    println("Calculando pago de $empleado")
    val total = horas * tarifa
    println("Pago total: $total")
}

fun calcularBono(salario: Double): Double {
    var bono = 0.0
    if (salario >= 100) {
        bono = salario * 0.15
    }
    return bono
}

fun calcularNominaTotal(salarios: Array<Int>): Int {
    var total = 0
    for (salario in salarios) {
        total += salario
        if (salario >= 100) {
            println("Salario alto: $salario")
        }
    }
    return total
}

fun main() {
    registrarAsistencia()
    registrarAsistencia()
    calcularPagoHoras("Carlos", 5, 4)
    calcularPagoHoras("Lucia", 5, 4)
    val bonoEmpleado = calcularBono(123.5)
    println("La empleada Anahi tiene este bono: $bonoEmpleado")
    val salarios = arrayOf(30, 50, 80, 100, 60)
    val nominaTotal = calcularNominaTotal(salarios)
    println("Nomina total: $nominaTotal")
}