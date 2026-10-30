import { SafeAreaView, SectionList, StyleSheet, Text } from 'react-native'
import { Paso4EncabezadoSeccion } from './paso4EncabezadoSeccion'
import { Paso1FilaEmpleado } from './paso1FilaEmpleado'
import { Separador } from './paso3Separador'
import { Empleado } from './paso1'

type SeccionDepartamento = {
  title: string
  codigo: string
  data: Empleado[]
}

const SECCIONES: SeccionDepartamento[] = [
  {
    title: 'Talento humano',
    codigo: 'DEP-TH',
    data: [
      { id: 's1', nombre: 'Lucía Paredes', cargo: 'Jefa de talento humano', activo: true },
      { id: 's2', nombre: 'Paola Mena', cargo: 'Reclutadora', activo: true },
      { id: 's3', nombre: 'Carlos Quishpe', cargo: 'Coordinador de selección', activo: true },
    ],
  },
  {
    title: 'Nómina y beneficios',
    codigo: 'DEP-NB',
    data: [
      { id: 's4', nombre: 'María Andrade', cargo: 'Analista de nómina', activo: true },
      { id: 's5', nombre: 'Diego Cárdenas', cargo: 'Auxiliar de nómina', activo: false },
    ],
  },
  {
    title: 'Capacitación y bienestar',
    codigo: 'DEP-CB',
    data: [
      { id: 's6', nombre: 'Daniela Cevallos', cargo: 'Especialista en capacitación', activo: true },
      { id: 's7', nombre: 'Jorge Naranjo', cargo: 'Analista de bienestar', activo: false },
      { id: 's8', nombre: 'Fernanda Salazar', cargo: 'Analista de desempeño', activo: true },
    ],
  },
]

export function Paso4MP() {
  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.tituloPantalla}>Empleados por departamento</Text>
      <SectionList<Empleado, SeccionDepartamento>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaEmpleado empleado={item} />}
        renderSectionHeader={({ section }) => (
          <Paso4EncabezadoSeccion titulo={section.title} codigo={section.codigo} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={Separador}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})