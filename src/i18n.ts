import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../public/locales/en.json"; 
import ruTranslation from "../public/locales/ru.json"; 

const savedLanguage = localStorage.getItem("i18nextLng");

const getInitialLanguage = (): string => {
  if (savedLanguage && ["en", "ru"].includes(savedLanguage)) {
    return savedLanguage;
  }
  
  const browserLang = navigator.language.split("-")[0];
  return browserLang === "ru" ? "ru" : "en";
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    lng: getInitialLanguage(),
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;