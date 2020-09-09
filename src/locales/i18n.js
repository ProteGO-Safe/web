import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LANGUAGE } from '../constants';
import { resources } from './resources';

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  fallbackLng: DEFAULT_LANGUAGE
});

export default i18n;
