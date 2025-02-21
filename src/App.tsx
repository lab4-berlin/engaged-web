import React from 'react';
import {
  Brain,
  Presentation,
  Users,
  BarChart3,
  Shield,
  School,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Linkedin,
  Mail
} from 'lucide-react';

function App() {
  // Get the base URL from import.meta.env or fallback to empty string for local development
  const base = import.meta.env.BASE_URL || '/';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#1f5c99] text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">
              <span className="text-white">Engag</span>
              <span className="text-[#e2511a]">ED</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-200">Features</a>
            <a href="#how-it-works" className="hover:text-blue-200">How It Works</a>
            <a href="#benefits" className="hover:text-blue-200">Benefits</a>
            <a href="#team" className="hover:text-blue-200">Team</a>
          </div>
          <button className="bg-[#e2511a] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff612c] transition-colors">
            Get Started
          </button>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Classroom with AI-Powered Engagement
            </h1>
            <p className="text-xl mb-8">
              EngagED uses AI to automatically generate engaging questions from your lecture in real-time,
              creating an interactive learning environment without any extra preparation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#e2511a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff612c] transition-colors flex items-center">
                Request Demo <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-[#1f5c99]">Why Choose Engag</span>
            <span className="text-[#e2511a]">ED</span>
            <span className="text-[#1f5c99]">?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#1f5c99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-[#1f5c99]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1f5c99]">AI-Driven Personalization</h3>
              <p className="text-[#1f5c99]">
                Real-time question generation tailored to your lecture content
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1f5c99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#1f5c99]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1f5c99]">All-Local Processing</h3>
              <p className="text-[#1f5c99]">
                Secure, private data processing that stays within your institution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1f5c99]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-[#1f5c99]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1f5c99]">Advanced Analytics</h3>
              <p className="text-[#1f5c99]">
                Comprehensive insights into student engagement and performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-[#1f5c99]">How Engag</span>
            <span className="text-[#e2511a]">ED</span>
            <span className="text-[#1f5c99]"> Works</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={`${base}images/students2.jpeg`}
                alt="Engaged Students"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1f5c99]/10 p-3 rounded-full">
                  <Presentation className="w-6 h-6 text-[#1f5c99]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1f5c99]">Start Teaching Normally</h3>
                  <p className="text-[#1f5c99]">Use your existing materials with zero extra preparation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1f5c99]/10 p-3 rounded-full">
                  <Brain className="w-6 h-6 text-[#1f5c99]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1f5c99]">AI Analysis</h3>
                  <p className="text-[#1f5c99]">Our AI analyzes your lecture in real-time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1f5c99]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#1f5c99]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1f5c99]">Student Engagement</h3>
                  <p className="text-[#1f5c99]">Students answer questions through the EngagED app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#1f5c99]/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1f5c99]">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#e2511a] mb-4">30%</div>
              <p className="text-[#1f5c99]">More engaging than traditional classrooms</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#e2511a] mb-4">10%</div>
              <p className="text-[#1f5c99]">Higher attendance rates</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#e2511a] mb-4">1.5+</div>
              <p className="text-[#1f5c99]">Points higher performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#1f5c99]">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src={`${base}images/team/evgeniya.jpeg`}
                alt="Dr. Evgeniya Vorobyeva"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#1f5c99]">Dr. Evgeniya Vorobyeva</h3>
              <p className="text-[#1f5c99] mb-2">Chief Executive Officer</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/evgeniya-vorobyeva/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#0077b5]/80">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:evgeniya@engagedai.org" className="text-[#1f5c99] hover:text-[#1f5c99]/80">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src={`${base}images/team/ilya.jpeg`}
                alt="Ilya Vladimirskiy"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#1f5c99]">Ilya Vladimirskiy</h3>
              <p className="text-[#1f5c99] mb-2">Chief Technology Officer</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/bkmy43/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#0077b5]/80">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:ilya@engagedai.org" className="text-[#1f5c99] hover:text-[#1f5c99]/80">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src={`${base}images/team/kirill.jpeg`}
                alt="Prof. Dr. Kirill Bolotin"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#1f5c99]">Prof. Dr. Kirill Bolotin</h3>
              <p className="text-[#1f5c99] mb-2">Scientific Advisor</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/kirill-bolotin-a198881/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#0077b5]/80">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:kirill@engagedai.org" className="text-[#1f5c99] hover:text-[#1f5c99]/80">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src={`${base}images/team/olya.jpeg`}
                alt="Dr. Olya Vvedenskaya"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#1f5c99]">Dr. Olya Vvedenskaya</h3>
              <p className="text-[#1f5c99] mb-2">Marketing Advisor</p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/olya-vv/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#0077b5]/80">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:olya@engagedai.org" className="text-[#1f5c99] hover:text-[#1f5c99]/80">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f5c99] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Classroom?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the future of education with EngagED. Start engaging your students like never before.
          </p>
          <button className="bg-[#e2511a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff612c] transition-colors inline-flex items-center">
            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="text-xl font-bold">
                  <span className="text-white">Engag</span>
                  <span className="text-[#e2511a]">ED</span>
                </span>
              </div>
              <p className="text-gray-400">
                Transforming education through AI-powered engagement
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#team" className="hover:text-white">Team</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@engagedai.org</li>
                <li>Berlin, Germany</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EngagED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;