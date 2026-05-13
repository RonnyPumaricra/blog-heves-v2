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
  { id: 'FF', title: 'FIN FINAL', desc: 'Mejora sostenida de la calidad de atención médica del HEVES mediante servicios TI confiables y trazables, cumpliendo la normativa de gobierno digital peruana y fortaleciendo la imagen institucional ante MINSA y la ciudadanía de Villa El Salvador.', row: 0, level: 'fin-final' },
  { id: 'FI1', title: 'Fin Indirecto 1.1', desc: 'Incremento de la confianza del personal médico y asistencial hacia los sistemas TI (SISGalenPlus, INFINITT), promoviendo su adopción efectiva en áreas críticas del HEVES.', row: 1, level: 'fin-indirecto' },
  { id: 'FI2', title: 'Fin Indirecto 1.2', desc: 'Cumplimiento de los controles documentados exigidos por OCI y MINSA en la gestión de cambios tecnológicos, reduciendo el riesgo de observaciones institucionales.', row: 1, level: 'fin-indirecto' },
  { id: 'FD1', title: 'Fin Directo 1', desc: 'Reducción de interrupciones no planificadas en los sistemas TI críticos del HEVES (SISGalenPlus, INFINITT, HIS DISCAP WEB), garantizando continuidad en la atención de emergencias y diagnósticos.', row: 2, level: 'fin-directo' },
  { id: 'OC', title: 'OBJETIVO CENTRAL', desc: 'Implementar un proceso formal de gestión de incidencias de servicios TI (subproceso PS05.03) en el Hospital de Emergencias de Villa El Salvador, mediante la adopción del marco ITIL 4 y la herramienta GLPI, para garantizar la estabilidad operativa y la trazabilidad de fallos tecnológicos en áreas críticas.', row: 3, level: 'objetivo-central' },
  { id: 'MD1', title: 'Medio Directo 1', desc: 'Formalizar el proceso de gestión de incidentes TI como subproceso PS05.03, integrándolo al Mapa de Procesos HEVES 2025 bajo el marco ITIL 4.', row: 4, level: 'medio-directo' },
  { id: 'MD2', title: 'Medio Directo 2', desc: 'Implementar la herramienta GLPI (código abierto, compatible con DL N° 822) para el registro, clasificación y seguimiento de incidentes TI del HEVES.', row: 4, level: 'medio-directo' },
  { id: 'MD3', title: 'Medio Directo 3', desc: 'Capacitar al personal de la UTI del HEVES en el marco ITIL 4 y en el uso del subproceso PS05.03 para la atención estandarizada de incidentes.', row: 4, level: 'medio-directo' },
  { id: 'MF11', title: 'M.F. 1.1', desc: 'Diseñar la ficha de proceso PS05.03 alineada al Mapa de Procesos HEVES y a los lineamientos MINSA (RS N° 063-2020).', row: 5, level: 'medio-final' },
  { id: 'MF12', title: 'M.F. 1.2', desc: 'Obtener resolución directoral formal de aprobación del nuevo subproceso ITIL por parte de la Dirección Ejecutiva.', row: 5, level: 'medio-final' },
  { id: 'MF21', title: 'M.F. 2.1', desc: 'Instalar y configurar GLPI en los servidores virtualizados del HEVES con los flujos de incidentes definidos.', row: 5, level: 'medio-final' },
  { id: 'MF22', title: 'M.F. 2.2', desc: 'Realizar pruebas de aceptación del GLPI con casos de incidentes reales de los sistemas críticos del HEVES.', row: 5, level: 'medio-final' },
  { id: 'MF31', title: 'M.F. 3.1', desc: 'Ejecutar talleres de capacitación ITIL 4 certificados y elaborar manual de usuario del GLPI para el equipo UTI.', row: 5, level: 'medio-final' },
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
