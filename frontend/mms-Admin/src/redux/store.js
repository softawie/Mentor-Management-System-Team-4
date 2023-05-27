import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./feature/loaderSlice";
import configReducer from "./feature/configSlice";
import authReducer from "./feature/authSlice";
import PalleteReducer from "./feature/PaletteSlice";
import FaqReducer from "./feature/PaletteSlice";
export default configureStore({
  reducer: combineReducers({
    config: configReducer,
    auth: authReducer,
    loader: loaderReducer,
    pagination: PalleteReducer,
    faq: FaqReducer,
  }),
});
