import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="flex items-center gap-4 px-6 py-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} className="text-muted-foreground" />
        </button>

        <div className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-600">
          Gestión de Incidencias HEVES
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="px-4 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="px-3 py-2 text-sm rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
