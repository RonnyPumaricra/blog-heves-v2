import { FileText, FileCheck, Target, AlertTriangle, CalendarCheck, CheckCircle, XCircle, Shield, Flag } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function ActaSalidasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={FileText}
        iconBgColor="bg-blue-600"
        title="Acta de Constitución del Proyecto"
        subtitle="Grupo de Procesos de Inicio"
        description="El Acta de Constitución del Proyecto es el documento que autoriza formalmente la existencia del proyecto y confiere al director del proyecto la autoridad para asignar los recursos de la organización a las actividades del proyecto."
      />

      <section className="mb-12">
        <div className="bg-purple-50 dark:bg-purple-950/40 dark:border-purple-400 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FileCheck className="text-purple-600" size={24} />
            Salidas — Acta de Constitución del Proyecto
          </h2>
        </div>

        <div className="space-y-6">
          {/* 1. Datos Generales del Proyecto */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="text-purple-600 flex-shrink-0" size={22} />
              1. Datos Generales del Proyecto
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr className="bg-card">
                    <td className="p-3 border border-border font-semibold text-foreground w-1/4 align-top">Título del Proyecto</td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Implementación del Sistema de Gestión de Incidencias de Servicios TI en el Hospital de Emergencias de Villa El Salvador (HEVES), Lima 2026
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-3 border border-border font-semibold text-foreground align-top">Alta Dirección</td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Paola Jesus Llave Escobedo<br />
                      <span className="text-xs">Jefa de la Unidad de Tecnologías de la Información</span>
                    </td>
                  </tr>
                  <tr className="bg-card">
                    <td className="p-3 border border-border font-semibold text-foreground align-top">Equipo del Proyecto</td>
                    <td className="p-3 border border-border text-muted-foreground">
                      Junior Joel Perez Damian — Organizador Estudiante<br />
                      Jorge Rafael Roncal Saravia — Organizador Estudiante<br />
                      Marcelo Samuel Molina Vera — Organizador Estudiante<br />
                      Ronny Luis Pumaricra Meneses — Colaborador Estudiante
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Propósito / Justificación del Proyecto */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Flag className="text-purple-600 flex-shrink-0" size={22} />
              2. Propósito / Justificación del Proyecto
            </h3>
            <p className="text-muted-foreground">
              La Unidad de TI del HEVES (proceso PS05) solo cuenta con dos subprocesos formales: <strong>PS05.01 Gestión de Desarrollo de Software</strong> y <strong>PS05.02 Gestión de la Infraestructura Tecnológica</strong>. No existe un subproceso formal para la gestión de incidentes. Esta brecha genera falta de trazabilidad en fallos críticos, inestabilidad operativa e incumplimiento de la <strong>Ley de Gobierno Digital (DL N° 1412)</strong>, que exige gestión de servicios estructurada en entidades públicas.
            </p>
            <div className="mt-4 bg-purple-50 dark:bg-purple-950/30 dark:border-purple-400/30 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                <strong>Objetivo Principal:</strong> Diseñar y documentar un subproceso de gestión de incidencias basado en el marco de trabajo ITIL v3, para estandarizar la atención tecnológica en el hospital.
              </p>
            </div>
          </div>

          {/* 3. Objetivos del Proyecto (SMART) */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="text-purple-600 flex-shrink-0" size={22} />
              3. Objetivos del Proyecto (SMART)
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-muted-foreground">
                    Diseñar e implementar el subproceso <strong>PS05.03 (Gestión de Incidentes de TI)</strong> bajo el marco ITIL v3 en el HEVES, alineado al Mapa de Procesos 2024.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-muted-foreground">
                    Reducir el tiempo promedio de resolución de incidencias TI críticas (SISGalenPlus, INFINITT) en al menos un <strong>20%</strong> respecto a la situación actual, medido mediante el indicador PS05 de requerimientos atendidos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-muted-foreground">
                    Configurar y poner en operación piloto la herramienta <strong>GLPI</strong> para el registro y seguimiento de incidentes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-muted-foreground">
                    Generar la documentación institucional (fichas de proceso, manual de usuario, acta de conformidad) requerida para la incorporación del nuevo subproceso al Mapa de Procesos HEVES 2025.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-green-50 dark:bg-green-950/30 dark:border-green-400/30 border border-green-200 rounded-lg p-3 text-center">
                <p className="font-semibold text-green-800 dark:text-green-200">Criterio de Éxito 1</p>
                <p className="text-green-700 dark:text-green-300">Aprobación técnica del diseño por la Jefatura de la UTI</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 dark:border-green-400/30 border border-green-200 rounded-lg p-3 text-center">
                <p className="font-semibold text-green-800 dark:text-green-200">Criterio de Éxito 2</p>
                <p className="text-green-700 dark:text-green-300">Alineación del 100% de los flujogramas con la normativa institucional</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 dark:border-green-400/30 border border-green-200 rounded-lg p-3 text-center">
                <p className="font-semibold text-green-800 dark:text-green-200">Presupuesto Estimado</p>
                <p className="text-green-700 dark:text-green-300">Uso de recursos internos (infraestructura HEVES). Sin costo directo de inversión.</p>
              </div>
            </div>
          </div>

          {/* 4. Descripción del Alcance (Alto Nivel) */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="text-purple-600 flex-shrink-0" size={22} />
              4. Descripción del Alcance (Alto Nivel)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/30 dark:border-green-400/30 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} />
                  Incluye
                </h4>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Diagnóstico AS-IS del proceso PS05 y los sistemas críticos del HEVES (SISGalenPlus, INFINITT, HIS DISCAP WEB).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Diseño del proceso TO-BE de Gestión de Incidentes basado en ITIL v3.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Configuración piloto de la herramienta GLPI en la infraestructura virtualizada del HEVES.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Capacitación al equipo de la UTI.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Elaboración de fichas de proceso para inclusión en el Mapa de Procesos HEVES.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 dark:border-red-400/30 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                  <XCircle size={18} />
                  No incluye
                </h4>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Implementación de los subprocesos de Gestión de Problemas y Gestión de Cambios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Integración directa con SISGalenPlus o INFINITT (requiere presupuesto adicional y resolución directoral independiente).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">•</span>
                    <span>Adquisición de hardware o licencias de software propietario.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Riesgos Identificados (Alto Nivel) */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="text-purple-600 flex-shrink-0" size={22} />
              5. Riesgos Identificados (Alto Nivel)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-center p-3 border border-border w-12">N.°</th>
                    <th className="text-left p-3 border border-border">Riesgo</th>
                    <th className="text-center p-3 border border-border">Probabilidad</th>
                    <th className="text-center p-3 border border-border">Impacto</th>
                    <th className="text-left p-3 border border-border">Respuesta Propuesta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card">
                    <td className="text-center p-3 border border-border font-semibold">1</td>
                    <td className="p-3 border border-border text-muted-foreground">Resistencia al cambio del personal de la UTI o áreas asistenciales ante el nuevo proceso.</td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">Media</span>
                    </td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">Alto</span>
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">Talleres de sensibilización.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="text-center p-3 border border-border font-semibold">2</td>
                    <td className="p-3 border border-border text-muted-foreground">Demora en la aprobación del acto resolutivo formal por la Dirección Ejecutiva.</td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">Media</span>
                    </td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">Alto</span>
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">Gestión proactiva con la Jefa de UTI y la Dirección Ejecutiva.</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="text-center p-3 border border-border font-semibold">3</td>
                    <td className="p-3 border border-border text-muted-foreground">Restricciones de red o permisos del área de TI para instalar GLPI en servidores virtualizados.</td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Baja</span>
                    </td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded-full">Medio</span>
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">Coordinación técnica previa con la Jefa de UTI.</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="text-center p-3 border border-border font-semibold">4</td>
                    <td className="p-3 border border-border text-muted-foreground">Cambio de autoridades en el HEVES durante la ejecución del proyecto.</td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Baja</span>
                    </td>
                    <td className="text-center p-3 border border-border">
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">Alto</span>
                    </td>
                    <td className="p-3 border border-border text-muted-foreground">Documentación formal como activo de proceso para garantizar continuidad.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Hitos del Proyecto */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <CalendarCheck className="text-purple-600 flex-shrink-0" size={22} />
              6. Hitos del Proyecto
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse max-w-xl">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-center p-3 border border-border w-16">N.°</th>
                    <th className="text-left p-3 border border-border">Hito</th>
                    <th className="text-center p-3 border border-border w-40">Fecha Estimada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card">
                    <td className="text-center p-3 border border-border font-semibold">1</td>
                    <td className="p-3 border border-border text-muted-foreground">Aprobación del Acta de Constitución por el Director Ejecutivo del HEVES</td>
                    <td className="text-center p-3 border border-border text-muted-foreground">Semana 2</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="text-center p-3 border border-border font-semibold">2</td>
                    <td className="p-3 border border-border text-muted-foreground">Entrega del Árbol de Problemas y Árbol de Objetivos validados con la Jefa UTI</td>
                    <td className="text-center p-3 border border-border text-muted-foreground">Semana 4</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="text-center p-3 border border-border font-semibold">3</td>
                    <td className="p-3 border border-border text-muted-foreground">Ficha del proceso PS05.03 (Gestión de Incidentes TO-BE) aprobada</td>
                    <td className="text-center p-3 border border-border text-muted-foreground">Semana 7</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="text-center p-3 border border-border font-semibold">4</td>
                    <td className="p-3 border border-border text-muted-foreground">Piloto de GLPI operativo en la UTI del HEVES (pruebas de aceptación)</td>
                    <td className="text-center p-3 border border-border text-muted-foreground">Semana 9</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="text-center p-3 border border-border font-semibold">5</td>
                    <td className="p-3 border border-border text-muted-foreground">Acta de conformidad firmada y entrega final al Director Ejecutivo</td>
                    <td className="text-center p-3 border border-border text-muted-foreground">Semana 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
