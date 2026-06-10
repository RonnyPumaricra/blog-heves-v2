import { Heart } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function DtEmpatizarPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Heart}
        iconBgColor="bg-pink-600"
        title="Empatizar"
        subtitle="Design Thinking"
        description="Comprender las necesidades, experiencias y motivaciones de los usuarios."
      />
    </div>
  );
}
