import React, { lazy, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useLocation } from "react-router";
import Paths, { publicRoutes } from "./paths";
import CommonRouter from "./common";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route } from "react-router";

const BackgroundLayout = lazy(() => import("../../layouts/BackgroundLayout"));
const DashboardLayout = lazy(() => import("../../layouts/DashboardLayout"));
const Dashboard = lazy(() => import("../dashboard/Dashboard"));
const Settings = lazy(() => import("../public/settings/Settings"));
const Profile = lazy(() => import("../public/Profile"));

const ProtectedRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (publicRoutes.includes(location.pathname)) {
      navigate(Paths.home, { replace: true });
    }
  }, [location, navigate]);

  return (
    <CommonRouter>
      <Route path={Paths.home} element={<BackgroundLayout />}>
        <Route path={Paths.home} element={<DashboardLayout />}>
          <Route path={Paths.home} element={<Dashboard />} />
          <Route path={Paths.settings} element={<Settings />} />
          <Route path={Paths.profile} element={<Profile />} />
        </Route>
      </Route>
    </CommonRouter>
  );
};

export default ProtectedRouter;
