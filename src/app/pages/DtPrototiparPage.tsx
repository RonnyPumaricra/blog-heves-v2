import { Layers } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function DtPrototiparPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Layers}
        iconBgColor="bg-blue-600"
        title="Prototipar"
        subtitle="Design Thinking"
        description="Construir representaciones tangibles de las ideas para explorar posibles soluciones."
      />
    </div>
  );
}
