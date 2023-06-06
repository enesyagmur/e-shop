import { configureStore } from "@reduxjs/toolkit";
import sepetSlice from "./slice";

export const store = configureStore({
  reducer: {
    basket: sepetSlice,
  },
});
