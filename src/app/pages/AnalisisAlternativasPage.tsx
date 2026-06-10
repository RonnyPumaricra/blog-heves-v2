import { useState } from 'react';
import { GitCompare, Server, Cloud, Scale } from 'lucide-react';
import { PageTitle } from '../components/sections';
import AnalisisAlt1Section from './AnalisisAlt1Section';
import AnalisisAlt2Section from './AnalisisAlt2Section';
import AnalisisComparativaSection from './AnalisisComparativaSection';

type MainTab = 'alt1' | 'alt2' | 'comparativa';

const TABS: { id: MainTab; label: string; icon: React.ElementType }[] = [
  { id: 'alt1',        label: 'Alt. 1: GLPI On-Premise',  icon: Server  },
  { id: 'alt2',        label: 'Alt. 2: Jira Cloud SaaS',  icon: Cloud   },
  { id: 'comparativa', label: 'Comparativa de Viabilidad', icon: Scale   },
];

export default function AnalisisAlternativasPage() {
  const [activeTab, setActiveTab] = useState<MainTab>('alt1');

  return (
    <div className="w-full">
      <PageTitle
        icon={GitCompare}
        iconBgColor="bg-violet-600"
        title="Análisis de Alternativas"
        subtitle="Enfoque de Marco Lógico"
        description="Identificación y evaluación de las posibles estrategias de intervención para alcanzar los objetivos."
      />

      {/* Barra de tabs principal */}
      <div className="flex flex-wrap gap-2 mt-8 mb-6">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all ${
              activeTab === t.id
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'alt1'        && <AnalisisAlt1Section />}
      {activeTab === 'alt2'        && <AnalisisAlt2Section />}
      {activeTab === 'comparativa' && <AnalisisComparativaSection />}
    </div>
  );
}
