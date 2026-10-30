import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

interface Solicitud {
  id: string
  nivel: 'urgente' | 'pendiente' | 'info'
  mensaje: string
  empleado: string
  tiempo: string
}

const SOLICITUDES: Solicitud[] = [
  { id: '1', nivel: 'urgente', mensaje: 'Permiso médico por aprobar', empleado: 'Carlos Quishpe', tiempo: 'hace 2 min' },
  { id: '2', nivel: 'urgente', mensaje: 'Corrección de horas extra', empleado: 'María Andrade', tiempo: 'hace 5 min' },
  { id: '3', nivel: 'pendiente', mensaje: 'Solicitud de vacaciones', empleado: 'Daniela Cevallos', tiempo: 'hace 18 min' },
  { id: '4', nivel: 'info', mensaje: 'Contrato renovado', empleado: 'Paola Mena', tiempo: 'hace 1 h' },
]

const COLOR_NIVEL: Record<Solicitud['nivel'], string> = {
  urgente: '#c62828',
  pendiente: '#e65100',
  info: '#1565c0',
}

export default function TabSolicitudesMP() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <Stack.Screen options={{ title: 'Solicitudes' }} />
      <FlatList
        data={SOLICITUDES}
        keyExtractor={(s) => s.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        renderItem={({ item }) => (
          <View style={estSolicitudes.tarjeta}>
            <View style={estSolicitudes.cabecera}>
              <View style={[estSolicitudes.badge, { backgroundColor: COLOR_NIVEL[item.nivel] }]}>
                <Text style={estSolicitudes.badgeTexto}>{item.nivel.toUpperCase()}</Text>
              </View>
              <Text style={estSolicitudes.tiempo}>{item.tiempo}</Text>
            </View>
            <Text style={estSolicitudes.mensaje}>{item.mensaje}</Text>
            <Text style={estSolicitudes.empleado}>{item.empleado}</Text>
          </View>
        )}
      />
    </View>
  )
}

const estSolicitudes = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cabecera: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  tiempo: { fontSize: 12, color: '#90a4ae' },
  mensaje: { fontSize: 14, color: '#1a1a1a', fontWeight: '500' },
  empleado: { fontSize: 12, color: '#1565c0' },
})