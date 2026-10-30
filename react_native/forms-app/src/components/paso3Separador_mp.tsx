import { StyleSheet, View } from 'react-native'

export function Paso3Separador() {
  return <View style={styles.separador} />
}

const styles = StyleSheet.create({
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
})