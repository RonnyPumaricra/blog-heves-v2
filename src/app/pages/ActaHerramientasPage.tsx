import { FileText, Settings, AlertTriangle, Clock } from 'lucide-react';
import { PageTitle, HerramientaRecopilacionDatos, HerramientaRepresentacionDatos } from '../components/sections';

function PendingSection({ number, title, children, noteText }: {
  number: string;
  title: string;
  children: React.ReactNode;
  noteText?: string;
}) {
  return (
    <div className="bg-card border-2 border-dashed border-amber-400 rounded-lg overflow-hidden">
      <div className="bg-amber-50 dark:bg-amber-950/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg">
            <Clock className="text-white" size={20} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {number}. {title}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 dark:text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-full">
          <AlertTriangle size={14} />
          Pendiente
        </span>
      </div>

      <div className="px-6 py-5">
        <div className="text-muted-foreground">
          {children}
        </div>

        <div className="mt-5 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-400/30 border border-amber-200 rounded-lg p-4 flex gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">Contenido por completar</p>
            <p className="text-sm text-amber-700">
              {noteText || 'Esta sección muestra la estructura genérica según el PMBOK. El contenido específico del proyecto HEVES será añadido conforme se avance en la formulación del proyecto.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ActaHerramientasPage() {
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
