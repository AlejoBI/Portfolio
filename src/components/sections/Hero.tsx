import { memo, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { tData } from "../../utils/tData";
import profile from "../../data/profile.json";
import education from "../../data/education.json";
import certifications from "../../data/certifications.json";
import ImagePortfolio from "../../assets/images/Foto.webp";
import cv from "../../assets/docs/CV.pdf";
import useInView from "../../hooks/useInView";

const ContactButtons = lazy(() => import("./ContactButtons"));
const Roles = lazy(() => import("./Roles"));

interface EducationData {
  university: {
    degree: string | Record<string, string>;
    institution: string;
    years: string;
    focus: string | Record<string, string>;
  };
  highschool: {
    degree: string | Record<string, string>;
    institution: string;
    year: string;
  };
}

interface Certification {
  name: string | Record<string, string>;
  issuer: string;
  date: string | Record<string, string>;
  link: string;
}

const AnimatedSection = memo(
  ({
    children,
    delay = "0s",
    className = "",
  }: {
    readonly children: React.ReactNode;
    readonly delay?: string;
    readonly className?: string;
  }) => {
    const { ref, inView } = useInView();
    return (
      <div
        ref={ref}
        className={`transition-[transform,opacity] duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
        style={{ transitionDelay: delay }}
      >
        {children}
      </div>
    );
  },
);
AnimatedSection.displayName = "AnimatedSection";

const Hero = () => {
  const { t } = useTranslation();
  const edu = education as EducationData;
  const certs = certifications as Certification[];

  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="fixed inset-0 bg-pattern opacity-30 dark:opacity-50 pointer-events-none" />

      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-500/20 dark:bg-blue-500/20 rounded-full blur-3xl particle" />
      <div
        className="fixed top-40 right-20 w-32 h-32 bg-purple-500/20 dark:bg-purple-500/20 rounded-full blur-3xl particle"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed bottom-40 left-1/4 w-24 h-24 bg-pink-500/20 dark:bg-pink-500/20 rounded-full blur-3xl particle"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-6 py-24 lg:px-20 relative z-10">
        {/* Hero */}
        <div className="min-h-[90vh] flex items-center justify-center mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
            <div className="space-y-8 animate-slide-in-up">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium code-font">
                  👋 {t("presentation.greeting")}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900 dark:text-white">
                    Alejandro
                  </span>
                  <span className="block text-gradient-tech">
                    Bravo Isajar
                  </span>
                </h1>
                <div className="flex items-center gap-2 text-xl md:text-2xl text-gray-600 dark:text-gray-400 code-font">
                  <span className="text-blue-500">{"<"}</span>
                  <span>{tData(profile.title)}</span>
                  <span className="text-blue-500">{"/>"}</span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                {tData(profile.shortBio)}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Suspense fallback={null}>
                  <ContactButtons />
                </Suspense>
              </div>
            </div>

            <div
              className="flex justify-center lg:justify-end animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-tech rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-glow" />

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-tech rounded-full animate-gradient" />
                  <img
                    src={ImagePortfolio}
                    alt="Alejandro Bravo Isajar"
                    loading="lazy"
                    className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-white dark:border-gray-800 shadow-2xl animate-float"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-40" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-xl opacity-40" />
              </div>
            </div>
          </div>
        </div>

        <div id="about" />

        {/* About + CV */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <AnimatedSection className="lg:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover border border-blue-200/50 dark:border-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-gradient-tech rounded-full" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {t("about.title")}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {tData(profile.bio)}
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay="0.2s"
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover border border-purple-200/50 dark:border-purple-500/20 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-blue-600 dark:bg-gradient-tech rounded-2xl flex items-center justify-center mb-6 animate-glow">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("presentation.download_cv")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              {t("presentation.cv_description")}
            </p>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 dark:bg-gradient-tech text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl font-semibold hover:scale-105"
            >
              {t("presentation.download_cv")}
            </a>
          </AnimatedSection>
        </div>

        {/* Education + Roles */}
        <div id="education" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <AnimatedSection className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover border border-cyan-200/50 dark:border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-cyber rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t("education.title")}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {tData(edu.university.degree)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
                  {edu.university.institution} | {edu.university.years}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tData(edu.university.focus)}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {tData(edu.highschool.degree)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.highschool.institution} | {edu.highschool.year}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay="0.2s"
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl card-hover border border-pink-200/50 dark:border-pink-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t("roles.title")}
              </h2>
            </div>
            <Suspense fallback={<div className="h-32" />}>
              <Roles />
            </Suspense>
          </AnimatedSection>
        </div>

        {/* Certifications */}
        <AnimatedSection className="mb-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-green-200/50 dark:border-green-500/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-tech rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t("certifications.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((cert) => (
              <a
                key={tData(cert.name)}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 rounded-2xl p-6 hover:border-green-400/50 dark:hover:border-green-500/50 transition-[transform,opacity,border-color] duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {tData(cert.name)}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer} &bull; {tData(cert.date)}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Verificar credencial</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default memo(Hero);
