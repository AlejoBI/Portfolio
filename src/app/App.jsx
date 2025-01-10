import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./home/home";
import NotFoundPage from "./notFoundPage/NotFoundPage";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const showHeaderAndFooter = ["/", "/contact"].includes(location.pathname);

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
  );
};

export default App;
