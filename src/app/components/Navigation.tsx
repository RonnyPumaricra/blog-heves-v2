import { Menu } from 'lucide-react';

interface NavigationProps {
  onToggleSidebar: () => void;
  onScrollTo: (section: string) => void;
}

export function Navigation({ onToggleSidebar, onScrollTo }: NavigationProps) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    // { id: 'organizacion', label: 'Organización' },
    { id: 'equipo', label: 'Equipo' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center gap-4 px-6 py-4">
        {/* Botón para toggle sidebar */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Logo/Título */}
        <div className="text-xl md:text-2xl font-bold text-blue-900">
          Gestión de Servicios Informáticos HEVES
        </div>

        <div className="flex-1" />

        {/* Navegación principal */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Navegación móvil */}
        <div className="flex md:hidden items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
