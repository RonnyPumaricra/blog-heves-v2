import { Heart, Brain, Eye, Ear, MessageSquare, ShieldAlert, Award, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PageTitle } from '../components/sections';

type StickyColor = 'yellow' | 'blue' | 'pink' | 'orange';
type Rot = 'L' | 'R' | 'S';

interface Sticky {
  text: string;
  color: StickyColor;
  rot: Rot;
}

const stickyColors: Record<StickyColor, React.CSSProperties> = {
  yellow: { backgroundColor: '#fef08a', color: '#713f12', borderLeft: '4px solid #facc15' },
  blue:   { backgroundColor: '#e0f2fe', color: '#0369a1', borderLeft: '4px solid #38bdf8' },
  pink:   { backgroundColor: '#fce7f3', color: '#9d174d', borderLeft: '4px solid #f472b6' },
  orange: { backgroundColor: '#ffedd5', color: '#c2410c', borderLeft: '4px solid #fb923c' },
};

const rotClass: Record<Rot, string> = {
  L: 'rotate-[-1.5deg]',
  R: 'rotate-[1.5deg]',
  S: 'rotate-[-0.5deg]',
};

const stickies: Record<string, Sticky[]> = {
  '1': [
    { text: 'Necesito formalizar el subproceso PS05.03 de Gestión de Incidentes para auditar las atenciones técnico-médicas.', color: 'yellow', rot: 'L' },
    { text: 'Me preocupa el desgaste operativo de mi equipo de soporte; trabajan sin prioridades claras.', color: 'yellow', rot: 'R' },
  ],
  '2': [
    { text: 'Médicos reportando fallos críticos por WhatsApp personal, evadiendo canales formales.', color: 'blue', rot: 'S' },
    { text: 'Auditorías recurrentes de la OCI exigiendo reportes de desempeño de TI difíciles de generar manualmente.', color: 'blue', rot: 'L' },
  ],
  '3': [
    { text: 'Quejas de directores médicos alegando que TI tarda mucho en resolver incidencias clínicas.', color: 'pink', rot: 'R' },
    { text: 'Al Director Ejecutivo pedir un reporte detallado del tiempo de inactividad de SISGalenPlus.', color: 'pink', rot: 'S' },
  ],
  '4': [
    { text: 'Promueve la adopción de ITIL 4 y la formalización de acuerdos de nivel de servicio (SLAs).', color: 'orange', rot: 'L' },
    { text: 'Coordinando con consultores de UNTELS para establecer la línea base del alcance en el Acta de Constitución.', color: 'orange', rot: 'R' },
  ],
  pains: [
    { text: 'Falta absoluta de trazabilidad y métricas de soporte en el hospital.', color: 'yellow', rot: 'R' },
    { text: 'Fricción y resistencia al cambio si obligamos a los médicos a llenar formularios complejos.', color: 'yellow', rot: 'L' },
  ],
  gains: [
    { text: 'Tener un Dashboard de GLPI funcional que demuestre el rendimiento de TI ante auditorías.', color: 'blue', rot: 'S' },
    { text: 'Reducir los tiempos de inactividad en Emergencia y UCI en un 20% mediante prioridades automáticas.', color: 'blue', rot: 'R' },
  ],
};

function StickyNote({ sticky }: { sticky: Sticky }) {
  return (
    <div
      className={`p-4 rounded-lg min-h-[110px] shadow-[2px_4px_10px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[4px_8px_15px_rgba(0,0,0,0.25)] transition-all duration-200 ${rotClass[sticky.rot]}`}
      style={stickyColors[sticky.color]}
    >
      <p className="text-base leading-tight font-bold" style={{ fontFamily: "'Caveat', cursive" }}>
        {sticky.text}
      </p>
    </div>
  );
}

function Quadrant({
  quadId,
  icon: Icon,
  iconBg,
  iconColor,
  title,
}: {
  quadId: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-muted/30 dark:bg-slate-900/30 border border-border/50 flex flex-col min-h-[260px]">
      <div className="flex items-center gap-2 mb-4">
        <div className={`${iconBg} p-2 rounded-lg ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-foreground tracking-wide">{title}</h3>
      </div>
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stickies[quadId].map((s, i) => (
          <StickyNote key={i} sticky={s} />
        ))}
      </div>
    </div>
  );
}

export default function DtEmpatizarPage() {
  return (
    <div className="w-full">
      <PageTitle
        icon={Heart}
        iconBgColor="bg-pink-600"
        title="Empatizar"
        subtitle="Design Thinking"
        description="Comprender las necesidades, experiencias y motivaciones de los usuarios."
      />

      {/* Header institucional */}
      <div className="bg-card border border-border p-6 rounded-t-3xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded border border-blue-300 dark:border-blue-700/50 uppercase tracking-widest">
              PMBOK v6 + ITIL 4
            </span>
            <span className="text-xs text-muted-foreground">| Diagnóstico de Gobernanza TI</span>
          </div>
          <h2 className="text-2xl font-black text-foreground mt-2 tracking-tight uppercase">
            Mapa de Empatía del Interesado Clave
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Sponsor Operativo: Jefatura de la Unidad de Tecnologías de la Información (UTI) - HEVES
          </p>
        </div>
        <div className="bg-muted/50 p-3 rounded-xl border border-border text-center shrink-0">
          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Influencia en el Proyecto</p>
          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Muy Alta (Gestionar de cerca)</p>
        </div>
      </div>

      {/* Lienzo principal */}
      <div className="bg-background border-x border-b border-border p-8 rounded-b-3xl relative overflow-hidden shadow-2xl">

        {/* Líneas de estructura decorativas */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border/20 hidden md:block pointer-events-none" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/20 hidden md:block pointer-events-none" />
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block opacity-5" aria-hidden="true">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" />
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" />
        </svg>

        {/* Grid 4 cuadrantes + avatar central */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 min-h-[600px] pb-12">
          <Quadrant quadId="1" icon={Brain}         iconBg="bg-blue-500/20"   iconColor="text-blue-400"   title="¿Qué piensa y siente?" />
          <Quadrant quadId="2" icon={Eye}           iconBg="bg-purple-500/20" iconColor="text-purple-400" title="¿Qué ve?" />
          <Quadrant quadId="3" icon={Ear}           iconBg="bg-pink-500/20"   iconColor="text-pink-400"   title="¿Qué oye?" />
          <Quadrant quadId="4" icon={MessageSquare} iconBg="bg-amber-500/20"  iconColor="text-amber-400"  title="¿Qué dice y hace?" />

          {/* Avatar central superpuesto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center z-30 pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-muted border-4 border-background shadow-2xl flex items-center justify-center">
              <Server className="w-10 h-10 text-muted-foreground" />
            </div>
            <span className="bg-card border border-border text-[10px] text-foreground px-3 py-1 rounded-full shadow-lg font-black tracking-widest mt-2 uppercase">
              Jefa UTI
            </span>
          </div>
        </div>

        {/* Sección Pains / Gains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8 mt-4 relative z-10">
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-500/20 p-2 rounded-lg text-red-500 dark:text-red-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-red-700 dark:text-red-300">Frustraciones y Dolores (Pains)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stickies.pains.map((s, i) => <StickyNote key={i} sticky={s} />)}
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-emerald-700 dark:text-emerald-300">Necesidades y Ganancias (Gains)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stickies.gains.map((s, i) => <StickyNote key={i} sticky={s} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
