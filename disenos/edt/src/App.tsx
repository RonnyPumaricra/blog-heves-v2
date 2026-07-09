import React, { useState, useEffect, useMemo, useRef } from 'react';
import { WBSNode, LayoutMode } from './types';
import { TEMPLATES } from './data/templates';
import { StatsDashboard } from './components/StatsDashboard';
import { TreeView } from './components/TreeView';
import { ListView } from './components/ListView';
import { NodeEditorModal } from './components/NodeEditorModal';
import { HelpOverlay } from './components/HelpOverlay';
import { LucideIcon } from './components/LucideIcon';
import {
  calculateProjectStats,
  getOutlineCodes,
  deleteNodeAndDescendants,
  generateId,
  getSortedChildren,
} from './utils';
import {
  Plus,
  Download,
  Upload,
  Printer,
  BookOpen,
  Search,
  Filter,
  Layers,
  ChevronDown,
  Moon,
  Sun,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  PlusCircle,
  FolderOpen,
} from 'lucide-react';

export default function App() {
  // Load initial templates or localStorage
  const [nodes, setNodes] = useState<Record<string, WBSNode>>(() => {
    const saved = localStorage.getItem('edt_diagram_nodes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    // Default to the first template (Software CRM)
    return TEMPLATES[0].nodes;
  });

  const [projectName, setProjectName] = useState(() => {
    const saved = localStorage.getItem('edt_project_name');
    if (saved) return saved;
    return TEMPLATES[0].name;
  });

  // UI state
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('vertical');
  const [autoAggregate, setAutoAggregate] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('edt_dark_mode');
    return saved === 'true';
  });

  // Modal and Guide state
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [editingNode, setEditingNode] = useState<WBSNode | null>(null);
  const [parentIdForNewNode, setParentIdForNewNode] = useState<string | null>(null);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOwner, setSelectedOwner] = useState<string>('all');

  // File import ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Synchronize state with LocalStorage
  useEffect(() => {
    localStorage.setItem('edt_diagram_nodes', JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem('edt_project_name', projectName);
  }, [projectName]);

  useEffect(() => {
    localStorage.setItem('edt_dark_mode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Derive list of all unique owners for filtering
  const allOwners = useMemo(() => {
    const owners = new Set<string>();
    (Object.values(nodes) as WBSNode[]).forEach((n) => {
      if (n.owner && n.owner.trim()) {
        owners.add(n.owner.trim());
      }
    });
    return Array.from(owners).sort();
  }, [nodes]);

  // Calculate stats recursively
  const stats = useMemo(() => {
    return calculateProjectStats(nodes, autoAggregate);
  }, [nodes, autoAggregate]);

  // Calculate outline codes
  const outlineCodes = useMemo(() => {
    return getOutlineCodes(nodes);
  }, [nodes]);

  // Filtered nodes (for highlighting or list viewing)
  const isFilterActive = searchQuery.trim() !== '' || selectedOwner !== 'all';

  // Modal Save node
  const handleSaveNode = (nodeData: Omit<WBSNode, 'id' | 'collapsed' | 'order'>) => {
    if (editingNode) {
      // Editing
      setNodes((prev) => ({
        ...prev,
        [editingNode.id]: {
          ...prev[editingNode.id],
          ...nodeData,
        },
      }));
    } else {
      // Creating new
      const newId = generateId();
      const siblings = getSortedChildren(nodes, parentIdForNewNode);
      const order = siblings.length;

      const newNode: WBSNode = {
        id: newId,
        parentId: parentIdForNewNode,
        title: nodeData.title,
        description: nodeData.description,
        budget: nodeData.budget,
        hours: nodeData.hours,
        progress: nodeData.progress,
        color: nodeData.color,
        owner: nodeData.owner,
        icon: nodeData.icon,
        collapsed: false,
        order,
      };

      setNodes((prev) => ({
        ...prev,
        [newId]: newNode,
      }));
    }
  };

  // Delete node
  const handleDeleteNode = (id: string) => {
    const nodeToDelete = nodes[id];
    if (!nodeToDelete) return;

    if (nodeToDelete.parentId === null) {
      // Attempting to delete root
      if (confirm('¿Estás seguro de que quieres eliminar el nodo principal? Esto borrará TODO el diagrama EDT.')) {
        setNodes({});
        setProjectName('Nuevo Proyecto');
      }
      return;
    }

    if (confirm(`¿Estás seguro de que deseas eliminar "${nodeToDelete.title}" y todos sus sub-elementos?`)) {
      setNodes((prev) => deleteNodeAndDescendants(prev, id));
    }
  };

  // Reorder nodes among siblings
  const handleReorderNode = (id: string, direction: 'up' | 'down') => {
    const node = nodes[id];
    if (!node) return;

    const siblings = getSortedChildren(nodes, node.parentId);
    const currentIndex = siblings.findIndex((n) => n.id === id);
    if (currentIndex === -1) return;

    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= siblings.length) return;

    const targetNode = siblings[targetIndex];

    setNodes((prev) => {
      const updated = { ...prev };
      const tempOrder = updated[node.id].order;
      updated[node.id].order = updated[targetNode.id].order;
      updated[targetNode.id].order = tempOrder;
      return updated;
    });
  };

  // Toggle node collapse
  const handleToggleCollapse = (id: string) => {
    setNodes((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        collapsed: !prev[id].collapsed,
      },
    }));
  };

  // Load preset template
  const handleLoadTemplate = (templateId: string) => {
    const template = TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      if (confirm('¿Cargar plantilla? Se perderán los cambios del diagrama actual.')) {
        setNodes(template.nodes);
        setProjectName(template.name);
        setZoomLevel(100);
      }
    }
  };

  // Import JSON file
  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data && typeof data === 'object') {
          // Verify it matches basic structure
          const keys = Object.keys(data);
          const sampleNode = data[keys[0]];
          if (keys.length > 0 && sampleNode && 'title' in sampleNode && 'parentId' in sampleNode) {
            setNodes(data);
            const root = Object.values(data).find((n: any) => n.parentId === null) as any;
            if (root) {
              setProjectName(root.title);
            }
            alert('¡Diagrama EDT importado con éxito!');
          } else {
            alert('El archivo JSON no coincide con el formato esperado para un diagrama EDT.');
          }
        }
      } catch (err) {
        alert('Error al leer el archivo JSON. Asegúrate de que esté estructurado correctamente.');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
  };

  // Export JSON file
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(nodes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    const cleanName = projectName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    downloadAnchor.setAttribute('download', `edt_${cleanName}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Clear workspace and create fresh
  const handleClearWorkspace = () => {
    if (confirm('¿Deseas vaciar el espacio de trabajo actual para empezar de cero?')) {
      const rootId = generateId();
      const freshNodes: Record<string, WBSNode> = {
        [rootId]: {
          id: rootId,
          parentId: null,
          title: 'Nuevo Proyecto',
          description: 'Nodo principal del proyecto. Agrega fases y subtareas.',
          budget: 0,
          hours: 0,
          progress: 0,
          color: 'slate',
          owner: '',
          icon: 'Briefcase',
          collapsed: false,
          order: 0,
        },
      };
      setNodes(freshNodes);
      setProjectName('Nuevo Proyecto');
      setZoomLevel(100);
    }
  };

  // Add subtask (opens modal configured with parentId)
  const handleAddChildClick = (parentId: string) => {
    setEditingNode(null);
    setParentIdForNewNode(parentId);
    setIsEditorOpen(true);
  };

  // Edit node (opens modal configured with node data)
  const handleEditNodeClick = (node: WBSNode) => {
    setEditingNode(node);
    setParentIdForNewNode(null);
    setIsEditorOpen(true);
  };

  // Trigger browser print window (styled via CSS print styles)
  const handlePrint = () => {
    window.print();
  };

  // Zoom helpers
  const handleZoomIn = () => setZoomLevel((z) => Math.min(150, z + 10));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(50, z - 10));
  const handleZoomReset = () => setZoomLevel(100);

  // Count active filter matches
  const filteredCount = useMemo(() => {
    if (!isFilterActive) return 0;
    return (Object.values(nodes) as WBSNode[]).filter((n) => {
      const matchText =
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchOwner = selectedOwner === 'all' || n.owner === selectedOwner;
      return matchText && matchOwner;
    }).length;
  }, [nodes, searchQuery, selectedOwner, isFilterActive]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Mesh Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/40 border-b border-slate-150 dark:border-white/10 backdrop-blur-md px-5 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 select-none print:hidden ring-1 ring-white/5">
        
        {/* App title and Name editor */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white p-2.5 rounded-xl shadow-md shadow-indigo-500/10 shrink-0">
            <Layers size={20} className="animate-pulse" />
          </div>
          <div className="min-w-0 flex-1 md:flex-initial">
            <div className="flex items-center space-x-1.5">
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Nombre del Proyecto"
                className="text-base font-bold text-slate-800 dark:text-slate-100 bg-transparent border-b border-transparent hover:border-slate-300 dark:hover:border-slate-700 focus:border-indigo-500 focus:outline-none transition-colors truncate max-w-[240px] sm:max-w-[320px] font-sans pb-0.5"
                title="Haz clic para renombrar el proyecto"
              />
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
              Diagrama de Estructura de Desglose de Trabajo (EDT)
            </p>
          </div>
        </div>

        {/* Top Control Rail (File operations, Dark Mode, Help) */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          {/* Preset templates */}
          <div className="relative group/select">
            <select
              onChange={(e) => handleLoadTemplate(e.target.value)}
              defaultValue=""
              className="appearance-none bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-3.5 pr-8 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
            >
              <option value="" disabled>📁 Cargar Plantilla...</option>
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.category})
                </option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Import JSON */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            title="Importar archivo .json de EDT"
          >
            <Upload size={13} />
            <span className="hidden sm:inline">Importar</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileImport}
            accept=".json"
            className="hidden"
          />

          {/* Export JSON */}
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            title="Exportar EDT como JSON"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Exportar</span>
          </button>

          {/* Print PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            title="Imprimir o guardar como PDF"
          >
            <Printer size={13} />
            <span className="hidden sm:inline">Imprimir PDF</span>
          </button>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Help Manual */}
          <button
            onClick={() => setIsHelpOpen(true)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
            title="Guía Metodológica EDT"
          >
            <BookOpen size={15} />
          </button>

          {/* Clear workspace */}
          <button
            onClick={handleClearWorkspace}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
            title="Vaciar área de trabajo"
          >
            <RotateCcw size={15} />
          </button>

          {/* Theme switcher */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer"
            title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 print:p-0 print:m-0 print:max-w-none">
        
        {/* Project Metrics HUD */}
        <section className="print:hidden">
          <StatsDashboard stats={stats} />
        </section>

        {/* Diagram Workspace Panel */}
        <section className="bg-white/70 dark:bg-slate-900/35 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-white/10 dark:ring-1 dark:ring-white/5 shadow-xl overflow-hidden flex flex-col min-h-[580px] print:border-none print:shadow-none print:rounded-none">
          
          {/* Workspace Toolbar (Layout Switcher, Calculation modes, Search query) */}
          <div className="border-b border-slate-200/60 dark:border-white/10 p-4 flex flex-col lg:flex-row items-center justify-between gap-4 select-none print:hidden bg-slate-50/40 dark:bg-slate-950/45">
            
            {/* Left: Layout Selectors and Auto Aggregates toggle */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              
              {/* Layout toggler buttons */}
              <div className="inline-flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800">
                <button
                  onClick={() => {
                    setLayoutMode('vertical');
                    setZoomLevel(100);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    layoutMode === 'vertical'
                      ? 'bg-white dark:bg-slate-850 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <LucideIcon name="Layers" size={13} />
                  <span>Árbol Vertical</span>
                </button>
                <button
                  onClick={() => {
                    setLayoutMode('horizontal');
                    setZoomLevel(100);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    layoutMode === 'horizontal'
                      ? 'bg-white dark:bg-slate-850 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <LucideIcon name="Network" size={13} />
                  <span>Árbol Horizontal</span>
                </button>
                <button
                  onClick={() => {
                    setLayoutMode('outline');
                    setZoomLevel(100);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    layoutMode === 'outline'
                      ? 'bg-white dark:bg-slate-850 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  <LucideIcon name="ClipboardCheck" size={13} />
                  <span>Esquema de Lista</span>
                </button>
              </div>

              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

              {/* Auto calculate aggregates check */}
              <label className="flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-850/60 transition-colors">
                <input
                  type="checkbox"
                  checked={autoAggregate}
                  onChange={(e) => setAutoAggregate(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer h-3.5 w-3.5"
                />
                <span>Auto-Cálculo Agregado</span>
              </label>
            </div>

            {/* Right: Search and Owner Filter */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto lg:justify-end">
              
              {/* Search text input */}
              <div className="relative flex-1 sm:flex-initial sm:w-56">
                <Search size={14} className="absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar entregables..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pl-9 pr-4 py-2 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Owner Select dropdown */}
              <div className="relative group/select flex-1 sm:flex-initial">
                <select
                  value={selectedOwner}
                  onChange={(e) => setSelectedOwner(e.target.value)}
                  className="appearance-none bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-8 pr-8 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer w-full"
                >
                  <option value="all">👥 Todos los Responsables</option>
                  {allOwners.map((owner) => (
                    <option key={owner} value={owner}>
                      {owner}
                    </option>
                  ))}
                </select>
                <Filter size={12} className="absolute left-3 top-3 text-slate-400 pointer-events-none" />
                <ChevronDown size={13} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Filter Status Toast Indicator */}
          {isFilterActive && (
            <div className="bg-indigo-50/40 dark:bg-indigo-950/10 border-b border-slate-100 dark:border-slate-850 px-5 py-2.5 flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-400 print:hidden">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                <span>
                  Búsqueda activa: se encontraron <strong>{filteredCount}</strong> de {stats.totalNodes} entregables.
                </span>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedOwner('all');
                }}
                className="font-bold underline hover:text-indigo-900 dark:hover:text-indigo-300 cursor-pointer"
              >
                Limpiar Filtros
              </button>
            </div>
          )}

          {/* Interactive Stage Canvas */}
          <div className="flex-1 relative overflow-auto bg-slate-50 dark:bg-slate-950/45 bg-dot-slate p-6 min-h-[500px] print:bg-transparent print:p-0">
            
            {/* Visual zoom level scale */}
            {layoutMode !== 'outline' && (
              <div
                className="origin-top-left transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              >
                <TreeView
                  nodes={nodes}
                  outlineCodes={outlineCodes}
                  layoutMode={layoutMode}
                  autoAggregate={autoAggregate}
                  onAddChild={handleAddChildClick}
                  onEditNode={handleEditNodeClick}
                  onDeleteNode={handleDeleteNode}
                  onToggleCollapse={handleToggleCollapse}
                />
              </div>
            )}

            {layoutMode === 'outline' && (
              <ListView
                nodes={nodes}
                outlineCodes={outlineCodes}
                autoAggregate={autoAggregate}
                onAddChild={handleAddChildClick}
                onEditNode={handleEditNodeClick}
                onDeleteNode={handleDeleteNode}
                onToggleCollapse={handleToggleCollapse}
                onReorderNode={handleReorderNode}
              />
            )}

            {/* Float Canvas Controllers (Zoom In, Zoom Out, Reset, Full list add) */}
            {layoutMode !== 'outline' && (
              <div className="absolute bottom-5 right-5 flex items-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-1 shadow-md z-30 space-x-1 select-none print:hidden">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-850 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                  title="Alejar Zoom"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 min-w-[32px] text-center">
                  {zoomLevel}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-850 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                  title="Acercar Zoom"
                >
                  <ZoomIn size={14} />
                </button>
                <div className="w-px h-3.5 bg-slate-200 dark:bg-slate-800" />
                <button
                  onClick={handleZoomReset}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-850 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors"
                  title="Restablecer Zoom"
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Methodology Footer / Tips Card */}
        <section className="bg-slate-100 dark:bg-slate-900/60 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 select-none print:hidden border border-slate-200/10">
          <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
            <LucideIcon name="ClipboardCheck" size={18} className="text-indigo-500 shrink-0" />
            <span>
              <strong>¿Sabías que?</strong> La EDT reduce riesgos y evita el "scope creep" al subdividir el alcance general en entregables específicos y medibles.
            </span>
          </div>
          <button
            onClick={() => setIsHelpOpen(true)}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            Aprender más sobre EDT <span className="text-sm">→</span>
          </button>
        </section>
      </main>

      {/* Node Form Drawer / Modal overlay */}
      <NodeEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={handleSaveNode}
        node={editingNode}
        parentId={parentIdForNewNode}
        hasChildren={editingNode ? getSortedChildren(nodes, editingNode.id).length > 0 : false}
        autoAggregate={autoAggregate}
      />

      {/* Guide manual modal */}
      <HelpOverlay isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:border-none {
            border: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          @page {
            size: landscape;
            margin: 1cm;
          }
        }
      `}</style>
    </div>
  );
}
