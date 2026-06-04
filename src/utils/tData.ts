import i18next from "i18next";

export const tData = (value: string | Record<string, string>): string => {
  if (typeof value === "string") return value;
  const lang = i18next.language;
  return value[lang] || value.en || "";
};
