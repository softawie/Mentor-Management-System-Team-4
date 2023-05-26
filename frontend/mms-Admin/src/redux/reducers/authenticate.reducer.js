import initialState from "./initialState";
import {
  AUTHENTICATE,
  UNAUTHENTICATE,
  IS_LOGED_IN,
} from "../actions/actionTypes";

const authenticateReducer = (state = initialState.isLoggedIn, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return true;
    case UNAUTHENTICATE:
      return false;
    case IS_LOGED_IN:
      return action.data;
    default:
      return state;
  }
};

export default authenticateReducer;
