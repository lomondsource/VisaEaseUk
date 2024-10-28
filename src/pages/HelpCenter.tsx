import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, HelpCircle, Search } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does the visa application process take?',
    answer: 'The processing time varies by visa type. Standard applications typically take 3-8 weeks, while priority services can reduce this to 5-7 working days.',
    category: 'Application Process'
  },
  {
    id: '2',
    question: 'What happens if my visa application is refused?',
    answer: 'If your application is refused, you can either appeal the decision, request an administrative review, or submit a new application addressing the reasons for refusal.',
    category: 'Application Process'
  },
  {
    id: '3',
    question: 'Can I work while on a Student visa?',
    answer: 'Yes, most Student visa holders can work part-time during term time (up to 20 hours per week) and full-time during holidays.',
    category: 'Student Visas'
  }
];

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-gray-600">
          Find answers to common questions or get in touch with our support team.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <MessageCircle className="h-6 w-6" />,
            title: 'Live Chat',
            description: 'Chat with our support team',
            action: 'Start Chat'
          },
          {
            icon: <Phone className="h-6 w-6" />,
            title: 'Phone Support',
            description: 'Call us at +44 20 1234 5678',
            action: 'Call Now'
          },
          {
            icon: <Mail className="h-6 w-6" />,
            title: 'Email',
            description: 'Get help via email',
            action: 'Send Email'
          }
        ].map((option, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
              {option.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <button className="text-blue-600 font-medium hover:text-blue-700">
              {option.action}
            </button>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 pb-4">
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;