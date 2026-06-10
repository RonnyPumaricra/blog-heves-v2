import {
  Target, ServerCog, BarChart3, Briefcase,
  AlertTriangle, XCircle, CheckCircle2, Crosshair,
  Quote, Network,
} from 'lucide-react';
import { PageTitle } from '../components/sections';

const pressures = [
  { label: 'Presión por Auditorías del OCI',   level: 'Crítica',     width: '95%', color: 'bg-red-500' },
  { label: 'Saturación del Equipo Técnico TI', level: 'Alta',        width: '85%', color: 'bg-orange-500' },
  { label: 'Madurez del Proceso PS05.03',      level: 'Inexistente', width: '10%', color: 'bg-slate-400' },
];

export default function DtDefinirPage() {
  return (
    <div className="w-full">
      <PageTitle
        icon={Target}
        iconBgColor="bg-orange-600"
        title="Definir"
        subtitle="Design Thinking"
        description="Sintetizar los hallazgos de la empatía para formular el problema central del usuario."
      />

      <div className="max-w-5xl mt-8">

        {/* Encabezado del documento */}
        <div className="mb-6 flex justify-between items-center px-2">
          <div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Artefacto de Diseño de Requisitos (PMBOK)
            </span>
            <h2 className="text-2xl font-bold text-foreground mt-1">
              Sponsor Persona: Jefatura de la Unidad de TI
            </h2>
          </div>
          <div className="text-right hidden sm:block">
            <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded">
              Proyecto ITSM HEVES 2026
            </span>
          </div>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)]">

          {/* Header con gradiente oscuro (funciona en ambos modos) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-600 pt-10 pb-20 px-10 relative">
            <div className="flex justify-between items-start pl-[160px]">
              <div className="text-white">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Jefatura de la UTI</h3>
                <p className="text-indigo-200 font-medium text-lg mt-1 flex items-center gap-2">
                  <ServerCog className="w-5 h-5 opacity-80" />
                  Líder del Proceso PS05 (Soporte TI) - HEVES
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white text-sm hidden md:block border border-white/20 shrink-0">
                <div className="flex items-center justify-between gap-8 border-b border-white/10 pb-2 mb-2">
                  <span className="opacity-70">Nivel de Poder:</span>
                  <span className="font-semibold text-emerald-300">ALTO (Sponsor Operativo)</span>
                </div>
                <div className="flex items-center justify-between gap-8 border-b border-white/10 pb-2 mb-2">
                  <span className="opacity-70">Nivel de Interés:</span>
                  <span className="font-semibold text-emerald-300">ALTO (Gestionar de cerca)</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="opacity-70">Reporta a:</span>
                  <span className="font-semibold">Dirección Ejecutiva</span>
                </div>
              </div>
            </div>

            {/* Avatar institucional */}
            <div className="absolute bottom-0 left-10 translate-y-1/2 w-[140px] h-[140px] rounded-full border-[6px] border-card bg-muted shadow-xl z-10 flex items-center justify-center">
              <Network className="w-16 h-16 text-muted-foreground" />
            </div>
          </div>

          {/* Cuerpo */}
          <div className="p-10 pt-20 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Columna izquierda: cita, presiones, responsabilidades */}
            <div className="col-span-1 space-y-8">

              {/* Cita */}
              <div className="bg-muted/50 p-5 rounded-2xl border border-border relative">
                <Quote className="w-8 h-8 text-muted-foreground/30 absolute top-3 left-3" />
                <p className="text-foreground italic relative z-10 font-medium text-sm leading-relaxed pt-4 pl-4">
                  "Mi equipo técnico está operando como bomberos. Todo el hospital nos pide soporte por WhatsApp, no tenemos cómo medir nuestro rendimiento (SLAs) ni cómo demostrarle a la Dirección Ejecutiva el valor de nuestro trabajo ante las auditorías."
                </p>
              </div>

              {/* Presiones del entorno */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">
                  <BarChart3 className="w-4 h-4" /> Presiones del Entorno (EEFs)
                </h4>
                <div className="space-y-4">
                  {pressures.map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-1">
                        <span>{p.label}</span>
                        <span>{p.level}</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-1.5">
                        <div className={`h-full rounded-full ${p.color}`} style={{ width: p.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsabilidades */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">
                  <Briefcase className="w-4 h-4" /> Responsabilidades Clave
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                  <li>Garantizar la continuidad de los sistemas clínicos (SISGalenPlus).</li>
                  <li>Cumplir con el marco normativo de Gobierno Digital (Decreto Legislativo N° 1412).</li>
                  <li>Rendir cuentas de la gestión de TI ante la Dirección Ejecutiva y Entes de Control.</li>
                </ul>
              </div>
            </div>

            {/* Columna derecha (2 cols) */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Dolores operativos */}
              <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-2xl border border-red-100 dark:border-red-900/30">
                <h4 className="flex items-center gap-2 text-sm font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-4 border-b border-red-200 dark:border-red-800/50 pb-2">
                  <AlertTriangle className="w-4 h-4" /> Dolores Operativos
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      <strong>Soporte Informal:</strong> Los jefes de otras unidades o médicos exigen atención saltándose los conductos regulares (vía WhatsApp o favores).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      <strong>Cero Métricas (SLAs):</strong> Al no haber un subproceso documentado, es imposible medir cuánto tarda TI en resolver una caída del sistema.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      <strong>Riesgo de Cumplimiento:</strong> El vacío en el proceso PS05 expone a la jefatura a hallazgos negativos en las evaluaciones de control interno.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Metas del proyecto */}
              <div className="bg-indigo-50 dark:bg-indigo-950/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                <h4 className="flex items-center gap-2 text-sm font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-4 border-b border-indigo-200 dark:border-indigo-800/50 pb-2">
                  <Target className="w-4 h-4" /> Metas del Proyecto
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      <strong>Formalizar el PS05.03:</strong> Institucionalizar la "Gestión de Incidentes" como subproceso oficial en el mapa de procesos 2024 del HEVES.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      <strong>Desplegar GLPI:</strong> Obtener una herramienta tecnológica (Mesa de Ayuda) que centralice los reportes y genere tickets automáticamente.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">
                      <strong>Generación de Dashboards:</strong> Extraer reportes de rendimiento de TI para presentarlos a la Dirección Ejecutiva en sus reuniones mensuales.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Reto del proyecto */}
              <div className="col-span-1 sm:col-span-2 bg-slate-800 dark:bg-slate-900 p-6 rounded-2xl text-white">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 flex items-center gap-2">
                  <Crosshair className="w-4 h-4" /> Reto del Proyecto (Perspectiva del Sponsor)
                </h4>
                <p className="text-base font-medium leading-relaxed">
                  "¿Cómo estructuramos la implementación del software <strong>GLPI</strong> y las buenas prácticas de <strong>ITIL 4</strong> para que la Jefatura de la UTI asuma el control total de las incidencias técnicas, eliminando la informalidad del hospital y garantizando una operatividad auditable ante la Dirección Ejecutiva y el OCI?"
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
