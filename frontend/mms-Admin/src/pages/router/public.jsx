import React, { lazy } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route } from "react-router";
import Paths from "./paths";
import CommonRouter from "./common";

const Login = lazy(() => import("../auth/LoginForm"));
const ForgetPassword = lazy(() => import("../auth/ForgotPasswordForm"));
const ResetPasswordForm = lazy(() => import("../auth/ResetPasswordForm"));

const PublicRouter = () => {
  return (
    <CommonRouter>
      <Route path={Paths.login} element={<Login />} />
      <Route path={Paths.forgotPassword} element={<ForgetPassword />} />
      <Route path={Paths.resetPassword} element={<ResetPasswordForm />} />
    </CommonRouter>
  );
};

export default PublicRouter;
