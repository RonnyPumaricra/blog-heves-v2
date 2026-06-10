import { Target } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function DtDefinirPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Target}
        iconBgColor="bg-orange-600"
        title="Definir"
        subtitle="Design Thinking"
        description="Sintetizar los hallazgos de la empatía para formular el problema central del usuario."
      />
    </div>
  );
}
