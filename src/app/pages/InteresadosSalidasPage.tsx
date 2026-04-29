import { Users, ArrowRight, CheckCircle, FileCheck } from 'lucide-react';

export default function InteresadosSalidasPage() {
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
        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileCheck className="text-purple-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              1. Registro de Interesados
            </h3>
            <p className="text-gray-700 mb-4">
              Documento que contiene detalles sobre los interesados identificados:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Interesado</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Rol</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Interés</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Poder</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Estrategia</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Directorio Hospital</td>
                    <td className="border border-gray-300 px-4 py-2">Patrocinador</td>
                    <td className="border border-gray-300 px-4 py-2">Alto</td>
                    <td className="border border-gray-300 px-4 py-2">Alto</td>
                    <td className="border border-gray-300 px-4 py-2">Gestionar de cerca</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Pacientes</td>
                    <td className="border border-gray-300 px-4 py-2">Beneficiarios</td>
                    <td className="border border-gray-300 px-4 py-2">Alto</td>
                    <td className="border border-gray-300 px-4 py-2">Bajo</td>
                    <td className="border border-gray-300 px-4 py-2">Mantener informados</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Personal Médico</td>
                    <td className="border border-gray-300 px-4 py-2">Implementadores</td>
                    <td className="border border-gray-300 px-4 py-2">Alto</td>
                    <td className="border border-gray-300 px-4 py-2">Medio</td>
                    <td className="border border-gray-300 px-4 py-2">Mantener informados</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ONGs Comunitarias</td>
                    <td className="border border-gray-300 px-4 py-2">Socios</td>
                    <td className="border border-gray-300 px-4 py-2">Medio</td>
                    <td className="border border-gray-300 px-4 py-2">Medio</td>
                    <td className="border border-gray-300 px-4 py-2">Mantener satisfechos</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Autoridades de Salud</td>
                    <td className="border border-gray-300 px-4 py-2">Reguladores</td>
                    <td className="border border-gray-300 px-4 py-2">Bajo</td>
                    <td className="border border-gray-300 px-4 py-2">Alto</td>
                    <td className="border border-gray-300 px-4 py-2">Mantener satisfechos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              2. Registro de Solicitudes de Cambio
            </h3>
            <p className="text-gray-700 mb-3">
              El proceso de identificar interesados puede generar solicitudes de cambio al proyecto:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Cambios en el alcance basados en necesidades de interesados</li>
              <li>• Ajustes en la estrategia de comunicación</li>
              <li>• Modificaciones en los entregables del proyecto</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              3. Actualizaciones al Plan para la Dirección del Proyecto
            </h3>
            <p className="text-gray-700 mb-3">
              Componentes que pueden requerir actualización:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de Requisitos:</strong> Nuevos requisitos identificados por interesados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de las Comunicaciones:</strong> Estrategias para comunicarse con cada grupo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de los Riesgos:</strong> Riesgos asociados con interesados identificados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Involucramiento de los Interesados:</strong> Niveles de participación deseados</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              4. Actualizaciones a los Documentos del Proyecto
            </h3>
            <p className="text-gray-700 mb-3">
              Documentos que pueden actualizarse incluyen:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Registro de supuestos sobre comportamiento de interesados</li>
              <li>• Registro de incidentes relacionados con interesados</li>
              <li>• Registro de riesgos asociados a la gestión de interesados</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}