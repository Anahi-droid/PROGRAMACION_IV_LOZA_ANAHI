// ui/Paso01_TextField_RRHH.kt
package com.ute.componentes.ui.rrhh.ui

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun Paso01_TextFieldRRHHScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
            .verticalScroll(rememberScrollState()),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        Text(
            "Paso 1 · TextField en Recursos Humanos",
            style = MaterialTheme.typography.titleMedium
        )
        HorizontalDivider()

        DemoBusquedaEmpleado()
        HorizontalDivider()
        DemoFormularioEmpleado()
    }
}

// ── Demo 1: buscador de empleados con botón limpiar ──────────────────────────
@Composable
private fun DemoBusquedaEmpleado() {
    var busqueda by remember { mutableStateOf("") }

    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text(
            "Búsqueda de empleado",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )

        OutlinedTextField(
            value = busqueda,
            onValueChange = { busqueda = it },
            placeholder = { Text("Buscar por nombre o cédula...") },
            leadingIcon = { Icon(Icons.Default.Search, contentDescription = null) },
            // El botón de limpiar solo aparece si hay texto
            trailingIcon = {
                if (busqueda.isNotEmpty()) {
                    IconButton(onClick = { busqueda = "" }) {
                        Icon(Icons.Default.Clear, contentDescription = "Limpiar búsqueda")
                    }
                }
            },
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )

        Text(
            text = if (busqueda.isBlank()) "Escribe para filtrar empleados"
            else "Buscando empleado: \"$busqueda\"",
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}

// ── Demo 2: formulario de nuevo empleado con validación ──────────────────────
@Composable
private fun DemoFormularioEmpleado() {
    // Cada campo tiene su propio estado
    var nombre by remember { mutableStateOf("") }
    var correo by remember { mutableStateOf("") }
    var cedula by remember { mutableStateOf("") }
    var contrasena by remember { mutableStateOf("") }
    var verPass by remember { mutableStateOf(false) }

    // Validaciones derivadas del estado: se recalculan en cada recomposición
    val nombreValido = nombre.trim().length >= 3
    val correoValido = correo.contains("@") && correo.contains(".")
    val cedulaValida = cedula.length == 10 && cedula.all { it.isDigit() }
    val passValida = contrasena.length >= 8

    val formularioValido = nombreValido && correoValido && cedulaValida && passValida

    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Text(
            "Registro de nuevo empleado",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )

        // Nombre completo
        OutlinedTextField(
            value = nombre,
            onValueChange = { nombre = it },
            label = { Text("Nombre del empleado") },
            leadingIcon = { Icon(Icons.Default.Person, contentDescription = null) },
            isError = nombre.isNotEmpty() && !nombreValido,
            supportingText = {
                when {
                    nombre.isNotEmpty() && !nombreValido ->
                        Text("Mínimo 3 caracteres", color = MaterialTheme.colorScheme.error)
                    nombreValido ->
                        Text("✓ Nombre válido", color = MaterialTheme.colorScheme.primary)
                    else -> Text("Requerido")
                }
            },
            keyboardOptions = KeyboardOptions(imeAction = ImeAction.Next),
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )

        // Correo corporativo
        OutlinedTextField(
            value = correo,
            onValueChange = { correo = it },
            label = { Text("Correo corporativo") },
            placeholder = { Text("empleado@empresa.com") },
            leadingIcon = { Icon(Icons.Default.Email, contentDescription = null) },
            isError = correo.isNotEmpty() && !correoValido,
            supportingText = {
                if (correo.isNotEmpty() && !correoValido)
                    Text(
                        "Formato inválido (requiere @ y dominio)",
                        color = MaterialTheme.colorScheme.error
                    )
            },
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Email,
                imeAction = ImeAction.Next
            ),
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )

        // Cédula: solo números, máximo 10 dígitos
        OutlinedTextField(
            value = cedula,
            // Filtramos aquí: si lo escrito no son solo dígitos o pasa de 10, se ignora
            onValueChange = { nuevo ->
                if (nuevo.all { it.isDigit() } && nuevo.length <= 10) cedula = nuevo
            },
            label = { Text("Cédula") },
            placeholder = { Text("1712345678") },
            leadingIcon = { Icon(Icons.Default.Badge, contentDescription = null) },
            isError = cedula.isNotEmpty() && !cedulaValida,
            supportingText = {
                Text(
                    text = "${cedula.length}/10 dígitos",
                    color = if (cedulaValida) MaterialTheme.colorScheme.primary
                    else MaterialTheme.colorScheme.onSurfaceVariant
                )
            },
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Number,
                imeAction = ImeAction.Next
            ),
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )

        // Contraseña de acceso al sistema de RRHH
        OutlinedTextField(
            value = contrasena,
            onValueChange = { contrasena = it },
            label = { Text("Contraseña de acceso") },
            leadingIcon = { Icon(Icons.Default.Lock, contentDescription = null) },
            trailingIcon = {
                IconButton(onClick = { verPass = !verPass }) {
                    Icon(
                        imageVector = if (verPass) Icons.Default.VisibilityOff
                        else Icons.Default.Visibility,
                        contentDescription = if (verPass) "Ocultar contraseña"
                        else "Mostrar contraseña"
                    )
                }
            },
            visualTransformation = if (verPass) VisualTransformation.None
            else PasswordVisualTransformation(),
            isError = contrasena.isNotEmpty() && !passValida,
            supportingText = {
                Text(
                    text = "${contrasena.length}/8 caracteres mínimos",
                    color = if (passValida) MaterialTheme.colorScheme.primary
                    else MaterialTheme.colorScheme.onSurfaceVariant
                )
            },
            keyboardOptions = KeyboardOptions(
                keyboardType = KeyboardType.Password,
                imeAction = ImeAction.Done
            ),
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )

        Button(
            onClick = { /* Más adelante: guardar el empleado */ },
            enabled = formularioValido,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(if (formularioValido) "Registrar empleado ✓" else "Completa todos los campos")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun Paso01_RRHH_Preview() {
    MaterialTheme { Paso01_TextFieldRRHHScreen() }
}