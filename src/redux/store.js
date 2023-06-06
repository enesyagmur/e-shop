import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slice";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
