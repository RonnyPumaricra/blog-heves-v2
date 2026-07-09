import React from 'react';
import { WBSNode, NodeColor, COLOR_PALETTES } from '../types';
import { LucideIcon } from './LucideIcon';
import { getNodeAggregates, getSortedChildren, getNodeDepth } from '../utils';
import { Plus, Edit2, Trash2, ChevronDown, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TreeViewProps {
  nodes: Record<string, WBSNode>;
  outlineCodes: Record<string, string>;
  layoutMode: 'vertical' | 'horizontal';
  autoAggregate: boolean;
  onAddChild: (parentId: string) => void;
  onEditNode: (node: WBSNode) => void;
  onDeleteNode: (id: string) => void;
  onToggleCollapse: (id: string) => void;
}

export const TreeView: React.FC<TreeViewProps> = ({
  nodes,
  outlineCodes,
  layoutMode,
  autoAggregate,
  onAddChild,
  onEditNode,
  onDeleteNode,
  onToggleCollapse,
}) => {
  // Find roots (nodes with no parent)
  const rootNodes = (Object.values(nodes) as WBSNode[])
    .filter((n) => n.parentId === null)
    .sort((a, b) => a.order - b.order);

  if (rootNodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center h-96">
        <div className="bg-slate-100 dark:bg-slate-850 p-4 rounded-full text-slate-400 mb-4">
          <LucideIcon name="Layers" size={32} />
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-medium">No hay nodos en el diagrama.</p>
        <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Utiliza los botones superiores o carga una plantilla para iniciar.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center p-4">
      <div className={`flex ${layoutMode === 'vertical' ? 'flex-col items-center' : 'flex-col items-start'} gap-12 w-full`}>
        {rootNodes.map((root) => (
          <div key={root.id} className="w-full flex flex-col items-center">
            {layoutMode === 'vertical' ? (
              <VerticalTreeNode
                node={root}
                nodes={nodes}
                outlineCodes={outlineCodes}
                autoAggregate={autoAggregate}
                onAddChild={onAddChild}
                onEditNode={onEditNode}
                onDeleteNode={onDeleteNode}
                onToggleCollapse={onToggleCollapse}
              />
            ) : (
              <HorizontalTreeNode
                node={root}
                nodes={nodes}
                outlineCodes={outlineCodes}
                autoAggregate={autoAggregate}
                onAddChild={onAddChild}
                onEditNode={onEditNode}
                onDeleteNode={onDeleteNode}
                onToggleCollapse={onToggleCollapse}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// VERTICAL TREE NODE (TOP TO BOTTOM)
// ==========================================
interface NodeRendererProps {
  node: WBSNode;
  nodes: Record<string, WBSNode>;
  outlineCodes: Record<string, string>;
  autoAggregate: boolean;
  onAddChild: (parentId: string) => void;
  onEditNode: (node: WBSNode) => void;
  onDeleteNode: (id: string) => void;
  onToggleCollapse: (id: string) => void;
}

const VerticalTreeNode: React.FC<NodeRendererProps> = ({
  node,
  nodes,
  outlineCodes,
  autoAggregate,
  onAddChild,
  onEditNode,
  onDeleteNode,
  onToggleCollapse,
}) => {
  const children = getSortedChildren(nodes, node.id);
  const hasChildren = children.length > 0;
  const isCollapsed = node.collapsed;
  const depth = getNodeDepth(nodes, node.id);

  // Compute aggregated costs, effort, and progress
  const agg = getNodeAggregates(nodes, node.id, autoAggregate);
  const palette = COLOR_PALETTES[node.color] || COLOR_PALETTES.slate;
  const isRoot = depth === 0;

  // Root highlighting styles
  const cardClassName = isRoot
    ? `relative w-full bg-white/95 dark:bg-slate-900/90 border-2 border-indigo-400 dark:border-indigo-500/70 rounded-2xl p-5 shadow-lg ring-4 ring-indigo-500/10 dark:ring-indigo-400/10 group-hover:shadow-2xl transition-all duration-300 ${palette.glow} scale-[1.03]`
    : `relative w-full ${palette.bg} border ${palette.border} rounded-xl p-4 shadow-sm ring-1 ring-white/5 dark:ring-white/10 group-hover:shadow-md transition-all duration-300 ${palette.glow}`;

  const ribbonHeight = isRoot ? 'h-1.5' : 'h-1';

  return (
    <div className={`flex flex-col ${isRoot ? 'items-center' : 'items-start'} relative w-full`}>
      {/* Node Card */}
      <div className={`relative group ${isRoot ? 'w-72 md:w-80' : 'w-64 md:w-72'}`}>
        <motion.div
          layoutId={`card-${node.id}`}
          className={cardClassName}
        >
          {/* Top category ribbon / indicator bar */}
          <div className={`absolute top-0 left-0 right-0 ${ribbonHeight} rounded-t-xl ${palette.accent}`} />

          {/* Card Header: Outline and Icon */}
          <div className="flex items-start justify-between gap-1.5 mb-2.5 mt-1">
            <div className="flex items-center space-x-1.5">
              {isRoot ? (
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md border border-indigo-300 dark:border-indigo-800 bg-indigo-500 text-white dark:bg-indigo-600 shadow-sm uppercase tracking-wider font-mono">
                  ★ RAÍZ
                </span>
              ) : (
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border font-bold ${palette.badge}`}>
                  {outlineCodes[node.id] || '0'}
                </span>
              )}
              <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Nivel {depth}
              </span>
            </div>
            <div className={`p-1.5 rounded-lg ${
              isRoot
                ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 ring-2 ring-indigo-500/20'
                : `bg-slate-50 dark:bg-slate-800 ${palette.text}`
            }`}>
              <LucideIcon name={node.icon} size={isRoot ? 17 : 15} />
            </div>
          </div>

          {/* Title and Description */}
          <h4 className={`font-bold text-slate-800 dark:text-slate-100 tracking-tight line-clamp-1 ${isRoot ? 'text-base' : 'text-sm'}`}>
            {node.title}
          </h4>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-2 mt-1 h-8 leading-normal">
            {node.description || 'Sin descripción.'}
          </p>

          {/* Financials and Effort */}
          <div className="grid grid-cols-2 gap-2 border-t border-b border-slate-150/60 dark:border-slate-800/60 py-2 my-2.5 text-[11px]">
            <div className="space-y-0.5">
              <span className="text-slate-400 block font-medium">Presupuesto</span>
              <span className="font-bold text-slate-700 dark:text-slate-200 font-mono">
                {agg.budget > 0 ? `$${agg.budget.toLocaleString()}` : '—'}
              </span>
            </div>
            <div className="space-y-0.5 border-l border-slate-150/60 dark:border-slate-800/60 pl-2">
              <span className="text-slate-400 block font-medium">Esfuerzo</span>
              <span className="font-bold text-slate-700 dark:text-slate-200 font-mono">
                {agg.hours > 0 ? `${agg.hours}h` : '—'}
              </span>
            </div>
          </div>

          {/* Owner and Progress Footer */}
          <div className="flex items-center justify-between mt-2.5">
            <div className="flex items-center space-x-1 max-w-[60%]">
              <User size={11} className="text-slate-400 shrink-0" />
              <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate" title={node.owner}>
                {node.owner || 'Sin asignar'}
              </span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-12 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${palette.accent}`}
                  style={{ width: `${agg.progress}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 font-mono">
                {agg.progress}%
              </span>
            </div>
          </div>

          {/* Floating actions menu on hover */}
          <div className="absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 p-0.5 rounded-lg shadow-md z-20">
            <button
              onClick={() => onAddChild(node.id)}
              className="p-1 rounded text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
              title="Añadir Subtarea (Hijo)"
            >
              <Plus size={13} />
            </button>
            <button
              onClick={() => onEditNode(node)}
              className="p-1 rounded text-slate-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
              title="Editar"
            >
              <Edit2 size={13} />
            </button>
            {node.parentId !== null && (
              <button
                onClick={() => onDeleteNode(node.id)}
                className="p-1 rounded text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                title="Eliminar"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Collapse button on card bottom edge */}
        {hasChildren && (
          <button
            onClick={() => onToggleCollapse(node.id)}
            className={`absolute bottom-[-10px] ${
              isRoot || depth === 1 ? 'left-1/2 -translate-x-1/2' : 'left-3 -translate-x-1/2'
            } h-5 w-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-400 hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer`}
          >
            {isCollapsed ? <ChevronRight size={11} /> : <ChevronDown size={11} />}
          </button>
        )}
      </div>

      {/* Children elements (Vertical Branch Line Connections) */}
      {hasChildren && !isCollapsed && (
        isRoot ? (
          // Level 0 -> Level 1: Traditional horizontal branching so top level is spread out
          <div className="flex flex-col items-center mt-6 w-full">
            {/* Vertical stem line down from parent */}
            <div className="w-px h-6 bg-slate-200 dark:bg-white/15" />

            {/* Horizontal branch line connecting children */}
            <div className="flex justify-center w-full relative gap-8 lg:gap-12 flex-wrap md:flex-nowrap">
              {children.map((child, index) => {
                const isFirst = index === 0;
                const isLast = index === children.length - 1;

                return (
                  <div key={child.id} className="relative flex flex-col items-center px-4">
                    {/* Horizontal bridge bars */}
                    {!isFirst && (
                      <div className="absolute top-0 left-0 right-1/2 h-px bg-slate-200 dark:bg-white/15" />
                    )}
                    {!isLast && (
                      <div className="absolute top-0 left-1/2 right-0 h-px bg-slate-200 dark:bg-white/15" />
                    )}

                    {/* Vertical stem down to child card */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-200 dark:bg-white/15" />

                    {/* Subnode Tree */}
                    <div className="pt-6 w-full">
                      <VerticalTreeNode
                        node={child}
                        nodes={nodes}
                        outlineCodes={outlineCodes}
                        autoAggregate={autoAggregate}
                        onAddChild={onAddChild}
                        onEditNode={onEditNode}
                        onDeleteNode={onDeleteNode}
                        onToggleCollapse={onToggleCollapse}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Level 1 and below: Stacked vertically directly below parent card (left-aligned spine)
          <div className="w-64 md:w-72 mt-6 relative flex flex-col gap-6">
            {/* Stem line coming down from parent card bottom center/left to meet the children's vertical spine */}
            {depth === 1 ? (
              // For Level 1 parent: orthogonal connecting line starting from the center, going left to the spine, then down.
              <>
                {/* 1. Vertical stem from center bottom of the Level 1 card going 12px down */}
                <div className="absolute left-1/2 top-[-24px] h-3 w-px bg-slate-200 dark:bg-white/15" />
                {/* 2. Horizontal bridge going left from the center to the left spine position (left-3 which is 12px) */}
                <div className="absolute left-3 right-1/2 top-[-12px] h-px bg-slate-200 dark:bg-white/15" />
                {/* 3. Vertical drop from that corner down to meet the spine at top-0 */}
                <div className="absolute left-3 top-[-12px] h-3 w-px bg-slate-200 dark:bg-white/15" />
              </>
            ) : (
              // For Level 2+ parents: straight drop down from left-3 (aligned with its parent card's left-aligned spine)
              <div className="absolute left-3 top-[-24px] h-6 w-px bg-slate-200 dark:bg-white/15" />
            )}

            {children.map((child, index) => {
              const isLast = index === children.length - 1;

              return (
                <div key={child.id} className="relative w-full flex flex-col items-start">
                  {/* Vertical spine connector line */}
                  {isLast ? (
                    // Last child: stop the vertical line at the horizontal stub height (24px)
                    <div className="absolute left-3 top-0 h-[24px] w-px bg-slate-200 dark:bg-white/15" />
                  ) : (
                    // Other children: continuous vertical line through the full item height
                    <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/15" />
                  )}

                  {/* Horizontal stub connecting spine to the child's card left edge */}
                  <div className="absolute left-3 w-3 h-px bg-slate-200 dark:bg-white/15 top-[24px]" />

                  {/* Recursion - Subnode Tree shifted pl-6 to let card sit perfectly aligned to stub */}
                  <div className="w-full pl-6">
                    <VerticalTreeNode
                      node={child}
                      nodes={nodes}
                      outlineCodes={outlineCodes}
                      autoAggregate={autoAggregate}
                      onAddChild={onAddChild}
                      onEditNode={onEditNode}
                      onDeleteNode={onDeleteNode}
                      onToggleCollapse={onToggleCollapse}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

// ==========================================
// HORIZONTAL TREE NODE (LEFT TO RIGHT)
// ==========================================
const HorizontalTreeNode: React.FC<NodeRendererProps> = ({
  node,
  nodes,
  outlineCodes,
  autoAggregate,
  onAddChild,
  onEditNode,
  onDeleteNode,
  onToggleCollapse,
}) => {
  const children = getSortedChildren(nodes, node.id);
  const hasChildren = children.length > 0;
  const isCollapsed = node.collapsed;
  const depth = getNodeDepth(nodes, node.id);

  const agg = getNodeAggregates(nodes, node.id, autoAggregate);
  const palette = COLOR_PALETTES[node.color] || COLOR_PALETTES.slate;

  return (
    <div className="flex items-center relative">
      {/* Node Card */}
      <div className="relative group flex items-center">
        <motion.div
          layoutId={`card-${node.id}`}
          className={`relative w-64 md:w-72 ${palette.bg} border ${palette.border} rounded-xl p-4 shadow-sm ring-1 ring-white/5 dark:ring-white/10 group-hover:shadow-md transition-all duration-300 ${palette.glow}`}
        >
          {/* Top indicator bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl ${palette.accent}`} />

          {/* Card Header */}
          <div className="flex items-start justify-between gap-1.5 mb-2 mt-1">
            <div className="flex items-center space-x-1.5">
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border font-bold ${palette.badge}`}>
                {outlineCodes[node.id] || '0'}
              </span>
              <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                Nivel {depth}
              </span>
            </div>
            <div className={`p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 ${palette.text}`}>
              <LucideIcon name={node.icon} size={15} />
            </div>
          </div>

          {/* Title and Description */}
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight line-clamp-1">
            {node.title}
          </h4>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-2 mt-1 h-8 leading-normal">
            {node.description || 'Sin descripción.'}
          </p>

          {/* Financials & Effort */}
          <div className="grid grid-cols-2 gap-2 border-t border-b border-slate-50 dark:border-slate-800/60 py-2 my-2 text-[11px]">
            <div className="space-y-0.5">
              <span className="text-slate-400 block font-medium">Presupuesto</span>
              <span className="font-bold text-slate-700 dark:text-slate-200 font-mono">
                {agg.budget > 0 ? `$${agg.budget.toLocaleString()}` : '—'}
              </span>
            </div>
            <div className="space-y-0.5 border-l border-slate-50 dark:border-slate-800/60 pl-2">
              <span className="text-slate-400 block font-medium">Esfuerzo</span>
              <span className="font-bold text-slate-700 dark:text-slate-200 font-mono">
                {agg.hours > 0 ? `${agg.hours}h` : '—'}
              </span>
            </div>
          </div>

          {/* Owner and Progress */}
          <div className="flex items-center justify-between mt-2.5">
            <div className="flex items-center space-x-1 max-w-[60%]">
              <User size={11} className="text-slate-400 shrink-0" />
              <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate" title={node.owner}>
                {node.owner || 'Sin asignar'}
              </span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-12 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${palette.accent}`}
                  style={{ width: `${agg.progress}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 font-mono">
                {agg.progress}%
              </span>
            </div>
          </div>

          {/* Floating Action Menu */}
          <div className="absolute top-2 right-2 flex items-center space-x-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-0.5 rounded-lg shadow-md z-25">
            <button
              onClick={() => onAddChild(node.id)}
              className="p-1 rounded text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
              title="Añadir Subtarea"
            >
              <Plus size={13} />
            </button>
            <button
              onClick={() => onEditNode(node)}
              className="p-1 rounded text-slate-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
              title="Editar"
            >
              <Edit2 size={13} />
            </button>
            {node.parentId !== null && (
              <button
                onClick={() => onDeleteNode(node.id)}
                className="p-1 rounded text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                title="Eliminar"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Collapse button on card right edge */}
        {hasChildren && (
          <button
            onClick={() => onToggleCollapse(node.id)}
            className="absolute right-[-11px] h-5 w-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-400 hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
          >
            {isCollapsed ? <ChevronRight size={11} /> : <ChevronDown size={11} className="rotate-[-90deg]" />}
          </button>
        )}
      </div>

      {/* Children elements (Horizontal Branch Connection lines) */}
      {hasChildren && !isCollapsed && (
        <div className="flex items-center relative">
          {/* Horizontal line out from parent card right side */}
          <div className="w-6 h-px bg-slate-200 dark:bg-white/15" />

          {/* Children block */}
          <div className="flex flex-col gap-5 pl-4 relative border-l border-slate-200 dark:border-white/15 py-4">
            {children.map((child, index) => {
              const isFirst = index === 0;
              const isLast = index === children.length - 1;

              return (
                <div key={child.id} className="relative flex items-center">
                  {/* Small horizontal stub to the child card */}
                  <div className="absolute left-[-16px] w-4 h-px bg-slate-200 dark:bg-white/15" />

                  {/* Recursion */}
                  <HorizontalTreeNode
                    node={child}
                    nodes={nodes}
                    outlineCodes={outlineCodes}
                    autoAggregate={autoAggregate}
                    onAddChild={onAddChild}
                    onEditNode={onEditNode}
                    onDeleteNode={onDeleteNode}
                    onToggleCollapse={onToggleCollapse}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
