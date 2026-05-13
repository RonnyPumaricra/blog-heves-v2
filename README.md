
  # Blog template for hospital project

  This is a code bundle for Blog template for hospital project. The original project is available at https://www.figma.com/design/vHs9mvNSzuBHGUXQyl5y7H/Blog-template-for-hospital-project.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Adding a new PMBOK process

  Each process has 3 pages (Entradas, Herramientas y Técnicas, Salidas) plus routes and sidebar entry. Shared sections like **Factores Ambientales**, **Activos de Procesos**, **Juicio de Expertos**, **Recopilación de Datos**, **Representación de Datos** y **Reuniones** live in `src/app/components/sections/` and should be reused to avoid duplication.

  ### 1. Create the 3 page files

  Create in `src/app/pages/`:

  ```
  src/app/pages/NuevoProcesoEntradasPage.tsx
  src/app/pages/NuevoProcesoHerramientasPage.tsx
  src/app/pages/NuevoProcesoSalidasPage.tsx
  ```

  Use `PlanParticipacionEntradasPage.tsx` as a template. Import shared components:

  ```tsx
  import { EntradaFactoresAmbientales, EntradaActivosProcesos, HerramientaJuicioExpertos, ... } from '../components/sections';
  ```

  Then use them directly instead of writing duplicate JSX:

  ```tsx
  <EntradaFactoresAmbientales
    items={['• Item específico 1', '• Item específico 2']}
  />
  ```

  ### 2. Add routes in `src/app/App.tsx`

  Add imports at the top:

  ```tsx
  import NuevoProcesoEntradasPage from './pages/NuevoProcesoEntradasPage';
  // ... etc
  ```

  Add routes inside `<Routes>`:

  ```tsx
  <Route path="/nuevo-proceso/entradas" element={...} />
  <Route path="/nuevo-proceso/herramientas" element={...} />
  <Route path="/nuevo-proceso/salidas" element={...} />
  ```

  ### 3. Add sidebar entry in `src/app/components/Sidebar.tsx`

  Import an icon from lucide-react, then add to `menuItems`:

  ```tsx
  {
    id: 'nuevo-proceso',
    title: 'Nombre del Proceso',
    icon: IconName,
    path: '/nuevo-proceso/entradas',
    children: [
      { id: 'nuevo-proceso-entradas', label: 'Entradas', path: '/nuevo-proceso/entradas' },
      { id: 'nuevo-proceso-herramientas', label: 'Herramientas y Técnicas', path: '/nuevo-proceso/herramientas' },
      { id: 'nuevo-proceso-salidas', label: 'Salidas', path: '/nuevo-proceso/salidas' }
    ]
  }
  ```

  Also add the id to `expandedItems`:

  ```tsx
  const [expandedItems, setExpandedItems] = useState<string[]>(['interesados', 'plan-participacion', 'nuevo-proceso']);
  ```

  ### 4. Add to `PMBOKContent.tsx`

  Add a condition in the main function:

  ```tsx
  if (section === 'nuevo-proceso' || section === 'nuevo-proceso-entradas' || ...) {
    return <NuevoProcesoComponent section={section} />;
  }
  ```

  Then define the component function, reusing shared components where applicable.

  ### Shared components available

  | Component | Archivo | Props |
  |---|---|---|
  | `<EntradaFactoresAmbientales />` | `sections/inputs/FactoresAmbientales.tsx` | `description?`, `items?`, `children?` |
  | `<EntradaFactoresAmbientalesHEVES />` | mismo archivo | — (datos reales del HEVES con tablas) |
  | `<EntradaActivosProcesos />` | `sections/inputs/ActivosProcesos.tsx` | `description?`, `items?`, `children?` |
  | `<EntradaActivosProcesosHEVES />` | mismo archivo | — (ficha PS05 con tablas) |
  | `<HerramientaJuicioExpertos />` | `sections/tools/HerramientasCompartidas.tsx` | `title?`, `items?` |
  | `<HerramientaRecopilacionDatos />` | mismo archivo | `title?`, `items?`, `children?` |
  | `<HerramientaRepresentacionDatos />` | mismo archivo | `idx: number` |
  | `<HerramientaReuniones />` | mismo archivo | `title?`, `items?` |
  