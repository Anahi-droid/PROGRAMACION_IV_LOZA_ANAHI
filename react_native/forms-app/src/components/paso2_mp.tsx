import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso2FilaCandidato } from './paso2FilaCandidato'

export type Candidato = {
  id: string
  nombre: string
  puesto: string
  activo: boolean
}

const CANDIDATOS: Candidato[] = [
  { id: '1', nombre: 'Sofía Armas', puesto: 'Analista de reclutamiento', activo: true },
  { id: '2', nombre: 'Mateo Rivera', puesto: 'Asistente de nómina', activo: true },
  { id: '3', nombre: 'Valentina Torres', puesto: 'Coordinadora de capacitación', activo: false },
]

export function Paso2MP() {
  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Candidatos en selección</Text>
      <FlatList<Candidato>
        data={CANDIDATOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso2FilaCandidato candidato={item} />}
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})