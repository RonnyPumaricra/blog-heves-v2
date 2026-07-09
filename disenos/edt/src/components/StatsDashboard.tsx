import React from 'react';
import { ProjectStats } from '../types';
import { LucideIcon } from './LucideIcon';
import { motion } from 'motion/react';

interface StatsDashboardProps {
  stats: ProjectStats;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ stats }) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const statCards = [
    {
      id: 'budget',
      title: 'Presupuesto Total',
      value: formatCurrency(stats.totalBudget),
      desc: 'Suma agregada de entregables',
      icon: 'LineChart',
      color: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      id: 'hours',
      title: 'Esfuerzo Estimado',
      value: `${stats.totalHours} hrs`,
      desc: 'Horas de trabajo estimadas',
      icon: 'Calendar',
      color: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      id: 'progress',
      title: 'Progreso Promedio',
      value: `${stats.averageProgress}%`,
      desc: 'Ponderado según horas',
      icon: 'CheckSquare',
      color: 'text-violet-500 dark:text-violet-400',
      bgColor: 'bg-violet-500/10',
      isProgress: true,
    },
    {
      id: 'nodes',
      title: 'Elementos EDT',
      value: stats.totalNodes,
      desc: 'Nodos en la jerarquía',
      icon: 'Layers',
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {statCards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="relative bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/10 dark:ring-1 dark:ring-white/5 rounded-2xl p-5 shadow-sm overflow-hidden flex items-center justify-between group hover:shadow-md transition-all duration-300"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-850 opacity-20 blur-xl group-hover:scale-125 transition-transform duration-500" />

          <div className="space-y-1 relative z-10">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
              {card.title}
            </span>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                {card.value}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
              {card.desc}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center relative z-10">
            {card.isProgress ? (
              <div className="relative w-14 h-14 flex items-center justify-center">
                {/* SVG Radial progress bar */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    className="stroke-slate-100 dark:stroke-slate-800"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r="22"
                    className="stroke-violet-500 dark:stroke-violet-400"
                    strokeWidth="3.5"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 22}
                    initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 22 - (2 * Math.PI * 22 * stats.averageProgress) / 100,
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-[11px] font-bold text-violet-600 dark:text-violet-400">
                  {stats.averageProgress}%
                </span>
              </div>
            ) : (
              <div className={`p-3.5 rounded-xl ${card.bgColor} ${card.color} transition-transform duration-300 group-hover:scale-110`}>
                <LucideIcon name={card.icon} size={22} />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
