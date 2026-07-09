import { useState } from 'react';
import {
  ShieldCheck, Award, Check, User, Brain, Eye,
  ArrowRight, Lock, UserCheck, GitCommit,
} from 'lucide-react';

type ArtTab = 'persona' | 'empatia' | 'diamante';

const ART_TABS: { id: ArtTab; label: string; icon: React.ElementType }[] = [
  { id: 'persona',  label: 'Sponsor Persona',          icon: UserCheck },
  { id: 'empatia',  label: 'Mapa de Empatía',           icon: Brain     },
  { id: 'diamante', label: 'Doble Diamante Predictivo', icon: GitCommit },
];

export default function AnalisisAlt1Section() {
  const [artTab, setArtTab]         = useState<ArtTab>('persona');
  const [wDatos, setWDatos]         = useState(30);
  const [wCosto, setWCosto]         = useState(30);
  const [wNormativa, setWNormativa] = useState(40);

  const total = wDatos + wCosto + wNormativa;
  const score = ((10 * wDatos / total) + (10 * wCosto / total) + (9.5 * wNormativa / total)) * 10;

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Evaluación de Solución Recomendada</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
            Alternativa 1: GLPI On-Premise + ITIL v3 &amp; PMBOK v6
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Mesa de servicios soberana local para el proceso PS05 de TI del hospital.</p>
        </div>
        <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Solución Recomendada
        </span>
      </div>

      {/* 4 metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Inversión Licencias', value: 'S/. 0.00',    sub: 'Código abierto (GPL v3)',  subColor: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Soberanía de Datos',  value: '100% Local',  sub: 'Protección Ley N° 29733', subColor: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Marco de Procesos',   value: 'ITIL v3 Base', sub: 'Subproceso PS05.03',       subColor: 'text-muted-foreground' },
          { label: 'Implementación',      value: 'Predictivo',  sub: 'PMBOK v6 — 10 Semanas',   subColor: 'text-muted-foreground' },
        ].map(c => (
          <div key={c.label} className="bg-card border border-border p-5 rounded-2xl">
            <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-wider block">{c.label}</span>
            <span className="text-2xl font-black text-foreground mt-1 block">{c.value}</span>
            <span className={`text-xs font-semibold mt-1 block ${c.subColor}`}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Justificación estratégica */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            Justificación Estratégica
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            La implementación local de la plataforma <strong className="text-foreground">GLPI</strong> dentro del pool de servidores virtualizados de la UTI responde directamente a la necesidad crítica de resolver de forma trazable las incidencias tecnológicas de sistemas asistenciales como <strong className="text-foreground">SISGalenPlus</strong> e <strong className="text-foreground">INFINITT</strong> en Emergencia y UCI.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Al operar físicamente bajo la custodia perimetral del hospital, esta solución elimina por completo cualquier contingencia de fuga de datos clínicos a nubes extranjeras, blindando legalmente al hospital ante las estrictas normativas nacionales sobre privacidad de datos en salud.
          </p>
        </div>
        <div className="bg-muted/40 dark:bg-slate-900/30 p-6 rounded-2xl border border-border space-y-4">
          <h4 className="font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-sky-600" />
            Alineación Estatal
          </h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">D.L. N° 1412:</strong> Cumple con la Ley de Gobierno Digital al asegurar una trazabilidad integral.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">NTP-ISO/IEC 12207:</strong> Estandarización de procesos de soporte al ciclo de vida del software público.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Artefactos con tabs internos */}
      <div className="bg-card border border-border p-6 rounded-2xl space-y-5">
        <div className="border-b border-border pb-4">
          <h3 className="text-lg font-bold text-foreground">Artefactos de la Fase de Inicio (PMBOK v6)</h3>
          <p className="text-xs text-muted-foreground mt-1">Haga clic en las pestañas para visualizar los artefactos de diseño construidos para la Jefatura de la UTI.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {ART_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setArtTab(t.id)}
              className={`px-3 py-2 text-xs font-bold rounded-lg flex items-center gap-2 transition-all ${
                artTab === t.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <t.icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Pestaña Sponsor Persona */}
        {artTab === 'persona' && (
          <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-sky-600/20 text-sky-400 rounded-xl border border-sky-500/20">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base">Jefatura de la Unidad de TI (Sponsor Operativo)</h4>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Líder del Proceso PS05 — Soporte TI HEVES</p>
                </div>
              </div>
              <div className="text-right text-xs">
                <span className="text-slate-400 block font-semibold">Reporta a:</span>
                <span className="font-bold text-sky-400">Dirección Ejecutiva</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
              <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                <p className="italic text-slate-300 font-medium leading-relaxed">
                  "Mi equipo técnico está operando como bomberos. Todo el hospital nos pide soporte por WhatsApp, no tenemos cómo medir nuestro rendimiento (SLAs) ni cómo demostrarle a la Dirección Ejecutiva el valor de nuestro trabajo ante las auditorías del OCI."
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="text-slate-400 uppercase font-black tracking-widest text-[10px]">Dolores Operativos</h5>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-300 leading-relaxed">
                  <li><strong>Soporte Informal:</strong> Los jefes de otras áreas exigen soporte vía canales de mensajería personal.</li>
                  <li><strong>Cero Métricas (SLAs):</strong> Imposibilidad de medir tiempos de atención en incidentes críticos.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña Mapa de Empatía */}
        {artTab === 'empatia' && (
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-800">
                <h5 className="text-xs font-bold text-sky-400 flex items-center gap-1.5 mb-3">
                  <Brain className="w-4 h-4" /> ¿Qué piensa y siente?
                </h5>
                <div
                  className="p-3 rounded text-[11px] font-bold leading-tight shadow-md"
                  style={{ backgroundColor: '#fef08a', color: '#713f12', borderLeft: '4px solid #facc15', transform: 'rotate(-1deg)', fontFamily: "'Caveat', cursive" }}
                >
                  Necesito formalizar el subproceso PS05.03 de Gestión de Incidentes para auditar las atenciones técnico-médicas.
                </div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-lg border border-slate-800">
                <h5 className="text-xs font-bold text-purple-400 flex items-center gap-1.5 mb-3">
                  <Eye className="w-4 h-4" /> ¿Qué ve?
                </h5>
                <div
                  className="p-3 rounded text-[11px] font-bold leading-tight shadow-md"
                  style={{ backgroundColor: '#e0f2fe', color: '#0369a1', borderLeft: '4px solid #38bdf8', transform: 'rotate(1deg)', fontFamily: "'Caveat', cursive" }}
                >
                  Médicos reportando fallos críticos por WhatsApp personal, evadiendo canales formales de TI.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pestaña Doble Diamante */}
        {artTab === 'diamante' && (
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="bg-sky-900/20 border border-sky-500/30 text-sky-300 p-4 rounded-lg w-full md:w-44 text-xs">
                <span className="block text-[9px] font-black uppercase tracking-wider opacity-60 mb-1">Fase 1</span>
                <h5 className="font-bold">Diverger: Descubrir</h5>
                <p className="text-[10px] text-slate-400 mt-1">Análisis empírico de interesados y fallas de SISGalenPlus.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 hidden md:block shrink-0" />
              <div className="bg-indigo-900/20 border border-indigo-500/30 text-indigo-300 p-4 rounded-lg w-full md:w-44 text-xs">
                <span className="block text-[9px] font-black uppercase tracking-wider opacity-60 mb-1">Fase 2</span>
                <h5 className="font-bold">Converger: Definir</h5>
                <p className="text-[10px] text-slate-400 mt-1">Firma de Project Charter. Alcance acotado de incidentes.</p>
              </div>
              <div className="p-2.5 bg-slate-800 border-2 border-slate-700 text-yellow-400 rounded-full shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="bg-emerald-900/20 border border-emerald-500/30 text-emerald-300 p-4 rounded-lg w-full md:w-44 text-xs">
                <span className="block text-[9px] font-black uppercase tracking-wider opacity-60 mb-1">Fases 3 y 4</span>
                <h5 className="font-bold">Ejecutar: Desarrollar</h5>
                <p className="text-[10px] text-slate-400 mt-1">Flujos TO-BE, configuración GLPI y cierre formal.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Calculadora de viabilidad */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Calculadora de Viabilidad Técnica</h3>
          <p className="text-xs text-muted-foreground mt-1">Calcule la viabilidad ponderada variando los pesos según las prioridades del hospital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { label: 'Soberanía de Datos Clínicos',      value: wDatos,     setter: setWDatos },
              { label: 'Costo Inicial de Licenciamiento',  value: wCosto,     setter: setWCosto },
              { label: 'Alineación Normativa (OCI/MINSA)', value: wNormativa, setter: setWNormativa },
            ].map(s => {
              const pct = Math.round((s.value / total) * 100);
              return (
                <div key={s.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                    <span>{s.label}</span>
                    <span className="text-sky-600 dark:text-sky-400 font-bold">{pct}%</span>
                  </div>
                  <input
                    type="range" min="10" max="50" step="5" value={s.value}
                    onChange={e => s.setter(Number(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-xl flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-black tracking-widest block">Score de Viabilidad Ponderado</span>
              <div className="text-3xl font-black mt-2 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                {score.toFixed(1)} / 100
              </div>
            </div>
            <p className="text-xs text-slate-400 border-t border-slate-800 pt-3 mt-4">
              El motor local de GLPI On-Premise obtiene puntuaciones excelentes en costos de licencias (10/10) y cumplimiento regulatorio del estado peruano (9.5/10).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
