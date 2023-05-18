import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
// eslint-disable-next-line import/no-extraneous-dependencies
import { persistReducer } from "redux-persist";
// eslint-disable-next-line import/no-extraneous-dependencies
import storage from "redux-persist/lib/storage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
