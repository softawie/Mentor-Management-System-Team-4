import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePalette } from "src/theme/theme";
import { useFormik } from "formik";
import { forgotPass } from "src/services/password";
import Paths from "src/pages/router/paths";
import { useDispatch } from "react-redux";
import { enableLoader, disableLoader } from "src/redux/feature/loaderSlice";

export default function useForgotPass() {
  const initialValues = { email: "" };
  const palette = usePalette();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    setEmail(values.email);
    dispatch(enableLoader());
    let resp = await forgotPass(values);
    toast.success("You will receive a mail");
    if (resp.success) {
      navigate(`${Paths.resetPassword}?token=${resp.passToken} `, {
        state: { token: resp.passToken },
      });
      dispatch(disableLoader());
    } else {
      toast.error(resp.error);
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
    email,
    values,
  };
}
