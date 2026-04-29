import { FileText, ArrowRight, CheckCircle, Settings, FileCheck } from 'lucide-react';

export default function ActaSalidasPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <FileText className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Acta de Constitución del Proyecto
            </h1>
            <p className="text-gray-600 mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          El Acta de Constitución del Proyecto es el documento que autoriza formalmente la existencia
          del proyecto y confiere al director del proyecto la autoridad para asignar los recursos de
          la organización a las actividades del proyecto.
        </p>
      </div>

      <section className="mb-12">
        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileCheck className="text-purple-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Acta de Constitución del Proyecto
          </h3>
          <p className="text-gray-700 mb-4">
            Documento formal que contiene toda la información descrita anteriormente y que:
          </p>
          <ul className="space-y-3 text-gray-700">
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

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> El Acta de Constitución debe ser firmada por el patrocinador
              del proyecto antes de proceder a la planificación detallada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}