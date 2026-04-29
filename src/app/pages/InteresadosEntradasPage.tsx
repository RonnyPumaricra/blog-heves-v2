import { Users, ArrowRight, CheckCircle, MapPin, Shield, FileText, AlertTriangle, Clock } from 'lucide-react';

function PendingSection({ number, title, children, noteText }: {
  number: string;
  title: string;
  children: React.ReactNode;
  noteText?: string;
}) {
  return (
    <div className="bg-white border-2 border-dashed border-amber-400 rounded-lg overflow-hidden">
      <div className="bg-amber-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 p-2 rounded-lg">
            <Clock className="text-white" size={20} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            {number}. {title}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
          <AlertTriangle size={14} />
          Pendiente
        </span>
      </div>

      <div className="px-6 py-5">
        <div className="text-gray-600">
          {children}
        </div>

        <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
          <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-sm font-semibold text-amber-800 mb-1">Contenido por completar</p>
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
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Users className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Identificar a los Interesados
            </h1>
            <p className="text-gray-600 mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Proceso de identificar a las personas, grupos u organizaciones que podrían afectar o ser
          afectados por el proyecto, así como analizar y documentar información relevante relativa a
          sus intereses, participación, interdependencias, influencia y posible impacto en el éxito del proyecto.
        </p>
      </div>

      <section className="mb-12">
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ArrowRight className="text-green-600" size={24} />
            Entradas
          </h2>
        </div>

        <div className="space-y-6">
          {/* 1. Acta de Constitución — Pendiente */}
          <PendingSection
            number="1"
            title="Acta de Constitución del Proyecto"
            noteText="Esta sección muestra la estructura genérica según el PMBOK. El contenido específico del proyecto HEVES — incluyendo datos reales del Acta de Constitución — será añadido conforme se avance en la formulación del proyecto."
          >
            <p className="text-gray-700 mb-3">
              Proporciona información sobre interesados clave, propósito del proyecto y autoridad del director:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Propósito y justificación del proyecto</li>
              <li>• Objetivos medibles y criterios de éxito</li>
              <li>• Lista inicial de interesados identificados</li>
              <li>• Director del proyecto y patrocinador principal</li>
            </ul>
          </PendingSection>

          {/* 2. Documentos de Negocio — Pendiente */}
          <PendingSection number="2" title="Documentos de Negocio">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Caso de Negocio:</strong> Identifica interesados que se beneficiarán del proyecto
                y aquellos que contribuyen a su financiamiento.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de Beneficios:</strong> Detalla quiénes recibirán los beneficios
                del proyecto social y cuándo.</span>
              </li>
            </ul>
          </PendingSection>

          {/* 3. Plan para la Dirección del Proyecto — Pendiente */}
          <PendingSection number="3" title="Plan para la Dirección del Proyecto">
            <p className="text-gray-700 mb-3">
              Componentes relevantes incluyen:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Plan de Gestión de las Comunicaciones</li>
              <li>• Plan de Involucramiento de los Interesados</li>
            </ul>
          </PendingSection>

          {/* 4. Documentos del Proyecto — Pendiente */}
          <PendingSection number="4" title="Documentos del Proyecto">
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Registro de cambios</li>
              <li>• Registro de incidentes</li>
              <li>• Registro de lecciones aprendidas de proyectos similares</li>
            </ul>
          </PendingSection>

          {/* 5. Acuerdos — Pendiente */}
          <PendingSection number="5" title="Acuerdos">
            <p className="text-gray-700 mb-3">
              Identifican a los interesados relacionados con contratos y convenios:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Organizaciones comunitarias asociadas</li>
              <li>• Proveedores de servicios médicos externos</li>
              <li>• Entidades financiadoras del proyecto</li>
              <li>• Socios estratégicos en la implementación</li>
            </ul>
          </PendingSection>

          {/* 6. Factores Ambientales — COMPLETO */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              6. Factores Ambientales de la Empresa
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

          {/* 7. Activos de los Procesos — COMPLETO */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              7. Activos de los Procesos de la Organización
            </h3>
            <p className="text-gray-700 mb-4">
              El <strong>Mapa de Procesos 2024 del HEVES</strong> contiene la ficha técnica oficial del proceso <strong>PS05 (Gestión de Tecnologías de la Información)</strong>. Esta ficha constituye la <em>plantilla institucional</em> sobre la cual se diseñarán los nuevos subprocesos ITIL. Conocerla en detalle es fundamental para que el modelo TO-BE sea adoptable por el HEVES.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-3 border border-gray-300 w-1/3">Campo de la Ficha</th>
                    <th className="text-left p-3 border border-gray-300 w-2/3">Contenido Real — PS05: Gestión de Tecnologías de la Información</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Código</td>
                    <td className="p-3 border border-gray-300">PS05</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Tipo de Proceso</td>
                    <td className="p-3 border border-gray-300">Proceso de Soporte</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Versión</td>
                    <td className="p-3 border border-gray-300">V.01 (aprobada 2024)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Objetivo del Proceso</td>
                    <td className="p-3 border border-gray-300">Generar, procesar y desarrollar soluciones en tecnologías de información para la óptima gestión de los procesos del HEVES.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Dueño del Proceso</td>
                    <td className="p-3 border border-gray-300">Jefe(a) de la Unidad de Tecnologías de la Información — actualmente: Paola Llave Escobedo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Alcance</td>
                    <td className="p-3 border border-gray-300">Comprende a todas las Unidades de Organización del HEVES.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Subprocesos Nivel 1</td>
                    <td className="p-3 border border-gray-300">PS05.01 — Gestión de Desarrollo del Software; PS05.02 — Gestión de la Infraestructura Tecnológica</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Entradas / Insumos</td>
                    <td className="p-3 border border-gray-300">Plan Estratégico de TI (PETI) IGSS, Arquitectura de TIC a alto nivel, Plan de Gobierno Abierto, Proyectos de TI, Solicitud de cambio o mantenimiento, Requerimiento TIC de unidades orgánicas.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Salidas / Productos PS05.01</td>
                    <td className="p-3 border border-gray-300">Proyectos de soluciones tecnológicas, mantenimientos y actualizaciones, generación de data estadística, informe del pase a producción, implementación de soluciones tecnológicas y acta de conformidad, capacitación en sistemas.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Salidas / Productos PS05.02</td>
                    <td className="p-3 border border-gray-300">Mantenimiento preventivo y correctivo de infraestructura tecnológica, procesamiento y almacenamiento de información, arquitectura de interoperabilidad, disponibilidad de servicios de Tecnología de Información.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Indicadores de Desempeño</td>
                    <td className="p-3 border border-gray-300">Porcentaje de requerimientos técnico-informáticos atendidos; Control de calidad de software.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Controles</td>
                    <td className="p-3 border border-gray-300">Informe de Seguimiento de proyectos TIC; Registro de proyectos atendidos.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Sistemas Informáticos</td>
                    <td className="p-3 border border-gray-300">Sistema de Gestión Documental, SIG SALUD, Sistema informático de Emergencia, Sistema informático de Consultorios externos, Redes de comunicación, Servidores virtualizados.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Equipos</td>
                    <td className="p-3 border border-gray-300">Computadoras, impresoras, escáneres, faxeteras, anexos, celulares, teléfonos, accesorios de cómputo, central telefónica, switcher.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 border border-gray-300 font-semibold">Elaborado por</td>
                    <td className="p-3 border border-gray-300">Ing. Walter William Rivera Valerio — Unidad de Tecnologías de la Información</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-300 font-semibold">Aprobado por</td>
                    <td className="p-3 border border-gray-300">Mg. Jesús Llanos López — Oficina de Planeamiento y Presupuesto (revisión) / Ing. Rivera Valerio (aprobación) — Fecha: 03/07/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">
              Fuente: Mapa de Procesos HEVES 2024 — Ficha PS05: Gestión de Tecnologías de la Información (pp. 47–48).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
