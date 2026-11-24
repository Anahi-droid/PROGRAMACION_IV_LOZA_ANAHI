export interface EmpleadoMP {
  id: string
  nombre: string
  cargo: string
  estado: 'activo' | 'vacaciones' | 'licencia'
}

export const EMPLEADOS_MP: EmpleadoMP[] = [
  { id: '1', nombre: 'María Andrade', cargo: 'Analista de nómina', estado: 'activo' },
  { id: '2', nombre: 'Carlos Quishpe', cargo: 'Coordinador de selección', estado: 'activo' },
  { id: '3', nombre: 'Daniela Cevallos', cargo: 'Especialista en capacitación', estado: 'vacaciones' },
  { id: '4', nombre: 'Jorge Naranjo', cargo: 'Analista de bienestar', estado: 'licencia' },
  { id: '5', nombre: 'Paola Mena', cargo: 'Reclutadora', estado: 'activo' },
]

export const COLOR_ESTADO: Record<EmpleadoMP['estado'], string> = {
  activo: '#2e7d32',
  vacaciones: '#e65100',
  licencia: '#c62828',
}