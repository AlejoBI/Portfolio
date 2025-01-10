import React from "react";

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

const App = () => {
  return (
    <>
      <div className="m-0 p-0 h-auto bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
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
    </>
  );
};

export default App;
