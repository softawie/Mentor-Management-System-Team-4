import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Paths from "./paths";

const BackgroundLayout = lazy(() => import("../../layouts/BackgroundLayout"));
const StatusPage = lazy(() =>
  import("../../components/statusPage/status-page.component")
);

const CommonRouter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <Suspense fallback={""}>
      <Routes>
        <Route path={Paths.home} element={<BackgroundLayout />}>
          {/*  */}
          {children}
          {/* Common paths */}
          <Route
            path={Paths[403]}
            element={
              <StatusPage
                code="403"
                title={"403"}
                helperText={""}
                btnText={"Go to Dashboard"}
              />
            }
          />
          <Route
            path={Paths.systemError}
            element={
              <StatusPage
                code=""
                title={"System error"}
                helperText={""}
                btnText={"Go to Dashboard"}
              />
            }
          />
          <Route
            path={Paths.pageNotFound}
            element={
              <StatusPage
                code="404"
                title={"Page not found"}
                helperText={""}
                btnText={"Go to Dashboard"}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default CommonRouter;
