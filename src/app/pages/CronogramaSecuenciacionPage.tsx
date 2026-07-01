import { Network } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface GlossaryRow {
  id: string;
  nombre: string;
  entregable: string;
  predecesora: string;
  isStart?: boolean;
}

const glossary: GlossaryRow[] = [
  { id: 'A1', nombre: 'Despliegue de Infraestructura Sandbox', entregable: 'Servidor Ubuntu + MariaDB', predecesora: '– (Inicio)', isStart: true },
  { id: 'A2', nombre: 'Instalación del Core GLPI v10', entregable: 'Sistema GLPI Operativo', predecesora: 'A1 (Fin-Inicio)' },
  { id: 'A3', nombre: 'Parametrización de Matriz SLA', entregable: 'Motor de Reglas configurado', predecesora: 'A2 (Fin-Inicio)' },
  { id: 'A4', nombre: 'Conectividad e Importación LDAP', entregable: 'Directorio de Médicos Sincronizado', predecesora: 'A2 (Fin-Inicio)' },
  { id: 'A5', nombre: 'Desarrollo de Interfaz de Reporte (QR)', entregable: 'Prototipo Móvil', predecesora: 'A2 (Fin-Inicio)' },
  { id: 'A6', nombre: 'Pruebas de Aceptación de Software (QA)', entregable: 'Reporte de Pruebas y Métricas', predecesora: 'A3, A4, A5 (Fin-Inicio)' },
  { id: 'A7', nombre: 'Capacitación Operativa a la UTI', entregable: 'Personal de TI Formado', predecesora: 'A6 (Fin-Inicio)' },
  { id: 'A8', nombre: 'Despliegue del Piloto Funcional', entregable: 'Acta de Conformidad', predecesora: 'A7 (Fin-Inicio)' },
];

interface Node {
  id: string;
  label1: string;
  label2?: string;
  x: number;
  y: number;
  width: number;
}

const nodes: Node[] = [
  { id: 'A1', label1: 'Servidor', label2: 'Sandbox', x: 105, y: 115, width: 120 },
  { id: 'A2', label1: 'Core', label2: 'GLPI v10', x: 260, y: 115, width: 120 },
  { id: 'A3', label1: 'Matriz SLA', x: 465, y: 25, width: 140 },
  { id: 'A4', label1: 'Conexión LDAP', x: 465, y: 115, width: 140 },
  { id: 'A5', label1: 'Interfaz QR', x: 465, y: 205, width: 140 },
  { id: 'A6', label1: 'Pruebas', label2: 'QA', x: 655, y: 115, width: 120 },
  { id: 'A7', label1: 'Capacitación', label2: 'UTI', x: 810, y: 115, width: 120 },
  { id: 'A8', label1: 'Despliegue', label2: 'Piloto', x: 965, y: 115, width: 120 },
];

export default function CronogramaSecuenciacionPage() {
  return (
    <>
      <PageTitle
        icon={Network}
        iconBgColor="bg-orange-600"
        title="Secuenciación de Actividades"
        subtitle="Programación · PMBOK v6"
        description="Identificación y documentación de las relaciones lógicas entre las actividades de la iteración de ejecución. El despliegue ha sido optimizado para ejecutar en paralelo la configuración de SLAs, sincronización de usuarios e interfaz de reportes."
      />

      {/* Glosario */}
      <h2 className="mb-4 mt-8 flex items-center gap-2 text-lg font-bold text-foreground">
        Glosario de Actividades y Dependencias
      </h2>
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">ID</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">Nombre de la Actividad</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">Entregable Principal</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">Predecesora Lógica</th>
              </tr>
            </thead>
            <tbody>
              {glossary.map((row) => (
                <tr key={row.id} className="hover:bg-muted/40">
                  <td className="border-b border-border px-4 py-3.5">
                    <span className="font-mono text-sm font-extrabold text-orange-600">{row.id}</span>
                  </td>
                  <td className="border-b border-border px-4 py-3.5 text-sm font-semibold text-foreground">
                    {row.nombre}
                  </td>
                  <td className="border-b border-border px-4 py-3.5 text-sm text-foreground">
                    {row.entregable}
                  </td>
                  <td className="border-b border-border px-4 py-3.5">
                    <span
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border px-2.5 py-1 text-[11.5px] font-bold ${
                        row.isStart
                          ? 'border-border bg-muted text-muted-foreground'
                          : 'border-orange-200 bg-orange-100 text-orange-700 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300'
                      }`}
                    >
                      {row.predecesora}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Diagrama de Red PDM */}
      <h2 className="mb-4 mt-10 flex items-center gap-2 text-lg font-bold text-foreground">
        Diagrama de Red del Cronograma (PDM)
      </h2>
      <div className="flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-6 shadow-sm">
        <svg
          width="1120"
          height="300"
          viewBox="0 0 1120 300"
          xmlns="http://www.w3.org/2000/svg"
          className="min-w-[1120px]"
        >
          <defs>
            <marker
              id="arrow-pdm"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
            </marker>
          </defs>

          {/* Enlaces */}
          <g stroke="#64748b" strokeWidth="2" fill="none">
            <path markerEnd="url(#arrow-pdm)" d="M 70 150 L 105 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 225 150 L 260 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 380 150 L 415 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 415 150 L 440 150 L 440 60 L 465 60" />
            <path markerEnd="url(#arrow-pdm)" d="M 415 150 L 465 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 415 150 L 440 150 L 440 240 L 465 240" />
            <path markerEnd="url(#arrow-pdm)" d="M 605 60 L 630 60 L 630 150 L 655 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 605 150 L 655 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 605 240 L 630 240 L 630 150 L 655 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 775 150 L 810 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 930 150 L 965 150" />
            <path markerEnd="url(#arrow-pdm)" d="M 1085 150 L 1120 150" />
          </g>

          {/* INICIO */}
          <g transform="translate(10, 130)">
            <rect width="60" height="40" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" rx="20" />
            <text x="30" y="25" textAnchor="middle" fontWeight="700" fontSize="13" fill="#0f172a">IN</text>
          </g>

          {/* Nodos actividades */}
          {nodes.map((n) => (
            <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
              <rect width={n.width} height="70" fill="#ffffff" stroke="#ea580c" strokeWidth="2" rx="6" />
              <rect width={n.width} height="30" fill="#ffedd5" rx="6" />
              <path d={`M 0 30 L ${n.width} 30`} stroke="#ea580c" strokeWidth="1" />
              <text x={n.width / 2} y="20" textAnchor="middle" fontWeight="800" fontSize="14" fill="#ea580c">
                {n.id}
              </text>
              <text
                x={n.width / 2}
                y={n.label2 ? 47 : 52}
                textAnchor="middle"
                fontWeight="600"
                fontSize="12"
                fill="#0f172a"
              >
                {n.label1}
              </text>
              {n.label2 && (
                <text x={n.width / 2} y="62" textAnchor="middle" fontWeight="600" fontSize="12" fill="#0f172a">
                  {n.label2}
                </text>
              )}
            </g>
          ))}

          {/* FIN */}
          <g transform="translate(1120, 130)">
            <rect width="60" height="40" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" rx="20" />
            <text x="30" y="25" textAnchor="middle" fontWeight="700" fontSize="13" fill="#0f172a">FIN</text>
          </g>
        </svg>
      </div>
    </>
  );
}
