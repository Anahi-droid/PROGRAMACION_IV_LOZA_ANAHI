import { ComponentRef, useRef, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso5MP() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [clave, setClave] = useState('')
  const [mostrarClave, setMostrarClave] = useState(false)

  const refCorreo = useRef<ComponentRef<typeof TextInput>>(null)
  const refTelefono = useRef<ComponentRef<typeof TextInput>>(null)
  const refClave = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles5.contenedor}>
      <Text style={styles5.titulo}>Registro de acceso del empleado</Text>

      <Text style={styles5.etiqueta}>Nombre completo</Text>
      <TextInput
        style={styles5.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. Ana Morales"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refCorreo.current?.focus()}
      />

      <Text style={styles5.etiqueta}>Correo institucional</Text>
      <TextInput
        ref={refCorreo}
        style={styles5.campo}
        value={correo}
        onChangeText={setCorreo}
        placeholder="ana.morales@empresa.com"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => refTelefono.current?.focus()}
      />

      <Text style={styles5.etiqueta}>Teléfono</Text>
      <TextInput
        ref={refTelefono}
        style={styles5.campo}
        value={telefono}
        onChangeText={setTelefono}
        placeholder="0991234567"
        keyboardType="phone-pad"
        returnKeyType="next"
        onSubmitEditing={() => refClave.current?.focus()}
      />

      <Text style={styles5.etiqueta}>Contraseña</Text>
      <View style={styles5.campoConIcono}>
        <TextInput
          ref={refClave}
          style={[styles5.campo, { flex: 1, marginBottom: 0 }]}
          value={clave}
          onChangeText={setClave}
          placeholder="••••••••"
          secureTextEntry={!mostrarClave}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable onPress={() => setMostrarClave((v) => !v)} style={styles5.toggleClave}>
          <Text style={styles5.toggleClaveTexto}>{mostrarClave ? 'Ocultar' : 'Ver'}</Text>
        </Pressable>
      </View>

      <View style={styles5.preview}>
        <Text style={styles5.previewTexto}>
          {nombre || '<nombre>'} · {correo || '<correo>'} · {telefono || '<teléfono>'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
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
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  toggleClave: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  toggleClaveTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})