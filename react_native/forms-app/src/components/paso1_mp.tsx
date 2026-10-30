import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaEmpleado } from './paso1filaEmpleado'

export type Empleado = {
  id: string
  nombre: string
  cargo: string
  activo: boolean
}

export const EMPLEADOS: Empleado[] = [
  { id: '1', nombre: 'María Andrade', cargo: 'Analista de nómina', activo: true },
  { id: '2', nombre: 'Carlos Quishpe', cargo: 'Coordinador de selección', activo: true },
  { id: '3', nombre: 'Lucía Paredes', cargo: 'Jefa de talento humano', activo: true },
  { id: '4', nombre: 'Andrés Villacís', cargo: 'Asistente administrativo', activo: false },
  { id: '5', nombre: 'Daniela Cevallos', cargo: 'Especialista en capacitación', activo: true },
  { id: '6', nombre: 'Jorge Naranjo', cargo: 'Analista de bienestar', activo: false },
  { id: '7', nombre: 'Paola Mena', cargo: 'Reclutadora', activo: true },
  { id: '8', nombre: 'Diego Cárdenas', cargo: 'Auxiliar de nómina', activo: true },
]

export function Paso1MP() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Directorio de empleados</Text>
      <FlatList<Empleado>
        data={EMPLEADOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaEmpleado empleado={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})