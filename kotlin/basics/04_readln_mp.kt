fun main() {
    println("Inputs en terminal Readline")
    println("¿Como te llamas?")
    val nombre = readLine()!!
    println("Bienvenido al departamento de Recursos Humanos: $nombre")
    println("Horas trabajadas por Carlos:")
    val horasCarlos = readLine()!!.toInt()
    println("Horas trabajadas por Lucia:")
    val horasLucia = readLine()!!.toInt()
    val total = horasCarlos + horasLucia
    println("Total de Horas: $total")

    println("Calculadora de Vacaciones")
    println("Dias de vacaciones iniciales")
    val diasIniciales = readLine()!!.toInt()
    println("Dias de vacaciones tomados")
    val diasTomados = readLine()!!.toInt()
    val diasRestantes = diasIniciales - diasTomados
    println("Dias Restantes: $diasRestantes")
}