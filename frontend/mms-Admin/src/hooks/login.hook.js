import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePalette } from "src/theme/theme";
import { loginMock } from "src/mocks/login";
import { authenticate } from "src/redux/actions/authenticate.action";
import store from "src/redux/store";
import Paths from "src/pages/router/paths";
import { useFormik } from "formik";
// import { login } from "src/services/login";

export default function useLogin() {
  const palette = usePalette();
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const doLogin = async () => {
    const res = await loginMock(); // TODO: replace this service with real service login()
    console.log("res", res);
    store.dispatch(authenticate());
    toast.success("Login Successful");
    navigate(Paths.home, { replace: true });
  };
  const formik = useFormik({ initialValues, doLogin });

  return { doLogin, palette, navigate, initialValues, formik };
}
