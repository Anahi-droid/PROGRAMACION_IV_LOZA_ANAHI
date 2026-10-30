import { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type CamposFormulario = {
  nombre: string
  correo: string
  sueldo: string
}

type ErroresFormulario = {
  nombre: string | null
  correo: string | null
  sueldo: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { nombre: null, correo: null, sueldo: null }

  if (campos.nombre.trim().length === 0) {
    errores.nombre = 'El nombre es obligatorio'
  } else if (campos.nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres'
  } else if (/\d/.test(campos.nombre)) {
    errores.nombre = 'El nombre no puede contener números'
  }

  if (campos.correo.trim().length === 0) {
    errores.correo = 'El correo es obligatorio'
  } else if (!REGEX_CORREO.test(campos.correo.trim())) {
    errores.correo = 'Formato inválido (ej. ana@empresa.com)'
  }

  const numeroSueldo = Number(campos.sueldo)
  if (campos.sueldo.trim().length === 0) {
    errores.sueldo = 'El sueldo es obligatorio'
  } else if (Number.isNaN(numeroSueldo) || numeroSueldo <= 0 || numeroSueldo > 100000) {
    errores.sueldo = 'Sueldo inválido (mayor a 0 y hasta 100 000)'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles6.campoWrapper}>
      <Text style={styles6.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles6.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso6MP() {
  const [campos, setCampos] = useState<CamposFormulario>({
    nombre: '',
    correo: '',
    sueldo: '470',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    nombre: null,
    correo: null,
    sueldo: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert('Empleado registrado', `${campos.nombre} · ${campos.correo} · $${campos.sueldo}`, [
      {
        text: 'Registrar otro',
        onPress: () => {
          setCampos({ nombre: '', correo: '', sueldo: '470' })
          setErrores({ nombre: null, correo: null, sueldo: null })
          setEnviado(false)
        },
      },
    ])
  }

  return (
    <SafeAreaView style={styles6.contenedor}>
      <ScrollView contentContainerStyle={styles6.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles6.titulo}>Registrar empleado</Text>
        <Text style={styles6.subtitulo}>Los campos marcados con * son obligatorios</Text>

        <CampoConError etiqueta="Nombre completo *" error={errores.nombre}>
          <TextInput
            style={[styles6.campo, errores.nombre !== null && styles6.campoError]}
            value={campos.nombre}
            onChangeText={(v) => actualizarCampo('nombre', v)}
            placeholder="ej. Ana Morales"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Correo institucional *" error={errores.correo}>
          <TextInput
            style={[styles6.campo, errores.correo !== null && styles6.campoError]}
            value={campos.correo}
            onChangeText={(v) => actualizarCampo('correo', v)}
            placeholder="ana.morales@empresa.com"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Sueldo mensual (USD) *" error={errores.sueldo}>
          <TextInput
            style={[styles6.campo, errores.sueldo !== null && styles6.campoError]}
            value={campos.sueldo}
            onChangeText={(v) => actualizarCampo('sueldo', v)}
            placeholder="470"
            keyboardType="decimal-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles6.botonEnviar,
            pressed && styles6.botonEnviarPresionado,
            enviado && styles6.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles6.textoBoton}>{enviado ? '✓ Registrado' : 'Registrar empleado'}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles6 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})