import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bankSlice",
  initialState: 2000,
  reducers: {
    deposit: (state) => {
      return state + 100;
    },
    withDraw: (state) => {
      return state - 100;
    },
  },
});

export const bankReduser = bankSlice.reducer;
export const { deposit, withDraw } = bankSlice.actions;
