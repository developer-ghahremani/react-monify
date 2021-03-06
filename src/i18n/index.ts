import { initReactI18next, useTranslation } from "react-i18next";

import en from "./en";
import fa from "./fa";
// import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //   .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "fa",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: en,
      },
      fa: {
        translation: fa,
      },
    },
  });

export default i18n;

export const useI18Next = () => useTranslation();
export const getCurrentLanguage = (): "fa" | "en" =>
  i18n.language === "fa" ? "fa" : "en";
