import { memo, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import DarkModeToggle from "../ui/DarkModeToggle";
import LanguageSwitcher from "../ui/LanguageSwitcher";

interface LayoutProps {
  readonly children: ReactNode;
  readonly dark: boolean;
  readonly toggleTheme: () => void;
}

const Layout = ({ children, dark, toggleTheme }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        {t("skip_to_content")}
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <DarkModeToggle dark={dark} toggle={toggleTheme} />
      <LanguageSwitcher />
    </>
  );
};

export default memo(Layout);
