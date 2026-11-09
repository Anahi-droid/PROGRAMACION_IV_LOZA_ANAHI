const val MAX_PORTALES=10
fun main(){
    var energia = 100
    println(energia)
    println("Autor: Anahi Loza")
    energia = 80
    println("Energia")
    println(energia)
    println("Tipos de Variables")
    var edad: Int = 14
    var portales: Int = 10
    print("edad, $edad")
    print("portales, $portales")
    println("Tipo Long")
    var particulas: Long = 9000000000000000L
    print("particulas, $particulas")
    println("Tipo Float")
    var combustible: Float = 45.5f
    print("combustible, $combustible")
    println("Tipo Double")
    var distancia: Double = 1250.55
    print("distancia, $distancia")
    println("Tipo Char")
    var codigo: Char = 'C'
    print("codigo, $codigo")
    println("Tipo String")
    var nombre: String = "Morty SMith"
    var dimension: String = "C-137"
    print("nombre, $nombre")
    print("dimension, $dimension")
    print("dimension: $dimension , nombre: $nombre ")
    println("Tipo Boolean")
    var portalACtivo: Boolean = true
    print("portalACtivo, $portalACtivo")

    println("VAL CONST VAR")
    var cientifico = "Ana Garcia"
    var portalesDisponibles = 5
    println("Nombre del cientifico $cientifico")
    println("Portales disponibles $portalesDisponibles")
    println("Constante Limite: $MAX_PORTALES")    
}