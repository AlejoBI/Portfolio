import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const MetaTags = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;
    };
    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:description" content={t("meta.description")} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alejandrobi.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("meta.title")} />
      <meta name="twitter:description" content={t("meta.description")} />
      <link rel="canonical" href="https://alejandrobi.dev" />
    </Helmet>
  );
};

export default MetaTags;
