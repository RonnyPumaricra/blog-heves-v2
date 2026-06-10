import { Lightbulb } from 'lucide-react';
import { PageTitle } from '../components/sections';

export default function DtIdearPage() {
  return (
    <div className="max-w-5xl">
      <PageTitle
        icon={Lightbulb}
        iconBgColor="bg-yellow-500"
        title="Idear"
        subtitle="Design Thinking"
        description="Generar una amplia variedad de ideas y soluciones creativas al problema definido."
      />
    </div>
  );
}
