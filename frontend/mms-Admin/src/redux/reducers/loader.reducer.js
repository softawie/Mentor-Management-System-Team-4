import initialState from "./initialState";
import { STOPLOADING, SETLOADING } from "../actions/actionTypes";

const loaderReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case SETLOADING:
      return true;
    case STOPLOADING:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
