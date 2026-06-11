import { memo } from "react";
import { useTranslation } from "react-i18next";
import useTheme from "./hooks/useTheme";
import Layout from "./components/layout/Layout";
import MetaTags from "./components/seo/MetaTags";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

const App = () => {
  const { dark, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <MetaTags />
      <div className="m-0 p-0 h-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 pointer-events-none" />

      <div className="relative z-10">
        <Layout dark={dark} toggleTheme={toggle}>
          <Hero />
          <div id="experience" className="container mx-auto px-6 lg:px-20 mb-20" style={{ contentVisibility: "auto" }}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-blue-200/50 dark:border-blue-500/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-gradient-tech rounded-full" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {t("experience.title")}
                </h2>
              </div>
              <Experience />
            </div>
          </div>
          <div id="skills" className="container mx-auto px-6 lg:px-20 mb-20" style={{ contentVisibility: "auto" }}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-purple-200/50 dark:border-purple-500/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-gradient-tech rounded-full" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {t("skills.title")}
                </h2>
              </div>
              <Skills />
            </div>
          </div>
          <div id="projects" className="container mx-auto px-6 lg:px-20 mb-20" style={{ contentVisibility: "auto" }}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-blue-200/50 dark:border-blue-500/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-gradient-tech rounded-full" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  {t("projects.title")}
                </h2>
              </div>
              <Projects />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  </>
  );
};

export default memo(App);
