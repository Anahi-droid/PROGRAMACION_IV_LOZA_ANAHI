// app/index.tsx
import { useState } from 'react'
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.              │
// │  1  Paso 1  Store básico — empleados con contratar/despedir                  │
// │  2  Paso 2  Selectors — consumir solo una parte del store (ej. activos)      │
// │  3  Paso 3  Acciones asíncronas — cargarEmpleados con estado de carga        │
// │  4  Paso 4  Múltiples stores — empleados + usuario de RH                     │
// │  5  Paso 5  Persistencia — guardar los datos                                 │
// │  6  Paso 6  Ejemplo combinado — directorio de personal persistido            │
// └──────────────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

// ─── Paso 1 — Lista de empleados con contratar / despedir ────────────────────
interface Empleado {
  id: string
  nombre: string
  cargo: string
}

function Paso1() {
  const [empleados, setEmpleados] = useState<Empleado[]>([
    { id: '1', nombre: 'María Andrade', cargo: 'Analista de nómina' },
    { id: '2', nombre: 'Carlos Quishpe', cargo: 'Coordinador de selección' },
    { id: '3', nombre: 'Daniela Cevallos', cargo: 'Especialista en capacitación' },
  ])

  function contratar() {
    const nuevo: Empleado = {
      id: Date.now().toString(),
      nombre: `Empleado ${empleados.length + 1}`,
      cargo: 'Asistente de RH',
    }
    setEmpleados([...empleados, nuevo])
  }

  function despedir(id: string) {
    setEmpleados(empleados.filter((e) => e.id !== id))
  }

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Empleados ({empleados.length})</Text>

      <Pressable style={estilos.botonContratar} onPress={contratar}>
        <Text style={estilos.botonTexto}>+ Contratar</Text>
      </Pressable>

      <FlatList
        data={empleados}
        keyExtractor={(e) => e.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <View style={estilos.tarjeta}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.nombre}>{item.nombre}</Text>
              <Text style={estilos.cargo}>{item.cargo}</Text>
            </View>
            <Pressable style={estilos.botonDespedir} onPress={() => despedir(item.id)}>
              <Text style={estilos.botonTexto}>Despedir</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16, paddingTop: 60, gap: 12 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    gap: 10,
  },
  nombre: { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  cargo: { fontSize: 13, color: '#1565c0' },
  botonContratar: {
    backgroundColor: '#2e7d32',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  botonDespedir: {
    backgroundColor: '#c62828',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  botonTexto: { color: '#ffffff', fontWeight: '600', fontSize: 13 },
})