data class EmpleadoPlanilla(
    val nombre: String,
    val salario: Int,
    val activo: Boolean
)

fun main() {
    val empleados = listOf(
        EmpleadoPlanilla("Carlos", 600, true),
        EmpleadoPlanilla("Lucia", 850, true),
        EmpleadoPlanilla("Maria", 450, false),
        EmpleadoPlanilla("Pedro", 700, true)
    )

    var totalNomina = 0
    for (empleado in empleados) {
        if (empleado.activo) {
            println("Pagando a ${empleado.nombre}: ${empleado.salario}")
            totalNomina += empleado.salario
        } else {
            println("${empleado.nombre} esta inactivo")
        }
    }
    println("Nomina total: $totalNomina")

    val horasSemana = arrayOf(8, 9, 7, 10, 8)
    var totalHoras = 0
    for (i in horasSemana.indices) {
        println("Dia ${i + 1}: ${horasSemana[i]} horas")
        totalHoras += horasSemana[i]
    }
    println("Horas de la semana: $totalHoras")

    for (i in 1..5) {
        val bono = 50 * i
        println("Bono por $i años de antiguedad: $bono")
    }

    for (i in 5 downTo 1) {
        println("Quedan $i dias para el cierre de nomina")
    }
}