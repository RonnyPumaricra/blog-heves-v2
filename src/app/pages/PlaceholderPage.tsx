import { Construction, type LucideIcon } from 'lucide-react';
import { PageTitle } from '../components/sections';

interface PlaceholderPageProps {
  icon: LucideIcon;
  iconBgColor: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function PlaceholderPage({
  icon,
  iconBgColor,
  title,
  subtitle,
  description,
}: PlaceholderPageProps) {
  return (
    <>
      <PageTitle
        icon={icon}
        iconBgColor={iconBgColor}
        title={title}
        subtitle={subtitle}
        description={description}
      />

      <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <Construction className="text-muted-foreground" size={32} />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-foreground">Contenido en construcción</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Esta sección está siendo elaborada. Muy pronto se publicará el contenido correspondiente
          a <span className="font-medium text-foreground">{title}</span>.
        </p>
      </div>
    </>
  );
}
