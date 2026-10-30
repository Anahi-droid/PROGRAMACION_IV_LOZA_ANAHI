import { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export function Paso7MP() {
  const [nombre, setNombre] = useState('')
  const [cargo, setCargo] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [observaciones, setObservaciones] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onAgregar() {
    if (!nombre.trim() || !cargo.trim() || !departamento.trim()) {
      setError('Completa nombre, cargo y departamento antes de continuar')
      return
    }
    setError(null)
    Alert.alert(
      'Contratación lista',
      `${nombre} · ${cargo}\nDepartamento: ${departamento}\nObservaciones: ${observaciones || 'sin observaciones'}`
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles7.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles7.cabecera}>
          <Text style={styles7.cabeceraTitulo}>Nueva contratación</Text>
          <Text style={styles7.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles7.cuerpo} keyboardShouldPersistTaps="handled">
          <Text style={styles7.etiquetaCampo}>Nombre del empleado</Text>
          <TextInput
            style={styles7.campo}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Ana Morales"
            autoCorrect={false}
          />

          <Text style={styles7.etiquetaCampo}>Cargo</Text>
          <TextInput
            style={styles7.campo}
            value={cargo}
            onChangeText={setCargo}
            placeholder="Analista de nómina"
          />

          <Text style={styles7.etiquetaCampo}>Departamento</Text>
          <TextInput
            style={styles7.campo}
            value={departamento}
            onChangeText={setDepartamento}
            placeholder="Talento humano"
          />

          <Text style={styles7.etiquetaCampo}>Observaciones (opcional)</Text>
          <TextInput
            style={[styles7.campo, styles7.campoMultilinea]}
            value={observaciones}
            onChangeText={setObservaciones}
            placeholder="Periodo de prueba de 3 meses. Inicio de labores: lunes 08:00"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles7.bannerError}>
              <Text style={styles7.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [styles7.boton, pressed && { opacity: 0.8 }]}
            onPress={onAgregar}
          >
            <Text style={styles7.textoBoton}>Registrar contratación</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles7 = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#f0f4f8' },
  cabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#90caf9', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
    }),
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})