import { BarChart3 } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface GanttActivity {
  label: string;
  start: number;
  duration: number;
}

const activities: GanttActivity[] = [
  { label: '1.1 Firma y Autorización del Proyecto',                     start: 1,  duration: 1 },
  { label: '1.2 Análisis y Registro de Interesados del HEVES',          start: 2,  duration: 2 },
  { label: '1.3 Desarrollo de la Planificación Integral',               start: 4,  duration: 3 },
  { label: '2.1 Levantamiento Empírico de Fallos en Sistemas Críticos', start: 7,  duration: 4 },
  { label: '2.2 Estructuración Causa-Efecto Institucional',             start: 11, duration: 2 },
  { label: '2.3 Modelado de Procesos de Soporte ITIL v3',               start: 13, duration: 3 },
  { label: '2.4 Evaluación y Selección Tecnológica',                    start: 16, duration: 2 },
  { label: '3.1 Despliegue del Servidor Aislado Sandbox',               start: 18, duration: 2 },
  { label: '3.2 Parametrización del Core GLPI v10 y Matriz SLA',        start: 20, duration: 4 },
  { label: '3.3 Conectividad e Importación de Usuarios Asistenciales',  start: 24, duration: 2 },
  { label: '3.4 Desarrollo de Interfaz de Reporte Rápido QR',           start: 24, duration: 3 },
  { label: '4.1 Estrategia de Mitigación de Resistencia Asistencial',   start: 27, duration: 2 },
  { label: '4.2 Formación en Estándares de Gestión de Servicios',       start: 29, duration: 3 },
  { label: '4.3 Pruebas de Aceptación de Software (QA)',                start: 32, duration: 3 },
  { label: '5.1 Consolidación del Conocimiento Adquirido',              start: 35, duration: 2 },
  { label: '5.2 Sustentación Final ante la Alta Dirección',             start: 37, duration: 1 },
  { label: '5.3 Formalización del Cierre Institucional',                start: 38, duration: 1 },
];

const totalDays = 38;

export default function CronogramaGanttPage() {
  return (
    <>
      <PageTitle
        icon={BarChart3}
        iconBgColor="bg-orange-600"
        title="Diagrama de Gantt"
        subtitle="Proyecto ITSM HEVES · Gestión del Cronograma"
        description="Representación gráfica del cronograma detallado mostrando la duración y secuencia de las 17 actividades finales (38 días hábiles)."
      />

      <div className="overflow-x-auto rounded-lg border border-border bg-card p-5 shadow-sm">
        <div
          className="grid gap-px bg-border"
          style={{ gridTemplateColumns: `340px repeat(${totalDays}, 30px) minmax(100px, 1fr)` }}
        >
          {/* Header row */}
          <div className="bg-muted px-3 py-2.5 text-[12px] font-bold text-foreground">Actividad</div>
          {Array.from({ length: totalDays }, (_, i) => (
            <div key={`h-${i}`} className="bg-muted py-2.5 text-center text-[11px] font-bold text-foreground">
              {i + 1}
            </div>
          ))}
          <div className="bg-[#e5e5e5] dark:bg-gray-600" />

          {/* Activity rows */}
          {activities.map((a, rowIdx) => (
            <div key={a.label} className="contents">
              <div
                className="overflow-hidden bg-card px-3 py-2.5 text-[12px] text-foreground"
                title={a.label}
                style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
              >
                {a.label}
              </div>
              {Array.from({ length: totalDays }, (_, i) => {
                const day = i + 1;
                const isBarStart = day === a.start;
                const isInBar = day >= a.start && day < a.start + a.duration;

                if (isBarStart) {
                  return (
                    <div
                      key={`c-${rowIdx}-${i}`}
                      className="bg-card px-0.5 py-2.5"
                      style={{ gridColumn: `span ${a.duration}` }}
                    >
                      <div className="rounded bg-orange-600 px-1 py-0.5 text-center text-[10px] font-bold text-white shadow-sm">
                        {a.duration}d
                      </div>
                    </div>
                  );
                }

                if (isInBar) return null;

                return <div key={`c-${rowIdx}-${i}`} className="bg-card" />;
              })}
              <div className="bg-[#e5e5e5] dark:bg-gray-600" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Nota: El diagrama de Gantt ilustra la programación de los 38 días hábiles correspondientes al alcance completo del proyecto, iniciando el 17 de agosto de 2026.
      </p>
    </>
  );
}
