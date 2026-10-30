import { useMemo, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

interface EmpleadoNomina {
  nombre: string
  sueldo: number
  horasExtra: number
}

const PAGO_HORA_EXTRA = 4

export function Paso6MP() {
  const [empleados, setEmpleados] = useState<EmpleadoNomina[]>([
    { nombre: 'María Andrade', sueldo: 620, horasExtra: 4 },
    { nombre: 'Carlos Quishpe', sueldo: 580, horasExtra: 6 },
    { nombre: 'Lucía Paredes', sueldo: 1200, horasExtra: 0 },
  ])

  const [contador, setContador] = useState<number>(0)

  const totalNomina = useMemo(() => {
    console.log('Calculando nómina...')

    return empleados.reduce(
      (acumulado, empleado) => acumulado + empleado.sueldo + empleado.horasExtra * PAGO_HORA_EXTRA,
      0
    )
  }, [empleados])

  function agregarEmpleado() {
    setEmpleados((actuales) => [...actuales, { nombre: 'Nuevo empleado', sueldo: 470, horasExtra: 2 }])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nómina de recursos humanos</Text>

      <Text>Empleados: {empleados.length}</Text>

      <Text style={styles.total}>Total nómina: ${totalNomina.toFixed(2)}</Text>

      <Button title="Registrar asistencia" onPress={() => setContador((c) => c + 1)} />

      <Text>Asistencias registradas: {contador}</Text>

      <Button title="Agregar empleado" onPress={agregarEmpleado} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})