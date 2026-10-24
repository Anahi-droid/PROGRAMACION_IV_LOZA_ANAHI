import { StyleSheet, Text, View } from 'react-native'

interface TarjetaEmpleadoProps {
  nombre: string
  cargo: string
  departamento: string
  extension: number
  sede?: string
}

function TarjetaEmpleado({ nombre, cargo, departamento, extension, sede }: TarjetaEmpleadoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEmpleado}>{nombre}</Text>
      <Text style={styles.datoContacto}>{departamento} - ext. {extension}</Text>
      <Text style={styles.datoCargo}>{cargo}</Text>
      <Text style={styles.datoCargo}>{sede ?? 'sin sede'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Directorio de empleados</Text>
      <TarjetaEmpleado
        nombre="Carlos Mendoza"
        cargo="Gerente de Recursos Humanos"
        departamento="Recursos Humanos"
        extension={101}
      />
      <TarjetaEmpleado
        nombre="Ana Torres"
        cargo="Analista de Nomina"
        departamento="Nomina"
        extension={205}
        sede="Quito"
      />
      <TarjetaEmpleado
        nombre="Luis Paredes"
        cargo="Reclutador"
        departamento="Seleccion de Personal"
        extension={310}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreEmpleado: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoContacto: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoCargo: {
    fontSize: 12,
    color: '#757575',
  },
})