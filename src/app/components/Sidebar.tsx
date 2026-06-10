import { ChevronDown, ChevronRight, FileText, Users, ClipboardList, GitBranch, Lightbulb } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['acta', 'interesados', 'plan-participacion', 'eml', 'design-thinking']);
  const location = useLocation();

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const menuItems = [
    {
      id: 'acta',
      title: 'Acta de Constitución del Proyecto',
      icon: FileText,
      path: '/acta/entradas',
      children: [
        { id: 'acta-entradas', label: 'Entradas', path: '/acta/entradas' },
        { id: 'acta-herramientas', label: 'Herramientas y Técnicas', path: '/acta/herramientas' },
        { id: 'acta-salidas', label: 'Salidas', path: '/acta/salidas' }
      ]
    },
    {
      id: 'interesados',
      title: 'Identificar a los Interesados',
      icon: Users,
      path: '/interesados/entradas',
      children: [
        { id: 'interesados-entradas', label: 'Entradas', path: '/interesados/entradas' },
        { id: 'interesados-herramientas', label: 'Herramientas y Técnicas', path: '/interesados/herramientas' },
        { id: 'interesados-salidas', label: 'Salidas', path: '/interesados/salidas' }
      ]
    },
    {
      id: 'plan-participacion',
      title: 'Plan de Participación de los Interesados',
      icon: ClipboardList,
      path: '/plan-participacion/entradas',
      children: [
        { id: 'plan-participacion-entradas', label: 'Entradas', path: '/plan-participacion/entradas' },
        { id: 'plan-participacion-herramientas', label: 'Herramientas y Técnicas', path: '/plan-participacion/herramientas' },
        { id: 'plan-participacion-salidas', label: 'Salidas', path: '/plan-participacion/salidas' }
      ]
    },
    {
      id: 'eml',
      title: 'Enfoque de Marco Lógico',
      icon: GitBranch,
      path: '/eml/arbol-problemas',
      children: [
        { id: 'eml-arbol-problemas', label: 'Árbol de Problemas', path: '/eml/arbol-problemas' },
        { id: 'eml-arbol-objetivos', label: 'Árbol de Objetivos', path: '/eml/arbol-objetivos' },
        { id: 'eml-analisis-alternativas', label: 'Análisis de Alternativas', path: '/eml/analisis-alternativas' },
        { id: 'eml-matriz-marco-logico', label: 'Matriz de Marco Lógico', path: '/eml/matriz-marco-logico' },
        { id: 'eml-doble-diamante', label: 'Doble Diamante', path: '/eml/doble-diamante' }
      ]
    },
    {
      id: 'design-thinking',
      title: 'Design Thinking',
      icon: Lightbulb,
      path: '/design-thinking/empatizar',
      children: [
        { id: 'dt-empatizar', label: 'Empatizar', path: '/design-thinking/empatizar' },
        { id: 'dt-definir', label: 'Definir', path: '/design-thinking/definir' },
        { id: 'dt-idear', label: 'Idear', path: '/design-thinking/idear' },
        { id: 'dt-prototipar', label: 'Prototipar', path: '/design-thinking/prototipar' },
        { id: 'dt-evaluar', label: 'Evaluar', path: '/design-thinking/evaluar' }
      ]
    }
  ];

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => toggleExpanded('acta')}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-20 bottom-0 w-80 bg-sidebar border-r border-sidebar-border z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              PMBOK 6th Edition
            </h2>
            <p className="text-xs text-muted-foreground">
              Gestión de Proyectos Hospitalarios
            </p>
          </div>

          <div className="border-t border-sidebar-border my-4" />

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              const isActive = location.pathname.startsWith('/' + item.id);
              const parentPath = '/' + item.id;

              return (
                <div key={item.id}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      toggleExpanded(item.id);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent'
                    }`}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    <span className="flex-1 text-left text-sm font-medium">
                      {item.title}
                    </span>
                    {isExpanded ? (
                      <ChevronDown size={16} className="flex-shrink-0" />
                    ) : (
                      <ChevronRight size={16} className="flex-shrink-0" />
                    )}
                  </Link>

                  {isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className={`w-full block text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                            location.pathname === child.path
                              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                              : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-sidebar-accent rounded-lg">
            <h3 className="text-sm font-semibold text-sidebar-accent-foreground mb-2">
              Metodología PMBOK
            </h3>
            <p className="text-xs text-sidebar-foreground">
              Esta documentación sigue las mejores prácticas del Project Management Body of Knowledge,
              6ta Edición.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
