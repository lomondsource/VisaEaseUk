import React, { useState } from 'react';
import { FileCheck, AlertCircle, Upload, CheckCircle, XCircle } from 'lucide-react';
import { DocumentRequirement } from '../types/document';

interface DocumentListProps {
  documents: DocumentRequirement[];
  onUpload: (documentId: string, file: File) => void;
}

function DocumentList({ documents, onUpload }: DocumentListProps) {
  const [verificationInputs, setVerificationInputs] = useState<Record<string, string>>({});
  const [verificationStatus, setVerificationStatus] = useState<Record<string, boolean>>({});

  const handleFileChange = (documentId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(documentId, file);
    }
  };

  const verifyDocument = (doc: DocumentRequirement) => {
    if (!doc.verificationDetails) return;

    const input = verificationInputs[doc.id] || '';
    const regex = new RegExp(doc.verificationDetails.pattern);
    const isValid = regex.test(input);

    setVerificationStatus(prev => ({
      ...prev,
      [doc.id]: isValid
    }));
  };

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-medium text-gray-900">{doc.name}</h3>
                {doc.required && (
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                    Required
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              
              {doc.verifiable && doc.verificationDetails && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Verification Required</h4>
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder={`Enter ${doc.verificationDetails.type.replace('_', ' ')} (e.g., ${doc.verificationDetails.example})`}
                      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={verificationInputs[doc.id] || ''}
                      onChange={(e) => setVerificationInputs(prev => ({
                        ...prev,
                        [doc.id]: e.target.value
                      }))}
                    />
                    <button
                      onClick={() => verifyDocument(doc)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Verify
                    </button>
                  </div>
                  {verificationStatus[doc.id] !== undefined && (
                    <div className={`mt-2 flex items-center ${
                      verificationStatus[doc.id] ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {verificationStatus[doc.id] ? (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span>Verification successful</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 mr-2" />
                          <span>Invalid reference number</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center text-sm text-gray-500">
                <FileCheck className="h-4 w-4 mr-1" />
                <span>Accepted formats: {doc.format.join(', ')}</span>
                <span className="mx-2">•</span>
                <span>Max size: {doc.maxSize}</span>
              </div>
            </div>
            
            <div className="ml-4">
              <label className="relative cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept={doc.format.map(f => `.${f.toLowerCase()}`).join(',')}
                  onChange={(e) => handleFileChange(doc.id, e)}
                />
                <div className="flex items-center justify-center w-32 h-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  <Upload className="h-4 w-4 mr-1" />
                  Upload
                </div>
              </label>
            </div>
          </div>

          {doc.examples && (
            <div className="mt-4 flex items-start">
              <AlertCircle className="h-4 w-4 text-blue-600 mr-1 mt-0.5" />
              <p className="text-sm text-gray-600">
                Include: {doc.examples.join(', ')}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DocumentList;