import { useLayoutEffect, useRef } from 'react';

interface TreeNode {
  id: string;
  title: string;
  desc: string;
  row: number;
  level: string;
}

interface Edge {
  from: string;
  to: string;
}

const nodes: TreeNode[] = [
  { id: 'FF', title: 'FIN FINAL', desc: 'Mejorar la calidad de atención médica del HEVES elevando la disponibilidad de los sistemas TI críticos a ≥99% y reduciendo en 30% las observaciones de auditoría de OCI/MINSA durante los 12 meses posteriores a la implementación.', row: 0, level: 'fin-final' },
  { id: 'FI1', title: 'Fin Indirecto 1.1', desc: 'Incrementar en 40% el índice de satisfacción/confianza del personal médico y asistencial hacia SISGalenPlus e INFINITT (medido por encuesta antes/después) dentro de los 9 meses siguientes a la implementación del proceso.', row: 1, level: 'fin-indirecto' },
  { id: 'FI2', title: 'Fin Indirecto 1.2', desc: 'Reducir a 0 las observaciones de OCI/MINSA relacionadas con gestión de cambios e incidentes TI en la siguiente auditoría posterior a la implementación (horizonte de 12 meses).', row: 1, level: 'fin-indirecto' },
  { id: 'FD1', title: 'Fin Directo 1', desc: 'Reducir en 50% el número de interrupciones no planificadas mensuales en SISGalenPlus, INFINITT y HIS DISCAP WEB, y el tiempo medio de inactividad (downtime) en 40%, dentro de los 6 meses posteriores a la implementación del proceso PS05.03.', row: 2, level: 'fin-directo' },
  { id: 'OC', title: 'OBJETIVO CENTRAL', desc: 'Implementar el subproceso formal de gestión de incidencias TI (PS05.03) basado en el proceso de Gestión de Incidencias de ITIL v3 y la herramienta GLPI en el Hospital de Emergencias de Villa El Salvador, logrando su puesta en producción al cierre del proyecto. La meta operativa de registrar y resolver el 95% de los incidentes se medirá a los 6 meses de iniciada la Operación del Servicio.', row: 3, level: 'objetivo-central' },
  { id: 'MD1', title: 'Medio Directo 1', desc: 'Formalizar y aprobar el documento del subproceso PS05.03 e integrarlo al Mapa de Procesos HEVES 2025 bajo el marco ITIL v3, con aprobación formal de la Dirección dentro de los primeros 2 meses del proyecto.', row: 4, level: 'medio-directo' },
  { id: 'MD2', title: 'Medio Directo 2', desc: 'Implementar y poner en producción la herramienta GLPI para el registro, clasificación y seguimiento de incidentes TI, alcanzando un 90% de incidentes gestionados mediante la plataforma dentro de los primeros 4 meses.', row: 4, level: 'medio-directo' },
  { id: 'MD3', title: 'Medio Directo 3', desc: 'Capacitar al 100% del personal de la UTI del HEVES en el marco ITIL v3 y en el uso del subproceso PS05.03, con una nota mínima de aprobación del 80% en la evaluación post-capacitación, dentro de los primeros 3 meses.', row: 4, level: 'medio-directo' },
  { id: 'MF11', title: 'M.F. 1.1', desc: 'Diseñar la ficha de proceso PS05.03 alineada al Mapa de Procesos HEVES y a los lineamientos MINSA (RS N° 063-2020).', row: 5, level: 'medio-final' },
  { id: 'MF12', title: 'M.F. 1.2', desc: 'Obtener resolución directoral formal de aprobación del nuevo subproceso ITIL por parte de la Dirección Ejecutiva.', row: 5, level: 'medio-final' },
  { id: 'MF21', title: 'M.F. 2.1', desc: 'Instalar y configurar GLPI en los servidores virtualizados del HEVES con los flujos de incidentes definidos.', row: 5, level: 'medio-final' },
  { id: 'MF22', title: 'M.F. 2.2', desc: 'Realizar pruebas de aceptación del GLPI con casos de incidentes reales de los sistemas críticos del HEVES.', row: 5, level: 'medio-final' },
  { id: 'MF31', title: 'M.F. 3.1', desc: 'Ejecutar talleres de capacitación ITIL v3 certificados y elaborar manual de usuario del GLPI para el equipo UTI.', row: 5, level: 'medio-final' },
];

const edges: Edge[] = [
  { from: 'MF11', to: 'MD1' },
  { from: 'MF12', to: 'MD1' },
  { from: 'MF21', to: 'MD2' },
  { from: 'MF22', to: 'MD2' },
  { from: 'MF31', to: 'MD3' },
  { from: 'MD1', to: 'OC' },
  { from: 'MD2', to: 'OC' },
  { from: 'MD3', to: 'OC' },
  { from: 'OC', to: 'FD1' },
  { from: 'FD1', to: 'FI1' },
  { from: 'FD1', to: 'FI2' },
  { from: 'FI1', to: 'FF' },
  { from: 'FI2', to: 'FF' },
];

const rows = Array.from(
  nodes.reduce((map, node) => {
    if (!map.has(node.row)) map.set(node.row, []);
    map.get(node.row)!.push(node);
    return map;
  }, new Map<number, TreeNode[]>())
).sort(([a], [b]) => a - b);

const levelConfig: Record<string, { bg: string; border: string; borderWidth: string; text: string; titleWeight: string }> = {
  'fin-final':        { bg: 'bg-emerald-100 dark:bg-emerald-950/40',  border: 'border-emerald-600', borderWidth: 'border-2', text: 'text-emerald-900 dark:text-emerald-100', titleWeight: 'font-bold' },
  'fin-indirecto':    { bg: 'bg-teal-100 dark:bg-teal-950/40',       border: 'border-teal-400',   borderWidth: 'border',   text: 'text-teal-800 dark:text-teal-200',      titleWeight: 'font-semibold' },
  'fin-directo':      { bg: 'bg-green-100 dark:bg-green-950/40',     border: 'border-green-500',  borderWidth: 'border',   text: 'text-green-800 dark:text-green-200',    titleWeight: 'font-semibold' },
  'objetivo-central': { bg: 'bg-sky-100 dark:bg-sky-950/40',        border: 'border-sky-600',   borderWidth: 'border-2', text: 'text-sky-900 dark:text-sky-100',        titleWeight: 'font-bold' },
  'medio-directo':    { bg: 'bg-indigo-100 dark:bg-indigo-950/40',   border: 'border-indigo-500', borderWidth: 'border',   text: 'text-indigo-800 dark:text-indigo-200',  titleWeight: 'font-semibold' },
  'medio-final':      { bg: 'bg-slate-100 dark:bg-slate-950/40',     border: 'border-slate-400', borderWidth: 'border',   text: 'text-slate-700 dark:text-slate-300',    titleWeight: 'font-medium' },
};

export default function ArbolObjetivosTree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const drawConnectors = () => {
      const container = containerRef.current;
      const svg = svgRef.current;
      if (!container || !svg) return;

      const containerRect = container.getBoundingClientRect();
      let paths = '';

      for (const edge of edges) {
        const fromEl = container.querySelector(`[data-node-id="${edge.from}"]`);
        const toEl = container.querySelector(`[data-node-id="${edge.to}"]`);
        if (!fromEl || !toEl) continue;

        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
        const fromY = fromRect.top - containerRect.top;
        const toX = toRect.left + toRect.width / 2 - containerRect.left;
        const toY = toRect.bottom - containerRect.top;
        const midY = (fromY + toY) / 2;

        paths += `<path d="M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>`;
      }

      svg.innerHTML = `<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>${paths}`;
    };

    drawConnectors();
    window.addEventListener('resize', drawConnectors);
    return () => window.removeEventListener('resize', drawConnectors);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {rows.map(([rowNum, rowNodes]) => (
          <div key={rowNum} className="flex justify-center gap-6 w-full">
            {rowNodes.map((node) => {
              const config = levelConfig[node.level];
              return (
                <div
                  key={node.id}
                  data-node-id={node.id}
                  className={`${config.bg} ${config.border} ${config.borderWidth} ${config.text} rounded-lg p-3 max-w-[240px]`}
                >
                  <div className={`${config.titleWeight} text-sm leading-tight`}>
                    {node.title}
                  </div>
                  <div className="text-xs mt-1.5 leading-snug">
                    {node.desc}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
