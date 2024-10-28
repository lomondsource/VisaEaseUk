import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Your Journey to the UK Starts Here</h1>
              <p className="text-xl mb-8">Professional guidance through every step of your UK visa application process</p>
              <div className="space-x-4">
                <Link 
                  to="/visa-types" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-md inline-flex items-center hover:bg-blue-700 transition"
                >
                  Start Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/help" 
                  className="bg-white text-gray-900 px-8 py-3 rounded-md inline-flex items-center hover:bg-gray-100 transition"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VisaEase UK?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Get personalized support from UK immigration experts throughout your application process",
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Document Checker",
                description: "Ensure your application is complete with our intelligent document verification system",
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Real-time Updates",
                description: "Track your application status and receive instant notifications about your progress",
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "£99",
                features: ["Document Checklist", "Basic Support", "Application Review"]
              },
              {
                title: "Premium",
                price: "£299",
                features: ["Priority Processing", "24/7 Support", "Document Preparation", "Expert Review"]
              },
              {
                title: "Enterprise",
                price: "Custom",
                features: ["Dedicated Agent", "Legal Consultation", "Complex Cases", "Business Visas"]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${index === 1 ? 'border-2 border-blue-600' : ''}`}>
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="text-3xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;