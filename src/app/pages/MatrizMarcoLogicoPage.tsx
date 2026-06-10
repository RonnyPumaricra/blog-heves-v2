import { Table } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function MatrizMarcoLogicoPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Table}
        iconBgColor="bg-teal-600"
        title="Matriz de Marco Lógico"
        subtitle="Enfoque de Marco Lógico"
        description="Resumen estructurado del proyecto: objetivos, resultados, actividades, indicadores, medios de verificación y supuestos."
      />
    </div>
  );
}
