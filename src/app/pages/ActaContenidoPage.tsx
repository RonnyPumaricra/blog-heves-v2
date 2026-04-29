import { FileText, ArrowRight, CheckCircle, Settings, FileCheck } from 'lucide-react';

export default function ActaContenidoPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <FileText className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Acta de Constitución del Proyecto
            </h1>
            <p className="text-gray-600 mt-1">Grupo de Procesos de Inicio</p>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          El Acta de Constitución del Proyecto es el documento que autoriza formalmente la existencia
          del proyecto y confiere al director del proyecto la autoridad para asignar los recursos de
          la organización a las actividades del proyecto.
        </p>
      </div>

      <section className="mb-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Settings className="text-blue-600" size={24} />
            Contenido del Acta de Constitución
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Propósito del Proyecto</h3>
            <p className="text-gray-700 text-sm">
              Mejorar el acceso y calidad de atención social para pacientes vulnerables del Hospital
              Central mediante programas estructurados de apoyo.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Objetivos Medibles</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Atender 500 pacientes en 6 meses</li>
              <li>• 95% satisfacción en encuestas</li>
              <li>• Reducir 30% tiempos de espera</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Requisitos de Alto Nivel</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Equipo multidisciplinario capacitado</li>
              <li>• Sistema de registro de beneficiarios</li>
              <li>• Espacio físico acondicionado</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Descripción de Alto Nivel</h3>
            <p className="text-gray-700 text-sm">
              Implementación de programa de navegación de pacientes, asistencia de medicamentos y
              apoyo psicosocial.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Riesgos de Alto Nivel</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Limitaciones presupuestarias</li>
              <li>• Disponibilidad de personal</li>
              <li>• Cambios en regulaciones</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Resumen del Cronograma</h3>
            <p className="text-gray-700 text-sm">
              <strong>Inicio:</strong> 01 Mayo 2026<br />
              <strong>Fin:</strong> 31 Octubre 2026<br />
              <strong>Duración:</strong> 6 meses
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Presupuesto Aprobado</h3>
            <p className="text-gray-700 text-sm">
              $250,000 USD para recursos humanos, materiales, capacitación y monitoreo del programa.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Director del Proyecto</h3>
            <p className="text-gray-700 text-sm">
              <strong>Nombre:</strong> Dr. Jennifer Lee<br />
              <strong>Autoridad:</strong> Gestión de recursos y toma de decisiones operativas
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Patrocinador</h3>
            <p className="text-gray-700 text-sm">
              <strong>Nombre:</strong> Directorio del Hospital Central<br />
              <strong>Autorización:</strong> Firma de aprobación y asignación de presupuesto
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3">Lista de Interesados Clave</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Pacientes y familias</li>
              <li>• Personal médico y administrativo</li>
              <li>• Organizaciones comunitarias</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}