import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

interface Props {
  idx: number
  to: string
  title: string
}

export function LinkCard({ idx, to, title }: Props) {
  return (
    <Link
      to={to}
      className="bg-card border border-border rounded-lg p-6 block hover:border-blue-400 transition-colors group"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-sm w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
            {idx}
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">Ir a la Salida del proceso</p>
          </div>
        </div>
        <ArrowRight className="text-muted-foreground group-hover:text-blue-600 transition-colors shrink-0" size={20} />
      </div>
    </Link>
  )
}
