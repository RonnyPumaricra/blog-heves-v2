import { Target, FileCheck, CheckCircle, XCircle, ClipboardCheck } from 'lucide-react';
import { PageTitle } from '../components/sections';

const inclusiones = [
  {
    titulo: 'Diagnóstico de la Situación Actual (AS-IS)',
    descripcion: (
      <>
        Análisis exhaustivo de los flujos informales de soporte actuales (vía WhatsApp personal) y
        levantamiento de los fallos recurrentes en sistemas médicos como{' '}
        <span className="text-green-700 dark:text-green-400 font-semibold">SISGalenPlus</span> e{' '}
        <span className="text-green-700 dark:text-green-400 font-semibold">INFINITT</span>.
      </>
    ),
  },
  {
    titulo: 'Diseño del Proceso TO-BE bajo ITIL 4',
    descripcion: (
      <>
        Elaboración y modelado de las fichas de caracterización y flujogramas del nuevo subproceso
        institucional formal de{' '}
        <strong className="text-foreground">Gestión de Incidencias de TI (PS05.03)</strong>.
      </>
    ),
  },
  {
    titulo: 'Despliegue de Infraestructura Piloto Sandbox',
    descripcion: (
      <>
        Configuración e instalación de la herramienta de código abierto{' '}
        <strong className="text-foreground">GLPI v10.0.X</strong> sobre una máquina virtual aislada
        con <strong className="text-foreground">Ubuntu Server 24.04 LTS</strong> y MariaDB en los
        servidores del HEVES.
      </>
    ),
  },
  {
    titulo: 'Estrategia de Prototipado Híbrido',
    descripcion: (
      <>
        Creación del canal UX de tickets autogestionados mediante códigos QR físicos vinculados a
        terminales asistenciales (ej. PC-EMERG-04), requiriendo solo 3 campos clave para médicos y
        enfermeros.
      </>
    ),
  },
  {
    titulo: 'Plan de Capacitación y Gestión del Cambio',
    descripcion: (
      <>
        Dictado de talleres de sensibilización al personal de enfermería y médicos para mitigar la
        resistencia al cambio, junto con entrenamiento técnico en ITIL 4 al equipo de la UTI.
      </>
    ),
  },
];

const exclusiones = [
  {
    titulo: 'Subprocesos adicionales de ITIL',
    descripcion: (
      <>
        No comprende el diseño, documentación ni configuración de los subprocesos de{' '}
        <em>Gestión de Problemas</em> ni de <em>Gestión de Cambios (PS05.04)</em>.
      </>
    ),
  },
  {
    titulo: 'Integración Directa a Nivel de Código',
    descripcion: (
      <>
        Excluye cualquier modificación o acoplamiento programático directo en las bases de datos o
        código fuente de los sistemas propietarios del hospital (SISGalenPlus, INFINITT, SIAF, SIGA).
      </>
    ),
  },
  {
    titulo: 'Adquisición de Recursos Económicos',
    descripcion: (
      <>
        Prohíbe la compra de hardware o licencias de software propietario (como Jira o ServiceNow).
        Se restringe estrictamente al uso de Activos de Procesos (APO) existentes.
      </>
    ),
  },
  {
    titulo: 'Soporte en Producción Post-Cierre',
    descripcion: (
      <>
        Las actividades de soporte operativo diario o mantenimiento evolutivo del sistema GLPI tras
        la firma del acta de conformidad final quedan fuera del alcance del equipo UNTELS.
      </>
    ),
  },
];

const criterios = [
  {
    titulo: 'Aprobación Técnica',
    descripcion:
      'Validación y conformidad firmada del diseño TO-BE por parte de la Jefa de la Unidad de TI, Paola Llave Escobedo.',
  },
  {
    titulo: 'Alineación Normativa',
    descripcion:
      'El 100% de los flujos y diagramas estructurados deben alinearse con la Directiva Administrativa N° 288-MINSA/2020 para la Gestión por Procesos en Salud.',
  },
  {
    titulo: 'Validación de Pruebas',
    descripcion:
      'Importación exitosa de los usuarios del hospital mediante el mapeo LDAP conectado al Active Directory de pruebas del HEVES, comprobando la asignación automática de SLAs menores a 15 minutos en tickets críticos.',
  },
];

export default function DefinirAlcanceSalidasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Target}
        iconBgColor="bg-green-600"
        title="Definir el Alcance"
        subtitle="Grupo de Procesos de Planificación"
        description="Proceso de desarrollar una descripción detallada del proyecto y del producto, basada en los entregables principales, los supuestos y las restricciones documentados durante el inicio del proyecto."
      />

      <section className="mb-12">
        <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
            <FileCheck className="text-green-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="space-y-6">
          {/* Card principal: Enunciado del Alcance */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-green-600 flex-shrink-0" size={22} />
              1. Enunciado del Alcance del Proyecto
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Documento que describe de forma detallada el trabajo incluido y excluido en el
              proyecto, así como los criterios de aceptación del producto final. Sirve como
              referencia de control durante todo el ciclo de vida del proyecto.
            </p>

            {/* Inclusiones y Exclusiones en dos columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Inclusiones */}
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-700 rounded-lg p-5">
                <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  Inclusiones del Alcance
                  <span className="ml-auto text-xs font-normal text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-700">
                    Trabajo a realizar
                  </span>
                </h4>
                <ul className="space-y-4">
                  {inclusiones.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{item.titulo}:</strong>{' '}
                        {item.descripcion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusiones */}
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-700 rounded-lg p-5">
                <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex-shrink-0">
                    ✕
                  </span>
                  Exclusiones del Alcance
                  <span className="ml-auto text-xs font-normal text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-700">
                    Fuera del proyecto
                  </span>
                </h4>
                <ul className="space-y-4">
                  {exclusiones.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <XCircle
                        className="text-red-500 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">{item.titulo}:</strong>{' '}
                        {item.descripcion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Criterios de Aceptación */}
            <div className="border-t border-border pt-6">
              <h4 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <ClipboardCheck className="text-green-600 flex-shrink-0" size={20} />
                Criterios de Aceptación del Producto
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {criterios.map((c, i) => (
                  <div
                    key={i}
                    className="bg-muted/50 border border-border rounded-lg p-4"
                  >
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-2">
                      {c.titulo}
                    </p>
                    <p className="text-sm text-muted-foreground">{c.descripcion}</p>
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
