import { REDIRECTION_TYPE } from "../../utils/constants";

const isLogin = JSON.parse(localStorage.getItem("IS_LOGIN"));
const token = localStorage.getItem("token");

const initialState = {
  isLoggedIn: isLogin,
  isLoading: false,
  token: token,
  registerData: null,
  redirection: REDIRECTION_TYPE.WAITING,
};

export default initialState;
