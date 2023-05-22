import { REDIRECTION_TYPE } from "../../utils/constants";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  registerData: null,
  redirection: REDIRECTION_TYPE.WAITING,
};

export default initialState;
