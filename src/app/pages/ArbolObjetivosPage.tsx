import { Target } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function ArbolObjetivosPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Target}
        iconBgColor="bg-green-600"
        title="Árbol de Objetivos"
        subtitle="Enfoque de Marco Lógico"
        description="Transformación del problema central en objetivos y medios para alcanzarlos."
      />


    </div>
  );
}
