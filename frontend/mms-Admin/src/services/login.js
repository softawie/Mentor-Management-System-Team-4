import { sendRequest } from "src/network/https";
import { ENDPOINTS, METHODS } from "src/network/endpoints";
import store from "src/redux/store";
import { storeItem } from "src/utils/localStorage";
import { setToken } from "src/redux/actions/token.action";

const login = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const requestData =
      // username: data.userName,
      // password: data.password,
      {
        email: "rkdeploy@gmail.com",
        password: "V1430V5MaGHm1SCJspw8Tg==",
      };

    const tokenInfo = await sendRequest({
      url: `${ENDPOINTS.login}`,
      method: METHODS.POST,
      data: requestData,
      basicAuth: true,
    });
    storeItem(tokenInfo.token, tokenInfo.access_token);
    store.dispatch(setToken(tokenInfo.access_token));
    return tokenInfo;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  const token = store.getState().token;
  try {
    let params = {
      url: `${ENDPOINTS.logout}`,
      method: METHODS.POST,
      data: {
        token_type_hint: "access_token",
        token,
      },
      basicAuth: true,
    };
    return await sendRequest(params);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { login, logout };
