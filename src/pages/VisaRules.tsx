import React, { useState } from 'react';
import { Search, Book, ArrowRight } from 'lucide-react';

interface Rule {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
}

const rules: Rule[] = [
  {
    id: '1',
    category: 'Financial',
    title: 'Minimum Financial Requirement',
    description: 'Required funds for different visa types',
    details: 'You must have enough money to support yourself while in the UK. The amount varies by visa type and location of study.'
  },
  {
    id: '2',
    category: 'Documentation',
    title: 'Document Translation Requirements',
    description: 'Guidelines for document translation',
    details: 'Documents not in English or Welsh must be accompanied by a certified translation.'
  },
  {
    id: '3',
    category: 'Eligibility',
    title: 'English Language Requirements',
    description: 'Required English proficiency levels',
    details: 'You must prove your knowledge of English by passing an approved English language test or having a degree taught in English.'
  }
];

function VisaRules() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);

  const filteredRules = rules.filter(rule =>
    rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rule.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">UK Visa Rules Database</h1>
        <p className="text-gray-600">
          Comprehensive guide to UK visa regulations and requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search and Rules List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search rules..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              {filteredRules.map((rule) => (
                <button
                  key={rule.id}
                  onClick={() => setSelectedRule(rule)}
                  className={`w-full text-left p-3 rounded-md transition
                    ${selectedRule?.id === rule.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    <div>
                      <h3 className="font-medium">{rule.title}</h3>
                      <p className="text-sm text-gray-500">{rule.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Rule Details */}
        <div className="lg:col-span-2">
          {selectedRule ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
                {selectedRule.category}
              </span>
              <h2 className="text-2xl font-bold mb-4">{selectedRule.title}</h2>
              <p className="text-gray-600 mb-6">{selectedRule.details}</p>
              
              <div className="border-t pt-4">
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center text-gray-500">
              <Book className="h-12 w-12 mx-auto mb-4" />
              <p>Select a rule to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisaRules;