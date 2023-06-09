import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {},
  reducers: {
    addUpdate: (state, { payload }) => {
      if (payload !== state.updating[state.updating.length - 1]) {
        state.updating.push(payload);
      }
    },
    clearUpdate: (state) => {
      state.updating = [];
    },
  },
});

export const { addUpdate, clearUpdate } = configSlice.actions;

export default configSlice.reducer;
