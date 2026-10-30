import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

export default function TabInicioMP() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Panel de Recursos Humanos' }} />
      <Text style={styles.titulo}>Resumen de la plantilla</Text>
      <Text style={styles.dato}>48 empleados activos</Text>
      <Text style={styles.dato}>3 solicitudes pendientes</Text>
      <Text style={styles.dato}>Ausentismo promedio: 2.4 %</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  dato: { fontSize: 15, color: '#37474f' },
})