import AuthLayout from "src/layouts/AuthLayout";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";


export default {
    element: <AuthLayout/>,
    path: "login",
    children: [
        {
            index: true,
            element: <LoginForm />
        },
        {
            path: "forgot-password",
            element: <ForgotPasswordForm />
        },
        {
            path: "reset-password",
            element: <ResetPasswordForm />
        }
    ]
}