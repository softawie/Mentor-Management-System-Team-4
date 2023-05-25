import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePalette } from "src/theme/theme";
import { useFormik } from "formik";
import { forgotPass } from "src/services/password";
import Paths from "src/pages/router/paths";
import { showLoader, hideLoader } from "src/redux/actions/loading.action";
import { store } from "src/redux/store";

export default function useForgotPass() {
  const initialValues = { email: "" };
  const palette = usePalette();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = async (values) => {
    setEmail(values);
    let resp = await forgotPass(values);
    if (resp.user.success) {
      store.dispatch(showLoader());
      toast.success("You will receive a mail");
      store.dispatch(hideLoader());
      navigate(Paths.home, { replace: true });
    } else {
      store.dispatch(hideLoader());
      toast.error(resp.user.error);
    }
  };
  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
  });

  return {
    onSubmit,
    handleChange,
    handleSubmit,
    palette,
    navigate,
    initialValues,
    email,
  };
}
