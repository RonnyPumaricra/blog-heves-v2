import { Network, FileCheck, FolderOpen, BookOpen } from 'lucide-react';
import { PageTitle } from '../components/sections';
import { EdtDiagram } from '../components/EdtDiagram';

const wbsRows = [
  { code: '1.0', label: 'GESTIÓN DEL PROYECTO', entregable: 'Paquete de Dirección Aprobado', level: 1 },
  { code: '1.1', label: 'Firma y Autorización del Proyecto', entregable: 'Acta de Constitución (Project Charter)', level: 2 },
  { code: '1.2', label: 'Análisis y Registro de Interesados del HEVES', entregable: 'Matriz Poder-Interés e Involucramiento', level: 2 },
  { code: '1.3', label: 'Desarrollo de la Planificación Integral', entregable: 'Plan para la Dirección del Proyecto (PDP)', level: 2 },
  { code: '2.0', label: 'DIAGNÓSTICO Y MODELADO (AS-IS / TO-BE)', entregable: 'Expediente de Rediseño de Procesos', level: 1 },
  { code: '2.1', label: 'Levantamiento Empírico de Fallos en Sistemas Críticos', entregable: 'Informe Técnico de Diagnóstico AS-IS', level: 2 },
  { code: '2.2', label: 'Estructuración Causa-Efecto Institucional', entregable: 'Árbol de Problemas y Árbol de Objetivos', level: 2 },
  { code: '2.3', label: 'Modelado de Procesos de Soporte ITIL v3', entregable: 'Ficha Técnica del Subproceso PS05.03', level: 2 },
  { code: '2.4', label: 'Evaluación y Selección Tecnológica', entregable: 'Matriz Multicriterio de Alternativas', level: 2 },
  { code: '3.0', label: 'CONFIGURACIÓN E IMPLEMENTACIÓN DE SOFTWARE', entregable: 'Sistema Piloto Funcional (Mesa de Ayuda)', level: 1 },
  { code: '3.1', label: 'Despliegue del Servidor Aislado Sandbox', entregable: 'Ubuntu Server 24.04 LTS + MariaDB Operativo', level: 2 },
  { code: '3.2', label: 'Parametrización del Core GLPI v10 y Matriz SLA', entregable: 'Motor de Reglas y Prioridades Configurado', level: 2 },
  { code: '3.3', label: 'Conectividad e Importación de Usuarios Asistenciales', entregable: 'Mapeo de Atributos LDAP (Active Directory HEVES)', level: 2 },
  { code: '3.4', label: 'Desarrollo de Interfaz de Reporte Rápido QR', entregable: 'Prototipo UX Móvil Interactivo (Canal de Tickets)', level: 2 },
  { code: '4.0', label: 'CAPACITACIÓN Y CONTROL DE CALIDAD', entregable: 'Actas de Validación Operativa', level: 1 },
  { code: '4.1', label: 'Estrategia de Mitigación de Resistencia Asistencial', entregable: 'Talleres de Sensibilización con Enfermería / Médicos', level: 2 },
  { code: '4.2', label: 'Formación en Estándares de Gestión de Servicios', entregable: 'Plan de Capacitación ITIL v3 para la UTI', level: 2 },
  { code: '4.3', label: 'Pruebas de Aceptación de Software (QA)', entregable: 'Métricas e Indicadores PS05 Verificados', level: 2 },
  { code: '5.0', label: 'CIERRE DEL PROYECTO', entregable: 'Activos de los Procesos Enriquecidos', level: 1 },
  { code: '5.1', label: 'Consolidación del Conocimiento Adquirido', entregable: 'Registro Formal de Lecciones Aprendidas', level: 2 },
  { code: '5.2', label: 'Sustentación Final ante la Alta Dirección', entregable: 'Presentación Ejecutiva al Director Ejecutivo', level: 2 },
  { code: '5.3', label: 'Formalización del Cierre Institucional', entregable: 'Acta de Conformidad y Transferencia Firmada', level: 2 },
];

const dictItems = [
  {
    code: '2.3',
    titulo: 'Modelado de Procesos de Soporte ITIL v3',
    responsable: 'Molina Vera, Marcelo Samuel (UNTELS)',
    descripcion: 'Redactar y diagramar de manera formal la documentación del nuevo subproceso PS05.03 de Gestión de Incidencias, determinando entradas, salidas, controles y flujogramas normativos.',
    recursos: 'Manual de Operaciones HEVES (MOP 2016), Marco de Referencia ITIL v3, Software Bizagi Modeler.',
    criterios: 'La ficha del proceso debe alinearse al 100% con los lineamientos de Gestión por Procesos en Salud dictados por la RS N° 063-2020-MINSA y contar con el visto bueno de la Jefa de la UTI.',
  },
  {
    code: '3.2',
    titulo: 'Parametrización del Core GLPI v10 y Matriz SLA',
    responsable: 'Roncal Saravia, Jorge Rafael (UNTELS)',
    descripcion: 'Configurar de manera lógica el motor de reglas de GLPI para automatizar los tiempos objetivos de resolución (SLA) vinculados a la criticidad del servicio de salud afectado.',
    recursos: 'Servidor Sandbox con Ubuntu Server, Base de datos MariaDB, Matriz de criticidad clínica.',
    criterios: 'Verificación de alarmas visuales y sonoras en la UTI automáticas cuando un ticket es autodeclarado como "Alta Crítica" (Áreas de Emergencia o UCI), forzando un SLA institucional acordado menor a 15 minutos.',
  },
  {
    code: '3.3',
    titulo: 'Conectividad e Importación de Usuarios Asistenciales',
    responsable: 'Perez Damian, Junior Joel (UNTELS)',
    descripcion: 'Establecer el canal de comunicación seguro entre el software GLPI y el Active Directory institucional de pruebas del HEVES para automatizar la carga de la data de los empleados.',
    recursos: 'Credenciales BaseDN del Active Directory, Mapeo de campos LDAP configurado en el archivo del servidor de la Mesa de Ayuda.',
    criterios: (
      <>
        Carga y sincronización correcta en tiempo real del personal asistencial mapeando estrictamente las variables obligatorias:{' '}
        <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">samaccountname</code> (Usuario),{' '}
        <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">mail</code> (Correo),{' '}
        <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">givenname</code> (Nombre) y{' '}
        <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">telephonenumber</code> (Anexo).
      </>
    ),
  },
];

export default function CrearEdtSalidasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Network}
        iconBgColor="bg-orange-600"
        title="Crear la EDT/WBS"
        subtitle="Grupo de Procesos de Planificación"
        description="Proceso de subdividir los entregables del proyecto y el trabajo del proyecto en componentes más pequeños y manejables, proporcionando una visión estructurada de lo que se debe entregar."
      />

      <section className="mb-12">
        <div className="bg-orange-50 dark:bg-orange-950/40 dark:border-orange-400 border-l-4 border-orange-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
            <FileCheck className="text-orange-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="space-y-6">
          {/* Card principal: Línea Base del Alcance */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <FileCheck className="text-orange-600 flex-shrink-0" size={22} />
              1. Línea Base del Alcance
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Versión aprobada del enunciado del alcance, la EDT y su diccionario asociado.
              Sirve como referencia de control de cambios durante toda la ejecución del proyecto ITSM HEVES.
            </p>

            {/* EDT / WBS */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <FolderOpen className="text-orange-600 flex-shrink-0" size={20} />
                Estructura de Desglose del Trabajo (EDT / WBS)
              </h4>

              <EdtDiagram rows={wbsRows} projectTitle="Proyecto ITSM HEVES" />
            </div>

            {/* Diccionario de la EDT */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="text-orange-600 flex-shrink-0" size={20} />
                Diccionario de la EDT — Muestra Técnica de Paquetes Clave
              </h4>

              <div className="space-y-4">
                {dictItems.map((pkg) => (
                  <div key={pkg.code} className="border border-border rounded-lg overflow-hidden">
                    {/* Header del paquete */}
                    <div className="bg-muted/60 px-4 py-3 flex items-center justify-between border-b border-border">
                      <span className="font-bold text-foreground text-sm">
                        Paquete de Trabajo: {pkg.code} — {pkg.titulo}
                      </span>
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 dark:bg-orange-950/40 px-2 py-1 rounded border border-orange-200 dark:border-orange-700">
                        Cód. EDT: {pkg.code}
                      </span>
                    </div>

                    {/* Body del paquete */}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Responsable Asignado
                        </p>
                        <p className="text-sm text-foreground bg-muted/40 border border-border rounded px-3 py-2">
                          {pkg.responsable}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Recursos Requeridos
                        </p>
                        <p className="text-sm text-foreground bg-muted/40 border border-border rounded px-3 py-2">
                          {pkg.recursos}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Descripción del Trabajo
                        </p>
                        <p className="text-sm text-foreground bg-muted/40 border border-border rounded px-3 py-2">
                          {pkg.descripcion}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Criterios de Aceptación Técnico
                        </p>
                        <p className="text-sm text-foreground bg-muted/40 border border-border rounded px-3 py-2">
                          {pkg.criterios}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
