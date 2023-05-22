import initialState from "./initialState";
import { HIDELOADER, SHOWLOADER } from "../actions/actionTypes";

const loaderReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case SHOWLOADER:
      return true;
    case HIDELOADER:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
