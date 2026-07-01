import { BarChart3 } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface GanttActivity {
  label: string;
  start: number; // día de inicio (1-indexado)
  duration: number; // duración en días
}

const activities: GanttActivity[] = [
  { label: 'A1. Despliegue Sandbox',   start: 1,  duration: 2 },
  { label: 'A2. Instalación GLPI',      start: 3,  duration: 2 },
  { label: 'A3. Matriz SLA',            start: 5,  duration: 4 },
  { label: 'A4. Conectividad LDAP',     start: 5,  duration: 3 },
  { label: 'A5. Interfaz QR',           start: 5,  duration: 3 },
  { label: 'A6. Pruebas QA',            start: 9,  duration: 2 },
  { label: 'A7. Capacitación UTI',      start: 11, duration: 2 },
  { label: 'A8. Despliegue Piloto',     start: 13, duration: 1 },
];

const totalDays = 14;

export default function CronogramaGanttPage() {
  return (
    <>
      <PageTitle
        icon={BarChart3}
        iconBgColor="bg-orange-600"
        title="Diagrama de Gantt"
        subtitle="Gestión del Cronograma · PMBOK v6"
        description="Representación gráfica del cronograma de la primera iteración donde se visualiza la duración y secuencia temporal de las 8 actividades técnicas del proyecto."
      />

      <div className="overflow-x-auto rounded-lg border border-border bg-card p-5 shadow-sm">
        <div
          className="grid gap-px bg-border"
          style={{ gridTemplateColumns: `200px repeat(${totalDays}, 40px)` }}
        >
          {/* Header row */}
          <div className="bg-muted px-2.5 py-2.5 text-center text-[11px] font-bold text-foreground">Actividad</div>
          {Array.from({ length: totalDays }, (_, i) => (
            <div key={`h-${i}`} className="bg-muted px-2.5 py-2.5 text-center text-[11px] font-bold text-foreground">
              {i + 1}
            </div>
          ))}

          {/* Activity rows */}
          {activities.map((a, rowIdx) => (
            <div key={a.label} className="contents">
              <div className="bg-card px-2.5 py-2.5 text-[11px] text-foreground">{a.label}</div>
              {Array.from({ length: totalDays }, (_, i) => {
                const day = i + 1;
                const isBarStart = day === a.start;
                const isInBar = day >= a.start && day < a.start + a.duration;

                if (isBarStart) {
                  return (
                    <div
                      key={`c-${rowIdx}-${i}`}
                      className="bg-card px-1 py-2.5"
                      style={{ gridColumn: `span ${a.duration}` }}
                    >
                      <div className="rounded bg-orange-600 px-1 py-0.5 text-center text-[10px] font-semibold text-white">
                        {a.duration}d
                      </div>
                    </div>
                  );
                }

                if (isInBar) return null; // celda cubierta por el span

                return <div key={`c-${rowIdx}-${i}`} className="bg-card" />;
              })}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Nota: El diagrama de Gantt muestra la programación de las actividades técnicas (A1–A8) en días hábiles, iniciando el 29 de junio de 2026.
      </p>
    </>
  );
}
