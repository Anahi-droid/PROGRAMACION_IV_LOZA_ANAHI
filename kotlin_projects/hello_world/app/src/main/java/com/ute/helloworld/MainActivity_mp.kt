// MainActivity.kt  (versión Recursos Humanos)
package com.ute.helloworld

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            MaterialTheme {
                MiAppRRHH()
            }
        }
    }
}

@Composable
fun MiAppRRHH() {
    // verticalScroll para que se vean los tres bloques aunque no quepan en pantalla
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(24.dp)
    ) {
        Text("¡Hola, Recursos Humanos!", style = MaterialTheme.typography.headlineSmall)
        ChequearVacaciones(15)
        EjemploAsistencia()
        EjemploLayoutsRRHH()
    }
}

// Composable que recibe un parámetro (equivale a ChequearEnergia)
@Composable
fun ChequearVacaciones(diasDisponibles: Number) {
    Text(text = "Días de vacaciones disponibles: $diasDisponibles")
}

// ── Estado + botones (equivale a EjemploHelloWorld) ──────────────────────────
@Composable
fun EjemploAsistencia() {
    var mensaje by remember { mutableStateOf("Jornada sin iniciar") }
    var presentes by remember { mutableStateOf(0) }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = mensaje,
            style = MaterialTheme.typography.headlineMedium
        )

        Spacer(Modifier.height(16.dp))

        Text(
            text = "Empleados presentes: $presentes",
            style = MaterialTheme.typography.bodyLarge
        )

        Spacer(Modifier.height(24.dp))

        Button(onClick = {
            presentes++
            mensaje = "¡$presentes ${if (presentes == 1) "empleado registrado" else "empleados registrados"}!"
        }) {
            Text("Registrar entrada")
        }

        Spacer(Modifier.height(8.dp))

        OutlinedButton(onClick = {
            presentes = 0
            mensaje = "Jornada reiniciada"
        }) {
            Text("Reiniciar jornada")
        }
    }
}

// ── Layouts y Modifier (equivale a EjemploLayouts) ───────────────────────────
@Composable
fun EjemploLayoutsRRHH() {
    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(20.dp)   // espacio uniforme entre hijos
    ) {
        Text(
            "Ejemplo 2 · Layouts en una pantalla de RRHH",
            style = MaterialTheme.typography.titleLarge
        )

        // ── COLUMN: departamentos apilados ─────────────────────────────────
        Text(
            "Column — departamentos apilados:",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )

        Column(
            modifier = Modifier
                .fillMaxWidth()
                .border(1.dp, Color.Gray, RoundedCornerShape(8.dp))
                .padding(8.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            CeldaDepartamento("Talento Humano", Color(0xFF90CAF9))
            CeldaDepartamento("Finanzas", Color(0xFF64B5F6))
            CeldaDepartamento("Tecnología", Color(0xFF42A5F5))
        }

        // ── ROW: plantilla por área con weight 1:2:1 ───────────────────────
        Text(
            "Row — plantilla por área (weight 1:2:1):",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp)
                .clip(RoundedCornerShape(8.dp))
        ) {
            Box(
                Modifier.weight(1f).fillMaxHeight().background(Color(0xFFCE93D8)),
                contentAlignment = Alignment.Center
            ) { Text("RRHH") }
            Box(
                Modifier.weight(2f).fillMaxHeight().background(Color(0xFFBA68C8)),
                contentAlignment = Alignment.Center
            ) { Text("Operaciones") }
            Box(
                Modifier.weight(1f).fillMaxHeight().background(Color(0xFFAB47BC)),
                contentAlignment = Alignment.Center
            ) { Text("Finanzas") }
        }

        // ── BOX: tarjeta de empleado con etiqueta "NUEVO" ──────────────────
        Text(
            "Box — tarjeta de empleado en capas:",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(80.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(Color(0xFF1565C0)),      // capa 1: fondo azul
            contentAlignment = Alignment.Center
        ) {
            // Capa 2: etiqueta en la esquina superior
            Box(
                modifier = Modifier
                    .background(Color(0xFF42A5F5))
                    .padding(horizontal = 8.dp, vertical = 4.dp)
                    .align(Alignment.TopStart)
            ) {
                Text("NUEVO", color = Color.White, style = MaterialTheme.typography.labelSmall)
            }
            // Capa 3: nombre y cargo sobre todo
            Text(
                "Ana García · Analista de Nómina",
                color = Color.White,
                style = MaterialTheme.typography.labelLarge
            )
        }

        // ── MODIFIER: el orden importa ──────────────────────────────────────
        Text(
            "Modifier — clip ANTES vs DESPUÉS de background:",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )

        Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
            // ✅ clip antes de background → el fondo respeta la forma
            Box(
                modifier = Modifier
                    .size(90.dp)
                    .clip(RoundedCornerShape(16.dp))                         // 1° recorta
                    .background(MaterialTheme.colorScheme.primaryContainer), // 2° pinta
                contentAlignment = Alignment.Center
            ) {
                Text("✅ Activo\n(clip antes)", style = MaterialTheme.typography.labelSmall)
            }

            // ❌ background antes de clip → el fondo NO se recorta
            Box(
                modifier = Modifier
                    .size(90.dp)
                    .background(Color(0xFFFFCDD2))        // 1° pinta sin recorte
                    .clip(RoundedCornerShape(16.dp)),     // 2° tarde, el fondo ya se pintó
                contentAlignment = Alignment.Center
            ) {
                Text("❌ Inactivo\n(bg antes)", style = MaterialTheme.typography.labelSmall)
            }
        }
    }
}

@Composable
private fun CeldaDepartamento(texto: String, color: Color) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(36.dp)
            .clip(RoundedCornerShape(4.dp))
            .background(color),
        contentAlignment = Alignment.Center
    ) {
        Text(texto, style = MaterialTheme.typography.labelMedium)
    }
}

@Preview(showBackground = true)
@Composable
fun MiAppRRHHPreview() {
    MaterialTheme {
        MiAppRRHH()
    }
}