import { ChevronDown, ChevronRight, FileText, Users, ClipboardList } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['interesados', 'plan-participacion']);
  const location = useLocation();

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const menuItems = [
    // {
    //   id: 'acta',
    //   title: 'Acta de Constitución del Proyecto',
    //   icon: FileText,
    //   path: '/acta/entradas',
    //   children: [
    //     { id: 'acta-entradas', label: 'Entradas', path: '/acta/entradas' },
    //     { id: 'acta-contenido', label: 'Contenido del Acta', path: '/acta/contenido' },
    //     { id: 'acta-salidas', label: 'Salidas', path: '/acta/salidas' }
    //   ]
    // },
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
        className={`fixed left-0 top-20 bottom-0 w-80 bg-white border-r border-gray-200 z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              PMBOK 6th Edition
            </h2>
            <p className="text-xs text-gray-600">
              Gestión de Proyectos Hospitalarios
            </p>
          </div>

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
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-700 hover:bg-gray-100'
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
                              ? 'bg-blue-50 text-blue-900 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
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

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">
              Metodología PMBOK
            </h3>
            <p className="text-xs text-blue-700">
              Esta documentación sigue las mejores prácticas del Project Management Body of Knowledge,
              6ta Edición.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
