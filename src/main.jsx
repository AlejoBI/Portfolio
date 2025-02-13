import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import i18n para el soporte de idiomas en la app
import { I18nextProvider } from "react-i18next";
import i18n from "./components/utils/i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
