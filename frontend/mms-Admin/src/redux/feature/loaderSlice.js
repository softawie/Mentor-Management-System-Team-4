import { createSlice } from "@reduxjs/toolkit";
export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    show: false,
  },
  reducers: {
    enableLoader: (state) => {
      state.show = true;
    },
    disableLoader: (state) => {
      state.show = false;
    },
  },
});

export const { enableLoader, disableLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
