import { Users, ArrowRight, CheckCircle, FileCheck, FileSpreadsheet } from 'lucide-react';

export default function InteresadosSalidasPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Users className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Identificar a los Interesados
            </h1>
            <p className="text-gray-600 mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Proceso de identificar a las personas, grupos u organizaciones que podrían afectar o ser
          afectados por el proyecto, así como analizar y documentar información relevante relativa a
          sus intereses, participación, interdependencias, influencia y posible impacto en el éxito del proyecto.
        </p>
      </div>

      <section className="mb-12">
        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileCheck className="text-purple-600" size={24} />
            Salidas
          </h2>
        </div>

        <div className="space-y-6">
          {/* 1. Identificación de Interesados */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-purple-600 flex-shrink-0" size={22} />
              1. Identificación de Interesados
            </h3>
            <p className="text-gray-700 mb-4">
              Se han identificado un total de <strong>22 interesados</strong> para el proyecto, distribuidos en tres grupos principales: <strong>personal del HEVES (16), equipo académico UNTELS (4) e interesados externos (2)</strong>. La identificación considera el nivel de influencia, poder de decisión, grado de interés y participación esperada dentro de la ejecución del proyecto de implementación del sistema ITSM.
            </p>

            {/* Interesados Internos — Personal del HEVES */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Interesados Internos — Personal del HEVES
              </h4>
              <p className="text-gray-700 mb-4">
                Los siguientes <strong>12 funcionarios del HEVES</strong> se mantienen como interesados individuales debido a su poder de decisión sobre recursos, aprobaciones formales o por ser dueños directos del proceso ITIL. Su participación activa es crítica para el éxito del proyecto.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-center p-3 border border-gray-300 w-10">N.°</th>
                      <th className="text-left p-3 border border-gray-300">Nombre</th>
                      <th className="text-left p-3 border border-gray-300">Cargo / Rol</th>
                      <th className="text-left p-3 border border-gray-300">Área / Unidad</th>
                      <th className="text-center p-3 border border-gray-300">Interés</th>
                      <th className="text-center p-3 border border-gray-300">Poder</th>
                      <th className="text-center p-3 border border-gray-300">Actitud</th>
                      <th className="text-left p-3 border border-gray-300">Estrategia</th>
                      <th className="text-left p-3 border border-gray-300">Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">1</td>
                      <td className="p-3 border border-gray-300">Hugo Efrend Rojas Olivera</td>
                      <td className="p-3 border border-gray-300">Director Ejecutivo</td>
                      <td className="p-3 border border-gray-300">Dirección Ejecutiva</td>
                      <td className="text-center p-3 border border-gray-300">Muy alto</td>
                      <td className="text-center p-3 border border-gray-300">Muy alto</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">hugo.rojas@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">2</td>
                      <td className="p-3 border border-gray-300">Luis Carlos Almanza Cáceres</td>
                      <td className="p-3 border border-gray-300">Asesor de Dirección Ejecutiva</td>
                      <td className="p-3 border border-gray-300">Dirección Ejecutiva</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">luis.almanza@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">3</td>
                      <td className="p-3 border border-gray-300">Paola Jesus Llave Escobedo</td>
                      <td className="p-3 border border-gray-300">Jefa de la Unidad de TI</td>
                      <td className="p-3 border border-gray-300">Unidad TI</td>
                      <td className="text-center p-3 border border-gray-300">Muy alto</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">paola.llave@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">4</td>
                      <td className="p-3 border border-gray-300">Eduardo Martín Rojas Lecca</td>
                      <td className="p-3 border border-gray-300">Jefe de la Oficina de Administración</td>
                      <td className="p-3 border border-gray-300">Administración</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300 text-yellow-700 font-medium">Neutro</td>
                      <td className="p-3 border border-gray-300">Mantener satisfecho</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">eduardo.rojas@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">5</td>
                      <td className="p-3 border border-gray-300">Marco Antonio Cumpa Cortez</td>
                      <td className="p-3 border border-gray-300">Jefe de Planeamiento y Presupuesto</td>
                      <td className="p-3 border border-gray-300">Planeamiento y Presupuesto</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener satisfecho</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">marco.cumpa@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">6</td>
                      <td className="p-3 border border-gray-300">Jonathan Aaron Paredes Flores</td>
                      <td className="p-3 border border-gray-300">Jefe de la Unidad de Gestión de la Calidad</td>
                      <td className="p-3 border border-gray-300">Gestión de la Calidad</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">jonathan.paredes@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">7</td>
                      <td className="p-3 border border-gray-300">Liana Valeria Díaz Chaña</td>
                      <td className="p-3 border border-gray-300">Jefa del Órgano de Control Institucional</td>
                      <td className="p-3 border border-gray-300">OCI</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300 text-yellow-700 font-medium">Neutro</td>
                      <td className="p-3 border border-gray-300">Mantener satisfecho</td>
                      <td className="p-3 border border-gray-300 text-gray-500 text-xs">No disponible</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">8</td>
                      <td className="p-3 border border-gray-300">Marcos Hugo Vivas Vivas</td>
                      <td className="p-3 border border-gray-300">Jefe de la Unidad de Asesoría Jurídica</td>
                      <td className="p-3 border border-gray-300">Asesoría Jurídica</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300 text-yellow-700 font-medium">Neutro</td>
                      <td className="p-3 border border-gray-300">Monitorear</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">marcos.vivas@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">9</td>
                      <td className="p-3 border border-gray-300">Shirley Indira Ortiz Garcia</td>
                      <td className="p-3 border border-gray-300">Jefa de la Unidad de Logística</td>
                      <td className="p-3 border border-gray-300">Logística</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300 text-yellow-700 font-medium">Neutro</td>
                      <td className="p-3 border border-gray-300">Monitorear</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">shirley.ortiz@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">10</td>
                      <td className="p-3 border border-gray-300">René Camilla Teniente</td>
                      <td className="p-3 border border-gray-300">Jefe de RRHH / Oficial de Integridad</td>
                      <td className="p-3 border border-gray-300">Recursos Humanos</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300 text-yellow-700 font-medium">Neutro</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">rene.camilla@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">11</td>
                      <td className="p-3 border border-gray-300">Giancarlo Jamanca Paredes</td>
                      <td className="p-3 border border-gray-300">Jefe de Ingeniería Clínica y Servicios</td>
                      <td className="p-3 border border-gray-300">Ingeniería Clínica</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">giancarlo.jamanca@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">12</td>
                      <td className="p-3 border border-gray-300">Mónica Carolina Ávila Cruz</td>
                      <td className="p-3 border border-gray-300">Jefa de Articulación Prestacional / SAU</td>
                      <td className="p-3 border border-gray-300">Articulación Prestacional</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Medio</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">monica.avila@heves.gob.pe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interesados como Grupos — Usuarios Operativos del ITSM */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Interesados como Grupos — Usuarios Operativos del ITSM
              </h4>
              <p className="text-gray-700 mb-4">
                Los siguientes <strong>4 grupos de usuarios</strong> han sido consolidados desde los jefes de servicio individuales. Para el proyecto ITSM, lo relevante es la experiencia del grupo como usuario final que reporta incidentes y enfrenta fallos tecnológicos. Cada grupo tiene un punto de contacto designado para la comunicación.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-center p-3 border border-gray-300 w-10">#</th>
                      <th className="text-left p-3 border border-gray-300">Nombre del Grupo</th>
                      <th className="text-left p-3 border border-gray-300">Áreas que Representa</th>
                      <th className="text-left p-3 border border-gray-300">Puntos de Contacto</th>
                      <th className="text-center p-3 border border-gray-300">Interés</th>
                      <th className="text-center p-3 border border-gray-300">Poder</th>
                      <th className="text-center p-3 border border-gray-300">Actitud</th>
                      <th className="text-left p-3 border border-gray-300">Estrategia</th>
                      <th className="text-left p-3 border border-gray-300">Correo referencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">1</td>
                      <td className="p-3 border border-gray-300 font-medium">Personal Asistencial de Emergencia y UCI</td>
                      <td className="p-3 border border-gray-300">Emergencia, Cuidados Críticos, Servicio de Emergencia</td>
                      <td className="p-3 border border-gray-300 text-xs">Juan P. Rivero / Fernando Rojas / Pablo Lister</td>
                      <td className="text-center p-3 border border-gray-300">Muy alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">juan.rivero@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">2</td>
                      <td className="p-3 border border-gray-300 font-medium">Personal de Enfermería (HEVES)</td>
                      <td className="p-3 border border-gray-300">Servicio de Enfermería</td>
                      <td className="p-3 border border-gray-300 text-xs">Lizbeth Mariela Escobedo Salazar</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">lisbeth.escobedo@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">3</td>
                      <td className="p-3 border border-gray-300 font-medium">Personal de Apoyo al Diagnóstico y Farmacia</td>
                      <td className="p-3 border border-gray-300">Apoyo al Diagnóstico, Banco de Sangre, Farmacia</td>
                      <td className="p-3 border border-gray-300 text-xs">José Casas / Brayan Galvez / Jaquelin Castro</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">jose.casas@heves.gob.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">4</td>
                      <td className="p-3 border border-gray-300 font-medium">Personal Médico y Asistencial de Hospitalización</td>
                      <td className="p-3 border border-gray-300">Hospitalización C-Q, Atención Ambulatoria, Ref. y Contrarref.</td>
                      <td className="p-3 border border-gray-300 text-xs">Carlos Urbano / Kelly Bernales / Ricardo Paredes</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Mantener informado</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">carlos.urbano@heves.gob.pe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">
                Fuente de datos: Directorio oficial de funcionarios del HEVES — portal.gob.pe/institucion/heves/funcionarios (consultado: abril 2026).
              </p>
            </div>

            {/* Interesados Internos — Equipo del Proyecto UNTELS */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Interesados Internos — Equipo del Proyecto UNTELS
              </h4>
              <p className="text-gray-700 mb-4">
                El equipo académico de la UNTELS constituye el grupo ejecutor del proyecto, con responsabilidades directas en la planificación, diseño y entrega de los productos del proyecto.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-center p-3 border border-gray-300 w-10">#</th>
                      <th className="text-left p-3 border border-gray-300">Nombre</th>
                      <th className="text-left p-3 border border-gray-300">Cargo</th>
                      <th className="text-left p-3 border border-gray-300">Rol</th>
                      <th className="text-center p-3 border border-gray-300">Interés</th>
                      <th className="text-center p-3 border border-gray-300">Poder</th>
                      <th className="text-center p-3 border border-gray-300">Actitud</th>
                      <th className="text-left p-3 border border-gray-300">Estrategia</th>
                      <th className="text-left p-3 border border-gray-300">Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">1</td>
                      <td className="p-3 border border-gray-300">Junior Joel Perez Damian</td>
                      <td className="p-3 border border-gray-300">Organizador Estudiante</td>
                      <td className="p-3 border border-gray-300">Organizador-Estudiante</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">2223010198@untels.edu.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">2</td>
                      <td className="p-3 border border-gray-300">Jorge Rafael Roncal Saravia</td>
                      <td className="p-3 border border-gray-300">Organizador Estudiante</td>
                      <td className="p-3 border border-gray-300">Organizador-Estudiante</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">2223010033@untels.edu.pe</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">3</td>
                      <td className="p-3 border border-gray-300">Marcelo Samuel Molina Vera</td>
                      <td className="p-3 border border-gray-300">Organizador Estudiante</td>
                      <td className="p-3 border border-gray-300">Organizador-Estudiante</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">2223010103@untels.edu.pe</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">4</td>
                      <td className="p-3 border border-gray-300">Ronny Luis Pumaricra Meneses</td>
                      <td className="p-3 border border-gray-300">Colaborador Estudiante</td>
                      <td className="p-3 border border-gray-300">Colaborador-Estudiante</td>
                      <td className="text-center p-3 border border-gray-300">Alto</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Gestionar de cerca</td>
                      <td className="p-3 border border-gray-300 text-blue-600 text-xs">2223010014@untels.edu.pe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Interesados Externos */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Interesados Externos
              </h4>
              <p className="text-gray-700 mb-4">
                Se identifican los siguientes interesados externos que, aunque no participan directamente en la ejecución, tienen interés o influencia sobre los resultados del proyecto.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-center p-3 border border-gray-300 w-10">#</th>
                      <th className="text-left p-3 border border-gray-300">Nombre</th>
                      <th className="text-left p-3 border border-gray-300">Cargo</th>
                      <th className="text-left p-3 border border-gray-300">Rol</th>
                      <th className="text-center p-3 border border-gray-300">Interés</th>
                      <th className="text-center p-3 border border-gray-300">Poder</th>
                      <th className="text-center p-3 border border-gray-300">Actitud</th>
                      <th className="text-left p-3 border border-gray-300">Estrategia</th>
                      <th className="text-left p-3 border border-gray-300">Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="text-center p-3 border border-gray-300 font-semibold">1</td>
                      <td className="p-3 border border-gray-300 font-medium">MINSA</td>
                      <td className="p-3 border border-gray-300">Ministerio de Salud del Perú</td>
                      <td className="p-3 border border-gray-300">Externo</td>
                      <td className="text-center p-3 border border-gray-300">Bajo</td>
                      <td className="text-center p-3 border border-gray-300">Muy alto</td>
                      <td className="text-center p-3 border border-gray-300 text-yellow-700 font-medium">Neutro</td>
                      <td className="p-3 border border-gray-300">Mantener satisfecho</td>
                      <td className="p-3 border border-gray-300 text-gray-400">—</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center p-3 border border-gray-300 font-semibold">2</td>
                      <td className="p-3 border border-gray-300 font-medium">Pacientes del HEVES</td>
                      <td className="p-3 border border-gray-300">Beneficiarios indirectos</td>
                      <td className="p-3 border border-gray-300">Externo</td>
                      <td className="text-center p-3 border border-gray-300">Muy alto</td>
                      <td className="text-center p-3 border border-gray-300">Muy bajo</td>
                      <td className="text-center p-3 border border-gray-300 text-green-700 font-medium">Favorable</td>
                      <td className="p-3 border border-gray-300">Monitorear</td>
                      <td className="p-3 border border-gray-300 text-gray-400">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Resumen Consolidado */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Resumen Consolidado de Interesados Identificados
              </h4>
              <p className="text-gray-700 mb-4">
                De manera consolidada, el proyecto presenta la siguiente distribución de stakeholders:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse max-w-md">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="text-left p-3 border border-gray-300">Grupo de Interesados</th>
                      <th className="text-center p-3 border border-gray-300">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-3 border border-gray-300">Personal directivo y funcional del HEVES</td>
                      <td className="text-center p-3 border border-gray-300 font-semibold">12</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-300">Usuarios operativos agrupados del HEVES</td>
                      <td className="text-center p-3 border border-gray-300 font-semibold">4</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border border-gray-300">Equipo académico UNTELS</td>
                      <td className="text-center p-3 border border-gray-300 font-semibold">4</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-300">Interesados externos</td>
                      <td className="text-center p-3 border border-gray-300 font-semibold">2</td>
                    </tr>
                    <tr className="bg-gray-800 text-white font-bold">
                      <td className="p-3 border border-gray-300">Total general</td>
                      <td className="text-center p-3 border border-gray-300">22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4">
                La clasificación anterior permitirá desarrollar posteriormente la <strong>matriz poder-interés</strong>, la <strong>matriz de involucramiento</strong> y el correspondiente <strong>plan de gestión de comunicaciones</strong>, alineado con los lineamientos del PMBOK para la gestión de stakeholders.
              </p>
            </div>
          </div>

          {/* 2. Matriz Poder-Interés */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FileSpreadsheet className="text-purple-600 flex-shrink-0" size={22} />
              2. Matriz Poder — Interés
            </h3>
            <p className="text-gray-700 mb-4">
              La <strong>Matriz Poder–Interés</strong> clasifica a los interesados según su nivel de autoridad sobre el proyecto (<strong>Poder</strong>) y su grado de involucramiento con los resultados (<strong>Interés</strong>). Esta herramienta permite determinar la estrategia de gestión aplicable a cada grupo de stakeholders, optimizando los esfuerzos de comunicación y participación durante el ciclo de vida del proyecto.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
              <p className="text-gray-700 text-sm">
                <strong>Nota metodológica:</strong><br />
                <strong>Poder</strong> = capacidad de autoridad, influencia o decisión sobre el proyecto.<br />
                <strong>Interés</strong> = grado de preocupación, dependencia o involucramiento con los resultados del proyecto.
              </p>
            </div>

            {/* Matriz visual 2x2 */}
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Clasificación de Interesados según Poder e Interés
            </h4>

            <div className="mb-6">
              {/* Header row with Poder labels */}
              <div className="flex">
                <div className="w-24 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-500 rotate-0">Poder</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="text-center text-xs font-bold text-gray-600 py-1">INTERÉS BAJO</div>
                  <div className="text-center text-xs font-bold text-gray-600 py-1">INTERÉS ALTO</div>
                </div>
              </div>

              {/* ALTO row */}
              <div className="flex">
                <div className="w-24 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">ALTO</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                    <h5 className="font-bold text-amber-800 text-sm mb-1">MANTENER SATISFECHOS</h5>
                    <p className="text-xs text-amber-700 mb-2 italic">Alto poder, bajo interés</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• MINSA</li>
                      <li>• Liana Díaz Chaña (OCI)</li>
                      <li>• Eduardo Rojas Lecca (Administración)</li>
                      <li>• Marco Cumpa Cortez (OPP)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded-lg p-4">
                    <h5 className="font-bold text-red-800 text-sm mb-1">GESTIONAR DE CERCA</h5>
                    <p className="text-xs text-red-700 mb-2 italic">Alto poder, alto interés — Stakeholders clave</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Hugo Rojas Olivera (Director Ejecutivo)</li>
                      <li>• Luis Almanza Cáceres (Asesor Dirección)</li>
                      <li>• Paola Llave Escobedo (Jefa UTI)</li>
                      <li>• Equipo Docente y Estudiantil UNTELS</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* BAJO row */}
              <div className="flex mt-1">
                <div className="w-24 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">BAJO</span>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                    <h5 className="font-bold text-gray-700 text-sm mb-1">MONITOREAR</h5>
                    <p className="text-xs text-gray-600 mb-2 italic">Bajo poder, bajo interés</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Marcos Vivas (Asesoría Jurídica)</li>
                      <li>• Shirley Ortiz (Logística)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                    <h5 className="font-bold text-blue-800 text-sm mb-1">MANTENER INFORMADOS</h5>
                    <p className="text-xs text-blue-700 mb-2 italic">Bajo poder, alto interés</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Personal Asistencial de Emergencia y UCI</li>
                      <li>• Personal de Enfermería</li>
                      <li>• Personal de Apoyo al Diagnóstico y Farmacia</li>
                      <li>• Personal Médico de Hospitalización</li>
                      <li>• Jonathan Paredes (Gestión de Calidad)</li>
                      <li>• René Camilla (Recursos Humanos)</li>
                      <li>• Giancarlo Jamanca (Ingeniería Clínica)</li>
                      <li>• Mónica Ávila (Articulación Prestacional)</li>
                      <li>• Pacientes del HEVES</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Registro de Solicitudes de Cambio */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              3. Registro de Solicitudes de Cambio
            </h3>
            <p className="text-gray-700 mb-3">
              El proceso de identificar interesados puede generar solicitudes de cambio al proyecto:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Cambios en el alcance basados en necesidades de interesados</li>
              <li>• Ajustes en la estrategia de comunicación</li>
              <li>• Modificaciones en los entregables del proyecto</li>
            </ul>
          </div>

          {/* 4. Actualizaciones al Plan para la Dirección del Proyecto */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              4. Actualizaciones al Plan para la Dirección del Proyecto
            </h3>
            <p className="text-gray-700 mb-3">
              Componentes que pueden requerir actualización:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de Requisitos:</strong> Nuevos requisitos identificados por interesados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de las Comunicaciones:</strong> Estrategias para comunicarse con cada grupo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Gestión de los Riesgos:</strong> Riesgos asociados con interesados identificados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Plan de Involucramiento de los Interesados:</strong> Niveles de participación deseados</span>
              </li>
            </ul>
          </div>

          {/* 5. Actualizaciones a los Documentos del Proyecto */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              5. Actualizaciones a los Documentos del Proyecto
            </h3>
            <p className="text-gray-700 mb-3">
              Documentos que pueden actualizarse incluyen:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Registro de supuestos sobre comportamiento de interesados</li>
              <li>• Registro de incidentes relacionados con interesados</li>
              <li>• Registro de riesgos asociados a la gestión de interesados</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
