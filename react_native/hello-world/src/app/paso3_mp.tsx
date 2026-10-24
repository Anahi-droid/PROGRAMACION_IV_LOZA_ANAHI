import { View, Text, StyleSheet } from "react-native"

type EstadoEmpleado = 'activo' | 'vacaciones' | 'inactivo' | 'suspendido' | 'permiso'

interface BadgeEstadoProps {
  estado: EstadoEmpleado
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoEmpleado, { fondo: string; texto: string }> = {
  activo:     { fondo: '#e8f5e9', texto: '#2e7d32' },
  vacaciones: { fondo: '#fff8e1', texto: '#f57f17' },
  inactivo:   { fondo: '#f5f5f5', texto: '#616161' },
  suspendido: { fondo: '#fce4ec', texto: '#c62828' },
  permiso:    { fondo: '#e3f2fd', texto: '#1565c0' },
}

const ICONO_ESTADO: Record<EstadoEmpleado, string> = {
  activo:     '●',
  vacaciones: '◐',
  inactivo:   '○',
  suspendido: '✕',
  permiso:    '◆',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaEmpleadoProps {
  nombre: string
  cargo: string
  estado: EstadoEmpleado
  horasExtra?: number
}

function FilaEmpleado({ nombre, cargo, estado, horasExtra }: FilaEmpleadoProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreEmpleado}>{nombre}</Text>
        <Text style={estilos3.cargoTexto}>{cargo}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {horasExtra !== undefined && (
          <Text style={estilos3.horasExtra}>{horasExtra} h extra</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono tamaño={11} />
      </View>
    </View>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Estado del personal</Text>
      <FilaEmpleado nombre="Carlos Mendoza" cargo="Gerente de RH"        estado="activo"     horasExtra={4}  />
      <FilaEmpleado nombre="Ana Torres"     cargo="Analista de Nomina"   estado="activo"     horasExtra={0}  />
      <FilaEmpleado nombre="Luis Paredes"   cargo="Reclutador"           estado="vacaciones" horasExtra={12} />
      <FilaEmpleado nombre="Sofia Vega"     cargo="Asistente Contable"   estado="suspendido"                />
      <FilaEmpleado nombre="Diego Salazar"  cargo="Auxiliar de Archivo"  estado="inactivo"                  />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreEmpleado: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  cargoTexto: { fontSize: 12, color: '#90a4ae' },
  horasExtra: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})