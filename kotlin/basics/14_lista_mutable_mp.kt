fun main() {
    val empleados = mutableListOf("Carlos", "Lucia", "Maria")

    var opcion: Int
    do {
        println("Sistema de Recursos Humanos de Apellido Nombre")
        println("1. Agregar Empleado")
        println("2. Mostrar Empleados")
        println("3. Modificar Empleado")
        println("4. Eliminar Empleado")
        println("5. Salir")
        opcion = readLine()!!.toInt()
        when (opcion) {
            1 -> {
                println("Nombre del nuevo empleado")
                val nombre = readLine()!!
                empleados.add(nombre)
                println("Empleado incluido")
            }
            2 -> {
                println("Empleados")
                for (empleado in empleados) {
                    println("Empleado: $empleado")
                }
            }
            3 -> {
                println("Actualizar")
                println("Indice a modificar")
                for (indice in empleados.indices) {
                    println("$indice: ${empleados[indice]}")
                }
                val indice = readLine()!!.toInt()
                println("Nuevo nombre del empleado")
                val nuevoNombre = readLine()!!
                empleados[indice] = nuevoNombre
                println("Empleado actualizado")
            }
            4 -> {
                println("Indice a eliminar")
                for (indice in empleados.indices) {
                    println("$indice: ${empleados[indice]}")
                }
                val indice = readLine()!!.toInt()
                empleados.removeAt(indice)
                println("Empleado eliminado")
            }
        }
    } while (opcion != 5)
}