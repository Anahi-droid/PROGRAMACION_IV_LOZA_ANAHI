fun main() {
    val departamento = 2

    when (departamento) {
        1 -> println("Departamento: Contabilidad")
        2 -> println("Departamento: Reclutamiento")
        3 -> println("Departamento: Capacitacion")
        else -> println("Departamento no disponible")
    }

    print("Ingrese el dia de la semana (1-7): ")
    val dia = readLine()!!.toInt()
    when (dia) {
        1, 2, 3, 4, 5 -> println("Dia laboral")
        6, 7 -> println("Dia de descanso")
        else -> println("Dia invalido")
    }

    print("Ingrese el puntaje de la entrevista: ")
    val puntaje = readLine()!!.toInt()
    when (puntaje) {
        in 0..39 -> println("Candidato no apto")
        in 40..79 -> println("Candidato en revision")
        in 80..100 -> println("Candidato seleccionado")
        else -> println("Puntaje invalido")
    }

    val presupuesto = 80
    val vacanteAbierta = true
    val costoContratacion = 40

    when {
        presupuesto >= costoContratacion && vacanteAbierta -> {
            val restante = presupuesto - costoContratacion
            println("Contratacion autorizada")
            println("Presupuesto restante: $restante")
        }
        presupuesto < costoContratacion && vacanteAbierta -> {
            println("Presupuesto insuficiente")
        }
        !vacanteAbierta -> {
            println("La vacante esta cerrada")
        }
    }
}