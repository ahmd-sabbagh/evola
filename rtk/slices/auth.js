import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: false,
  reducers: {
    succses: (state) => {
      return (state = true);
    },
    faild: (state) => {
      return (state = false);
    },
  },
});

export const authReduser = AuthSlice.reducer;
export const { succses, faild } = AuthSlice.actions;