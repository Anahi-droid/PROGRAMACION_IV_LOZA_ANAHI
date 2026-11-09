fun main() {
    println("Inputs en terminal Readline")
    println("¿Como te llamas?")
    val nombre = readLine()!!
    println("Welcome a otro universo : $nombre")
    println("Cristales de Rick:")
    val cristalesRick = readLine()!!.toInt()
    println("Cristales de Morty:")
    val cristalesMorty = readLine()!!.toInt()
    val total = cristalesRick + cristalesMorty
    println("Total de Cristales: $total")

    println("Calculadora de Energia")
    println("Energia inicial")
    val energiaInicial = readLine()!!.toInt()
    println("Energia Consumida")
    val energiaConsumida = readLine()!!.toInt()
    val energiaResultante = energiaInicial - energiaConsumida
    println("Energia Restante: $energiaResultante") 
}