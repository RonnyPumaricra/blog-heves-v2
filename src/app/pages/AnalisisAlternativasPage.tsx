import { GitCompare } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function AnalisisAlternativasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={GitCompare}
        iconBgColor="bg-violet-600"
        title="Análisis de Alternativas"
        subtitle="Enfoque de Marco Lógico"
        description="Identificación y evaluación de las posibles estrategias de intervención para alcanzar los objetivos."
      />
    </div>
  );
}
