import { useNavigate } from "react-router-dom";
import { usePalette } from "src/theme/theme";
// import { loginMock } from "src/mocks/login.mock";
import { authenticate } from "src/redux/actions/authenticate.action";
import { store } from "src/redux/store";
import Paths from "src/pages/router/paths";
import { useFormik } from "formik";
import { login } from "src/services/login";
import { showLoader, hideLoader } from "src/redux/actions/loading.action";
export default function useLogin() {
  const palette = usePalette();
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };

  const onSubmit = async (values) => {
    store.dispatch(showLoader());
    await login(values);
    store.dispatch(authenticate());
    store.dispatch(hideLoader());
    navigate(Paths.home, { replace: true });
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
  };
}
