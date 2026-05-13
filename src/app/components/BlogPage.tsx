import imgBlog1 from "figma:asset/ebe0478ce9aff9f81170f63eff76420023fcef22.png";
import imgBlog2 from "figma:asset/b3782d06d456f2fd2a31b22955189b867b51be0a.png";
import imgBlogMobile from "figma:asset/258ec654ab086dd14a431f66bb7eae2c7c220f36.png";
import imgPost1 from "figma:asset/839b8e7110bb47acbf564c1197c1e7679af2a25c.png";
import imgPost2 from "figma:asset/52d0acfcceb0ffbfcc46d9073176a89bed5d27a5.png";
import imgPost3 from "figma:asset/61c9732deec18c6b34e75a90ded6993b34e23642.png";
import imgPost4 from "figma:asset/fa0b5f71744281c75c2090a014b6aedd68836aab.png";
import imgPost5 from "figma:asset/07e3838be8564852251f53e7cf70ad0095a25c0f.png";
import imgPost6 from "figma:asset/fe8b765214a84862fc4288a855cb66c41bc5e116.png";
import { Calendar, User, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Launching Our Patient Navigation Program",
      excerpt: "How PMBOK integration management helped us coordinate a new service connecting patients with resources and support throughout their healthcare journey.",
      date: "April 15, 2026",
      author: "Dr. Maria Santos",
      category: "Integration Management",
      image: imgPost1,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Scope Management in Community Health Initiatives",
      excerpt: "Defining clear boundaries and deliverables for our mental health outreach program to ensure focused impact and measurable outcomes.",
      date: "April 8, 2026",
      author: "James Chen, PMP",
      category: "Scope Management",
      image: imgPost2,
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Meeting Milestones: Medication Assistance Timeline",
      excerpt: "A detailed look at how schedule management principles kept our medication assistance program on track to serve 300 patients in Q1.",
      date: "April 1, 2026",
      author: "Sarah Williams",
      category: "Schedule Management",
      image: imgPost3,
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Cost-Effective Care: Budget Optimization Success",
      excerpt: "Through strategic cost management, we've increased program capacity by 35% while maintaining quality standards and patient satisfaction.",
      date: "March 25, 2026",
      author: "Michael Rodriguez",
      category: "Cost Management",
      image: imgPost4,
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Quality Metrics That Matter: Patient Outcomes Report",
      excerpt: "Implementing quality management frameworks to track and improve patient satisfaction, health outcomes, and service delivery excellence.",
      date: "March 18, 2026",
      author: "Dr. Emily Thompson",
      category: "Quality Management",
      image: imgPost5,
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Building Community Partnerships for Greater Impact",
      excerpt: "Stakeholder management strategies that expanded our network to 25 community organizations, multiplying our reach and resources.",
      date: "March 11, 2026",
      author: "David Park",
      category: "Stakeholder Management",
      image: imgPost6,
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Header - Desktop */}
      <section className="hidden md:block relative h-96 mb-12">
        <img
          src={imgBlog1}
          alt="Project Updates Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-6xl font-bold text-white mb-4">Project Updates</h1>
            <p className="text-2xl text-white/90">
              Stories, insights, and lessons from our healthcare journey
            </p>
          </div>
        </div>
      </section>

      {/* Header - Mobile */}
      <section className="md:hidden relative h-64 mb-8">
        <img
          src={imgBlogMobile}
          alt="Project Updates mobile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
          <div className="px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Project Updates</h1>
            <p className="text-lg text-white/90">Our healthcare journey</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto">
              <img
                src={imgBlog2}
                alt="Featured post"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <div className="text-sm font-semibold uppercase tracking-wider mb-3 text-blue-200">
                Featured Article
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                One Year of Impact: PMBOK Transforms Healthcare Delivery
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Reflecting on 12 months of systematic project management in healthcare, the challenges
                we overcame, and the measurable improvements in patient care quality.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>April 22, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Dr. Jennifer Lee, Project Director</span>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors w-fit flex items-center gap-2">
                Read Full Story
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Recent Updates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User size={16} />
                  <span className="text-sm">{post.author}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 mt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 text-white/90">
            Subscribe to receive the latest updates on our healthcare projects and PMBOK insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
