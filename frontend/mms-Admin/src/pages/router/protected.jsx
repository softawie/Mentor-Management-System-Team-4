import React, { lazy, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Paths, { publicRoutes } from "./paths";
import CommonRouter from "./common";
import { Route } from "react-router";

const DashboardLayout = lazy(() => import("../../layouts/DashboardLayout"));
const Dashboard = lazy(() => import("../dashboard/Dashboard"));
const Settings = lazy(() => import("../public/settings/Settings"));
const Profile = lazy(() => import("../public/Profile"));
const Mentors = lazy(() => import("../dashboard/mentors/ListMentor"));

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
      <Route path={Paths.home} element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={Paths.settings} element={<Settings />} />
        <Route path={Paths.profile} element={<Profile />} />
        <Route path={Paths.mentors} element={<Mentors />} />
      </Route>
    </CommonRouter>
  );
};

export default ProtectedRouter;
