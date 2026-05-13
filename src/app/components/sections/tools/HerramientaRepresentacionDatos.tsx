import { SectionCard } from '../SectionCard'

interface Props {
  title?: string
  children?: React.ReactNode
}

export function HerramientaRepresentacionDatos({ title = 'Representación de Datos', children }: Props) {
  return (
    <SectionCard title={title}>
      <h4>Mapas Mentales</h4>
      <p>Representación visual de las relaciones entre interesados y el proyecto.</p>
      <h4>Grillas de Clasificación de Interesados</h4>
      <p>Clasificación según múltiples dimensiones:</p>
      <ul>
        <li>• Nivel de poder / influencia</li>
        <li>• Nivel de interés / impacto</li>
        <li>• Actitud (partidario, neutral, opositor)</li>
        <li>• Urgencia de necesidades</li>
      </ul>
      {children}
    </SectionCard>
  )
}
