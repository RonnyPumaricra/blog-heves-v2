import React from 'react';
import { WBSNode, COLOR_PALETTES } from '../types';
import { LucideIcon } from './LucideIcon';
import { getNodeAggregates, getSortedChildren, getNodeDepth } from '../utils';
import { Plus, Edit2, Trash2, ChevronDown, ChevronRight, ArrowUp, ArrowDown, User } from 'lucide-react';
import { motion } from 'motion/react';

interface ListViewProps {
  nodes: Record<string, WBSNode>;
  outlineCodes: Record<string, string>;
  autoAggregate: boolean;
  onAddChild: (parentId: string) => void;
  onEditNode: (node: WBSNode) => void;
  onDeleteNode: (id: string) => void;
  onToggleCollapse: (id: string) => void;
  onReorderNode: (id: string, direction: 'up' | 'down') => void;
}

export const ListView: React.FC<ListViewProps> = ({
  nodes,
  outlineCodes,
  autoAggregate,
  onAddChild,
  onEditNode,
  onDeleteNode,
  onToggleCollapse,
  onReorderNode,
}) => {
  // Recursively flatten tree for linear rendering
  const getFlattenedNodes = (
    parentId: string | null = null,
    visibleList: WBSNode[] = []
  ): WBSNode[] => {
    const children = getSortedChildren(nodes, parentId);
    
    children.forEach((child) => {
      visibleList.push(child);
      const isCollapsed = child.collapsed;
      // If parent is collapsed, don't flatten its descendants
      if (!isCollapsed) {
        getFlattenedNodes(child.id, visibleList);
      }
    });
    
    return visibleList;
  };

  const flattenedNodes = getFlattenedNodes(null);

  if (flattenedNodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-96">
        <div className="bg-slate-100 dark:bg-slate-850 p-4 rounded-full text-slate-400 mb-4">
          <LucideIcon name="ClipboardCheck" size={32} />
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-medium">No hay nodos en la lista.</p>
        <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Utiliza el botón de agregar o carga una plantilla.</p>
      </div>
    );
  }

  const formatCurrency = (val: number) => {
    return val > 0
      ? new Intl.NumberFormat('es-MX', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        }).format(val)
      : '—';
  };

  return (
    <div className="w-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 dark:ring-1 dark:ring-white/5 rounded-2xl overflow-hidden shadow-sm">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/75 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-850 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider font-sans">
              <th className="py-4 px-5">Código y Nombre de Tarea</th>
              <th className="py-4 px-4 hidden md:table-cell">Descripción</th>
              <th className="py-4 px-4">Responsable</th>
              <th className="py-4 px-4 font-mono text-right">Presupuesto</th>
              <th className="py-4 px-4 font-mono text-right">Esfuerzo</th>
              <th className="py-4 px-4 text-center">Progreso</th>
              <th className="py-4 px-5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-850/60 text-sm">
            {flattenedNodes.map((node, index) => {
              const depth = getNodeDepth(nodes, node.id);
              const children = getSortedChildren(nodes, node.id);
              const hasChildren = children.length > 0;
              const isCollapsed = node.collapsed;
              const agg = getNodeAggregates(nodes, node.id, autoAggregate);
              const palette = COLOR_PALETTES[node.color] || COLOR_PALETTES.slate;

              return (
                <tr
                  key={node.id}
                  className="group hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors"
                >
                  {/* Title and nesting indicator */}
                  <td className="py-3 px-5">
                    <div className="flex items-center" style={{ paddingLeft: `${depth * 1.5}rem` }}>
                      {/* Collapse trigger */}
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        {hasChildren ? (
                          <button
                            onClick={() => onToggleCollapse(node.id)}
                            className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                          >
                            {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                          </button>
                        ) : (
                          <div className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full ml-1" />
                        )}
                      </div>

                      {/* Outline Code Prefix */}
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded mr-2 font-bold select-none shrink-0 ${palette.badge}`}>
                        {outlineCodes[node.id] || '1'}
                      </span>

                      {/* Node Icon */}
                      <span className={`mr-2 ${palette.text} shrink-0`}>
                        <LucideIcon name={node.icon} size={15} />
                      </span>

                      {/* Title */}
                      <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-xs sm:max-w-md">
                        {node.title}
                      </span>
                    </div>
                  </td>

                  {/* Description */}
                  <td className="py-3 px-4 text-xs text-slate-400 dark:text-slate-500 max-w-xs truncate hidden md:table-cell">
                    {node.description || '—'}
                  </td>

                  {/* Owner */}
                  <td className="py-3 px-4">
                    {node.owner ? (
                      <div className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                        <User size={10} className="text-slate-400 shrink-0" />
                        <span className="truncate max-w-[100px]">{node.owner}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">Sin asignar</span>
                    )}
                  </td>

                  {/* Budget */}
                  <td className="py-3 px-4 text-right font-mono font-bold text-slate-700 dark:text-slate-300 text-xs">
                    {formatCurrency(agg.budget)}
                  </td>

                  {/* Hours */}
                  <td className="py-3 px-4 text-right font-mono font-bold text-slate-700 dark:text-slate-300 text-xs">
                    {agg.hours > 0 ? `${agg.hours}h` : '—'}
                  </td>

                  {/* Progress bar */}
                  <td className="py-3 px-4">
                    <div className="flex flex-col items-center justify-center space-y-1 w-24 mx-auto">
                      <div className="flex justify-between items-center w-full text-[10px] font-mono font-bold text-slate-500">
                        <span className="w-full text-center">{agg.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${palette.accent}`}
                          style={{ width: `${agg.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-5 text-right">
                    <div className="flex items-center justify-end space-x-1.5 opacity-60 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                      {/* Reordering */}
                      <button
                        onClick={() => onReorderNode(node.id, 'up')}
                        disabled={index === 0}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 transition-colors"
                        title="Subir"
                      >
                        <ArrowUp size={12} />
                      </button>
                      <button
                        onClick={() => onReorderNode(node.id, 'down')}
                        disabled={index === flattenedNodes.length - 1}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 transition-colors"
                        title="Bajar"
                      >
                        <ArrowDown size={12} />
                      </button>

                      <div className="w-px h-3.5 bg-slate-150 dark:bg-slate-800" />

                      {/* Add Child */}
                      <button
                        onClick={() => onAddChild(node.id)}
                        className="p-1 rounded text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
                        title="Añadir Subtarea"
                      >
                        <Plus size={13} />
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => onEditNode(node)}
                        className="p-1 rounded text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={13} />
                      </button>

                      {/* Delete */}
                      {node.parentId !== null && (
                        <button
                          onClick={() => onDeleteNode(node.id)}
                          className="p-1 rounded text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
