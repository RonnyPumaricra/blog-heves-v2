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
  { id: 'EF', title: 'EFECTO FINAL', desc: 'Riesgo de deterioro en la calidad de atención médica del HEVES y potencial incumplimiento de la normativa de gobierno digital (DL N° 1412), afectando la imagen institucional del hospital ante MINSA y la ciudadanía de Villa El Salvador.', row: 0, level: 'efecto-final' },
  { id: 'EI1', title: 'Efecto Indirecto 1.1', desc: 'Incremento de la desconfianza del personal médico y asistencial hacia los sistemas TI del HEVES (SISGalenPlus, INFINITT), reduciendo su adopción en áreas críticas.', row: 1, level: 'efecto-indirecto' },
  { id: 'EI2', title: 'Efecto Indirecto 1.2', desc: 'Exposición del HEVES a observaciones del OCI y del MINSA por ausencia de controles documentados en la gestión de cambios tecnológicos, con riesgo de sanciones institucionales.', row: 1, level: 'efecto-indirecto' },
  { id: 'ED1', title: 'Efecto Directo 1', desc: 'Interrupciones no planificadas y prolongadas de los sistemas TI críticos (SISGalenPlus, INFINITT, HIS DISCAP WEB) que generan demoras en la atención de emergencias, retrasos en diagnósticos imagenológicos y paralización de registros clínicos.', row: 2, level: 'efecto-directo' },
  { id: 'PC', title: '◆ PROBLEMA CENTRAL', desc: 'Ausencia de un proceso formal de gestión de incidencias de servicios TI en el Hospital de Emergencias de Villa El Salvador (HEVES), generando inestabilidad operativa y falta de trazabilidad ante fallos tecnológicos en áreas críticas.', row: 3, level: 'problema-central' },
  { id: 'CD1', title: 'Causa Directa 1', desc: 'El proceso PS05 del HEVES no contempla subprocesos formales de gestión de incidentes ni de cambios (solo PS05.01 y PS05.02).', row: 4, level: 'causa-directa' },
  { id: 'CD2', title: 'Causa Directa 2', desc: 'Inexistencia de una herramienta tecnológica para el registro, clasificación y seguimiento de incidentes TI en el HEVES.', row: 4, level: 'causa-directa' },
  { id: 'CD3', title: 'Causa Directa 3', desc: 'Personal de la UTI sin capacitación formal en marcos de gestión de servicios TI (ITIL 4) ni en protocolos de respuesta ante incidentes.', row: 4, level: 'causa-directa' },
  { id: 'CI11', title: 'C.I. 1.1', desc: 'El Mapa de Procesos HEVES 2024 aprobado no incluyó la gestión de incidentes como proceso requerido.', row: 5, level: 'causa-indirecta' },
  { id: 'CI12', title: 'C.I. 1.2', desc: 'Gobernanza TI centralizada sin iniciativas de mejora continua de procesos de soporte.', row: 5, level: 'causa-indirecta' },
  { id: 'CI21', title: 'C.I. 2.1', desc: 'Presupuesto TI limitado destinado exclusivamente a mantenimiento de sistemas existentes.', row: 5, level: 'causa-indirecta' },
  { id: 'CI22', title: 'C.I. 2.2', desc: 'Ausencia de criterios de selección de herramientas ITSM compatibles con entidades públicas (DL N° 822).', row: 5, level: 'causa-indirecta' },
  { id: 'CI31', title: 'C.I. 3.1', desc: 'Plan de capacitación TI del HEVES no contempla formación en estándares ITIL ni gestión de servicios.', row: 5, level: 'causa-indirecta' },
];

const edges: Edge[] = [
  { from: 'CI11', to: 'CD1' },
  { from: 'CI12', to: 'CD1' },
  { from: 'CI21', to: 'CD2' },
  { from: 'CI22', to: 'CD2' },
  { from: 'CI31', to: 'CD3' },
  { from: 'CD1', to: 'PC' },
  { from: 'CD2', to: 'PC' },
  { from: 'CD3', to: 'PC' },
  { from: 'PC', to: 'ED1' },
  { from: 'ED1', to: 'EI1' },
  { from: 'ED1', to: 'EI2' },
  { from: 'EI1', to: 'EF' },
  { from: 'EI2', to: 'EF' },
];

const rows = Array.from(
  nodes.reduce((map, node) => {
    if (!map.has(node.row)) map.set(node.row, []);
    map.get(node.row)!.push(node);
    return map;
  }, new Map<number, TreeNode[]>())
).sort(([a], [b]) => a - b);

const levelConfig: Record<string, { bg: string; border: string; borderWidth: string; text: string; titleWeight: string }> = {
  'efecto-final':      { bg: 'bg-red-100 dark:bg-red-950/40',      border: 'border-red-600', borderWidth: 'border-2', text: 'text-red-900 dark:text-red-100', titleWeight: 'font-bold' },
  'efecto-indirecto':  { bg: 'bg-rose-100 dark:bg-rose-950/40',    border: 'border-rose-400', borderWidth: 'border', text: 'text-rose-800 dark:text-rose-200', titleWeight: 'font-semibold' },
  'efecto-directo':    { bg: 'bg-orange-100 dark:bg-orange-950/40', border: 'border-orange-500', borderWidth: 'border', text: 'text-orange-800 dark:text-orange-200', titleWeight: 'font-semibold' },
  'problema-central':  { bg: 'bg-amber-100 dark:bg-amber-950/40', border: 'border-amber-600', borderWidth: 'border-2', text: 'text-amber-900 dark:text-amber-100', titleWeight: 'font-bold' },
  'causa-directa':     { bg: 'bg-blue-100 dark:bg-blue-950/40',    border: 'border-blue-500', borderWidth: 'border', text: 'text-blue-800 dark:text-blue-200', titleWeight: 'font-semibold' },
  'causa-indirecta':   { bg: 'bg-slate-100 dark:bg-slate-950/40',  border: 'border-slate-400', borderWidth: 'border', text: 'text-slate-700 dark:text-slate-300', titleWeight: 'font-medium' },
};

export default function ArbolProblemasTree() {
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
