import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketProducts: "enes",
  },
  reducers: {
    addProduct: (state, action) => {
      state.basketProducts.push(action.payload);
    },
  },
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
