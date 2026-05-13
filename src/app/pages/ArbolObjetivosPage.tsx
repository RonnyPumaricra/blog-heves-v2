import { Target } from 'lucide-react';
import { PageTitle } from '../components/sections';
import ArbolObjetivosTree from '../components/ArbolObjetivosTree';

export default function ArbolObjetivosPage() {
  return (
    <div className="max-w-6xl">
      <PageTitle
        icon={Target}
        iconBgColor="bg-green-600"
        title="Árbol de Objetivos"
        subtitle="Enfoque de Marco Lógico"
        description="Transformación del problema central en objetivos y medios para alcanzarlos."
      />

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-gray-100 border border-gray-400 inline-block" />
            Medios Finales
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-indigo-100 border border-indigo-500 inline-block" />
            Medios Directos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-sky-100 border border-sky-600 inline-block" />
            Objetivo Central
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-green-100 border border-green-500 inline-block" />
            Fines
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-200 border border-emerald-600 inline-block" />
            Fin Final
          </span>
        </div>
        <ArbolObjetivosTree />
      </div>
    </div>
  );
}
