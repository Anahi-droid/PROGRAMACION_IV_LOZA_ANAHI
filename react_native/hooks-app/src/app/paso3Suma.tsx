// app/index.tsx
import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'

export function Paso3Suma() {
  // ── Uso 1: referencia a un TextInput para foco programático (usamos `any` para evitar conflictos de tipos) 
  const inputHostRef = useRef<any>(null)
  const inputPuertoRef = useRef<any>(null)

  const [host, setHost] = useState<number>()
  
  const [puerto, setPuerto] = useState<number>()

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    const suma = 
    setUltimaConexion(
      `${host || 'servidor'}:${puerto} — intento #${intentosSilenciosRef.current}`
    )
  }




  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Suma de Dos Números</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Numero 1</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          onChangeText={Number}
          placeholder=""
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Numero 2</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          placeholder="22"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último intento: {ultimaConexion}</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
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