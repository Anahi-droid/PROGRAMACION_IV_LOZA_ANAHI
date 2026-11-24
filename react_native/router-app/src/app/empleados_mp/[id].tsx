import { StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { EMPLEADOS_MP, COLOR_ESTADO } from '../../data/empleados_mp'

export default function DetalleEmpleadoMP() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const empleado = EMPLEADOS_MP.find((e) => e.id === id)

  if (!empleado) {
    return (
      <View style={styles.contenedor}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.nombre}>Empleado no encontrado</Text>
      </View>
    )
  }

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: empleado.nombre }} />
      <View style={styles.tarjeta}>
        <Text style={styles.nombre}>{empleado.nombre}</Text>
        <Text style={styles.cargo}>{empleado.cargo}</Text>
        <View style={[styles.badge, { backgroundColor: COLOR_ESTADO[empleado.estado] }]}>
          <Text style={styles.badgeTexto}>{empleado.estado.toUpperCase()}</Text>
        </View>
        <Text style={styles.idTexto}>ID: {empleado.id}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    gap: 10,
    elevation: 2,
  },
  nombre: { fontSize: 20, fontWeight: '700', color: '#1a1a1a' },
  cargo: { fontSize: 15, color: '#1565c0' },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  idTexto: { fontSize: 12, color: '#666' },
})