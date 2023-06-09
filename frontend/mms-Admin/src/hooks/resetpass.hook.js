import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { usePalette } from "src/theme/theme";
import { useFormik } from "formik";
import { resetPass } from "src/services/password";
import Paths from "src/pages/router/paths";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "src/redux/feature/loaderSlice";
export default function useResetPass() {
  let location = useLocation();
  const token = location.state?.token;
  const initialValues = { email: "", token: token };
  const palette = usePalette();
  const navigate = useNavigate();
  const [password, setPass] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setPass(values.password);
    dispatch(enableLoader());
    try {
      let res = await resetPass(values);
      if (res?.success) {
        dispatch(disableLoader());

        toast.success(res?.message);
        navigate(Paths.home);
      } else if (res?.data?.code === 400) {
        dispatch(disableLoader());
        toast.error(res?.data?.message);
      } else {
        dispatch(disableLoader());
        toast.error(res?.message);
      }
    } catch (e) {
      dispatch(disableLoader());
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
