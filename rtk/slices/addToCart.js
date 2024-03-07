import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productExist = state.find(
        (product) => product.id === action.payload.id
      );
      if (productExist) {
        productExist.quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.push(newProduct);
      }
    },
    deleteItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    minus: (state, action) => {
      const productExist = state.find(
        (product) => product.id === action.payload.id
      );
      if (productExist.quantity > 1) {
        productExist.quantity -= 1;
      }
    },
  },
});

export const cartReducer = addToCartSlice.reducer;
export const { addToCart, deleteItem,minus } = addToCartSlice.actions;
