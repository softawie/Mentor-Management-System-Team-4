import React, { useEffect } from "react";
import { useNavigate, useLocation, useRoutes } from "react-router";
import Paths, { publicRoutes } from "./paths";
import CommonRouter from "./common";
import pages from "..";

const Router = () => useRoutes(pages);

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
      <Router />
    </CommonRouter>
  );
};

export default ProtectedRouter;
