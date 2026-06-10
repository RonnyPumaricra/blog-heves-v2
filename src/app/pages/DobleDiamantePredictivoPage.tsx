import { useState } from 'react';
import {
  ShieldCheck, Binoculars, Target, Layers, Flag,
  Lock, ClipboardCheck,
  Users, Search, FileText,
  Scissors, MapPin, FileCheck2,
  Network, GitBranch, Settings,
  Terminal, GraduationCap, CheckCircle2,
} from 'lucide-react';
import { PageTitle } from '../components/sections';

type Phase = 1 | 2 | 3 | 4;

interface PhaseConfig {
  id: Phase;
  label: string;
  sublabel: string;
  pmbok: string;
  icon: React.ElementType;
  bg: string;
  borderColor: string;
  textColor: string;
}

interface Action { icon: React.ElementType; title: string; text: string }
interface PhaseData { group: string; title: string; desc: string; actions: Action[] }

const PHASE_DATA: Record<Phase, PhaseData> = {
  1: {
    group: 'Grupo de Procesos: INICIO',
    title: '1. Descubrir (Divergencia)',
    desc: "Corresponde al proceso 'Recopilar Requisitos'. El equipo investiga el problema sin restricciones para entender el Caso de Negocio.",
    actions: [
      { icon: Users,    title: 'Análisis de Interesados', text: 'Identificación de médicos de UCI y técnicos de TI y su nivel de influencia.' },
      { icon: Search,   title: 'Diagnóstico',             text: 'Mapeo de la dependencia del WhatsApp personal y los fallos de SISGalenPlus.' },
      { icon: FileText, title: 'Caso de Negocio',         text: 'Justificación financiera y operativa de la necesidad de intervenir el proceso PS05.' },
    ],
  },
  2: {
    group: 'Grupo de Procesos: INICIO',
    title: '2. Definir (Convergencia)',
    desc: "Se filtra la información y se congela el alcance. Se elimina la 'Gestión de Cambios' para asegurar la viabilidad. Se firma el Acta de Constitución.",
    actions: [
      { icon: Scissors,   title: 'Acotación del Alcance',         text: 'Decisión formal de limitar el proyecto EXCLUSIVAMENTE a Gestión de Incidentes.' },
      { icon: MapPin,     title: 'Definición del Piloto',          text: 'Selección oficial de las áreas de Emergencia y Cuidados Críticos (UCI).' },
      { icon: FileCheck2, title: 'Acta de Constitución (Charter)', text: 'Firma del Director Ejecutivo. Se establece la Línea Base del Alcance preliminar.' },
    ],
  },
  3: {
    group: 'Grupo de Procesos: PLANIFICACIÓN',
    title: '3. Desarrollar (Diseño Técnico)',
    desc: 'Dentro de los límites del alcance aprobado, el equipo diseña detalladamente CÓMO se construirá la solución técnica antes de implementarla.',
    actions: [
      { icon: Network,   title: 'Estructura de Desglose (EDT)', text: 'Creación de la EDT y su Diccionario para estructurar paquetes de trabajo.' },
      { icon: GitBranch, title: 'Diseño del Flujo TO-BE',       text: 'Modelado del proceso PS05.03 incorporando el uso de Códigos QR y WhatsApp Business.' },
      { icon: Settings,  title: 'Arquitectura de GLPI',         text: 'Planificación documentada de las categorías, reglas de negocio y SLAs en GLPI.' },
    ],
  },
  4: {
    group: 'Grupo de Procesos: EJECUCIÓN Y CIERRE',
    title: '4. Entregar (Implementación)',
    desc: 'Se ejecuta el plan al pie de la letra, se realizan las pruebas de calidad (Control) y se transfiere el activo al cliente (Cierre).',
    actions: [
      { icon: Terminal,      title: 'Configuración de GLPI',  text: 'Parametrización del software según el diseño técnico aprobado en planificación.' },
      { icon: GraduationCap, title: 'Capacitación Operativa', text: 'Entrenamiento al personal médico de UCI para el uso de los Códigos QR.' },
      { icon: CheckCircle2,  title: 'Cierre del Proyecto',    text: 'Firma de aceptación del Acta de Cierre por parte de la Jefatura de TI.' },
    ],
  },
};

const PHASES: PhaseConfig[] = [
  { id: 1, label: 'Descubrir',  sublabel: 'Recopilar Requisitos', pmbok: 'INICIO PMBOK',         icon: Binoculars, bg: 'linear-gradient(135deg,#e0f2fe,#bae6fd)', borderColor: '#38bdf8', textColor: '#0369a1' },
  { id: 2, label: 'Definir',    sublabel: 'Definir Alcance',      pmbok: 'ACTA DE CONSTITUCIÓN',  icon: Target,     bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)', borderColor: '#60a5fa', textColor: '#1d4ed8' },
  { id: 3, label: 'Desarrollar',sublabel: 'Planificación (EDT)',  pmbok: 'PLANIFICACIÓN',         icon: Layers,     bg: 'linear-gradient(135deg,#fef3c7,#fde68a)', borderColor: '#fbbf24', textColor: '#b45309' },
  { id: 4, label: 'Entregar',   sublabel: 'Ejecución y Cierre',   pmbok: 'EJECUCIÓN / CIERRE',    icon: Flag,       bg: 'linear-gradient(135deg,#dcfce7,#bbf7d0)', borderColor: '#4ade80', textColor: '#15803d' },
];

export default function DobleDiamantePredictivoPage() {
  const [activePhase, setActivePhase] = useState<Phase>(1);
  const data = PHASE_DATA[activePhase];

  const renderDiamond = (phase: PhaseConfig, zIndex: number) => {
    const isActive = activePhase === phase.id;
    return (
      <div
        key={phase.id}
        className="relative shrink-0"
        style={{ width: 240, margin: '0 -20px', zIndex }}
      >
        <div
          onClick={() => setActivePhase(phase.id)}
          className="cursor-pointer transition-all duration-300"
          style={{
            width: 240,
            height: 240,
            transform: 'rotate(45deg)',
            background: phase.bg,
            border: `2px solid ${phase.borderColor}`,
            boxShadow: isActive
              ? '0 0 0 5px rgba(255,255,255,0.8), 0 0 0 10px #94a3b8'
              : '0 10px 30px rgba(0,0,0,0.08)',
          }}
        >
          <div
            className="absolute flex flex-col items-center justify-center text-center"
            style={{
              transform: 'rotate(-45deg)',
              width: '141%',
              height: '141%',
              top: '-20.5%',
              left: '-20.5%',
              color: phase.textColor,
              padding: '20px',
            }}
          >
            <phase.icon className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg leading-tight">{phase.label}</h3>
            <span
              className="text-[10px] font-semibold mt-1.5 px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.5)' }}
            >
              {phase.sublabel}
            </span>
          </div>
        </div>
        {/* PMBOK label below the diamond */}
        <div
          className="absolute text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center pointer-events-none"
          style={{ bottom: -72, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
        >
          {phase.pmbok}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-8">
      <PageTitle
        icon={ShieldCheck}
        iconBgColor="bg-emerald-600"
        title="Doble Diamante Predictivo"
        subtitle="Enfoque de Marco Lógico"
        description="Adaptación del método Doble Diamante al Ciclo de Vida PMBOK v6 para la implementación de la Mesa de Ayuda HEVES 2026."
      />

      {/* Cabecera */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Enfoque Predictivo (Cascada)
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Adaptación del Doble Diamante al Ciclo de Vida PMBOK v6
          </h2>
          <p className="text-sm text-muted-foreground">Proyecto: Mesa de Ayuda de Gestión de Incidentes TI — HEVES 2026</p>
        </div>
        <ShieldCheck className="w-10 h-10 text-emerald-600 shrink-0" />
      </div>

      {/* Zona del Diagrama */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="p-6 md:p-8 border-b border-border text-center space-y-1">
          <h3 className="text-lg font-bold text-foreground">Integración: Design Thinking + Dirección de Proyectos</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            La divergencia se utiliza para recopilar requisitos y diseñar soluciones; la convergencia establece las líneas base del alcance y la entrega formal.
          </p>
        </div>

        <div className="overflow-x-auto">
          {/* Container with room for diamond overflow top/bottom and labels */}
          <div className="relative" style={{ paddingTop: 55, paddingBottom: 100 }}>
            {/* Timeline line — aligned to diamond centers */}
            <div
              className="absolute left-[5%] right-[5%] rounded-full bg-slate-200 dark:bg-slate-700 z-0"
              style={{ height: 6, top: 55 + 120 - 3 }}
            />

            {/* Diamonds row */}
            <div className="flex items-center justify-center min-w-[800px] mx-auto px-10 relative z-10">
              {renderDiamond(PHASES[0], 12)}
              {renderDiamond(PHASES[1], 11)}

              {/* Punto de Congelamiento (Línea Base) */}
              <div
                className="shrink-0 bg-slate-800 text-white p-3 rounded-full border-4 border-white shadow-lg"
                style={{ zIndex: 20, margin: '0 8px' }}
                title="Línea Base del Alcance: Aprobación formal por Dirección Ejecutiva"
              >
                <Lock className="w-6 h-6" />
              </div>

              {renderDiamond(PHASES[2], 11)}
              {renderDiamond(PHASES[3], 12)}
            </div>
          </div>
        </div>
      </div>

      {/* Panel Informativo (siempre oscuro) */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden text-white">
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
          {/* Columna izquierda */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-slate-600 pb-6 md:pb-0 md:pr-8 space-y-3">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-bold tracking-wider uppercase">
              {data.group}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">{data.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{data.desc}</p>
          </div>

          {/* Columna derecha */}
          <div className="w-full md:w-2/3 space-y-4">
            <h4 className="text-slate-300 font-bold flex items-center text-sm uppercase tracking-wide">
              <ClipboardCheck className="w-4 h-4 mr-2" />
              Entregables y Acciones Predictivas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.actions.map((action, i) => (
                <div
                  key={i}
                  className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50 hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <action.icon className="w-5 h-5 text-emerald-400 mr-2 shrink-0" />
                    <h5 className="font-bold text-slate-100 text-sm">{action.title}</h5>
                  </div>
                  <p className="text-xs text-slate-400 pl-7 leading-relaxed">{action.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
