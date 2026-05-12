import { ReactNode } from 'react';
import { Shield, FileText, MapPin } from 'lucide-react';

interface SharedSectionProps {
  description?: string;
  items?: string[];
  children?: ReactNode;
}

export function EntradaFactoresAmbientales({ description, items, children }: SharedSectionProps) {
  const defaultItems = [
    '• Cultura y estructura organizacional',
    '• Estándares regulatorios y normativas gubernamentales aplicables',
    '• Infraestructura y recursos disponibles',
    '• Condiciones socioeconómicas y expectativas de la comunidad',
  ];

  const content = items && items.length > 0 ? items : defaultItems;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        Factores Ambientales de la Empresa
      </h3>
      <p className="text-gray-700 mb-4">
        Condiciones externas o internas que influyen, limitan o dirigen el proceso.
        {description && ` ${description}`}
      </p>
      <ul className="space-y-2 text-gray-700 ml-4">
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export function EntradaFactoresAmbientalesHEVES({idx}: {idx: number}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {idx}. Factores Ambientales de la Empresa
      </h3>
      <p className="text-gray-700 mb-4">
        Los factores ambientales de la empresa son condiciones externas o internas que influyen, limitan o dirigen el proceso de identificar a los interesados. Esta sección ha sido enriquecida con datos obtenidos del <strong>Manual de Operaciones del HEVES (MOP 2016)</strong> y el <strong>Mapa de Procesos del HEVES 2024</strong>, que constituyen los documentos institucionales oficiales del hospital.
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Shield className="text-blue-600 flex-shrink-0" size={20} />
          Cultura, Clima Político y Marco de Gobernanza del HEVES
        </h4>
        <p className="text-gray-700 mb-4">
          El HEVES formaliza su gobernanza mediante el <strong>Mapa de Procesos 2024</strong>, el cual define <strong>5 procesos estratégicos, 3 misionales y 7 de soporte</strong>. La <strong>Unidad de Tecnologías de la Información (PS05)</strong> es uno de los siete procesos de soporte, con alcance a todas las unidades del hospital.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="text-left p-3 border border-gray-300">Dimensión Cultural / Gobernanza</th>
                <th className="text-left p-3 border border-gray-300">Situación Real en el HEVES</th>
                <th className="text-left p-3 border border-gray-300">Evidencia Documental</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Estructura organizacional</td>
                <td className="p-3 border border-gray-300">Jerarquía vertical con 5 procesos estratégicos, 3 misionales y 7 de soporte (Nivel 0). La Unidad de TI (PS05) reporta a la Dirección Ejecutiva a través de la Oficina de Administración.</td>
                <td className="p-3 border border-gray-300 text-gray-600">Mapa de Procesos HEVES 2024 — Resolución Directoral de aprobación</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">Cultura de toma de decisiones</td>
                <td className="p-3 border border-gray-300">Centralizada en la Dirección Ejecutiva (actualmente Hugo Efrend Rojas Olivera). Toda iniciativa externa requiere acto resolutivo formal. El Mapa de Procesos fue aprobado por resolución directoral.</td>
                <td className="p-3 border border-gray-300 text-gray-600">Mapa de Procesos HEVES 2024 — Sección VII Responsabilidades</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Gobernanza de TI</td>
                <td className="p-3 border border-gray-300">La Unidad de TI (PS05) tiene dos subprocesos formales: PS05.01 Gestión de Desarrollo del Software y PS05.02 Gestión de la Infraestructura Tecnológica. <strong>No existe subproceso de gestión de incidentes ni de cambios</strong>, vacío que justifica el proyecto.</td>
                <td className="p-3 border border-gray-300 text-gray-600">Mapa de Procesos HEVES 2024 — Ficha PS05</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">Marco de gestión por procesos</td>
                <td className="p-3 border border-gray-300">El HEVES implementa gestión por procesos desde 2024, basada en la Directiva Administrativa N.° 288-MINSA/2020/OGPPM "Lineamientos para la Implementación de la Gestión por Procesos en Salud".</td>
                <td className="p-3 border border-gray-300 text-gray-600">Mapa de Procesos HEVES 2024 — Base Legal, ítem e</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Clima político interno</td>
                <td className="p-3 border border-gray-300">El OCI (ahora Liana Díaz Chaña) fiscaliza activamente. El MOP establece que los documentos de gestión deben cumplir criterios técnicos verificados por múltiples instancias antes de su aprobación.</td>
                <td className="p-3 border border-gray-300 text-gray-600">MOP HEVES 2016 — Considerandos de la Resolución Jefatural</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">Relación con MINSA y DIRIS</td>
                <td className="p-3 border border-gray-300">El HEVES es un órgano desconcentrado del MINSA. Sus procesos deben alinearse con las normas técnicas de salud y las directivas ministeriales. El Director Ejecutivo es designado por Resolución Ministerial.</td>
                <td className="p-3 border border-gray-300 text-gray-600">Mapa de Procesos HEVES 2024 — Ámbito de aplicación (Sección III)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2 italic">
          Fuente: Manual de Operaciones HEVES (MOP 2016), Resolución Jefatural N.° 3381-2016/IGSS | Mapa de Procesos HEVES 2024.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <FileText className="text-blue-600 flex-shrink-0" size={20} />
          Estándares Gubernamentales, de la Industria y Base Legal
        </h4>
        <p className="text-gray-700 mb-4">
          El proceso <strong>PS05 (Gestión de Tecnologías de la Información)</strong> del HEVES tiene su propia base legal documentada en el <strong>Mapa de Procesos 2024</strong>. Esta base legal orienta directamente los requisitos normativos que debe cumplir la propuesta ITSM del equipo UNTELS.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="text-left p-3 border border-gray-300">Norma / Estándar</th>
                <th className="text-left p-3 border border-gray-300">Descripción</th>
                <th className="text-left p-3 border border-gray-300">Relevancia Específica para el Proyecto ITSM-HEVES</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Decreto Legislativo N.° 1412 — Ley de Gobierno Digital</td>
                <td className="p-3 border border-gray-300">Marco legal para la transformación digital del Estado. Define lineamientos para la gestión de servicios digitales en entidades públicas.</td>
                <td className="p-3 border border-gray-300">Está citado directamente en la Base Legal del proceso PS05. La propuesta ITSM debe enmarcarse como iniciativa de gobierno digital.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">D.S. N.° 029-2021-PCM — Reglamento Ley Gobierno Digital</td>
                <td className="p-3 border border-gray-300">Reglamenta el uso de tecnologías y medios electrónicos en procedimientos administrativos del Estado.</td>
                <td className="p-3 border border-gray-300">Citado en la Base Legal del proceso PE02 (Gestión de la Información en Salud). Aplica directamente a la gestión de datos del sistema ITSM.</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Ley N.° 27309 — Delitos Informáticos al Código Penal</td>
                <td className="p-3 border border-gray-300">Incorpora los delitos informáticos al Código Penal Peruano.</td>
                <td className="p-3 border border-gray-300">Citada en la Base Legal de PS05. El sistema ITSM propuesto debe incluir controles de seguridad que prevengan vulnerabilidades explotables.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">Decreto Legislativo N.° 822 — Ley de Derecho de Autor (Software)</td>
                <td className="p-3 border border-gray-300">Protección jurídica del software. Regula el uso de programas informáticos en entidades del Estado.</td>
                <td className="p-3 border border-gray-300">Citado en PS05. La herramienta ITSM propuesta (GLPI u otra) debe ser de código abierto o con licencia compatible con entidades públicas.</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">RM N.° 179-2004-PCM — NTP-ISO/IEC 12207:2004</td>
                <td className="p-3 border border-gray-300">Norma Técnica Peruana sobre Procesos del Ciclo de Vida del Software. De uso obligatorio en el Sistema Nacional de Informática.</td>
                <td className="p-3 border border-gray-300">Citada en PS05 del HEVES. Los procesos TO-BE de gestión de cambios deben ser compatibles con esta norma de ciclo de vida del software.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">RS N.° 063-2020-MINSA — Lineamientos Gestión por Procesos en Salud</td>
                <td className="p-3 border border-gray-300">Establece los lineamientos para implementar la gestión por procesos en establecimientos de salud del MINSA.</td>
                <td className="p-3 border border-gray-300">Es la base legal del Mapa de Procesos del HEVES (2024). El diseño de los procesos ITIL (TO-BE) debe alinearse con esta normativa para ser institucionalizable.</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">ITIL 4 — Axelos (2019)</td>
                <td className="p-3 border border-gray-300">Marco de buenas prácticas para la gestión de servicios de TI. Define las prácticas de gestión de incidentes, solicitudes, cambios y problemas.</td>
                <td className="p-3 border border-gray-300">Marco principal del diseño TO-BE. El proceso PS05 del HEVES actualmente no incluye gestión de incidentes ni de cambios, vacío que ITIL 4 cubre directamente.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">PMBOK 6.ª Ed. — PMI (2017)</td>
                <td className="p-3 border border-gray-300">Guía de fundamentos para la dirección de proyectos.</td>
                <td className="p-3 border border-gray-300">Marco metodológico para la planificación del proyecto por el equipo UNTELS.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2 italic">
          Fuente: Mapa de Procesos HEVES 2024 — Ficha PS05, Sección 8 Base Legal | Mapa de Procesos HEVES 2024 — Ficha PE02, Base Legal.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <MapPin className="text-blue-600 flex-shrink-0" size={20} />
          Distribución Geográfica de Instalaciones y Recursos
        </h4>
        <p className="text-gray-700 mb-4">
          La infraestructura tecnológica del HEVES está documentada en las fichas de proceso del <strong>Mapa de Procesos 2024</strong>. Los sistemas TI actuales del hospital representan el ecosistema que el sistema ITSM propuesto debe cubrir.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="text-left p-3 border border-gray-300">Elemento</th>
                <th className="text-left p-3 border border-gray-300">Detalle Real del HEVES</th>
                <th className="text-left p-3 border border-gray-300">Implicancia para el Proyecto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Sede del HEVES</td>
                <td className="p-3 border border-gray-300">Av. 200 Millas S/N, cruce con Av. Pastor Sevilla (Ruta C), Villa El Salvador, Lima. Área total: más de 23,000 m². Hospital inaugurado el 7 de abril de 2016.</td>
                <td className="p-3 border border-gray-300">Sede única → sin complejidad geográfica para el diagnóstico AS-IS. El equipo UNTELS puede cubrir toda la operación en una sola visita presencial.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">Unidad de TI del HEVES</td>
                <td className="p-3 border border-gray-300">Proceso PS05 — Gestión de Tecnologías de la Información. Responsable: Paola Llave Escobedo (paola.llave@heves.gob.pe / Anexo 1103). El proceso fue elaborado por el Ing. Walter William Rivera Valerio.</td>
                <td className="p-3 border border-gray-300">Paola Llave es la dueña del proceso PS05 y principal contacto para el diagnóstico AS-IS. El Ing. Rivera Valerio puede brindar detalle técnico sobre la infraestructura actual.</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border border-gray-300 font-semibold">Sistemas TI actuales del HEVES</td>
                <td className="p-3 border border-gray-300">Según el Mapa de Procesos 2024: SISGalenPlus, INFINITT, HIS DISCAP WEB, Sistema de Emergencia, Consultorios Externos, SIAF, SIGA, STDW, redes de comunicación y servidores virtualizados.</td>
                <td className="p-3 border border-gray-300">Ninguno de estos sistemas tiene un proceso formal de gestión de incidentes documentado. La propuesta ITSM debe cubrir todos estos sistemas críticos.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border border-gray-300 font-semibold">Infraestructura de red</td>
                <td className="p-3 border border-gray-300">Red interna del HEVES con cobertura en todas las áreas. Servidores virtualizados. Conectividad a internet disponible (portal heves.gob.pe activo).</td>
                <td className="p-3 border border-gray-300">Una herramienta ITSM web (como GLPI) sería técnicamente viable sin infraestructura adicional compleja. La virtualización facilita la instalación.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
