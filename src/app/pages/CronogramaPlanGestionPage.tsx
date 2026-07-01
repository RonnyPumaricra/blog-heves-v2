import { CalendarDays } from 'lucide-react';
import { PageTitle } from '../components/sections';

const numberBadge = (n: number) => (
  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600 dark:bg-orange-950 dark:text-orange-400">
    {n}
  </span>
);

export default function CronogramaPlanGestionPage() {
  return (
    <>
      <PageTitle
        icon={CalendarDays}
        iconBgColor="bg-orange-600"
        title="Plan de Gestión del Cronograma"
        subtitle="Gestión del Tiempo · PMBOK v6"
        description="Documento que establece los criterios, herramientas y procedimientos para planificar, desarrollar, gestionar y controlar el cronograma del proyecto Gestión de Servicios Informáticos (GLPI) en el Hospital de Emergencias de Villa El Salvador (HEVES)."
      />

      {/* 1. Enfoque y Modelo */}
      <div className="mb-5 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-5 py-3.5 text-[15px] font-bold text-foreground">
          {numberBadge(1)} Enfoque Metodológico y Modelo de Programación
        </div>
        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Ciclo de Vida del Proyecto
            </div>
            <div className="text-sm text-foreground">
              <strong>Predictivo (Cascada).</strong> Requerido por el marco normativo de Gobierno Digital para asegurar la aprobación de la línea base antes de la ejecución.
            </div>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Modelo y Herramientas
            </div>
            <div className="text-sm text-foreground">
              Método de la Ruta Crítica (CPM) y diagramación por precedencia (PDM). Las actividades se desprenden directamente de los paquetes de trabajo de la EDT aprobada.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Unidades y Fechas Clave */}
      <div className="mb-5 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-5 py-3.5 text-[15px] font-bold text-foreground">
          {numberBadge(2)} Nivel de Exactitud, Unidades de Medida y Fechas Clave
        </div>
        <div className="grid gap-5 p-5 md:grid-cols-2">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Parámetros de Tiempo
            </div>
            <ul className="mt-2 space-y-2 text-sm text-foreground">
              <li className="relative pl-4 before:absolute before:left-0 before:font-bold before:text-orange-600 before:content-['•']">
                <strong>Unidad de Medida:</strong> Días Hábiles (Lunes a Viernes).
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:font-bold before:text-orange-600 before:content-['•']">
                <strong>Jornada Laboral:</strong> 8 horas diarias, alineado al turno administrativo de la UTI.
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:font-bold before:text-orange-600 before:content-['•']">
                <strong>Técnicas de Estimación:</strong> PERT (3 valores) y Juicio de Expertos.
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Inicio del Cronograma
            </div>
            <p className="mb-2 text-sm text-foreground">
              La ejecución de las actividades del proyecto (Día 1) iniciará oficialmente el:
            </p>
            <div className="rounded-md border border-orange-400 bg-orange-100 px-3 py-2.5 text-center text-sm font-bold text-orange-600 dark:border-orange-700 dark:bg-orange-950 dark:text-orange-400">
              Lunes 29 de junio de 2026
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mantenimiento */}
      <div className="mb-5 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-5 py-3.5 text-[15px] font-bold text-foreground">
          {numberBadge(3)} Mantenimiento del Modelo del Cronograma
        </div>
        <div className="p-5">
          <div className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Frecuencia y Procedimiento de Actualización
          </div>
          <div className="text-sm text-foreground">
            El estado de las actividades se actualizará semanalmente. El avance físico real se contrastará contra la Línea Base del Cronograma. Las modificaciones que afecten la fecha de finalización o la ruta crítica requerirán una Solicitud de Cambio formal.
          </div>
        </div>
      </div>

      {/* 4. Umbrales SPI */}
      <div className="mb-5 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-5 py-3.5 text-[15px] font-bold text-foreground">
          {numberBadge(4)} Umbrales de Control (Variación del SPI)
        </div>
        <div className="p-5">
          <p className="mb-4 text-sm text-muted-foreground">
            El control del tiempo se medirá mediante el Índice de Desempeño del Cronograma (SPI). Se establecen las siguientes reglas de semaforización:
          </p>
          <div className="grid grid-cols-1 gap-3 text-center md:grid-cols-3">
            <div className="rounded-md border border-green-300 bg-green-100 p-4 dark:border-green-800 dark:bg-green-950">
              <div className="mb-1 text-lg font-extrabold text-green-700 dark:text-green-400">SPI ≥ 0.95</div>
              <div className="text-xs text-foreground">
                <strong>Estado Normal</strong>
                <br />
                Avance conforme a lo planificado.
              </div>
            </div>
            <div className="rounded-md border border-amber-300 bg-amber-100 p-4 dark:border-amber-800 dark:bg-amber-950">
              <div className="mb-1 text-lg font-extrabold text-amber-700 dark:text-amber-400">0.85 – 0.94</div>
              <div className="text-xs text-foreground">
                <strong>Alerta Preventiva</strong>
                <br />
                Requiere plan de recuperación en la UTI.
              </div>
            </div>
            <div className="rounded-md border border-red-300 bg-red-100 p-4 dark:border-red-800 dark:bg-red-950">
              <div className="mb-1 text-lg font-extrabold text-red-700 dark:text-red-400">SPI &lt; 0.85</div>
              <div className="text-xs text-foreground">
                <strong>Desviación Crítica</strong>
                <br />
                Escalamiento a la Dirección del HEVES.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Medición y Reportes */}
      <div className="mb-5 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-5 py-3.5 text-[15px] font-bold text-foreground">
          {numberBadge(5)} Medición del Desempeño y Formatos de Reporte
        </div>
        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-border bg-muted px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Criterio
                  </th>
                  <th className="border-b border-border bg-muted px-3 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Descripción de la Regla
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-border px-3 py-3 align-top text-sm text-foreground">
                    <strong>Regla de Medición</strong>
                  </td>
                  <td className="border-b border-border px-3 py-3 align-top text-sm text-foreground">
                    Porcentaje físico completado para actividades de ejecución y regla 0/100 para entregables documentales.
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 align-top text-sm text-foreground">
                    <strong>Formatos de Informe</strong>
                  </td>
                  <td className="px-3 py-3 align-top text-sm text-foreground">
                    Informe quincenal que incluya el cálculo de desviaciones (SPI, SV) y el Diagrama de Gantt proyectado.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
