import { View } from "react-native";
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'

export function Separador() {
  return <View style={styles2.separador} />
}

const styles2 = StyleSheet.create({
  
  separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },})