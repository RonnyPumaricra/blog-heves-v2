import { Users, FileCheck, AlertTriangle, Clock } from 'lucide-react';

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

export default function PlanParticipacionSalidasPage() {
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
        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileCheck className="text-purple-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="space-y-6">
          <PendingSection number="1" title="Plan de Participación de los Interesados">
            <p className="text-gray-700 mb-3">
              Documento que define las estrategias y acciones para lograr una participación efectiva de los interesados. Incluye:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Niveles actuales y deseados de participación:</strong> Evaluación del nivel de involucramiento de cada interesado (Desconocido, Reacio, Neutral, Favorable, Líder)</li>
              <li>• <strong>Estrategias de participación:</strong> Enfoques específicos para involucrar a cada interesado o grupo de interesados</li>
              <li>• <strong>Acciones y cronogramas:</strong> Actividades planificadas para alcanzar el nivel deseado de participación</li>
              <li>• <strong>Responsabilidades:</strong> Asignación de quién gestionará la participación de cada interesado</li>
              <li>• <strong>Requisitos de comunicación:</strong> Frecuencia, formato y canales de comunicación con cada grupo</li>
              <li>• <strong>Proceso de actualización:</strong> Cómo se revisará y ajustará el plan a lo largo del proyecto</li>
            </ul>
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm text-indigo-800">
                <strong>Matriz de Evaluación de Participación:</strong><br />
                Clasifica a los interesados según su nivel de participación actual y deseado en cinco categorías:
                <strong> Desconocido, Reacio, Neutral, Favorable y Líder.</strong> El objetivo del plan es
                definir las acciones necesarias para mover a cada interesado desde su nivel actual hasta el nivel deseado.
              </p>
            </div>
          </PendingSection>
        </div>
      </section>
    </div>
  );
}
