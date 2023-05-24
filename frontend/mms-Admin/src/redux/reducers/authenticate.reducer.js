import initialState from "./initialState";
import { AUTHENTICATE, UNAUTHENTICATE } from "../actions/actionTypes";

const authenticateReducer = (state = initialState.isLoggedIn, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return true;
    case UNAUTHENTICATE:
      return false;
    default:
      return state;
  }
};

export default authenticateReducer;
