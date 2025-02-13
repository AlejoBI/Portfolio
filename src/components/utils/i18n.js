import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend) // Carga archivos JSON desde /public/locales
    .use(LanguageDetector) // Detecta el idioma del navegador
    .use(initReactI18next) // Configura con React
    .init({
        fallbackLng: "es", // Idioma por defecto
        debug: true, // Activa logs en consola
        interpolation: {
            escapeValue: false, // No escapar caracteres HTML
        }
    });

export default i18n;
