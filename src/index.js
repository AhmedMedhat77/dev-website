import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/main.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "querystring", "localStorage", "path"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "assets/locales/{{lng}}/translation.json",
    },
    React: {
      useSuspense: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
