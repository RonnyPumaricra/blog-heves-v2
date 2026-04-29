import imgHero from "figma:asset/a6f87b087d9c486c9497c65c30c8805158c1125b.png";
import imgSection1 from "figma:asset/dd1b72af7891a65092ced3f452d99bb369d2bb8c.png";
import imgSection2 from "figma:asset/e2fe467bf1f4035d02f8f77f32dec85e9c2a952b.png";
import imgMobile1 from "figma:asset/0f145a52ee31801bf84c513f45d65bcc96c48f45.png";
import imgMobile2 from "figma:asset/b0a8f537f2ee81feb5818c7cbbc14876964ddd58.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section - Desktop */}
      <section className="hidden md:block relative h-screen">
        <img
          src={imgHero}
          alt="Hospital social project hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-6xl font-bold text-white mb-6">
              Transforming Healthcare Through Social Impact
            </h1>
            <p className="text-2xl text-white/90 mb-8 max-w-2xl">
              A comprehensive hospital social project managed with PMBOK methodology to deliver
              exceptional patient care and community support.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section - Mobile */}
      <section className="md:hidden relative min-h-screen">
        <img
          src={imgMobile1}
          alt="Hospital social project mobile hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-900/50 flex items-center">
          <div className="px-6 py-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Transforming Healthcare
            </h1>
            <p className="text-lg text-white/90 mb-6">
              A comprehensive hospital social project managed with PMBOK methodology.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section - Desktop */}
      <section className="hidden md:block py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              We are committed to improving patient care and community health through structured
              project management methodologies.
            </p>
            <p className="text-lg text-gray-700">
              Using PMBOK standards, we ensure every aspect of our social project is planned,
              executed, and monitored for maximum impact.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imgSection1}
              alt="Hospital mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section - Mobile */}
      <section className="md:hidden py-12 bg-white">
        <div className="px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
            <img
              src={imgMobile2}
              alt="Hospital mission mobile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-base text-gray-700 mb-3">
            We are committed to improving patient care and community health through structured
            project management methodologies.
          </p>
          <p className="text-base text-gray-700">
            Using PMBOK standards, we ensure every aspect of our social project is planned,
            executed, and monitored for maximum impact.
          </p>
        </div>
      </section>

      {/* Impact Section - Desktop */}
      <section className="hidden md:block py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Project Impact</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">2,500+</div>
              <div className="text-xl text-gray-900 mb-2">Patients Served</div>
              <p className="text-gray-600">
                Direct beneficiaries of our social care programs
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">15</div>
              <div className="text-xl text-gray-900 mb-2">Active Programs</div>
              <p className="text-gray-600">
                Initiatives managed using PMBOK framework
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">98%</div>
              <div className="text-xl text-gray-900 mb-2">Satisfaction Rate</div>
              <p className="text-gray-600">
                Patient and community feedback score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Discover how we're making a difference in healthcare delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('methodology')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Methodology
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
