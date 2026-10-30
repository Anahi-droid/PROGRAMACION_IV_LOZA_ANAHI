import { StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { COLOR_ESTADO, EMPLEADOS_MP } from './index'

export default function DetalleEmpleadoMP() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const empleado = EMPLEADOS_MP.find((e) => e.id === id)

  if (!empleado) {
    return (
      <View style={styles.contenedor}>
        <Stack.Screen options={{ title: 'Empleado' }} />
        <Text style={styles.nombre}>Empleado no encontrado</Text>
      </View>
    )
  }

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: empleado.nombre }} />
      <Text style={styles.nombre}>{empleado.nombre}</Text>
      <Text style={styles.cargo}>{empleado.cargo}</Text>
      <Text style={[styles.estado, { color: COLOR_ESTADO[empleado.estado] }]}>
        {empleado.estado.toUpperCase()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  nombre: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  cargo: { fontSize: 15, color: '#37474f' },
  estado: { fontSize: 13, fontWeight: '700' },
})