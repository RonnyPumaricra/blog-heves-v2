interface SharedToolProps {
  title?: string;
  description?: string;
  items?: string[];
}

export function HerramientaJuicioExpertos({ title = 'Juicio de Expertos', description, items }: SharedToolProps) {
  const defaultItems = [
    '• Gestión de proyectos y metodologías aplicables',
    '• Conocimiento profundo del entorno y la comunidad objetivo',
    '• Experiencia en engagement con interesados en el sector',
    '• Comprensión del entorno político y regulatorio',
  ];

  const content = items && items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-3">
        Consultar con personas con conocimientos especializados en:
        {description && ` ${description}`}
      </p>
      <ul className="space-y-2 text-gray-700 ml-4">
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function HerramientaRecopilacionDatos({ title = 'Recopilación de Datos', items, children }: { title?: string; items?: { tool: string; description: string }[]; children?: React.ReactNode }) {
  const defaultItems = [
    { tool: 'Cuestionarios y Encuestas', description: 'Para recopilar información de un gran número de posibles interesados de manera rápida.' },
    { tool: 'Lluvia de Ideas (Brainstorming)', description: 'Sesiones con el equipo del proyecto para identificar todos los posibles interesados.' },
  ];

  const content = items && items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-4">
        {content.map((item, i) => (
          <div key={i}>
            <h4 className="font-semibold text-gray-900 mb-2">{item.tool}</h4>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export function HerramientaRepresentacionDatos({ title = 'Representación de Datos', description, children }: { title?: string; description?: string; children?: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Mapas Mentales</h4>
          <p className="text-gray-700 text-sm">
            Representación visual de las relaciones entre interesados y el proyecto.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Grillas de Clasificación de Interesados</h4>
          <p className="text-gray-700 text-sm mb-2">
            Clasificación según múltiples dimensiones:
          </p>
          <ul className="text-sm text-gray-700 ml-4 space-y-1">
            <li>• Nivel de poder / influencia</li>
            <li>• Nivel de interés / impacto</li>
            <li>• Actitud (partidario, neutral, opositor)</li>
            <li>• Urgencia de necesidades</li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}

export function HerramientaReuniones({ title = 'Reuniones', items }: { title?: string; items?: string[] }) {
  const defaultItems = [
    '• Desarrollar una comprensión común de los interesados clave',
    '• Analizar el nivel de participación de cada interesado',
    '• Identificar formas de involucrar a cada interesado',
    '• Planificar estrategias de comunicación personalizadas',
  ];

  const content = items && items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-3">
        Reuniones con el equipo del proyecto y expertos para:
      </p>
      <ul className="space-y-2 text-gray-700 ml-4">
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
