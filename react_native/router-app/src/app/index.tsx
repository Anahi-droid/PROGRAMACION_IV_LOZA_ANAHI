import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, router } from 'expo-router'

export interface EmpleadoMP {
  id: string
  nombre: string
  cargo: string
  estado: 'activo' | 'vacaciones' | 'licencia'
}

export const EMPLEADOS_MP: EmpleadoMP[] = [
  { id: '1', nombre: 'María Andrade', cargo: 'Analista de nómina', estado: 'activo' },
  { id: '2', nombre: 'Carlos Quishpe', cargo: 'Coordinador de selección', estado: 'activo' },
  { id: '3', nombre: 'Daniela Cevallos', cargo: 'Especialista en capacitación', estado: 'vacaciones' },
  { id: '4', nombre: 'Jorge Naranjo', cargo: 'Analista de bienestar', estado: 'licencia' },
  { id: '5', nombre: 'Paola Mena', cargo: 'Reclutadora', estado: 'activo' },
]

export const COLOR_ESTADO: Record<EmpleadoMP['estado'], string> = {
  activo: '#2e7d32',
  vacaciones: '#e65100',
  licencia: '#c62828',
}

export default function ListaEmpleadosMP() {
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={EMPLEADOS_MP}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && styles.tarjetaPresionada]}
            onPress={() => router.push(`/empleados_mp/${item.id}`)}
          >
            <View style={styles.fila}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <View style={[styles.badge, { backgroundColor: COLOR_ESTADO[item.estado] }]}>
                <Text style={styles.badgeTexto}>{item.estado.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.cargo}>{item.cargo}</Text>
          </Pressable>
        )}
      />

      <Link href="/empleados_mp/1" style={styles.enlaceDirecto}>
        Ir directo a María Andrade (Link declarativo)
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  lista: { padding: 16, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#e3f2fd' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre: { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  cargo: { fontSize: 13, color: '#1565c0' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#1565c0',
    fontSize: 14,
  },
})