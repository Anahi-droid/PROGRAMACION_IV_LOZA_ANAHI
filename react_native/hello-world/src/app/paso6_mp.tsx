import { useState } from "react"
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from "react-native"
import { BadgeEstado } from "./paso3"
import { Card, FilaInfo } from "./paso2"
import { ModalConfirm } from "./paso5"

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} registrado para Carlos Mendoza`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Carlos Mendoza</Text>
          <Text style={estilos6.cabCargo}>Gerente de RH · Recursos Humanos</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        <Card titulo="Resumen laboral" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="Asistencia" valor="98% · 18 días" />
          <FilaInfo etiqueta="Desempeño" valor="92% · Sobresaliente" />
          <FilaInfo etiqueta="Vacaciones" valor="9 / 15 días disponibles" />
          <FilaInfo etiqueta="Horas extra" valor="4 h este mes" />
          <FilaInfo etiqueta="Antigüedad" valor="6 años, 3 meses" />
        </Card>

        <Card titulo="Datos contractuales">
          <FilaInfo etiqueta="Código" valor="EMP-001" />
          <FilaInfo etiqueta="Contrato" valor="Indefinido · tiempo completo" />
          <FilaInfo etiqueta="Salario" valor="USD 2.500 mensuales" />
          <FilaInfo etiqueta="Sede" valor="Quito" />
          <FilaInfo etiqueta="Jefe directo" valor="Director General" />
        </Card>

        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Promover"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Promoción')}
            />
            <BotonAccion
              etiqueta="Dar de baja"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Baja')}
            />
            <BotonAccion
              etiqueta="Vacaciones"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Solicitud de vacaciones')}
            />
            <BotonAccion
              etiqueta="Ver historial"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Consulta de historial')}
            />
          </View>
        </Card>

        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Registrar "${accionPendiente}" para Carlos Mendoza?\nEsta acción quedará en su expediente.`}
        etiquetaConfirmar="Registrar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,