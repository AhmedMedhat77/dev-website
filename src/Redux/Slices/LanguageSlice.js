import { createSlice } from "@reduxjs/toolkit";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "ar",
    detection: {
      order: ["htmlTag", "cookie", "querystring", "localStorage", "path"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "assets/locales/{{lng}}/translation.json",
    },
  });

const initialState = {
  lang: navigator.language.split("-")[0],
};
const LanguageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
      if (action.payload === "ar") {
        i18n.changeLanguage("ar");
        document.body.dir = "rtl";
      } else {
        i18n.changeLanguage("en");
        document.body.dir = "ltr";
      }
    },
  },
});

export default LanguageSlice.reducer;
export const languageAction = LanguageSlice.actions;
