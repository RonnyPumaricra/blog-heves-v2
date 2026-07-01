import { Timer } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface PertRow {
  id: string;
  actividad: string;
  o: number;
  m: number;
  p: number;
  calculo: string;
  esperada: string;
  desviacion: string;
}

const rows: PertRow[] = [
  { id: 'A1', actividad: 'Despliegue Sandbox',    o: 1, m: 2, p: 3, calculo: '(1 + 8 + 3)/6',  esperada: '2.0', desviacion: '0.33' },
  { id: 'A2', actividad: 'Instalación GLPI',       o: 1, m: 2, p: 3, calculo: '(1 + 8 + 3)/6',  esperada: '2.0', desviacion: '0.33' },
  { id: 'A3', actividad: 'Parametrización SLA',    o: 2, m: 4, p: 6, calculo: '(2 + 16 + 6)/6', esperada: '4.0', desviacion: '0.67' },
  { id: 'A4', actividad: 'Conectividad LDAP',      o: 2, m: 3, p: 4, calculo: '(2 + 12 + 4)/6', esperada: '3.0', desviacion: '0.33' },
  { id: 'A5', actividad: 'Interfaz QR',            o: 2, m: 3, p: 4, calculo: '(2 + 12 + 4)/6', esperada: '3.0', desviacion: '0.33' },
  { id: 'A6', actividad: 'Pruebas QA',             o: 1, m: 2, p: 3, calculo: '(1 + 8 + 3)/6',  esperada: '2.0', desviacion: '0.33' },
  { id: 'A7', actividad: 'Capacitación UTI',       o: 2, m: 2, p: 2, calculo: '(2 + 8 + 2)/6',  esperada: '2.0', desviacion: '0.00' },
  { id: 'A8', actividad: 'Despliegue Piloto',      o: 1, m: 1, p: 1, calculo: '(1 + 4 + 1)/6',  esperada: '1.0', desviacion: '0.00' },
];

export default function CronogramaPertPage() {
  return (
    <>
      <PageTitle
        icon={Timer}
        iconBgColor="bg-orange-600"
        title="Estimación PERT"
        subtitle="Gestión del Cronograma · PMBOK v6"
        description="Estimación de la duración de cada actividad utilizando el método PERT (tres valores: optimista, más probable y pesimista) para calcular la duración esperada y la desviación estándar de cada tarea de la primera iteración."
      />

      <div className="mb-6 rounded-lg border border-orange-200 bg-orange-100 p-4 font-mono text-[15px] text-orange-700 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300">
        <div>Duración Esperada (E) = (O + 4M + P) / 6</div>
        <div>Desviación Estándar (σ) = (P - O) / 6</div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">ID</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground">Actividad</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Opt (O)</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">M.Prob (M)</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Pes (P)</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Cálculo (O + 4M + P) / 6</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Esperada (E)</th>
                <th className="border-b border-border bg-muted px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-foreground">Desv. (σ)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-muted/40">
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">
                    <span className="font-mono font-bold text-orange-600">{r.id}</span>
                  </td>
                  <td className="border-b border-border px-3 py-3 text-left text-sm text-foreground">{r.actividad}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.o}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.m}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.p}</td>
                  <td className="border-b border-border px-3 py-3 text-center font-mono text-xs text-muted-foreground">{r.calculo}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm font-bold text-foreground">{r.esperada}</td>
                  <td className="border-b border-border px-3 py-3 text-center text-sm text-foreground">{r.desviacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
