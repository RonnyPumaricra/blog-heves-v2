import { useState } from 'react';
import {
  Target, Navigation, Award, Crosshair, Layers, Wrench,
  TableProperties, LayoutGrid, CreditCard, BookOpen,
  Activity, FileCheck2, ShieldAlert, LineChart,
  Check, X, AlertCircle,
} from 'lucide-react';
import { PageTitle } from '../components/sections';

type MmlRow = 'fin' | 'proposito' | 'componentes' | 'actividades';
type View   = 'grid' | 'cards';

const LEVELS: { id: MmlRow; label: string; level: number; textColor: string; hoverBorder: string; icon: React.ElementType }[] = [
  { id: 'fin',         label: 'Fin de Impacto',        level: 1, textColor: 'text-sky-400',     hoverBorder: 'hover:border-sky-400/50',     icon: Award     },
  { id: 'proposito',   label: 'Propósito Central',     level: 2, textColor: 'text-indigo-400',  hoverBorder: 'hover:border-indigo-400/50',  icon: Crosshair },
  { id: 'componentes', label: 'Componentes (Outputs)', level: 3, textColor: 'text-emerald-400', hoverBorder: 'hover:border-emerald-400/50', icon: Layers    },
  { id: 'actividades', label: 'Actividades de Campo',  level: 4, textColor: 'text-amber-400',   hoverBorder: 'hover:border-amber-400/50',   icon: Wrench    },
];

export default function MatrizMarcoLogicoPage() {
  const [view,       setView]       = useState<View>('grid');
  const [focused,    setFocused]    = useState<MmlRow | null>(null);
  const [mttr,       setMttr]       = useState(90);
  const [adoption,   setAdoption]   = useState(85);

  const percentReduction = ((120 - mttr) / 120) * 100;
  const mttrPassed       = percentReduction >= 20;
  const adoptionPassed   = adoption >= 80;
  const health           = mttrPassed && adoptionPassed ? 'ok' : mttrPassed || adoptionPassed ? 'partial' : 'danger';

  const rowCls = (id: MmlRow) =>
    focused === id
      ? 'bg-sky-50 dark:bg-sky-900/20 shadow-inner transition-all duration-300'
      : 'transition-all duration-300';

  const cell = 'hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 align-top';

  return (
    <div className="w-full space-y-8">
      <PageTitle
        icon={Target}
        iconBgColor="bg-teal-600"
        title="Matriz de Marco Lógico (MML)"
        subtitle="Enfoque de Marco Lógico"
        description="Planificación estructurada de objetivos, metas e indicadores para el soporte de servicios en el HEVES."
      />

      {/* Alineación Estratégica */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-sky-400" />
            <h2 className="font-bold text-sm uppercase tracking-wider text-sky-300">Alineación Estratégica del Marco Lógico</h2>
          </div>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider hidden sm:block">Haga clic en un nivel para enfocarlo</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Nuestra <strong className="text-white">Matriz de Marco Lógico</strong> traduce de forma directa el{' '}
          <strong className="text-white">Árbol de Problemas y el Árbol de Objetivos</strong> del hospital en una estructura formal de gestión.
          Cada nivel de la matriz ataca una causa específica identificada en los sistemas de soporte médico (
          <strong className="text-white">SISGalenPlus</strong> e <strong className="text-white">INFINITT</strong>) en Emergencia y UCI.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {LEVELS.map(lv => (
            <button
              key={lv.id}
              onClick={() => { setFocused(lv.id); setView('grid'); }}
              className={`text-left p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group ${lv.hoverBorder}`}
            >
              <span className={`text-[9px] uppercase font-bold block group-hover:translate-x-1 transition-transform ${lv.textColor}`}>
                Nivel {lv.level}
              </span>
              <span className={`text-xs font-semibold block mt-1 flex items-center gap-1 ${lv.textColor}`}>
                <lv.icon className="w-3.5 h-3.5" />
                {lv.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* La Matriz */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <TableProperties className="w-5 h-5 text-sky-600" />
              Estructura Analítica de la MML
            </h3>
            <p className="text-xs text-muted-foreground mt-1">Alineado con los estándares del marco PMBOK v6 para proyectos de transformación hospitalaria.</p>
          </div>
          <div className="bg-muted p-1 rounded-xl flex gap-1 self-start sm:self-center shrink-0">
            {(['grid', 'cards'] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                  view === v ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {v === 'grid' ? <><LayoutGrid className="w-3.5 h-3.5" /> Vista Tabla</> : <><CreditCard className="w-3.5 h-3.5" /> Vista Tarjetas</>}
              </button>
            ))}
          </div>
        </div>

        {/* Vista Tabla */}
        {view === 'grid' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-border text-muted-foreground font-bold uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/4"><div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Resumen Narrativo</div></th>
                  <th className="py-3 px-4 w-1/4"><div className="flex items-center gap-1.5"><Activity className="w-4 h-4" /> Indicadores Verificables</div></th>
                  <th className="py-3 px-4 w-1/4"><div className="flex items-center gap-1.5"><FileCheck2 className="w-4 h-4" /> Medios de Verificación</div></th>
                  <th className="py-3 px-4 w-1/4"><div className="flex items-center gap-1.5"><ShieldAlert className="w-4 h-4" /> Supuestos (Riesgos)</div></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">

                {/* FIN */}
                <tr className={rowCls('fin')}>
                  <td className={`py-5 px-4 ${cell}`}>
                    <span className="bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-max mb-3 border border-sky-100 dark:border-sky-800">
                      Nivel 1: FIN (Impacto)
                    </span>
                    <p className="text-foreground font-bold leading-relaxed text-sm">
                      Protección de la seguridad clínica mediante servicios de TI oportunos, minimizando el riesgo de sanciones por indisponibilidad tecnológica.
                    </p>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border">
                      Reducción del <strong className="text-foreground font-bold">100%</strong> de demoras críticas en la operatividad de los sistemas médicos en áreas de alta complejidad (UCI/Emergencia).
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border">
                      Informes semestrales emitidos por la Unidad de Gestión de la Calidad del HEVES y auditorías internas de control del OCI.
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-xl border border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-300">
                      Continuidad del marco normativo estatal de gestión por procesos en salud y asignación puntual de presupuesto por el MINSA.
                    </div>
                  </td>
                </tr>

                {/* PROPÓSITO */}
                <tr className={rowCls('proposito')}>
                  <td className={`py-5 px-4 ${cell}`}>
                    <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-max mb-3 border border-indigo-100 dark:border-indigo-800">
                      Nivel 2: PROPÓSITO
                    </span>
                    <p className="text-foreground font-bold leading-relaxed text-sm">
                      Garantizar la continuidad operativa y la rápida resolución de fallas tecnológicas en los sistemas críticos (SISGalenPlus, INFINITT).
                    </p>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border">
                      Reducción del tiempo promedio de resolución de incidentes (<strong className="text-foreground font-bold">MTTR</strong>) críticos en UCI/Emergencia en al menos un <strong className="text-foreground font-bold">20%</strong>.
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border">
                      Registro de transacciones histórico del Dashboard de incidentes integrado de la mesa de servicios GLPI local.
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-xl border border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-300">
                      El personal asistencial de UCI y Emergencia adopta de forma proactiva el nuevo canal de tickets (Códigos QR) en sus terminales.
                    </div>
                  </td>
                </tr>

                {/* COMPONENTES */}
                <tr className={rowCls('componentes')}>
                  <td className={`py-5 px-4 ${cell}`}>
                    <span className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-max mb-3 border border-emerald-100 dark:border-emerald-800">
                      Nivel 3: COMPONENTES
                    </span>
                    <div className="space-y-2">
                      <div className="p-2 bg-muted/40 rounded-lg text-[11px]"><strong className="text-foreground">C1:</strong> Proceso formal de incidentes (PS05.03) incorporado al Mapa de Procesos.</div>
                      <div className="p-2 bg-muted/40 rounded-lg text-[11px]"><strong className="text-foreground">C2:</strong> Plataforma GLPI On-Premise configurada y desplegada localmente.</div>
                      <div className="p-2 bg-muted/40 rounded-lg text-[11px]"><strong className="text-foreground">C3:</strong> Personal UTI y representantes asistenciales de UCI capacitados.</div>
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell} space-y-2`}>
                    <div className="bg-muted/40 p-2.5 rounded-xl border border-border text-[11px]"><strong>1.</strong> 100% de flujogramas aprobados por OPP y la Oficina de Administración.</div>
                    <div className="bg-muted/40 p-2.5 rounded-xl border border-border text-[11px]"><strong>2.</strong> Base de datos GLPI local con el 100% de categorías parametrizadas.</div>
                    <div className="bg-muted/40 p-2.5 rounded-xl border border-border text-[11px]"><strong>3.</strong> 100% de técnicos UTI y al menos un representante asistencial por turno acreditado.</div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell} space-y-2`}>
                    <div className="bg-muted/40 p-2.5 rounded-xl border border-border text-[11px]"><strong>1.</strong> Ficha de proceso PS05.03 aprobada formalmente mediante Resolución Directoral en el sistema institucional.</div>
                    <div className="bg-muted/40 p-2.5 rounded-xl border border-border text-[11px]"><strong>2.</strong> Acta de conformidad técnica firmada por la Jefa de la Unidad de Tecnologías.</div>
                    <div className="bg-muted/40 p-2.5 rounded-xl border border-border text-[11px]"><strong>3.</strong> Lista de asistencia firmada por los participantes y actas de aprobación del taller de software.</div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell} space-y-2`}>
                    <div className="bg-red-50 dark:bg-red-950/20 p-2.5 rounded-xl border border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-300 text-[11px]"><strong>1.</strong> Estabilidad directiva sin rotación de personal líder en la Oficina de Administración.</div>
                    <div className="bg-red-50 dark:bg-red-950/20 p-2.5 rounded-xl border border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-300 text-[11px]"><strong>2.</strong> Los servidores virtuales del HEVES mantienen la disponibilidad de red interna óptima.</div>
                    <div className="bg-red-50 dark:bg-red-950/20 p-2.5 rounded-xl border border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-300 text-[11px]"><strong>3.</strong> Disponibilidad horaria de médicos para capacitación sin interrumpir las guardias críticas.</div>
                  </td>
                </tr>

                {/* ACTIVIDADES */}
                <tr className={rowCls('actividades')}>
                  <td className={`py-5 px-4 ${cell}`}>
                    <span className="bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-max mb-3 border border-amber-100 dark:border-amber-800">
                      Nivel 4: ACTIVIDADES
                    </span>
                    <div className="space-y-2 text-[11px] text-muted-foreground">
                      <p><strong className="text-foreground">A1:</strong> Modelado AS-IS/TO-BE y fichas del proceso.</p>
                      <p><strong className="text-foreground">A2:</strong> Instalación de GLPI local y nivelación de SLAs.</p>
                      <p><strong className="text-foreground">A3:</strong> Impresión de códigos QR y talleres de simulación.</p>
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border">
                      <strong className="text-foreground font-semibold block mb-1">Presupuesto de Licencias: S/. 0.00</strong>
                      Uso de infraestructura del hospital y horas hombre académicas del equipo de la UNTELS.
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border">
                      Informes de progreso semanales visados por la Jefa de la UTI y el docente coordinador del proyecto de la UNTELS.
                    </div>
                  </td>
                  <td className={`py-5 px-4 text-muted-foreground leading-relaxed ${cell}`}>
                    <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-xl border border-red-100 dark:border-red-900/30 text-red-900 dark:text-red-300">
                      El equipo consultor mantiene la asignación de horas comprometidas para la transferencia tecnológica.
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        )}

        {/* Vista Tarjetas */}
        {view === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: 'fin', icon: Award, label: 'Nivel 1: Fin de Impacto', textColor: 'text-sky-600', hoverBorder: 'hover:border-sky-500',
                narrative: 'Garantizar la protección de la seguridad clínica a través de un soporte TI oportuno en sistemas de salud.',
                indicatorLabel: 'Indicador Principal',
                indicator: 'Reducción del 100% de demoras críticas por inactividad de software médico.',
              },
              {
                id: 'proposito', icon: Crosshair, label: 'Nivel 2: Propósito Central', textColor: 'text-indigo-600', hoverBorder: 'hover:border-indigo-500',
                narrative: 'Asegurar la continuidad operativa de plataformas de soporte (SISGalenPlus, INFINITT) en UCI y Emergencia.',
                indicatorLabel: 'Indicador Principal',
                indicator: 'Reducir el tiempo promedio de resolución de incidentes (MTTR) en al menos un 20% en 10 semanas.',
              },
              {
                id: 'componentes', icon: Layers, label: 'Nivel 3: Componentes (Outputs)', textColor: 'text-emerald-600', hoverBorder: 'hover:border-emerald-500',
                narrativeLabel: 'Entregables Principales',
                narrative: '• Proceso PS05.03 formalizado en Mapa de Procesos.\n• Mesa de ayuda GLPI configurada y adaptada localmente.\n• Personal de TI y asistenciales de UCI entrenados.',
                indicatorLabel: null, indicator: null,
              },
              {
                id: 'actividades', icon: Wrench, label: 'Nivel 4: Actividades e Insumos', textColor: 'text-amber-600', hoverBorder: 'hover:border-amber-500',
                narrative: null, indicatorLabel: 'Insumos y Costos',
                indicator: 'Diagnóstico, parametrización de SLAs en GLPI, etiquetado con códigos QR físicos y simulacros de incidentes. Presupuesto de licencias: S/. 0.00.',
              },
            ].map(card => (
              <div key={card.id} className={`bg-muted/40 border border-border p-5 rounded-2xl space-y-4 transition-all ${card.hoverBorder}`}>
                <div className={`flex items-center gap-1.5 border-b border-border pb-2 text-xs font-black uppercase ${card.textColor}`}>
                  <card.icon className="w-4 h-4" />
                  {card.label}
                </div>
                <div className="space-y-3">
                  {card.narrative && (
                    <div>
                      <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        {(card as { narrativeLabel?: string }).narrativeLabel ?? 'Resumen Narrativo'}
                      </h5>
                      <p className="text-sm font-bold text-foreground whitespace-pre-line mt-1">{card.narrative}</p>
                    </div>
                  )}
                  {card.indicator && (
                    <div>
                      <h5 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{card.indicatorLabel}</h5>
                      <p className="text-xs text-muted-foreground mt-1">{card.indicator}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Simulador de Indicadores */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-6">
        <div className="border-b border-border pb-4">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <LineChart className="w-5 h-5 text-sky-600 animate-pulse" />
            Simulador del Dashboard de Indicadores de GLPI (MML)
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Interactúa con las variables de soporte tecnológico de la UTI para simular cómo se actualiza automáticamente el cumplimiento de las metas e indicadores planificados en la matriz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sliders */}
          <div className="lg:col-span-5 space-y-6 bg-muted/40 p-5 rounded-xl border border-border">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border pb-2">Configuración de Variables</h4>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                <span>Tiempo de Resolución TO-BE (GLPI)</span>
                <span className="text-sky-600 dark:text-sky-400 font-bold">{mttr} min</span>
              </div>
              <input
                type="range" min="30" max="120" step="5" value={mttr}
                onChange={e => setMttr(Number(e.target.value))}
                className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Excelente (30 min)</span>
                <span>Histórico AS-IS (120 min)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                <span>Porcentaje de Adopción (Códigos QR)</span>
                <span className="text-sky-600 dark:text-sky-400 font-bold">{adoption}%</span>
              </div>
              <input
                type="range" min="10" max="100" step="5" value={adoption}
                onChange={e => setAdoption(Number(e.target.value))}
                className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Muy Bajo (10%)</span>
                <span>Uso Total (100%)</span>
              </div>
            </div>
          </div>

          {/* Dashboard Panel */}
          <div className="lg:col-span-7 bg-slate-900 text-white p-6 rounded-xl flex flex-col justify-between border border-slate-800 space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Panel de Monitoreo de Metas (MML v1.0)</span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* MTTR */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-bold text-sky-400 block">Indicador de Propósito (MTTR)</span>
                      <p className="text-xs font-bold text-slate-200 leading-tight">Reducción del MTTR (Meta: &ge; 20%)</p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 shrink-0 ${
                      mttrPassed ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'
                    }`}>
                      {mttrPassed ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                      {mttrPassed ? 'Cumplida' : 'No Cumplida'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${mttrPassed ? 'bg-emerald-400' : 'bg-red-400'}`}
                        style={{ width: `${Math.min(percentReduction, 100)}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 block">Resultado: {Math.round(percentReduction)}% de reducción</span>
                  </div>
                </div>

                {/* Adopción */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase font-bold text-emerald-400 block">Indicador de Componente (C3)</span>
                      <p className="text-xs font-bold text-slate-200 leading-tight">Uso Oficial del Sistema (Meta: &ge; 80%)</p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 shrink-0 ${
                      adoptionPassed ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {adoptionPassed ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                      {adoptionPassed ? 'Cumplida' : 'En Proceso'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${adoptionPassed ? 'bg-emerald-400' : 'bg-yellow-400'}`}
                        style={{ width: `${adoption}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 block">Resultado: {adoption}% de adopción</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estado de Salud */}
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-2">
              <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Estado de Salud de los Servicios Clínicos (UCI / Emergencia)</span>
              <div className="flex items-center gap-2">
                <span className={`h-3.5 w-3.5 rounded-full shrink-0 ${
                  health === 'ok'      ? 'bg-emerald-500 animate-pulse' :
                  health === 'partial' ? 'bg-yellow-500 animate-pulse'  :
                                        'bg-red-600 animate-ping'
                }`} />
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  health === 'ok'      ? 'text-emerald-400' :
                  health === 'partial' ? 'text-yellow-400'  :
                                        'text-red-500'
                }`}>
                  {health === 'ok'      ? 'Estable y Operativo (Metas Cumplidas)'  :
                   health === 'partial' ? 'Operatividad Parcial / En Optimización' :
                                         'Riesgo de Disponibilidad Crítica'}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal">
                *La reducción del tiempo promedio de resolución de incidentes (MTTR) de soporte de TI críticos minimiza la inoperabilidad de los sistemas de salud en áreas de cuidados críticos del hospital.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
