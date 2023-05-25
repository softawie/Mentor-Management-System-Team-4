import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { usePalette } from "src/theme/theme";
import { useFormik } from "formik";
import { resetPass } from "src/services/password";
import Paths from "src/pages/router/paths";
import { showLoader, hideLoader } from "src/redux/actions/loading.action";
import { store } from "src/redux/store";

export default function useResetPass() {
  let location = useLocation();
  const token = location.state?.token;
  const initialValues = { email: "", token: token };
  const palette = usePalette();
  const navigate = useNavigate();
  const [password, setPass] = useState("");
  const onSubmit = async (values) => {
    setPass(values.password);
    store.dispatch(showLoader());
    try {
      let res = await resetPass(values);
      if (res?.success) {
        store.dispatch(hideLoader());
        toast.success(res?.message);
        navigate(Paths.home);
      } else if (res?.data?.code === 400) {
        store.dispatch(hideLoader());
        toast.error(res?.data?.message);
      } else {
        store.dispatch(hideLoader());
        toast.error(res?.message);
      }
    } catch (e) {
      store.dispatch(hideLoader());
      toast.error(e.response?.data?.message);
      console.log("err:", e);
    }
  };

  const { setFieldValue, handleSubmit, values } = useFormik({
    initialValues,
    onSubmit,
  });

  return {
    onSubmit,
    setFieldValue,
    handleSubmit,
    palette,
    initialValues,
    password,
    values,
    token,
  };
}
