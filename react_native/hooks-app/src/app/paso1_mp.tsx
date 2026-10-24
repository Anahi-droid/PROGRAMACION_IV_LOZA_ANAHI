import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const INTENTOS_PARA_CONECTAR = 3

export function Paso1() {
  const [intentos, setIntentos] = useState<number>(0)
  const [conectado, setConectado] = useState<boolean>(false)

  function manejarReintento() {
    if (conectado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    if (nuevoIntento >= INTENTOS_PARA_CONECTAR) {
      setConectado(true)
    }
  }

  function reiniciar() {
    setIntentos(0)
    setConectado(false)
  }

  const estadoTexto = conectado
    ? '✓ Conectado a nomina-01'
    : intentos === 0
      ? 'Sin conexión'
      : `Intento ${intentos} de ${INTENTOS_PARA_CONECTAR} fallido`

  const colorEstado = conectado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Conexión al Sistema de Nómina</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>nomina-01 · 10.0.2.20:1433</Text>
      </View>
      <Text style={[styles.detalle, { color: colorEstado }]}>
        {intentos > 0 && !conectado ? 'Error al conectar con el sistema de nómina' : ''}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          conectado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !conectado && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={conectado}
      >
        <Text style={styles.textoBoton}>
          {conectado ? 'Conectado' : 'Reintentar conexión'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar simulación</Text>
      </Pressable>
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
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
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
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})