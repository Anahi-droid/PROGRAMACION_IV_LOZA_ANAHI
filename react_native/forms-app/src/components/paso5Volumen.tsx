import { ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, TextInput, Text, View, StyleSheet } from 'react-native'

export function Paso5Volumen() {
  const [nombre, setNombre] = useState('') // Lo usaremos como 'Base'
  const [ip, setIp] = useState('')         // Lo usaremos como 'Altura'
  const [puerto, setPuerto] = useState('') // Lo usaremos como 'Profundidad'

  const refIp = useRef<ComponentRef<typeof TextInput>>(null)
  const refPuerto = useRef<ComponentRef<typeof TextInput>>(null)
  const refPass = useRef<ComponentRef<typeof TextInput>>(null)

  const baseNum = parseFloat(nombre) || 0
  const alturaNum = parseFloat(ip) || 0
  const profundidadNum = parseFloat(puerto) || 0

  const volumenTotal = baseNum * alturaNum * profundidadNum

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Calcular el Volumen</Text>

      {/* Base */}
      <Text style={styles4.etiqueta}>Base</Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refIp.current?.focus()}
      />

      {/* Altura */}
      <Text style={styles4.etiqueta}>Altura</Text>
      <TextInput
        ref={refIp}
        style={styles4.campo}
        value={ip}
        onChangeText={setIp}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refPuerto.current?.focus()}
      />

      {/* Profundidad */}
      <Text style={styles4.etiqueta}>Profundidad</Text>
      <TextInput
        ref={refPuerto}
        style={styles4.campo}
        value={puerto}
        onChangeText={setPuerto}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refPass.current?.focus()}
      />

      {/* Vista previa con el resultado del volumen */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTitulo}>Resultado del cálculo:</Text>
        <Text style={styles4.previewTexto}>
          {baseNum} × {alturaNum} × {profundidadNum} = **{volumenTotal} unidades³**
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTitulo: {
    fontSize: 12,
    color: '#90caf9',
    marginBottom: 4,
    fontWeight: '600',
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#a8ff78',
  },
})