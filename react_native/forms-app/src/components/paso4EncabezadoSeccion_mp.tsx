import { StyleSheet, Text, View } from 'react-native'

export function Paso4EncabezadoSeccion({ titulo, codigo }: { titulo: string; codigo: string }) {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.encabezadoTitulo}>{titulo}</Text>
      <Text style={styles.encabezadoCodigo}>{codigo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoCodigo: { fontSize: 11, color: '#546e7a', fontFamily: 'monospace' },
})