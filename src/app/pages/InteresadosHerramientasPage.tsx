import { Users, ArrowRight, CheckCircle, Settings } from 'lucide-react';

export default function InteresadosHerramientasPage() {
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
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="text-blue-600" size={24} />
            Herramientas y Técnicas
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              1. Juicio de Expertos
            </h3>
            <p className="text-gray-700 mb-3">
              Consultar con personas con conocimientos especializados en:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Gestión de proyectos sociales y hospitalarios</li>
              <li>• Conocimiento profundo de la comunidad objetivo</li>
              <li>• Experiencia en stakeholder engagement en salud</li>
              <li>• Comprensión del entorno político y regulatorio</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              2. Recopilación de Datos
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cuestionarios y Encuestas</h4>
                <p className="text-gray-700 text-sm">
                  Para recopilar información de un gran número de posibles interesados de manera rápida.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Lluvia de Ideas (Brainstorming)</h4>
                <p className="text-gray-700 text-sm">
                  Sesiones con el equipo del proyecto para identificar todos los posibles interesados.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              3. Análisis de Datos
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Análisis de Interesados</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Identificación sistemática de información sobre interesados:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Matriz Poder/Interés</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded border-2 border-red-400">
                      <strong>Alto Poder / Alto Interés</strong>
                      <p className="text-gray-600 mt-1">Gestionar de cerca (ej: Directorio Hospital)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-yellow-400">
                      <strong>Alto Poder / Bajo Interés</strong>
                      <p className="text-gray-600 mt-1">Mantener satisfecho (ej: Autoridades de salud)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-green-400">
                      <strong>Bajo Poder / Alto Interés</strong>
                      <p className="text-gray-600 mt-1">Mantener informado (ej: Pacientes, familias)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-gray-300">
                      <strong>Bajo Poder / Bajo Interés</strong>
                      <p className="text-gray-600 mt-1">Monitorear (ej: Público general)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Análisis de Documentos</h4>
                <p className="text-gray-700 text-sm">
                  Revisión de convenios, acuerdos y documentación existente para identificar interesados adicionales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              4. Representación de Datos
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mapas Mentales</h4>
                <p className="text-gray-700 text-sm">
                  Representación visual de las relaciones entre interesados y el proyecto.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Grillas de Clasificación de Interesados</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Clasificación según múltiples dimensiones:
                </p>
                <ul className="text-sm text-gray-700 ml-4 space-y-1">
                  <li>• Nivel de poder / influencia</li>
                  <li>• Nivel de interés / impacto</li>
                  <li>• Actitud (partidario, neutral, opositores)</li>
                  <li>• Urgencia de necesidades</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              5. Reuniones
            </h3>
            <p className="text-gray-700 mb-3">
              Reuniones de perfil de interesados con el equipo del proyecto y expertos para:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Desarrollar una comprensión común de los interesados clave</li>
              <li>• Analizar el nivel de participación de cada interesado</li>
              <li>• Identificar formas de involucrar a cada interesado</li>
              <li>• Planificar estrategias de comunicación personalizadas</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}