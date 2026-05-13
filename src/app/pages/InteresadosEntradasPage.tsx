import { Users, ArrowRight, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { PageTitle, EntradaFactoresAmbientalesHEVES, EntradaActivosProcesosHEVES } from '../components/sections';

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

export default function InteresadosEntradasPage() {
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
        <div className="bg-green-50 dark:bg-green-950/40 dark:border-green-400 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <ArrowRight className="text-green-600" size={24} />
            Entradas
          </h2>
        </div>

        <div className="space-y-6">
          {/* <PendingSection */}
          {/*   number="1" */}
          {/*   title="Acta de Constitución del Proyecto" */}
          {/*   noteText="Esta sección muestra la estructura genérica según el PMBOK. El contenido específico del proyecto HEVES — incluyendo datos reales del Acta de Constitución — será añadido conforme se avance en la formulación del proyecto." */}
          {/* > */}
          {/*   <p className="text-muted-foreground mb-3"> */}
          {/*     Proporciona información sobre interesados clave, propósito del proyecto y autoridad del director: */}
          {/*   </p> */}
          {/*   <ul className="space-y-2 text-muted-foreground ml-4"> */}
          {/*     <li>• Propósito y justificación del proyecto</li> */}
          {/*     <li>• Objetivos medibles y criterios de éxito</li> */}
          {/*     <li>• Lista inicial de interesados identificados</li> */}
          {/*     <li>• Director del proyecto y patrocinador principal</li> */}
          {/*   </ul> */}
          {/* </PendingSection> */}
          {/**/}
          {/* <PendingSection number="2" title="Documentos de Negocio"> */}
          {/*   <ul className="space-y-2 text-muted-foreground"> */}
          {/*     <li className="flex items-start gap-2"> */}
          {/*       <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} /> */}
          {/*       <span><strong>Caso de Negocio:</strong> Identifica interesados que se beneficiarán del proyecto */}
          {/*       y aquellos que contribuyen a su financiamiento.</span> */}
          {/*     </li> */}
          {/*     <li className="flex items-start gap-2"> */}
          {/*       <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} /> */}
          {/*       <span><strong>Plan de Gestión de Beneficios:</strong> Detalla quiénes recibirán los beneficios */}
          {/*       del proyecto social y cuándo.</span> */}
          {/*     </li> */}
          {/*   </ul> */}
          {/* </PendingSection> */}
          {/**/}
          {/* <PendingSection number="3" title="Plan para la Dirección del Proyecto"> */}
          {/*   <p className="text-muted-foreground mb-3"> */}
          {/*     Componentes relevantes incluyen: */}
          {/*   </p> */}
          {/*   <ul className="space-y-2 text-muted-foreground ml-4"> */}
          {/*     <li>• Plan de Gestión de las Comunicaciones</li> */}
          {/*     <li>• Plan de Involucramiento de los Interesados</li> */}
          {/*   </ul> */}
          {/* </PendingSection> */}
          {/**/}
          {/* <PendingSection number="4" title="Documentos del Proyecto"> */}
          {/*   <ul className="space-y-2 text-muted-foreground ml-4"> */}
          {/*     <li>• Registro de cambios</li> */}
          {/*     <li>• Registro de incidentes</li> */}
          {/*     <li>• Registro de lecciones aprendidas de proyectos similares</li> */}
          {/*   </ul> */}
          {/* </PendingSection> */}
          {/**/}
          {/* <PendingSection number="5" title="Acuerdos"> */}
          {/*   <p className="text-muted-foreground mb-3"> */}
          {/*     Identifican a los interesados relacionados con contratos y convenios: */}
          {/*   </p> */}
          {/*   <ul className="space-y-2 text-muted-foreground ml-4"> */}
          {/*     <li>• Organizaciones comunitarias asociadas</li> */}
          {/*     <li>• Proveedores de servicios médicos externos</li> */}
          {/*     <li>• Entidades financiadoras del proyecto</li> */}
          {/*     <li>• Socios estratégicos en la implementación</li> */}
          {/*   </ul> */}
          {/* </PendingSection> */}

          <EntradaFactoresAmbientalesHEVES idx={1} />

          <EntradaActivosProcesosHEVES idx={2}/>
        </div>
      </section>
    </div>
  );
}
