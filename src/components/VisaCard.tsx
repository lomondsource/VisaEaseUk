import React from 'react';
import { Clock, PoundSterling, CheckCircle, ArrowRight } from 'lucide-react';
import { VisaType } from '../types/visa';

interface VisaCardProps {
  visa: VisaType;
  onClick: (visa: VisaType) => void;
}

function VisaCard({ visa, onClick }: VisaCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      work: 'bg-green-100 text-green-800',
      business: 'bg-blue-100 text-blue-800',
      study: 'bg-purple-100 text-purple-800',
      family: 'bg-pink-100 text-pink-800',
      tourist: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(visa)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{visa.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(visa.category)}`}>
            {visa.category.charAt(0).toUpperCase() + visa.category.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{visa.description}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{visa.duration}</span>
          </div>
          <div className="flex items-center">
            <PoundSterling className="h-4 w-4 mr-1" />
            <span>{visa.fee}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-sm font-semibold">Key Requirements:</p>
          <ul className="text-sm text-gray-600">
            {visa.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <Clock className="h-4 w-4 inline mr-1" />
            Processing: {visa.processingTime}
          </div>
          <button 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onClick(visa);
            }}
          >
            View Details
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VisaCard;