import { Users, Settings, FileSpreadsheet, FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { PageTitle, HerramientaJuicioExpertos, HerramientaRecopilacionDatos, HerramientaRepresentacionDatos, HerramientaReuniones } from '../components/sections';

function PendingSection({ number, title, children, noteText }: {
  number: string;
  title: string;
  children: React.ReactNode;
  noteText?: string;
}) {
  return (
    <div className="bg-card border-2 border-dashed border-amber-400 rounded-lg overflow-hidden">
      <div className="bg-amber-50 dark:bg-amber-950/40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg">
            <Clock className="text-white" size={20} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {number}. {title}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 dark:text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-full">
          <AlertTriangle size={14} />
          Pendiente
        </span>
      </div>

      <div className="px-6 py-5">
        <div className="text-muted-foreground">
          {children}
        </div>

        <div className="mt-5 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-400/30 border border-amber-200 rounded-lg p-4 flex gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">Contenido por completar</p>
            <p className="text-sm text-amber-700">
              {noteText || 'Esta sección muestra la estructura genérica según el PMBOK. El contenido específico del proyecto HEVES será añadido conforme se avance en la formulación del proyecto.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteresadosHerramientasPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Users}
        iconBgColor="bg-blue-600"
        title="Identificar a los Interesados"
        subtitle="Grupo de Procesos de Inicio"
        description="Proceso de identificar a las personas, grupos u organizaciones que podrían afectar o ser afectados por el proyecto, así como analizar y documentar información relevante relativa a sus intereses, participación, interdependencias, influencia y posible impacto en el éxito del proyecto."
      />

      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/40 dark:border-blue-400 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Settings className="text-blue-600" size={24} />
            Herramientas y Técnicas
          </h2>
        </div>

        <div className="space-y-6">
          {/* <HerramientaJuicioExpertos */}
          {/*   items={[ */}
          {/*     '• Gestión de proyectos sociales y hospitalarios', */}
          {/*     '• Conocimiento profundo de la comunidad objetivo', */}
          {/*     '• Experiencia en stakeholder engagement en salud', */}
          {/*     '• Comprensión del entorno político y regulatorio', */}
          {/*   ]} */}
          {/* /> */}

          <HerramientaRecopilacionDatos title="1. Recopilación de datos">
            <div className="mb-4">
              <p className="text-muted-foreground mb-3 text-sm">
                Los documentos institucionales del HEVES han sido recopilados y organizados en el siguiente repositorio:
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/30 dark:border-blue-400/30 border border-blue-200 rounded-lg p-4 mb-4">
                <a
                  href="https://drive.google.com/drive/folders/1B618R5qmcnAc9ccCFlncauqO-kYgIhuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 dark:text-blue-300 font-semibold hover:text-blue-800 underline flex items-center gap-2"
                >
                  <FileSpreadsheet size={18} />
                  Repositorio de Documentos Institucionales HEVES
                </a>
              </div>
              <p className="text-muted-foreground mb-3 text-sm">Documentos incluidos:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>Aviso de Sinceramiento - ROF.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>aviso-uti-1-semestre-2026.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>estado-de-implementacion-de-las-recomendaciones-de-los-inform...</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>mapa-de-procesos-2024.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>MOP - Manual de Operaciones.pdf.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>organigrama-heves.png</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>PATA.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>reporte-de-seguimiento-poi-anual-2025-actualizado-v-02.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>TUPA.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>7910340-rd-131-2026-de-heves-parte-01.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>7910340-rd-131-2026-de-heves-parte-02.pdf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>7910340-rd-131-2026-de-heves-parte-03.pdf</span>
                </div>
              </div>
            </div>
          </HerramientaRecopilacionDatos>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <FileText className="text-blue-600 flex-shrink-0" size={22} />
              3. Análisis de Datos
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Análisis de Interesados</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Identificación sistemática de información sobre interesados:
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">Matriz Poder/Interés</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded border-2 border-red-400">
                      <strong>Alto Poder / Alto Interés</strong>
                      <p className="text-muted-foreground mt-1">Gestionar de cerca (ej: Directorio Hospital)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-yellow-400">
                      <strong>Alto Poder / Bajo Interés</strong>
                      <p className="text-muted-foreground mt-1">Mantener satisfecho (ej: Autoridades de salud)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-green-400">
                      <strong>Bajo Poder / Alto Interés</strong>
                      <p className="text-muted-foreground mt-1">Mantener informado (ej: Pacientes, familias)</p>
                    </div>
                    <div className="bg-white p-3 rounded border-2 border-border">
                      <strong>Bajo Poder / Bajo Interés</strong>
                      <p className="text-muted-foreground mt-1">Monitorear (ej: Público general)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Análisis de Documentos</h4>
                <p className="text-muted-foreground text-sm">
                  Revisión de convenios, acuerdos y documentación existente para identificar interesados adicionales.
                </p>
              </div>
            </div>
          </div>

          {/* <HerramientaRepresentacionDatos /> */}

          {/* <HerramientaReuniones /> */}
        </div>
      </section>
    </div>
  );
}
