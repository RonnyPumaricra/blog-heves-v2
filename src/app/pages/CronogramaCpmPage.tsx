import { Route } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface CpmRow {
  id: string;
  actividad: string;
  e: number;
  es: number;
  ef: number;
  ls: number;
  lf: number;
  holgura: number;
  critica: boolean;
}

const rows: CpmRow[] = [
  { id: 'A1', actividad: 'Despliegue Sandbox',   e: 2, es: 0,  ef: 2,  ls: 0,  lf: 2,  holgura: 0, critica: true  },
  { id: 'A2', actividad: 'Instalación GLPI',      e: 2, es: 2,  ef: 4,  ls: 2,  lf: 4,  holgura: 0, critica: true  },
  { id: 'A3', actividad: 'Parametrización SLA',   e: 4, es: 4,  ef: 8,  ls: 4,  lf: 8,  holgura: 0, critica: true  },
  { id: 'A4', actividad: 'Conectividad LDAP',     e: 3, es: 4,  ef: 7,  ls: 5,  lf: 8,  holgura: 1, critica: false },
  { id: 'A5', actividad: 'Interfaz QR',           e: 3, es: 4,  ef: 7,  ls: 5,  lf: 8,  holgura: 1, critica: false },
  { id: 'A6', actividad: 'Pruebas QA',            e: 2, es: 8,  ef: 10, ls: 8,  lf: 10, holgura: 0, critica: true  },
  { id: 'A7', actividad: 'Capacitación UTI',      e: 2, es: 10, ef: 12, ls: 10, lf: 12, holgura: 0, critica: true  },
  { id: 'A8', actividad: 'Despliegue Piloto',     e: 1, es: 12, ef: 13, ls: 12, lf: 13, holgura: 0, critica: true  },
];

export default function CronogramaCpmPage() {
  return (
    <>
      <PageTitle
        icon={Route}
        iconBgColor="bg-orange-600"
        title="Cronograma con Método de Ruta Crítica (CPM)"
        subtitle="Gestión del Cronograma · PMBOK v6"
        description="Cronograma del proyecto elaborado con el método de la ruta crítica. Se calculan los tiempos tempranos y tardíos de inicio y finalización, la holgura de cada actividad y se identifican las que forman parte de la ruta crítica."
      />

      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">ID</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground">Actividad</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">E (días)</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">ES</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">EF</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">LS</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">LF</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Holgura</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Ruta Crítica</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-muted/40">
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.id}</td>
                  <td className="border-b border-border px-3 py-3 text-left text-sm text-foreground">{r.actividad}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.e}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.es}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.ef}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.ls}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.lf}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.holgura}</td>
                  <td
                    className={`border-b border-border px-3 py-3 text-center text-sm font-bold ${
                      r.critica ? 'text-red-600 dark:text-red-400' : 'text-foreground'
                    }`}
                  >
                    {r.critica ? 'SÍ' : 'NO'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-5 text-sm text-foreground">
        <strong>Ruta Crítica:</strong> A1 → A2 → A3 → A6 → A7 → A8.
        <br />
        Cualquier retraso en estas actividades impactará directamente en la fecha de cierre de la iteración (Día 13). Las actividades A4 y A5 poseen holgura, permitiendo flexibilidad técnica sin afectar el hito final.
      </p>
    </>
  );
}
