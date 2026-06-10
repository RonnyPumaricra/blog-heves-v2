import { useState } from 'react';
import { Scale, LayoutGrid } from 'lucide-react';

type TelosTab = 'tecnica' | 'economica' | 'legal' | 'operativa' | 'tiempos';

const TELOS_TABS: { id: TelosTab; label: string }[] = [
  { id: 'tecnica',   label: 'Técnica' },
  { id: 'economica', label: 'Económica' },
  { id: 'legal',     label: 'Legal / Regulatoria' },
  { id: 'operativa', label: 'Operativa' },
  { id: 'tiempos',   label: 'Tiempos (Scheduling)' },
];

const TELOS_CONTENT: Record<TelosTab, { title: string; glpi: string; jira: string }> = {
  tecnica: {
    title: 'Viabilidad Técnica (T)',
    glpi: 'Altamente viable. Aprovecha de inmediato el pool de servidores virtualizados de la UTI (bajo el proceso PS05.02 de gestión de infraestructura), requiriendo únicamente tecnologías open-source (Debian, Apache, MariaDB) dominadas por el equipo local.',
    jira: 'Viable, pero genera dependencia crítica del canal externo de internet. Ante cortes de fibra en el distrito de Villa El Salvador, el sistema de soporte en UCI y Emergencia quedaría incomunicado.',
  },
  economica: {
    title: 'Viabilidad Económica (E)',
    glpi: 'Viabilidad total. El costo de licenciamiento es de S/. 0.00 debido a su naturaleza open-source bajo GPLv3. Solo requiere la reasignación de horas del equipo de TI.',
    jira: 'Viabilidad baja. Representa un gasto recurrente en dólares (estimado en S/. 16,416 anuales para 12 agentes), sujeto a fluctuaciones de tipo de cambio y demoras burocráticas de desembolso ministerial.',
  },
  legal: {
    title: 'Viabilidad Legal y Regulatoria (L)',
    glpi: 'Alineación absoluta. Al mantener el 100% de la data asistencial e historiales de incidentes de software clínico dentro del servidor físico del HEVES, cumple a cabalidad con la Ley N° 29733 (Protección de Datos Personales en Salud).',
    jira: 'Riesgo legal elevado. El almacenamiento de metadatos hospitalarios en la nube extranjera de Atlassian (AWS EE.UU.) puede generar observaciones de control y auditorías negativas del OCI si no se tramitan permisos complejos.',
  },
  operativa: {
    title: 'Viabilidad Operativa (O)',
    glpi: 'Favorable. Al parametrizarse con flujos de escalamiento adaptados localmente para médicos de Emergencia (incluyendo acceso por códigos QR en terminales), elimina la informalidad actual y reduce la curva de resistencia del personal clínico.',
    jira: 'Muy favorable a nivel técnico por su interfaz pulida y automatizaciones avanzadas, pero vulnerable a la inestabilidad operativa en caso de suspenderse la cuenta por demoras en los pagos de la administración.',
  },
  tiempos: {
    title: 'Viabilidad de Tiempos / Scheduling (S)',
    glpi: 'Viabilidad controlada. El cronograma del proyecto predictivo bajo PMBOK v6 contempla un desarrollo, configuración piloto e inducción en un período controlado de 10 semanas (un semestre académico).',
    jira: 'Despliegue extremadamente rápido (en días), pero su proceso de contratación formal por licitación pública (PAC) dilata el inicio real del proyecto por meses.',
  },
};

export default function AnalisisComparativaSection() {
  const [telosTab, setTelosTab] = useState<TelosTab>('tecnica');
  const [wDatos,  setWDatos]  = useState(35);
  const [wCostos, setWCostos] = useState(30);
  const [wVel,    setWVel]    = useState(15);
  const [wAut,    setWAut]    = useState(20);

  const total = wDatos + wCostos + wVel + wAut;
  const nD = wDatos / total, nC = wCostos / total, nV = wVel / total, nA = wAut / total;

  const scoreGlpi = 10 * nD + 10 * nC + 7.5 * nV + 10 * nA;
  const scoreJira = 5  * nD +  4 * nC + 10  * nV +  3 * nA;
  const winner    = scoreGlpi >= scoreJira ? 'glpi' : 'jira';

  const currentTelos = TELOS_CONTENT[telosTab];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Formulación de Proyectos de TI — UNTELS 2026</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">Análisis Comparativo de Viabilidad</h2>
          <p className="text-sm text-muted-foreground mt-1">Evaluación multidimensional TELOS para la selección de la mesa de ayuda del HEVES.</p>
        </div>
        <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
          <Scale className="w-4 h-4 text-sky-600" />
          Estudio de Selección
        </span>
      </div>

      {/* Marco TELOS */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-5">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-sky-600" />
          El Marco de Viabilidad TELOS
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Para garantizar una toma de decisiones auditable y alineada a las directrices de la Dirección Ejecutiva y el OCI, el equipo de proyecto adaptó el estándar <strong className="text-foreground">TELOS</strong>. Este marco descompone la viabilidad de la solución en cinco dimensiones críticas para el contexto de un hospital de emergencias de nivel III.
        </p>

        {/* Tabs TELOS */}
        <div className="flex flex-wrap gap-2 border-b border-border pb-4">
          {TELOS_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTelosTab(t.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                telosTab === t.id
                  ? 'bg-sky-600 text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-3 pt-1">
          <h4 className="font-bold text-foreground text-sm">{currentTelos.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">GLPI On-Premise:</strong> {currentTelos.glpi}
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Jira Cloud SaaS:</strong> {currentTelos.jira}
          </p>
        </div>
      </div>

      {/* Matriz de selección ponderada */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Matriz de Selección Decisional Ponderada</h3>
          <p className="text-xs text-muted-foreground mt-1">Ajuste los pesos de importancia estratégica para recalcular instantáneamente el score decisional de ambas alternativas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sliders */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest border-b border-border pb-2">Pesos Estratégicos</h4>
            {[
              { label: 'Soberanía de Datos Clínicos (Ley N° 29733)', value: wDatos,  setter: setWDatos,  min: 10, max: 50, step: 5 },
              { label: 'Costo de Adquisición (Presupuesto)',          value: wCostos, setter: setWCostos, min: 10, max: 50, step: 5 },
              { label: 'Velocidad de Despliegue',                     value: wVel,    setter: setWVel,    min: 5,  max: 30, step: 5 },
              { label: 'Autonomía de Operación (Sin internet)',        value: wAut,    setter: setWAut,    min: 10, max: 40, step: 5 },
            ].map(s => {
              const pct = Math.round((s.value / total) * 100);
              return (
                <div key={s.label} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                    <span>{s.label}</span>
                    <span className="text-sky-600 dark:text-sky-400 font-bold">{pct}%</span>
                  </div>
                  <input
                    type="range" min={s.min} max={s.max} step={s.step} value={s.value}
                    onChange={e => s.setter(Number(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                </div>
              );
            })}
          </div>

          {/* Panel ganador */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-slate-400 text-[10px] uppercase font-black tracking-widest block">Alternativa Seleccionada Formalmente</span>
              <h4 className={`text-2xl font-black mt-1 bg-clip-text text-transparent bg-gradient-to-r ${
                winner === 'glpi'
                  ? 'from-emerald-400 to-sky-400'
                  : 'from-yellow-400 to-amber-400'
              }`}>
                {winner === 'glpi' ? 'Alternativa 1: GLPI On-Premise' : 'Alternativa 2: Jira Cloud SaaS'}
              </h4>
            </div>

            <div className="space-y-4 my-6">
              {/* Barra GLPI */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>GLPI On-Premise (Local)</span>
                  <span className="text-emerald-400 font-bold">{scoreGlpi.toFixed(1)} / 10</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${scoreGlpi * 10}%` }}
                  />
                </div>
              </div>
              {/* Barra Jira */}
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Jira Service Management (Cloud)</span>
                  <span className="text-yellow-400 font-bold">{scoreJira.toFixed(1)} / 10</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 rounded-full transition-all duration-300"
                    style={{ width: `${scoreJira * 10}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="text-[9px] text-slate-400 italic leading-tight">
              *El motor pondera la evaluación TELOS en base a los criterios definidos. Los pesos agregados se recalcularán automáticamente a un total de 100%.
            </p>
          </div>
        </div>
      </div>

      {/* Cuadro comparativo de atributos */}
      <div className="bg-card border border-border p-6 md:p-8 rounded-2xl space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">Cuadro Comparativo de Atributos de Viabilidad</h3>
          <p className="text-xs text-muted-foreground mt-1">Comparación directa de atributos críticos recopilados durante el diagnóstico AS-IS con los equipos de la UTI.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-border text-muted-foreground font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Dimensión de Selección</th>
                <th className="py-3 px-4">Alternativa 1: GLPI On-Premise</th>
                <th className="py-3 px-4">Alternativa 2: Jira Cloud SaaS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  dim: 'Costo de Licenciamiento',
                  glpi: { text: 'S/. 0.00 (Código Libre GNU GPL v3)', color: 'text-emerald-600 dark:text-emerald-400' },
                  jira: { text: 'S/. 13,000+ anuales (Tarifa en dólares por agente)', color: 'text-red-600 dark:text-red-400' },
                },
                {
                  dim: 'Custodia Legal de Datos',
                  glpi: { text: '100% Local (Servidores del Hospital)', color: 'text-emerald-600 dark:text-emerald-400' },
                  jira: { text: 'Servidores extranjeros (Atlassian / Nube Pública)', color: 'text-red-600 dark:text-red-400' },
                },
                {
                  dim: 'Tolerancia a Caídas de Red',
                  glpi: { text: 'Alta (Soporte interno sigue operativo en red local)', color: 'text-emerald-600 dark:text-emerald-400' },
                  jira: { text: 'Nula (Requiere conectividad activa a Internet)', color: 'text-red-600 dark:text-red-400' },
                },
                {
                  dim: 'Gobernanza Institucional',
                  glpi: { text: 'Alta adaptación (Se integra al Mapa de Procesos PS05)', color: 'text-muted-foreground' },
                  jira: { text: 'Requiere adendas de compras de licencias anuales en el PAC', color: 'text-muted-foreground' },
                },
              ].map(row => (
                <tr key={row.dim} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-bold text-foreground">{row.dim}</td>
                  <td className={`py-3 px-4 font-semibold ${row.glpi.color}`}>{row.glpi.text}</td>
                  <td className={`py-3 px-4 font-semibold ${row.jira.color}`}>{row.jira.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
