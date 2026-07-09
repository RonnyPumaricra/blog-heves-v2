import { useMemo, useState } from 'react';
import {
  Layers,
  Network,
  ListTree,
  FolderOpen,
  Package,
  Briefcase,
  ChevronDown,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from 'lucide-react';

// ==========================================================================
// Tipos y datos
// ==========================================================================
export interface EdtRow {
  code: string;
  label: string;
  entregable: string;
  level: number; // 1 = Fase (X.0), 2 = Paquete de trabajo (X.Y)
}

interface TreeNode {
  code: string; // '' para la raíz
  title: string;
  entregable: string;
  depth: number; // 0 raíz, 1 fase, 2 paquete
  color: PaletteKey;
  icon: 'root' | 'phase' | 'package';
  children: TreeNode[];
}

type ViewMode = 'arbol' | 'esquema';

type PaletteKey = 'indigo' | 'blue' | 'violet' | 'amber' | 'emerald' | 'rose' | 'sky';

interface Palette {
  bg: string;
  border: string;
  text: string;
  accent: string;
  badge: string;
}

// Paletas con clases estándar de Tailwind (sin utilidades personalizadas del diseño original)
const PALETTES: Record<PaletteKey, Palette> = {
  indigo: {
    bg: 'bg-indigo-50/80 dark:bg-indigo-950/30 backdrop-blur-md',
    border: 'border-indigo-300 dark:border-indigo-500/40',
    text: 'text-indigo-700 dark:text-indigo-300',
    accent: 'bg-indigo-500',
    badge: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40',
  },
  blue: {
    bg: 'bg-blue-50/80 dark:bg-blue-950/30 backdrop-blur-md',
    border: 'border-blue-300 dark:border-blue-500/40',
    text: 'text-blue-700 dark:text-blue-300',
    accent: 'bg-blue-500',
    badge: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/40',
  },
  violet: {
    bg: 'bg-violet-50/80 dark:bg-violet-950/30 backdrop-blur-md',
    border: 'border-violet-300 dark:border-violet-500/40',
    text: 'text-violet-700 dark:text-violet-300',
    accent: 'bg-violet-500',
    badge: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-300 dark:border-violet-500/40',
  },
  amber: {
    bg: 'bg-amber-50/80 dark:bg-amber-950/30 backdrop-blur-md',
    border: 'border-amber-300 dark:border-amber-500/40',
    text: 'text-amber-700 dark:text-amber-300',
    accent: 'bg-amber-500',
    badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40',
  },
  emerald: {
    bg: 'bg-emerald-50/80 dark:bg-emerald-950/30 backdrop-blur-md',
    border: 'border-emerald-300 dark:border-emerald-500/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    accent: 'bg-emerald-500',
    badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40',
  },
  rose: {
    bg: 'bg-rose-50/80 dark:bg-rose-950/30 backdrop-blur-md',
    border: 'border-rose-300 dark:border-rose-500/40',
    text: 'text-rose-700 dark:text-rose-300',
    accent: 'bg-rose-500',
    badge: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40',
  },
  sky: {
    bg: 'bg-sky-50/80 dark:bg-sky-950/30 backdrop-blur-md',
    border: 'border-sky-300 dark:border-sky-500/40',
    text: 'text-sky-700 dark:text-sky-300',
    accent: 'bg-sky-500',
    badge: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-500/40',
  },
};

const PHASE_COLORS: PaletteKey[] = ['blue', 'violet', 'amber', 'emerald', 'rose', 'sky'];

// Construye el árbol de dos niveles a partir de las filas originales (sin alterar el contenido)
function buildTree(rows: EdtRow[], projectTitle: string): TreeNode {
  const root: TreeNode = {
    code: '',
    title: projectTitle,
    entregable: 'Línea Base del Alcance aprobada',
    depth: 0,
    color: 'indigo',
    icon: 'root',
    children: [],
  };

  let phaseIndex = -1;
  rows.forEach((row) => {
    if (row.level === 1) {
      phaseIndex += 1;
      root.children.push({
        code: row.code,
        title: row.label,
        entregable: row.entregable,
        depth: 1,
        color: PHASE_COLORS[phaseIndex % PHASE_COLORS.length],
        icon: 'phase',
        children: [],
      });
    } else {
      const phase = root.children[root.children.length - 1];
      if (phase) {
        phase.children.push({
          code: row.code,
          title: row.label,
          entregable: row.entregable,
          depth: 2,
          color: phase.color,
          icon: 'package',
          children: [],
        });
      }
    }
  });

  return root;
}

const NodeIcon = ({ type, size }: { type: TreeNode['icon']; size: number }) => {
  if (type === 'root') return <Briefcase size={size} />;
  if (type === 'phase') return <FolderOpen size={size} />;
  return <Package size={size} />;
};

// ==========================================================================
// Tarjeta de nodo (compartida por árbol y esquema)
// ==========================================================================
function NodeCard({ node }: { node: TreeNode }) {
  const isRoot = node.depth === 0;
  const p = PALETTES[node.color];

  const cardClass = isRoot
    ? `relative w-72 md:w-80 bg-white/95 dark:bg-slate-900/90 border-2 ${p.border} rounded-2xl p-5 shadow-lg ring-4 ring-indigo-500/10 dark:ring-indigo-400/10 transition-all duration-300`
    : `relative w-64 md:w-72 ${p.bg} border ${p.border} rounded-xl p-4 shadow-sm ring-1 ring-white/10 transition-all duration-300`;

  return (
    <div className={cardClass}>
      {/* Cinta superior de categoría */}
      <div className={`absolute top-0 left-0 right-0 ${isRoot ? 'h-1.5' : 'h-1'} rounded-t-xl ${p.accent}`} />

      {/* Cabecera: código y nivel + icono */}
      <div className="flex items-start justify-between gap-1.5 mb-2.5 mt-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          {isRoot ? (
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-indigo-500 text-white shadow-sm uppercase tracking-wider font-mono">
              ★ RAÍZ
            </span>
          ) : (
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md font-bold ${p.badge}`}>
              {node.code}
            </span>
          )}
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Nivel {node.depth}
          </span>
        </div>
        <div
          className={`p-1.5 rounded-lg ${
            isRoot
              ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 ring-2 ring-indigo-500/20'
              : `bg-white/60 dark:bg-slate-800/60 ${p.text}`
          }`}
        >
          <NodeIcon type={node.icon} size={isRoot ? 17 : 15} />
        </div>
      </div>

      {/* Título */}
      <h4
        className={`font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-snug ${
          isRoot ? 'text-base' : 'text-sm uppercase'
        }`}
      >
        {node.title}
      </h4>

      {/* Entregable asociado (contenido original) */}
      <div className="mt-2.5 pt-2.5 border-t border-slate-200/70 dark:border-slate-700/50">
        <span className="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-0.5">
          Entregable (PMBOK)
        </span>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">{node.entregable}</p>
      </div>
    </div>
  );
}

// ==========================================================================
// VISTA ÁRBOL (vertical: raíz arriba → ramas)
// ==========================================================================
function TreeNodeView({
  node,
  collapsed,
  onToggle,
}: {
  node: TreeNode;
  collapsed: Record<string, boolean>;
  onToggle: (code: string) => void;
}) {
  const isRoot = node.depth === 0;
  const hasChildren = node.children.length > 0;
  const key = node.code || '__root__';
  const isKeyCollapsed = collapsed[key];

  return (
    <div className={`flex flex-col ${isRoot ? 'items-center' : 'items-start'} relative w-full`}>
      {/* Tarjeta con botón de colapso */}
      <div className={`relative ${isRoot ? 'w-72 md:w-80' : 'w-64 md:w-72'}`}>
        <NodeCard node={node} />
        {hasChildren && (
          <button
            onClick={() => onToggle(key)}
            className={`absolute bottom-[-10px] ${
              isRoot || node.depth === 1 ? 'left-1/2 -translate-x-1/2' : 'left-3 -translate-x-1/2'
            } h-5 w-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-400 hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer`}
            title={isKeyCollapsed ? 'Expandir' : 'Colapsar'}
          >
            {isKeyCollapsed ? <ChevronRight size={11} /> : <ChevronDown size={11} />}
          </button>
        )}
      </div>

      {/* Hijos */}
      {hasChildren && !isKeyCollapsed && (
        isRoot ? (
          // Nivel 0 → Nivel 1: ramificación horizontal
          <div className="flex flex-col items-center mt-6 w-full">
            <div className="w-px h-6 bg-slate-200 dark:bg-white/15" />
            <div className="flex justify-center w-full relative gap-8 lg:gap-12">
              {node.children.map((child, index) => {
                const isFirst = index === 0;
                const isLast = index === node.children.length - 1;
                return (
                  <div key={child.code} className="relative flex flex-col items-center px-4">
                    {!isFirst && <div className="absolute top-0 left-0 right-1/2 h-px bg-slate-200 dark:bg-white/15" />}
                    {!isLast && <div className="absolute top-0 left-1/2 right-0 h-px bg-slate-200 dark:bg-white/15" />}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-200 dark:bg-white/15" />
                    <div className="pt-6 w-full flex justify-center">
                      <TreeNodeView node={child} collapsed={collapsed} onToggle={onToggle} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Nivel 1+: apilado vertical con espina a la izquierda
          <div className="w-64 md:w-72 mt-6 relative flex flex-col gap-6">
            {node.depth === 1 ? (
              <>
                <div className="absolute left-1/2 top-[-24px] h-3 w-px bg-slate-200 dark:bg-white/15" />
                <div className="absolute left-3 right-1/2 top-[-12px] h-px bg-slate-200 dark:bg-white/15" />
                <div className="absolute left-3 top-[-12px] h-3 w-px bg-slate-200 dark:bg-white/15" />
              </>
            ) : (
              <div className="absolute left-3 top-[-24px] h-6 w-px bg-slate-200 dark:bg-white/15" />
            )}

            {node.children.map((child, index) => {
              const isLast = index === node.children.length - 1;
              return (
                <div key={child.code} className="relative w-full flex flex-col items-start">
                  {isLast ? (
                    <div className="absolute left-3 top-0 h-[24px] w-px bg-slate-200 dark:bg-white/15" />
                  ) : (
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/15" />
                  )}
                  <div className="absolute left-3 w-3 h-px bg-slate-200 dark:bg-white/15 top-[24px]" />
                  <div className="w-full pl-6">
                    <TreeNodeView node={child} collapsed={collapsed} onToggle={onToggle} />
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

// ==========================================================================
// VISTA ESQUEMA (lista jerárquica con sangría)
// ==========================================================================
function flatten(node: TreeNode, collapsed: Record<string, boolean>, out: TreeNode[] = []): TreeNode[] {
  out.push(node);
  const key = node.code || '__root__';
  if (!collapsed[key]) {
    node.children.forEach((c) => flatten(c, collapsed, out));
  }
  return out;
}

function OutlineView({
  root,
  collapsed,
  onToggle,
}: {
  root: TreeNode;
  collapsed: Record<string, boolean>;
  onToggle: (code: string) => void;
}) {
  const rows = flatten(root, collapsed);

  return (
    <div className="w-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/75 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <th className="py-4 px-5">Código y Elemento / Paquete de Trabajo</th>
              <th className="py-4 px-4 hidden md:table-cell">Entregable Asociado (PMBOK)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
            {rows.map((node) => {
              const isRoot = node.depth === 0;
              const hasChildren = node.children.length > 0;
              const key = node.code || '__root__';
              const isCollapsed = collapsed[key];
              const p = PALETTES[node.color];
              return (
                <tr key={key} className="group hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                  <td className="py-3 px-5">
                    <div className="flex items-center" style={{ paddingLeft: `${node.depth * 1.5}rem` }}>
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        {hasChildren ? (
                          <button
                            onClick={() => onToggle(key)}
                            className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                          >
                            {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                          </button>
                        ) : (
                          <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full ml-1" />
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded mr-2 font-bold select-none shrink-0 ${
                          isRoot
                            ? 'bg-indigo-500 text-white'
                            : p.badge
                        }`}
                      >
                        {isRoot ? '★' : node.code}
                      </span>
                      <span className={`mr-2 shrink-0 ${isRoot ? 'text-indigo-600 dark:text-indigo-400' : p.text}`}>
                        <NodeIcon type={node.icon} size={15} />
                      </span>
                      <span
                        className={`font-semibold text-slate-800 dark:text-slate-200 ${
                          node.depth <= 1 ? 'uppercase text-xs tracking-wide' : ''
                        }`}
                      >
                        {node.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 hidden md:table-cell">
                    {node.entregable}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================================================
// Componente principal
// ==========================================================================
export function EdtDiagram({
  rows,
  projectTitle = 'Proyecto ITSM HEVES',
}: {
  rows: EdtRow[];
  projectTitle?: string;
}) {
  const [view, setView] = useState<ViewMode>('arbol');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [zoom, setZoom] = useState<number>(100);

  const tree = useMemo(() => buildTree(rows, projectTitle), [rows, projectTitle]);

  const toggle = (code: string) =>
    setCollapsed((prev) => ({ ...prev, [code]: !prev[code] }));

  const zoomIn = () => setZoom((z) => Math.min(150, z + 10));
  const zoomOut = () => setZoom((z) => Math.max(40, z - 10));
  const zoomReset = () => setZoom(100);

  return (
    <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/35 backdrop-blur-xl shadow-xl overflow-hidden">
      {/* Barra de herramientas: conmutador de vista */}
      <div className="border-b border-slate-200/60 dark:border-white/10 p-4 flex items-center justify-between gap-4 bg-slate-50/40 dark:bg-slate-950/40">
        <div className="inline-flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800">
          <button
            onClick={() => setView('arbol')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              view === 'arbol'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Network size={13} />
            <span>Modo Árbol</span>
          </button>
          <button
            onClick={() => setView('esquema')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              view === 'esquema'
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <ListTree size={13} />
            <span>Modo Esquema</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          <Layers size={13} className="text-indigo-500" />
          <span className="hidden sm:inline">Estructura de Desglose del Trabajo</span>
        </div>
      </div>

      {/* Lienzo: margen vertical amplio */}
      {view === 'arbol' ? (
        <div className="relative">
          <div className="overflow-auto bg-slate-50 dark:bg-slate-950/40 px-6 py-16 md:py-20 min-h-[520px] max-h-[80vh]">
            <div
              className="w-max mx-auto origin-top transition-transform duration-200"
              style={{ transform: `scale(${zoom / 100})` }}
            >
              <div className="min-w-[820px]">
                <TreeNodeView node={tree} collapsed={collapsed} onToggle={toggle} />
              </div>
            </div>
          </div>

          {/* Controles flotantes de zoom (siempre visibles sobre el lienzo) */}
          <div className="absolute bottom-5 right-5 flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-lg z-30 select-none">
            <button
              onClick={zoomOut}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
              title="Alejar"
            >
              <ZoomOut size={15} />
            </button>
            <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 min-w-[34px] text-center">
              {zoom}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
              title="Acercar"
            >
              <ZoomIn size={15} />
            </button>
            <div className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
            <button
              onClick={zoomReset}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
              title="Ver todo (restablecer)"
            >
              <Maximize2 size={14} />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-slate-950/40 px-4 py-10 md:py-12">
          <OutlineView root={tree} collapsed={collapsed} onToggle={toggle} />
        </div>
      )}
    </div>
  );
}
