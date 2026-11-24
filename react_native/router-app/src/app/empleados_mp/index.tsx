import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, router } from 'expo-router'
import { EMPLEADOS_MP, COLOR_ESTADO } from '../../data/empleados_mp'

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
            onPress={() =>
              router.push({ pathname: '/empleados_mp/[id]', params: { id: item.id } })
            }
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
  badge: { borderRadius: 4, paddingHorizontal: 8, paddingVertical: 3 },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#1565c0',
    fontSize: 14,
  },
})