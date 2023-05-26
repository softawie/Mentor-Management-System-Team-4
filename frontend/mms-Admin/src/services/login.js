import { sendRequest } from "src/network/https";
import { ENDPOINTS, METHODS } from "src/network/endpoints";
import { store } from "src/redux/store";
import {
  storeItem,
  removeItem,
  storageKeys,
  getStoredItem,
} from "src/utils/localStorage";
import { setToken, clearToken } from "src/redux/actions/token.action";
import { unAuthenticate } from "src/redux/actions/authenticate.action";

const login = async (data) => {
  try {
    const requestData = { email: data.email, password: data.password };

    const tokenInfo = await sendRequest({
      url: `${ENDPOINTS.login}`,
      method: METHODS.POST,
      data: requestData,
      basicAuth: true,
    });
    storeItem(storageKeys.token, tokenInfo.user.token);
    store.dispatch(setToken(tokenInfo.access_token));
    console.log("getStoredItem", getStoredItem(storageKeys.token));
    return tokenInfo;
  } catch (error) {
    console.log("error;", error);

    throw error;
  }
};

const logout = async () => {
  // const token = store.getState().token;
  // try {
  //   let params = {
  //     url: `${ENDPOINTS.logout}`,
  //     method: METHODS.POST,
  //     data: {
  //       token_type_hint: "access_token",
  //       token,
  //     },
  //     basicAuth: true,
  //   };
  removeItem("token");
  store.dispatch(unAuthenticate());
  store.dispatch(clearToken());
  console.log("logout done!");
  // store.dispatch(stopLoading());
  // return await sendRequest(params);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export { login, logout };
