import { useState } from 'react'
import { FileSpreadsheet, CheckCircle } from 'lucide-react'
import { SectionCard } from '../SectionCard'
import { Dialog, DialogContent, DialogTitle } from '../../ui/dialog'
import { driveFiles, type DriveFile } from '@/app/data/drive-files'

interface Props {
  idx: number
}

export function HerramientaRecopilacionDatos({ idx }: Props) {
  const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null)

  return (
    <>
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
            {driveFiles.map((file) => (
              <button
                key={file.fileId}
                onClick={() => setSelectedFile(file)}
                className="flex items-start gap-2 text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                <span className="hover:underline">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      </SectionCard>

      <Dialog open={!!selectedFile} onOpenChange={(open) => { if (!open) setSelectedFile(null) }}>
        <DialogContent className="inset-0 w-screen h-screen max-w-none translate-x-0 translate-y-0 rounded-none border-0 p-0 sm:max-w-none flex flex-col bg-transparent">
          <div className="flex items-center justify-between px-6 py-4 border-b shrink-0 bg-background/80 backdrop-blur-sm">
            <DialogTitle className="text-base font-semibold truncate">
              {selectedFile?.name}
            </DialogTitle>
          </div>
          <div className="flex-1 min-h-0">
            {selectedFile && (
              <iframe
                src={`https://drive.google.com/file/d/${selectedFile.fileId}/preview`}
                className="w-full h-full border-0"
                allow="autoplay"
                title={selectedFile.name}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
