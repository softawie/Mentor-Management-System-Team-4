import axios from "axios";
import requestInterceptor from "./interceptor";
import { PropTypes } from "prop-types";
import { BASE_URL } from "src/utils/constants";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 301800,
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
