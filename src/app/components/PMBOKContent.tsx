import { FileText, ArrowRight, CheckCircle, Settings, FileCheck, Users, ClipboardList } from 'lucide-react';

interface PMBOKContentProps {
  section: string;
}

export function PMBOKContent({ section }: PMBOKContentProps) {
  if (section === 'acta' || section === 'acta-entradas' || section === 'acta-contenido' || section === 'acta-salidas') {
    return <ActaConstitucion section={section} />;
  }

  if (section === 'interesados' || section === 'interesados-entradas' || section === 'interesados-herramientas' || section === 'interesados-salidas') {
    return <IdentificarInteresados section={section} />;
  }

  if (section === 'plan-participacion' || section === 'plan-participacion-entradas' || section === 'plan-participacion-herramientas' || section === 'plan-participacion-salidas') {
    return <PlanParticipacionInteresados section={section} />;
  }

  return null;
}

function ActaConstitucion({ section }: { section: string }) {
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

      {/* Entradas */}
      {(section === 'acta' || section === 'acta-entradas') && (
        <section id="acta-entradas" className="mb-12 scroll-mt-24">
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
      )}

      {/* Contenido del Acta */}
      {(section === 'acta' || section === 'acta-contenido') && (
        <section id="acta-contenido" className="mb-12 scroll-mt-24">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings className="text-blue-600" size={24} />
              Contenido del Acta de Constitución
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Propósito del Proyecto</h3>
              <p className="text-gray-700 text-sm">
                Mejorar el acceso y calidad de atención social para pacientes vulnerables del Hospital
                Central mediante programas estructurados de apoyo.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Objetivos Medibles</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Atender 500 pacientes en 6 meses</li>
                <li>• 95% satisfacción en encuestas</li>
                <li>• Reducir 30% tiempos de espera</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Requisitos de Alto Nivel</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Equipo multidisciplinario capacitado</li>
                <li>• Sistema de registro de beneficiarios</li>
                <li>• Espacio físico acondicionado</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Descripción de Alto Nivel</h3>
              <p className="text-gray-700 text-sm">
                Implementación de programa de navegación de pacientes, asistencia de medicamentos y
                apoyo psicosocial.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Riesgos de Alto Nivel</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Limitaciones presupuestarias</li>
                <li>• Disponibilidad de personal</li>
                <li>• Cambios en regulaciones</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Resumen del Cronograma</h3>
              <p className="text-gray-700 text-sm">
                <strong>Inicio:</strong> 01 Mayo 2026<br />
                <strong>Fin:</strong> 31 Octubre 2026<br />
                <strong>Duración:</strong> 6 meses
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Presupuesto Aprobado</h3>
              <p className="text-gray-700 text-sm">
                $250,000 USD para recursos humanos, materiales, capacitación y monitoreo del programa.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Director del Proyecto</h3>
              <p className="text-gray-700 text-sm">
                <strong>Nombre:</strong> Dr. Jennifer Lee<br />
                <strong>Autoridad:</strong> Gestión de recursos y toma de decisiones operativas
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Patrocinador</h3>
              <p className="text-gray-700 text-sm">
                <strong>Nombre:</strong> Directorio del Hospital Central<br />
                <strong>Autorización:</strong> Firma de aprobación y asignación de presupuesto
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Lista de Interesados Clave</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pacientes y familias</li>
                <li>• Personal médico y administrativo</li>
                <li>• Organizaciones comunitarias</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Salidas */}
      {(section === 'acta' || section === 'acta-salidas') && (
        <section id="acta-salidas" className="mb-12 scroll-mt-24">
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
      )}
    </div>
  );
}

function IdentificarInteresados({ section }: { section: string }) {
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

      {/* Entradas */}
      {(section === 'interesados' || section === 'interesados-entradas') && (
        <section id="interesados-entradas" className="mb-12 scroll-mt-24">
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
                  <span><strong>Caso de Negocio:</strong> Identifica interesados que se benefician del proyecto
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
                <li>• Registros de interesados de iniciativas similares</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Herramientas y Técnicas */}
      {(section === 'interesados' || section === 'interesados-herramientas') && (
        <section id="interesados-herramientas" className="mb-12 scroll-mt-24">
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
                    <li>• Actitud (partidario, neutral, opositor)</li>
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
      )}

      {/* Salidas */}
      {(section === 'interesados' || section === 'interesados-salidas') && (
        <section id="interesados-salidas" className="mb-12 scroll-mt-24">
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
      )}
    </div>
  );
}

function PlanParticipacionInteresados({ section }: { section: string }) {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600 p-3 rounded-lg">
            <ClipboardList className="text-white" size={28} />
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

      {(section === 'plan-participacion' || section === 'plan-participacion-entradas') && (
        <section id="plan-participacion-entradas" className="mb-12 scroll-mt-24">
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
                Proporciona información de alto nivel sobre los interesados clave y los requisitos del proyecto:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Propósito y justificación del proyecto ITSM</li>
                <li>• Objetivos medibles y criterios de éxito</li>
                <li>• Lista inicial de interesados identificados</li>
                <li>• Requisitos de alto nivel</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Plan para la Dirección del Proyecto
              </h3>
              <p className="text-gray-700 mb-3">
                Componentes relevantes que se utilizan como entrada:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• <strong>Plan de Gestión de Recursos:</strong> Define cómo se involucrarán los recursos físicos y del equipo</li>
                <li>• <strong>Plan de Gestión de las Comunicaciones:</strong> Proporciona información sobre cómo se comunicará con los interesados</li>
                <li>• <strong>Plan de Gestión de Riesgos:</strong> Identifica cómo se involucrarán los interesados según su tolerancia al riesgo</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Documentos del Proyecto
              </h3>
              <p className="text-gray-700 mb-3">
                Documentos del proyecto que se utilizan como entradas:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• <strong>Registro de Interesados:</strong> Información detallada sobre los interesados identificados</li>
                <li>• <strong>Registro de Supuestos:</strong> Supuestos que pueden influir en la participación de los interesados</li>
                <li>• <strong>Registro de Cambios:</strong> Cambios aprobados que pueden afectar la participación</li>
                <li>• <strong>Registro de Lecciones Aprendidas:</strong> Información de fases anteriores del proyecto</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Acuerdos
              </h3>
              <p className="text-gray-700 mb-3">
                Definen a los interesados externos y sus expectativas:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Convenios con organizaciones externas</li>
                <li>• Contratos con proveedores</li>
                <li>• Acuerdos de nivel de servicio (SLA)</li>
                <li>• Compromisos con entidades reguladoras</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. Factores Ambientales de la Empresa
              </h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Cultura organizacional del HEVES</li>
                <li>• Estructura de gobierno corporativo</li>
                <li>• Estándares regulatorios del sector salud</li>
                <li>• Infraestructura y canales de comunicación disponibles</li>
                <li>• Normativas gubernamentales aplicables</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6. Activos de los Procesos de la Organización
              </h3>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Políticas de participación de interesados</li>
                <li>• Plantillas para planes de participación</li>
                <li>• Lecciones aprendidas de proyectos anteriores</li>
                <li>• Historial de relaciones con interesados clave</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {(section === 'plan-participacion' || section === 'plan-participacion-herramientas') && (
        <section id="plan-participacion-herramientas" className="mb-12 scroll-mt-24">
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
                <li>• Estrategias de participación de interesados en proyectos de TI</li>
                <li>• Conocimiento del entorno hospitalario y de salud</li>
                <li>• Gestión del cambio organizacional</li>
                <li>• Comprensión del contexto político y regulatorio</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Recopilación de Datos
              </h3>
              <p className="text-gray-700 mb-3">
                Técnicas para obtener información relevante sobre los interesados:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cuestionarios y Encuestas</h4>
                  <p className="text-gray-700 text-sm">
                    Recopilar expectativas y necesidades de los interesados de manera sistemática.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Entrevistas</h4>
                  <p className="text-gray-700 text-sm">
                    Conversaciones directas con interesados clave para comprender su nivel de participación actual y deseado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Análisis de Datos
              </h3>
              <p className="text-gray-700 mb-3">
                Evaluar el nivel actual y deseado de participación:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Análisis de Supuestos y Restricciones</h4>
                  <p className="text-gray-700 text-sm">
                    Identificar supuestos sobre la disponibilidad y disposición de los interesados.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Análisis de Documentos</h4>
                  <p className="text-gray-700 text-sm">
                    Revisar documentación existente para comprender las relaciones con interesados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Toma de Decisiones
              </h3>
              <p className="text-gray-700 mb-3">
                Técnicas para seleccionar las estrategias de participación más adecuadas:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• <strong>Priorización:</strong> Determinar qué interesados requieren mayor nivel de involucramiento</li>
                <li>• <strong>Votación:</strong> Consenso del equipo sobre las estrategias de participación</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. Representación de Datos
              </h3>
              <p className="text-gray-700 mb-3">
                Herramientas visuales para planificar la participación:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mapa Mental</h4>
                  <p className="text-gray-700 text-sm">
                    Diagramas de relaciones entre interesados y estrategias de engagement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Matriz de Evaluación de Participación</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Niveles de participación actual vs. deseado:
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold">
                      <div className="bg-white p-2 rounded border border-gray-300">Desconocido</div>
                      <div className="bg-red-50 p-2 rounded border border-red-300">Reacio</div>
                      <div className="bg-yellow-50 p-2 rounded border border-yellow-300">Neutral</div>
                      <div className="bg-green-50 p-2 rounded border border-green-300">Favorable</div>
                      <div className="bg-blue-50 p-2 rounded border border-blue-300">Líder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                6. Reuniones
              </h3>
              <p className="text-gray-700 mb-3">
                Sesiones con el equipo del proyecto y expertos para:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Definir estrategias de participación para cada interesado clave</li>
                <li>• Identificar barreras y oportunidades de involucramiento</li>
                <li>• Establecer cronogramas de comunicación y participación</li>
                <li>• Asignar responsabilidades para la gestión de interesados</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {(section === 'plan-participacion' || section === 'plan-participacion-salidas') && (
        <section id="plan-participacion-salidas" className="mb-12 scroll-mt-24">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileCheck className="text-purple-600" size={24} />
              Salidas
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Plan de Participación de los Interesados
              </h3>
              <p className="text-gray-700 mb-4">
                Documento que define las estrategias y acciones para lograr una participación efectiva de los interesados. Incluye:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Niveles actuales y deseados de participación:</strong> Evaluación del nivel de involucramiento de cada interesado (Desconocido, Reacio, Neutral, Favorable, Líder)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Estrategias de participación:</strong> Enfoques específicos para involucrar a cada interesado o grupo de interesados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Acciones y cronogramas:</strong> Actividades planificadas para alcanzar el nivel deseado de participación</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Responsabilidades:</strong> Asignación de quién gestionará la participación de cada interesado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Requisitos de comunicación:</strong> Frecuencia, formato y canales de comunicación con cada grupo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <span><strong>Proceso de actualización:</strong> Cómo se revisará y ajustará el plan a lo largo del proyecto</span>
                </li>
              </ul>

              <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p className="text-sm text-indigo-800">
                  <strong>Matriz de Evaluación de Participación:</strong><br />
                  Clasifica a los interesados según su nivel de participación actual y deseado en cinco categorías:
                  <strong> Desconocido, Reacio, Neutral, Favorable y Líder.</strong> El objetivo del plan es
                  definir las acciones necesarias para mover a cada interesado desde su nivel actual hasta el nivel deseado.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
