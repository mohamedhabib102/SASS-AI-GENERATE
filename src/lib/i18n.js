import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "@/locales/ar/translation.json";
import en from "@/locales/en/translation.json";

const savedLang = localStorage.getItem('lang') || 'ar';
if (typeof document !== 'undefined') {
  document.body.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  document.body.lang = savedLang;
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
