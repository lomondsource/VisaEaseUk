import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          common: {
            apply: "Apply",
            learn_more: "Learn More",
            sign_up: "Sign Up",
            sign_in: "Sign In",
            dashboard: "Dashboard",
            help: "Help",
            documents: "Documents"
          },
          visa: {
            types: "Visa Types",
            requirements: "Requirements",
            processing_time: "Processing Time",
            fees: "Fees"
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;