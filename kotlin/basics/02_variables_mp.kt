const val MAX_VACANTES = 10

fun main() {
    var presupuesto = 100
    println(presupuesto)
    println("Autor: Anahi Loza")
    presupuesto = 80
    println("Presupuesto")
    println(presupuesto)

    println("Tipos de Variables")
    println("Tipo Int")
    var edad: Int = 28
    var vacantes: Int = 10
    println("edad, $edad")
    println("vacantes, $vacantes")

    println("Tipo Long")
    var nominaAnual: Long = 9000000000000L
    println("nominaAnual, $nominaAnual")

    println("Tipo Float")
    var horasExtra: Float = 45.5f
    println("horasExtra, $horasExtra")

    println("Tipo Double")
    var salarioBase: Double = 1250.55
    println("salarioBase, $salarioBase")

    println("Tipo Char")
    var categoria: Char = 'A'
    println("categoria, $categoria")

    println("Tipo String")
    var nombre: String = "Carlos Mendoza"
    var departamento: String = "Talento Humano"
    println("nombre, $nombre")
    println("departamento, $departamento")
    println("departamento: $departamento, nombre: $nombre")

    println("Tipo Boolean")
    var contratoActivo: Boolean = true
    println("contratoActivo, $contratoActivo")

    println("VAL CONST VAR")
    var gerente = "Ana Garcia"
    var vacantesDisponibles = 5
    println("Nombre del gerente de RRHH: $gerente")
    println("Vacantes disponibles: $vacantesDisponibles")
    println("Constante Limite de vacantes: $MAX_VACANTES")
}