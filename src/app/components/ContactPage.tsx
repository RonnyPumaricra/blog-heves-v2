import imgContact from "figma:asset/5977894cf809da89e228a535b53d6dca1a91482d.png";
import imgContactMobile from "figma:asset/f1437619ccfb9a0eea0e2f30593cb81956b82028.png";
import imgTeam from "figma:asset/c26a8e10a2c4ea63157b66726cfa29124729d437.png";
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Header - Desktop */}
      <section className="hidden md:block relative h-96 mb-12">
        <img
          src={imgContact}
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40 flex items-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-6xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-2xl text-white/90">
              Let's work together to improve healthcare in our community
            </p>
          </div>
        </div>
      </section>

      {/* Header - Mobile */}
      <section className="md:hidden relative h-64 mb-8">
        <img
          src={imgContactMobile}
          alt="Contact us mobile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
          <div className="px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Get In Touch</h1>
            <p className="text-lg text-white/90">Let's work together</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're a patient, community partner, or interested in our PMBOK approach to
              healthcare projects, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">
                    Central Community Hospital<br />
                    123 Healthcare Avenue<br />
                    Medical District, City 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">
                    Main: (555) 123-4567<br />
                    Project Hotline: (555) 123-4568
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">
                    General: info@hospitalproject.org<br />
                    Partnerships: partners@hospitalproject.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Emergency Services</h3>
              <p className="text-gray-700 mb-2">
                For medical emergencies, please call 911 or visit the hospital emergency department.
              </p>
              <p className="text-sm text-gray-600">
                This project focuses on non-emergency social support and community health initiatives.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="patient-services">Patient Services Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="volunteer">Volunteer Interest</option>
                    <option value="pmbok">PMBOK Methodology Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Meet Our Project Team
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Our multidisciplinary team combines healthcare expertise with certified project management
            skills to deliver exceptional results.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img
                  src={imgTeam}
                  alt="Team member"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Dr. Jennifer Lee</h3>
              <p className="text-sm text-blue-600 mb-2">Project Director</p>
              <p className="text-sm text-gray-600">PMP, MD</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍⚕️
              </div>
              <h3 className="font-bold text-gray-900 mb-1">James Chen</h3>
              <p className="text-sm text-blue-600 mb-2">Senior Project Manager</p>
              <p className="text-sm text-gray-600">PMP, MPH</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👩‍⚕️
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Dr. Maria Santos</h3>
              <p className="text-sm text-blue-600 mb-2">Clinical Lead</p>
              <p className="text-sm text-gray-600">MD, CAPM</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Michael Rodriguez</h3>
              <p className="text-sm text-blue-600 mb-2">Community Engagement</p>
              <p className="text-sm text-gray-600">MSW, PMP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-16">
        <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">Map view would be integrated here</p>
            <p className="text-sm">Central Community Hospital Location</p>
          </div>
        </div>
      </section>
    </div>
  );
}
