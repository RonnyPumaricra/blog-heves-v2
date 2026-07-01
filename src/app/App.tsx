import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { InicioSection, OrganizacionSection, EquipoSection } from './components/MainSections';
import ActaEntradasPage from './pages/ActaEntradasPage';
import ActaHerramientasPage from './pages/ActaHerramientasPage';
import ActaSalidasPage from './pages/ActaSalidasPage';
import InteresadosEntradasPage from './pages/InteresadosEntradasPage';
import InteresadosHerramientasPage from './pages/InteresadosHerramientasPage';
import InteresadosSalidasPage from './pages/InteresadosSalidasPage';
import PlanParticipacionEntradasPage from './pages/PlanParticipacionEntradasPage';
import PlanParticipacionHerramientasPage from './pages/PlanParticipacionHerramientasPage';
import PlanParticipacionSalidasPage from './pages/PlanParticipacionSalidasPage';
import ArbolProblemasPage from './pages/ArbolProblemasPage';
import ArbolObjetivosPage from './pages/ArbolObjetivosPage';
import AnalisisAlternativasPage from './pages/AnalisisAlternativasPage';
import MatrizMarcoLogicoPage from './pages/MatrizMarcoLogicoPage';
import DobleDiamantePredictivoPage from './pages/DobleDiamantePredictivoPage';
import DtEmpatizarPage from './pages/DtEmpatizarPage';
import DtDefinirPage from './pages/DtDefinirPage';
import DtIdearPage from './pages/DtIdearPage';
import DtPrototiparPage from './pages/DtPrototiparPage';
import DtEvaluarPage from './pages/DtEvaluarPage';
import DefinirAlcanceSalidasPage from './pages/DefinirAlcanceSalidasPage';
import CrearEdtSalidasPage from './pages/CrearEdtSalidasPage';
import PlaceholderPage from './pages/PlaceholderPage';
import CronogramaPlanGestionPage from './pages/CronogramaPlanGestionPage';
import CronogramaActividadesPage from './pages/CronogramaActividadesPage';
import CronogramaSecuenciacionPage from './pages/CronogramaSecuenciacionPage';
import CronogramaPertPage from './pages/CronogramaPertPage';
import CronogramaCpmPage from './pages/CronogramaCpmPage';
import CronogramaGanttPage from './pages/CronogramaGanttPage';
import {
  ClipboardList,
  ListChecks,
  Table2,
  BookOpen,
} from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [pendingScrollSection, setPendingScrollSection] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  useEffect(() => {
    if (!pendingScrollSection) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, pendingScrollSection]);

  useEffect(() => {
    if (pendingScrollSection && location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(pendingScrollSection);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setPendingScrollSection(null);
      }, 100);
    }
  }, [location, pendingScrollSection]);

  const handleScrollTo = (sectionId: string) => {
    if (location.pathname !== '/') {
      setPendingScrollSection(sectionId);
      navigate('/');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onScrollTo={handleScrollTo}
      />

      <Sidebar
        isOpen={isSidebarOpen}
      />

      <main
        className={`transition-all duration-300 pt-20 ${
          isSidebarOpen ? 'lg:pl-80' : 'pl-0'
        }`}
      >
        <Routes>
          <Route path="/acta/entradas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ActaEntradasPage />
              </div>
            </section>
          } />
          <Route path="/acta/herramientas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ActaHerramientasPage />
              </div>
            </section>
          } />
          <Route path="/acta/salidas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ActaSalidasPage />
              </div>
            </section>
          } />
          <Route path="/interesados/entradas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <InteresadosEntradasPage />
              </div>
            </section>
          } />
          <Route path="/interesados/herramientas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <InteresadosHerramientasPage />
              </div>
            </section>
          } />
          <Route path="/interesados/salidas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md-px-12">
                <InteresadosSalidasPage />
              </div>
            </section>
          } />
          <Route path="/plan-participacion/entradas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlanParticipacionEntradasPage />
              </div>
            </section>
          } />
          <Route path="/plan-participacion/herramientas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlanParticipacionHerramientasPage />
              </div>
            </section>
          } />
          <Route path="/plan-participacion/salidas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlanParticipacionSalidasPage />
              </div>
            </section>
          } />
          <Route path="/eml/arbol-problemas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ArbolProblemasPage />
              </div>
            </section>
          } />
          <Route path="/eml/arbol-objetivos" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ArbolObjetivosPage />
              </div>
            </section>
          } />
          <Route path="/eml/analisis-alternativas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <AnalisisAlternativasPage />
              </div>
            </section>
          } />
          <Route path="/eml/matriz-marco-logico" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <MatrizMarcoLogicoPage />
              </div>
            </section>
          } />
          <Route path="/eml/doble-diamante" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DobleDiamantePredictivoPage />
              </div>
            </section>
          } />
          <Route path="/design-thinking/empatizar" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DtEmpatizarPage />
              </div>
            </section>
          } />
          <Route path="/design-thinking/definir" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DtDefinirPage />
              </div>
            </section>
          } />
          <Route path="/design-thinking/idear" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DtIdearPage />
              </div>
            </section>
          } />
          <Route path="/design-thinking/prototipar" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DtPrototiparPage />
              </div>
            </section>
          } />
          <Route path="/design-thinking/evaluar" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DtEvaluarPage />
              </div>
            </section>
          } />
          <Route path="/definir-alcance/salidas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DefinirAlcanceSalidasPage />
              </div>
            </section>
          } />
          <Route path="/crear-edt/salidas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CrearEdtSalidasPage />
              </div>
            </section>
          } />

          {/* Gestión de Interesados (alias del Plan de Participación) */}
          <Route path="/gestion-interesados/entradas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlanParticipacionEntradasPage />
              </div>
            </section>
          } />
          <Route path="/gestion-interesados/herramientas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlanParticipacionHerramientasPage />
              </div>
            </section>
          } />
          <Route path="/gestion-interesados/salidas" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlanParticipacionSalidasPage />
              </div>
            </section>
          } />

          {/* Alcance */}
          <Route path="/alcance/plan-gestion" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlaceholderPage
                  icon={ClipboardList}
                  iconBgColor="bg-emerald-600"
                  title="Plan de gestión de alcance"
                  subtitle="Gestión del Alcance del Proyecto"
                  description="Documento que describe cómo se definirá, validará y controlará el alcance del proyecto."
                />
              </div>
            </section>
          } />
          <Route path="/alcance/requisitos" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlaceholderPage
                  icon={ListChecks}
                  iconBgColor="bg-emerald-600"
                  title="Recopilación de requisitos"
                  subtitle="Gestión del Alcance del Proyecto"
                  description="Proceso de determinar, documentar y gestionar las necesidades y requisitos de los interesados."
                />
              </div>
            </section>
          } />
          <Route path="/alcance/trazabilidad" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlaceholderPage
                  icon={Table2}
                  iconBgColor="bg-emerald-600"
                  title="Matriz de trazabilidad de requisitos"
                  subtitle="Gestión del Alcance del Proyecto"
                  description="Cuadro que vincula los requisitos del producto con su origen y los rastrea a lo largo del ciclo de vida del proyecto."
                />
              </div>
            </section>
          } />
          <Route path="/alcance/declaracion" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <DefinirAlcanceSalidasPage />
              </div>
            </section>
          } />
          <Route path="/alcance/edt" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CrearEdtSalidasPage />
              </div>
            </section>
          } />
          <Route path="/alcance/diccionario" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <PlaceholderPage
                  icon={BookOpen}
                  iconBgColor="bg-emerald-600"
                  title="Diccionario de la EDT"
                  subtitle="Gestión del Alcance del Proyecto"
                  description="Documento que proporciona información detallada sobre los entregables, actividades y programación de cada componente de la EDT."
                />
              </div>
            </section>
          } />

          {/* Cronograma */}
          <Route path="/cronograma/plan-gestion" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CronogramaPlanGestionPage />
              </div>
            </section>
          } />
          <Route path="/cronograma/actividades" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CronogramaActividadesPage />
              </div>
            </section>
          } />
          <Route path="/cronograma/secuenciacion" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CronogramaSecuenciacionPage />
              </div>
            </section>
          } />
          <Route path="/cronograma/pert" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CronogramaPertPage />
              </div>
            </section>
          } />
          <Route path="/cronograma/cpm" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CronogramaCpmPage />
              </div>
            </section>
          } />
          <Route path="/cronograma/gantt" element={
            <section className="bg-muted/50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <CronogramaGanttPage />
              </div>
            </section>
          } />

          <Route path="/" element={
            <>
              <InicioSection />
              {/* <OrganizacionSection /> */}
              <EquipoSection />
            </>
          } />
          <Route path="*" element={
            <>
              <InicioSection />
              {/* <OrganizacionSection /> */}
              <EquipoSection />
            </>
          } />
        </Routes>
      </main>
    </div>
  );
}