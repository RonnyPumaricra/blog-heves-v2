import { SectionCard } from '../SectionCard'
import { HerramientaMatrizPoderInteres } from './HerramientaMatrizPoderInteres'

interface Props {
  idx: number
}

export function HerramientaRepresentacionDatos({ idx }: Props) {
  return (
    <SectionCard title={`${idx}. Representación de Datos`}>
      <HerramientaMatrizPoderInteres />
    </SectionCard>
  )
}
