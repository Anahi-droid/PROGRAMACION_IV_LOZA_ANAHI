fun main() {
    val salarios = arrayOf(30, 50, 80, 100, 60)
    println(salarios[0])
    println(salarios[2])
    println(salarios[4])
    salarios[4] = 150
    println(salarios[4])
    for (salario in salarios) {
        println("Salario")
        val salarioDoble = salario * 2
        println("Salario Doble $salarioDoble")
        if (salarioDoble >= 150) {
            val salarioReducido = salarioDoble - 70
            println("Salario Reducido: $salarioReducido")
        }
    }
}