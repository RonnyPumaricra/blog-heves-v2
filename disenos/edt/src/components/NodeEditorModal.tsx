import React, { useState, useEffect } from 'react';
import { WBSNode, NodeColor, COLOR_PALETTES } from '../types';
import { AVAILABLE_ICONS, LucideIcon } from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Info } from 'lucide-react';

interface NodeEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (nodeData: Omit<WBSNode, 'id' | 'collapsed' | 'order'>) => void;
  node: WBSNode | null; // Null if adding a new node
  parentId: string | null; // For adding a new node
  hasChildren: boolean; // If editing a node, whether it has children (affects aggregations)
  autoAggregate: boolean;
}

export const NodeEditorModal: React.FC<NodeEditorModalProps> = ({
  isOpen,
  onClose,
  onSave,
  node,
  parentId,
  hasChildren,
  autoAggregate,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);
  const [hours, setHours] = useState(0);
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState<NodeColor>('blue');
  const [owner, setOwner] = useState('');
  const [icon, setIcon] = useState('Folder');

  // Icon search state
  const [iconSearch, setIconSearch] = useState('');

  // Synchronize state when the active node changes
  useEffect(() => {
    if (isOpen) {
      if (node) {
        setTitle(node.title || '');
        setDescription(node.description || '');
        setBudget(node.budget || 0);
        setHours(node.hours || 0);
        setProgress(node.progress || 0);
        setColor(node.color || 'blue');
        setOwner(node.owner || '');
        setIcon(node.icon || 'Folder');
      } else {
        // Default values for new nodes
        setTitle('');
        setDescription('');
        setBudget(0);
        setHours(0);
        setProgress(0);
        setColor(parentId ? 'indigo' : 'slate');
        setOwner('');
        setIcon(parentId ? 'FileText' : 'Briefcase');
      }
      setIconSearch('');
    }
  }, [isOpen, node, parentId]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      parentId: node ? node.parentId : parentId,
      title: title.trim(),
      description: description.trim(),
      budget: Number(budget) || 0,
      hours: Number(hours) || 0,
      progress: Number(progress) || 0,
      color,
      owner: owner.trim(),
      icon,
    });
    onClose();
  };

  const filteredIcons = AVAILABLE_ICONS.filter(
    (item) =>
      item.label.toLowerCase().includes(iconSearch.toLowerCase()) ||
      item.id.toLowerCase().includes(iconSearch.toLowerCase())
  );

  const isAggregated = node && hasChildren && autoAggregate;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal container */}
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white/85 dark:bg-slate-950/60 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 dark:ring-1 dark:ring-white/5 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 p-5">
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-sans tracking-tight">
                  {node ? 'Editar Elemento EDT' : 'Añadir Nuevo Elemento EDT'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {node
                    ? `Modifica los detalles del entregable: ${node.title}`
                    : parentId
                    ? 'Crea una subtarea o entregable bajo el nodo seleccionado'
                    : 'Crea un nodo principal en la jerarquía del proyecto'}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-5 max-h-[75vh] overflow-y-auto no-scrollbar">
              {/* Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Título del Elemento <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej. Diseño de Prototipos de UI"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:outline-none dark:focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Descripción / Notas
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe el alcance de este paquete de trabajo..."
                    rows={2}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:outline-none dark:focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Responsable / Propietario
                  </label>
                  <input
                    type="text"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="Nombre del encargado..."
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:outline-none dark:focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Paleta de Color
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(Object.keys(COLOR_PALETTES) as NodeColor[]).map((c) => {
                      const palette = COLOR_PALETTES[c];
                      const isSelected = color === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setColor(c)}
                          className={`group relative flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                            isSelected
                              ? 'border-indigo-500 scale-110 ring-2 ring-indigo-500/10'
                              : 'border-slate-200 dark:border-slate-800 hover:scale-105'
                          }`}
                          title={palette.name}
                        >
                          <span className={`h-5 w-5 rounded-full ${palette.accent}`} />
                          {isSelected && (
                            <span className="absolute text-[10px] text-white font-bold">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Aggregation Alert if applicable */}
              {isAggregated && (
                <div className="flex gap-2.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-100 dark:border-indigo-950/30 p-3 text-xs text-indigo-800 dark:text-indigo-400">
                  <Info size={16} className="shrink-0 mt-0.5 text-indigo-500" />
                  <p>
                    <strong>Cálculo Automático Activo:</strong> Este nodo tiene subtareas. Su presupuesto, esfuerzo y progreso se calculan de manera agregada a partir de sus sub-elementos.
                  </p>
                </div>
              )}

              {/* Budget, Effort & Progress */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Presupuesto (USD)
                  </label>
                  <input
                    type="number"
                    min="0"
                    disabled={isAggregated}
                    value={budget}
                    onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:outline-none disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-400 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Esfuerzo (Horas)
                  </label>
                  <input
                    type="number"
                    min="0"
                    disabled={isAggregated}
                    value={hours}
                    onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:outline-none disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-400 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Progreso (%)
                    </label>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-100 font-mono">
                      {progress}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 h-9">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      disabled={isAggregated}
                      value={progress}
                      onChange={(e) => setProgress(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Icon Selector Grid */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Icono Representativo ({icon})
                  </label>
                  <div className="relative">
                    <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Buscar icono..."
                      value={iconSearch}
                      onChange={(e) => setIconSearch(e.target.value)}
                      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pl-8 pr-3 py-1.5 text-xs text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:outline-none transition-colors w-full sm:w-48"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-36 overflow-y-auto p-1.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850">
                  {filteredIcons.map((item) => {
                    const isSelected = icon === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setIcon(item.id)}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center transition-all ${
                          isSelected
                            ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-600 dark:text-indigo-400 scale-105 shadow-sm'
                            : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                        title={item.label}
                      >
                        <LucideIcon name={item.id} size={18} />
                        <span className="text-[9px] mt-1 truncate max-w-full text-slate-500">
                          {item.id}
                        </span>
                      </button>
                    );
                  })}
                  {filteredIcons.length === 0 && (
                    <div className="col-span-full py-4 text-center text-xs text-slate-400">
                      No se encontraron iconos.
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 shadow-sm shadow-indigo-600/10 active:scale-[0.98] transition-all"
                >
                  {node ? 'Guardar Cambios' : 'Crear Elemento'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
