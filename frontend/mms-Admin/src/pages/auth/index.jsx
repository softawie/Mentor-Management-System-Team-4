import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import SignupForm from "./SignupForm";

const routes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordForm />,
    },
    {
      path: "/reset-password",
      element: <ResetPasswordForm />,
    },
    {
      path: "/signup",
      element: <SignupForm />,
    },
  ],
};

export default routes;
