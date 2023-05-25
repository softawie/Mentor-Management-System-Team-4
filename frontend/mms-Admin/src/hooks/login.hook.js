import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePalette } from "src/theme/theme";
import { authenticate } from "src/redux/actions/authenticate.action";
import { store } from "src/redux/store";
import Paths from "src/pages/router/paths";
import { useFormik } from "formik";
import { login } from "src/services/login";
import { showLoader, hideLoader } from "src/redux/actions/loading.action";
import { toast } from "react-toastify";

export default function useLogin() {
  const palette = usePalette();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const initialValues = { email: "", password: "" };

  const onSubmit = async (values) => {
    store.dispatch(showLoader());
    let resp = await login(values);
    if (resp.user.success) {
      setAccessToken(resp.user.accessToken);
      store.dispatch(authenticate());
      store.dispatch(hideLoader());
      navigate(Paths.home, { replace: true });
    } else {
      store.dispatch(hideLoader());
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
