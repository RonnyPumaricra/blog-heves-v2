import { Users, ArrowRight } from 'lucide-react';
import { PageTitle, LinkCard, EntradaFactoresAmbientalesHEVES, EntradaActivosProcesosHEVES } from '../components/sections';

export default function PlanParticipacionEntradasPage() {
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
        <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <ArrowRight className="text-green-600" size={24} />
            Entradas
          </h2>
        </div>

        <div className="space-y-6">
          <LinkCard idx={1} title="Acta de Constitución del Proyecto" to="/acta/salidas" />

          <EntradaFactoresAmbientalesHEVES idx={2} />

          <EntradaActivosProcesosHEVES idx={3} />
        </div>
      </section>
    </div>
  );
}
