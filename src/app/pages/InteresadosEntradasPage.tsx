import { Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function InteresadosEntradasPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Users className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Identificar a los Interesados
            </h1>
            <p className="text-gray-600 mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Proceso de identificar a las personas, grupos u organizaciones que podrían afectar o ser
          afectados por el proyecto, así como analizar y documentar información relevante relativa a
          sus intereses, participación, interdependencias, influencia y posible impacto en el éxito del proyecto.
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
              1. Acta de Constitución del Proyecto
            </h3>
            <p className="text-gray-700 mb-3">
              Proporciona información sobre interesados clave, propósito del proyecto y autoridad del director:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Propósito y justificación del proyecto social hospitalario</li>
              <li>• Objetivos medibles y criterios de éxito</li>
              <li>• Lista inicial de interesados identificados</li>
              <li>• Director del proyecto y patrocinador principal</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              2. Documentos de Negocio
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Caso de Negocio:</strong> Identifica interesados que se beneficiarán del proyecto
                y aquellos que contribuyen a su financiamiento.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de Beneficios:</strong> Detalla quiénes recibirán los beneficios
                del proyecto social y cuándo.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. Plan para la Dirección del Proyecto
            </h3>
            <p className="text-gray-700 mb-3">
              Componentes relevantes incluyen:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Plan de Gestión de las Comunicaciones</li>
              <li>• Plan de Involucramiento de los Interesados</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. Documentos del Proyecto
            </h3>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Registro de cambios</li>
              <li>• Registro de incidentes</li>
              <li>• Registro de lecciones aprendidas de proyectos similares</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              5. Acuerdos
            </h3>
            <p className="text-gray-700 mb-3">
              Identifican a los interesados relacionados con contratos y convenios:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Organizaciones comunitarias asociadas</li>
              <li>• Proveedores de servicios médicos externos</li>
              <li>• Entidades financiadoras del proyecto</li>
              <li>• Socios estratégicos en la implementación</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              6. Factores Ambientales de la Empresa
            </h3>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Cultura y estructura organizacional del hospital</li>
              <li>• Normativas gubernamentales de salud y asistencia social</li>
              <li>• Tendencias y expectativas de la comunidad</li>
              <li>• Base de datos de interesados de proyectos anteriores</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              7. Activos de los Procesos de la Organización
            </h3>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Plantillas de registro de interesados</li>
              <li>• Lecciones aprendidas de proyectos sociales previos</li>
              <li>• Registros de interesados de iniciativas similaires</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}