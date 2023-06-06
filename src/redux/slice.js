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
    deleteProduct: (state, action) => {
      const newBasket = state.basketProducts.filter(
        (item) => item.productName !== action.payload
      );
      state.basketProducts = [...newBasket];
    },
    clearProducts: (state) => {
      state.basketProducts = [];
    },
  },
});

export const { addProduct, deleteProduct, clearProducts } = basketSlice.actions;

export default basketSlice.reducer;
