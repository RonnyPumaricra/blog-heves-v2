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
import DtEmpatizarPage from './pages/DtEmpatizarPage';
import DtDefinirPage from './pages/DtDefinirPage';
import DtIdearPage from './pages/DtIdearPage';
import DtPrototiparPage from './pages/DtPrototiparPage';
import DtEvaluarPage from './pages/DtEvaluarPage';

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