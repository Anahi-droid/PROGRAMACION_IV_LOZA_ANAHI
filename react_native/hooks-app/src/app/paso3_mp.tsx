import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export function Paso3() {
  const inputNombreRef = useRef<TextInput>(null)
  const inputCodigoRef = useRef<TextInput>(null)

  const [nombre, setNombre] = useState<string>('')
  const [codigo, setCodigo] = useState<string>('EMP-')

  useEffect(() => {
    inputNombreRef.current?.focus()
  }, [])

  const intentosSilenciososRef = useRef<number>(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<string>('—')

  function registrarAsistencia() {
    intentosSilenciososRef.current += 1
    setUltimoRegistro(
      `${nombre || 'empleado'} (${codigo}) — intento #${intentosSilenciososRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Asistencia</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del empleado</Text>
        <TextInput
          ref={inputNombreRef}
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Carlos Mendoza"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={() => inputCodigoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Código de empleado</Text>
        <TextInput
          ref={inputCodigoRef}
          style={styles.input}
          value={codigo}
          onChangeText={setCodigo}
          placeholder="EMP-001"
          placeholderTextColor="#aaa"
          autoCapitalize="characters"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={registrarAsistencia}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último registro: {ultimoRegistro}</Text>
      <Text style={styles.detalle}>
        (el contador de intentos no causa re-renders)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  formulario: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  input: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})