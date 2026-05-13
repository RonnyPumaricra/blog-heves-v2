import { FileText, ArrowRight } from 'lucide-react';
import { PageTitle, EntradaFactoresAmbientalesHEVES, EntradaActivosProcesosHEVES } from '../components/sections';

export default function ActaEntradasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={FileText}
        iconBgColor="bg-blue-600"
        title="Acta de Constitución del Proyecto"
        subtitle="Grupo de Procesos de Inicio"
        description="El Acta de Constitución del Proyecto es el documento que autoriza formalmente la existencia del proyecto y confiere al director del proyecto la autoridad para asignar los recursos de la organización a las actividades del proyecto."
      />

      <section className="mb-12">
        <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <ArrowRight className="text-green-600" size={24} />
            Entradas
          </h2>
        </div>

        <div className="space-y-6">
          <EntradaFactoresAmbientalesHEVES idx={1} />
          <EntradaActivosProcesosHEVES idx={2} />
        </div>
      </section>
    </div>
  );
}
