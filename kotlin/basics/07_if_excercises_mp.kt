data class Contrato(
    val salario: Int,
    val vigente: Boolean
)

data class Empleado(
    val nombre: String,
    val puntaje: Int
)

data class SolicitudVacaciones(
    val diasDisponibles: Int,
    val jefeAprueba: Boolean,
    val documentosCompletos: Boolean
)

fun main() {
    val contrato = Contrato(800, true)
    if (contrato.salario >= 500 && contrato.vigente) {
        println("El empleado puede recibir su pago")
    }

    val horasSemanales = arrayOf(40, 45, 35, 50, 38)
    if (horasSemanales[2] > 45) {
        println("Alerta: exceso de horas trabajadas")
    } else {
        println("Horas dentro del limite")
    }

    val evaluaciones = arrayOf(80, 65, 90)
    val suma = evaluaciones[0] + evaluaciones[1] + evaluaciones[2]
    val promedio = suma / 3.0
    if (promedio >= 70) {
        println("Evaluacion aprobada")
    } else {
        println("Evaluacion reprobada")
    }

    val empleado = Empleado("Maria Gomez", 65)
    if (empleado.puntaje >= 80) {
        println("Desempeno excelente")
    } else if (empleado.puntaje >= 60) {
        println("Desempeno bueno")
    } else if (empleado.puntaje >= 40) {
        println("Desempeno regular")
    } else {
        println("Requiere plan de mejora")
    }

    val solicitud = SolicitudVacaciones(15, true, false)
    if (solicitud.diasDisponibles >= 10) {
        if (solicitud.jefeAprueba) {
            println("Vacaciones autorizadas")
        } else {
            println("El jefe no ha aprobado la solicitud")
        }
    } else {
        println("Dias disponibles insuficientes")
    }
}