import { ListTodo } from 'lucide-react';
import { PageTitle } from '../components/sections';

type BadgeColor = 'blue' | 'orange' | 'purple' | 'green';

const badgeStyles: Record<BadgeColor, string> = {
  blue: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800',
  orange: 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800',
  purple: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800',
  green: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
};

interface Actividad {
  id: string;
  nombre: string;
  descripcion: string;
  responsable: string;
  color: BadgeColor;
  edt: string;
  predecesora: string;
}

const actividades: Actividad[] = [
  {
    id: 'A1',
    nombre: 'Despliegue de Infraestructura Sandbox',
    descripcion: 'Instalación del sistema operativo Ubuntu Server 24.04 LTS y configuración del motor de base de datos MariaDB en el entorno aislado del hospital.',
    responsable: 'Roncal Saravia, J.',
    color: 'purple',
    edt: '3.1 Servidor Aislado',
    predecesora: 'Inicio',
  },
  {
    id: 'A2',
    nombre: 'Instalación del Core GLPI v10',
    descripcion: 'Despliegue del código fuente de la Mesa de Ayuda GLPI sobre la infraestructura base, incluyendo dependencias web (Apache/PHP) y conexión a DB.',
    responsable: 'Molina Vera, M.',
    color: 'orange',
    edt: '3.2 Parametrización Core',
    predecesora: 'A1 (Fin-Inicio)',
  },
  {
    id: 'A3',
    nombre: 'Parametrización de Matriz SLA',
    descripcion: 'Configuración del motor de reglas de negocio para tiempos de respuesta y resolución en tickets críticos (Emergencia/UCI), automatizando alarmas.',
    responsable: 'Molina Vera, M.',
    color: 'orange',
    edt: '3.2 Parametrización Core',
    predecesora: 'A2 (Fin-Inicio)',
  },
  {
    id: 'A4',
    nombre: 'Conectividad e Importación LDAP',
    descripcion: 'Establecimiento de comunicación segura entre GLPI y el Active Directory del HEVES. Mapeo de atributos (correo, anexo) del personal asistencial.',
    responsable: 'Perez Damian, J.',
    color: 'blue',
    edt: '3.3 Conectividad AD',
    predecesora: 'A2 (Fin-Inicio)',
  },
  {
    id: 'A5',
    nombre: 'Desarrollo de Interfaz de Reporte (QR)',
    descripcion: 'Diseño e implementación de un prototipo interactivo UX móvil (accesible por QR) para facilitar el reporte rápido de tickets sin formularios extensos.',
    responsable: 'Pumaricra Meneses, R.',
    color: 'blue',
    edt: '3.4 Interfaz Rápida QR',
    predecesora: 'A2 (Fin-Inicio)',
  },
  {
    id: 'A6',
    nombre: 'Pruebas de Aceptación de Software (QA)',
    descripcion: 'Ejecución de casos de prueba sobre el motor de SLAs, sincronización LDAP y creación de tickets, verificando los indicadores del subproceso PS05.',
    responsable: 'Equipo UNTELS',
    color: 'green',
    edt: '4.3 Pruebas de QA',
    predecesora: 'A3, A4, A5',
  },
  {
    id: 'A7',
    nombre: 'Capacitación Operativa a la UTI',
    descripcion: 'Ejecución de talleres sobre los estándares ITIL 4 y el uso administrativo de la plataforma GLPI para la Jefatura de TI y el equipo de soporte.',
    responsable: 'Equipo UNTELS',
    color: 'green',
    edt: '4.2 Formación Estándares',
    predecesora: 'A6 (Fin-Inicio)',
  },
  {
    id: 'A8',
    nombre: 'Despliegue del Piloto Funcional',
    descripcion: 'Pase a producción del entorno controlado en la UTI para empezar a recibir incidencias reales, formalizado mediante el Acta de Conformidad Operativa.',
    responsable: 'Dirección HEVES / UTI',
    color: 'purple',
    edt: '3.0 Sistema Piloto',
    predecesora: 'A7 (Fin-Inicio)',
  },
];

interface KpiProps {
  label: string;
  value: string;
  valueClass?: string;
}
const Kpi = ({ label, value, valueClass = 'text-foreground' }: KpiProps) => (
  <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
    <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
    </div>
    <div className={`text-lg font-extrabold tracking-tight ${valueClass}`}>{value}</div>
  </div>
);

export default function CronogramaActividadesPage() {
  return (
    <>
      <PageTitle
        icon={ListTodo}
        iconBgColor="bg-orange-600"
        title="Actividades de la Primera Iteración"
        subtitle="Definición de Actividades · PMBOK v6"
        description="Desglose de los paquetes de trabajo correspondientes a la fase principal de ejecución técnica (Fase 3 y 4 de la EDT). Se detallan las tareas específicas para la configuración, implementación y validación de la Mesa de Ayuda GLPI en la Unidad de TI del HEVES."
      />

      {/* KPIs */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Kpi label="Inicio de Iteración" value="29 Jun 2026" valueClass="text-orange-600" />
        <Kpi label="Total Actividades" value="8 tareas técnicas" />
        <Kpi label="Fase Principal" value="Fase 3: Ejecución" valueClass="text-sky-600" />
        <Kpi label="Entregable Final" value="Piloto Operativo" valueClass="text-emerald-600" />
      </div>

      {/* Tabla de Actividades */}
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">ID</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">Actividad y Descripción</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">Responsable</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">EDT Asociada</th>
                <th className="border-b-2 border-border bg-muted px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-foreground">Predecesora</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((a) => (
                <tr key={a.id} className="hover:bg-muted/40">
                  <td className="border-b border-border px-4 py-4 align-top">
                    <span className="font-mono text-sm font-extrabold text-orange-600">{a.id}</span>
                  </td>
                  <td className="border-b border-border px-4 py-4 align-top">
                    <div className="mb-1 text-sm font-bold text-foreground">{a.nombre}</div>
                    <div className="text-[13px] text-muted-foreground">{a.descripcion}</div>
                  </td>
                  <td className="border-b border-border px-4 py-4 align-top">
                    <span className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border px-2.5 py-1 text-[11.5px] font-bold ${badgeStyles[a.color]}`}>
                      {a.responsable}
                    </span>
                  </td>
                  <td className="border-b border-border px-4 py-4 align-top">
                    <span className="inline-block rounded border border-border bg-muted px-1.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {a.edt}
                    </span>
                  </td>
                  <td className="border-b border-border px-4 py-4 align-top">
                    <span className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-border bg-muted px-2.5 py-1 text-[11.5px] font-bold text-muted-foreground">
                      {a.predecesora}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
