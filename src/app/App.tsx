import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { InicioSection, OrganizacionSection, EquipoSection } from './components/MainSections';
import ActaEntradasPage from './pages/ActaEntradasPage';
import ActaContenidoPage from './pages/ActaContenidoPage';
import ActaSalidasPage from './pages/ActaSalidasPage';
import InteresadosEntradasPage from './pages/InteresadosEntradasPage';
import InteresadosHerramientasPage from './pages/InteresadosHerramientasPage';
import InteresadosSalidasPage from './pages/InteresadosSalidasPage';

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
    <div className="min-h-screen bg-white">
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
            <section className="bg-gray-50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ActaEntradasPage />
              </div>
            </section>
          } />
          <Route path="/acta/contenido" element={
            <section className="bg-gray-50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ActaContenidoPage />
              </div>
            </section>
          } />
          <Route path="/acta/salidas" element={
            <section className="bg-gray-50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ActaSalidasPage />
              </div>
            </section>
          } />
          <Route path="/interesados/entradas" element={
            <section className="bg-gray-50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <InteresadosEntradasPage />
              </div>
            </section>
          } />
          <Route path="/interesados/herramientas" element={
            <section className="bg-gray-50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <InteresadosHerramientasPage />
              </div>
            </section>
          } />
          <Route path="/interesados/salidas" element={
            <section className="bg-gray-50 py-12 min-h-screen">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <InteresadosSalidasPage />
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