import { FileText, ArrowRight, CheckCircle, Settings, FileCheck, Users, ClipboardList, FileSpreadsheet } from 'lucide-react';
import {
  EntradaFactoresAmbientales,
  EntradaActivosProcesos,
  HerramientaJuicioExpertos,
  HerramientaRecopilacionDatos,
  HerramientaRepresentacionDatos,
  HerramientaReuniones,
} from './sections';

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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Acta de Constitución del Proyecto
            </h1>
            <p className="text-muted-foreground mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">
          El Acta de Constitución del Proyecto es el documento que autoriza formalmente la existencia
          del proyecto y confiere al director del proyecto la autoridad para asignar los recursos de
          la organización a las actividades del proyecto.
        </p>
      </div>

      {/* Entradas */}
      {(section === 'acta' || section === 'acta-entradas') && (
        <section id="acta-entradas" className="mb-12 scroll-mt-24">
          <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="text-green-600" size={24} />
              Entradas
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                1. Documentos de Negocio
              </h3>
              <ul className="space-y-2 text-muted-foreground">
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

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                2. Acuerdos
              </h3>
              <p className="text-muted-foreground mb-3">
                Contratos, convenios o compromisos que definen las intenciones iniciales del proyecto:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Convenios con organizaciones comunitarias</li>
                <li>• Acuerdos de colaboración con el hospital</li>
                <li>• Compromisos de financiamiento</li>
                <li>• Memorandos de entendimiento con stakeholders</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                3. Factores Ambientales de la Empresa
              </h3>
              <p className="text-muted-foreground mb-3">
                Condiciones externas e internas que influyen en el proyecto:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Regulaciones gubernamentales de salud y asistencia social</li>
                <li>• Estándares de atención hospitalaria vigentes</li>
                <li>• Cultura organizacional del hospital</li>
                <li>• Infraestructura y recursos disponibles</li>
                <li>• Condiciones socioeconómicas de la comunidad objetivo</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                4. Activos de los Procesos de la Organización
              </h3>
              <p className="text-muted-foreground mb-3">
                Información histórica y lecciones aprendidas de proyectos similares:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
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
          <div className="bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Settings className="text-blue-600" size={24} />
              Contenido del Acta de Constitución
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Propósito del Proyecto</h3>
              <p className="text-muted-foreground text-sm">
                Mejorar el acceso y calidad de atención social para pacientes vulnerables del Hospital
                Central mediante programas estructurados de apoyo.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Objetivos Medibles</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Atender 500 pacientes en 6 meses</li>
                <li>• 95% satisfacción en encuestas</li>
                <li>• Reducir 30% tiempos de espera</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Requisitos de Alto Nivel</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Equipo multidisciplinario capacitado</li>
                <li>• Sistema de registro de beneficiarios</li>
                <li>• Espacio físico acondicionado</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Descripción de Alto Nivel</h3>
              <p className="text-muted-foreground text-sm">
                Implementación de programa de navegación de pacientes, asistencia de medicamentos y
                apoyo psicosocial.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Riesgos de Alto Nivel</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Limitaciones presupuestarias</li>
                <li>• Disponibilidad de personal</li>
                <li>• Cambios en regulaciones</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Resumen del Cronograma</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Inicio:</strong> 01 Mayo 2026<br />
                <strong>Fin:</strong> 31 Octubre 2026<br />
                <strong>Duración:</strong> 6 meses
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Presupuesto Aprobado</h3>
              <p className="text-muted-foreground text-sm">
                $250,000 USD para recursos humanos, materiales, capacitación y monitoreo del programa.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Director del Proyecto</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Nombre:</strong> Dr. Jennifer Lee<br />
                <strong>Autoridad:</strong> Gestión de recursos y toma de decisiones operativas
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Patrocinador</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Nombre:</strong> Directorio del Hospital Central<br />
                <strong>Autorización:</strong> Firma de aprobación y asignación de presupuesto
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">Lista de Interesados Clave</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
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
          <div className="bg-purple-50 dark:bg-purple-950/40 dark:border-purple-400 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-purple-600" size={24} />
              Salidas
            </h2>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Acta de Constitución del Proyecto
            </h3>
            <p className="text-muted-foreground mb-4">
              Documento formal que contiene toda la información descrita anteriormente y que:
            </p>
            <ul className="space-y-3 text-muted-foreground">
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

            <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Identificar a los Interesados
            </h1>
            <p className="text-muted-foreground mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">
          Proceso de identificar a las personas, grupos u organizaciones que podrían afectar o ser
          afectados por el proyecto, así como analizar y documentar información relevante relativa a
          sus intereses, participación, interdependencias, influencia y posible impacto en el éxito del proyecto.
        </p>
      </div>

      {/* Entradas */}
      {(section === 'interesados' || section === 'interesados-entradas') && (
        <section id="interesados-entradas" className="mb-12 scroll-mt-24">
          <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="text-green-600" size={24} />
              Entradas
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                1. Acta de Constitución del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Proporciona información sobre interesados clave, propósito del proyecto y autoridad del director:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Propósito y justificación del proyecto social hospitalario</li>
                <li>• Objetivos medibles y criterios de éxito</li>
                <li>• Lista inicial de interesados identificados</li>
                <li>• Director del proyecto y patrocinador principal</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                2. Documentos de Negocio
              </h3>
              <ul className="space-y-2 text-muted-foreground">
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

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                3. Plan para la Dirección del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Componentes relevantes incluyen:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Plan de Gestión de las Comunicaciones</li>
                <li>• Plan de Involucramiento de los Interesados</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                4. Documentos del Proyecto
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Registro de cambios</li>
                <li>• Registro de incidentes</li>
                <li>• Registro de lecciones aprendidas de proyectos similares</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                5. Acuerdos
              </h3>
              <p className="text-muted-foreground mb-3">
                Identifican a los interesados relacionados con contratos y convenios:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Organizaciones comunitarias asociadas</li>
                <li>• Proveedores de servicios médicos externos</li>
                <li>• Entidades financiadoras del proyecto</li>
                <li>• Socios estratégicos en la implementación</li>
              </ul>
            </div>

            <EntradaFactoresAmbientales />

            <EntradaActivosProcesos />
          </div>
        </section>
      )}

      {/* Herramientas y Técnicas */}
      {(section === 'interesados' || section === 'interesados-herramientas') && (
        <section id="interesados-herramientas" className="mb-12 scroll-mt-24">
          <div className="bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Settings className="text-blue-600" size={24} />
              Herramientas y Técnicas
            </h2>
          </div>

          <div className="space-y-6">
            <HerramientaJuicioExpertos />

            <HerramientaRecopilacionDatos />

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                3. Análisis de Datos
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Análisis de Interesados</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Identificación sistemática de información sobre interesados:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Matriz Poder/Interés</h5>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-white p-3 rounded border-2 border-red-400">
                        <strong>Alto Poder / Alto Interés</strong>
                        <p className="text-muted-foreground mt-1">Gestionar de cerca (ej: Directorio Hospital)</p>
                      </div>
                      <div className="bg-white p-3 rounded border-2 border-yellow-400">
                        <strong>Alto Poder / Bajo Interés</strong>
                        <p className="text-muted-foreground mt-1">Mantener satisfecho (ej: Autoridades de salud)</p>
                      </div>
                      <div className="bg-white p-3 rounded border-2 border-green-400">
                        <strong>Bajo Poder / Alto Interés</strong>
                        <p className="text-muted-foreground mt-1">Mantener informado (ej: Pacientes, familias)</p>
                      </div>
                      <div className="bg-white p-3 rounded border-2 border-border">
                        <strong>Bajo Poder / Bajo Interés</strong>
                        <p className="text-muted-foreground mt-1">Monitorear (ej: Público general)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Análisis de Documentos</h4>
                  <p className="text-muted-foreground text-sm">
                    Revisión de convenios, acuerdos y documentación existente para identificar interesados adicionales.
                  </p>
                </div>
              </div>
            </div>

            <HerramientaRepresentacionDatos idx={4} />

            <HerramientaReuniones />
          </div>
        </section>
      )}

      {/* Salidas */}
      {(section === 'interesados' || section === 'interesados-salidas') && (
        <section id="interesados-salidas" className="mb-12 scroll-mt-24">
          <div className="bg-purple-50 dark:bg-purple-950/40 dark:border-purple-400 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-purple-600" size={24} />
              Salidas
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                1. Registro de Interesados
              </h3>
              <p className="text-muted-foreground mb-4">
                Documento que contiene detalles sobre los interesados identificados:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-50 dark:bg-blue-950/30">
                      <th className="border border-border px-4 py-2 text-left">Interesado</th>
                      <th className="border border-border px-4 py-2 text-left">Rol</th>
                      <th className="border border-border px-4 py-2 text-left">Interés</th>
                      <th className="border border-border px-4 py-2 text-left">Poder</th>
                      <th className="border border-border px-4 py-2 text-left">Estrategia</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border px-4 py-2">Directorio Hospital</td>
                      <td className="border border-border px-4 py-2">Patrocinador</td>
                      <td className="border border-border px-4 py-2">Alto</td>
                      <td className="border border-border px-4 py-2">Alto</td>
                      <td className="border border-border px-4 py-2">Gestionar de cerca</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Pacientes</td>
                      <td className="border border-border px-4 py-2">Beneficiarios</td>
                      <td className="border border-border px-4 py-2">Alto</td>
                      <td className="border border-border px-4 py-2">Bajo</td>
                      <td className="border border-border px-4 py-2">Mantener informados</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Personal Médico</td>
                      <td className="border border-border px-4 py-2">Implementadores</td>
                      <td className="border border-border px-4 py-2">Alto</td>
                      <td className="border border-border px-4 py-2">Medio</td>
                      <td className="border border-border px-4 py-2">Mantener informados</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">ONGs Comunitarias</td>
                      <td className="border border-border px-4 py-2">Socios</td>
                      <td className="border border-border px-4 py-2">Medio</td>
                      <td className="border border-border px-4 py-2">Medio</td>
                      <td className="border border-border px-4 py-2">Mantener satisfechos</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">Autoridades de Salud</td>
                      <td className="border border-border px-4 py-2">Reguladores</td>
                      <td className="border border-border px-4 py-2">Bajo</td>
                      <td className="border border-border px-4 py-2">Alto</td>
                      <td className="border border-border px-4 py-2">Mantener satisfechos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                2. Registro de Solicitudes de Cambio
              </h3>
              <p className="text-muted-foreground mb-3">
                El proceso de identificar interesados puede generar solicitudes de cambio al proyecto:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Cambios en el alcance basados en necesidades de interesados</li>
                <li>• Ajustes en la estrategia de comunicación</li>
                <li>• Modificaciones en los entregables del proyecto</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                3. Actualizaciones al Plan para la Dirección del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Componentes que pueden requerir actualización:
              </p>
              <ul className="space-y-2 text-muted-foreground">
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

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                4. Actualizaciones a los Documentos del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Documentos que pueden actualizarse incluyen:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Plan de Participación de los Interesados
            </h1>
            <p className="text-muted-foreground mt-1">Grupo de Procesos de Planificación</p>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">
          Proceso de desarrollar enfoques adecuados para involucrar a los interesados del proyecto
          de manera efectiva, según sus necesidades, expectativas, intereses y su posible impacto
          en el proyecto.
        </p>
      </div>

      {(section === 'plan-participacion' || section === 'plan-participacion-entradas') && (
        <section id="plan-participacion-entradas" className="mb-12 scroll-mt-24">
          <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="text-green-600" size={24} />
              Entradas
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                1. Acta de Constitución del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Proporciona información de alto nivel sobre los interesados clave y los requisitos del proyecto:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Propósito y justificación del proyecto ITSM</li>
                <li>• Objetivos medibles y criterios de éxito</li>
                <li>• Lista inicial de interesados identificados</li>
                <li>• Requisitos de alto nivel</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                2. Plan para la Dirección del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Componentes relevantes que se utilizan como entrada:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Plan de Gestión de Recursos:</strong> Define cómo se involucrarán los recursos físicos y del equipo</li>
                <li>• <strong>Plan de Gestión de las Comunicaciones:</strong> Proporciona información sobre cómo se comunicará con los interesados</li>
                <li>• <strong>Plan de Gestión de Riesgos:</strong> Identifica cómo se involucrarán los interesados según su tolerancia al riesgo</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                3. Documentos del Proyecto
              </h3>
              <p className="text-muted-foreground mb-3">
                Documentos del proyecto que se utilizan como entradas:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Registro de Interesados:</strong> Información detallada sobre los interesados identificados</li>
                <li>• <strong>Registro de Supuestos:</strong> Supuestos que pueden influir en la participación de los interesados</li>
                <li>• <strong>Registro de Cambios:</strong> Cambios aprobados que pueden afectar la participación</li>
                <li>• <strong>Registro de Lecciones Aprendidas:</strong> Información de fases anteriores del proyecto</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                4. Acuerdos
              </h3>
              <p className="text-muted-foreground mb-3">
                Definen a los interesados externos y sus expectativas:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Convenios con organizaciones externas</li>
                <li>• Contratos con proveedores</li>
                <li>• Acuerdos de nivel de servicio (SLA)</li>
                <li>• Compromisos con entidades reguladoras</li>
              </ul>
            </div>

            <EntradaFactoresAmbientales items={['• Cultura organizacional del HEVES', '• Estructura de gobierno corporativo', '• Estándares regulatorios del sector salud', '• Infraestructura y canales de comunicación disponibles', '• Normativas gubernamentales aplicables']} />

            <EntradaActivosProcesos items={['• Políticas de participación de interesados', '• Plantillas para planes de participación', '• Lecciones aprendidas de proyectos anteriores', '• Historial de relaciones con interesados clave']} />
          </div>
        </section>
      )}

      {(section === 'plan-participacion' || section === 'plan-participacion-herramientas') && (
        <section id="plan-participacion-herramientas" className="mb-12 scroll-mt-24">
          <div className="bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Settings className="text-blue-600" size={24} />
              Herramientas y Técnicas
            </h2>
          </div>

          <div className="space-y-6">
            <HerramientaJuicioExpertos title="1. Juicio de Expertos" items={['• Estrategias de participación de interesados en proyectos de TI', '• Conocimiento del entorno hospitalario y de salud', '• Gestión del cambio organizacional', '• Comprensión del contexto político y regulatorio']} />

            <HerramientaRecopilacionDatos title="2. Recopilación de Datos" items={[{ tool: 'Cuestionarios y Encuestas', description: 'Recopilar expectativas y necesidades de los interesados de manera sistemática.' }, { tool: 'Entrevistas', description: 'Conversaciones directas con interesados clave para comprender su nivel de participación actual y deseado.' }]} />

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                3. Análisis de Datos
              </h3>
              <p className="text-muted-foreground mb-3">
                Evaluar el nivel actual y deseado de participación:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Análisis de Supuestos y Restricciones</h4>
                  <p className="text-muted-foreground text-sm">
                    Identificar supuestos sobre la disponibilidad y disposición de los interesados.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Análisis de Documentos</h4>
                  <p className="text-muted-foreground text-sm">
                    Revisar documentación existente para comprender las relaciones con interesados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                4. Toma de Decisiones
              </h3>
              <p className="text-muted-foreground mb-3">
                Técnicas para seleccionar las estrategias de participación más adecuadas:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• <strong>Priorización:</strong> Determinar qué interesados requieren mayor nivel de involucramiento</li>
                <li>• <strong>Votación:</strong> Consenso del equipo sobre las estrategias de participación</li>
              </ul>
            </div>

            <HerramientaRepresentacionDatos idx={5} />

            <HerramientaReuniones title="6. Reuniones" items={['• Definir estrategias de participación para cada interesado clave', '• Identificar barreras y oportunidades de involucramiento', '• Establecer cronogramas de comunicación y participación', '• Asignar responsabilidades para la gestión de interesados']} />
          </div>
        </section>
      )}

      {(section === 'plan-participacion' || section === 'plan-participacion-salidas') && (
        <section id="plan-participacion-salidas" className="mb-12 scroll-mt-24">
          <div className="bg-purple-50 dark:bg-purple-950/40 dark:border-purple-400 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-purple-600" size={24} />
              Salidas
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <FileSpreadsheet className="text-purple-600 flex-shrink-0" size={22} />
                1. Plan de Participación de los Interesados
              </h3>
              <p className="text-muted-foreground mb-4">
                Documento que define las estrategias y acciones para lograr una participación efectiva de los interesados.
                Incluye niveles actuales y deseados de participación, estrategias de involucramiento, acciones planificadas,
                responsabilidades, requisitos de comunicación y frecuencia de interacción.
              </p>

              <div className="bg-indigo-50 dark:bg-indigo-950/30 dark:border-indigo-400/30 border border-indigo-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-indigo-800 dark:text-indigo-200">
                  <strong>Matriz de Evaluación de Participación:</strong><br />
                  Clasifica a los interesados según su nivel de participación actual y deseado en cinco categorías:
                  <strong> Desconocido, Reacio, Neutral, Favorable y Líder.</strong> El objetivo del plan es
                  definir las acciones necesarias para mover a cada interesado desde su nivel actual hasta el nivel deseado.
                </p>
              </div>

              <h4 className="text-lg font-bold text-foreground mb-4">
                Matriz de Participación de los Interesados — Proyecto ITSM HEVES
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted-foreground text-background">
                      <th className="text-left p-3 border border-border w-12">N.°</th>
                      <th className="text-left p-3 border border-border">Interesado / Grupo</th>
                      <th className="text-left p-3 border border-border">Clasificación</th>
                      <th className="text-left p-3 border border-border">Nivel actual estimado</th>
                      <th className="text-left p-3 border border-border">Nivel deseado</th>
                      <th className="text-left p-3 border border-border">Estrategia de involucramiento</th>
                      <th className="text-left p-3 border border-border w-28">Frecuencia</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">1</td><td className="p-3 border border-border font-medium">Director Ejecutivo</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-red-100 text-red-800 dark:text-red-200 border-red-200">Gestionar de cerca</span></td><td className="p-3 border border-border text-center text-xs">Neutral / Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Líder</td><td className="p-3 border border-border text-xs">Reuniones ejecutivas, validación de hitos, gestión de decisiones clave</td><td className="p-3 border border-border text-xs">Semanal o quincenal</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">2</td><td className="p-3 border border-border font-medium">Asesor de Dirección Ejecutiva</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-red-100 text-red-800 dark:text-red-200 border-red-200">Gestionar de cerca</span></td><td className="p-3 border border-border text-center text-xs">Neutral / Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Coordinación directa, revisión de avances y riesgos</td><td className="p-3 border border-border text-xs">Semanal</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">3</td><td className="p-3 border border-border font-medium">Jefa de UTI</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-red-100 text-red-800 dark:text-red-200 border-red-200">Gestionar de cerca</span></td><td className="p-3 border border-border text-center text-xs">Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Líder</td><td className="p-3 border border-border text-xs">Participación activa en decisiones técnicas y funcionales</td><td className="p-3 border border-border text-xs">Semanal</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">4</td><td className="p-3 border border-border font-medium">Equipo UNTELS</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-red-100 text-red-800 dark:text-red-200 border-red-200">Gestionar de cerca</span></td><td className="p-3 border border-border text-center text-xs">Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Líder</td><td className="p-3 border border-border text-xs">Reuniones de trabajo, seguimiento técnico y académico</td><td className="p-3 border border-border text-xs">Semanal</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">5</td><td className="p-3 border border-border font-medium">MINSA</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-amber-100 text-amber-800 dark:text-amber-200 border-amber-200">Mantener satisfecho</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Reportes ejecutivos y enfoque en cumplimiento e impacto institucional</td><td className="p-3 border border-border text-xs">Mensual</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">6</td><td className="p-3 border border-border font-medium">OCI</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-amber-100 text-amber-800 dark:text-amber-200 border-amber-200">Mantener satisfecho</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Información sobre control, trazabilidad y riesgos</td><td className="p-3 border border-border text-xs">Mensual</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">7</td><td className="p-3 border border-border font-medium">Administración</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-amber-100 text-amber-800 dark:text-amber-200 border-amber-200">Mantener satisfecho</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Coordinación sobre recursos y necesidades administrativas</td><td className="p-3 border border-border text-xs">Mensual</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">8</td><td className="p-3 border border-border font-medium">OPP</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-amber-100 text-amber-800 dark:text-amber-200 border-amber-200">Mantener satisfecho</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Seguimiento presupuestal y de alineación institucional</td><td className="p-3 border border-border text-xs">Mensual</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">9</td><td className="p-3 border border-border font-medium">Personal asistencial y médico</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral / Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Talleres, sesiones informativas y retroalimentación funcional</td><td className="p-3 border border-border text-xs">Quincenal</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">10</td><td className="p-3 border border-border font-medium">Enfermería</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral / Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Comunicación práctica sobre cambios operativos</td><td className="p-3 border border-border text-xs">Quincenal</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">11</td><td className="p-3 border border-border font-medium">Diagnóstico y farmacia</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Información de impacto en procesos y coordinación funcional</td><td className="p-3 border border-border text-xs">Quincenal</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">12</td><td className="p-3 border border-border font-medium">Gestión de la Calidad</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Partidario</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario / Líder</td><td className="p-3 border border-border text-xs">Validación de alineación con calidad y mejora continua</td><td className="p-3 border border-border text-xs">Quincenal</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">13</td><td className="p-3 border border-border font-medium">RR.HH. / Oficial de Integridad</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Coordinación sobre gestión del cambio y sensibilización</td><td className="p-3 border border-border text-xs">Mensual</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">14</td><td className="p-3 border border-border font-medium">Ingeniería Clínica</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Participación técnica cuando existan integraciones o impactos operativos</td><td className="p-3 border border-border text-xs">Quincenal</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">15</td><td className="p-3 border border-border font-medium">Atención al Usuario / Articulación Prestacional</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Comunicación sobre impacto al usuario final y experiencia de servicio</td><td className="p-3 border border-border text-xs">Quincenal</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">16</td><td className="p-3 border border-border font-medium">Pacientes</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-blue-100 text-blue-800 dark:text-blue-200 border-blue-200">Mantener informado</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Partidario</td><td className="p-3 border border-border text-xs">Comunicación institucional orientada a beneficios del servicio</td><td className="p-3 border border-border text-xs">Según hitos</td></tr>
                    <tr className="bg-card"><td className="text-center p-3 border border-border font-semibold">17</td><td className="p-3 border border-border font-medium">Asesoría Jurídica</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-gray-100 text-gray-800 border-border">Monitorear</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Neutral / Partidario</td><td className="p-3 border border-border text-xs">Seguimiento puntual ante requerimientos normativos o contractuales</td><td className="p-3 border border-border text-xs">Según necesidad</td></tr>
                    <tr className="bg-muted/50"><td className="text-center p-3 border border-border font-semibold">18</td><td className="p-3 border border-border font-medium">Logística</td><td className="p-3 border border-border"><span className="inline-block text-xs font-semibold px-2 py-1 rounded-full border bg-gray-100 text-gray-800 border-border">Monitorear</span></td><td className="p-3 border border-border text-center text-xs">Neutral</td><td className="p-3 border border-border text-center text-xs font-medium text-indigo-700">Neutral / Partidario</td><td className="p-3 border border-border text-xs">Coordinación solo cuando existan compras o requerimientos logísticos</td><td className="p-3 border border-border text-xs">Según necesidad</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <h5 className="font-semibold text-foreground mb-2">Resumen por Categoría de Estrategia</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="font-semibold text-red-800 dark:text-red-200 mb-1">Gestionar de cerca (4)</p>
                      <p className="text-muted-foreground text-xs">Director Ejecutivo, Asesor de Dirección Ejecutiva, Jefa de UTI, Equipo UNTELS</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 dark:border-amber-400/30 border border-amber-200 rounded-lg p-3">
                      <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Mantener satisfecho (4)</p>
                      <p className="text-muted-foreground text-xs">MINSA, OCI, Administración, OPP</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/30 dark:border-blue-400/30 border border-blue-200 rounded-lg p-3">
                      <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Mantener informado (8)</p>
                      <p className="text-muted-foreground text-xs">Personal asistencial y médico, Enfermería, Diagnóstico y farmacia, Gestión de la Calidad, RR.HH. / Oficial de Integridad, Ingeniería Clínica, Atención al Usuario, Pacientes</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-900/50 border border-border rounded-lg p-3">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Monitorear (2)</p>
                      <p className="text-muted-foreground text-xs">Asesoría Jurídica, Logística</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 dark:border-green-400/30 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="text-green-700 dark:text-green-300" size={18} />
                    Objetivo General del Plan
                  </h5>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Mover a todos los interesados desde su nivel actual de participación hacia al menos un nivel de
                    <strong> Partidario</strong>, garantizando que los actores clave (Director Ejecutivo, Jefa de UTI y
                    Equipo UNTELS) alcancen un nivel de <strong>Líder</strong> para impulsar el éxito del proyecto ITSM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
