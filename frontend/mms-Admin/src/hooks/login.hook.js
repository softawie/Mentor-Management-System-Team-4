import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePalette } from "src/theme/theme";
// import { authenticate } from "src/redux/actions/authenticate.action";
// import { store } from "src/redux/store";
import Paths from "src/pages/router/paths";
import { useFormik } from "formik";
import { login } from "src/services/login";
// import { showLoader, hideLoader } from "src/redux/actions/loading.action";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "src/redux/feature/loaderSlice";
import { authenticate } from "src/redux/feature/authSlice";
export default function useLogin() {
  const palette = usePalette();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    // store.dispatch(showLoader());
    dispatch(enableLoader());
    let resp = await login(values);
    if (resp.user.success) {
      setAccessToken(resp.user.accessToken);
      dispatch(authenticate());
      // store.dispatch(authenticate());
      // store.dispatch(hideLoader());
      dispatch(disableLoader());
      navigate(Paths.home, { replace: true });
    } else {
      dispatch(disableLoader());
      // store.dispatch(hideLoader());
      toast.error(resp.user.error);
    }
  };
  const { handleChange, handleSubmit, setFieldValue, values } = useFormik({
    initialValues,
    onSubmit,
  });

  return {
    palette,
    navigate,
    initialValues,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    accessToken,
  };
}
