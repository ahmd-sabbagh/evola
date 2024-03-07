import { configureStore } from "@reduxjs/toolkit";
import { bankReduser } from "./slices/bankStore";
import { authReduser } from "./slices/auth";
import { cartReducer } from "./slices/addToCart";

export const store = configureStore({
  reducer: {
    bank: bankReduser,
    auth: authReduser,
    cart: cartReducer,
  },
});
