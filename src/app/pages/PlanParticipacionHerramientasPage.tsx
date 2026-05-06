import { Users, Settings, AlertTriangle, Clock } from 'lucide-react';

function PendingSection({ number, title, children, noteText }: {
  number: string;
  title: string;
  children: React.ReactNode;
  noteText?: string;
}) {
  return (
    <div className="bg-white border-2 border-dashed border-amber-400 rounded-lg overflow-hidden">
      <div className="bg-amber-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg">
            <Clock className="text-white" size={20} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            {number}. {title}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
          <AlertTriangle size={14} />
          Pendiente
        </span>
      </div>

      <div className="px-6 py-5">
        <div className="text-gray-600">
          {children}
        </div>

        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-sm font-semibold text-amber-800 mb-1">Contenido por completar</p>
            <p className="text-sm text-amber-700">
              {noteText || 'Esta sección muestra la estructura genérica según el PMBOK. El contenido específico del proyecto HEVES será añadido conforme se avance en la formulación del proyecto.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlanParticipacionHerramientasPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600 p-3 rounded-lg">
            <Users className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Plan de Participación de los Interesados
            </h1>
            <p className="text-gray-600 mt-1">Grupo de Procesos de Planificación</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Proceso de desarrollar enfoques adecuados para involucrar a los interesados del proyecto
          de manera efectiva, según sus necesidades, expectativas, intereses y su posible impacto
          en el proyecto.
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
          <PendingSection number="1" title="Juicio de Expertos">
            <p className="text-gray-700 mb-3">
              Consultar con personas con conocimientos especializados en:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Estrategias de participación de interesados en proyectos de TI</li>
              <li>• Conocimiento del entorno hospitalario y de salud</li>
              <li>• Gestión del cambio organizacional</li>
              <li>• Comprensión del contexto político y regulatorio</li>
            </ul>
          </PendingSection>

          <PendingSection number="2" title="Recopilación de Datos">
            <p className="text-gray-700 mb-3">
              Técnicas para obtener información relevante sobre los interesados:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Cuestionarios y Encuestas:</strong> Recopilar expectativas y necesidades de los interesados</li>
              <li>• <strong>Entrevistas:</strong> Conversaciones directas con interesados clave para comprender su nivel de participación actual y deseado</li>
            </ul>
          </PendingSection>

          <PendingSection number="3" title="Análisis de Datos">
            <p className="text-gray-700 mb-3">
              Evaluar el nivel actual y deseado de participación:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Análisis de Supuestos y Restricciones:</strong> Identificar supuestos sobre la disponibilidad y disposición de los interesados</li>
              <li>• <strong>Análisis de Documentos:</strong> Revisar documentación existente para comprender las relaciones con interesados</li>
            </ul>
          </PendingSection>

          <PendingSection number="4" title="Toma de Decisiones">
            <p className="text-gray-700 mb-3">
              Técnicas para seleccionar las estrategias de participación más adecuadas:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Priorización:</strong> Determinar qué interesados requieren mayor nivel de involucramiento</li>
              <li>• <strong>Votación:</strong> Consenso del equipo sobre las estrategias de participación</li>
            </ul>
          </PendingSection>

          <PendingSection number="5" title="Representación de Datos">
            <p className="text-gray-700 mb-3">
              Herramientas visuales para planificar la participación:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Mapa Mental:</strong> Diagramas de relaciones entre interesados y estrategias de engagement</li>
              <li>• <strong>Matriz de Evaluación de Participación:</strong> Niveles de participación actual vs. deseado (Desconocido, Reacio, Neutral, Favorable, Líder)</li>
            </ul>
          </PendingSection>

          <PendingSection number="6" title="Reuniones">
            <p className="text-gray-700 mb-3">
              Sesiones con el equipo del proyecto y expertos para:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Definir estrategias de participación para cada interesado clave</li>
              <li>• Identificar barreras y oportunidades de involucramiento</li>
              <li>• Establecer cronogramas de comunicación y participación</li>
              <li>• Asignar responsabilidades para la gestión de interesados</li>
            </ul>
          </PendingSection>
        </div>
      </section>
    </div>
  );
}
