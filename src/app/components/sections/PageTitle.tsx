import { type LucideIcon } from 'lucide-react'

interface PageTitleProps {
  icon: LucideIcon
  iconBgColor: string
  title: string
  subtitle: string
  description: string
}

export function PageTitle({ icon: Icon, iconBgColor, title, subtitle, description }: PageTitleProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${iconBgColor} p-3 rounded-lg`}>
          <Icon className="text-white" size={28} />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        </div>
      </div>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  )
}
