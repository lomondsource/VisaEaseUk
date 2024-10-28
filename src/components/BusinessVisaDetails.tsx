import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, FileText, AlertCircle } from 'lucide-react';
import { visaTypes } from '../data/visaTypes';
import { VisaType } from '../types/visa';

function BusinessVisaDetails() {
  const { id } = useParams<{ id: string }>();
  const visa = visaTypes.find(v => v.id === id);

  if (!visa) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <h2 className="text-red-800 font-semibold">Visa not found</h2>
          <p className="text-red-600">The requested visa information could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      {/* Overview Section */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">{visa.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Duration</h3>
            <p className="text-gray-600">{visa.duration}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Processing Time</h3>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <p className="text-gray-600">{visa.processingTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permitted Activities */}
      {visa.businessActivities && (
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Permitted Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                What You Can Do
              </h3>
              <ul className="space-y-2">
                {visa.businessActivities.permitted.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center text-red-600">
                <XCircle className="h-5 w-5 mr-2" />
                What You Cannot Do
              </h3>
              <ul className="space-y-2">
                {visa.businessActivities.notPermitted.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Required Documents */}
      {visa.documents && (
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visa.documents.map((doc, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  {doc.type}
                </h3>
                <ul className="space-y-2">
                  {doc.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Priority Services */}
      {visa.priorityOptions && (
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Priority Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visa.priorityOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{option.type}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Processing Time: {option.processingTime}</p>
                  <p>Additional Fee: £{option.fee}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <p className="text-sm text-blue-800">
                Priority services availability may vary by country. Check with your local visa application centre for current options.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BusinessVisaDetails;