import { Users, Settings } from 'lucide-react';
import { PageTitle, HerramientaRecopilacionDatos, HerramientaRepresentacionDatos } from '../components/sections';

export default function PlanParticipacionHerramientasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Users}
        iconBgColor="bg-indigo-600"
        title="Plan de Participación de los Interesados"
        subtitle="Grupo de Procesos de Planificación"
        description="Proceso de desarrollar enfoques adecuados para involucrar a los interesados del proyecto de manera efectiva, según sus necesidades, expectativas, intereses y su posible impacto en el proyecto."
      />

      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Settings className="text-blue-600" size={24} />
            Herramientas y Técnicas
          </h2>
        </div>

        <div className="space-y-6">
          <HerramientaRecopilacionDatos idx={1} />

          <HerramientaRepresentacionDatos idx={2} />
        </div>
      </section>
    </div>
  );
}
