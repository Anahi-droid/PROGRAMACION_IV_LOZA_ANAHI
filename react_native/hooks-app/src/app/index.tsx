import { View, Text } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso3Suma } from './paso3Suma'
import { Paso4 } from './paso4'
import { Paso1 as Paso1MP } from './paso1_mp'
import { Paso2 as Paso2MP } from './paso2_mp'
import { Paso3 as Paso3MP } from './paso3_mp'
import { Paso4MP } from './paso4_mp'
import Paso5 from './paso5'
import Paso6 from './paso6'
import Paso7 from './paso7'
import { Paso8 } from './paso8'
import { TarjetaServidor } from './paso8TarjetaServidor'
import { Paso5MP } from './paso5_mp'
import { Paso6MP } from './paso6_mp'
import { Paso7MP } from './paso7_mp'
import { Paso8MP } from './paso8_mp'
import { TarjetaSistemaMP } from './paso8TarjetaServidor_mp'

const PASO = 15

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
    case 15:
      return <Paso5MP />
    case 16:
      return <Paso6MP />
    case 17:
      return <Paso7MP />
    case 18:
      return <Paso8MP />
    case 19:
      return <TarjetaSistemaMP />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}