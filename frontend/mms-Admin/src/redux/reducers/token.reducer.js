import initialState from "./initialState";
import { CLEARTOKEN, SETTOKEN } from "../actions/actionTypes";

const tokenReducer = (state = initialState.token, action) => {
  switch (action.type) {
    case SETTOKEN:
      return action.data;
    case CLEARTOKEN:
      return null;
    default:
      return state;
  }
};

export default tokenReducer;
