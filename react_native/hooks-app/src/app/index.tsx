// app/index.tsx
import { View, Text } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso3Suma} from './paso3Suma'
import { Paso4 } from './paso4'
import { Paso1 as Paso1MP } from "./paso1_mp"
import { Paso2 as Paso2MP } from "./paso2_mp"
import { Paso3 as Paso3MP } from "./paso3_mp"
import { Paso4 as Paso4MP } from "./paso4_mp"
import  Paso5  from './paso5'
import  Paso6  from './paso6'
import  Paso7  from './paso7'
import  { Paso8 } from './paso8'
import { TarjetaServidor }  from './paso8TarjetaServidor'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  useState — contador de reintentos                    │
// │  2  Paso 2  useEffect — ping periódico con setInterval           │
// │  3  Paso 3  useRef — foco en TextInput y contador sin re-render  │
// │  4  Paso 4  Hooks nativos de RN — dimensiones, esquema de color  │
// │  5  Paso 5  Custom hook — useConexionSimulada                    │
// │  6  Paso 6  Ejemplo combinado — pantalla de estado del servidor  │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 14

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso3Suma />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso1MP />
    case 7:
      return <Paso2MP />
    case 8:
      return <Paso3MP />
    case 9:
      return <Paso4MP />
    case 10:
      return <Paso5 />
    case 11:
      return <Paso6 />
    case 12:
      return <Paso7 />
    case 13:
      return <Paso8 />
    case 14:
      return <TarjetaServidor />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

