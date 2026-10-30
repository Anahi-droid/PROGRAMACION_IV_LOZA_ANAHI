import { StyleSheet, Text, View } from 'react-native'
import type { Candidato } from './paso2'

export function Paso2FilaCandidato({ candidato }: { candidato: Candidato }) {
  return (
    <View style={styles.fila}>
      <View style={styles.info}>
        <Text style={styles.nombre}>{candidato.nombre}</Text>
        <Text style={styles.puesto}>{candidato.puesto}</Text>
      </View>
      <View style={[styles.estado, candidato.activo ? styles.estadoActivo : styles.estadoInactivo]}>
        <Text style={[styles.textoEstado, { color: candidato.activo ? '#2e7d32' : '#c62828' }]}>
          {candidato.activo ? 'EN PROCESO' : 'DESCARTADO'}
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
  puesto: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})