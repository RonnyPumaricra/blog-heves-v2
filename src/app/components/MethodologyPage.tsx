import imgMethod1 from "figma:asset/59a2700c7b5ead8cd4c647bd1453b497f4c7a1c2.png";
import imgMethod2 from "figma:asset/c26a8e10a2c4ea63157b66726cfa29124729d437.png";
import imgMethodMobile from "figma:asset/9c4e06ce13f512f5c1cd3e6b329fe06598129ad9.png";
import { BookOpen, Target, TrendingUp, Users, Shield, Calendar, DollarSign, CheckCircle, AlertTriangle, Package } from 'lucide-react';

export function MethodologyPage() {
  const knowledgeAreas = [
    {
      icon: Target,
      title: "Integration Management",
      description: "Coordinating all project elements to ensure cohesive execution and unified vision across all healthcare initiatives."
    },
    {
      icon: BookOpen,
      title: "Scope Management",
      description: "Defining and controlling what is included in the project to deliver specific patient care outcomes."
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Planning and monitoring project timelines to ensure timely delivery of healthcare services."
    },
    {
      icon: DollarSign,
      title: "Cost Management",
      description: "Budgeting and controlling costs to maximize the impact of every dollar spent on patient care."
    },
    {
      icon: CheckCircle,
      title: "Quality Management",
      description: "Ensuring all services meet the highest standards of healthcare excellence and patient satisfaction."
    },
    {
      icon: Users,
      title: "Resource Management",
      description: "Optimally allocating staff, equipment, and facilities to serve our community effectively."
    },
    {
      icon: TrendingUp,
      title: "Communications Management",
      description: "Maintaining transparent, regular communication with all stakeholders throughout the project lifecycle."
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Identifying and mitigating potential challenges to protect patient care quality and project success."
    },
    {
      icon: Package,
      title: "Procurement Management",
      description: "Strategic sourcing of medical supplies, equipment, and services to support project objectives."
    },
    {
      icon: Shield,
      title: "Stakeholder Management",
      description: "Engaging patients, staff, donors, and community partners to build lasting relationships and support."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Header - Desktop */}
      <section className="hidden md:block relative h-96 mb-12">
        <img
          src={imgMethod1}
          alt="PMBOK Methodology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 flex items-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-6xl font-bold text-white mb-4">PMBOK Methodology</h1>
            <p className="text-2xl text-white/90">
              Structured project management for measurable healthcare impact
            </p>
          </div>
        </div>
      </section>

      {/* Header - Mobile */}
      <section className="md:hidden relative h-64 mb-8">
        <img
          src={imgMethodMobile}
          alt="PMBOK Methodology mobile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
          <div className="px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">PMBOK Methodology</h1>
            <p className="text-lg text-white/90">Structured healthcare project management</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why PMBOK for Healthcare?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            The Project Management Body of Knowledge (PMBOK) provides a proven framework for
            managing complex initiatives. In healthcare social projects, where lives and wellbeing
            are at stake, systematic planning and execution are not just beneficial—they're essential.
          </p>
          <p className="text-lg text-gray-700">
            Our adoption of PMBOK methodologies ensures that every patient interaction, every
            community program, and every resource allocation is guided by best practices in project
            management.
          </p>
        </div>
      </section>

      {/* Knowledge Areas Grid */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            10 Knowledge Areas Applied
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Each PMBOK knowledge area is tailored to address the unique challenges of healthcare
            delivery and social impact.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Project Lifecycle Phases
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">1</div>
            <h3 className="text-xl font-bold mb-2">Initiating</h3>
            <p className="text-sm">Define project vision and authorize work</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">2</div>
            <h3 className="text-xl font-bold mb-2">Planning</h3>
            <p className="text-sm">Establish scope, objectives, and procedures</p>
          </div>
          <div className="bg-blue-400 text-white p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">3</div>
            <h3 className="text-xl font-bold mb-2">Executing</h3>
            <p className="text-sm">Complete work defined in the project plan</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">4</div>
            <h3 className="text-xl font-bold mb-2">Monitoring</h3>
            <p className="text-sm">Track, review, and regulate progress</p>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">5</div>
            <h3 className="text-xl font-bold mb-2">Closing</h3>
            <p className="text-sm">Finalize activities and document lessons</p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imgMethod2}
                alt="PMBOK in action"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                PMBOK in Action: Patient Support Program
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our flagship patient support program demonstrates PMBOK principles in practice:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Scope:</strong> Defined clear deliverables for 500 high-risk patients
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Schedule:</strong> 6-month phased rollout with weekly milestones
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Quality:</strong> Achieved 96% patient satisfaction through regular monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Risk:</strong> Proactive mitigation reduced dropout rate by 40%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Stakeholders:</strong> Engaged 12 community partners for sustained impact
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Benefits of Our Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Measurable Outcomes</h3>
              <p className="text-gray-700">
                Data-driven metrics track real impact on patient health and community wellbeing.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resource Efficiency</h3>
              <p className="text-gray-700">
                Optimal allocation ensures maximum impact from limited healthcare resources.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Mitigation</h3>
              <p className="text-gray-700">
                Proactive identification and management of potential issues before they impact care.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stakeholder Alignment</h3>
              <p className="text-gray-700">
                Clear communication keeps everyone working toward shared healthcare goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
