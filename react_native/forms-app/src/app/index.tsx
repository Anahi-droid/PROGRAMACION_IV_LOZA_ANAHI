// app/index.tsx
import { Paso1 } from '@/components/paso1'
import { StyleSheet, Text, View } from 'react-native'
import { Paso2 } from '@/components/paso2'
import { Paso3 } from '@/components/paso3'
import { Paso4 } from '@/components/paso4'
import { Paso5 } from '@/components/paso5'
import { Paso5Volumen} from '@/components/paso5Volumen'
import { Paso6 } from '@/components/paso6'
import { Paso7 } from '@/components/paso7'
import { Paso1MP } from '@/components/paso1_mp'
import { Paso1FilaEmpleado } from '@/components/paso1filaempleado_mp'
import { Paso2MP } from '@/components/paso2_mp'
import { Paso2FilaCandidato } from '@/components/paso2filaCandidato'
import { Paso3MP } from '@/components/paso3_mp'
import { Paso3ListaVacia } from '@/components/paso3ListaVacia_mp'
import { Paso3Separador } from '@/components/paso3Separador_mp'
import { Paso4MP } from '@/components/paso4_mp'
import { Paso4EncabezadoSeccion } from '@/components/paso4EncabezadoSeccion_mp'
import { Paso5MP } from '@/components/paso5_mp'
import { Paso6MP } from '@/components/paso6_mp'
import { Paso7MP } from '@/components/paso7_mp'


// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Formulario con validación — agregar servidor                    │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 6

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
    case 6:
      return <Paso5Volumen />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso7 />
    case 9:
      return <Paso1MP />
    case 10:
      return <Paso1FilaEmpleado />
    case 11:
      return <Paso2MP />
    case 12:
      return <Paso2FilaCandidato />
    case 13:
      return <Paso3MP />
    case 14:
      return <Paso3ListaVacia />
    case 15:
      return <Paso3Separador />
    case 16:
      return <Paso4MP />
    case 17:
      return <Paso4EncabezadoSeccion />
    case 18:
      return <Paso5MP />
    case 19:
      return <Paso6MP />
    case 20:
      return <Paso7MP />
    
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

// Los componentes Paso1…Paso6 se añaden en cada sección del tutorial.