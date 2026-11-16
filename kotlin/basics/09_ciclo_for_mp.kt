data class ontrato(
    val salario: Int,
    val vigente: Boolean
)

fun main() {
    for (i in 1..5) {
        println("Entrevistando candidato $i")
    }
    for (i in 10 downTo 5) {
        println("Revisando expediente $i")
    }
    for (i in 1..20 step 2) {
        println("Revisando empleado $i")
    }
    for (i in 1..5) {
        val resultado = 3 * i
        println("3 * $i = $resultado")
    }
}