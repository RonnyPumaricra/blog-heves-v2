import { CheckCircle } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function DtEvaluarPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={CheckCircle}
        iconBgColor="bg-green-600"
        title="Evaluar"
        subtitle="Design Thinking"
        description="Probar los prototipos con usuarios reales para obtener retroalimentación y refinar las soluciones."
      />
    </div>
  );
}
