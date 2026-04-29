import { FileText, ArrowRight, CheckCircle, Settings, FileCheck } from 'lucide-react';

export default function ActaEntradasPage() {
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
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ArrowRight className="text-green-600" size={24} />
            Entradas
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              1. Documentos de Negocio
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Caso de Negocio:</strong> Justifica la inversión del proyecto social hospitalario,
                incluyendo análisis costo-beneficio y retorno social esperado.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de Beneficios:</strong> Define cómo y cuándo se entregarán los
                beneficios del proyecto a la comunidad y pacientes.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              2. Acuerdos
            </h3>
            <p className="text-gray-700 mb-3">
              Contratos, convenios o compromisos que definen las intenciones iniciales del proyecto:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Convenios con organizaciones comunitarias</li>
              <li>• Acuerdos de colaboración con el hospital</li>
              <li>• Compromisos de financiamiento</li>
              <li>• Memorandos de entendimiento con stakeholders</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. Factores Ambientales de la Empresa
            </h3>
            <p className="text-gray-700 mb-3">
              Condiciones externas e internas que influyen en el proyecto:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Regulaciones gubernamentales de salud y asistencia social</li>
              <li>• Estándares de atención hospitalaria vigentes</li>
              <li>• Cultura organizacional del hospital</li>
              <li>• Infraestructura y recursos disponibles</li>
              <li>• Condiciones socioeconómicas de la comunidad objetivo</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. Activos de los Procesos de la Organización
            </h3>
            <p className="text-gray-700 mb-3">
              Información histórica y lecciones aprendidas de proyectos similares:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Políticas y procedimientos del hospital</li>
              <li>• Plantillas de documentación de proyectos anteriores</li>
              <li>• Base de conocimientos de proyectos sociales previos</li>
              <li>• Información histórica sobre resultados de programas similares</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}