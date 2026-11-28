package com.ute.componentes.models

// model/Empleado.kt

data class Empleado(
    val id:           Int,
    val nombre:       String,
    val correo:       String,
    val cargo:        String,
    val departamento: String,
    val destacado:    Boolean = false   // valor por defecto: si no lo pasas, es false
)

val empleadosDeMuestra = listOf(
    Empleado(1, "Ana García",    "ana@empresa.com",    "Analista de Nómina",     "Talento Humano", destacado = true),
    Empleado(2, "Luis Martínez", "luis@empresa.com",   "Desarrollador",          "Tecnología"),
    Empleado(3, "María López",   "maria@empresa.com",  "Jefa de Reclutamiento",  "Talento Humano", destacado = true),
    Empleado(4, "Carlos Ruiz",   "carlos@empresa.com", "Contador",               "Finanzas"),
    Empleado(5, "Sofía Torres",  "sofia@empresa.com",  "Asistente Administrativa", "Administración"),
    Empleado(6, "Pedro Mora",    "pedro@empresa.com",  "Soporte Técnico",        "Tecnología"),
    Empleado(7, "Elena Vega",    "elena@empresa.com",  "Coordinadora de Capacitación", "Talento Humano", destacado = true),
    Empleado(8, "Diego Paz",     "diego@empresa.com",  "Auditor Interno",        "Finanzas"),
)