/**
 * Types and Interfaces for EDT (Estructura de Desglose de Trabajo) / WBS (Work Breakdown Structure)
 */

export interface WBSNode {
  id: string;
  parentId: string | null;
  title: string;
  description: string;
  budget: number; // in USD or custom currency
  hours: number;  // estimated hours
  progress: number; // 0 to 100
  color: NodeColor;
  owner: string; // assigned team member
  icon: string; // string identifier matching Lucide icons
  collapsed: boolean;
  order: number; // order among siblings
}

export type NodeColor = 
  | 'emerald' 
  | 'blue' 
  | 'indigo' 
  | 'violet' 
  | 'rose' 
  | 'amber' 
  | 'orange' 
  | 'sky'
  | 'slate';

export interface ProjectStats {
  totalNodes: number;
  totalBudget: number;
  totalHours: number;
  averageProgress: number;
  maxDepth: number;
  nodesPerLevel: Record<number, number>;
}

export type LayoutMode = 
  | 'horizontal'  // Left-to-right tree diagram
  | 'vertical'    // Top-to-bottom standard organizational chart
  | 'columns'     // Kanban-like or level-by-level column view
  | 'outline';    // High-productivity list outline with nesting

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  nodes: Record<string, WBSNode>;
}

export interface WBSNodeConfig {
  id: string;
  label: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export const COLOR_PALETTES: Record<NodeColor, {
  name: string;
  bg: string;
  border: string;
  text: string;
  accent: string;
  hover: string;
  badge: string;
  glow: string;
}> = {
  emerald: {
    name: 'Esmeralda',
    bg: 'bg-emerald-50/80 dark:bg-emerald-950/20 backdrop-blur-md',
    border: 'border-emerald-200 dark:border-emerald-500/35',
    text: 'text-emerald-800 dark:text-emerald-300',
    accent: 'bg-emerald-500',
    hover: 'hover:bg-emerald-100/80 dark:hover:bg-emerald-950/40',
    badge: 'bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30',
    glow: 'glow-emerald',
  },
  blue: {
    name: 'Azul Marino',
    bg: 'bg-blue-50/80 dark:bg-blue-950/20 backdrop-blur-md',
    border: 'border-blue-200 dark:border-blue-500/35',
    text: 'text-blue-800 dark:text-blue-300',
    accent: 'bg-blue-500',
    hover: 'hover:bg-blue-100/80 dark:hover:bg-blue-950/40',
    badge: 'bg-blue-500/10 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30',
    glow: 'glow-blue',
  },
  indigo: {
    name: 'Índigo',
    bg: 'bg-indigo-50/80 dark:bg-indigo-950/20 backdrop-blur-md',
    border: 'border-indigo-200 dark:border-indigo-500/35',
    text: 'text-indigo-800 dark:text-indigo-300',
    accent: 'bg-indigo-500',
    hover: 'hover:bg-indigo-100/80 dark:hover:bg-indigo-950/40',
    badge: 'bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30',
    glow: 'glow-indigo',
  },
  violet: {
    name: 'Violeta',
    bg: 'bg-violet-50/80 dark:bg-violet-950/20 backdrop-blur-md',
    border: 'border-violet-200 dark:border-violet-500/35',
    text: 'text-violet-800 dark:text-violet-300',
    accent: 'bg-violet-500',
    hover: 'hover:bg-violet-100/80 dark:hover:bg-violet-950/40',
    badge: 'bg-violet-500/10 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30',
    glow: 'glow-violet',
  },
  rose: {
    name: 'Rosa',
    bg: 'bg-rose-50/80 dark:bg-rose-950/20 backdrop-blur-md',
    border: 'border-rose-200 dark:border-rose-500/35',
    text: 'text-rose-800 dark:text-rose-300',
    accent: 'bg-rose-500',
    hover: 'hover:bg-rose-100/80 dark:hover:bg-rose-950/40',
    badge: 'bg-rose-500/10 text-rose-800 dark:bg-rose-50/20 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30',
    glow: 'glow-rose',
  },
  amber: {
    name: 'Ámbar',
    bg: 'bg-amber-50/80 dark:bg-amber-950/20 backdrop-blur-md',
    border: 'border-amber-200 dark:border-amber-500/35',
    text: 'text-amber-800 dark:text-amber-300',
    accent: 'bg-amber-500',
    hover: 'hover:bg-amber-100/80 dark:hover:bg-amber-950/40',
    badge: 'bg-amber-500/10 text-amber-800 dark:bg-amber-50/20 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30',
    glow: 'glow-amber',
  },
  orange: {
    name: 'Naranja',
    bg: 'bg-orange-50/80 dark:bg-orange-950/20 backdrop-blur-md',
    border: 'border-orange-200 dark:border-orange-500/35',
    text: 'text-orange-800 dark:text-orange-300',
    accent: 'bg-orange-500',
    hover: 'hover:bg-orange-100/80 dark:hover:bg-orange-950/40',
    badge: 'bg-orange-500/10 text-orange-800 dark:bg-orange-50/20 dark:text-orange-300 border border-orange-200 dark:border-orange-500/30',
    glow: 'glow-orange',
  },
  sky: {
    name: 'Cielo',
    bg: 'bg-sky-50/80 dark:bg-sky-950/20 backdrop-blur-md',
    border: 'border-sky-200 dark:border-sky-500/35',
    text: 'text-sky-800 dark:text-sky-300',
    accent: 'bg-sky-500',
    hover: 'hover:bg-sky-100/80 dark:hover:bg-sky-950/40',
    badge: 'bg-sky-500/10 text-sky-800 dark:bg-sky-50/20 dark:text-sky-300 border border-sky-200 dark:border-sky-500/30',
    glow: 'glow-sky',
  },
  slate: {
    name: 'Pizarra',
    bg: 'bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-md',
    border: 'border-slate-200 dark:border-slate-800/65',
    text: 'text-slate-800 dark:text-slate-300',
    accent: 'bg-slate-500',
    hover: 'hover:bg-slate-100/80 dark:hover:bg-slate-800/80',
    badge: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50',
    glow: 'shadow-sm',
  }
};
