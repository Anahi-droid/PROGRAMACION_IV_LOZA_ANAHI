import { StyleSheet, Text, View } from 'react-native'
import type { Empleado } from './paso1'

export function Paso1FilaEmpleado({ empleado }: { empleado: Empleado }) {
  return (
    <View style={styles.fila}>
      <View style={styles.info}>
        <Text style={styles.nombre}>{empleado.nombre}</Text>
        <Text style={styles.cargo}>{empleado.cargo}</Text>
      </View>
      <View style={[styles.estado, empleado.activo ? styles.estadoActivo : styles.estadoInactivo]}>
        <Text style={[styles.textoEstado, { color: empleado.activo ? '#2e7d32' : '#c62828' }]}>
          {empleado.activo ? 'ACTIVO' : 'INACTIVO'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  cargo: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})