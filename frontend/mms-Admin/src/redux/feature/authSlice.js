import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogedIn: false,
  },
  reducers: {
    authenticate: (state) => {
      state.isLogedIn = true;
    },
    unAuthenticate: (state) => {
      state.isLogedIn = false;
    },
  },
});

export const { authenticate, unAuthenticate } = authSlice.actions;

export default authSlice.reducer;
