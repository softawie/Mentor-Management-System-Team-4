import axios from "axios";
// import {store} from "src/redux/store";
import { BASE_URL } from "../AppConfig";
import requestInterceptor from "./interceptor";
import { PropTypes } from "prop-types";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: import.meta.env.VITE_TIMEOUT,
});

requestInterceptor(axiosClient);

export const sendRequest = async (myParams) => {
  let defaultParams = {
    url: "",
    method: "GET",
    data: null,
    basicAuth: false,
    withLoading: true,
    headers: {},
    responseType: null,
  };
  let newParam = { ...defaultParams, ...myParams };
  // eslint-disable-next-line no-useless-catch
  try {
    // newParam.headers.basicAuth = newParam.basicAuth;
    const response = await axiosClient(newParam.url, newParam);
    if (response) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

sendRequest.propTypes = {
  url: PropTypes.string,
  method: PropTypes.Method,
  data: PropTypes.object,
  basicAuth: PropTypes.boolean,
  withLoading: PropTypes.boolean,
  headers: PropTypes.object,
  responseType: PropTypes.object,
};
