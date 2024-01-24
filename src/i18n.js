// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from './translations/es.json';
import enTranslations from './translations/en.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

i18n.use(initReactI18next).init({
  resources: translations,
  lng: 'es', // Default language
  fallbackLng: 'es', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
