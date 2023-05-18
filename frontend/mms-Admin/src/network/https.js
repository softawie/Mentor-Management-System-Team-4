import axios from "axios";
// import store from "src/redux/store";
import { BASE_URL } from "../AppConfig";
import requestInterceptor from "./interceptor";
import { PropTypes } from "prop-types";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: import.meta.env.REACT_APP_TIMEOUT,
});

requestInterceptor(axiosClient);

export const sendRequest = async () => {
  let defaultParams = {
    url: "",
    method: "GET",
    data: null,
    basicAuth: false,
    withLoading: true,
    headers: {},
    responseType: null,
    enableSignature: true,
  };
  try {
    // if (defaultParams.withLoading) {
    //   store.loader.setLoading(true);
    // }
    defaultParams.headers.basicAuth = defaultParams.basicAuth;
    const response = await axiosClient(defaultParams.url, defaultParams);
    if (response) {
      // if (defaultParams.withLoading) {
      //   store.loader.setLoading(false);
      // }
      if (response.status !== 200) {
        throw response;
      }
      return response.data;
    } else {
      // if (defaultParams.withLoading) {
      //   store.loader.setLoading(false);
      // }
    }
  } catch (error) {
    console.log("error;", error);
    // if (defaultParams.withLoading) {
    //   store.loader.setLoading(false);
    // }
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
