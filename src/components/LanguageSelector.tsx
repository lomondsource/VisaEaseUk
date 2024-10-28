import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' }
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center">
        <Globe className="h-5 w-5 text-gray-400 mr-2" />
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="appearance-none bg-transparent border-none focus:outline-none text-sm text-gray-700"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LanguageSelector;