import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.basketProducts.push(action.payload);
    },
    clearProduct: (state) => {
      state.basketProducts = [];
    },
  },
});

export const { addProduct, clearProduct } = basketSlice.actions;

export default basketSlice.reducer;
