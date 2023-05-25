import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePalette } from "src/theme/theme";
import { useFormik } from "formik";
import { forgotPass } from "src/services/forgotpass";
import Paths from "src/pages/router/paths";
import { showLoader, hideLoader } from "src/redux/actions/loading.action";
import { store } from "src/redux/store";

export default function useForgotPass() {
  const initialValues = { email: "" };
  const palette = usePalette();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = async (values) => {
    setEmail(values.email);
    store.dispatch(showLoader());
    let resp = await forgotPass(values);
    toast.success("You will receive a mail");
    if (resp.success) {
      navigate(`${Paths.resetPassword}?token=${resp.passToken} `, {
        state: { token: resp.passToken },
      });
      store.dispatch(hideLoader());
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
