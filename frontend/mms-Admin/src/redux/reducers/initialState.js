import { REDIRECTION_TYPE } from "../../utils/constants";
import { storageKeys, getStoredItem } from "src/utils/localStorage";

const isLogin = JSON.parse(getStoredItem(storageKeys.IS_LOGIN));
const token = getStoredItem(storageKeys.token);

const initialState = {
  isLoggedIn: isLogin,
  isLoading: false,
  token: token,
  registerData: null,
  redirection: REDIRECTION_TYPE.WAITING,
};

export default initialState;
