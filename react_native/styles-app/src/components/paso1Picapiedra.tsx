// app/index.tsx — función Paso1
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1Picapiedra() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna (por defecto) ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexDirection: 'column' (por defecto)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#b10303' }]}>
          <Text style={estilosPaso1.textoCaja}>Familia Mármol</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#862305' }]}>
          <Text style={estilosPaso1.textoCaja}>Pablo Mármol</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#500c0c' }]}>
          <Text style={estilosPaso1.textoCaja}>Betty Mármol</Text>
        </View>
      </View>

      {/* ── Fila con justifyContent: 'space-between' ───────────── */}
      <Text style={estilosPaso1.etiqueta}>
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#7d2e63' }]}>
          <Text style={estilosPaso1.textoCaja}>curiosidades</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#a927ad' }]}>
          <Text style={estilosPaso1.textoCaja}>pidra</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#ae28e4' }]}>
          <Text style={estilosPaso1.textoCaja}>pedro picapicapiedra</Text>
        </View>
      </View>

      {/* ── flex: 1 proporcional ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flex proporcional: 2 / 1 / 1</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#5255db', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Mr. Slate (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#3f24d8', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Pearl Slaghoople</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#6f5dad', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>The Great Gazoo</Text>
        </View>
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f5f7fa' },
  etiqueta:   { fontSize: 12, color: '#6b7280', fontFamily: 'monospace' },
  columna: {
    flexDirection: 'column', // explícito para que sea visible
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#fff', fontWeight: '600', fontSize: 13 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#1565c0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})