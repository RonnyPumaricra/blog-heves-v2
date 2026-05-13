import { SectionCard } from '../SectionCard'

interface Props {
  title?: string
  items?: { tool: string; description: string }[]
  children?: React.ReactNode
}

const defaultItems = [
  { tool: 'Cuestionarios y Encuestas', description: 'Para recopilar información de un gran número de posibles interesados de manera rápida.' },
  { tool: 'Lluvia de Ideas (Brainstorming)', description: 'Sesiones con el equipo del proyecto para identificar todos los posibles interesados.' },
]

export function HerramientaRecopilacionDatos({ title = 'Recopilación de Datos', items, children }: Props) {
  const content = items && items.length > 0 ? items : defaultItems

  return (
    <SectionCard title={title}>
      {content.map((item, i) => (
        <>
          <h4>{item.tool}</h4>
          <p>{item.description}</p>
        </>
      ))}
      {children}
    </SectionCard>
  )
}
