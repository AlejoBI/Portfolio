import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./home/Home";
import Contact from "./contact/Contact";
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
          path="/contact"
          element={
            <Layout>
              <Contact />
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
