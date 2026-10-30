import { Text, View, StyleSheet } from 'react-native'
import { Paso1 } from '@/components/paso1'
import { Paso1Picapiedra } from '@/components/paso1Picapiedra'
import { Paso2 } from '@/components/paso2'
import { Paso3 } from '@/components/paso3'
import { Paso4 } from '@/components/paso4'
import { Paso5 } from '@/components/paso5'
import { Paso6 } from '@/components/paso6'
import { Paso1MP } from '@/components/paso1_mp'
import { Paso2MP } from '@/components/paso2_mp'
import { Paso3MP } from '@/components/paso3_mp'
import { Paso4MP } from '@/components/paso4_mp'
import { Paso5MP } from '@/components/paso5_mp'
import { Paso6MP } from '@/components/paso6_mp'

const PASO = 8

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso1Picapiedra />
    case 3:
      return <Paso2 />
    case 4:
      return <Paso3 />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
    case 8:
      return <Paso1MP />
    case 9:
      return <Paso2MP />
    case 10:
      return <Paso3MP />
    case 11:
      return <Paso4MP />
    case 12:
      return <Paso5MP />
    case 13:
      return <Paso6MP />
    default:
      return (
        <View style={estilos.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const estilos = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 18, fontWeight: '600' },
})