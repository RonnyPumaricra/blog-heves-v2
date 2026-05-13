import { Users, Settings, FileSpreadsheet, CheckCircle } from 'lucide-react';
import { PageTitle, HerramientaRecopilacionDatos, HerramientaRepresentacionDatos } from '../components/sections';

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

          <HerramientaRepresentacionDatos idx={2} />

          {/* <HerramientaReuniones /> */}
        </div>
      </section>
    </div>
  );
}
