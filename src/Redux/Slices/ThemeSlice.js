import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

const ThemeSlice = createSlice({
  name: "theme",
  reducers: {
    Dark: (state, action) => {
      return;
    },
    Light: (state, action) => {
      return;
    },
  },
});

export default ThemeSlice.actions;
export const { ThemeActions } = ThemeSlice.reducer;
