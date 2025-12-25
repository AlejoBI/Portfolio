import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./home/Home";
import NotFoundPage from "./notFoundPage/NotFoundPage";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import DarkModeToggle from "../components/darkModeToggle/DarkModeToggle";
import LanguageSwitcher from "../components/langSwitcher/LanguageSwitcher";

import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const location = useLocation();

  const showHeaderAndFooter = ["/"].includes(location.pathname);

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <>
      <div className="m-0 p-0 h-auto bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-1000 relative overflow-x-hidden">
        {/* Background gradients */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 pointer-events-none"></div>

        <div className="relative z-10">
          <LanguageSwitcher />
          <DarkModeToggle />
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="*"
                element={
                  <Layout>
                    <NotFoundPage />
                  </Layout>
                }
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
