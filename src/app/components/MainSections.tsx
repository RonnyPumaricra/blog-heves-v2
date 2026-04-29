import imgHero from "../../assets/img/pheves-photo-1.png";
import imgOrganization from "figma:asset/59a2700c7b5ead8cd4c647bd1453b497f4c7a1c2.png";
// import imgTeam from "figma:asset/c26a8e10a2c4ea63157b66726cfa29124729d437.png";
import { Building2, Target, Calendar, DollarSign, Users, Mail } from 'lucide-react';

export function InicioSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mejora de la Gestión de Servicios Informáticos del HEVES
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Implementación de procesos ITIL 4 para la gestión de incidentes y cambios,
              gestionado bajo el marco PMBOK 6ta Edición
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-blue-600 text-white px-8 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold">Nivel III</div>
                <div className="text-sm">Hospital Público</div>
              </div>
              <div className="bg-blue-600 text-white px-8 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm">Meses de Duración</div>
              </div>
              <div className="bg-blue-600 text-white px-8 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold">ITIL 4</div>
                <div className="text-sm">Buenas Prácticas</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imgHero}
              alt="Hospital de Emergencias Villa El Salvador"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/*
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Objetivo Principal</h3>
            <p className="text-gray-700">
              Mejorar el acceso y calidad de atención social para pacientes vulnerables mediante
              programas de apoyo integral.
            </p>
          </div>
          */}

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ubicación</h3>
            <p className="text-gray-700">
              Hospital de Emergencias Villa El Salvador<br />
              Av. 200 Millas S/N, Villa El Salvador, Lima<br />
              Inaugurado el 7 de abril de 2016
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Período</h3>
            <p className="text-gray-700">
              Septiembre - Diciembre 2026<br />
              Implementación de procesos ITIL 4 en la Unidad de TI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OrganizacionSection() {
  return (
    <section id="organizacion" className="min-h-screen bg-white py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Datos de la Organización
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Información general del proyecto y estructura organizacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imgOrganization}
              alt="Organización del proyecto"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Estructura del Proyecto
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              El proyecto está estructurado bajo los lineamientos del PMBOK 6ta Edición,
              garantizando una gestión profesional y orientada a resultados medibles.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Building2 className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Organización Ejecutora</h4>
                  <p className="text-gray-700">Hospital Central Comunitario</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Target className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Área de Enfoque</h4>
                  <p className="text-gray-700">Servicios Sociales y Apoyo Comunitario</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <DollarSign className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Presupuesto Aprobado</h4>
                  <p className="text-gray-700">$250,000 USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Datos Generales</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Nombre del Proyecto</div>
                <div className="text-gray-900">Programa de Atención Social Hospitalaria Integral</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Código del Proyecto</div>
                <div className="text-gray-900">PASH-2026-001</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Fecha de Inicio</div>
                <div className="text-gray-900">01 de Mayo de 2026</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Fecha de Finalización</div>
                <div className="text-gray-900">31 de Octubre de 2026</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Duración</div>
                <div className="text-gray-900">6 meses (184 días)</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Estado</div>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  En Planificación
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Objetivos Estratégicos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <p className="text-gray-700">
                  Atender a 500 pacientes vulnerables en 6 meses con servicios de navegación de pacientes
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <p className="text-gray-700">
                  Alcanzar un 95% de satisfacción en encuestas de calidad de servicio
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <p className="text-gray-700">
                  Reducir en 30% los tiempos de espera para acceso a servicios sociales
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <p className="text-gray-700">
                  Establecer alianzas con al menos 10 organizaciones comunitarias
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Alcance del Proyecto</h3>
          <p className="text-lg mb-6">
            El proyecto incluye tres componentes principales integrados:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-bold mb-2">1. Navegación de Pacientes</h4>
              <p className="text-sm text-white/90">
                Orientación personalizada para pacientes en su recorrido por el sistema de salud
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-bold mb-2">2. Asistencia de Medicamentos</h4>
              <p className="text-sm text-white/90">
                Apoyo para acceso a medicamentos esenciales para pacientes de bajos recursos
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-bold mb-2">3. Apoyo Psicosocial</h4>
              <p className="text-sm text-white/90">
                Servicios de consejería y acompañamiento emocional durante el tratamiento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EquipoSection() {
  const teamMembers = [
    {
      name: 'Junior Joel Perez Damian',
      role: 'Organizador',
      email: '2223010198@untels.edu.pe'
    },
    {
      name: 'Jorge Rafael Roncal Saravia',
      role: 'Organizador',
      email: '2223010033@untels.edu.pe'
    },
    {
      name: 'Marcelo Samuel Molina Vera',
      role: 'Organizador',
      email: '2223010103@untels.edu.pe'
    },
    {
      name: 'Ronny Luis Pumaricra Meneses',
      role: 'Colaborador',
      email: '2223010014@untels.edu.pe'
    }
  ];

  return (
    <section id="equipo" className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Equipo del Proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo multidisciplinario con experiencia en gestión de proyectos y atención en salud
          </p>
        </div>

        {/* Sección "Estructura del Equipo" comentada
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Estructura del Equipo
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Nuestro equipo combina expertise clínica con certificaciones en gestión de proyectos,
              asegurando tanto la excelencia técnica como la eficiencia operativa.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Certificaciones del Equipo</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">4 PMP Certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">3 Médicos Licenciados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">2 MPH (Salud Pública)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-gray-700">1 Six Sigma Black Belt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imgTeam}
              alt="Equipo del proyecto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        */}

        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} className="flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Modelo de Gobernanza</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            El proyecto opera bajo un comité directivo que se reúne quincenalmente para revisar
            el progreso, aprobar cambios y garantizar la alineación con los objetivos estratégicos del hospital.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold mb-1">Comité Directivo</div>
              <div className="text-sm text-white/90">Directorio Hospital + Patrocinador</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold mb-1">Equipo Core</div>
              <div className="text-sm text-white/90">Director + Gerente + Líderes Funcionales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-bold mb-1">Equipos Operativos</div>
              <div className="text-sm text-white/90">Personal implementador en terreno</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
