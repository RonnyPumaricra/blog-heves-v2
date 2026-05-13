import { SectionCard } from '../SectionCard'

interface Props {
  title?: string
  description?: string
  items?: string[]
}

const defaultItems = [
  '• Gestión de proyectos y metodologías aplicables',
  '• Conocimiento profundo del entorno y la comunidad objetivo',
  '• Experiencia en engagement con interesados en el sector',
  '• Comprensión del entorno político y regulatorio',
]

export function HerramientaJuicioExpertos({ title = 'Juicio de Expertos', description, items }: Props) {
  const content = items && items.length > 0 ? items : defaultItems

  return (
    <SectionCard title={title}>
      <p>
        Consultar con personas con conocimientos especializados en:
        {description && ` ${description}`}
      </p>
      <ul>
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </SectionCard>
  )
}
