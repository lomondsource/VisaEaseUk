import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, FileCheck, Book, HelpCircle, User } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">VisaEase UK</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/visa-types" className="flex items-center text-gray-700 hover:text-blue-600">
              <Plane className="h-5 w-5 mr-1" />
              <span>{t('visa.types')}</span>
            </Link>
            <Link to="/document-checker" className="flex items-center text-gray-700 hover:text-blue-600">
              <FileCheck className="h-5 w-5 mr-1" />
              <span>{t('common.documents')}</span>
            </Link>
            <Link to="/visa-rules" className="flex items-center text-gray-700 hover:text-blue-600">
              <Book className="h-5 w-5 mr-1" />
              <span>Rules</span>
            </Link>
            <Link to="/help" className="flex items-center text-gray-700 hover:text-blue-600">
              <HelpCircle className="h-5 w-5 mr-1" />
              <span>{t('common.help')}</span>
            </Link>
            <LanguageSelector />
            <Link to="/signup" className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              <User className="h-5 w-5 mr-1" />
              <span>{t('common.sign_up')}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;