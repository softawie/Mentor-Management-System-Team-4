import React, { lazy, Suspense } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router";
import Paths from "./paths";
import { BackgroundLayout, DashboardLayout } from "../../layouts";
import Dashboard from "../dashboard/Dashboard";

const StatusPage = lazy(() =>
  import("../../components/statusPage/status-page.component")
);
const Settings = lazy(() => import("../public/settings/Settings"));
const Profile = lazy(() => import("../public/Profile"));

const CommonRouter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <Suspense fallback={""}>
      <Routes>
        {/*  */}
        {children}
        <Route path={Paths.home} element={<BackgroundLayout />}>
          <Route path={Paths.home} element={<DashboardLayout />}>
            <Route path={Paths.home} element={<Dashboard />} />
            <Route path={Paths.settings} element={<Settings />} />
            <Route path={Paths.profile} element={<Profile />} />
          </Route>
        </Route>
        {/* Common paths */}
        <Route
          path={Paths[403]}
          element={
            <StatusPage code="403" title={"403"} helperText={""} btnText={""} />
          }
        />
        <Route
          path={Paths.systemError}
          element={
            <StatusPage code="403" title={"403"} helperText={""} btnText={""} />
          }
        />
        <Route
          path={Paths.pageNotFound}
          element={
            <StatusPage code="403" title={"403"} helperText={""} btnText={""} />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default CommonRouter;
