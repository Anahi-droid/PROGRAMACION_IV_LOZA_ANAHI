import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const EMPLEADOS_DEMO = [
  { id: '1',  nombre: 'Carlos Mendoza',  cargo: 'Gerente de RH',         departamento: 'Recursos Humanos',  asistencia: 98, desempeno: 92 },
  { id: '2',  nombre: 'Ana Torres',      cargo: 'Analista de Nomina',    departamento: 'Nomina',            asistencia: 95, desempeno: 88 },
  { id: '3',  nombre: 'Luis Paredes',    cargo: 'Reclutador',            departamento: 'Seleccion',         asistencia: 90, desempeno: 76 },
  { id: '4',  nombre: 'Sofia Vega',      cargo: 'Asistente Contable',    departamento: 'Contabilidad',      asistencia: 72, desempeno: 64 },
  { id: '5',  nombre: 'Diego Salazar',   cargo: 'Auxiliar de Archivo',   departamento: 'Administracion',    asistencia: 85, desempeno: 70 },
  { id: '6',  nombre: 'Maria Cedeño',    cargo: 'Coordinadora de Nomina', departamento: 'Nomina',           asistencia: 99, desempeno: 94 },
  { id: '7',  nombre: 'Jorge Villacis',  cargo: 'Analista de Seleccion', departamento: 'Seleccion',         asistencia: 60, desempeno: 55 },
  { id: '8',  nombre: 'Paula Andrade',   cargo: 'Especialista SST',      departamento: 'Seguridad',         asistencia: 93, desempeno: 81 },
  { id: '9',  nombre: 'Marco Intriago',  cargo: 'Jefe de Capacitacion',  departamento: 'Desarrollo',        asistencia: 97, desempeno: 90 },
  { id: '10', nombre: 'Lucia Moreno',    cargo: 'Asistente de RH',       departamento: 'Recursos Humanos',  asistencia: 88, desempeno: 73 },
  { id: '11', nombre: 'Andres Pozo',     cargo: 'Analista de Beneficios', departamento: 'Compensaciones',   asistencia: 91, desempeno: 79 },
  { id: '12', nombre: 'Elena Burbano',   cargo: 'Recepcionista',         departamento: 'Administracion',    asistencia: 94, desempeno: 85 },
]

interface BarraIndicadorProps {
  porcentaje: number
  etiqueta: string
}

function BarraIndicador({ porcentaje, etiqueta }: BarraIndicadorProps) {
  const color = porcentaje < 65 ? '#c62828'
              : porcentaje < 85 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaEmpleado({ nombre, cargo, departamento, asistencia, desempeno }: typeof EMPLEADOS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoDepto}>{departamento}</Text>
      </View>
      <Text style={estilos4.nodoCargo}>{cargo}</Text>
      <BarraIndicador porcentaje={asistencia} etiqueta="ASIS" />
      <BarraIndicador porcentaje={desempeno} etiqueta="DESM" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Equipo de trabajo</Text>
        <Text style={estilos4.headerSub}>{EMPLEADOS_DEMO.length} empleados</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {EMPLEADOS_DEMO.map((emp) => (
          <TarjetaEmpleado key={emp.id} {...emp} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoDepto: {
    fontSize: 12,
    color: '#4fc3f7',
  },
  nodoCargo: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 36,
  },
  barraFondo: {