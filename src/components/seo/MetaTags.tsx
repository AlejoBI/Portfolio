import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import profileImage from "../../assets/images/Foto.webp";
import profile from "../../data/profile.json";
import { tData } from "../../utils/tData";

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
      <meta property="og:image" content={`https://alejandrobi.dev${profileImage}`} />
      <meta property="og:image:alt" content="Alejandro Bravo Isajar" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("meta.title")} />
      <meta name="twitter:description" content={t("meta.description")} />
      <meta name="twitter:image" content={`https://alejandrobi.dev${profileImage}`} />
      <link rel="canonical" href="https://alejandrobi.dev" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alejandro Bravo Isajar",
          url: "https://alejandrobi.dev",
          image: `https://alejandrobi.dev${profileImage}`,
          jobTitle: tData(profile.title),
          sameAs: ["https://github.com/AlejoBI", "https://www.linkedin.com/in/alejandrobi"],
        })}
      </script>
    </Helmet>
  );
};

export default MetaTags;
