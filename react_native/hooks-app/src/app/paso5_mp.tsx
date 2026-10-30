import { View, Text, Button, StyleSheet } from 'react-native'
import { UsuarioProvider, useUsuario } from '../context/UsuarioContext'

function PerfilEmpleado() {
  const { usuario, setUsuario } = useUsuario()
  const { cargo, setCargo } = useUsuario()

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Colaborador: {usuario}</Text>

      <Button title="Cambiar colaborador" onPress={() => setUsuario('Ana Morales')} />

      <Text style={styles.texto}>Cargo: {cargo}</Text>

      <Button title="Cambiar cargo" onPress={() => setCargo('Jefa de talento humano')} />
    </View>
  )
}

export function Paso5MP() {
  return (
    <UsuarioProvider>
      <PerfilEmpleado />
    </UsuarioProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
})