import { View } from "react-native";
import { StyleSheet, Text } from 'react-native'

export function ListaVacia() {
  return (
    <View style={styles2.vacio}>
      <Text style={styles2.vacioTexto}>Sin servidores registrados</Text>
      <Text style={styles2.vacioSub}>Agrega uno con el botón +</Text>
    </View>
  )
}

const styles2 = StyleSheet.create({
  
  vacio: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
  vacioTexto: {
    height: 1,
    backgroundColor: '#7348ac',
    marginHorizontal: 12,
  },
  vacioSub: {
    height: 1,
    backgroundColor: '#c950ee',
    marginHorizontal: 12,
  },

})