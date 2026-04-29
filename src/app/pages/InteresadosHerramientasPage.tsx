import { Users, ArrowRight, CheckCircle, Settings, FileSpreadsheet, AlertTriangle, Clock } from 'lucide-react';

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

export default function InteresadosHerramientasPage() {
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
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="text-blue-600" size={24} />
            Herramientas y Técnicas
          </h2>
        </div>

        <div className="space-y-6">
          {/* 1. Juicio de Expertos — Pendiente */}
          <PendingSection number="1" title="Juicio de Expertos">
            <p className="text-gray-700 mb-3">
              Consultar con personas con conocimientos especializados en:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Gestión de proyectos sociales y hospitalarios</li>
              <li>• Conocimiento profundo de la comunidad objetivo</li>
              <li>• Experiencia en stakeholder engagement en salud</li>
              <li>• Comprensión del entorno político y regulatorio</li>
            </ul>
          </PendingSection>

          {/* 2. Recopilación de Datos — COMPLETO */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-blue-600 flex-shrink-0" size={22} />
              2. Recopilación de Datos
            </h3>
            <p className="text-gray-700 mb-4">
              Los documentos institucionales del HEVES han sido recopilados y organizados en el siguiente repositorio:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <a
                href="https://drive.google.com/drive/folders/1B618R5qmcnAc9ccCFlncauqO-kYgIhuk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:text-blue-800 underline flex items-center gap-2"
              >
                <FileSpreadsheet size={18} />
                Repositorio de Documentos Institucionales HEVES
              </a>
            </div>
            <p className="text-gray-700 mb-3 text-sm">Documentos incluidos:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
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
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Cuestionarios y Encuestas</h4>
                <p className="text-gray-600 text-sm">
                  Para recopilar información de un gran número de posibles interesados de manera rápida.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Lluvia de Ideas (Brainstorming)</h4>
                <p className="text-gray-600 text-sm">
                  Sesiones con el equipo del proyecto para identificar todos los posibles interesados.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Matriz Poder-Interés — COMPLETA */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-blue-600 flex-shrink-0" size={22} />
              3. Matriz Poder — Interés
            </h3>
            <p className="text-gray-700 mb-4">
              La <strong>Matriz Poder–Interés</strong> clasifica a los interesados según su nivel de autoridad sobre el proyecto (<strong>Poder</strong>) y su grado de involucramiento con los resultados (<strong>Interés</strong>). Esta herramienta permite determinar la estrategia de gestión aplicable a cada grupo de stakeholders, optimizando los esfuerzos de comunicación y participación durante el ciclo de vida del proyecto.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
              <p className="text-gray-700 text-sm">
                <strong>Nota metodológica:</strong><br />
                <strong>Poder</strong> = capacidad de autoridad, influencia o decisión sobre el proyecto.<br />
                <strong>Interés</strong> = grado de preocupación, dependencia o involucramiento con los resultados del proyecto.
              </p>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Clasificación de Interesados según Poder e Interés
            </h4>

            <div className="mb-6">
              <div className="flex">
                <div className="w-24 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500 rotate-0">Poder</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="text-center text-xs font-bold text-gray-600 py-1">INTERÉS BAJO</div>
                  <div className="text-center text-xs font-bold text-gray-600 py-1">INTERÉS ALTO</div>
                </div>
              </div>

              <div className="flex">
                <div className="w-24 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">ALTO</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                    <h5 className="font-bold text-amber-800 text-sm mb-1">MANTENER SATISFECHOS</h5>
                    <p className="text-xs text-amber-700 mb-2 italic">Alto poder, bajo interés</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• MINSA</li>
                      <li>• Liana Díaz Chaña (OCI)</li>
                      <li>• Eduardo Rojas Lecca (Administración)</li>
                      <li>• Marco Cumpa Cortez (OPP)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                    <h5 className="font-bold text-red-800 text-sm mb-1">GESTIONAR DE CERCA</h5>
                    <p className="text-xs text-red-700 mb-2 italic">Alto poder, alto interés — Stakeholders clave</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Hugo Rojas Olivera (Director Ejecutivo)</li>
                      <li>• Luis Almanza Cáceres (Asesor Dirección)</li>
                      <li>• Paola Llave Escobedo (Jefa UTI)</li>
                      <li>• Equipo Docente y Estudiantil UNTELS</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex mt-1">
                <div className="w-24 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">BAJO</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                    <h5 className="font-bold text-gray-700 text-sm mb-1">MONITOREAR</h5>
                    <p className="text-xs text-gray-600 mb-2 italic">Bajo poder, bajo interés</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Marcos Vivas (Asesoría Jurídica)</li>
                      <li>• Shirley Ortiz (Logística)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                    <h5 className="font-bold text-blue-800 text-sm mb-1">MANTENER INFORMADOS</h5>
                    <p className="text-xs text-blue-700 mb-2 italic">Bajo poder, alto interés</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Personal Asistencial de Emergencia y UCI</li>
                      <li>• Personal de Enfermería</li>
                      <li>• Personal de Apoyo al Diagnóstico y Farmacia</li>
                      <li>• Personal Médico de Hospitalización</li>
                      <li>• Jonathan Paredes (Gestión de Calidad)</li>
                      <li>• René Camilla (Recursos Humanos)</li>
                      <li>• Giancarlo Jamanca (Ingeniería Clínica)</li>
                      <li>• Mónica Ávila (Articulación Prestacional)</li>
                      <li>• Pacientes del HEVES</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Representación de Datos — Pendiente */}
          <PendingSection number="4" title="Representación de Datos">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Mapas Mentales</h4>
                <p className="text-gray-600 text-sm">
                  Representación visual de las relaciones entre interesados y el proyecto.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Grillas de Clasificación de Interesados</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Clasificación según múltiples dimensiones:
                </p>
                <ul className="text-sm text-gray-600 ml-4 space-y-1">
                  <li>• Nivel de poder / influencia</li>
                  <li>• Nivel de interés / impacto</li>
                  <li>• Actitud (partidario, neutral, opositores)</li>
                  <li>• Urgencia de necesidades</li>
                </ul>
              </div>
            </div>
          </PendingSection>

          {/* 5. Reuniones — Pendiente */}
          <PendingSection number="5" title="Reuniones">
            <p className="text-gray-700 mb-3">
              Reuniones de perfil de interesados con el equipo del proyecto y expertos para:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Desarrollar una comprensión común de los interesados clave</li>
              <li>• Analizar el nivel de participación de cada interesado</li>
              <li>• Identificar formas de involucrar a cada interesado</li>
              <li>• Planificar estrategias de comunicación personalizadas</li>
            </ul>
          </PendingSection>
        </div>
      </section>
    </div>
  );
}
