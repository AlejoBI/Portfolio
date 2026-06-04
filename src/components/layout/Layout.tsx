import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DarkModeToggle from "../ui/DarkModeToggle";
import LanguageSwitcher from "../ui/LanguageSwitcher";

interface LayoutProps {
  readonly children: ReactNode;
  readonly dark: boolean;
  readonly toggleTheme: () => void;
}

const Layout = ({ children, dark, toggleTheme }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
    <DarkModeToggle dark={dark} toggle={toggleTheme} />
    <LanguageSwitcher />
  </>
);

export default Layout;
