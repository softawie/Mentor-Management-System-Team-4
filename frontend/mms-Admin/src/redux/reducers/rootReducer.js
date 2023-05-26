import { combineReducers } from "redux";
import isLoggedIn from "./authenticate.reducer";
import isLoading from "./loader.reducer";
import token from "./token.reducer";
import PalleteReducer from "./PaletteReducer.reducer";
import FaqReducer from "./FaqReducer.reducer";

const rootReducer = combineReducers({
  isLoggedIn,
  isLoading,
  token,
  PalleteReducer,
  FaqReducer,
});

export default rootReducer;
