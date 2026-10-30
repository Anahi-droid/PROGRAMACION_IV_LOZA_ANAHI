import { useConexionSimulada } from '@/hooks/useConexionSimulada'
import { StyleSheet, Text, View, Pressable } from 'react-native'

interface PropsTarjeta {
  nombre: string
  hook: ReturnType<typeof useConexionSimulada>
}

export function TarjetaSistemaMP({ nombre, hook }: PropsTarjeta) {
  const { estado, intentos, latencia, reconectar, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    desconectado: '#757575',
    conectando: '#1565c0',
    conectado: '#2e7d32',
    error: '#c62828',
  }

  const textoBoton: Record<string, string> = {
    desconectado: 'Conectar',
    conectando: 'Conectando…',
    conectado: 'Reconectar',
    error: 'Reintentar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreSistema}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>{estado.toUpperCase()}</Text>
      </View>

      <Text style={styles.detalle}>
        Intentos: {intentos}
        {latencia !== null ? `  ·  Latencia: ${latencia} ms` : ''}
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            styles.botonActivo,
            estado === 'conectando' && styles.botonDeshabilitado,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={reconectar}
          disabled={estado === 'conectando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.botonSecundario, pressed && { opacity: 0.75 }]}
          onPress={reiniciar}
        >
          <Text style={styles.textoSecundario}>Reiniciar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nombreSistema: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#bdbdbd',
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#90caf9',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1565c0',
    justifyContent: 'center',
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 13,
  },
})