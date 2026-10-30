import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#1565c0' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="(tabs_mp)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/agregar"
        options={{
          presentation: 'modal',
          title: 'Agregar servidor',
          headerStyle: { backgroundColor: '#263238' },
          headerTintColor: '#eceff1',
        }}
      />
      <Stack.Screen
        name="(modals)/agregar_mp"
        options={{
          presentation: 'modal',
          title: 'Agregar empleado',
          headerStyle: { backgroundColor: '#263238' },
          headerTintColor: '#eceff1',
        }}
      />
    </Stack>
  )
}