import { StyleSheet, Text, View } from 'react-native'

export function Paso3ListaVacia() {
  return (
    <View style={styles.vacio}>
      <Text style={styles.vacioTexto}>No hay empleados registrados</Text>
      <Text style={styles.vacioSub}>Desliza hacia abajo para actualizar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
})