fun main() {
    println("Condicional If")
    println("Condicional Simple o un camino")
    var desempeno = 80
    if (desempeno >= 50) {
        println("El empleado aprueba la evaluacion")
    }

    println("Condicional if-else o dos caminos")
    desempeno = 30
    if (desempeno >= 50) {
        println("El empleado aprueba la evaluacion")
    } else {
        println("Desempeno insuficiente")
    }

    println("Condicional multiple")
    desempeno = 70
    if (desempeno >= 90) {
        println("El empleado recibe ascenso")
    } else if (desempeno >= 50) {
        println("El empleado recibe un bono")
    } else {
        println("Desempeno insuficiente")
    }

    println("Condicional enlazada")
    desempeno = 70
    val contratoVigente = true
    if (desempeno >= 90) {
        println("El empleado recibe ascenso")
        if (contratoVigente) {
            println("Puede renovar contrato")
        }
    } else if (desempeno >= 50) {
        println("Desempeno suficiente")
        if (contratoVigente) {
            println("Puede renovar contrato")
        }
    } else {
        println("Desempeno insuficiente")
    }
}