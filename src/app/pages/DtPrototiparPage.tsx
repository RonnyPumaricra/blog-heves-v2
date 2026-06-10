import { useState } from 'react';
import { Layers } from 'lucide-react';
import { PageTitle } from '../components/sections';
import esc01 from '@/assets/esc_01.png';
import esc02 from '@/assets/esc_02.png';
import esc03 from '@/assets/esc_03.png';
import esc04 from '@/assets/esc_04.png';
import esc05 from '@/assets/esc_05.png';
import esc06 from '@/assets/esc_06.png';

type PhoneView = 'qr' | 'form' | 'success';

type SceneState = 'AS-IS' | 'TO-BE';

interface Scene {
  id: number;
  title: string;
  text: string;
  img: string;
  state: SceneState;
}

const SCENES: Scene[] = [
  {
    id: 1,
    title: 'Fase 1: Frustración Asistencial en UCI',
    text: 'El sistema SISGalenPlus se congela por completo en la terminal PC-UCI-CAMA04 dentro del área de cuidados críticos. El médico de guardia muestra una profunda frustración al verse imposibilitado de registrar las recetas médicas electrónicas o consultar el historial clínico en medio del acto médico inmediato.',
    img: esc01,
    state: 'AS-IS',
  },
  {
    id: 2,
    title: 'Fase 2: El Bypass por Canales Informales',
    text: 'Ante el bloqueo del sistema clínico y la ausencia de un canal técnico visible o inmediato, el médico recurre a su smartphone personal para enviarle un mensaje de WhatsApp a un técnico de la UTI que conoce. Este método genera una pérdida absoluta de trazabilidad y gobernanza del incidente.',
    img: esc02,
    state: 'AS-IS',
  },
  {
    id: 3,
    title: 'Fase 3: Saturación y Punto Ciego en la UTI',
    text: 'En la central de la Unidad de Tecnologías de la Información, los técnicos operan colapsados actuando como «bomberos» ante llamadas telefónicas y fallos físicos administrativos sin orden de prioridad médica. El mensaje informal de WhatsApp queda oculto en el olvido, imposibilitando que la jefa Paola Llave o el OCI capturen métricas reales.',
    img: esc03,
    state: 'AS-IS',
  },
  {
    id: 4,
    title: 'Fase 4: Activación mediante Códigos QR Oficiales',
    text: 'Bajo la nueva arquitectura del subproceso PS05.03, el médico nota una etiqueta física con un Código QR oficial de soporte pegada en el monitor. Al escanearla con su celular, el sistema lo identifica e inicia sesión automáticamente a través de la integración LDAP con el Active Directory institucional, eliminando logins manuales molestos.',
    img: esc04,
    state: 'TO-BE',
  },
  {
    id: 5,
    title: 'Fase 5: Formulario Simplificado e Inteligencia de SLAs',
    text: 'El smartphone abre el micro-portal móvil reactivo limitado a un máximo de 3 campos obligatorios. Al seleccionar el fallo del sistema, el motor de reglas de negocio configurado en el Sandbox de GLPI detecta automáticamente la ubicación crítica de UCI y autocalcula un SLA prioritario coercitivo de menos de 15 minutos en base a la RS N° 063-2020-MINSA.',
    img: esc05,
    state: 'TO-BE',
  },
  {
    id: 6,
    title: 'Fase 6: Gobernanza Digital y Control de Calidad Exitoso',
    text: 'El ticket inyectado dispara una sirena sonora intermitente en la consola central de la UTI, alertando al especialista para resolver la avería a tiempo. Al finalizar el mes, el sistema extrae automáticamente reportes inmutables y tableros limpios directos de MariaDB, blindando la gestión de la jefatura ante auditorías preventivas del Órgano de Control Institucional (OCI).',
    img: esc06,
    state: 'TO-BE',
  },
];

const SYSTEMS = [
  { value: 'SISGalenPlus', label: 'Sistemas Clínicos SISGalenPlus' },
  { value: 'INFINITT',     label: 'Visor de Imágenes Médicas INFINITT' },
  { value: 'Red',          label: 'Corte de Red Interna / Internet' },
  { value: 'Impresora',    label: 'Impresora de Fichas Médicas' },
];

const PHONE_HEADER: Record<PhoneView, string> = {
  qr:      'HEVES - Soporte Digital TI',
  form:    'Crear Reporte Técnico',
  success: 'Confirmación de Ticket',
};

export default function DtPrototiparPage() {
  const [currentScene, setCurrentScene]   = useState(1);
  const [phoneView, setPhoneView]         = useState<PhoneView>('qr');
  const [selectedSystem, setSelectedSystem] = useState('');
  const [priority, setPriority]           = useState<'Alta' | 'Media'>('Alta');
  const [description, setDescription]     = useState('');
  const [ticketId, setTicketId]           = useState('');
  const [ticketPlatform, setTicketPlatform] = useState('');
  const [ticketSla, setTicketSla]         = useState<'Alta' | 'Media'>('Alta');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTicketId('#HEVES-2026-' + Math.floor(1000 + Math.random() * 9000));
    setTicketPlatform(selectedSystem);
    setTicketSla(priority);
    setPhoneView('success');
  }

  function handleReset() {
    setSelectedSystem('');
    setPriority('Alta');
    setDescription('');
    setPhoneView('qr');
  }

  return (
    <div className="w-full">
      <PageTitle
        icon={Layers}
        iconBgColor="bg-blue-600"
        title="Prototipar"
        subtitle="Design Thinking"
        description="Construir representaciones tangibles de las ideas para explorar posibles soluciones."
      />

      <div className="bg-card border border-border rounded-3xl p-8 mt-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">

        {/* ── Sección 1: Justificación ── */}
        <div className="border-l-4 border-l-sky-500 pl-3 mb-4">
          <h2 className="text-base font-bold text-foreground uppercase tracking-wide">
            1. Justificación de la Reactividad y Objetivos de Ingeniería
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-8 text-justify">
          Este artefacto permite al usuario experimentar el flujo exacto de eventos: desde el escaneo simulado
          del Código QR en una cama clínica hasta el cálculo automático del Acuerdo de Nivel de Servicio (SLA)
          basado en prioridades reales del hospital. Esto demuestra empíricamente cómo el subproceso propuesto
          erradica los cuellos de botella del canal informal de soporte.
        </p>

        {/* ── Layout paralelo ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Columna izquierda — Simulador UX */}
          <div className="bg-muted/30 dark:bg-slate-900/30 border border-border rounded-2xl p-6">
            <div className="border-b border-border pb-4 mb-6">
              <h3 className="text-base font-bold text-foreground flex flex-wrap items-center gap-2">
                Nivel 1: Simulador del Portal de Canales Médicos
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Reactivo
                </span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Haga clic en los componentes del teléfono para simular la experiencia del médico de guardia.
              </p>
            </div>

            {/* Marco físico del teléfono — colores fijos (simula un dispositivo real) */}
            <div className="w-[335px] h-[600px] rounded-[40px] bg-slate-900 mx-auto p-3 shadow-2xl border-4 border-slate-700">
              <div className="bg-white w-full h-full rounded-[28px] overflow-hidden flex flex-col">

                {/* Barra superior */}
                <div className="bg-sky-600 text-white text-center py-4 text-[13px] font-semibold tracking-wide shrink-0">
                  {PHONE_HEADER[phoneView]}
                </div>

                {/* Cuerpo con scroll */}
                <div className="px-4 py-4 overflow-y-auto flex-1">

                  {/* Vista 1: QR */}
                  {phoneView === 'qr' && (
                    <div className="text-center pt-10">
                      <div
                        className="w-[150px] h-[150px] border-[3px] border-dashed border-sky-500 rounded-2xl mx-auto mb-6 bg-sky-50 cursor-pointer hover:scale-105 hover:bg-sky-100 transition-all flex items-center justify-center"
                        onClick={() => setPhoneView('form')}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" className="w-14 h-14">
                          <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
                          <rect x="7"  y="7"  width="3" height="3" fill="#0284c7" />
                          <rect x="14" y="14" width="3" height="3" fill="#0284c7" />
                          <rect x="14" y="7"  width="3" height="3" fill="#0284c7" />
                          <rect x="7"  y="14" width="3" height="3" fill="#0284c7" />
                        </svg>
                      </div>
                      <p className="text-[13px] font-bold text-slate-800 mb-1">[Paso 1] Escaneo del Terminal</p>
                      <p className="text-[11px] text-slate-500 px-2">
                        <strong>Instrucción:</strong> Haga clic sobre el recuadro QR para simular la lectura de
                        la etiqueta en la estación <strong>UCI-Cama 04</strong>.
                      </p>
                    </div>
                  )}

                  {/* Vista 2: Formulario */}
                  {phoneView === 'form' && (
                    <div>
                      <p className="text-[11px] text-sky-600 text-center font-semibold bg-sky-50 px-2 py-1 rounded mb-3">
                        📍 Terminal Identificado: PC-UCI-CAMA04
                      </p>
                      <form onSubmit={handleSubmit}>
                        <label className="block text-[11.5px] font-semibold text-slate-600 mb-1">
                          1. Sistema Afectado *
                        </label>
                        <select
                          required
                          value={selectedSystem}
                          onChange={e => setSelectedSystem(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md mb-3 bg-slate-50 focus:outline-none focus:border-sky-500"
                        >
                          <option value="">-- Seleccione la plataforma --</option>
                          {SYSTEMS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>

                        <label className="block text-[11.5px] font-semibold text-slate-600 mb-1">
                          2. Prioridad de la Falla *
                        </label>
                        <select
                          required
                          value={priority}
                          onChange={e => setPriority(e.target.value as 'Alta' | 'Media')}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md mb-3 bg-slate-50 focus:outline-none focus:border-sky-500"
                        >
                          <option value="Alta">Alta Crítica (Impacto Directo en la Seguridad del Paciente)</option>
                          <option value="Media">Media Operativa (No interrumpe el acto médico inmediato)</option>
                        </select>

                        <div className={`text-[11px] font-bold px-3 py-2 rounded mb-3 border transition-colors ${
                          priority === 'Alta'
                            ? 'bg-red-50 text-red-700 border-red-200'
                            : 'bg-orange-50 text-orange-700 border-orange-200'
                        }`}>
                          ⏱️ SLA ITIL 4 Normativo: Atención {priority === 'Alta' ? '< 15 minutos' : '< 2 horas'} asignada.
                        </div>

                        <label className="block text-[11.5px] font-semibold text-slate-600 mb-1">
                          3. Síntomas Breves del Error *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                          placeholder="Ej. Pantalla congelada en Historias Clínicas…"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md mb-3 bg-slate-50 focus:outline-none focus:border-sky-500 resize-none"
                        />

                        <button
                          type="submit"
                          className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white text-[13px] font-semibold rounded-md transition-colors shadow"
                        >
                          Transmitir Ticket a la UTI
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Vista 3: Confirmación */}
                  {phoneView === 'success' && (
                    <div className="text-center py-2 px-1">
                      <div className="w-[50px] h-[50px] bg-green-100 text-green-700 text-2xl font-bold rounded-full mx-auto mb-4 flex items-center justify-center">
                        ✓
                      </div>
                      <h4 className="text-sm font-bold text-green-700 mb-1">¡Ticket Registrado e Indexado!</h4>
                      <p className="text-[11.5px] text-slate-500 mb-4 leading-snug">
                        La central del proceso <strong>PS05.03</strong> ha despachado la orden.
                      </p>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11.5px] text-left mb-4 leading-relaxed">
                        <strong>Código Interno:</strong>{' '}
                        <span className="font-bold text-slate-900">{ticketId}</span><br />
                        <strong>Ubicación Física:</strong> Servicio de Cuidados Críticos (UCI)<br />
                        <strong>Plataforma:</strong> {ticketPlatform}<br />
                        <strong>Tiempo Límite Legal:</strong>{' '}
                        <span className={`font-bold ${ticketSla === 'Alta' ? 'text-red-500' : 'text-orange-500'}`}>
                          {ticketSla === 'Alta' ? '< 15 Minutos' : '< 2 Horas'}
                        </span><br />
                        <strong>Canal de Entrada:</strong> QR-Autogestionado (Auditable)
                      </div>
                      <button
                        onClick={handleReset}
                        className="w-full py-3 bg-slate-500 hover:bg-slate-600 text-white text-[13px] font-semibold rounded-md transition-colors"
                      >
                        Simular Otro Reporte
                      </button>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha — Blueprint técnico MVP */}
          <div className="bg-muted/30 dark:bg-slate-900/30 border border-border rounded-2xl p-6">
            <div className="border-b border-border pb-4 mb-6">
              <h3 className="text-base font-bold text-foreground">
                Nivel 2: Especificaciones del Motor de Base de Datos y Reglas
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Parámetros lógicos implementados en el servidor Sandbox para auditoría del OCI y Jefatura UTI.
              </p>
            </div>

            {/* Sub-sección 1 */}
            <p className="text-[12.5px] font-bold text-foreground mb-2">🖥️ 1. Entorno Virtualizado de Pruebas Seguras</p>
            <table className="w-full text-xs border-collapse mb-5">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground border border-border">Capa</th>
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground border border-border">Especificación Técnica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Infraestructura', 'Instancia Virtualizada en Clúster de Soporte (VLAN 40 Aislada)'],
                  ['Servidor OS',     'Ubuntu Server 24.04 LTS'],
                  ['Software Desk',   'GLPI Enterprise Asset Management & Service Desk v10.0.X'],
                  ['Motor de Datos',  'MariaDB Server v10.11 con soporte transaccional InnoDB'],
                ].map(([label, value]) => (
                  <tr key={label} className="odd:bg-card even:bg-muted/20">
                    <td className="px-3 py-2 border border-border font-semibold text-foreground">{label}</td>
                    <td className="px-3 py-2 border border-border text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Sub-sección 2 */}
            <p className="text-[12.5px] font-bold text-foreground mb-2">🔑 2. Mapeo del Active Directory (AD HEVES — REQ-001)</p>
            <pre className="bg-slate-900 text-sky-400 font-mono text-[11px] p-3 rounded-md border-l-4 border-l-sky-500 overflow-x-auto mb-5 leading-relaxed whitespace-pre">
{`BaseDN: OU=Personal_Salud,OU=Usuarios,DC=heves,DC=gob,DC=pe
Filtro:  (&(objectClass=user)(memberOf=CN=Grp-Medicos,OU=Grupos))
Atributos:
  GLPI_User_ID  -> samaccountname
  User_Email    -> mail
  User_Metadata -> givenname, sn, telephonenumber`}
            </pre>

            {/* Sub-sección 3 */}
            <p className="text-[12.5px] font-bold text-foreground mb-2">⏱️ 3. Reglas de SLAs Coercitivos (REQ-002)</p>
            <div className="space-y-2">
              <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-l-red-500 text-red-800 dark:text-red-300 rounded-md px-3 py-2 text-[11.5px]">
                <strong>Alta Crítica (Emergencia / UCI):</strong> RS N° 063-2020-MINSA.
                Máximo: <strong>15 min</strong>. Acción: sirena en consola + notificación a Jefatura a los 10 min.
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-l-orange-500 text-orange-800 dark:text-orange-300 rounded-md px-3 py-2 text-[11.5px]">
                <strong>Media (Consulta Externa, Farmacia):</strong> D.L. N° 1412 (Gobierno Digital).
                Máximo: <strong>2 horas</strong>. Asignación cronológica a mesa de soporte.
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-l-green-500 text-green-800 dark:text-green-300 rounded-md px-3 py-2 text-[11.5px]">
                <strong>Baja (Áreas Administrativas):</strong> Tiempo máximo: <strong>8 horas</strong>. Proceso estándar.
              </div>
            </div>
          </div>
        </div>

        {/* ── Sección 2: Métricas de validación ── */}
        <div className="border-l-4 border-l-sky-500 pl-3 mb-4">
          <h2 className="text-base font-bold text-foreground uppercase tracking-wide">
            2. Métricas de Control de Calidad y Validación del Alcance (PMBOK 5.5)
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-5 text-justify">
          Este prototipo reactivo ha sido diseñado para superar auditorías estrictas del OCI. Los criterios de
          éxito listados a continuación deben validarse cuantitativamente en el entorno Sandbox antes del
          despliegue final:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left px-4 py-3 font-semibold border border-slate-700 w-[25%]">Criterio de Ingeniería</th>
                <th className="text-left px-4 py-3 font-semibold border border-slate-700 w-[35%]">Métrica de Aceptación Cuantitativa</th>
                <th className="text-left px-4 py-3 font-semibold border border-slate-700 w-[40%]">Método de Auditoría del Software</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-card even:bg-muted/30">
                <td className="px-4 py-3 border border-border font-semibold text-foreground align-top">Eficiencia en el Registro (UX)</td>
                <td className="px-4 py-3 border border-border text-muted-foreground align-top">
                  Tiempo total de envío de tickets <strong>&lt; 30 segundos</strong> de forma sostenida.
                  Tasa de abandono o error <strong>&lt; 5%</strong>.
                </td>
                <td className="px-4 py-3 border border-border text-muted-foreground align-top">
                  Cronometrado integrado del lado del cliente mediante pruebas de usabilidad guiadas con 15 médicos residentes del hospital.
                </td>
              </tr>
              <tr className="odd:bg-card even:bg-muted/30">
                <td className="px-4 py-3 border border-border font-semibold text-foreground align-top">Disparo y Alerta de SLAs</td>
                <td className="px-4 py-3 border border-border text-muted-foreground align-top">
                  Precisión del <strong>100%</strong> en el cálculo del tiempo de expiración y despacho de notificaciones críticas.
                </td>
                <td className="px-4 py-3 border border-border text-muted-foreground align-top">
                  Simulación forzada en MariaDB retrasando 20 tickets de Emergencia para auditar la activación de logs de escalamiento.
                </td>
              </tr>
              <tr className="odd:bg-card even:bg-muted/30">
                <td className="px-4 py-3 border border-border font-semibold text-foreground align-top">Inmutabilidad de Registros</td>
                <td className="px-4 py-3 border border-border text-muted-foreground align-top">
                  <strong>0%</strong> de alteración retroactiva de marcas de tiempo en el historial de transacciones.
                </td>
                <td className="px-4 py-3 border border-border text-muted-foreground align-top">
                  Verificación de Triggers y bases relacionales por el Ing. Walter Rivera para prevenir manipulación ante auditorías del OCI.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Sección 3: Storyboard ── */}
        <div className="border-l-4 border-l-sky-500 pl-3 mb-4 mt-10">
          <h2 className="text-base font-bold text-foreground uppercase tracking-wide">
            3. Guion Gráfico Interactivo (Storyboard)
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6 text-justify">
          Secuencia visual del flujo del Subproceso <strong>PS05.03 — Gestión de Incidentes de Servicios TI HEVES</strong>.
          Las escenas <strong>AS-IS</strong> documentan la problemática actual; las escenas <strong>TO-BE</strong> ilustran
          el flujo optimizado tras la implementación del sistema GLPI. Código de documento:&nbsp;
          <span className="font-mono text-xs">UNTELS-HEVES-ITSM-STB-05.2 · v7.0 · Junio 2026</span>.
        </p>

        <div className="bg-muted/30 dark:bg-slate-900/30 border border-border rounded-2xl p-6">
          {/* Carrusel */}
          <div className="relative">
            {/* Imagen */}
            <div className="relative w-full overflow-hidden rounded-xl border border-border bg-slate-100 dark:bg-slate-800 shadow-inner">
              <img
                key={currentScene}
                src={SCENES[currentScene - 1].img}
                alt={SCENES[currentScene - 1].title}
                className="w-full object-cover"
                style={{ maxHeight: '480px', objectPosition: 'top' }}
              />
              {/* Badge de escena */}
              <span className="absolute top-3 left-3 bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                Escena {currentScene} de {SCENES.length}
              </span>
              {/* Badge AS-IS / TO-BE */}
              <span className={`absolute top-3 right-3 text-[11px] font-bold px-3 py-1 rounded-full shadow uppercase border ${
                SCENES[currentScene - 1].state === 'AS-IS'
                  ? 'bg-red-100 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800'
                  : 'bg-green-100 text-green-800 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800'
              }`}>
                {SCENES[currentScene - 1].state}
              </span>
            </div>

            {/* Descripción */}
            <div className="mt-4 border-l-4 border-l-sky-500 pl-4 py-3 bg-card border border-border rounded-r-xl">
              <p className="text-[13.5px] font-bold text-foreground mb-1 uppercase tracking-wide">
                {SCENES[currentScene - 1].title}
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed text-justify">
                {SCENES[currentScene - 1].text}
              </p>
            </div>
          </div>

          {/* Controles de navegación */}
          <div className="flex items-center justify-between mt-5 gap-3">
            <button
              onClick={() => setCurrentScene(s => Math.max(1, s - 1))}
              disabled={currentScene === 1}
              className="px-5 py-2.5 bg-slate-900 text-white text-[13px] font-semibold rounded-md shadow transition-all hover:bg-slate-700 disabled:bg-border disabled:text-muted-foreground disabled:cursor-not-allowed disabled:shadow-none"
            >
              ◀ Escena Anterior
            </button>
            <span className="text-[13px] font-bold text-muted-foreground bg-muted px-5 py-2 rounded-full">
              {currentScene} / {SCENES.length}
            </span>
            <button
              onClick={() => setCurrentScene(s => Math.min(SCENES.length, s + 1))}
              disabled={currentScene === SCENES.length}
              className="px-5 py-2.5 bg-slate-900 text-white text-[13px] font-semibold rounded-md shadow transition-all hover:bg-slate-700 disabled:bg-border disabled:text-muted-foreground disabled:cursor-not-allowed disabled:shadow-none"
            >
              Siguiente Escena ▶
            </button>
          </div>

          {/* Miniaturas de puntos */}
          <div className="flex justify-center gap-2 mt-4">
            {SCENES.map(s => (
              <button
                key={s.id}
                onClick={() => setCurrentScene(s.id)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  s.id === currentScene
                    ? 'bg-sky-500 scale-125'
                    : 'bg-border hover:bg-sky-300'
                }`}
                aria-label={`Ir a escena ${s.id}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
