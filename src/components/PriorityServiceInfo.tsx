import React from 'react';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

function PriorityServiceInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Clock className="h-6 w-6 text-blue-600 mr-2" />
        Priority Services
      </h2>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="font-medium text-lg mb-2">Priority Service</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              Decision within 5 working days
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              £500 additional fee per person
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              Available for most visa types
            </li>
          </ul>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-medium text-lg mb-2">Super Priority Service</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              Decision by the end of next working day
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              £1,000 additional fee per person
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              Available for select visa types
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Important Notes:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Processing times start from your biometric appointment or document upload</li>
                <li>Family visa applications may take up to 30 working days with priority service</li>
                <li>Additional checks may extend processing times</li>
                <li>All family members must pay for priority service to get decisions together</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriorityServiceInfo;