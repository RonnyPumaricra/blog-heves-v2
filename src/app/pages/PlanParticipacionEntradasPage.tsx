import { Users, ArrowRight, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { EntradaFactoresAmbientalesHEVES, EntradaActivosProcesosHEVES } from '../components/sections';

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

export default function PlanParticipacionEntradasPage() {
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
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ArrowRight className="text-green-600" size={24} />
            Entradas
          </h2>
        </div>

        <div className="space-y-6">
          <PendingSection number="1" title="Acta de Constitución del Proyecto">
            <p className="text-gray-700 mb-3">
              Proporciona información de alto nivel sobre los interesados clave y los requisitos del proyecto:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Propósito y justificación del proyecto ITSM</li>
              <li>• Objetivos medibles y criterios de éxito</li>
              <li>• Lista inicial de interesados identificados</li>
              <li>• Requisitos de alto nivel</li>
            </ul>
          </PendingSection>

          <PendingSection number="2" title="Plan para la Dirección del Proyecto">
            <p className="text-gray-700 mb-3">
              Componentes relevantes que se utilizan como entrada:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Plan de Gestión de Recursos:</strong> Define cómo se involucrarán los recursos físicos y del equipo</li>
              <li>• <strong>Plan de Gestión de las Comunicaciones:</strong> Proporciona información sobre cómo se comunicará con los interesados</li>
              <li>• <strong>Plan de Gestión de Riesgos:</strong> Identifica cómo se involucrarán los interesados según su tolerancia al riesgo</li>
            </ul>
          </PendingSection>

          <PendingSection number="3" title="Documentos del Proyecto">
            <p className="text-gray-700 mb-3">
              Documentos del proyecto que se utilizan como entradas:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• <strong>Registro de Interesados:</strong> Información detallada sobre los interesados identificados</li>
              <li>• <strong>Registro de Supuestos:</strong> Supuestos que pueden influir en la participación de los interesados</li>
              <li>• <strong>Registro de Cambios:</strong> Cambios aprobados que pueden afectar la participación</li>
              <li>• <strong>Registro de Lecciones Aprendidas:</strong> Información de fases anteriores del proyecto</li>
            </ul>
          </PendingSection>

          <PendingSection number="4" title="Acuerdos">
            <p className="text-gray-700 mb-3">
              Definen a los interesados externos y sus expectativas:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Convenios con organizaciones externas</li>
              <li>• Contratos con proveedores</li>
              <li>• Acuerdos de nivel de servicio (SLA)</li>
              <li>• Compromisos con entidades reguladoras</li>
            </ul>
          </PendingSection>

          <EntradaFactoresAmbientalesHEVES />

          <EntradaActivosProcesosHEVES />
        </div>
      </section>
    </div>
  );
}
