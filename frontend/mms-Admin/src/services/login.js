import { sendRequest } from "src/network/https";
import { ENDPOINTS, METHODS } from "src/network/endpoints";
import {
  storeItem,
  removeItem,
  storageKeys,
  getStoredItem,
} from "src/utils/localStorage";
import { useDispatch } from "react-redux";
import { unAuthenticate } from "src/redux/feature/authSlice";

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
    // store.dispatch(setToken(tokenInfo.access_token));
    console.log("getStoredItem", getStoredItem(storageKeys.token));
    return tokenInfo;
  } catch (error) {
    console.log("error;", error);

    throw error;
  }
};

const logout = async () => {
  const dispatch = useDispatch();

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
  dispatch(unAuthenticate());
  // store.dispatch(unAuthenticate());
  // store.dispatch(clearToken());
  console.log("logout done!");
  // store.dispatch(stopLoading());
  // return await sendRequest(params);
  // } catch (err) {
  //   return Promise.reject(err);
  // }
};

export { login, logout };
