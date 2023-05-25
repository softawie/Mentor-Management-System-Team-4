import { v1 as uuidv1 } from "uuid";
import { useNavigate } from "react-router";
import Paths from "src/pages/router/paths";

const logoutProcess = () => {
  const navigate = useNavigate();
  navigate(Paths.home, { replace: true });
  // useSharedDataStore.setState({ accessData: null });
  // deleteCookieHelper(LocalStorageKeysEnum.token);
  // toast.error(t.shared.expiredSession);
};

function requestInterceptor(axiosInstance) {
  function isTokenExpiredError(errorResponse) {
    return errorResponse && errorResponse.status === 401;
  }

  axiosInstance.interceptors.request.use(
    (config) => {
      const modifiedConfig = config;
      modifiedConfig.headers["X-Correlation-ID"] = uuidv1();
      modifiedConfig.headers.accept = "application/json";
      return modifiedConfig;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      // If the request succeeds, we don't have to do anything and just return the response
      return response;
    },
    function (error) {
      const errorResponse = error.response;
      if (
        isTokenExpiredError(errorResponse) &&
        !(
          error.config.url.includes("identity") ||
          error.config.url.includes("registration")
        )
      ) {
        return logoutProcess();
      }
      // If the error is due to other reasons, we just throw it back to axios
      return Promise.reject(errorResponse);
    }
  );
}

export default requestInterceptor;
