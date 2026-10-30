import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Empleado = {
  id: string
  nombre: string
  cargo: string
  estado: 'activo' | 'vacaciones' | 'licencia'
  asistencia: number
}

const EMPLEADOS: Empleado[] = [
  { id: '1', nombre: 'María Andrade', cargo: 'Analista de nómina', estado: 'activo', asistencia: 98 },
  { id: '2', nombre: 'Carlos Quishpe', cargo: 'Coord. selección', estado: 'activo', asistencia: 95 },
  { id: '3', nombre: 'Lucía Paredes', cargo: 'Jefa de talento', estado: 'activo', asistencia: 100 },
  { id: '4', nombre: 'Andrés Villacís', cargo: 'Asistente admin.', estado: 'licencia', asistencia: 62 },
  { id: '5', nombre: 'Daniela Cevallos', cargo: 'Capacitación', estado: 'vacaciones', asistencia: 90 },
  { id: '6', nombre: 'Jorge Naranjo', cargo: 'Bienestar', estado: 'licencia', asistencia: 0 },
  { id: '7', nombre: 'Paola Mena', cargo: 'Reclutadora', estado: 'activo', asistencia: 93 },
  { id: '8', nombre: 'Diego Cárdenas', cargo: 'Aux. de nómina', estado: 'vacaciones', asistencia: 78 },
]

const COLOR_ESTADO: Record<Empleado['estado'], string> = {
  activo: '#2e7d32',
  vacaciones: '#e65100',
  licencia: '#6b7280',
}

export function Paso3MP() {
  const { width } = useWindowDimensions()

  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Recursos humanos · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {EMPLEADOS.map((emp) => (
          <TarjetaEmpleado key={emp.id} empleado={emp} ancho={anchoTarjeta} />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaEmpleado({ empleado, ancho }: { empleado: Empleado; ancho: number }) {
  const colorEstado = COLOR_ESTADO[empleado.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreEmpleado} numberOfLines={1}>
        {empleado.nombre}
      </Text>
      <Text style={estilosPaso3.cargo}>{empleado.cargo}</Text>

      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${empleado.asistencia}%`,
              backgroundColor: empleado.asistencia < 80 ? '#c62828' : '#1565c0',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.asistencia}>Asistencia: {empleado.asistencia}%</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreEmpleado: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
  cargo: { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  asistencia: { fontSize: 11, color: '#6b7280' },
})