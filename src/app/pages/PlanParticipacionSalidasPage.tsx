import { Users, FileCheck, FileSpreadsheet, CheckCircle } from 'lucide-react';

export default function PlanParticipacionSalidasPage() {
  const stakeholders = [
    {
      interesado: 'Director Ejecutivo',
      clasificacion: 'Gestionar de cerca',
      actual: 'Neutral / Partidario',
      deseado: 'Líder',
      estrategia: 'Reuniones ejecutivas, validación de hitos, gestión de decisiones clave',
      frecuencia: 'Semanal o quincenal',
    },
    {
      interesado: 'Asesor de Dirección Ejecutiva',
      clasificacion: 'Gestionar de cerca',
      actual: 'Neutral / Partidario',
      deseado: 'Partidario',
      estrategia: 'Coordinación directa, revisión de avances y riesgos',
      frecuencia: 'Semanal',
    },
    {
      interesado: 'Jefa de UTI',
      clasificacion: 'Gestionar de cerca',
      actual: 'Partidario',
      deseado: 'Líder',
      estrategia: 'Participación activa en decisiones técnicas y funcionales',
      frecuencia: 'Semanal',
    },
    {
      interesado: 'Equipo UNTELS',
      clasificacion: 'Gestionar de cerca',
      actual: 'Partidario',
      deseado: 'Líder',
      estrategia: 'Reuniones de trabajo, seguimiento técnico y académico',
      frecuencia: 'Semanal',
    },
    {
      interesado: 'MINSA',
      clasificacion: 'Mantener satisfecho',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Reportes ejecutivos y enfoque en cumplimiento e impacto institucional',
      frecuencia: 'Mensual',
    },
    {
      interesado: 'OCI',
      clasificacion: 'Mantener satisfecho',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Información sobre control, trazabilidad y riesgos',
      frecuencia: 'Mensual',
    },
    {
      interesado: 'Administración',
      clasificacion: 'Mantener satisfecho',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Coordinación sobre recursos y necesidades administrativas',
      frecuencia: 'Mensual',
    },
    {
      interesado: 'OPP',
      clasificacion: 'Mantener satisfecho',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Seguimiento presupuestal y de alineación institucional',
      frecuencia: 'Mensual',
    },
    {
      interesado: 'Personal asistencial y médico',
      clasificacion: 'Mantener informado',
      actual: 'Neutral / Partidario',
      deseado: 'Partidario',
      estrategia: 'Talleres, sesiones informativas y retroalimentación funcional',
      frecuencia: 'Quincenal',
    },
    {
      interesado: 'Enfermería',
      clasificacion: 'Mantener informado',
      actual: 'Neutral / Partidario',
      deseado: 'Partidario',
      estrategia: 'Comunicación práctica sobre cambios operativos',
      frecuencia: 'Quincenal',
    },
    {
      interesado: 'Diagnóstico y farmacia',
      clasificacion: 'Mantener informado',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Información de impacto en procesos y coordinación funcional',
      frecuencia: 'Quincenal',
    },
    {
      interesado: 'Gestión de la Calidad',
      clasificacion: 'Mantener informado',
      actual: 'Partidario',
      deseado: 'Partidario / Líder',
      estrategia: 'Validación de alineación con calidad y mejora continua',
      frecuencia: 'Quincenal',
    },
    {
      interesado: 'RR.HH. / Oficial de Integridad',
      clasificacion: 'Mantener informado',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Coordinación sobre gestión del cambio y sensibilización',
      frecuencia: 'Mensual',
    },
    {
      interesado: 'Ingeniería Clínica',
      clasificacion: 'Mantener informado',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Participación técnica cuando existan integraciones o impactos operativos',
      frecuencia: 'Quincenal',
    },
    {
      interesado: 'Atención al Usuario / Articulación Prestacional',
      clasificacion: 'Mantener informado',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Comunicación sobre impacto al usuario final y experiencia de servicio',
      frecuencia: 'Quincenal',
    },
    {
      interesado: 'Pacientes',
      clasificacion: 'Mantener informado',
      actual: 'Neutral',
      deseado: 'Partidario',
      estrategia: 'Comunicación institucional orientada a beneficios del servicio',
      frecuencia: 'Según hitos',
    },
    {
      interesado: 'Asesoría Jurídica',
      clasificacion: 'Monitorear',
      actual: 'Neutral',
      deseado: 'Neutral / Partidario',
      estrategia: 'Seguimiento puntual ante requerimientos normativos o contractuales',
      frecuencia: 'Según necesidad',
    },
    {
      interesado: 'Logística',
      clasificacion: 'Monitorear',
      actual: 'Neutral',
      deseado: 'Neutral / Partidario',
      estrategia: 'Coordinación solo cuando existan compras o requerimientos logísticos',
      frecuencia: 'Según necesidad',
    },
  ];

  function getBadgeClass(clasificacion: string) {
    switch (clasificacion) {
      case 'Gestionar de cerca':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Mantener satisfecho':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Mantener informado':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Monitorear':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

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
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-purple-600 flex-shrink-0" size={22} />
              1. Plan de Participación de los Interesados
            </h3>
            <p className="text-gray-700 mb-4">
              Documento que define las estrategias y acciones para lograr una participación efectiva de los interesados.
              Incluye niveles actuales y deseados de participación, estrategias de involucramiento, acciones planificadas,
              responsabilidades, requisitos de comunicación y frecuencia de interacción.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-indigo-800">
                <strong>Matriz de Evaluación de Participación:</strong><br />
                Clasifica a los interesados según su nivel de participación actual y deseado en cinco categorías:
                <strong> Desconocido, Reacio, Neutral, Favorable y Líder.</strong> El objetivo del plan es
                definir las acciones necesarias para mover a cada interesado desde su nivel actual hasta el nivel deseado.
              </p>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Matriz de Participación de los Interesados — Proyecto ITSM HEVES
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-3 border border-gray-300 w-12">N.°</th>
                    <th className="text-left p-3 border border-gray-300">Interesado / Grupo</th>
                    <th className="text-left p-3 border border-gray-300">Clasificación</th>
                    <th className="text-left p-3 border border-gray-300">Nivel actual estimado</th>
                    <th className="text-left p-3 border border-gray-300">Nivel deseado</th>
                    <th className="text-left p-3 border border-gray-300">Estrategia de involucramiento</th>
                    <th className="text-left p-3 border border-gray-300 w-28">Frecuencia</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {stakeholders.map((s, i) => (
                    <tr key={s.interesado} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="text-center p-3 border border-gray-300 font-semibold">{i + 1}</td>
                      <td className="p-3 border border-gray-300 font-medium">{s.interesado}</td>
                      <td className="p-3 border border-gray-300">
                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full border ${getBadgeClass(s.clasificacion)}`}>
                          {s.clasificacion}
                        </span>
                      </td>
                      <td className="p-3 border border-gray-300 text-center text-xs">{s.actual}</td>
                      <td className="p-3 border border-gray-300 text-center text-xs font-medium text-indigo-700">{s.deseado}</td>
                      <td className="p-3 border border-gray-300 text-xs">{s.estrategia}</td>
                      <td className="p-3 border border-gray-300 text-xs">{s.frecuencia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Resumen por Categoría de Estrategia</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="font-semibold text-red-800 mb-1">Gestionar de cerca (4)</p>
                    <p className="text-gray-700 text-xs">Director Ejecutivo, Asesor de Dirección Ejecutiva, Jefa de UTI, Equipo UNTELS</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="font-semibold text-amber-800 mb-1">Mantener satisfecho (4)</p>
                    <p className="text-gray-700 text-xs">MINSA, OCI, Administración, OPP</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="font-semibold text-blue-800 mb-1">Mantener informado (8)</p>
                    <p className="text-gray-700 text-xs">Personal asistencial y médico, Enfermería, Diagnóstico y farmacia, Gestión de la Calidad, RR.HH. / Oficial de Integridad, Ingeniería Clínica, Atención al Usuario, Pacientes</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
                    <p className="font-semibold text-gray-800 mb-1">Monitorear (2)</p>
                    <p className="text-gray-700 text-xs">Asesoría Jurídica, Logística</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="text-green-700" size={18} />
                  Objetivo General del Plan
                </h5>
                <p className="text-sm text-green-800">
                  Mover a todos los interesados desde su nivel actual de participación hacia al menos un nivel de
                  <strong> Partidario</strong>, garantizando que los actores clave (Director Ejecutivo, Jefa de UTI y
                  Equipo UNTELS) alcancen un nivel de <strong>Líder</strong> para impulsar el éxito del proyecto ITSM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
