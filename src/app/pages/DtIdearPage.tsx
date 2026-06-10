import { Lightbulb } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface AffinityCard {
  id: string;
  criticality: 'Alta' | 'Media' | 'Baja';
  text: string;
}

interface AffinityColumn {
  title: string;
  topBorder: string;
  headerColor: string;
  headerBorder: string;
  cardLeftBorder: string;
  cards: AffinityCard[];
}

const critBadge: Record<string, string> = {
  Alta:  'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/50',
  Media: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800/50',
  Baja:  'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800/50',
};

const columns: AffinityColumn[] = [
  {
    title: 'A. Infraestructura e Integración Técnica',
    topBorder:     'border-t-blue-600 dark:border-t-blue-500',
    headerColor:   'text-blue-600 dark:text-blue-400',
    headerBorder:  'border-blue-200 dark:border-blue-900/50',
    cardLeftBorder:'border-l-blue-500',
    cards: [
      { id: 'REQ-001', criticality: 'Media', text: 'Conexión LDAP con el Active Directory institucional de HEVES para evitar doble login de usuarios.' },
      { id: 'REQ-007', criticality: 'Media', text: 'Generación automática de Códigos QR físicos para el mapeo inmediato de PCs en servicios clínicos.' },
      { id: 'REQ-003', criticality: 'Alta',  text: 'Módulo técnico de notificaciones push/sonoras en la central de soporte para emergencias del sistema.' },
    ],
  },
  {
    title: 'B. Funcionalidad y Experiencia de Usuario (UX)',
    topBorder:     'border-t-green-600 dark:border-t-green-500',
    headerColor:   'text-green-600 dark:text-green-400',
    headerBorder:  'border-green-200 dark:border-green-900/50',
    cardLeftBorder:'border-l-green-500',
    cards: [
      { id: 'REQ-006', criticality: 'Alta',  text: 'Interfaz simplificada de 3 campos en entorno móvil/web para agilizar el reporte de fallos en salas de operaciones.' },
      { id: 'REQ-010', criticality: 'Media', text: 'Despliegue de plantillas rápidas de respuesta en canales oficiales para derivar usuarios al autoservicio.' },
    ],
  },
  {
    title: 'C. Gobernanza y Control Institucional',
    topBorder:     'border-t-red-600 dark:border-t-red-500',
    headerColor:   'text-red-600 dark:text-red-400',
    headerBorder:  'border-red-200 dark:border-red-900/50',
    cardLeftBorder:'border-l-red-500',
    cards: [
      { id: 'REQ-002', criticality: 'Alta',  text: 'Reglas automatizadas de SLA vinculadas a la seguridad clínica del paciente (Emergencia/UCI < 15 min).' },
      { id: 'REQ-005', criticality: 'Media', text: 'Institucionalización del flujo TO-BE del subproceso PS05.03 en el ROF/Mapa de Procesos del hospital.' },
      { id: 'REQ-009', criticality: 'Alta',  text: 'Cuadro de mando integral (Dashboards) para auditorías preventivas del OCI y toma de decisiones ejecutivas.' },
    ],
  },
  {
    title: 'D. Gestión del Cambio y Capacitación',
    topBorder:     'border-t-violet-600 dark:border-t-violet-500',
    headerColor:   'text-violet-600 dark:text-violet-400',
    headerBorder:  'border-violet-200 dark:border-violet-900/50',
    cardLeftBorder:'border-l-violet-500',
    cards: [
      { id: 'REQ-004', criticality: 'Baja',  text: 'Talleres de sensibilización y role-playing dirigidos a jefaturas de Enfermería y Médicos Residentes.' },
      { id: 'REQ-008', criticality: 'Media', text: 'Programa de formación en ITIL 4 Foundation para el equipo de especialistas de soporte de la UTI.' },
    ],
  },
];

export default function DtIdearPage() {
  return (
    <div className="w-full">
      <PageTitle
        icon={Lightbulb}
        iconBgColor="bg-yellow-500"
        title="Idear"
        subtitle="Design Thinking"
        description="Generar una amplia variedad de ideas y soluciones creativas al problema definido."
      />

      <div className="bg-card border border-border rounded-3xl p-8 mt-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">

        {/* Encabezado de sección */}
        <div className="border-l-4 border-l-sky-500 pl-3 mb-4">
          <h2 className="text-base font-bold text-foreground uppercase tracking-wide">
            3. Diagrama de Afinidad — Estructuración Estratégica y Convergencia
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6 text-justify">
          De la divergencia caótica del Brainstorming a la estructuración metodológica. Los requisitos han sido organizados en cuatro categorías críticas que corresponden a las dimensiones del servicio técnico exigidas por el proyecto:
        </p>

        {/* Grid de columnas de afinidad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`bg-muted/40 dark:bg-slate-900/30 rounded-xl p-5 border border-border border-t-4 ${col.topBorder}`}
            >
              {/* Cabecera de columna */}
              <h3 className={`text-xs font-bold uppercase tracking-wide pb-3 mb-4 border-b-2 ${col.headerColor} ${col.headerBorder}`}>
                {col.title}
              </h3>

              {/* Tarjetas de requisito */}
              <div className="space-y-3">
                {col.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`bg-card border border-border border-l-4 ${col.cardLeftBorder} rounded-md p-3 shadow-sm`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                        {card.id}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${critBadge[card.criticality]}`}>
                        {card.criticality}
                      </span>
                    </div>
                    <p className="text-xs text-foreground leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
