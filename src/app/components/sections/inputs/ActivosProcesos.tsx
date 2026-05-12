import { ReactNode } from 'react';

interface SharedSectionProps {
  description?: string;
  items?: string[];
  children?: ReactNode;
}

export function EntradaActivosProcesos({ description, items, children }: SharedSectionProps) {
  const defaultItems = [
    '• Políticas y procedimientos de la organización',
    '• Plantillas de gestión de proyectos',
    '• Lecciones aprendidas de proyectos anteriores',
    '• Historial de relaciones con interesados clave',
    '• Base de conocimientos de proyectos similares',
  ];

  const content = items && items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        Activos de los Procesos de la Organización
      </h3>
      <p className="text-gray-700 mb-4">
        Información histórica y lecciones aprendidas de proyectos similares.
        {description && ` ${description}`}
      </p>
      <ul className="space-y-2 text-gray-700 ml-4">
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export function EntradaActivosProcesosHEVES({idx}: {idx: number}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {idx}. Activos de los Procesos de la Organización
      </h3>
      <p className="text-gray-700 mb-4">
        El <strong>Mapa de Procesos 2024 del HEVES</strong> contiene la ficha técnica oficial del proceso <strong>PS05 (Gestión de Tecnologías de la Información)</strong>. Esta ficha constituye la <em>plantilla institucional</em> sobre la cual se diseñarán los nuevos subprocesos ITIL. Conocerla en detalle es fundamental para que el modelo TO-BE sea adoptable por el HEVES.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left p-3 border border-gray-300 w-1/3">Campo de la Ficha</th>
              <th className="text-left p-3 border border-gray-300 w-2/3">Contenido Real — PS05: Gestión de Tecnologías de la Información</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Código</td>
              <td className="p-3 border border-gray-300">PS05</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Tipo de Proceso</td>
              <td className="p-3 border border-gray-300">Proceso de Soporte</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Versión</td>
              <td className="p-3 border border-gray-300">V.01 (aprobada 2024)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Objetivo del Proceso</td>
              <td className="p-3 border border-gray-300">Generar, procesar y desarrollar soluciones en tecnologías de información para la óptima gestión de los procesos del HEVES.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Dueño del Proceso</td>
              <td className="p-3 border border-gray-300">Jefe(a) de la Unidad de Tecnologías de la Información — actualmente: Paola Llave Escobedo</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Alcance</td>
              <td className="p-3 border border-gray-300">Comprende a todas las Unidades de Organización del HEVES.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Subprocesos Nivel 1</td>
              <td className="p-3 border border-gray-300">PS05.01 — Gestión de Desarrollo del Software; PS05.02 — Gestión de la Infraestructura Tecnológica</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Entradas / Insumos</td>
              <td className="p-3 border border-gray-300">Plan Estratégico de TI (PETI) IGSS, Arquitectura de TIC a alto nivel, Plan de Gobierno Abierto, Proyectos de TI, Solicitud de cambio o mantenimiento, Requerimiento TIC de unidades orgánicas.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Salidas / Productos PS05.01</td>
              <td className="p-3 border border-gray-300">Proyectos de soluciones tecnológicas, mantenimientos y actualizaciones, generación de data estadística, informe del pase a producción, implementación de soluciones tecnológicas y acta de conformidad, capacitación en sistemas.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Salidas / Productos PS05.02</td>
              <td className="p-3 border border-gray-300">Mantenimiento preventivo y correctivo de infraestructura tecnológica, procesamiento y almacenamiento de información, arquitectura de interoperabilidad, disponibilidad de servicios de Tecnología de Información.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Indicadores de Desempeño</td>
              <td className="p-3 border border-gray-300">Porcentaje de requerimientos técnico-informáticos atendidos; Control de calidad de software.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Controles</td>
              <td className="p-3 border border-gray-300">Informe de Seguimiento de proyectos TIC; Registro de proyectos atendidos.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Sistemas Informáticos</td>
              <td className="p-3 border border-gray-300">Sistema de Gestión Documental, SIG SALUD, Sistema informático de Emergencia, Sistema informático de Consultorios externos, Redes de comunicación, Servidores virtualizados.</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Equipos</td>
              <td className="p-3 border border-gray-300">Computadoras, impresoras, escáneres, faxeteras, anexos, celulares, teléfonos, accesorios de cómputo, central telefónica, switcher.</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-300 font-semibold">Elaborado por</td>
              <td className="p-3 border border-gray-300">Ing. Walter William Rivera Valerio — Unidad de Tecnologías de la Información</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-300 font-semibold">Aprobado por</td>
              <td className="p-3 border border-gray-300">Mg. Jesús Llanos López — Oficina de Planeamiento y Presupuesto (revisión) / Ing. Rivera Valerio (aprobación) — Fecha: 03/07/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-3 italic">
        Fuente: Mapa de Procesos HEVES 2024 — Ficha PS05: Gestión de Tecnologías de la Información (pp. 47–48).
      </p>
    </div>
  );
}
