import { REDIRECTION_TYPE } from "../../utils/constants";

const isLogin = JSON.parse(localStorage.getItem("IS_LOGIN"));
const token = localStorage.getItem("token");

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  registerData: null,
  redirection: REDIRECTION_TYPE.WAITING,
};

export default initialState;
