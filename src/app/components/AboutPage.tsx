import imgAbout1 from "figma:asset/e62ebfff07f843cf61c8b26763b656ee66081427.png";
import imgAbout2 from "figma:asset/5b5dd4a7524ad35198d9602d97d6f9362b748c8d.png";
import imgAbout3 from "figma:asset/2b89ac5a66d4e5869d341a7141199e1dcd06adcb.png";
import imgAboutMobile from "figma:asset/5c2487fa3294931c4099f738beb0a518823108fc.png";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Header - Desktop */}
      <section className="hidden md:block relative h-96 mb-12">
        <img
          src={imgAbout1}
          alt="About the project"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">About Our Project</h1>
        </div>
      </section>

      {/* Header - Mobile */}
      <section className="md:hidden relative h-64 mb-8">
        <img
          src={imgAboutMobile}
          alt="About the project mobile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white px-6 text-center">About Our Project</h1>
        </div>
      </section>

      {/* Project Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Vision for Better Healthcare
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our hospital social project was launched in 2024 with a clear mission: to provide
              comprehensive care that goes beyond medical treatment to address the social determinants
              of health affecting our community.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              By integrating PMBOK (Project Management Body of Knowledge) methodologies, we ensure
              that every initiative is strategically planned, efficiently executed, and continuously
              improved based on measurable outcomes.
            </p>
            <p className="text-lg text-gray-700">
              From patient support programs to community health education, our projects are designed
              to create lasting positive impact.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imgAbout2}
              alt="Healthcare vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-blue-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-700">
                We approach every patient and community member with empathy, understanding their
                unique needs and circumstances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700">
                Through rigorous project management and continuous improvement, we strive for the
                highest standards in all our initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We embrace new approaches and technologies to deliver more effective healthcare
                solutions for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Approach */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src={imgAbout3}
              alt="Our team and approach"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Multidisciplinary Team
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Success in healthcare social projects requires diverse expertise. Our team brings
              together:
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Healthcare professionals with deep clinical experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Certified project managers specializing in PMBOK methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Social workers focused on community engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Data analysts tracking outcomes and impact metrics</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700">
              Together, we create integrated solutions that address both immediate health needs and
              long-term community wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Project Timeline
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-blue-600">Q1 2024</div>
              </div>
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Initiation</h3>
                <p className="text-gray-700">
                  Stakeholder analysis, needs assessment, and charter development using PMBOK
                  integration management principles.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-blue-600">Q2 2024</div>
              </div>
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Planning & Design</h3>
                <p className="text-gray-700">
                  Detailed scope definition, resource planning, and risk management strategy
                  development.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-blue-600">Q3 2024</div>
              </div>
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-700">
                  Launch of pilot programs, team mobilization, and initial community outreach
                  initiatives.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-2xl font-bold text-blue-600">Q4 2024</div>
              </div>
              <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring & Expansion</h3>
                <p className="text-gray-700">
                  Performance tracking, stakeholder reporting, and scaling successful initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
