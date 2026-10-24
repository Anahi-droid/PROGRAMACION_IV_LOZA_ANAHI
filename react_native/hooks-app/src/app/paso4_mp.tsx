import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export function Paso4() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()

  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const empleados = [
    { nombre: 'Carlos Mendoza', cargo: 'Gerente de RH',       estado: 'activo' },
    { nombre: 'Ana Torres',     cargo: 'Analista de Nomina',  estado: 'activo' },
    { nombre: 'Luis Paredes',   cargo: 'Reclutador',          estado: 'vacaciones' },
    { nombre: 'Sofia Vega',     cargo: 'Asistente Contable',  estado: 'activo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Directorio de Empleados
      </Text>

      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, width: '100%' }}>
        {empleados.map(emp => (
          <View
            key={emp.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreEmpleado, { color: colores.texto }]}>
              {emp.nombre}
            </Text>
            <Text style={[styles.cargoEmpleado, { color: colores.detalle }]}>
              {emp.cargo}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: emp.estado === 'activo' ? '#2e7d32' : '#f57f17',
            }}>
              {emp.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      <View style={[styles.nota, { backgroundColor: colores.tarjeta, borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context
          (ya visto en Página 2 como SafeAreaView). El hook expone los valores
          numéricos {'{'}top, bottom, left, right{'}'} para cuando necesitas
          posicionar elementos manualmente respetando el notch y la barra de inicio.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    gap: 6,
  },
  nota: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    gap: 6,
  },
  notaTexto: {
    fontSize: 13,
    lineHeight: 18,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
  },
  nombreEmpleado: {
    fontSize: 16,
    fontWeight: '700',
  },
  cargoEmpleado: {
    fontSize: 14,
  },
})