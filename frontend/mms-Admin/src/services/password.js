import { sendRequest } from "src/network/https";
import { ENDPOINTS, METHODS } from "src/network/endpoints";
import { store } from "src/redux/store";
import { storeItem } from "src/utils/localStorage";
import { setToken } from "src/redux/actions/token.action";

const forgotPass = async (data) => {
  try {
    const requestData = { email: data.email };

    const tokenInfo = await sendRequest({
      url: `${ENDPOINTS.forgotPass}`,
      method: METHODS.POST,
      data: requestData,
    });
    storeItem(tokenInfo.token, tokenInfo.access_token);
    store.dispatch(setToken(tokenInfo.access_token));

    return tokenInfo;
  } catch (error) {
    console.log("error;", error);

    throw error;
  }
};

const resetPass = async (data) => {
  try {
    const requestData = { newPass: data.newPass };

    const tokenInfo = await sendRequest({
      url: `${ENDPOINTS.resetPass}`,
      method: METHODS.POST,
      data: requestData,
    });
    storeItem(tokenInfo.token, tokenInfo.access_token);
    store.dispatch(setToken(tokenInfo.access_token));

    return tokenInfo;
  } catch (error) {
    console.log("error;", error);

    throw error;
  }
};

export { forgotPass, resetPass };
