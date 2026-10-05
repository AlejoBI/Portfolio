import i18next from "i18next";

export const tData = (value: string | Record<string, string>): string => {
  if (typeof value === "string") return value;
  // LanguageDetector can yield region subtags (es-ES, en-US) while the data keys
  // are base codes only. Without normalizing, every lookup misses and silently
  // falls back to English.
  const lang = (i18next.resolvedLanguage || i18next.language || "es").split("-")[0];
  return value[lang] || value.es || value.en || "";
};
