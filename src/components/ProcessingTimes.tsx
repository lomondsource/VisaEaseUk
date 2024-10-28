import React, { useState } from 'react';
import { Clock, Search, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { processingTimes } from '../data/processingTimes';

function ProcessingTimes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredTimes = processingTimes.map(category => ({
    ...category,
    subcategories: category.subcategories.filter(sub =>
      sub.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.subcategories.length > 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">Processing Times</h2>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search visa type..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Important Information:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Processing times start after biometrics or online identity verification</li>
                <li>No travel booking required before application</li>
                <li>Applications may take longer if additional information is needed</li>
                <li>You'll be notified when a decision is made</li>
              </ul>
            </div>
          </div>
        </div>

        {filteredTimes.map((category) => (
          <div key={category.category} className="border rounded-lg">
            <button
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 rounded-t-lg"
              onClick={() => setExpandedCategory(
                expandedCategory === category.category ? null : category.category
              )}
            >
              <span className="font-medium">{category.category}</span>
              {expandedCategory === category.category ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {expandedCategory === category.category && (
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.subcategories.map((sub, index) => (
                    <div key={index} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{sub.name}</p>
                        {sub.description && (
                          <p className="text-sm text-gray-600">{sub.description}</p>
                        )}
                      </div>
                      <span className="text-blue-600 font-medium">{sub.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessingTimes;