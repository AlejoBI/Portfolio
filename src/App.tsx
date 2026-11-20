import { memo, lazy, Suspense, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import useTheme from "./hooks/useTheme";
import useInView from "./hooks/useInView";
import Layout from "./components/layout/Layout";
import MetaTags from "./components/seo/MetaTags";
import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Services from "./components/sections/Services";
import ContactCTA from "./components/sections/ContactCTA";
import TechMarquee from "./components/sections/TechMarquee";
import Stats from "./components/sections/Stats";

const Experience = lazy(() => import("./components/sections/Experience"));
const Skills = lazy(() => import("./components/sections/Skills"));

interface DeferredSectionProps {
  readonly children: ReactNode;
  readonly fallback: ReactNode;
}

const DeferredSection = ({ children, fallback }: DeferredSectionProps) => {
  const { ref, inView } = useInView({ rootMargin: "300px 0px" });

  return (
    <div ref={ref}>{inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}</div>
  );
};

const App = () => {
  const { dark, toggle } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <MetaTags />
      <div className="m-0 p-0 h-auto bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-white min-h-screen relative overflow-x-hidden">
        <div className="fixed inset-0 tech-grid opacity-60 dark:opacity-80 pointer-events-none" />
        <div className="fixed -top-40 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="fixed bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Layout dark={dark} toggleTheme={toggle}>
            <Hero />
            <TechMarquee />
            <FeaturedProjects />
            <Services />
            <Stats />
            <div id="experience" className="container mx-auto px-6 lg:px-20 mb-20 scroll-mt-20">
              <div className="premium-surface rounded-3xl p-7 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-10 bg-cyan-400 rounded-full" />
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {t("experience.title")}
                  </h2>
                </div>
                <DeferredSection
                  fallback={
                    <div className="h-32 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />
                  }
                >
                  <Experience />
                </DeferredSection>
              </div>
            </div>
            <div id="skills" className="container mx-auto px-6 lg:px-20 mb-20 scroll-mt-20">
              <div className="premium-surface rounded-3xl p-7 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-10 bg-cyan-400 rounded-full" />
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {t("skills.title")}
                  </h2>
                </div>
                <DeferredSection
                  fallback={
                    <div className="h-64 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />
                  }
                >
                  <Skills />
                </DeferredSection>
              </div>
            </div>
            <ContactCTA />
          </Layout>
        </div>
      </div>
    </>
  );
};

export default memo(App);
