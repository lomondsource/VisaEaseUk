import React, { useState } from 'react';
import { Folder, CheckCircle2, AlertTriangle } from 'lucide-react';
import { documentCategories } from '../data/documentRequirements';
import DocumentList from '../components/DocumentList';
import type { DocumentCategory } from '../types/document';

function DocumentChecker() {
  const [selectedCategory, setSelectedCategory] = useState<string>(documentCategories[0].id);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});
  const [verificationStatuses, setVerificationStatuses] = useState<Record<string, boolean>>({});

  const currentCategory = documentCategories.find(cat => cat.id === selectedCategory);

  const handleUpload = (documentId: string, file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [documentId]: file
    }));
  };

  const handleVerification = (documentId: string, isValid: boolean) => {
    setVerificationStatuses(prev => ({
      ...prev,
      [documentId]: isValid
    }));
  };

  const getUploadProgress = (category: DocumentCategory) => {
    const requiredDocs = category.documents.filter(doc => doc.required);
    const uploadedRequired = requiredDocs.filter(doc => uploadedFiles[doc.id]);
    return Math.round((uploadedRequired.length / requiredDocs.length) * 100);
  };

  const getVerificationStatus = (category: DocumentCategory) => {
    const verifiableDocs = category.documents.filter(doc => doc.verifiable);
    if (verifiableDocs.length === 0) return null;

    const verifiedDocs = verifiableDocs.filter(doc => verificationStatuses[doc.id]);
    return {
      total: verifiableDocs.length,
      verified: verifiedDocs.length
    };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Document Checker</h1>
        <p className="text-gray-600">
          Upload and verify your documents for your visa application. Ensure all required documents are provided and meet the specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="font-semibold text-lg mb-4">Document Categories</h2>
            <nav className="space-y-2">
              {documentCategories.map((category) => {
                const progress = getUploadProgress(category);
                const verificationStatus = getVerificationStatus(category);
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-md transition
                      ${selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center">
                      <Folder className="h-5 w-5 mr-2" />
                      <span>{category.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {verificationStatus && (
                        <span className="text-sm">
                          {verificationStatus.verified}/{verificationStatus.total}
                        </span>
                      )}
                      {progress === 100 ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : progress > 0 ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      ) : null}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Document List */}
        <div className="md:col-span-3">
          {currentCategory && (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{currentCategory.title}</h2>
                <p className="text-gray-600">{currentCategory.description}</p>
              </div>
              <DocumentList
                documents={currentCategory.documents}
                onUpload={handleUpload}
                onVerification={handleVerification}
                uploadedFiles={uploadedFiles}
                verificationStatuses={verificationStatuses}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DocumentChecker;