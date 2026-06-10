import { useState } from 'react';
import { Cloud, AlertTriangle, Calculator, ShieldAlert } from 'lucide-react';

export default function AnalisisAlt2Section() {
  const [agentes, setAgentes]       = useState(12);
  const [costoAgente, setCosto]     = useState(30);
  const [tc, setTc]                 = useState(3.80);

  const mensualPen = agentes * costoAgente * tc;
  const anualPen   = mensualPen * 12;
  const year1      = anualPen + 2500;
  const tco5       = anualPen * 4 + year1;

  const fmt = (n: number) =>
    'S/. ' + Math.round(n).toLocaleString('es-PE') + '.00';

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Evaluación de Solución Externa</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
            Alternativa 2: Jira Service Management Cloud (SaaS)
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Análisis de mesa de ayuda en la nube con licenciamiento recurrente en dólares.</p>
        </div>
        <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-200 dark:border-amber-800 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Solución de Alto Riesgo
        </span>
      </div>

      {/* 4 metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Inversión Estimada',     value: fmt(anualPen),  sub: 'Suscripción Recurrente Anual',        subColor: 'text-red-600 dark:text-red-400' },
          { label: 'Soberanía de Datos',     value: 'Nube Pública', sub: 'Riesgo Ley N° 29733',                 subColor: 'text-red-600 dark:text-red-400' },
          { label: 'Velocidad Despliegue',   value: 'Muy Alta',     sub: 'SaaS Operativo en Días',              subColor: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Dependencia de Enlace',  value: 'Absoluta',     sub: 'Caídas bloquean UCI / Emerg.',        subColor: 'text-red-600 dark:text-red-400' },
        ].map(c => (
          <div key={c.label} className="bg-card border border-border p-5 rounded-2xl">
            <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-wider block">{c.label}</span>
            <span className="text-2xl font-black text-foreground mt-1 block">{c.value}</span>
            <span className={`text-xs font-semibold mt-1 block ${c.subColor}`}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Evaluación y obstáculos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-5">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Cloud className="w-5 h-5 text-amber-600" />
            Evaluación y Obstáculos de Adopción
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            La implementación de <strong className="text-foreground">Jira Service Management</strong> ofrece una alta velocidad de despliegue y una interfaz sumamente madura. No obstante, al analizar esta propuesta bajo la realidad presupuestal y de gobernanza del <strong className="text-foreground">HEVES</strong>, se identifican serios obstáculos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/30 space-y-2">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">Ventajas Técnicas</span>
              <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                <li>Cero mantenimiento local de servidores o bases de datos por la UTI.</li>
                <li>Actualizaciones de seguridad y parches automatizados por Atlassian.</li>
                <li>Integración nativa con apps móviles de soporte técnico.</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/30 space-y-2">
              <span className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider block">Barreras Críticas</span>
              <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4">
                <li><strong className="text-foreground">Gasto Recurrente:</strong> Vulnerable a retrasos de renovación por presupuesto del MINSA.</li>
                <li><strong className="text-foreground">Privacidad de Datos:</strong> Envío de historiales de incidentes de software médico fuera del país.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/30 space-y-4">
          <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Burocracia de Compras (PAC)
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Según la Oficina de Planeamiento y Presupuesto (OPP), la contratación de licencias SaaS anuales obliga al hospital a incluir la partida en el <strong className="text-foreground">Plan Anual de Contrataciones (PAC)</strong> con meses de antelación, imposibilitando una adopción ágil ante contingencias del servicio de TI.
          </p>
          <div className="pt-2 border-t border-amber-200 dark:border-amber-900/50">
            <span className="text-[10px] text-amber-800 dark:text-amber-400 font-bold block uppercase tracking-wider">Afectación de Normativa</span>
            <span className="text-xs text-muted-foreground">Conflicto parcial con el principio de uso preferente de tecnologías libres en el Estado.</span>
          </div>
        </div>
      </div>

      {/* Simulador TCO */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Calculator className="w-5 h-5 text-sky-600" />
            Simulador de TCO a 5 Años (Suscripción Cloud)
          </h3>
          <p className="text-xs text-muted-foreground mt-1">Calcule la proyección económica variando la cantidad de agentes de la UTI y la fluctuación cambiaria.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {[
              { label: 'Agentes de Soporte (Técnicos UTI)', display: `${agentes} Agentes`, value: agentes, min: 5,    max: 35,  step: 1,    setter: (v: number) => setAgentes(v) },
              { label: 'Tarifa Mensual por Agente (USD)',   display: `$${costoAgente}`,    value: costoAgente, min: 15, max: 60,  step: 5,    setter: (v: number) => setCosto(v) },
              { label: 'Tipo de Cambio Promedio (S/./USD)', display: `${tc.toFixed(2)} S/.`, value: tc, min: 3.50, max: 4.20, step: 0.05, setter: (v: number) => setTc(v) },
            ].map(s => (
              <div key={s.label} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                  <span>{s.label}</span>
                  <span className="text-sky-600 dark:text-sky-400 font-bold">{s.display}</span>
                </div>
                <input
                  type="range" min={s.min} max={s.max} step={s.step} value={s.value}
                  onChange={e => s.setter(Number(e.target.value))}
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
              </div>
            ))}
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-xl flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <div>
                <span className="text-slate-400 text-[10px] uppercase font-black tracking-widest block">Inversión TCO Proyectada (5 Años)</span>
                <div className="text-3xl font-black mt-2 text-amber-400">{fmt(tco5)}</div>
                <span className="text-[10px] text-slate-400 mt-1 block">Cálculo en base a licencias y tipo de cambio.</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-3">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Costo Anual Promedio</span>
                  <span className="font-bold text-slate-200 text-sm">{fmt(anualPen)}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Inversión Año 1 (Setup)</span>
                  <span className="font-bold text-slate-200 text-sm">{fmt(year1)}</span>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-slate-500 italic mt-4 leading-normal">
              *Asume un costo de configuración inicial de S/. 2,500 en el primer año. La Alternativa 1 (GLPI) representa una reducción del 100% en costos periódicos de licencias frente a estos valores.
            </p>
          </div>
        </div>
      </div>

      {/* Matriz de riesgos PMBOK v6 */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            Matriz de Riesgos y Mitigación (PMBOK v6)
          </h3>
          <p className="text-xs text-muted-foreground mt-1">Estrategias de control y contención ante vulnerabilidades de un despliegue SaaS en el hospital.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border text-muted-foreground font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Riesgo / Vulnerabilidad</th>
                <th className="py-3 px-4">Impacto Crítico</th>
                <th className="py-3 px-4 text-center">Score</th>
                <th className="py-3 px-4">Estrategia de Mitigación PMBOK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">Interrupción de servicio por caídas de internet externo en áreas de salud</td>
                <td className="py-3 px-4 text-red-600 dark:text-red-400 font-medium">Bloqueo de atenciones de TI en UCI y Emergencia</td>
                <td className="py-3 px-4 text-center font-extrabold text-red-600 dark:text-red-400">8.0 / 10</td>
                <td className="py-3 px-4 text-muted-foreground">Contratación de un enlace de fibra redundante con un segundo proveedor de telecomunicaciones local.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">Fallas de renovación de licencias anuales por OPP/Logística</td>
                <td className="py-3 px-4 text-orange-600 dark:text-orange-400 font-medium">Suspensión de accesos y pérdida de trazabilidad</td>
                <td className="py-3 px-4 text-center font-extrabold text-orange-600 dark:text-orange-400">7.5 / 10</td>
                <td className="py-3 px-4 text-muted-foreground">Establecer cláusulas de servicio multianual aprobadas formalmente por la Jefatura de la Oficina de Administración del HEVES.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-semibold text-foreground">Observaciones del OCI por fuga y alojamiento externo de datos</td>
                <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400 font-medium">Sanciones legales por incumplimiento de Ley N° 29733</td>
                <td className="py-3 px-4 text-center font-extrabold text-yellow-600 dark:text-yellow-400">6.0 / 10</td>
                <td className="py-3 px-4 text-muted-foreground">Coordinar con Atlassian políticas de alojamiento geográfico que cumplan con las directivas de seguridad del MINSA.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
