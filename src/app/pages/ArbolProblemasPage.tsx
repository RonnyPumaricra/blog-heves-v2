import { AlertTriangle } from 'lucide-react';
import { PageTitle } from '../components/sections';
import ArbolProblemasTree from '../components/ArbolProblemasTree';

export default function ArbolProblemasPage() {
  return (
    <div className="max-w-6xl">
      <PageTitle
        icon={AlertTriangle}
        iconBgColor="bg-red-600"
        title="Árbol de Problemas"
        subtitle="Enfoque de Marco Lógico"
        description="Identificación y análisis de las causas y efectos del problema central."
      />

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-gray-100 border border-gray-400 inline-block" />
            Causas Indirectas
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-blue-100 border border-blue-500 inline-block" />
            Causas Directas
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-100 border border-amber-600 inline-block" />
            Problema Central
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-orange-100 border border-orange-600 inline-block" />
            Efectos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-red-200 border border-red-600 inline-block" />
            Efecto Final
          </span>
        </div>
        <ArbolProblemasTree />
      </div>
    </div>
  );
}
