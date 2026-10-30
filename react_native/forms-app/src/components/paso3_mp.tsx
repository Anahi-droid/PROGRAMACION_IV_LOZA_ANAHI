import { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Empleado, EMPLEADOS } from './paso1'
import { Paso1FilaEmpleado } from './paso1FilaEmpleado'
import { Separador } from './paso3Separador'
import { ListaVacia } from './paso3ListaVacia'

const PAGINA_2: Empleado[] = [
  { id: '9', nombre: 'Fernanda Salazar', cargo: 'Analista de desempeño', activo: true },
  { id: '10', nombre: 'Esteban Loor', cargo: 'Auxiliar de archivo', activo: false },
]

export function Paso3MP() {
  const [datos, setDatos] = useState<Empleado[]>(EMPLEADOS)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(EMPLEADOS)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.titulo}>Empleados · p.{paginaActual}</Text>
      <FlatList<Empleado>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaEmpleado empleado={item} />}
        ItemSeparatorComponent={Separador}
        ListEmptyComponent={<ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? <ActivityIndicator style={{ margin: 16 }} color="#1565c0" /> : <></>
        }
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})