import React from 'react';
import { X, HelpCircle, BookOpen, Layers, LineChart, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HelpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpOverlay: React.FC<HelpOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white/85 dark:bg-slate-950/60 backdrop-blur-2xl border border-slate-200/60 dark:border-white/10 dark:ring-1 dark:ring-white/5 shadow-2xl z-10 p-6 space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-sans tracking-tight">
                    Manual y Guía Metodológica EDT / WBS
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Aprende los estándares de la Estructura de Desglose de Trabajo
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto no-scrollbar pr-1">
              {/* What is EDT */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <HelpCircle size={16} className="text-indigo-500" />
                  ¿Qué es una EDT / WBS?
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  La <strong>Estructura de Desglose de Trabajo (EDT)</strong> —o <em>Work Breakdown Structure (WBS)</em> en inglés— es una descomposición jerárquica orientada al entregable del trabajo total que ejecutará el equipo del proyecto. Es la piedra angular de la planificación del proyecto, según el <strong>PMBOK del PMI</strong>.
                </p>
              </div>

              {/* Hierarchy Levels */}
              <div className="space-y-2.5 border-t border-slate-50 dark:border-slate-800/60 pt-4">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <Layers size={16} className="text-indigo-500" />
                  Niveles Estándar de la EDT
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">Nivel 0: El Proyecto Completo</span>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">El entregable de más alto nivel (ej. "Sistema CRM Corporativo" o "Construcción Casa").</p>
                  </div>
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">Nivel 1: Fases / Entregables Principales</span>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">Las fases del ciclo de vida u objetivos macro que agrupan los sub-entregables (ej. "Requerimientos", "Cimientos").</p>
                  </div>
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-850/60">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block">Nivel 2 y 3: Paquetes de Trabajo</span>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">Entregables tangibles asignables a personas o equipos. Tienen presupuesto, esfuerzo y progreso medible.</p>
                  </div>
                </div>
              </div>

              {/* Calculations Roll-up */}
              <div className="space-y-2 border-t border-slate-50 dark:border-slate-800/60 pt-4">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <LineChart size={16} className="text-indigo-500" />
                  Agregación y Cálculos Automáticos
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  La aplicación implementa un motor de cálculo jerárquico. Si un nodo tiene hijos (subtareas):
                </p>
                <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400 pl-2 space-y-1">
                  <li><strong>Presupuesto:</strong> Se auto-calcula sumando los presupuestos de todas sus subtareas.</li>
                  <li><strong>Esfuerzo:</strong> Se auto-calcula sumando las horas estimadas de sus subtareas.</li>
                  <li><strong>Progreso:</strong> Se calcula mediante un <em>promedio ponderado</em> en base a las horas de esfuerzo de cada subtarea, asegurando la precisión de avance real del proyecto.</li>
                </ul>
              </div>

              {/* Printing and Exporting */}
              <div className="space-y-2 border-t border-slate-50 dark:border-slate-800/60 pt-4">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                  <Printer size={16} className="text-indigo-500" />
                  Exportación e Impresión
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  Puedes exportar el diagrama completo como un archivo <strong>JSON estructurado</strong> para guardarlo en tu computadora o cargarlo más tarde. También puedes imprimirlo directamente o guardarlo como <strong>PDF</strong> utilizando la opción de imprimir (Ctrl+P / Cmd+P) optimizada para hojas horizontales A4/Carta.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end border-t border-slate-100 dark:border-slate-800 pt-4">
              <button
                onClick={onClose}
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 shadow-sm transition-all cursor-pointer"
              >
                Entendido, ¡gracias!
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
