import { useState, useCallback, memo } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'

interface Empleado {
  id: number
  nombre: string
  cargo: string
}

interface EmpleadoItemProps {
  empleado: Empleado
  onEliminar: (id: number) => void
}

const EmpleadoItem = memo(({ empleado, onEliminar }: EmpleadoItemProps) => {
  console.log('Renderizando:', empleado.nombre)

  return (
    <View style={styles.empleado}>
      <Text>
        {empleado.nombre} - {empleado.cargo}
      </Text>

      <Button title="Dar de baja" onPress={() => onEliminar(empleado.id)} />
    </View>
  )
})

export function Paso7MP() {
  const [empleados, setEmpleados] = useState<Empleado[]>([
    { id: 1, nombre: 'María Andrade', cargo: 'Analista de nómina' },
    { id: 2, nombre: 'Carlos Quishpe', cargo: 'Coordinador de selección' },
  ])

  const [contador, setContador] = useState(0)

  const eliminarEmpleado = useCallback((id: number) => {
    setEmpleados((actuales) => actuales.filter((empleado) => empleado.id !== id))
  }, [])

  const agregarEmpleado = useCallback(() => {
    setEmpleados((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        nombre: 'Paola Mena',
        cargo: 'Reclutadora',
      },
    ])
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personal de recursos humanos</Text>

      <Text>Revisiones: {contador}</Text>

      <Button title="Registrar revisión" onPress={() => setContador((c) => c + 1)} />

      <Button title="Contratar reclutadora" onPress={agregarEmpleado} />

      <FlatList
        data={empleados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <EmpleadoItem empleado={item} onEliminar={eliminarEmpleado} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  empleado: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
})