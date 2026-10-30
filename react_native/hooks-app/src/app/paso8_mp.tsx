import { StyleSheet, Text, View } from 'react-native'
import { useConexionSimulada } from '@/hooks/useConexionSimulada'
import { TarjetaSistemaMP } from './paso8TarjetaServidor_mp'

export function Paso8MP() {
  const nominaHook = useConexionSimulada('nomina-01')
  const biometricoHook = useConexionSimulada('biometrico-01')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estado de sistemas de RR. HH.</Text>

      <TarjetaSistemaMP nombre="nomina-01" hook={nominaHook} />
      <TarjetaSistemaMP nombre="biometrico-01" hook={biometricoHook} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1565c0',
  },
})