import { FileSpreadsheet, CheckCircle } from 'lucide-react';
import { SectionCard } from '../SectionCard'

interface Props {
  idx: number
}

export function HerramientaRecopilacionDatos({ idx }: Props) {
  return (
    <SectionCard title={`${idx}. Recopilación de Datos`}>
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
    </SectionCard>
  )
}
