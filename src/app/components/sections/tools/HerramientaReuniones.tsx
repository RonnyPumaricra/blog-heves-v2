import { SectionCard } from '../SectionCard'

interface Props {
  title?: string
  items?: string[]
}

const defaultItems = [
  '• Desarrollar una comprensión común de los interesados clave',
  '• Analizar el nivel de participación de cada interesado',
  '• Identificar formas de involucrar a cada interesado',
  '• Planificar estrategias de comunicación personalizadas',
]

export function HerramientaReuniones({ title = 'Reuniones', items }: Props) {
  const content = items && items.length > 0 ? items : defaultItems

  return (
    <SectionCard title={title}>
      <p>Reuniones con el equipo del proyecto y expertos para:</p>
      <ul>
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </SectionCard>
  )
}
