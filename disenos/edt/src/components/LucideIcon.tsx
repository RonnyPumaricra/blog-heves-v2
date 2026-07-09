import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size = 16 }) => {
  // Resolve icon component dynamically from lucide-react exports
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Fallback icon if the icon name is not found
    const Fallback = Icons.Folder;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};

// Expose a list of icons that users can select in the node editor
export const AVAILABLE_ICONS = [
  { id: 'Briefcase', label: 'Maletín / Proyecto', category: 'General' },
  { id: 'Folder', label: 'Carpeta', category: 'General' },
  { id: 'FileText', label: 'Documento / Especificación', category: 'General' },
  { id: 'ClipboardCheck', label: 'Checklist / Hito', category: 'General' },
  { id: 'CheckSquare', label: 'Tarea Completada', category: 'General' },
  { id: 'Calendar', label: 'Calendario / Fecha', category: 'General' },
  { id: 'Users', label: 'Equipo / Usuarios', category: 'Gente' },
  { id: 'Code', label: 'Desarrollo / Código', category: 'Técnico' },
  { id: 'Database', label: 'Base de Datos / Storage', category: 'Técnico' },
  { id: 'Cpu', label: 'Procesamiento / Backend', category: 'Técnico' },
  { id: 'Network', label: 'Redes / Integración', category: 'Técnico' },
  { id: 'Monitor', label: 'UI / Frontend', category: 'Técnico' },
  { id: 'Cloud', label: 'Nube / Despliegue', category: 'Técnico' },
  { id: 'Globe', label: 'Web / Público', category: 'Técnico' },
  { id: 'ShieldAlert', label: 'Seguridad / QA', category: 'Técnico' },
  { id: 'Zap', label: 'Rendimiento / Carga', category: 'Técnico' },
  { id: 'Paintbrush', label: 'Diseño / Estilo', category: 'Creativo' },
  { id: 'Layers', label: 'Capas / Prototipo', category: 'Creativo' },
  { id: 'Lightbulb', label: 'Idea / Creatividad', category: 'Creativo' },
  { id: 'Wrench', label: 'Herramientas / Instalación', category: 'Construcción' },
  { id: 'Hammer', label: 'Estructura / Construcción', category: 'Construcción' },
  { id: 'Home', label: 'Vivienda / Entorno', category: 'Construcción' },
  { id: 'Sprout', label: 'Crecimiento / Jardín', category: 'General' },
  { id: 'Megaphone', label: 'Anuncio / Marketing', category: 'Marketing' },
  { id: 'Mail', label: 'Correo / Comunicación', category: 'Marketing' },
  { id: 'Share2', label: 'Compartir / Redes', category: 'Marketing' },
  { id: 'Gift', label: 'Regalo / Recompensa', category: 'Marketing' },
  { id: 'ShoppingBag', label: 'Compras / Catering', category: 'General' },
  { id: 'LineChart', label: 'Gráficos / Finanzas', category: 'General' },
];
