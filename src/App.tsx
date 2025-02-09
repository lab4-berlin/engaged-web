import React from 'react';
import { BookOpen, Brain, Shield, School, Users, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">EngagED</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="hover:text-blue-200 transition">How it Works</a>
            <a href="#benefits" className="hover:text-blue-200 transition">Benefits</a>
            <a href="#features" className="hover:text-blue-200 transition">Features</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Transform Your Classroom with AI
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            The first AI-powered platform that flips any classroom in real-time, 
            enhancing student engagement without additional preparation.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
            hover:bg-blue-50 transition flex items-center space-x-2 mx-auto">
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Transcription</h3>
              <p className="text-gray-600">
                Our LLM-based system transcribes lectures and generates relevant questions in real-time
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
              <p className="text-gray-600">
                Students answer questions on their devices, maintaining engagement throughout the lecture
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Feedback</h3>
              <p className="text-gray-600">
                Real-time feedback helps students and educators track understanding and progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose EngagED</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <School className="h-6 w-6 mr-2 text-blue-600" />
                Universal Compatibility
              </h3>
              <p className="text-gray-600">
                Works seamlessly with any lecture format and classroom setting, 
                requiring no special preparation or materials.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                Data Privacy First
              </h3>
              <p className="text-gray-600">
                All data processing happens locally, ensuring your institution's 
                information remains private and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            As a non-profit organization, we're committed to improving education through 
            responsible AI implementation. We believe in making quality education accessible 
            and engaging for all students.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">EngagED</span>
            </div>
            <div className="text-sm">
              © 2024 EngagED. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;