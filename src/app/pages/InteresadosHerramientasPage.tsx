import { Users, Settings } from 'lucide-react';
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

          <HerramientaRecopilacionDatos idx={1} />

          <HerramientaRepresentacionDatos idx={2} />

          {/* <HerramientaReuniones /> */}
        </div>
      </section>
    </div>
  );
}
