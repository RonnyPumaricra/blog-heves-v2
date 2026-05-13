import { SectionCard } from '../SectionCard'

interface CuadranteData {
  estrategia: string
  border: string
  bg: string
  darkBorder: string
  darkBg: string
  stakeholders: string[]
}

const altoBajo: CuadranteData = {
  estrategia: 'Mantener satisfechos',
  border: 'border-amber-400',
  bg: 'bg-amber-50',
  darkBorder: 'dark:border-amber-400/50',
  darkBg: 'dark:bg-amber-950/30',
  stakeholders: [
    'MINSA',
    'Liana Díaz Chaña (OCI)',
    'Eduardo Rojas Lecca (Administración)',
    'Marco Cumpa Cortez (OPP)',
  ],
}

const altoAlto: CuadranteData = {
  estrategia: 'Gestionar de cerca',
  border: 'border-red-400',
  bg: 'bg-red-50',
  darkBorder: 'dark:border-red-400/50',
  darkBg: 'dark:bg-red-950/30',
  stakeholders: [
    'Hugo Rojas Olivera (Director Ejecutivo)',
    'Luis Almanza Cáceres (Asesor Dirección)',
    'Paola Llave Escobedo (Jefa UTI)',
    'Equipo Docente y Estudiantil UNTELS',
  ],
}

const bajoBajo: CuadranteData = {
  estrategia: 'Monitorear',
  border: 'border-gray-400',
  bg: 'bg-gray-50',
  darkBorder: 'dark:border-gray-500/50',
  darkBg: 'dark:bg-gray-900/30',
  stakeholders: [
    'Marcos Vivas (Asesoría Jurídica)',
    'Shirley Ortiz (Logística)',
  ],
}

const bajoAlto: CuadranteData = {
  estrategia: 'Mantener informados',
  border: 'border-blue-400',
  bg: 'bg-blue-50',
  darkBorder: 'dark:border-blue-400/50',
  darkBg: 'dark:bg-blue-950/30',
  stakeholders: [
    'Personal Asistencial de Emergencia y UCI',
    'Personal de Enfermería',
    'Personal Apoyo al Diagnóstico y Farmacia',
    'Personal Médico de Hospitalización',
    'Jonathan Paredes (Gestión de Calidad)',
    'René Camilla (Recursos Humanos)',
    'Giancarlo Jamanca (Ingeniería Clínica)',
    'Mónica Ávila (Articulación Prestacional)',
    'Pacientes del HEVES',
  ],
}

function CuadranteCelda({ data, highlight }: { data: CuadranteData; highlight?: boolean }) {
  return (
    <td className={`border-2 p-3 align-top ${data.border} ${data.bg} ${data.darkBorder} ${data.darkBg}`}>
      <div className="flex items-center gap-1.5 mb-2">
        <span className="font-bold text-foreground text-xs uppercase tracking-wide">
          {data.estrategia}
        </span>
        {highlight && (
          <span className="text-[10px] font-bold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/50 px-1.5 py-0.5 rounded">
            CLAVE
          </span>
        )}
      </div>
      <ul className="space-y-1">
        {data.stakeholders.map((s) => (
          <li key={s} className="text-xs text-muted-foreground leading-tight">
            {s}
          </li>
        ))}
      </ul>
    </td>
  )
}

export function HerramientaMatrizPoderInteres() {
  return (
    <SectionCard title="Matriz Poder/Interés">
      <p className="mb-4">
        Clasifica a los interesados según su nivel de poder (capacidad de influir)
        y su nivel de interés en el proyecto.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border border-border p-3 bg-muted/50 text-center font-bold text-foreground w-28 text-xs uppercase tracking-wide">
                Poder \ Interés
              </th>
              <th className="border border-border p-3 bg-muted/50 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                Bajo Interés
              </th>
              <th className="border border-border p-3 bg-muted/50 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                Alto Interés
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 bg-muted/50 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                Alto Poder
              </td>
              <CuadranteCelda data={altoBajo} />
              <CuadranteCelda data={altoAlto} highlight />
            </tr>
            <tr>
              <td className="border border-border p-3 bg-muted/50 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                Bajo Poder
              </td>
              <CuadranteCelda data={bajoBajo} />
              <CuadranteCelda data={bajoAlto} />
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>
  )
}
