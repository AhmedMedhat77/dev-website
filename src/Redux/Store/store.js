import { configureStore } from "@reduxjs/toolkit";

import LanguageSlice from "../Slices/LanguageSlice";

const store = configureStore({
  reducer: {
    language: LanguageSlice,
  },
});

export default store;
