import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'

export default function ModalAgregarEmpleadoMP() {
  const [nombre, setNombre] = useState('')
  const [cargo, setCargo] = useState('')

  function guardar() {
    if (!nombre.trim() || !cargo.trim()) return
    console.log('Nuevo empleado:', { nombre, cargo })
    router.back()
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.instruccion}>
        Ingresa los datos del nuevo colaborador para registrarlo en recursos humanos.
      </Text>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="ej. Ana Morales"
          placeholderTextColor="#90a4ae"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Cargo</Text>
        <TextInput
          style={styles.input}
          value={cargo}
          onChangeText={setCargo}
          placeholder="ej. Analista de nómina"
          placeholderTextColor="#90a4ae"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar empleado</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#263238',
    padding: 24,
    gap: 20,
  },
  instruccion: { fontSize: 14, color: '#90a4ae', lineHeight: 20 },
  grupo: { gap: 6 },
  etiqueta: { fontSize: 13, color: '#b0bec5', fontWeight: '500' },
  input: {
    backgroundColor: '#37474f',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#eceff1',
    borderWidth: 1,
    borderColor: '#546e7a',
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#0d47a1' },
  botonTexto: { color: '#fff', fontWeight: '700', fontSize: 16 },
  cancelar: { textAlign: 'center', color: '#78909c', fontSize: 14, padding: 8 },
})