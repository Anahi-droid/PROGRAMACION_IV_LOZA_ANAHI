fun main() {
    println("Operadores")
    println("Operadores Aritmeticos")
    var salarioBase: Double = 1200.50
    var bono: Double = 300.25
    var total: Double = salarioBase + bono
    println("Suma + : $salarioBase + $bono = ${salarioBase + bono}")
    println("Suma + : $salarioBase + $bono = $total")
    println("Resta - : $salarioBase - $bono = ${salarioBase - bono}")
    println("Multiplicacion * : $salarioBase * $bono = ${salarioBase * bono}")
    println("Division / : $salarioBase / $bono = ${salarioBase / bono}")
    println("Residuo % : $salarioBase % $bono = ${salarioBase % bono}")

    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 *,/,%")
    println("3 +,-")

    val diasVacaciones = 10 + 3 * 5 + 5
    println("Dias de vacaciones $diasVacaciones")
    val horasExtra = 3 / 5 * 5
    println("Horas extra $horasExtra")
    val sueldoNeto = 100 + 20 / 4 * 3 - 10 % 3
    println("Sueldo neto $sueldoNeto")

    println("Operadores de comparacion")
    println("Igual a == ${10 == 10}")
    println("Igual a == ${10 == 11}")
    println("Diferente de != ${5 != 10}")
    println("Diferente de != ${10 != 10}")
    println("Mayor que > ${10 > 10}")
    println("Mayor que > ${11 > 10}")
    println("Menor que < ${10 < 10}")
    println("Menor que < ${10 < 11}")
}