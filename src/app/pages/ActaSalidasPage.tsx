import { FileText, ArrowRight, CheckCircle, Settings, FileCheck } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function ActaSalidasPage() {
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
        <div className="bg-purple-50 dark:bg-purple-950/40 dark:border-purple-400 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FileCheck className="text-purple-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Acta de Constitución del Proyecto
          </h3>
          <p className="text-muted-foreground mb-4">
            Documento formal que contiene toda la información descrita anteriormente y que:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
              <span><strong>Autoriza formalmente el proyecto</strong> y su existencia dentro de la organización</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
              <span><strong>Confiere autoridad al Director del Proyecto</strong> para aplicar recursos organizacionales</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
              <span><strong>Establece una relación directa</strong> entre el proyecto y los objetivos estratégicos del hospital</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
              <span><strong>Documenta el caso de negocio</strong> y la justificación del retorno social esperado</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
              <span><strong>Identifica limitaciones y supuestos</strong> iniciales del proyecto social hospitalario</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Nota:</strong> El Acta de Constitución debe ser firmada por el patrocinador
              del proyecto antes de proceder a la planificación detallada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}