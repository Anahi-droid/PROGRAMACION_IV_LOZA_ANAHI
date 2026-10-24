import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoConsulta = 'consultando' | 'ok' | 'timeout' | 'inactivo'

export function Paso2() {
    const [tiempoRespuesta, setTiempoRespuesta] = useState<number | null>(null)
    const [estado, setEstado] = useState<EstadoConsulta>('inactivo')
    const [activo, setActivo] = useState<boolean>(false)
    const [ciclos, setCiclos] = useState<number>(0)

    useEffect(() => {
        if (!activo) return

        let temporizador: ReturnType<typeof setTimeout> | undefined

        const intervalo = setInterval(() => {
            setEstado('consultando')

            temporizador = setTimeout(() => {
                const falla = Math.random() < 0.15
                if (falla) {
                    setTiempoRespuesta(null)
                    setEstado('timeout')
                } else {
                    const ms = Math.floor(Math.random() * 190) + 10
                    setTiempoRespuesta(ms)
                    setEstado('ok')
                }
                setCiclos(c => c + 1)
            }, 400)
        }, 2000)

        return () => {
            clearInterval(intervalo)
            if (temporizador) clearTimeout(temporizador)
        }
    }, [activo])

    const colorEstado: Record<EstadoConsulta, string> = {
        consultando: '#1565c0',
        ok: '#2e7d32',
        timeout: '#c62828',
        inactivo: '#757575',
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Monitor de Biométrico — Reloj de Asistencia</Text>

            <View style={[styles.tarjeta, { borderColor: colorEstado[estado] }]}>
                <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
                    {estado.toUpperCase()}
                </Text>
                <Text style={styles.latencia}>
                    {tiempoRespuesta !== null ? `${tiempoRespuesta} ms` : '— ms'}
                </Text>
                <Text style={styles.ciclos}>Consultas completadas: {ciclos}</Text>
                <Text style={styles.detalle}>reloj-01 · Recursos Humanos · Sede Quito</Text>
            </View>

            <Pressable
                style={({ pressed }) => [
                    styles.boton,
                    activo ? styles.botonDetener : styles.botonIniciar,
                    pressed && { opacity: 0.75 },
                ]}
                onPress={() => setActivo(a => !a)}>
                <Text style={styles.textoBoton}>
                    {activo ? 'Detener monitoreo' : 'Iniciar monitoreo'}
                </Text>
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
    etiqueta: {
        fontSize: 15,
        fontWeight: '700',
    },
    latencia: {
        fontSize: 10,
        fontWeight: '700',
        color: '#8f0f5e',
    },
    ciclos: {
        fontSize: 12,
        fontWeight: '500',
        color: '#40c22e',
    },
    tarjeta: {
        width: '100%',
        padding: 16,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#fff',
        gap: 6,
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
    botonDetener: {
        backgroundColor: '#fd4f24',
    },
    botonIniciar: {
        backgroundColor: '#a5d6a7',
    },
    textoBoton: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },
})