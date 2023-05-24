import { configureStore } from "@reduxjs/toolkit";
import PalleteReducer from "./PaletteReducer";
import FaqReducer from "./FaqReducer";

const store = configureStore({
  reducer: {
    pagination: PalleteReducer,
    faq: FaqReducer,
  },
});

export default store;
